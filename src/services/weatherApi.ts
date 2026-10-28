/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { DailyForecast, HourlyForecast, OpenWeatherData } from '../types/weather';

export const CITY_PRESETS = [
  { name: '서울 (Seoul)', query: 'Seoul,KR', lat: 37.5665, lon: 126.9780, region: '수도권' },
  { name: '부산 (Busan)', query: 'Busan,KR', lat: 35.1796, lon: 129.0756, region: '영남' },
  { name: '제주 (Jeju)', query: 'Jeju,KR', lat: 33.4996, lon: 126.5312, region: '제주' },
  { name: '인천 (Incheon)', query: 'Incheon,KR', lat: 37.4563, lon: 126.7052, region: '수도권' },
  { name: '대구 (Daegu)', query: 'Daegu,KR', lat: 35.8714, lon: 128.6014, region: '영남' },
  { name: '대전 (Daejeon)', query: 'Daejeon,KR', lat: 36.3504, lon: 127.3845, region: '충청' },
  { name: '강릉 (Gangneung)', query: 'Gangneung,KR', lat: 37.7519, lon: 128.8761, region: '강원' },
  { name: '도쿄 (Tokyo)', query: 'Tokyo,JP', lat: 35.6762, lon: 139.6503, region: '해외' },
  { name: '뉴욕 (New York)', query: 'New York,US', lat: 40.7128, lon: -74.0060, region: '해외' },
  { name: '런던 (London)', query: 'London,GB', lat: 51.5074, lon: -0.1278, region: '해외' },
  { name: '파리 (Paris)', query: 'Paris,FR', lat: 48.8566, lon: 2.3522, region: '해외' },
];

const LOCAL_STORAGE_KEY = 'openweathermap_user_api_key';

export function getStoredApiKey(): string {
  if (typeof window === 'undefined') return '';
  return localStorage.getItem(LOCAL_STORAGE_KEY) || (import.meta as any).env?.VITE_OPENWEATHER_API_KEY || '';
}

export function saveApiKey(key: string): void {
  if (typeof window === 'undefined') return;
  if (!key.trim()) {
    localStorage.removeItem(LOCAL_STORAGE_KEY);
  } else {
    localStorage.setItem(LOCAL_STORAGE_KEY, key.trim());
  }
}

/**
 * Map WMO weather codes to OpenWeatherMap-like ID & Korean description
 */
function mapWmoToCondition(code: number): { id: number; condition: string; description: string; icon: string } {
  if (code === 0) return { id: 800, condition: '맑음', description: '구름 없이 맑은 하늘', icon: '01d' };
  if (code === 1) return { id: 801, condition: '대체로 맑음', description: '햇살이 비치는 맑은 날씨', icon: '02d' };
  if (code === 2) return { id: 802, condition: '구름 조금', description: '하늘에 구름이 약간 있음', icon: '03d' };
  if (code === 3) return { id: 804, condition: '흐림', description: '구름이 많은 흐린 날씨', icon: '04d' };
  if ([45, 48].includes(code)) return { id: 741, condition: '안개', description: '가시거리가 짧은 짙은 안개', icon: '50d' };
  if ([51, 53, 55].includes(code)) return { id: 300, condition: '이슬비', description: '약하게 흩뿌리는 이슬비', icon: '09d' };
  if ([61, 63, 65].includes(code)) return { id: 500, condition: '비', description: '촉촉하게 내리는 비', icon: '10d' };
  if ([71, 73, 75, 77].includes(code)) return { id: 600, condition: '눈', description: '하얗게 내리는 눈', icon: '13d' };
  if ([80, 81, 82].includes(code)) return { id: 502, condition: '소나기', description: '강하게 쏟아지는 소나기', icon: '09d' };
  if ([85, 86].includes(code)) return { id: 602, condition: '눈보라', description: '바람을 동반한 눈', icon: '13d' };
  if ([95, 96, 99].includes(code)) return { id: 211, condition: '뇌우', description: '천둥과 번개를 동반한 비', icon: '11d' };
  return { id: 800, condition: '맑음', description: '쾌청한 날씨', icon: '01d' };
}

/**
 * Fetch current weather via OpenWeatherMap API
 */
