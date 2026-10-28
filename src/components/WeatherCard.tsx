/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import {
  Sun,
  Cloud,
  CloudRain,
  CloudSnow,
  CloudLightning,
  Wind,
  Droplets,
  Thermometer,
  MapPin,
  Search,
  Navigation,
  RefreshCw,
  Clock,
  Calendar,
  AlertTriangle,
} from 'lucide-react';
import { DailyForecast, HourlyForecast, OpenWeatherData } from '../types/weather';
import { CITY_PRESETS } from '../services/weatherApi';

interface WeatherCardProps {
  weather: OpenWeatherData | null;
  hourly: HourlyForecast[];
  daily: DailyForecast[];
  loading: boolean;
  error: string | null;
  selectedCity: string;
  onSelectCity: (cityName: string) => void;
  onSearchCity: (query: string) => void;
  onUseCurrentLocation: () => void;
  onRefresh: () => void;
  usingOpenWeather: boolean;
  onOpenApiKeyModal: () => void;
}

export const WeatherCard: React.FC<WeatherCardProps> = ({
  weather,
  hourly,
  daily,
  loading,
  error,
  selectedCity,
  onSelectCity,
  onSearchCity,
  onUseCurrentLocation,
  onRefresh,
  usingOpenWeather,
  onOpenApiKeyModal,
}) => {
  const [searchInput, setSearchInput] = useState('');

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchInput.trim()) {
      onSearchCity(searchInput.trim());
      setSearchInput('');
    }
  };

  const getWeatherIcon = (conditionId: number, className = 'w-8 h-8') => {
    if (conditionId >= 200 && conditionId < 300) {
      return <CloudLightning className={`${className} text-amber-500`} />;
    }
    if (conditionId >= 300 && conditionId < 600) {
      return <CloudRain className={`${className} text-sky-500`} />;
    }
    if (conditionId >= 600 && conditionId < 700) {
      return <CloudSnow className={`${className} text-indigo-400`} />;
    }
    if (conditionId >= 700 && conditionId < 800) {
      return <Wind className={`${className} text-stone-400`} />;
    }
    if (conditionId === 800) {
      return <Sun className={`${className} text-amber-500`} />;
    }
    return <Cloud className={`${className} text-stone-400`} />;
  };

  const formattedDate = new Date().toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long',
  });

  return (
    <div id="weather-section" className="w-full">
      {/* City Switcher & Search Bar */}
      <div className="mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        {/* Preset City Buttons */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1.5 md:pb-0 scrollbar-none">
          {CITY_PRESETS.slice(0, 7).map((c) => {
            const shortName = c.name.split(' (')[0];
            const isSelected = selectedCity.toLowerCase().includes(shortName.toLowerCase());
            return (
              <button
                key={c.query}
                onClick={() => onSelectCity(shortName)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 border ${
                  isSelected
                    ? 'bg-stone-900 text-stone-50 border-stone-900 shadow-xs'
                    : 'bg-white text-stone-700 border-stone-200 hover:bg-stone-100 hover:border-stone-300'
                }`}
              >
                {shortName}
              </button>
            );
          })}
        </div>

        {/* Search input + GPS button */}
        <div className="flex items-center gap-2">
          <form onSubmit={handleSearchSubmit} className="relative flex-1 sm:w-60">
            <input
              type="text"
              placeholder="도시 검색 (예: 제주, 부산, Tokyo)..."
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              className="w-full pl-8 pr-3 py-1.5 text-xs bg-white border border-stone-200 rounded-lg text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-1 focus:ring-stone-900 focus:border-stone-900"
            />
            <Search className="w-3.5 h-3.5 text-stone-400 absolute left-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          </form>

          <button
            onClick={onUseCurrentLocation}
            title="현재 내 위치 날씨 (GPS)"
            className="flex items-center gap-1 px-2.5 py-1.5 text-xs font-medium bg-white text-stone-700 border border-stone-200 rounded-lg hover:bg-stone-100 transition-colors whitespace-nowrap shrink-0"
          >
            <Navigation className="w-3.5 h-3.5 text-sky-600" />
            <span className="hidden sm:inline">내 위치</span>
          </button>

          <button
            onClick={onRefresh}
            title="새로고침"
            disabled={loading}
            className="p-1.5 text-stone-600 bg-white border border-stone-200 rounded-lg hover:bg-stone-100 transition-colors shrink-0 disabled:opacity-50"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} />
          </button>
        </div>
      </div>

      {/* Main Weather Card */}
      <div className="bg-white border border-stone-200 rounded-2xl p-6 sm:p-8 shadow-xs relative overflow-hidden">
        {/* Subtle decorative gradient background tint based on weather */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-amber-50/50 via-sky-50/30 to-transparent pointer-events-none rounded-full blur-2xl -mr-20 -mt-20" />

        {loading && !weather ? (
          <div className="py-20 flex flex-col items-center justify-center text-center">
            <RefreshCw className="w-8 h-8 text-stone-400 animate-spin mb-3" />
            <p className="text-sm font-medium text-stone-600">실시간 날씨 정보를 가져오는 중입니다...</p>
          </div>
        ) : error && !weather ? (
          <div className="py-16 text-center">
            <AlertTriangle className="w-8 h-8 text-amber-500 mx-auto mb-2" />
            <p className="text-sm font-semibold text-stone-900 mb-1">{error}</p>
            <button
              onClick={onRefresh}
              className="mt-3 px-4 py-2 text-xs font-medium text-white bg-stone-900 rounded-lg hover:bg-stone-800"
            >
              다시 시도
            </button>
          </div>
        ) : weather ? (
          <div>
            {/* Top Info Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-5 border-b border-stone-100">
              <div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-rose-500" />
                  <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-stone-900">
                    {weather.name}
                  </h2>
                </div>
                <div className="flex items-center gap-2 text-xs text-stone-500 mt-1">
                  <span>{formattedDate}</span>
                  <span aria-hidden="true">·</span>
                  <span>{weather.description}</span>
                </div>
              </div>

              {/* Data Source Badge */}
              <div className="flex items-center gap-2">
                <button
                  onClick={onOpenApiKeyModal}
                  className="flex items-center gap-1.5 text-xs text-stone-600 hover:text-stone-900 transition-colors"
                >
                  <span className={`w-2 h-2 rounded-full ${usingOpenWeather ? 'bg-amber-500' : 'bg-sky-500'}`} />
                  <span>데이터 출처: {weather.source}</span>
                  <span className="text-[11px] text-stone-400 underline ml-0.5">설정</span>
                </button>
              </div>
            </div>

            {/* Weather Metric Showcase */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center mb-8">
              {/* Primary Temperature */}
              <div className="md:col-span-5 flex items-center gap-5">
                <div className="p-3.5 bg-stone-50 border border-stone-200/60 rounded-2xl shrink-0">
                  {getWeatherIcon(weather.conditionId, 'w-12 h-12')}
                </div>
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl sm:text-6xl font-bold tracking-tight text-stone-900 tabular-nums">
                      {Math.round(weather.temp)}°
                    </span>
                    <span className="text-lg text-stone-500 font-medium">C</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-stone-500 mt-1">
                    <span>체감 <strong className="text-stone-800 font-semibold tabular-nums">{weather.feelsLike}°C</strong></span>
                    <span aria-hidden="true">·</span>
                    <span>최저 <span className="text-sky-700 font-medium tabular-nums">{weather.tempMin}°</span> / 최고 <span className="text-rose-700 font-medium tabular-nums">{weather.tempMax}°</span></span>
                  </div>
                </div>
              </div>

              {/* Weather Sub-metrics */}
              <div className="md:col-span-7 grid grid-cols-3 gap-3">
                <div className="p-3.5 bg-stone-50 rounded-xl border border-stone-100 flex flex-col justify-between">
                  <div className="flex items-center justify-between text-stone-500 mb-2">
                    <span className="text-xs font-medium">습도</span>
                    <Droplets className="w-3.5 h-3.5 text-sky-500" />
                  </div>
                  <p className="text-lg font-bold text-stone-900 tabular-nums">{weather.humidity}%</p>
                  <span className="text-[11px] text-stone-500 mt-1">
                    {weather.humidity > 70 ? '습한 편' : weather.humidity < 40 ? '건조함' : '쾌적'}
                  </span>
                </div>

                <div className="p-3.5 bg-stone-50 rounded-xl border border-stone-100 flex flex-col justify-between">
                  <div className="flex items-center justify-between text-stone-500 mb-2">
                    <span className="text-xs font-medium">풍속</span>
                    <Wind className="w-3.5 h-3.5 text-teal-600" />
                  </div>
                  <p className="text-lg font-bold text-stone-900 tabular-nums">{weather.windSpeed} <span className="text-xs font-normal text-stone-500">m/s</span></p>
                  <span className="text-[11px] text-stone-500 mt-1">
                    {weather.windSpeed > 7 ? '강한 바람' : weather.windSpeed > 3 ? '약간 바람' : '잔잔함'}
                  </span>
                </div>

                <div className="p-3.5 bg-stone-50 rounded-xl border border-stone-100 flex flex-col justify-between">
                  <div className="flex items-center justify-between text-stone-500 mb-2">
                    <span className="text-xs font-medium">강수 확률</span>
                    <CloudRain className="w-3.5 h-3.5 text-indigo-500" />
                  </div>
                  <p className="text-lg font-bold text-stone-900 tabular-nums">{weather.rainChance ?? 10}%</p>
                  <span className="text-[11px] text-stone-500 mt-1">
                    {(weather.rainChance ?? 0) >= 50 ? '우산 필수' : '비 없음'}
                  </span>
                </div>
              </div>
            </div>

            {/* Hourly Forecast */}
            {hourly.length > 0 && (
              <div className="pt-6 border-t border-stone-100">
                <div className="flex items-center gap-2 mb-3 text-xs font-semibold text-stone-600 uppercase tracking-wider">
                  <Clock className="w-3.5 h-3.5" />
                  <span>오늘의 시간대별 기온 예보</span>
                </div>
                <div className="grid grid-cols-4 sm:grid-cols-8 gap-2">
                  {hourly.map((h, i) => (
                    <div
                      key={i}
                      className="flex flex-col items-center justify-center p-2.5 rounded-xl bg-stone-50/70 border border-stone-100 text-center transition-colors hover:bg-stone-100"
                    >
                      <span className="text-xs text-stone-500 mb-1">{h.time}</span>
                      <div className="my-1">
                        {getWeatherIcon(
                          h.icon.includes('10') ? 500 : h.icon.includes('13') ? 600 : h.icon.includes('01') ? 800 : 802,
                          'w-5 h-5'
                        )}
                      </div>
                      <span className="text-sm font-bold text-stone-900 tabular-nums">{h.temp}°</span>
                      <span className="text-[10px] text-sky-600 font-medium tabular-nums mt-0.5">{h.pop}%</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 5-day daily forecast */}
            {daily.length > 0 && (
              <div className="mt-5 pt-4 border-t border-stone-100 flex flex-wrap items-center justify-between gap-2 text-xs text-stone-600">
                <div className="flex items-center gap-1.5 font-medium text-stone-700">
                  <Calendar className="w-3.5 h-3.5 text-stone-500" />
                  <span>주간 전망:</span>
                </div>
                <div className="flex flex-wrap items-center gap-4">
                  {daily.map((d, idx) => (
                    <div key={idx} className="flex items-center gap-1.5">
                      <span className="font-semibold text-stone-800">{d.day}</span>
                      <span className="text-stone-400">({d.dateStr})</span>
                      <span className="text-stone-700 font-medium tabular-nums">{d.tempMin}° / {d.tempMax}°</span>
                      <span className="text-stone-500">· {d.condition}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ) : null}
      </div>
    </div>
  );
};
