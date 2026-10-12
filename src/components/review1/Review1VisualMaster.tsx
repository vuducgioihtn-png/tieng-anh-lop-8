import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { 
  Sparkles, Volume2, CheckCircle2, RotateCcw, Lightbulb, 
  ArrowLeft, ArrowRight, Heart, Brain, Zap, Layers, Play,
  MessageCircle, HelpCircle, Trophy, BookOpen, Users,
  PenTool, Headphones, Smile, Eye, Share2, Award, FileText
} from 'lucide-react';
import { getReadingTip, getWordPhoneticsInfo } from '../../utils/pronunciationHelper';
import { speakEnglish } from '../../utils/audio';

interface Review1VisualMasterProps {
  onBack: () => void;
  onGoToQuiz?: () => void;
}

type TabMode = 'overview' | 'language' | 'skills';

export const Review1VisualMaster: React.FC<Review1VisualMasterProps> = ({
  onBack,
  onGoToQuiz
}) => {
  const [activeTab, setActiveTab] = useState<TabMode>('overview');

  // Text-to-speech helper (sử dụng duy nhất giọng NỮ vang sáng, ngân hay)
  const [activeSpeakingText, setActiveSpeakingText] = useState<string | null>(null);
  const speakText = (text: string) => {
    speakEnglish(text, {
      onStart: () => setActiveSpeakingText(text),
      onEnd: () => setActiveSpeakingText(null),
      onError: () => setActiveSpeakingText(null)
    });
  };

  const triggerConfetti = () => {
    try {
      confetti({
        particleCount: 60,
        spread: 70,
        origin: { y: 0.7 }
      });
    } catch {
      // fallback
    }
  };

  // State for Language Exercises (Trang 38 SGK)
  // Ex 1: Pronunciation (5 questions)
  const [pronAnswers, setPronAnswers] = useState<Record<number, string>>({});
  
  // Ex 2: Vocabulary MCQs (5 questions)
  const [vocabMcqAnswers, setVocabMcqAnswers] = useState<Record<number, string>>({});

  // Ex 3: Vocabulary Box Completion (5 questions)
  const [boxAnswers, setBoxAnswers] = useState<Record<number, string>>({});
  const [selectedBoxWord, setSelectedBoxWord] = useState<string | null>(null);

  // Ex 4: Grammar MCQs (5 questions)
  const [grammarMcqAnswers, setGrammarMcqAnswers] = useState<Record<number, string>>({});

  // Ex 5: Grammar bold word selection (5 questions)
  const [boldWordAnswers, setBoldWordAnswers] = useState<Record<number, string>>({});

  // State for Skills Exercises (Trang 39 SGK)
  // Reading MCQs (5 questions)
  const [readingAnswers, setReadingAnswers] = useState<Record<number, string>>({});

  // Listening Gap-fill (5 blanks)
  const [listenAnswers, setListenAnswers] = useState<Record<number, string>>({
    1: '', 2: '', 3: '', 4: '', 5: ''
  });
  const [listenChecked, setListenChecked] = useState<boolean>(false);

  // Writing Workbench
  const [writingEssay, setWritingEssay] = useState<string>('');
  const [showModelWriting, setShowModelWriting] = useState<boolean>(false);

  return (
    <div className="space-y-6 pb-20 max-w-6xl mx-auto">
      {/* Top Banner Header */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-700 p-6 sm:p-8 text-white shadow-xl">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-2">
            <button
              onClick={onBack}
              className="inline-flex items-center gap-2 text-xs font-bold text-emerald-200 hover:text-white transition-colors bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-xl backdrop-blur-sm cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Quay lại Trang chủ</span>
            </button>
            <div className="inline-flex items-center gap-2 ml-2 rounded-full bg-emerald-400/20 px-3 py-0.5 text-xs font-semibold text-emerald-200">
              <Award className="w-3.5 h-3.5 text-emerald-300" />
              <span>Tiếng Anh 8 Global Success • Trang 38 & 39 SGK</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-black tracking-tight">
              Review 1 (Units 1 - 2 - 3)
            </h1>
            <p className="text-emerald-100 text-xs sm:text-sm max-w-2xl leading-relaxed">
              Trạm ôn tập tổng hợp trực quan 2 trang SGK: Chinh phục toàn diện phần <strong>LANGUAGE</strong> (Phát âm, Từ vựng, Ngữ pháp) 
              và <strong>SKILLS</strong> (Đọc hiểu quản lý stress, Nói so sánh quê - phố, Nghe điền từ, Viết về sở thích người thân)!
            </p>
          </div>

          <div className="flex sm:flex-col gap-2 shrink-0">
            {onGoToQuiz && (
              <button
                onClick={onGoToQuiz}
                className="px-4 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-900 font-extrabold text-xs shadow-md transition-all flex items-center gap-2 cursor-pointer"
              >
                <Trophy className="w-4 h-4 text-slate-900" />
                <span>Làm Đề Thi Trắc Nghiệm</span>
              </button>
            )}
          </div>
        </div>

        {/* Tab switchers */}
        <div className="mt-6 pt-4 border-t border-white/20 flex gap-2 overflow-x-auto pb-1">
          <button
            onClick={() => setActiveTab('overview')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'overview'
                ? 'bg-white text-emerald-900 shadow-md font-black scale-105'
                : 'bg-white/10 text-white hover:bg-white/20'
            }`}
          >
            <Brain className="w-4 h-4" />
            <span>Toàn Cảnh Ôn Tập (Mindmap)</span>
          </button>

          <button
            onClick={() => setActiveTab('language')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'language'
                ? 'bg-white text-emerald-900 shadow-md font-black scale-105'
                : 'bg-white/10 text-white hover:bg-white/20'
            }`}
          >
            <Zap className="w-4 h-4" />
            <span>Trang 38: LANGUAGE (5 Bài Tập)</span>
          </button>

          <button
            onClick={() => setActiveTab('skills')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'skills'
                ? 'bg-white text-emerald-900 shadow-md font-black scale-105'
                : 'bg-white/10 text-white hover:bg-white/20'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>Trang 39: SKILLS (Đọc, Nói, Nghe, Viết)</span>
          </button>
        </div>
      </div>

      {/* ======================================================== */}
      {/* TAB 1: OVERVIEW MINDMAP */}
      {/* ======================================================== */}
      {activeTab === 'overview' && (
        <div className="space-y-6">
          <div className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl sm:text-2xl font-black text-slate-800 flex items-center gap-2">
                  <Brain className="w-6 h-6 text-emerald-600" />
                  <span>Bản Đồ Tư Duy Tổng Hợp Kiến Thức 3 Bài Học (Units 1 - 2 - 3)</span>
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Ôn nhanh trước khi làm bài tập trên lớp để nắm chắc trọn vẹn điểm số
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {/* Unit 1 */}
              <div className="rounded-2xl border-2 border-rose-200 bg-rose-50/50 p-5 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-black text-rose-900 text-sm">UNIT 1: LEISURE TIME</span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-rose-200 text-rose-800">Sở thích</span>
                </div>
                <div className="space-y-2 text-xs">
                  <div className="p-2.5 rounded-xl bg-white border border-rose-100">
                    <span className="font-bold text-rose-950">• Động từ chỉ sở thích:</span>
                    <p className="text-slate-600 mt-0.5">love, enjoy, like, dislike, hate + V-ing</p>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white border border-rose-100">
                    <span className="font-bold text-rose-950">• Cụm từ:</span>
                    <p className="text-slate-600 mt-0.5">be into, be fond of, be keen on, be interested in</p>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white border border-rose-100">
                    <span className="font-bold text-rose-950">• Phát âm:</span>
                    <p className="text-slate-600 mt-0.5">Âm ngắn /ʊ/ (good, cook) vs Âm dài /uː/ (cool, school)</p>
                  </div>
                </div>
              </div>

              {/* Unit 2 */}
              <div className="rounded-2xl border-2 border-emerald-200 bg-emerald-50/50 p-5 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-black text-emerald-900 text-sm">UNIT 2: LIFE IN THE COUNTRYSIDE</span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-200 text-emerald-800">Thôn quê</span>
                </div>
                <div className="space-y-2 text-xs">
                  <div className="p-2.5 rounded-xl bg-white border border-emerald-100">
                    <span className="font-bold text-emerald-950">• So sánh hơn Trạng từ:</span>
                    <p className="text-slate-600 mt-0.5">Ngắn: faster, harder, earlier<br />Dài: more slowly, more carefully</p>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white border border-emerald-100">
                    <span className="font-bold text-emerald-950">• Bất quy tắc:</span>
                    <p className="text-slate-600 mt-0.5">well → better, badly → worse, far → farther/further</p>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white border border-emerald-100">
                    <span className="font-bold text-emerald-950">• Phát âm:</span>
                    <p className="text-slate-600 mt-0.5">Âm lướt /ə/ (buffalo, activity) vs Âm /ɪ/ (village, cottage)</p>
                  </div>
                </div>
              </div>

              {/* Unit 3 */}
              <div className="rounded-2xl border-2 border-sky-200 bg-sky-50/50 p-5 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-black text-sky-900 text-sm">UNIT 3: TEENAGERS</span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-sky-200 text-sky-800">Giới trẻ</span>
                </div>
                <div className="space-y-2 text-xs">
                  <div className="p-2.5 rounded-xl bg-white border border-sky-100">
                    <span className="font-bold text-sky-950">• Câu đơn & Câu ghép:</span>
                    <p className="text-slate-600 mt-0.5">FANBOYS: <code>, and / but / so / or / for</code><br />Trạng từ: <code>; however, / ; therefore, / ; otherwise,</code></p>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white border border-sky-100">
                    <span className="font-bold text-sky-950">• Từ vựng:</span>
                    <p className="text-slate-600 mt-0.5">peer pressure, bully, focus on, forum, upload, browse</p>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white border border-sky-100">
                    <span className="font-bold text-sky-950">• Phát âm:</span>
                    <p className="text-slate-600 mt-0.5">Âm đôi /ʊə/ (tourist, curious) vs /ɔɪ/ (avoid, choice)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick jump to practice */}
            <div className="pt-4 flex justify-end">
              <button
                onClick={() => setActiveTab('language')}
                className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Bắt đầu giải bài tập Language (Trang 38)</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* TAB 2: LANGUAGE (Page 38 SGK) */}
      {/* ======================================================== */}
      {activeTab === 'language' && (
        <div className="space-y-6">
          {/* Section 1: Pronunciation (Activity 1) */}
          <div className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-sm space-y-5">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div>
                <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">Pronunciation • Bài 1 Trang 38 SGK</span>
                <h3 className="text-lg sm:text-xl font-black text-slate-800 mt-0.5">
                  1. Circle the word whose underlined part is pronounced differently
                </h3>
              </div>
              <span className="text-xs px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 font-bold">5 Câu</span>
            </div>

            <div className="space-y-3 text-xs sm:text-sm">
              {[
                {
                  id: 1,
                  options: [
                    { key: 'A', word: 'good', pron: '/ɡʊd/', sound: '/ʊ/', vi: 'tốt, hay' },
                    { key: 'B', word: 'cool', pron: '/kuːl/', sound: '/uː/', vi: 'mát mẻ' },
                    { key: 'C', word: 'foot', pron: '/fʊt/', sound: '/ʊ/', vi: 'bàn chân' },
                    { key: 'D', word: 'cook', pron: '/kʊk/', sound: '/ʊ/', vi: 'nấu nướng' }
                  ],
                  correct: 'B',
                  explain: "'cool' phát âm là âm dài /uː/, còn good, foot, cook đều phát âm là âm ngắn /ʊ/."
                },
                {
                  id: 2,
                  options: [
                    { key: 'A', word: 'June', pron: '/dʒuːn/', sound: '/uː/', vi: 'tháng Sáu' },
                    { key: 'B', word: 'rude', pron: '/ruːd/', sound: '/uː/', vi: 'thô lỗ' },
                    { key: 'C', word: 'truth', pron: '/truːθ/', sound: '/uː/', vi: 'sự thật' },
                    { key: 'D', word: 'put', pron: '/pʊt/', sound: '/ʊ/', vi: 'đặt, để' }
                  ],
                  correct: 'D',
                  explain: "'put' phát âm là âm ngắn /ʊ/, trong khi June, rude, truth đều phát âm là âm dài /uː/."
                },
                {
                  id: 3,
                  options: [
                    { key: 'A', word: 'village', pron: '/ˈvɪlɪdʒ/', sound: '/ɪ/', vi: 'ngôi làng' },
                    { key: 'B', word: 'buffalo', pron: '/ˈbʌfələʊ/', sound: '/ə/', vi: 'con trâu' },
                    { key: 'C', word: 'cottage', pron: '/ˈkɒtɪdʒ/', sound: '/ɪ/', vi: 'nhà tranh' },
                    { key: 'D', word: 'shortage', pron: '/ˈʃɔːtɪdʒ/', sound: '/ɪ/', vi: 'sự thiếu hụt' }
                  ],
                  correct: 'B',
                  explain: "'buffalo' có chữ 'a' phát âm là /ə/, còn đuôi '-age' trong village, cottage, shortage đều phát âm là /ɪdʒ/."
                },
                {
                  id: 4,
                  options: [
                    { key: 'A', word: 'ensure', pron: '/ɪnˈʃʊə(r)/', sound: '/ʃ/', vi: 'đảm bảo' },
                    { key: 'B', word: 'insure', pron: '/ɪnˈʃʊə(r)/', sound: '/ʃ/', vi: 'bảo hiểm' },
                    { key: 'C', word: 'picture', pron: '/ˈpɪktʃə(r)/', sound: '/tʃ/', vi: 'bức tranh' },
                    { key: 'D', word: 'surely', pron: '/ˈʃɔːli/', sound: '/ʃ/', vi: 'chắc chắn' }
                  ],
                  correct: 'C',
                  explain: "'picture' phát âm là âm /tʃ/ ('ch'), còn ensure, insure, surely đều phát âm là âm /ʃ/ ('sặng')."
                },
                {
                  id: 5,
                  options: [
                    { key: 'A', word: 'avoid', pron: '/əˈvɔɪd/', sound: '/ɔɪ/', vi: 'tránh né' },
                    { key: 'B', word: 'doing', pron: '/ˈduːɪŋ/', sound: '/uː/', vi: 'đang làm' },
                    { key: 'C', word: 'choice', pron: '/tʃɔɪs/', sound: '/ɔɪ/', vi: 'sự lựa chọn' },
                    { key: 'D', word: 'join', pron: '/dʒɔɪn/', sound: '/ɔɪ/', vi: 'tham gia' }
                  ],
                  correct: 'B',
                  explain: "'doing' phát âm là âm /uː/ (/ˈduːɪŋ/), còn avoid, choice, join đều chứa nguyên âm đôi /ɔɪ/."
                }
              ].map((q) => {
                const userChoice = pronAnswers[q.id];
                const isSelected = userChoice !== undefined;
                const isCorrect = userChoice === q.correct;
                return (
                  <div key={q.id} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-extrabold text-slate-800">Câu {q.id}: Chọn từ có phần gạch chân phát âm khác</span>
                      {isSelected && (
                        <span className={`text-xs font-bold ${isCorrect ? 'text-emerald-600' : 'text-rose-600'}`}>
                          {isCorrect ? '✓ Đúng hoàn toàn' : '✗ Chưa chính xác'}
                        </span>
                      )}
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                      {q.options.map((opt) => (
                        <button
                          key={opt.key}
                          onClick={() => {
                            setPronAnswers(prev => ({ ...prev, [q.id]: opt.key }));
                            speakText(opt.word);
                            if (opt.key === q.correct) triggerConfetti();
                          }}
                          className={`p-2.5 rounded-xl border text-left transition-all cursor-pointer space-y-1 ${
                            userChoice === opt.key
                              ? opt.key === q.correct
                                ? 'bg-emerald-50 border-emerald-500 ring-2 ring-emerald-500 shadow-sm'
                                : 'bg-rose-50 border-rose-500 ring-2 ring-rose-500 shadow-sm'
                              : 'bg-white border-slate-200 text-slate-700 hover:border-slate-400'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-extrabold text-xs text-slate-900">{opt.key}. {opt.word}</span>
                            <span className="text-[10px] font-mono font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">
                              {opt.sound}
                            </span>
                          </div>
                          <div className="text-[10px] text-slate-500 font-mono">{opt.pron}</div>
                          <div className="text-[10px] text-amber-900 bg-amber-50 px-1.5 py-0.5 rounded border border-amber-200 font-medium">
                            {getReadingTip(opt.word, opt.pron)}
                          </div>
                          <div className="text-[11px] text-slate-600 font-medium">
                            👉 {opt.vi}
                          </div>
                        </button>
                      ))}
                    </div>

                    {isSelected && (
                      <div className="p-2.5 rounded-xl bg-white border border-slate-200 text-xs text-slate-600">
                        <strong className="text-slate-800">Giải thích:</strong> {q.explain}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Section 2: Vocabulary MCQs (Activity 2) */}
          <div className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-sm space-y-5">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div>
                <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">Vocabulary • Bài 2 Trang 38 SGK</span>
                <h3 className="text-lg sm:text-xl font-black text-slate-800 mt-0.5">
                  2. Choose the correct answer A, B, or C
                </h3>
              </div>
              <span className="text-xs px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 font-bold">5 Câu</span>
            </div>

            <div className="space-y-3 text-xs sm:text-sm">
              {[
                {
                  id: 1,
                  question: "1. Mi is ________ gardening in her free time.",
                  options: ['A. in', 'B. into', 'C. to'],
                  correct: 'B',
                  explain: "Cấu trúc: 'be into sth' mang nghĩa là rất thích, say mê việc gì (Unit 1)."
                },
                {
                  id: 2,
                  question: "2. Mai is interested ________ building websites for her friends.",
                  options: ['A. of', 'B. with', 'C. in'],
                  correct: 'C',
                  explain: "Cấu trúc: 'be interested in + V-ing' nghĩa là quan tâm, thích thú làm việc gì."
                },
                {
                  id: 3,
                  question: "3. Minh is not fond of ________ puzzles because he thinks it takes a lot of time.",
                  options: ['A. making', 'B. doing', 'C. building'],
                  correct: 'B',
                  explain: "Cụm cố định: 'do puzzles' (giải câu đố, xếp hình)."
                },
                {
                  id: 4,
                  question: "4. I'm not keen on ________ our class photos to the forum.",
                  options: ['A. uploading', 'B. surfing', 'C. messaging'],
                  correct: 'A',
                  explain: "Cụm từ: 'upload photos to the forum' (tải/đăng ảnh lên diễn đàn lớp học)."
                },
                {
                  id: 5,
                  question: "5. While I was ________ some websites, I saw an advertisement about a resort.",
                  options: ['A. creating', 'B. browsing', 'C. uploading'],
                  correct: 'B',
                  explain: "'browse websites' nghĩa là lướt xem, duyệt các trang mạng."
                }
              ].map((q) => {
                const userChoice = vocabMcqAnswers[q.id];
                const isSelected = userChoice !== undefined;
                const isCorrect = userChoice === q.correct;
                return (
                  <div key={q.id} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                    <div className="font-extrabold text-slate-800">{q.question}</div>
                    <div className="flex flex-wrap gap-2">
                      {q.options.map((opt) => {
                        const optKey = opt.charAt(0);
                        return (
                          <button
                            key={opt}
                            onClick={() => {
                              setVocabMcqAnswers(prev => ({ ...prev, [q.id]: optKey }));
                              if (optKey === q.correct) triggerConfetti();
                            }}
                            className={`px-4 py-2 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                              userChoice === optKey
                                ? optKey === q.correct
                                  ? 'bg-emerald-600 text-white border-emerald-600 shadow-sm'
                                  : 'bg-rose-500 text-white border-rose-500 shadow-sm'
                                : 'bg-white border-slate-200 text-slate-700 hover:border-slate-400'
                            }`}
                          >
                            {opt}
                          </button>
                        );
                      })}
                    </div>
                    {isSelected && (
                      <div className="text-xs font-semibold text-slate-600 mt-1">
                        <span className={isCorrect ? 'text-emerald-600' : 'text-rose-600'}>
                          {isCorrect ? '✓ Chuẩn xác! ' : '✗ Sai rồi! '}
                        </span>
                        {q.explain}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Section 3: Vocabulary in Context (Activity 3) */}
          <div className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-sm space-y-5">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div>
                <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">Vocabulary • Bài 3 Trang 38 SGK</span>
                <h3 className="text-lg sm:text-xl font-black text-slate-800 mt-0.5">
                  3. Complete the sentences with the words from the box
                </h3>
              </div>
              <button
                onClick={() => setBoxAnswers({})}
                className="text-xs text-slate-500 hover:text-slate-800 flex items-center gap-1 cursor-pointer"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Làm lại</span>
              </button>
            </div>

            {/* Word Box */}
            <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-amber-950">
                  Hộp từ vựng SGK (Bấm để chọn từ hoặc nghe cách phát âm chuẩn):
                </span>
                <span className="text-[11px] text-amber-800 font-medium">Kèm phiên âm IPA & mẹo đọc</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2.5">
                {['bully', 'trained', 'hospitable', 'pressure', 'focus'].map((w) => {
                  const info = getWordPhoneticsInfo(w);
                  const isUsed = Object.values(boxAnswers).includes(w);
                  const isSelected = selectedBoxWord === w;
                  return (
                    <div
                      key={w}
                      className={`p-2.5 rounded-xl border transition-all flex flex-col justify-between space-y-1.5 shadow-2xs ${
                        isUsed
                          ? 'bg-slate-100 border-slate-200 opacity-60'
                          : isSelected
                          ? 'bg-amber-100 border-amber-500 ring-2 ring-amber-400'
                          : 'bg-white border-amber-200/90 hover:border-amber-400'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <button
                          disabled={isUsed}
                          onClick={() => setSelectedBoxWord(w)}
                          className={`font-mono font-black text-xs cursor-pointer ${
                            isUsed ? 'line-through text-slate-400' : 'text-slate-900 hover:text-amber-700'
                          }`}
                        >
                          {w}
                        </button>
                        <button
                          onClick={() => speakText(w)}
                          className="p-1 rounded-md text-amber-600 hover:bg-amber-100 transition-colors cursor-pointer"
                          title="Nghe phát âm"
                        >
                          <Volume2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      {info.ipa && (
                        <div className="text-[10px] font-mono font-semibold text-slate-500">
                          {info.ipa}
                        </div>
                      )}

                      <div className="text-[10px] text-amber-900 bg-amber-50/90 px-1.5 py-0.5 rounded border border-amber-200 font-medium leading-tight">
                        {info.tip}
                      </div>

                      <div className="text-[11px] text-slate-700 font-medium">
                        👉 {info.vi}
                      </div>

                      <button
                        disabled={isUsed}
                        onClick={() => setSelectedBoxWord(w)}
                        className={`w-full py-1 rounded-lg text-[11px] font-bold transition-all cursor-pointer ${
                          isUsed
                            ? 'bg-slate-200 text-slate-400 cursor-not-allowed'
                            : isSelected
                            ? 'bg-amber-600 text-white shadow-xs'
                            : 'bg-amber-100/80 text-amber-900 hover:bg-amber-200'
                        }`}
                      >
                        {isUsed ? 'Đã điền' : isSelected ? '✓ Đang chọn' : 'Chọn từ này'}
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>

            <p className="text-xs text-slate-500 italic">
              👉 Bấm chọn từ ở hộp trên rồi bấm vào ô trống tương ứng bên dưới để điền từ:
            </p>

            <div className="space-y-3 text-xs sm:text-sm">
              {[
                { id: 1, prefix: "1. People in my village are very ", suffix: " to all visitors.", correct: 'hospitable', mean: 'hiếu khách, niềm nở' },
                { id: 2, prefix: "2. Parents in our village don't put much ", suffix: " on their children to do well at school.", correct: 'pressure', mean: 'áp lực điểm số' },
                { id: 3, prefix: "3. In my school, we can ", suffix: " on study and play, and do not have to worry about bullies.", correct: 'focus', mean: 'tập trung (focus on)' },
                { id: 4, prefix: "4. The best ", suffix: " player in our chess club will not be able to join the competition.", correct: 'trained', mean: 'được huấn luyện bài bản (trained player)' },
                { id: 5, prefix: "5. If a boy uses his strength to frighten weaker peers, he is a ", suffix: ".", correct: 'bully', mean: 'kẻ bắt nạt' },
              ].map((q) => {
                const filled = boxAnswers[q.id];
                const isCorrect = filled === q.correct;
                return (
                  <div key={q.id} className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div className="flex-1 font-medium text-slate-800">
                      <span>{q.prefix}</span>
                      <button
                        onClick={() => {
                          if (selectedBoxWord) {
                            setBoxAnswers(prev => ({ ...prev, [q.id]: selectedBoxWord }));
                            if (selectedBoxWord === q.correct) triggerConfetti();
                            setSelectedBoxWord(null);
                          }
                        }}
                        className={`inline-block mx-1 px-3 py-1 rounded-lg font-bold border border-dashed transition-all cursor-pointer ${
                          filled
                            ? isCorrect ? 'bg-emerald-100 text-emerald-900 border-emerald-400' : 'bg-rose-100 text-rose-900 border-rose-400'
                            : 'bg-white text-slate-400 border-slate-400 hover:border-amber-500'
                        }`}
                      >
                        {filled || '_______ [Chạm để điền]'}
                      </button>
                      <span>{q.suffix}</span>
                    </div>

                    {filled && (
                      <span className={`text-xs font-bold shrink-0 ${isCorrect ? 'text-emerald-600' : 'text-rose-600'}`}>
                        {isCorrect ? '✓ Đúng' : `✗ Đáp án: ${q.correct}`}
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Section 4: Grammar MCQs (Activity 4) */}
          <div className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-sm space-y-5">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div>
                <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">Grammar • Bài 4 Trang 38 SGK</span>
                <h3 className="text-lg sm:text-xl font-black text-slate-800 mt-0.5">
                  4. Choose the correct answer A, B, or C
                </h3>
              </div>
              <span className="text-xs px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 font-bold">5 Câu</span>
            </div>

            <div className="space-y-3 text-xs sm:text-sm">
              {[
                {
                  id: 1,
                  question: "1. Mai dislikes ________ her pictures to Facebook. She prefers not to show them to others.",
                  options: ['A. to upload', 'B. uploading', 'C. upload'],
                  correct: 'B',
                  explain: "Động từ 'dislike' theo sau bởi danh động từ V-ing (uploading)."
                },
                {
                  id: 2,
                  question: "2. We enjoy ________ photos of different types of scenery, so we took a camera with us.",
                  options: ['A. taking', 'B. to take', 'C. take'],
                  correct: 'A',
                  explain: "Động từ 'enjoy' bắt buộc cộng V-ing (taking photos)."
                },
                {
                  id: 3,
                  question: "3. She did the puzzles ________ than I did, so I won the competition.",
                  options: ['A. slowly', 'B. slower', 'C. more slowly'],
                  correct: 'C',
                  explain: "'slowly' là trạng từ dài kết thúc bằng đuôi -ly, dạng so sánh hơn là 'more slowly than'."
                },
                {
                  id: 4,
                  question: "4. Tom worked ________ than Mi; therefore, he got better results in the exams.",
                  options: ['A. hardly', 'B. harder', 'C. more hard'],
                  correct: 'B',
                  explain: "So sánh hơn của trạng từ ngắn 'hard' là 'harder'. Lưu ý: 'hardly' nghĩa là 'hầu như không', không dùng so sánh."
                },
                {
                  id: 5,
                  question: "5. Now they all chat with each other ________ than before because they have smartphones.",
                  options: ['A. more frequently', 'B. frequent', 'C. frequently'],
                  correct: 'A',
                  explain: "Bổ nghĩa cho động từ 'chat' ở dạng so sánh hơn là trạng từ 'more frequently than'."
                }
              ].map((q) => {
                const userChoice = grammarMcqAnswers[q.id];
                const isSelected = userChoice !== undefined;
                const isCorrect = userChoice === q.correct;
                return (
                  <div key={q.id} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                    <div className="font-extrabold text-slate-800">{q.question}</div>
                    <div className="flex flex-wrap gap-2">
                      {q.options.map((opt) => {
                        const optKey = opt.charAt(0);
                        return (
                          <button
                            key={opt}
                            onClick={() => {
                              setGrammarMcqAnswers(prev => ({ ...prev, [q.id]: optKey }));
                              if (optKey === q.correct) triggerConfetti();
                            }}
                            className={`px-4 py-2 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                              userChoice === optKey
                                ? optKey === q.correct
                                  ? 'bg-emerald-600 text-white border-emerald-600 shadow-sm'
                                  : 'bg-rose-500 text-white border-rose-500 shadow-sm'
                                : 'bg-white border-slate-200 text-slate-700 hover:border-slate-400'
                            }`}
                          >
                            {opt}
                          </button>
                        );
                      })}
                    </div>
                    {isSelected && (
                      <div className="text-xs font-semibold text-slate-600 mt-1">
                        <span className={isCorrect ? 'text-emerald-600' : 'text-rose-600'}>
                          {isCorrect ? '✓ Chuẩn xác! ' : '✗ Sai rồi! '}
                        </span>
                        {q.explain}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Section 5: Grammar - Underline correct bold word (Activity 5) */}
          <div className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-sm space-y-5">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div>
                <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">Grammar • Bài 5 Trang 38 SGK</span>
                <h3 className="text-lg sm:text-xl font-black text-slate-800 mt-0.5">
                  5. Underline the correct bold word in each sentence
                </h3>
              </div>
              <span className="text-xs px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 font-bold">5 Câu</span>
            </div>

            <div className="space-y-3 text-xs sm:text-sm">
              {[
                {
                  id: 1,
                  sentence: "Minh is interested in painting, [so / but] yesterday he decided to join the arts and crafts club.",
                  options: ['so', 'but'],
                  correct: 'so',
                  explain: "Ý kết quả logic: Minh thích vẽ tranh, VÌ VẬY (so) hôm qua bạn ấy quyết định tham gia CLB thủ công mỹ thuật."
                },
                {
                  id: 2,
                  sentence: "Life in the city seems to be more comfortable, [otherwise / but] I prefer life in the countryside.",
                  options: ['otherwise', 'but'],
                  correct: 'but',
                  explain: "Ý đối lập tương phản (tiện nghi hơn NHƯNG tôi thích cuộc sống thôn quê hơn). Nối bằng dấu phẩy và liên từ 'but'."
                },
                {
                  id: 3,
                  sentence: "She tries to focus more on her studies; [therefore / otherwise], she won't pass her exams.",
                  options: ['therefore', 'otherwise'],
                  correct: 'otherwise',
                  explain: "'otherwise' = nếu không thì (Cô ấy cố gắng tập trung học bài; nếu không thì cô ấy sẽ thi trượt)."
                },
                {
                  id: 4,
                  sentence: "During harvest time, farmers have to get up earlier, [and / so] they have to work harder.",
                  options: ['and', 'so'],
                  correct: 'and',
                  explain: "Bổ sung thông tin: Vào mùa gặt, nông dân phải dậy sớm hơn VÀ (and) họ phải làm việc vất vả hơn."
                },
                {
                  id: 5,
                  sentence: "Parents now have higher expectations of their children; [therefore / so], children are under more pressure than before.",
                  options: ['therefore', 'so'],
                  correct: 'therefore',
                  explain: "Quy tắc dấu câu: Đứng giữa dấu chấm phẩy và dấu phẩy (; therefore,) bắt buộc dùng trạng từ liên kết 'therefore', không dùng 'so' (so chỉ đi với dấu phẩy: , so)."
                }
              ].map((q) => {
                const userChoice = boldWordAnswers[q.id];
                const isSelected = userChoice !== undefined;
                const isCorrect = userChoice === q.correct;
                return (
                  <div key={q.id} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                    <div className="font-medium text-slate-800 leading-relaxed">
                      {q.sentence.split('[').map((part, index) => {
                        if (index === 0) return part;
                        const [choicePart, rest] = part.split(']');
                        return (
                          <span key={index}>
                            <span className="inline-flex gap-1 mx-1.5 font-bold">
                              {q.options.map((opt) => (
                                <button
                                  key={opt}
                                  onClick={() => {
                                    setBoldWordAnswers(prev => ({ ...prev, [q.id]: opt }));
                                    if (opt === q.correct) triggerConfetti();
                                  }}
                                  className={`px-3 py-1 rounded-lg border text-xs transition-all cursor-pointer ${
                                    userChoice === opt
                                      ? opt === q.correct
                                        ? 'bg-emerald-600 text-white font-black shadow-sm'
                                        : 'bg-rose-500 text-white font-black shadow-sm'
                                      : 'bg-white text-slate-700 border-slate-300 hover:border-emerald-500'
                                  }`}
                                >
                                  {opt}
                                </button>
                              ))}
                            </span>
                            {rest}
                          </span>
                        );
                      })}
                    </div>
                    {isSelected && (
                      <div className="text-xs font-semibold text-slate-600 mt-1">
                        <span className={isCorrect ? 'text-emerald-600' : 'text-rose-600'}>
                          {isCorrect ? '✓ Hoàn toàn chính xác! ' : '✗ Chưa đúng! '}
                        </span>
                        {q.explain}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* TAB 3: SKILLS (Page 39 SGK) */}
      {/* ======================================================== */}
      {activeTab === 'skills' && (
        <div className="space-y-6">
          {/* Section 1: Reading (Activity 1) */}
          <div className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-sm space-y-5">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div>
                <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">Reading • Bài 1 Trang 39 SGK</span>
                <h3 className="text-lg sm:text-xl font-black text-slate-800 mt-0.5">
                  1. Read the passage and choose the correct answer A, B, or C
                </h3>
              </div>
              <button
                onClick={() => speakText("Stress is a normal part of teens' life; however, too much stress can be dangerous. When you face stress, use some of these strategies to manage it. Getting a good night's sleep: Teens need eight to ten hours of sleep a day. Doing exercise: You should exercise for at least 60 minutes a day. Talking it out: Talk to an adult you trust. Writing about it: Write down your problems. Going outside: Spend some time in nature.")}
                className="px-3 py-1.5 rounded-xl bg-emerald-100 hover:bg-emerald-200 text-emerald-900 font-bold text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <Volume2 className="w-3.5 h-3.5 text-emerald-700" />
                <span>Nghe bài đọc</span>
              </button>
            </div>

            {/* Reading Passage Box */}
            <div className="p-5 rounded-2xl bg-amber-50/60 border border-amber-200 text-xs sm:text-sm text-slate-700 space-y-3 leading-relaxed">
              <p>
                Stress is a normal part of teens’ life; however, too much stress can be dangerous. When you face stress, use some of these strategies to manage it.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
                <div className="p-3 rounded-xl bg-white border border-amber-100 space-y-1">
                  <span className="font-bold text-amber-900">😴 Getting a good night’s sleep:</span>
                  <p className="text-slate-600">Teens need eight to ten hours of sleep a day, so get enough sleep. To make it easier, keep your smartphone away from your bed.</p>
                </div>
                <div className="p-3 rounded-xl bg-white border border-amber-100 space-y-1">
                  <span className="font-bold text-amber-900">🏃 Doing exercise:</span>
                  <p className="text-slate-600">Doing enough physical exercise is important for teens. You should exercise for at least 60 minutes a day.</p>
                </div>
                <div className="p-3 rounded-xl bg-white border border-amber-100 space-y-1">
                  <span className="font-bold text-amber-900">🗣️ Talking it out:</span>
                  <p className="text-slate-600">Talk about your stress to an adult. This person can be your teacher, parent, or someone you trust.</p>
                </div>
                <div className="p-3 rounded-xl bg-white border border-amber-100 space-y-1">
                  <span className="font-bold text-amber-900">✍️ Writing about it:</span>
                  <p className="text-slate-600">You can reduce your stress by writing down your problems. You can also write about times you felt good and soon you will start to feel better.</p>
                </div>
                <div className="p-3 rounded-xl bg-white border border-amber-100 space-y-1 md:col-span-2">
                  <span className="font-bold text-amber-900">🌳 Going outside:</span>
                  <p className="text-slate-600">You will feel more relaxed if you spend some time in nature. Places with green trees and fresh air will make you feel better.</p>
                </div>
              </div>
            </div>

            {/* Reading Questions */}
            <div className="space-y-3 text-xs sm:text-sm">
              {[
                {
                  id: 1,
                  q: "1. The passage is about ________.",
                  options: ['A. the causes of stress', 'B. strategies to deal with stress', 'C. the dangers of stress'],
                  correct: 'B',
                  explain: "Đoạn 1 nêu rõ: 'use some of these strategies to manage it' (các chiến lược/biện pháp đối phó với căng thẳng)."
                },
                {
                  id: 2,
                  q: "2. How many hours of sleep a day do teens need?",
                  options: ['A. 6 to 8.', 'B. 7 to 9.', 'C. 8 to 10.'],
                  correct: 'C',
                  explain: "Trong bài viết: 'Teens need eight to ten hours of sleep a day' (8 đến 10 tiếng)."
                },
                {
                  id: 3,
                  q: "3. How much time should teens spend on daily exercise?",
                  options: ['A. At least an hour.', 'B. Exactly 60 minutes.', 'C. No more than 60 minutes.'],
                  correct: 'A',
                  explain: "'at least 60 minutes a day' = ít nhất 1 giờ (at least an hour)."
                },
                {
                  id: 4,
                  q: "4. Teens may talk about their problems to ________.",
                  options: ['A. a friend in their class', 'B. a young person they like', 'C. someone they trust'],
                  correct: 'C',
                  explain: "Trong bài viết: 'This person can be your teacher, parent, or someone you trust' (người bạn tin tưởng)."
                },
                {
                  id: 5,
                  q: "5. Teens can feel better when they ________.",
                  options: ['A. are at home with their parents', 'B. get closer to nature', 'C. write to a friend'],
                  correct: 'B',
                  explain: "Trong bài viết: 'spend some time in nature. Places with green trees and fresh air will make you feel better' (hòa mình vào thiên nhiên)."
                }
              ].map((item) => {
                const userChoice = readingAnswers[item.id];
                const isCorrect = userChoice === item.correct;
                return (
                  <div key={item.id} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                    <div className="font-extrabold text-slate-800">{item.q}</div>
                    <div className="flex flex-wrap gap-2">
                      {item.options.map((opt) => {
                        const optKey = opt.charAt(0);
                        return (
                          <button
                            key={opt}
                            onClick={() => {
                              setReadingAnswers(prev => ({ ...prev, [item.id]: optKey }));
                              if (optKey === item.correct) triggerConfetti();
                            }}
                            className={`px-3.5 py-1.5 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                              userChoice === optKey
                                ? optKey === item.correct
                                  ? 'bg-emerald-600 text-white border-emerald-600'
                                  : 'bg-rose-500 text-white border-rose-500'
                                : 'bg-white border-slate-200 text-slate-700 hover:border-slate-400'
                            }`}
                          >
                            {opt}
                          </button>
                        );
                      })}
                    </div>
                    {userChoice && (
                      <div className="text-xs text-slate-600 mt-1">
                        <strong className={isCorrect ? 'text-emerald-600' : 'text-rose-600'}>
                          {isCorrect ? '✓ Đúng: ' : '✗ Sai: '}
                        </strong>
                        {item.explain}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Section 2: Speaking (Activity 2) */}
          <div className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-sm space-y-4">
            <div className="border-b border-slate-100 pb-3">
              <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">Speaking • Bài 2 Trang 39 SGK</span>
              <h3 className="text-lg sm:text-xl font-black text-slate-800 mt-0.5">
                2. Phỏng vấn theo cặp: Cuộc sống Nông thôn vs Thành phố
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
              <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 space-y-2">
                <span className="font-black text-emerald-900 text-sm">1. Reasons people like the countryside:</span>
                <ul className="text-slate-700 space-y-1">
                  <li>• Fresh air, green paddy fields</li>
                  <li>• Peaceful, quiet, less traffic</li>
                  <li>• Friendly and hospitable neighbors</li>
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 space-y-2">
                <span className="font-black text-rose-900 text-sm">2. Reasons people dislike the countryside:</span>
                <ul className="text-slate-700 space-y-1">
                  <li>• Fewer entertainment places</li>
                  <li>• Less modern public transport</li>
                  <li>• Far from big shopping malls & hospitals</li>
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-sky-50 border border-sky-200 space-y-2">
                <span className="font-black text-sky-900 text-sm">3. Advantages & disadvantages of the city:</span>
                <ul className="text-slate-700 space-y-1">
                  <li>• Advantage: Convenient, cinemas, good schools</li>
                  <li>• Disadvantage: Traffic jams, air pollution, noisy</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Section 3: Listening (Activity 3) */}
          <div className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-sm space-y-5">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div>
                <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">Listening • Bài 3 Trang 39 SGK</span>
                <h3 className="text-lg sm:text-xl font-black text-slate-800 mt-0.5">
                  3. Listen to Tom and Mai talking. Fill in each blank with ONE word
                </h3>
              </div>
              <button
                onClick={() => speakText("Tom: In the city, there are many places for entertainment. It is more convenient to get around, and there are many means of public transport. Mai: But in the countryside, it is peaceful and quiet. Things are simple and lovely, and people are kind and hospitable.")}
                className="px-3 py-1.5 rounded-xl bg-emerald-100 hover:bg-emerald-200 text-emerald-900 font-bold text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <Volume2 className="w-3.5 h-3.5 text-emerald-700" />
                <span>Nghe hội thoại Tom & Mai</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
              {/* City */}
              <div className="p-5 rounded-2xl bg-sky-50/70 border border-sky-200 space-y-3">
                <h4 className="font-black text-sky-900 text-base">In the city (Ở thành phố):</h4>
                <div className="space-y-3">
                  <div>
                    <span className="text-slate-700">- There are many (1) </span>
                    <input
                      type="text"
                      value={listenAnswers[1]}
                      onChange={(e) => setListenAnswers({ ...listenAnswers, 1: e.target.value })}
                      placeholder="places"
                      className="w-24 px-2 py-0.5 rounded border border-sky-300 font-bold text-sky-900 outline-none"
                    />
                    <span className="text-slate-700"> for entertainment.</span>
                  </div>
                  <div>
                    <span className="text-slate-700">- It is more (2) </span>
                    <input
                      type="text"
                      value={listenAnswers[2]}
                      onChange={(e) => setListenAnswers({ ...listenAnswers, 2: e.target.value })}
                      placeholder="convenient"
                      className="w-28 px-2 py-0.5 rounded border border-sky-300 font-bold text-sky-900 outline-none"
                    />
                    <span className="text-slate-700"> to get around.</span>
                  </div>
                  <div>
                    <span className="text-slate-700">- There are many means of (3) </span>
                    <input
                      type="text"
                      value={listenAnswers[3]}
                      onChange={(e) => setListenAnswers({ ...listenAnswers, 3: e.target.value })}
                      placeholder="public"
                      className="w-24 px-2 py-0.5 rounded border border-sky-300 font-bold text-sky-900 outline-none"
                    />
                    <span className="text-slate-700"> transport.</span>
                  </div>
                </div>
              </div>

              {/* Countryside */}
              <div className="p-5 rounded-2xl bg-emerald-50/70 border border-emerald-200 space-y-3">
                <h4 className="font-black text-emerald-900 text-base">In the countryside (Ở nông thôn):</h4>
                <div className="space-y-3">
                  <div>
                    <span className="text-slate-700">- It is peaceful and (4) </span>
                    <input
                      type="text"
                      value={listenAnswers[4]}
                      onChange={(e) => setListenAnswers({ ...listenAnswers, 4: e.target.value })}
                      placeholder="quiet"
                      className="w-24 px-2 py-0.5 rounded border border-emerald-300 font-bold text-emerald-900 outline-none"
                    />
                    <span className="text-slate-700">.</span>
                  </div>
                  <div>
                    <span className="text-slate-700">- Things are simple and lovely.</span>
                  </div>
                  <div>
                    <span className="text-slate-700">- People are kind and (5) </span>
                    <input
                      type="text"
                      value={listenAnswers[5]}
                      onChange={(e) => setListenAnswers({ ...listenAnswers, 5: e.target.value })}
                      placeholder="friendly / hospitable"
                      className="w-36 px-2 py-0.5 rounded border border-emerald-300 font-bold text-emerald-900 outline-none"
                    />
                    <span className="text-slate-700">.</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-2">
              <span className="text-xs text-slate-500">
                {listenChecked && '✓ Đáp án chuẩn SGK: (1) places - (2) convenient - (3) public - (4) quiet - (5) friendly / hospitable'}
              </span>
              <button
                onClick={() => {
                  setListenChecked(true);
                  triggerConfetti();
                }}
                className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md transition-all cursor-pointer"
              >
                Kiểm tra đáp án
              </button>
            </div>
          </div>

          {/* Section 4: Writing Workbench (Activity 4) */}
          <div className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-sm space-y-5">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div>
                <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">Writing • Bài 4 Trang 39 SGK</span>
                <h3 className="text-lg sm:text-xl font-black text-slate-800 mt-0.5">
                  4. Viết đoạn văn (80 - 100 từ) về hoạt động giải trí của người thân
                </h3>
              </div>
              <button
                onClick={() => setShowModelWriting(!showModelWriting)}
                className="px-3 py-1.5 rounded-xl bg-amber-100 hover:bg-amber-200 text-amber-900 font-bold text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <FileText className="w-3.5 h-3.5 text-amber-700" />
                <span>{showModelWriting ? 'Ẩn đoạn văn mẫu' : 'Xem đoạn văn mẫu chuẩn điểm 10'}</span>
              </button>
            </div>

            {/* Model Essay Box */}
            {showModelWriting && (
              <div className="p-5 rounded-2xl bg-amber-50 border border-amber-200 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-amber-900">Đoạn văn mẫu: Sở thích làm vườn của bố (92 từ)</span>
                  <button
                    onClick={() => speakText("In his free time, my father likes doing gardening. He usually spends one or two hours every weekend in our small backyard. He enjoys planting colourful flowers and growing fresh vegetables with my mother and me. He loves watering the rose bushes and watching them grow day by day. My father prefers gardening to watching TV because it helps him relax after a stressful working week. Moreover, gardening keeps him active and brings fresh organic vegetables for our family meals. In short, gardening is a wonderful and healthy hobby.")}
                    className="text-xs text-amber-800 font-bold flex items-center gap-1 cursor-pointer"
                  >
                    <Volume2 className="w-3.5 h-3.5" />
                    <span>Nghe đọc bài mẫu</span>
                  </button>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 font-serif italic leading-relaxed">
                  "In his free time, my father likes doing gardening. He usually spends one or two hours every weekend in our small backyard. He enjoys planting colourful flowers and growing fresh vegetables with my mother and me. He loves watering the rose bushes and watching them grow day by day. My father prefers gardening to watching TV because it helps him relax after a stressful working week. Moreover, gardening keeps him active and brings fresh organic vegetables for our family meals. In short, gardening is a wonderful and healthy hobby."
                </p>
                <div className="p-3 rounded-xl bg-white border border-amber-100 text-xs text-slate-600">
                  <strong>Dịch nghĩa:</strong> Trong thời gian rảnh rỗi, bố tôi rất thích làm vườn. Bố thường dành một hoặc hai giờ mỗi cuối tuần ở sân sau nhỏ của gia đình. Bố thích trồng những bông hoa rực rỡ và rau sạch cùng tôi và mẹ. Bố thích tưới những bụi hoa hồng và ngắm nhìn chúng lớn lên từng ngày. Bố thích làm vườn hơn là xem tivi vì nó giúp bố thư giãn sau một tuần làm việc căng thẳng. Hơn nữa, làm vườn giúp bố luôn năng động và mang lại rau sạch cho bữa cơm gia đình. Tóm lại, làm vườn là một sở thích tuyệt vời và lành mạnh.
                </div>
              </div>
            )}

            {/* Writing Input Workbench */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-slate-700">Khung viết bài của học sinh (Bắt đầu với câu mở đầu gợi ý):</span>
                <span className={`font-bold ${writingEssay.trim().split(/\s+/).filter(Boolean).length >= 80 ? 'text-emerald-600' : 'text-slate-500'}`}>
                  Số từ: {writingEssay.trim().split(/\s+/).filter(Boolean).length} / 80 - 100 từ
                </span>
              </div>
              <textarea
                value={writingEssay}
                onChange={(e) => setWritingEssay(e.target.value)}
                placeholder="In his / her free time, my [father / mother / sister...] likes..."
                rows={6}
                className="w-full p-3.5 rounded-2xl border border-slate-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none text-xs sm:text-sm leading-relaxed"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
