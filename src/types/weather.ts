/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface OpenWeatherData {
  name: string;
  country: string;
  temp: number;
  feelsLike: number;
  tempMin: number;
  tempMax: number;
  humidity: number;
  windSpeed: number;
  condition: string; // e.g. "맑음", "구름 많음", "비", "눈"
  conditionId: number; // OpenWeatherMap condition id
  icon: string;
  description: string;
  rainChance?: number; // percentage
  uvIndex?: number;
  airQuality?: string;
  source: 'OpenWeatherMap' | 'Live Weather API' | 'Demo';
  dt: number;
}

export interface HourlyForecast {
  time: string; // e.g. "12:00"
  temp: number;
  icon: string;
  condition: string;
  pop: number; // probability of precipitation 0-100%
}

export interface DailyForecast {
  day: string; // e.g. "오늘", "내일", "목"
  dateStr: string;
  tempMin: number;
  tempMax: number;
  icon: string;
  condition: string;
}

export type Gender = 'men' | 'women';
export type StyleCategory = 'casual' | 'office' | 'minimal' | 'sporty';
export type ThermalSensitivity = 'sensitive_cold' | 'normal' | 'sensitive_heat';

export interface OutfitItem {
  id: string;
  name: string;
  category: 'outer' | 'top' | 'bottom' | 'shoes' | 'acc';
  categoryLabel: string;
  description: string;
  warmthLevel: 1 | 2 | 3 | 4 | 5; // 1: light/cool, 5: heavy/warm
  tip?: string;
}

export interface OutfitRecommendation {
  temperatureTier: string; // e.g. "17°C ~ 19°C (선선한 환절기)"
  headline: string;
  description: string;
  effectiveTemp: number;
  gender: Gender;
  style: StyleCategory;
  items: OutfitItem[];
  colorPalette: {
    name: string;
    hex: string;
    label: string;
  }[];
  specialAdvice: string[];
  weatherAlerts?: string[];
  lookbookImage: string;
}
