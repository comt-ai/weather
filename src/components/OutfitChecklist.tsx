/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { OutfitItem } from '../types/weather';
import { CheckCircle2, Circle, Plus, Trash2, ListChecks, Sparkles } from 'lucide-react';

interface OutfitChecklistProps {
  checkedItems: OutfitItem[];
  onToggleItem: (item: OutfitItem) => void;
  onClearAll: () => void;
}

export const OutfitChecklist: React.FC<OutfitChecklistProps> = ({
  checkedItems,
  onToggleItem,
  onClearAll,
}) => {
  const [customItemText, setCustomItemText] = useState('');
  const [customList, setCustomList] = useState<{ id: string; name: string; checked: boolean }[]>([]);

  const handleAddCustom = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customItemText.trim()) return;
    setCustomList((prev) => [
      ...prev,
      { id: `custom-${Date.now()}`, name: customItemText.trim(), checked: true },
    ]);
    setCustomItemText('');
  };

  const toggleCustom = (id: string) => {
    setCustomList((prev) =>
      prev.map((item) => (item.id === id ? { ...item, checked: !item.checked } : item))
    );
  };

  const removeCustom = (id: string) => {
    setCustomList((prev) => prev.filter((item) => item.id !== id));
  };

  const totalCount = checkedItems.length + customList.length;
  const completedCount = checkedItems.length + customList.filter((c) => c.checked).length;

  return (
    <div id="checklist-section" className="bg-white border border-stone-200 rounded-2xl p-6 sm:p-8 shadow-xs">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-5 border-b border-stone-100">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <ListChecks className="w-4 h-4 text-stone-700" />
            <h3 className="text-lg font-bold text-stone-900">오늘의 외출 전 체크리스트</h3>
          </div>
          <p className="text-xs text-stone-600">
            추천받은 코디 아이템 및 챙겨야 할 소품을 체크하고 완벽하게 외출을 준비하세요.
          </p>
        </div>

        {totalCount > 0 && (
          <div className="flex items-center gap-3">
            <span className="text-xs text-stone-500 font-medium">
              준비도: <strong className="text-stone-900 tabular-nums">{completedCount}/{totalCount}</strong>
            </span>
            <button
              onClick={onClearAll}
              className="text-xs text-stone-400 hover:text-stone-700 transition-colors"
            >
              전체 비우기
            </button>
          </div>
        )}
      </div>

      {totalCount === 0 ? (
        <div className="py-8 text-center bg-stone-50 rounded-xl border border-dashed border-stone-200">
          <Sparkles className="w-6 h-6 text-stone-400 mx-auto mb-2" />
          <p className="text-xs font-semibold text-stone-700">체크리스트가 비어있습니다</p>
          <p className="text-[11px] text-stone-500 mt-0.5">
            위 코디 추천 카드에서 아이템 우측의 체크 버튼을 누르면 여기에 저장됩니다.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 mb-6">
          {checkedItems.map((item) => (
            <div
              key={item.id}
              onClick={() => onToggleItem(item)}
              className="flex items-center justify-between p-3 rounded-xl bg-stone-50 border border-stone-200/80 cursor-pointer hover:bg-stone-100 transition-colors group"
            >
              <div className="flex items-center gap-2.5 min-w-0">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="text-xs font-medium text-stone-800 truncate">
                  [{item.categoryLabel}] {item.name}
                </span>
              </div>
              <span className="text-[10px] text-stone-400 opacity-0 group-hover:opacity-100 transition-opacity shrink-0">
                해제
              </span>
            </div>
          ))}

          {customList.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between p-3 rounded-xl bg-stone-50 border border-stone-200/80 transition-colors"
            >
              <button
                onClick={() => toggleCustom(item.id)}
                className="flex items-center gap-2.5 text-left min-w-0"
              >
                {item.checked ? (
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                ) : (
                  <Circle className="w-4 h-4 text-stone-300 shrink-0" />
                )}
                <span className={`text-xs font-medium truncate ${item.checked ? 'text-stone-800' : 'text-stone-400 line-through'}`}>
                  {item.name}
                </span>
              </button>
              <button
                onClick={() => removeCustom(item.id)}
                className="text-stone-400 hover:text-rose-600 transition-colors p-1"
                title="삭제"
              >
                <Trash2 className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Add custom item form */}
      <form onSubmit={handleAddCustom} className="flex gap-2 mt-4 pt-4 border-t border-stone-100">
        <input
          type="text"
          placeholder="개인 소지품 추가 (예: 접이식 우산, 립밤, 텀블러, 보조배터리)..."
          value={customItemText}
          onChange={(e) => setCustomItemText(e.target.value)}
          className="flex-1 px-3 py-1.5 text-xs bg-stone-50 border border-stone-200 rounded-lg text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-1 focus:ring-stone-900 focus:border-stone-900"
        />
        <button
          type="submit"
          className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-stone-900 text-white rounded-lg hover:bg-stone-800 transition-colors shrink-0"
        >
          <Plus className="w-3.5 h-3.5" />
          <span>추가</span>
        </button>
      </form>
    </div>
  );
};
