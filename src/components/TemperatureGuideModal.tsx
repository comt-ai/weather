/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { X, BookOpen, ChevronRight } from 'lucide-react';
import { TEMPERATURE_BANDS } from '../data/outfitData';

interface TemperatureGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentTemp?: number;
}

export const TemperatureGuideModal: React.FC<TemperatureGuideModalProps> = ({
  isOpen,
  onClose,
  currentTemp,
}) => {
  const [activeGender, setActiveGender] = useState<'men' | 'women'>('men');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/50 backdrop-blur-xs">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[85vh] flex flex-col shadow-2xl border border-stone-200 overflow-hidden">
        {/* Modal Header */}
        <div className="px-6 py-5 border-b border-stone-200 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <BookOpen className="w-5 h-5 text-stone-800" />
            <div>
              <h3 className="text-base sm:text-lg font-bold text-stone-900">
                기온별 옷차림 표준 가이드백과
              </h3>
              <p className="text-xs text-stone-500">
                기상청 및 국내 패션 표준에 따른 온도 구간별 추천 착용 가이드입니다.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-stone-400 hover:text-stone-700 hover:bg-stone-100 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Gender Toggle Inside Modal */}
        <div className="px-6 py-3 bg-stone-50 border-b border-stone-200 flex items-center justify-between">
          <span className="text-xs font-semibold text-stone-700">추천 대상 선택</span>
          <div className="flex items-center gap-1 p-0.5 bg-stone-200/70 rounded-lg">
            <button
              onClick={() => setActiveGender('men')}
              className={`px-3 py-1 text-xs font-semibold rounded-md transition-colors ${
                activeGender === 'men'
                  ? 'bg-white text-stone-900 shadow-2xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              남성 가이드
            </button>
            <button
              onClick={() => setActiveGender('women')}
              className={`px-3 py-1 text-xs font-semibold rounded-md transition-colors ${
                activeGender === 'women'
                  ? 'bg-white text-stone-900 shadow-2xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              여성 가이드
            </button>
          </div>
        </div>

        {/* Modal Content / Scrollable Band List */}
        <div className="p-6 overflow-y-auto space-y-4">
          {TEMPERATURE_BANDS.map((band) => {
            const isCurrentMatch =
              currentTemp !== undefined &&
              currentTemp >= band.minTemp &&
              currentTemp <= band.maxTemp;
            const items = band[activeGender].casual.items;

            return (
              <div
                key={band.tierName}
                className={`p-5 rounded-xl border transition-all ${
                  isCurrentMatch
                    ? 'border-stone-900 bg-stone-50/70 shadow-xs ring-1 ring-stone-900/10'
                    : 'border-stone-200 bg-white hover:border-stone-300'
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2.5">
                    <span className="text-base font-bold text-stone-900 tabular-nums">
                      {band.tierName}
                    </span>
                    <span aria-hidden="true" className="text-stone-300">·</span>
                    <span className="text-xs font-semibold text-stone-600">{band.seasonLabel}</span>
                    {isCurrentMatch && (
                      <span className="text-[11px] font-semibold text-stone-900 bg-stone-200/80 px-2 py-0.5 rounded-full">
                        현재 기온 해당
                      </span>
                    )}
                  </div>
                  <span className="text-xs text-stone-500 italic">{band.summary}</span>
                </div>

                {/* Casual & Office item highlights */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-3 border-t border-stone-100">
                  <div className="text-xs">
                    <span className="font-semibold text-stone-700 block mb-1">캐주얼 기본 착용</span>
                    <p className="text-stone-600 leading-relaxed">
                      {items.map((i) => i.name).join(' + ')}
                    </p>
                  </div>
                  <div className="text-xs">
                    <span className="font-semibold text-stone-700 block mb-1">출근 &amp; 오피스 룩</span>
                    <p className="text-stone-600 leading-relaxed">
                      {band[activeGender].office.items.map((i) => i.name).join(' + ')}
                    </p>
                  </div>
                </div>

                {/* Color swatches strip */}
                <div className="flex items-center gap-2 mt-3 pt-2">
                  <span className="text-[11px] text-stone-400 font-medium">어울리는 컬러:</span>
                  <div className="flex items-center gap-1.5">
                    {band.colors.map((c) => (
                      <div
                        key={c.hex}
                        className="w-4 h-4 rounded-full border border-stone-200"
                        style={{ backgroundColor: c.hex }}
                        title={`${c.label} (${c.hex})`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-stone-50 border-t border-stone-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium text-white bg-stone-900 rounded-lg hover:bg-stone-800 transition-colors"
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  );
};
