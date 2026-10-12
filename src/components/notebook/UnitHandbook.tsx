import React, { useState } from 'react';
import { BookOpen, Volume2, Sparkles, MessageSquare, Layers, Search, ChevronRight } from 'lucide-react';
import { UNITS_DATA } from '../../data/unitsData';
import { UnitData } from '../../types';
import { speakEnglish } from '../../utils/audio';
import { getReadingTip, getWordPhoneticsInfo } from '../../utils/pronunciationHelper';

interface UnitHandbookProps {
  initialUnitId?: number;
  onOpenGlossary: () => void;
  onOpenUnitMaster?: (unitId: number) => void;
}

export const UnitHandbook: React.FC<UnitHandbookProps> = ({ initialUnitId, onOpenGlossary, onOpenUnitMaster }) => {
  const [selectedUnitId, setSelectedUnitId] = useState<number>(initialUnitId || 1);
  const [activeSection, setActiveSection] = useState<'grammar' | 'pronunciation' | 'communication' | 'vocab'>('grammar');

  const unit: UnitData = UNITS_DATA.find(u => u.id === selectedUnitId) || UNITS_DATA[0];

  return (
    <div className="max-w-4xl mx-auto space-y-6 pb-16">
      {/* Top Title & Glossary shortcut */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 flex items-center gap-2">
            <BookOpen className="w-8 h-8 text-purple-600" />
            <span>Sổ Tay Kiến Thức Trọng Tâm</span>
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Tổng hợp toàn diện lý thuyết Ngữ pháp, Ngữ âm, Giao tiếp chuẩn SGK Tiếng Anh 8 Global Success
          </p>
        </div>

        <button
          onClick={onOpenGlossary}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-purple-50 hover:bg-purple-100 text-purple-700 font-bold text-xs border border-purple-200 transition-colors shadow-2xs"
        >
          <Search className="w-4 h-4" />
          <span>Tra cứu toàn bộ Từ điển SGK</span>
        </button>
      </div>

      {/* Horizontal Unit Selector Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {UNITS_DATA.map(u => (
          <button
            key={u.id}
            onClick={() => setSelectedUnitId(u.id)}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all shadow-2xs ${
              selectedUnitId === u.id
                ? 'bg-purple-600 text-white shadow-md shadow-purple-200'
                : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
            }`}
          >
            Unit {u.id}: {u.englishTitle}
          </button>
        ))}
      </div>

      {/* Unit Overview Header */}
      <div className="bg-gradient-to-r from-purple-700 to-indigo-700 rounded-3xl p-6 text-white shadow-lg space-y-2">
        <div className="flex items-center justify-between text-xs font-semibold text-purple-200">
          <span>Chủ đề: {unit.theme}</span>
          <span className="bg-white/20 px-2.5 py-0.5 rounded-full font-bold">Unit {unit.id}</span>
        </div>
        <h2 className="text-2xl font-black">{unit.title}</h2>
        <p className="text-xs sm:text-sm text-purple-100 max-w-2xl leading-relaxed">
          {unit.description}
        </p>

        {(unit.id === 1 || unit.id === 2 || unit.id === 3 || unit.id === 4 || unit.id === 5 || unit.id === 6) && onOpenUnitMaster && (
          <div className="pt-2">
            <button
              onClick={() => onOpenUnitMaster(unit.id)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white text-purple-900 font-extrabold text-xs shadow-md hover:bg-purple-50 transition-all cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span>Khám phá Trạm Học Trực Quan Toàn Diện Unit {unit.id} (Đầy đủ 7 bài SGK)</span>
              <ChevronRight className="w-4 h-4 text-purple-600" />
            </button>
          </div>
        )}
      </div>

      {/* Section Tabs */}
      <div className="flex border-b border-slate-200 gap-2 sm:gap-6 text-xs sm:text-sm font-bold overflow-x-auto">
        <button
          onClick={() => setActiveSection('grammar')}
          className={`pb-3 transition-colors relative whitespace-nowrap ${
            activeSection === 'grammar'
              ? 'text-purple-700 border-b-2 border-purple-700 font-extrabold'
              : 'text-slate-500 hover:text-slate-800'
          }`}
        >
          1. Ngữ pháp trọng tâm
        </button>

        <button
          onClick={() => setActiveSection('pronunciation')}
          className={`pb-3 transition-colors relative whitespace-nowrap ${
            activeSection === 'pronunciation'
              ? 'text-purple-700 border-b-2 border-purple-700 font-extrabold'
              : 'text-slate-500 hover:text-slate-800'
          }`}
        >
          2. Phát âm & Ngữ điệu
        </button>

        <button
          onClick={() => setActiveSection('communication')}
          className={`pb-3 transition-colors relative whitespace-nowrap ${
            activeSection === 'communication'
              ? 'text-purple-700 border-b-2 border-purple-700 font-extrabold'
              : 'text-slate-500 hover:text-slate-800'
          }`}
        >
          3. Giao tiếp Everyday English
        </button>

        <button
          onClick={() => setActiveSection('vocab')}
          className={`pb-3 transition-colors relative whitespace-nowrap ${
            activeSection === 'vocab'
              ? 'text-purple-700 border-b-2 border-purple-700 font-extrabold'
              : 'text-slate-500 hover:text-slate-800'
          }`}
        >
          4. Từ vựng cốt lõi ({unit.vocabulary.length})
        </button>
      </div>

      {/* SECTION 1: GRAMMAR */}
      {activeSection === 'grammar' && (
        <div className="space-y-6">
          {unit.grammar.map((g, idx) => (
            <div key={idx} className="bg-white rounded-3xl border border-slate-200/90 p-6 shadow-xs space-y-4">
              <div className="flex items-center gap-2">
                <span className="w-7 h-7 rounded-lg bg-purple-100 text-purple-700 font-black text-xs flex items-center justify-center shrink-0">
                  {idx + 1}
                </span>
                <h3 className="text-base sm:text-lg font-bold text-slate-900">{g.title}</h3>
              </div>

              {/* Formula card */}
              <div className="p-4 rounded-2xl bg-slate-900 text-amber-300 font-mono text-xs sm:text-sm whitespace-pre-line shadow-inner">
                {g.formula}
              </div>

              {/* Explanation */}
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {g.explanation}
              </p>

              {/* Examples */}
              <div className="space-y-2 pt-2">
                <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  Ví dụ minh họa chuẩn SGK:
                </div>
                <div className="space-y-2">
                  {g.examples.map((ex, eIdx) => (
                    <div key={eIdx} className="p-3 rounded-xl bg-purple-50/50 border border-purple-100/80 text-xs sm:text-sm flex items-start justify-between gap-3">
                      <div>
                        <div className="font-semibold text-slate-900">{ex.en}</div>
                        <div className="text-slate-500 mt-0.5 italic">{ex.vi}</div>
                      </div>
                      <button
                        onClick={() => speakEnglish(ex.en)}
                        className="p-1.5 rounded-lg bg-white hover:bg-purple-100 text-purple-700 shrink-0 border border-purple-200 shadow-2xs"
                        title="Nghe phát âm"
                      >
                        <Volume2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Extra note */}
              {g.note && (
                <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-900 font-medium">
                  💡 <strong>Ghi chú quan trọng:</strong> {g.note}
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* SECTION 2: PRONUNCIATION */}
      {activeSection === 'pronunciation' && (
        <div className="bg-white rounded-3xl border border-slate-200/90 p-6 shadow-xs space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-700">
              Trọng tâm phát âm
            </span>
            <h3 className="text-xl font-bold text-slate-900">{unit.pronunciation.title}</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {unit.pronunciation.description}
            </p>
          </div>

          {/* Minimal pairs interactive comparison */}
          {unit.pronunciation.pairs && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-indigo-50/60 border border-indigo-200 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="font-mono text-base font-black text-indigo-800">
                    {unit.pronunciation.pairs.sound1}
                  </div>
                  <span className="text-[11px] font-bold text-indigo-700 bg-indigo-100/80 px-2 py-0.5 rounded-md">
                    Chạm để nghe & xem mẹo đọc
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {unit.pronunciation.pairs.words1.map((w, i) => {
                    const info = getWordPhoneticsInfo(w);
                    return (
                      <div
                        key={i}
                        onClick={() => speakEnglish(w)}
                        className="p-2.5 rounded-xl bg-white border border-indigo-100 shadow-2xs hover:border-indigo-400 hover:shadow-xs transition-all cursor-pointer group space-y-1"
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-extrabold text-xs text-indigo-950 group-hover:text-indigo-600 transition-colors">
                            {w}
                          </span>
                          <Volume2 className="w-3.5 h-3.5 text-indigo-500 group-hover:scale-110 transition-transform" />
                        </div>
                        {info.ipa && (
                          <div className="text-[10px] font-mono text-indigo-700 font-semibold">{info.ipa}</div>
                        )}
                        <div className="text-[10px] text-amber-900 bg-amber-50 px-1.5 py-0.5 rounded border border-amber-200/80 font-medium">
                          {info.tip}
                        </div>
                        {info.vi && (
                          <div className="text-[11px] text-slate-600 font-medium">👉 {info.vi}</div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-sky-50/60 border border-sky-200 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="font-mono text-base font-black text-sky-800">
                    {unit.pronunciation.pairs.sound2}
                  </div>
                  <span className="text-[11px] font-bold text-sky-700 bg-sky-100/80 px-2 py-0.5 rounded-md">
                    Chạm để nghe & xem mẹo đọc
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {unit.pronunciation.pairs.words2.map((w, i) => {
                    const info = getWordPhoneticsInfo(w);
                    return (
                      <div
                        key={i}
                        onClick={() => speakEnglish(w)}
                        className="p-2.5 rounded-xl bg-white border border-sky-100 shadow-2xs hover:border-sky-400 hover:shadow-xs transition-all cursor-pointer group space-y-1"
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-extrabold text-xs text-sky-950 group-hover:text-sky-600 transition-colors">
                            {w}
                          </span>
                          <Volume2 className="w-3.5 h-3.5 text-sky-500 group-hover:scale-110 transition-transform" />
                        </div>
                        {info.ipa && (
                          <div className="text-[10px] font-mono text-sky-700 font-semibold">{info.ipa}</div>
                        )}
                        <div className="text-[10px] text-amber-900 bg-amber-50 px-1.5 py-0.5 rounded border border-amber-200/80 font-medium">
                          {info.tip}
                        </div>
                        {info.vi && (
                          <div className="text-[11px] text-slate-600 font-medium">👉 {info.vi}</div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {/* Sample sentences practice */}
          <div className="space-y-2 pt-2">
            <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              Luyện đọc câu chứa âm trọng tâm (Bấm để nghe):
            </div>
            <div className="space-y-2">
              {unit.pronunciation.examples.map((ex, i) => (
                <div
                  key={i}
                  className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm font-medium text-slate-800 flex items-center justify-between gap-3"
                >
                  <span>{ex}</span>
                  <button
                    onClick={() => speakEnglish(ex)}
                    className="p-1.5 rounded-lg bg-indigo-50 hover:bg-indigo-100 text-indigo-700 shrink-0 border border-indigo-200"
                  >
                    <Volume2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* SECTION 3: COMMUNICATION */}
      {activeSection === 'communication' && (
        <div className="bg-white rounded-3xl border border-slate-200/90 p-6 shadow-xs space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700">
              Giao tiếp hằng ngày (Everyday English)
            </span>
            <h3 className="text-xl font-bold text-slate-900">{unit.communication.situation}</h3>
          </div>

          {/* Key expressions list */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {unit.communication.expressions.map((exp, i) => (
              <div
                key={i}
                className="p-3.5 rounded-2xl bg-emerald-50/50 border border-emerald-100 text-xs sm:text-sm flex items-center justify-between gap-2"
              >
                <div>
                  <div className="font-bold text-emerald-950">{exp.en}</div>
                  <div className="text-slate-500 mt-0.5">{exp.vi}</div>
                </div>
                <button
                  onClick={() => speakEnglish(exp.en)}
                  className="p-1.5 rounded-lg bg-white hover:bg-emerald-100 text-emerald-700 shrink-0 border border-emerald-200"
                >
                  <Volume2 className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>

          {/* Sample Dialogue */}
          <div className="space-y-3 pt-2">
            <div className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
              <MessageSquare className="w-4 h-4 text-emerald-600" />
              <span>Đoạn hội thoại mẫu:</span>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              {unit.communication.sampleDialogue.map((line, i) => (
                <div key={i} className="text-xs sm:text-sm flex items-start justify-between gap-3">
                  <div>
                    <span className="font-extrabold text-indigo-700 mr-2">{line.speaker}:</span>
                    <span className="font-semibold text-slate-800">&ldquo;{line.text}&rdquo;</span>
                    <div className="text-slate-500 text-xs italic mt-0.5 ml-4">{line.vi}</div>
                  </div>
                  <button
                    onClick={() => speakEnglish(line.text)}
                    className="p-1.5 rounded-lg bg-white hover:bg-indigo-50 text-indigo-600 border border-slate-200 shrink-0"
                  >
                    <Volume2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* SECTION 4: VOCABULARY */}
      {activeSection === 'vocab' && (
        <div className="bg-white rounded-3xl border border-slate-200/90 p-6 shadow-xs space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-slate-900 text-lg">
              Từ vựng Unit {unit.id} ({unit.vocabulary.length} từ cốt lõi)
            </h3>
          </div>

          <div className="divide-y divide-slate-100">
            {unit.vocabulary.map((item) => (
              <div key={item.id} className="py-3 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                <div className="space-y-0.5">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-slate-900 text-sm sm:text-base">{item.word}</span>
                    <span className="text-xs font-mono text-indigo-600">{item.phonetic}</span>
                    <span className="text-[11px] px-1.5 py-0.5 rounded-md bg-slate-100 text-slate-500 uppercase">
                      {item.partOfSpeech}
                    </span>
                  </div>

                  {/* Gợi ý cách đọc tiếng Việt dễ hiểu */}
                  <div className="text-xs text-amber-900 bg-amber-50/90 px-2 py-0.5 rounded-md border border-amber-200/80 font-medium inline-block my-0.5">
                    {getReadingTip(item.word, item.phonetic, item.readingTip)}
                  </div>

                  <div className="text-xs font-semibold text-slate-800">{item.meaningVi}</div>
                  <div className="text-[11px] text-slate-400 italic">&ldquo;{item.exampleEn}&rdquo;</div>
                </div>

                <button
                  onClick={() => speakEnglish(item.word)}
                  className="p-2 rounded-xl bg-slate-50 hover:bg-indigo-50 text-indigo-600 border border-slate-200 shrink-0 self-end sm:self-center transition-colors"
                  title="Nghe phát âm"
                >
                  <Volume2 className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
