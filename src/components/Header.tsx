/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { KeyRound, Sparkles } from 'lucide-react';

interface HeaderProps {
  onOpenApiKeyModal: () => void;
  onOpenGuideModal: () => void;
  onScrollToSection: (sectionId: string) => void;
  usingOpenWeather: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenApiKeyModal,
  onOpenGuideModal,
  onScrollToSection,
  usingOpenWeather,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-stone-50/90 backdrop-blur-md border-b border-stone-200/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Single text element Brand Zone */}
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="text-lg font-bold tracking-tight text-stone-900 whitespace-nowrap shrink-0 hover:opacity-80 transition-opacity"
        >
          OOTD Weather
        </a>

        {/* Zone 2: 4-5 concise single-line nav links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-stone-600">
          <button
            onClick={() => onScrollToSection('weather-section')}
            className="hover:text-stone-900 transition-colors whitespace-nowrap shrink-0"
          >
            오늘의 날씨
          </button>
          <button
            onClick={() => onScrollToSection('outfit-section')}
            className="hover:text-stone-900 transition-colors whitespace-nowrap shrink-0"
          >
            남성 · 여성 코디
          </button>
          <button
            onClick={onOpenGuideModal}
            className="hover:text-stone-900 transition-colors whitespace-nowrap shrink-0"
          >
            기온별 옷차림 표
          </button>
          <button
            onClick={() => onScrollToSection('checklist-section')}
            className="hover:text-stone-900 transition-colors whitespace-nowrap shrink-0"
          >
            외출 체크리스트
          </button>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenApiKeyModal}
            className={`flex items-center gap-2 px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 border ${
              usingOpenWeather
                ? 'bg-amber-50 text-amber-900 border-amber-300 hover:bg-amber-100'
                : 'bg-stone-900 text-stone-50 border-stone-900 hover:bg-stone-800'
            }`}
            title="OpenWeatherMap API Key 설정"
          >
            <KeyRound className="w-3.5 h-3.5" />
            <span>{usingOpenWeather ? 'OpenWeatherMap 연동됨' : 'OpenWeather API 설정'}</span>
          </button>
        </div>
      </div>
    </header>
  );
};
