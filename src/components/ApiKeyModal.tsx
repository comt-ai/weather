/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { X, KeyRound, CheckCircle2, AlertCircle, ExternalLink, RefreshCw } from 'lucide-react';
import { getStoredApiKey, saveApiKey, fetchFromOpenWeatherMap } from '../services/weatherApi';

interface ApiKeyModalProps {
  isOpen: boolean;
  onClose: () => void;
  onKeyUpdated: () => void;
  usingOpenWeather: boolean;
}

export const ApiKeyModal: React.FC<ApiKeyModalProps> = ({
  isOpen,
  onClose,
  onKeyUpdated,
  usingOpenWeather,
}) => {
  const [apiKeyInput, setApiKeyInput] = useState('');
  const [testing, setTesting] = useState(false);
  const [testResult, setTestResult] = useState<{ success: boolean; message: string } | null>(null);

  useEffect(() => {
    if (isOpen) {
      setApiKeyInput(getStoredApiKey());
      setTestResult(null);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleTestAndSave = async (e: React.FormEvent) => {
    e.preventDefault();
    const cleanKey = apiKeyInput.trim();

    if (!cleanKey) {
      saveApiKey('');
      setTestResult({ success: true, message: 'API 키가 삭제되었습니다. 무료 실시간 백업 API로 동작합니다.' });
      onKeyUpdated();
      return;
    }

    setTesting(true);
    setTestResult(null);

    try {
      // Test call with Seoul
      await fetchFromOpenWeatherMap({ query: 'Seoul' }, cleanKey);
      saveApiKey(cleanKey);
      setTestResult({
        success: true,
        message: 'OpenWeatherMap API 인증 성공! 키가 안전하게 로컬에 저장되었습니다.',
      });
      onKeyUpdated();
    } catch (err: any) {
      setTestResult({
        success: false,
        message: `API 키 검증 실패: ${err.message || '유효하지 않은 API 키입니다.'}`,
      });
    } finally {
      setTesting(false);
    }
  };

  const handleClearKey = () => {
    saveApiKey('');
    setApiKeyInput('');
    setTestResult({
      success: true,
      message: 'API 키가 삭제되었습니다. 글로벌 백업 실시간 날씨 데이터로 작동합니다.',
    });
    onKeyUpdated();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/50 backdrop-blur-xs">
      <div className="bg-white rounded-2xl max-w-lg w-full shadow-2xl border border-stone-200 overflow-hidden">
        {/* Header */}
        <div className="px-6 py-5 border-b border-stone-200 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <KeyRound className="w-5 h-5 text-stone-800" />
            <div>
              <h3 className="text-base font-bold text-stone-900">OpenWeatherMap API 설정</h3>
              <p className="text-xs text-stone-500">
                공식 OpenWeatherMap 실시간 날씨 API 키를 입력하세요.
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

        {/* Content */}
        <div className="p-6 space-y-4">
          {/* Current Status banner */}
          <div
            className={`p-3.5 rounded-xl border flex items-center gap-3 text-xs ${
              usingOpenWeather
                ? 'bg-amber-50/80 border-amber-200 text-amber-900'
                : 'bg-stone-50 border-stone-200 text-stone-700'
            }`}
          >
            <span
              className={`w-2.5 h-2.5 rounded-full shrink-0 ${
                usingOpenWeather ? 'bg-amber-500' : 'bg-sky-500'
              }`}
            />
            <div>
              <p className="font-semibold">
                현재 상태: {usingOpenWeather ? 'OpenWeatherMap API 활성화됨' : '실시간 백업 글로벌 날씨 API 작동 중'}
              </p>
              <p className="text-stone-500 mt-0.5">
                {usingOpenWeather
                  ? 'OpenWeatherMap에서 실시간 데이터 및 5일 예보를 직접 수신하고 있습니다.'
                  : 'API 키가 없을 때도 전 세계 실시간 날씨를 중단 없이 제공합니다.'}
              </p>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleTestAndSave} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-stone-800 mb-1.5">
                OpenWeatherMap API Key
              </label>
              <input
                type="text"
                placeholder="예: 4a3b2c1d0e9f8a7b6c5d4e3f2a1b0c9d"
                value={apiKeyInput}
                onChange={(e) => setApiKeyInput(e.target.value)}
                className="w-full px-3.5 py-2 text-xs bg-stone-50 border border-stone-200 rounded-lg text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-1 focus:ring-stone-900 focus:border-stone-900 font-mono"
              />
            </div>

            {testResult && (
              <div
                className={`p-3 rounded-lg border text-xs flex items-start gap-2 ${
                  testResult.success
                    ? 'bg-emerald-50 border-emerald-200 text-emerald-900'
                    : 'bg-rose-50 border-rose-200 text-rose-900'
                }`}
              >
                {testResult.success ? (
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                ) : (
                  <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                )}
                <span>{testResult.message}</span>
              </div>
            )}

            <div className="flex items-center justify-between gap-3 pt-2">
              <button
                type="button"
                onClick={handleClearKey}
                className="text-xs text-stone-500 hover:text-stone-800 transition-colors"
              >
                키 초기화
              </button>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-3.5 py-1.5 text-xs font-medium text-stone-600 bg-stone-100 hover:bg-stone-200 rounded-lg transition-colors"
                >
                  취소
                </button>
                <button
                  type="submit"
                  disabled={testing}
                  className="flex items-center gap-1.5 px-4 py-1.5 text-xs font-semibold text-white bg-stone-900 hover:bg-stone-800 rounded-lg transition-colors disabled:opacity-50"
                >
                  {testing ? (
                    <>
                      <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                      <span>연동 확인 중...</span>
                    </>
                  ) : (
                    <span>검증 및 저장</span>
                  )}
                </button>
              </div>
            </div>
          </form>

          {/* Guide link */}
          <div className="pt-4 border-t border-stone-100 text-xs text-stone-500 leading-relaxed">
            <p className="font-semibold text-stone-700 mb-1">API 키 발급 안내:</p>
            <ol className="list-decimal pl-4 space-y-1">
              <li>
                <a
                  href="https://openweathermap.org/api"
                  target="_blank"
                  rel="noreferrer"
                  className="text-stone-900 font-medium underline inline-flex items-center gap-1"
                >
                  openweathermap.org <ExternalLink className="w-3 h-3" />
                </a>
                에서 무료 회원가입을 진행합니다.
              </li>
              <li>상단 계정 메뉴의 [My API Keys] 탭에서 생성된 기본 키를 복사합니다.</li>
              <li>위 입력창에 붙여넣고 [검증 및 저장]을 누르면 즉시 연동됩니다.</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};
