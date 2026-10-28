/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import {
  Gender,
  StyleCategory,
  ThermalSensitivity,
  OutfitItem,
} from '../types/weather';
import {
  getOutfitRecommendation,
  getStyleLabel,
} from '../data/outfitData';
import {
  Sparkles,
  Shirt,
  Layers,
  Footprints,
  Compass,
  AlertCircle,
  CheckCircle2,
  SlidersHorizontal,
  Copy,
  Check,
} from 'lucide-react';

interface OutfitRecommenderProps {
  currentTemp: number;
  feelsLike: number;
  conditionId: number;
  rainChance: number;
  onAddToChecklist: (item: OutfitItem) => void;
  checkedItemIds: Set<string>;
}

export const OutfitRecommender: React.FC<OutfitRecommenderProps> = ({
  currentTemp,
  feelsLike,
  conditionId,
  rainChance,
  onAddToChecklist,
  checkedItemIds,
}) => {
  const [selectedGender, setSelectedGender] = useState<Gender | 'both'>('men');
  const [selectedStyle, setSelectedStyle] = useState<StyleCategory>('casual');
  const [sensitivity, setSensitivity] = useState<ThermalSensitivity>('normal');
  const [copiedColorHex, setCopiedColorHex] = useState<string | null>(null);

  const menRecommendation = getOutfitRecommendation(
    currentTemp,
    feelsLike,
    conditionId,
    'men',
    selectedStyle,
    sensitivity,
    rainChance
  );

  const womenRecommendation = getOutfitRecommendation(
    currentTemp,
    feelsLike,
    conditionId,
    'women',
    selectedStyle,
    sensitivity,
    rainChance
  );

  const activeRec = selectedGender === 'women' ? womenRecommendation : menRecommendation;

  const handleCopyHex = (hex: string) => {
    navigator.clipboard?.writeText(hex);
    setCopiedColorHex(hex);
    setTimeout(() => setCopiedColorHex(null), 1500);
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'outer':
        return <Layers className="w-4 h-4 text-amber-700" />;
      case 'top':
        return <Shirt className="w-4 h-4 text-sky-700" />;
      case 'bottom':
        return <Layers className="w-4 h-4 text-emerald-700" />;
      case 'shoes':
        return <Footprints className="w-4 h-4 text-stone-700" />;
      default:
        return <Compass className="w-4 h-4 text-purple-700" />;
    }
  };

  const renderRecommendationCard = (rec: typeof menRecommendation, titleGender: '남성' | '여성') => {
    return (
      <div className="bg-white border border-stone-200 rounded-2xl p-6 sm:p-8 shadow-xs">
        {/* Header title */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-5 border-b border-stone-100">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-semibold tracking-wider text-stone-500 uppercase">
                {titleGender} OOTD 가이드
              </span>
              <span aria-hidden="true" className="text-stone-300">·</span>
              <span className="text-xs font-semibold text-stone-900">{rec.temperatureTier}</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-stone-900">
              {titleGender} {getStyleLabel(rec.style)}
            </h3>
            <p className="text-xs text-stone-600 mt-1">{rec.description}</p>
          </div>

          <div className="flex items-center gap-2 text-xs text-stone-500 bg-stone-50 px-3 py-1.5 rounded-lg border border-stone-100 self-start sm:self-auto">
            <span>체감 반영 기온:</span>
            <span className="font-bold text-stone-900 tabular-nums">{rec.effectiveTemp}°C</span>
          </div>
        </div>

        {/* Weather Alerts if any */}
        {rec.weatherAlerts && rec.weatherAlerts.length > 0 && (
          <div className="mb-6 space-y-2">
            {rec.weatherAlerts.map((alert, idx) => (
              <div
                key={idx}
                className="flex items-start gap-2.5 p-3 rounded-xl bg-amber-50/80 border border-amber-200/80 text-amber-900 text-xs"
              >
                <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <span className="font-medium">{alert}</span>
              </div>
            ))}
          </div>
        )}

        {/* Lookbook photo & Color Palette Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8 items-stretch">
          {/* Editorial Lookbook Photo */}
          <div className="lg:col-span-5 relative group overflow-hidden rounded-xl border border-stone-200 bg-stone-100 min-h-[260px]">
            <img
              src={rec.lookbookImage}
              alt={`${titleGender} 오늘의 추천 코디 플랫레이`}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-stone-950/10 to-transparent flex flex-col justify-end p-4 text-white">
              <span className="text-[11px] font-medium tracking-wider uppercase text-stone-200">
                Today's Curated Look
              </span>
              <p className="text-sm font-semibold mt-0.5">
                {titleGender} {getStyleLabel(rec.style)}
              </p>
            </div>
          </div>

          {/* Color Palette & Styling Advice */}
          <div className="lg:col-span-7 flex flex-col justify-between p-5 bg-stone-50/80 rounded-xl border border-stone-200/60">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-semibold text-stone-900">오늘의 추천 컬러 팔레트</span>
                <span className="text-[11px] text-stone-500">클릭하여 HEX 복사</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6">
                {rec.colorPalette.map((color) => {
                  const isCopied = copiedColorHex === color.hex;
                  return (
                    <button
                      key={color.hex}
                      onClick={() => handleCopyHex(color.hex)}
                      className="flex flex-col p-2 bg-white rounded-lg border border-stone-200 hover:border-stone-400 transition-colors text-left group"
                    >
                      <div
                        className="w-full h-8 rounded-md mb-2 border border-stone-200/50 shadow-2xs"
                        style={{ backgroundColor: color.hex }}
                      />
                      <span className="text-xs font-semibold text-stone-800 truncate">{color.label}</span>
                      <div className="flex items-center justify-between text-[10px] text-stone-400 mt-0.5 tabular-nums">
                        <span>{color.hex}</span>
                        {isCopied ? (
                          <Check className="w-3 h-3 text-emerald-600" />
                        ) : (
                          <Copy className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Special Advice */}
              <div className="border-t border-stone-200/70 pt-4">
                <h4 className="text-xs font-semibold text-stone-900 mb-2 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-stone-700" />
                  <span>스타일리스트 추천 팁</span>
                </h4>
                <ul className="space-y-1.5 text-xs text-stone-600">
                  {rec.specialAdvice.map((tip, idx) => (
                    <li key={idx} className="flex items-start gap-1.5 leading-relaxed">
                      <span className="text-stone-400 font-bold shrink-0">·</span>
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Itemized Wardrobe Cards */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-sm font-bold text-stone-900">추천 착용 아이템 세부 구성</h4>
            <span className="text-xs text-stone-500">외출 준비 완료 시 체크하여 체크리스트에 담아보세요</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {rec.items.map((item) => {
              const isChecked = checkedItemIds.has(item.id);
              return (
                <div
                  key={item.id}
                  className={`p-4 rounded-xl border transition-all flex items-start justify-between gap-3 ${
                    isChecked
                      ? 'bg-stone-50 border-stone-300 opacity-70'
                      : 'bg-white border-stone-200 hover:border-stone-300 shadow-2xs'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-stone-100 rounded-lg shrink-0 mt-0.5">
                      {getCategoryIcon(item.category)}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-[11px] font-medium text-stone-500 uppercase">
                          {item.categoryLabel}
                        </span>
                        <span aria-hidden="true" className="text-stone-300">·</span>
                        <span className="text-xs text-stone-400">
                          보온 레벨 {item.warmthLevel}/5
                        </span>
                      </div>
                      <p className={`text-sm font-semibold mt-0.5 ${isChecked ? 'line-through text-stone-500' : 'text-stone-900'}`}>
                        {item.name}
                      </p>
                      <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => onAddToChecklist(item)}
                    title={isChecked ? '체크 해제' : '체크리스트에 추가'}
                    className={`p-1.5 rounded-lg transition-colors shrink-0 ${
                      isChecked
                        ? 'text-emerald-700 bg-emerald-50 hover:bg-emerald-100'
                        : 'text-stone-400 bg-stone-100 hover:bg-stone-200 hover:text-stone-700'
                    }`}
                  >
                    <CheckCircle2 className="w-5 h-5" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div id="outfit-section" className="w-full">
      {/* Control Panels: Gender Selector, Style Selector, Sensitivity */}
      <div className="bg-white border border-stone-200 rounded-2xl p-5 mb-8 shadow-xs space-y-4">
        {/* 1. Gender Selector (남성 / 여성 / 비교) */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-stone-100">
          <span className="text-xs font-semibold text-stone-800">성별 선택</span>
          <div className="flex items-center gap-1 p-1 bg-stone-100 rounded-xl">
            <button
              onClick={() => setSelectedGender('men')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all whitespace-nowrap shrink-0 ${
                selectedGender === 'men'
                  ? 'bg-white text-stone-900 shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              남성 추천 (Men)
            </button>
            <button
              onClick={() => setSelectedGender('women')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all whitespace-nowrap shrink-0 ${
                selectedGender === 'women'
                  ? 'bg-white text-stone-900 shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              여성 추천 (Women)
            </button>
            <button
              onClick={() => setSelectedGender('both')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all whitespace-nowrap shrink-0 ${
                selectedGender === 'both'
                  ? 'bg-white text-stone-900 shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              둘 다 비교
            </button>
          </div>
        </div>

        {/* 2. Style Selector */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-stone-100">
          <span className="text-xs font-semibold text-stone-800">스타일 무드</span>
          <div className="flex items-center gap-1 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
            {(['casual', 'office', 'minimal', 'sporty'] as StyleCategory[]).map((st) => (
              <button
                key={st}
                onClick={() => setSelectedStyle(st)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 border ${
                  selectedStyle === st
                    ? 'bg-stone-900 text-stone-50 border-stone-900 shadow-xs'
                    : 'bg-stone-50 text-stone-600 border-stone-200 hover:bg-stone-100 hover:text-stone-900'
                }`}
              >
                {getStyleLabel(st)}
              </button>
            ))}
          </div>
        </div>

        {/* 3. Thermal Sensitivity (체감온도 맞춤) */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <SlidersHorizontal className="w-3.5 h-3.5 text-stone-500" />
            <span className="text-xs font-semibold text-stone-800">개인 체질 맞춤 (체감 보정)</span>
          </div>
          <div className="flex items-center gap-1.5">
            <button
              onClick={() => setSensitivity('sensitive_cold')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 border ${
                sensitivity === 'sensitive_cold'
                  ? 'bg-sky-50 text-sky-900 border-sky-300 font-semibold'
                  : 'bg-white text-stone-600 border-stone-200 hover:bg-stone-100'
              }`}
            >
              추위를 많이 타요 (-3°C 두껍게)
            </button>
            <button
              onClick={() => setSensitivity('normal')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 border ${
                sensitivity === 'normal'
                  ? 'bg-stone-900 text-stone-50 border-stone-900 font-semibold'
                  : 'bg-white text-stone-600 border-stone-200 hover:bg-stone-100'
              }`}
            >
              보통 (기본값)
            </button>
            <button
              onClick={() => setSensitivity('sensitive_heat')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 border ${
                sensitivity === 'sensitive_heat'
                  ? 'bg-amber-50 text-amber-900 border-amber-300 font-semibold'
                  : 'bg-white text-stone-600 border-stone-200 hover:bg-stone-100'
              }`}
            >
              더위를 많이 타요 (+3°C 시원하게)
            </button>
          </div>
        </div>
      </div>

      {/* Render Single View or Side-by-Side Dual View */}
      {selectedGender === 'both' ? (
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          {renderRecommendationCard(menRecommendation, '남성')}
          {renderRecommendationCard(womenRecommendation, '여성')}
        </div>
      ) : selectedGender === 'men' ? (
        renderRecommendationCard(menRecommendation, '남성')
      ) : (
        renderRecommendationCard(womenRecommendation, '여성')
      )}
    </div>
  );
};
