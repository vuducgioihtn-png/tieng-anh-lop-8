import React, { useState, useMemo } from 'react';
import { Search, Volume2, ArrowLeft, Filter, BookOpen, Layers } from 'lucide-react';
import { ALL_FLASHCARDS, UNITS_DATA } from '../../data/unitsData';
import { FlashcardItem } from '../../types';
import { speakEnglish } from '../../utils/audio';
import { getReadingTip } from '../../utils/pronunciationHelper';

interface GlossaryViewProps {
  onBackToHandbook: () => void;
  onStudyCard: (card: FlashcardItem) => void;
}

export const GlossaryView: React.FC<GlossaryViewProps> = ({ onBackToHandbook, onStudyCard }) => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedUnit, setSelectedUnit] = useState<number | 'all'>('all');
  const [selectedPos, setSelectedPos] = useState<string>('all');

  const filteredWords = useMemo(() => {
    return ALL_FLASHCARDS.filter(item => {
      const matchSearch =
        item.word.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.meaningVi.toLowerCase().includes(searchTerm.toLowerCase());
      const matchUnit = selectedUnit === 'all' || item.unitId === selectedUnit;
      const matchPos = selectedPos === 'all' || item.partOfSpeech.toLowerCase().includes(selectedPos.toLowerCase());
      return matchSearch && matchUnit && matchPos;
    });
  }, [searchTerm, selectedUnit, selectedPos]);

  return (
    <div className="max-w-4xl mx-auto space-y-6 pb-16">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <button
            onClick={onBackToHandbook}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 hover:text-indigo-600 transition-colors mb-1"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Quay lại Sổ tay lý thuyết</span>
          </button>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 flex items-center gap-2">
            <BookOpen className="w-7 h-7 text-purple-600" />
            <span>Tra Cứu Từ Điển SGK (Glossary)</span>
          </h1>
          <p className="text-xs sm:text-sm text-slate-500">
            Toàn bộ từ vựng chính khóa Tiếng Anh 8 Global Success kèm phiên âm quốc tế IPA & nghĩa chuẩn
          </p>
        </div>

        <div className="text-xs font-bold px-3 py-1.5 rounded-xl bg-purple-50 text-purple-700 border border-purple-200">
          Tổng số: {filteredWords.length} từ
        </div>
      </div>

      {/* Search & Filters */}
      <div className="bg-white p-4 rounded-2xl border border-slate-200/90 shadow-xs flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Tìm kiếm từ tiếng Anh hoặc nghĩa tiếng Việt..."
            className="w-full pl-10 pr-4 py-2 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <div className="flex items-center gap-2">
          <select
            value={selectedUnit}
            onChange={(e) => setSelectedUnit(e.target.value === 'all' ? 'all' : Number(e.target.value))}
            className="px-3 py-2 rounded-xl border border-slate-200 text-xs font-semibold text-slate-700 bg-white shadow-2xs"
          >
            <option value="all">Tất cả Unit</option>
            {UNITS_DATA.map(u => (
              <option key={u.id} value={u.id}>Unit {u.id}</option>
            ))}
          </select>

          <select
            value={selectedPos}
            onChange={(e) => setSelectedPos(e.target.value)}
            className="px-3 py-2 rounded-xl border border-slate-200 text-xs font-semibold text-slate-700 bg-white shadow-2xs"
          >
            <option value="all">Mọi từ loại</option>
            <option value="noun">Danh từ (n)</option>
            <option value="verb">Động từ (v)</option>
            <option value="adj">Tính từ (adj)</option>
            <option value="phrase">Cụm từ (phrase)</option>
          </select>
        </div>
      </div>

      {/* Words Table / List */}
      <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xs divide-y divide-slate-100 overflow-hidden">
        {filteredWords.length === 0 ? (
          <div className="p-12 text-center text-slate-400 text-sm">
            Không tìm thấy từ vựng nào khớp với từ khóa tìm kiếm &quot;{searchTerm}&quot;.
          </div>
        ) : (
          filteredWords.map((item) => (
            <div
              key={item.id}
              className="p-4 sm:p-5 hover:bg-slate-50/80 transition-colors flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3"
            >
              <div className="space-y-1">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-base sm:text-lg font-bold text-slate-900">
                    {item.word}
                  </span>
                  <span className="text-xs font-mono text-purple-700 font-semibold">
                    {item.phonetic}
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 uppercase font-semibold">
                    {item.partOfSpeech}
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-700 font-semibold">
                    Unit {item.unitId}
                  </span>
                </div>

                {/* Gợi ý cách đọc tiếng Việt dễ hiểu */}
                <div className="text-xs text-amber-900 bg-amber-50/90 px-2.5 py-1 rounded-lg border border-amber-200/80 font-medium inline-block">
                  {getReadingTip(item.word, item.phonetic, item.readingTip)}
                </div>

                <div className="text-xs sm:text-sm text-slate-800 font-semibold">
                  {item.meaningVi}
                </div>

                <div className="text-xs text-slate-400 italic">
                  &ldquo;{item.exampleEn}&rdquo;
                </div>
              </div>

              <div className="flex items-center gap-2 shrink-0 self-end sm:self-center">
                <button
                  onClick={() => speakEnglish(item.word)}
                  className="p-2 rounded-xl bg-purple-50 hover:bg-purple-100 text-purple-700 border border-purple-200 transition-colors shadow-2xs"
                  title="Nghe phát âm chuẩn"
                >
                  <Volume2 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => onStudyCard(item)}
                  className="px-3 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-2xs transition-colors flex items-center gap-1.5"
                >
                  <Layers className="w-3.5 h-3.5" />
                  <span>Học Flashcard</span>
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
