/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useCallback } from 'react';
import { Header } from './components/Header';
import { WeatherCard } from './components/WeatherCard';
import { OutfitRecommender } from './components/OutfitRecommender';
import { OutfitChecklist } from './components/OutfitChecklist';
import { TemperatureGuideModal } from './components/TemperatureGuideModal';
import { ApiKeyModal } from './components/ApiKeyModal';
import {
  DailyForecast,
  HourlyForecast,
  OpenWeatherData,
  OutfitItem,
} from './types/weather';
import { getWeatherData, getStoredApiKey } from './services/weatherApi';
import { CloudSun, Sparkles, BookOpen, ShieldCheck } from 'lucide-react';

const CHECKLIST_STORAGE_KEY = 'ootd_checked_items_v1';

export default function App() {
  const [selectedCity, setSelectedCity] = useState('서울');
  const [weather, setWeather] = useState<OpenWeatherData | null>(null);
  const [hourly, setHourly] = useState<HourlyForecast[]>([]);
  const [daily, setDaily] = useState<DailyForecast[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [usingOpenWeather, setUsingOpenWeather] = useState(false);

  // Modals
  const [isApiKeyModalOpen, setIsApiKeyModalOpen] = useState(false);
  const [isGuideModalOpen, setIsGuideModalOpen] = useState(false);

  // Checklist state
  const [checkedItems, setCheckedItems] = useState<OutfitItem[]>(() => {
    try {
      const saved = localStorage.getItem(CHECKLIST_STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const checkedItemIds = new Set(checkedItems.map((i) => i.id));

  const loadWeather = useCallback(async (cityOrCoords: { city?: string; lat?: number; lon?: number }) => {
    setLoading(true);
    setError(null);
    try {
      const data = await getWeatherData(cityOrCoords);
      setWeather(data.current);
      setHourly(data.hourly);
      setDaily(data.daily);
      setUsingOpenWeather(data.usingOpenWeather);
    } catch (err: any) {
      console.error('날씨 데이터 로딩 실패:', err);
      setError('날씨 데이터를 불러오지 못했습니다. 네트워크 연결을 확인해주세요.');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadWeather({ city: selectedCity });
  }, [selectedCity, loadWeather]);

  // Persist checklist
  useEffect(() => {
    try {
      localStorage.setItem(CHECKLIST_STORAGE_KEY, JSON.stringify(checkedItems));
    } catch (e) {
      console.warn('Failed to save checklist:', e);
    }
  }, [checkedItems]);

  const handleSelectCity = (cityName: string) => {
    setSelectedCity(cityName);
  };

  const handleSearchCity = (query: string) => {
    setSelectedCity(query);
  };

  const handleUseCurrentLocation = () => {
    if (!navigator.geolocation) {
      alert('현재 브라우저에서 위치 서비스를 지원하지 않습니다.');
      return;
    }

    setLoading(true);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setSelectedCity('현재 위치');
        loadWeather({ lat: pos.coords.latitude, lon: pos.coords.longitude });
      },
      (err) => {
        console.warn('GPS 위치 권한 거부 또는 실패:', err);
        alert('위치 권한을 허용해주시거나 도시 이름을 직접 검색해주세요.');
        setLoading(false);
      },
      { timeout: 10000 }
    );
  };

  const handleToggleChecklistItem = (item: OutfitItem) => {
    setCheckedItems((prev) => {
      const exists = prev.some((i) => i.id === item.id);
      if (exists) {
        return prev.filter((i) => i.id !== item.id);
      } else {
        return [...prev, item];
      }
    });
  };

  const handleClearChecklist = () => {
    setCheckedItems([]);
  };

  const handleScrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-stone-50 text-stone-900">
      {/* Top Bar adhering to Top Bar Contract */}
      <Header
        onOpenApiKeyModal={() => setIsApiKeyModalOpen(true)}
        onOpenGuideModal={() => setIsGuideModalOpen(true)}
        onScrollToSection={handleScrollToSection}
        usingOpenWeather={usingOpenWeather}
      />

      {/* Main Content Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 space-y-12">
        {/* Hero Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-stone-200">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-stone-500 uppercase mb-2">
              <CloudSun className="w-4 h-4 text-amber-600" />
              <span>실시간 날씨 기반 맞춤 패션 코디</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-stone-900 leading-tight">
              오늘 뭐 입지? <br className="hidden sm:inline" />
              날씨와 체감온도에 맞춘 옷차림
            </h1>
            <p className="text-sm sm:text-base text-stone-600 mt-2 max-w-2xl leading-relaxed">
              OpenWeatherMap 실시간 기상 데이터와 풍속, 습도, 강수 확률을 분석하여 남성과 여성을 위한 최적의 스타일과 필수 외출 아이템을 제안합니다.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => setIsGuideModalOpen(true)}
              className="flex items-center gap-2 px-4 py-2.5 text-xs font-semibold bg-white border border-stone-200 text-stone-800 rounded-xl hover:bg-stone-100 hover:border-stone-300 transition-all shadow-xs"
            >
              <BookOpen className="w-3.5 h-3.5 text-stone-600" />
              <span>기온별 옷차림 표 전체보기</span>
            </button>
          </div>
        </div>

        {/* Weather Display */}
        <section>
          <WeatherCard
            weather={weather}
            hourly={hourly}
            daily={daily}
            loading={loading}
            error={error}
            selectedCity={selectedCity}
            onSelectCity={handleSelectCity}
            onSearchCity={handleSearchCity}
            onUseCurrentLocation={handleUseCurrentLocation}
            onRefresh={() => loadWeather({ city: selectedCity })}
            usingOpenWeather={usingOpenWeather}
            onOpenApiKeyModal={() => setIsApiKeyModalOpen(true)}
          />
        </section>

        {/* Outfit Recommender (Men & Women) */}
        {weather && (
          <section>
            <OutfitRecommender
              currentTemp={weather.temp}
              feelsLike={weather.feelsLike}
              conditionId={weather.conditionId}
              rainChance={weather.rainChance ?? 0}
              onAddToChecklist={handleToggleChecklistItem}
              checkedItemIds={checkedItemIds}
            />
          </section>
        )}

        {/* Interactive Packing Checklist */}
        <section>
          <OutfitChecklist
            checkedItems={checkedItems}
            onToggleItem={handleToggleChecklistItem}
            onClearAll={handleClearChecklist}
          />
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-16 bg-white border-t border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-stone-700">OOTD Weather</span>
            <span aria-hidden="true">·</span>
            <span>기상청 기온별 옷차림 표준 가이드라인 적용</span>
          </div>
          <div className="flex items-center gap-4">
            <span>Powered by OpenWeatherMap API</span>
            <span aria-hidden="true">·</span>
            <button
              onClick={() => setIsApiKeyModalOpen(true)}
              className="text-stone-700 hover:underline font-medium"
            >
              API Key 설정
            </button>
          </div>
        </div>
      </footer>

      {/* Modals */}
      <TemperatureGuideModal
        isOpen={isGuideModalOpen}
        onClose={() => setIsGuideModalOpen(false)}
        currentTemp={weather?.temp}
      />

      <ApiKeyModal
        isOpen={isApiKeyModalOpen}
        onClose={() => setIsApiKeyModalOpen(false)}
        onKeyUpdated={() => loadWeather({ city: selectedCity })}
        usingOpenWeather={usingOpenWeather}
      />
    </div>
  );
}