export async function fetchFromOpenWeatherMap(
  queryOrCoords: { query?: string; lat?: number; lon?: number },
  apiKey: string
): Promise<{ current: OpenWeatherData; hourly: HourlyForecast[]; daily: DailyForecast[] }> {
  let url = '';
  if (queryOrCoords.lat !== undefined && queryOrCoords.lon !== undefined) {
    url = `https://api.openweathermap.org/data/2.5/weather?lat=${queryOrCoords.lat}&lon=${queryOrCoords.lon}&appid=${apiKey}&units=metric&lang=kr`;
  } else {
    url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(queryOrCoords.query || 'Seoul')}&appid=${apiKey}&units=metric&lang=kr`;
  }

  const res = await fetch(url);
  if (!res.ok) {
    const errorData = await res.json().catch(() => ({}));
    throw new Error(errorData.message || `OpenWeatherMap 오류 (${res.status})`);
  }

  const data = await res.json();

  // Also fetch 5-day / 3-hour forecast
  let forecastUrl = '';
  if (queryOrCoords.lat !== undefined && queryOrCoords.lon !== undefined) {
    forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${queryOrCoords.lat}&lon=${queryOrCoords.lon}&appid=${apiKey}&units=metric&lang=kr`;
  } else {
    forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${encodeURIComponent(queryOrCoords.query || 'Seoul')}&appid=${apiKey}&units=metric&lang=kr`;
  }

  let hourly: HourlyForecast[] = [];
  let daily: DailyForecast[] = [];

  try {
    const forecastRes = await fetch(forecastUrl);
    if (forecastRes.ok) {
      const fData = await forecastRes.json();
      hourly = (fData.list || []).slice(0, 8).map((item: any) => {
        const date = new Date(item.dt * 1000);
        const hours = date.getHours();
        return {
          time: `${hours < 10 ? '0' : ''}${hours}:00`,
          temp: Math.round(item.main.temp),
          icon: item.weather[0]?.icon || '01d',
          condition: item.weather[0]?.description || '맑음',
          pop: Math.round((item.pop || 0) * 100),
        };
      });

      // Group for daily
      const dayMap = new Map<string, any[]>();
      (fData.list || []).forEach((item: any) => {
        const dStr = new Date(item.dt * 1000).toLocaleDateString('ko-KR', { weekday: 'short', month: 'numeric', day: 'numeric' });
        if (!dayMap.has(dStr)) dayMap.set(dStr, []);
        dayMap.get(dStr)!.push(item);
      });

      daily = Array.from(dayMap.entries()).slice(0, 5).map(([dayLabel, items]) => {
        const temps = items.map((i) => i.main.temp);
        const min = Math.round(Math.min(...temps));
        const max = Math.round(Math.max(...temps));
        const midItem = items[Math.floor(items.length / 2)] || items[0];
        return {
          day: dayLabel.split('.')[0] || '오늘',
          dateStr: dayLabel,
          tempMin: min,
          tempMax: max,
          icon: midItem.weather[0]?.icon || '01d',
          condition: midItem.weather[0]?.description || '맑음',
        };
      });
    }
  } catch {
    // forecast is secondary
  }

  const current: OpenWeatherData = {
    name: data.name || '알 수 없음',
    country: data.sys?.country || 'KR',
    temp: Math.round(data.main.temp * 10) / 10,
    feelsLike: Math.round(data.main.feels_like * 10) / 10,
    tempMin: Math.round(data.main.temp_min),
    tempMax: Math.round(data.main.temp_max),
    humidity: data.main.humidity,
    windSpeed: Math.round(data.wind.speed * 10) / 10,
    condition: data.weather[0]?.main || 'Clear',
    conditionId: data.weather[0]?.id || 800,
    icon: data.weather[0]?.icon || '01d',
    description: data.weather[0]?.description || '맑음',
    rainChance: data.rain ? 80 : 10,
    uvIndex: 4,
    source: 'OpenWeatherMap',
    dt: data.dt || Math.floor(Date.now() / 1000),
  };

  return { current, hourly, daily };
}

/**
 * Free live global fallback via Open-Meteo
 */
export async function fetchLiveFallbackWeather(
  lat: number,
  lon: number,
  cityName: string
): Promise<{ current: OpenWeatherData; hourly: HourlyForecast[]; daily: DailyForecast[] }> {
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,weather_code,wind_speed_10m&hourly=temperature_2m,weather_code,precipitation_probability&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max&timezone=auto`;

  const res = await fetch(url);
  if (!res.ok) {
    throw new Error('실시간 백업 날씨 데이터 조회 실패');
  }

  const data = await res.json();
  const cur = data.current;
  const mapped = mapWmoToCondition(cur.weather_code);

  const current: OpenWeatherData = {
    name: cityName,
    country: 'KR',
    temp: Math.round(cur.temperature_2m * 10) / 10,
    feelsLike: Math.round(cur.apparent_temperature * 10) / 10,
    tempMin: Math.round(data.daily.temperature_2m_min[0] ?? cur.temperature_2m - 4),
    tempMax: Math.round(data.daily.temperature_2m_max[0] ?? cur.temperature_2m + 5),
    humidity: cur.relative_humidity_2m,
    windSpeed: Math.round(cur.wind_speed_10m * 10) / 10,
    condition: mapped.condition,
    conditionId: mapped.id,
    icon: mapped.icon,
    description: mapped.description,
    rainChance: data.daily.precipitation_probability_max?.[0] ?? Math.round(cur.precipitation > 0 ? 80 : 15),
    uvIndex: 5,
    source: 'Live Weather API',
    dt: Math.floor(Date.now() / 1000),
  };

  // Build hourly
  const currentHour = new Date().getHours();
  const hourly: HourlyForecast[] = [];
  const times = data.hourly.time as string[];
  for (let i = 0; i < Math.min(times.length, 24); i++) {
    const d = new Date(times[i]);
    if (d.getHours() >= currentHour && hourly.length < 8) {
      const code = data.hourly.weather_code[i];
      const m = mapWmoToCondition(code);
      hourly.push({
        time: `${d.getHours() < 10 ? '0' : ''}${d.getHours()}:00`,
        temp: Math.round(data.hourly.temperature_2m[i]),
        icon: m.icon,
        condition: m.condition,
        pop: data.hourly.precipitation_probability?.[i] ?? 0,
      });
    }
  }

  // Build daily
  const daily: DailyForecast[] = [];
  const dayNames = ['오늘', '내일', '모레'];
  for (let i = 0; i < Math.min(data.daily.time.length, 5); i++) {
    const d = new Date(data.daily.time[i]);
    const weekday = d.toLocaleDateString('ko-KR', { weekday: 'short' });
    const label = i < 3 ? dayNames[i] : weekday;
    const m = mapWmoToCondition(data.daily.weather_code[i]);
    daily.push({
      day: label,
      dateStr: `${d.getMonth() + 1}/${d.getDate()}`,
      tempMin: Math.round(data.daily.temperature_2m_min[i]),
      tempMax: Math.round(data.daily.temperature_2m_max[i]),
      icon: m.icon,
      condition: m.condition,
    });
  }

  return { current, hourly, daily };
}

/**
 * Universal weather resolver:
 * Tries OpenWeatherMap first if key exists; gracefully uses Live Weather API fallback.
 */
export async function getWeatherData(
  cityOrCoords: { city?: string; lat?: number; lon?: number },
  apiKey?: string
): Promise<{ current: OpenWeatherData; hourly: HourlyForecast[]; daily: DailyForecast[]; usingOpenWeather: boolean }> {
  const activeKey = (apiKey || getStoredApiKey()).trim();

  // Match coordinates for fallback
  let lat = cityOrCoords.lat ?? 37.5665;
  let lon = cityOrCoords.lon ?? 126.9780;
  let cityName = cityOrCoords.city || '서울';

  const matchedPreset = CITY_PRESETS.find(
    (c) =>
      c.name.toLowerCase().includes(cityName.toLowerCase()) ||
      c.query.toLowerCase().includes(cityName.toLowerCase())
  );
  if (matchedPreset) {
    lat = matchedPreset.lat;
    lon = matchedPreset.lon;
    cityName = matchedPreset.name.split(' (')[0];
  }

  if (activeKey) {
    try {
      const data = await fetchFromOpenWeatherMap(
        cityOrCoords.lat && cityOrCoords.lon
          ? { lat: cityOrCoords.lat, lon: cityOrCoords.lon }
          : { query: matchedPreset ? matchedPreset.query : cityName },
        activeKey
      );
      return { ...data, usingOpenWeather: true };
    } catch (err) {
      console.warn('OpenWeatherMap API 호출 실패, 실시간 백업 API로 대체합니다:', err);
      // Fallback
    }
  }

  // Use fallback live weather API
  const fallbackData = await fetchLiveFallbackWeather(lat, lon, cityName);
  return { ...fallbackData, usingOpenWeather: false };
}
