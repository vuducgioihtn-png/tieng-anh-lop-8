import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { 
  Sparkles, Volume2, CheckCircle2, RotateCcw, Lightbulb, 
  ArrowLeft, ArrowRight, Heart, Brain, Zap, Layers, Play,
  MessageCircle, HelpCircle, Trophy, Compass, Check, X,
  FileText, Send, Star, User, BookOpen
} from 'lucide-react';
import { speakEnglish, playSound } from '../../utils/audio';
import { addXP } from '../../utils/spacedRepetition';

interface Unit1VisualMasterProps {
  onBack: () => void;
  onGoToFlashcards: () => void;
  onGoToQuiz: () => void;
}

export const Unit1VisualMaster: React.FC<Unit1VisualMasterProps> = ({
  onBack,
  onGoToFlashcards,
  onGoToQuiz
}) => {
  const [activeTab, setActiveTab] = useState<
    'mindmap' | 'getting_started' | 'closer_look_1' | 'closer_look_2' | 'communication' | 'skills' | 'looking_back'
  >('mindmap');
  const [showPhoneticsGuide, setShowPhoneticsGuide] = useState(true);

  // Mini-game: Sorter state (A Closer Look 2)
  const verbsToCategorize = [
    { verb: 'fancy', category: 'gerund_only', hint: 'FED D: Fancy chỉ đi với V-ing' },
    { verb: 'detest', category: 'gerund_only', hint: 'FED D: Detest chỉ đi với V-ing' },
    { verb: 'enjoy', category: 'gerund_only', hint: 'FED D: Enjoy chỉ đi với V-ing' },
    { verb: 'dislike', category: 'gerund_only', hint: 'FED D: Dislike chỉ đi với V-ing' },
    { verb: 'avoid', category: 'gerund_only', hint: 'FED D: Avoid chỉ đi với V-ing' },
    { verb: 'mind', category: 'gerund_only', hint: 'FED D: Mind chỉ đi với V-ing' },
    { verb: 'love', category: 'both', hint: 'LLHP: Love đi với cả V-ing & To-V' },
    { verb: 'like', category: 'both', hint: 'LLHP: Like đi với cả V-ing & To-V' },
    { verb: 'hate', category: 'both', hint: 'LLHP: Hate đi với cả V-ing & To-V' },
    { verb: 'prefer', category: 'both', hint: 'LLHP: Prefer đi với cả V-ing & To-V' }
  ];

  const [remainingVerbs, setRemainingVerbs] = useState(verbsToCategorize);
  const [gerundOnlyBucket, setGerundOnlyBucket] = useState<string[]>([]);
  const [bothBucket, setBothBucket] = useState<string[]>([]);
  const [sorterFeedback, setSorterFeedback] = useState<string | null>(null);

  const handleSortVerb = (verbItem: typeof verbsToCategorize[0], target: 'gerund_only' | 'both') => {
    if (verbItem.category === target) {
      playSound('correct');
      setSorterFeedback(`Chính xác! ${verbItem.hint}`);
      if (target === 'gerund_only') {
        setGerundOnlyBucket(prev => [...prev, verbItem.verb]);
      } else {
        setBothBucket(prev => [...prev, verbItem.verb]);
      }
      setRemainingVerbs(prev => prev.filter(v => v.verb !== verbItem.verb));

      if (remainingVerbs.length === 1) {
        playSound('win');
        addXP(60);
        confetti({ particleCount: 80, spread: 60, origin: { y: 0.6 } });
      }
    } else {
      playSound('wrong');
      setSorterFeedback('Chưa đúng rồi! Hãy nhớ thần chú: FED DAM (chỉ V-ing) và LLHP (cả hai).');
    }
  };

  const resetSorter = () => {
    setRemainingVerbs(verbsToCategorize);
    setGerundOnlyBucket([]);
    setBothBucket([]);
    setSorterFeedback(null);
  };

  // Getting Started Ex 2 Comprehension
  const [gsAnswers, setGsAnswers] = useState<Record<number, string>>({});
  const handleGsAnswer = (qId: number, ans: string, correct: string) => {
    playSound('pop');
    setGsAnswers(prev => ({ ...prev, [qId]: ans }));
    if (ans === correct) {
      playSound('correct');
      addXP(10);
    } else {
      playSound('wrong');
    }
  };

  // A Closer Look 1 Fill in blanks
  const [acl1Blanks, setAcl1Blanks] = useState<Record<number, string>>({});
  const handleAcl1Answer = (qId: number, val: string, correct: string) => {
    playSound('pop');
    setAcl1Blanks(prev => ({ ...prev, [qId]: val }));
    if (val === correct) {
      playSound('correct');
      addXP(10);
    } else {
      playSound('wrong');
    }
  };

  // Activity Benefits Matcher (A Closer Look 1 Ex 2)
  const [benefitAnswers, setBenefitAnswers] = useState<Record<number, string>>({});
  const benefitQuestions = [
    { id: 1, activity: 'doing DIY', correct: 'improves creativity & saves money', options: ['improves creativity & saves money', 'builds muscle strength', 'catches fish'] },
    { id: 2, activity: 'doing puzzles', correct: 'mental exercise & trains memory', options: ['mental exercise & trains memory', 'snowboarding in Alps', 'cooks faster'] },
    { id: 3, activity: 'playing badminton/sports', correct: 'improves muscle strength & fitness', options: ['improves muscle strength & fitness', 'saves money on internet', 'knits sweaters'] },
    { id: 4, activity: 'messaging friends', correct: 'keeps in touch & connects people', options: ['keeps in touch & connects people', 'improves balance on snow', 'harvests rice'] }
  ];

  const handleBenefitAnswer = (id: number, val: string, correct: string) => {
    playSound('pop');
    setBenefitAnswers(prev => ({ ...prev, [id]: val }));
    if (val === correct) {
      playSound('correct');
      addXP(10);
    } else {
      playSound('wrong');
    }
  };

  // Phonetics test /ʊ/ vs /u:/
  const phoneticsWords = [
    { word: 'cook', sound: '/ʊ/', ipa: '/kʊk/', tip: '🗣️ Đọc: [Cúc] • Âm /ʊ/ tròn môi ngắn, dứt khoát', vi: 'nấu nướng' },
    { word: 'school', sound: '/u:/', ipa: '/skuːl/', tip: '🗣️ Đọc: [S-kool] • Âm /uː/ chu môi kéo dài', vi: 'trường học' },
    { word: 'push', sound: '/ʊ/', ipa: '/pʊʃ/', tip: '🗣️ Đọc: [Pút-sh] • Âm sh uốn lưỡi thổi mạnh', vi: 'đẩy' },
    { word: 'group', sound: '/u:/', ipa: '/ɡruːp/', tip: '🗣️ Đọc: [Grúp] • Âm u kéo dài', vi: 'nhóm' },
    { word: 'June', sound: '/u:/', ipa: '/dʒuːn/', tip: '🗣️ Đọc: [Jun] • Âm j giật cằm, u kéo dài', vi: 'tháng sáu' },
    { word: 'would', sound: '/ʊ/', ipa: '/wʊd/', tip: '🗣️ Đọc: [Wút-d] • Âm l câm, u ngắn', vi: 'sẽ' },
    { word: 'woman', sound: '/ʊ/', ipa: '/ˈwʊmən/', tip: '🗣️ Đọc: [U-mừn] • Nhấn U (u ngắn)', vi: 'phụ nữ' },
    { word: 'move', sound: '/u:/', ipa: '/muːv/', tip: '🗣️ Đọc: [Mu-v] • u dài, đuôi v cắn răng', vi: 'di chuyển' },
    { word: 'foot', sound: '/ʊ/', ipa: '/fʊt/', tip: '🗣️ Đọc: [Phút-t] • Âm u ngắn dứt khoát', vi: 'bàn chân' },
    { word: 'cool', sound: '/u:/', ipa: '/kuːl/', tip: '🗣️ Đọc: [Cu-l] • u dài, uốn lưỡi l', vi: 'mát mẻ' },
    { word: 'pool', sound: '/u:/', ipa: '/puːl/', tip: '🗣️ Đọc: [Phu-l] • u dài, uốn lưỡi l', vi: 'hồ bơi' },
    { word: 'soup', sound: '/u:/', ipa: '/suːp/', tip: '🗣️ Đọc: [Súp] • u dài, bật p cuối', vi: 'canh, súp' },
    { word: 'sugar', sound: '/ʊ/', ipa: '/ˈʃʊɡə(r)/', tip: '🗣️ Đọc: [Shu-gờ] • s nặng uốn lưỡi, u ngắn', vi: 'đường ăn' },
    { word: 'food', sound: '/u:/', ipa: '/fuːd/', tip: '🗣️ Đọc: [Phút-d] • u dài, d bật nhẹ', vi: 'thức ăn' },
    { word: 'wolf', sound: '/ʊ/', ipa: '/wʊlf/', tip: '🗣️ Đọc: [Uu-l-ph] • u ngắn, đuôi lf', vi: 'chó sói' }
  ];

  const [phoneticIdx, setPhoneticIdx] = useState(0);
  const [phoneticResult, setPhoneticResult] = useState<'correct' | 'wrong' | null>(null);
  const currentPhonetic = phoneticsWords[phoneticIdx];

  const handleAnswerPhonetic = (chosen: '/ʊ/' | '/u:/') => {
    if (chosen === currentPhonetic.sound) {
      playSound('correct');
      setPhoneticResult('correct');
      addXP(10);
    } else {
      playSound('wrong');
      setPhoneticResult('wrong');
    }
  };

  // Sentence Transformation Practice
  const [transformAnswers, setTransformAnswers] = useState<Record<number, string>>({});
  const handleTransformAnswer = (id: number, ans: string, correct: string) => {
    playSound('pop');
    setTransformAnswers(prev => ({ ...prev, [id]: ans }));
    if (ans === correct) {
      playSound('correct');
      addXP(15);
    } else {
      playSound('wrong');
    }
  };

  // Looking back Checklist State
  const [checklist, setChecklist] = useState<Record<number, number>>({});
  const toggleCheck = (idx: number, level: number) => {
    playSound('pop');
    setChecklist(prev => ({ ...prev, [idx]: level }));
    addXP(10);
  };

  // Student Writing Practice Draft
  const [writingDraft, setWritingDraft] = useState('');
  const wordCount = writingDraft.trim() ? writingDraft.trim().split(/\s+/).length : 0;

  return (
    <div className="max-w-4xl mx-auto space-y-6 pb-20">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <button
            onClick={onBack}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-indigo-600 transition-colors mb-1"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Quay lại trang chủ</span>
          </button>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full bg-rose-100 text-rose-700 text-xs font-black uppercase tracking-wider">
              Khóa Học Toàn Diện
            </span>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Unit 1: Leisure Time • Sách Giáo Khoa Toàn Tập
            </h1>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Đầy đủ nội dung 10 trang SGK (trang 8 - 17) kèm bài tập tương tác, hội thoại âm thanh & tự đánh giá
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={onGoToFlashcards}
            className="px-3.5 py-2 rounded-xl bg-sky-50 hover:bg-sky-100 text-sky-700 font-bold text-xs border border-sky-200 transition-colors shadow-2xs flex items-center gap-1.5"
          >
            <Layers className="w-4 h-4" />
            <span>Thẻ Flashcard ({30} từ)</span>
          </button>
          <button
            onClick={onGoToQuiz}
            className="px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md transition-colors flex items-center gap-1.5"
          >
            <Sparkles className="w-4 h-4" />
            <span>Trắc Nghiệm ({12} câu)</span>
          </button>
        </div>
      </div>

      {/* Navigation Sub-Tabs covering ALL 7 Lessons */}
      <div className="flex border-b border-slate-200 gap-1.5 sm:gap-3 overflow-x-auto text-xs sm:text-sm font-bold pb-1 scrollbar-none">
        <button
          onClick={() => setActiveTab('mindmap')}
          className={`pb-2.5 px-2.5 transition-all whitespace-nowrap ${
            activeTab === 'mindmap'
              ? 'text-rose-600 border-b-2 border-rose-600 font-extrabold'
              : 'text-slate-500 hover:text-slate-800'
          }`}
        >
          🧠 Bản Đồ Tư Duy
        </button>

        <button
          onClick={() => setActiveTab('getting_started')}
          className={`pb-2.5 px-2.5 transition-all whitespace-nowrap ${
            activeTab === 'getting_started'
              ? 'text-indigo-600 border-b-2 border-indigo-600 font-extrabold'
              : 'text-slate-500 hover:text-slate-800'
          }`}
        >
          📖 Getting Started (Tr. 8-9)
        </button>

        <button
          onClick={() => setActiveTab('closer_look_1')}
          className={`pb-2.5 px-2.5 transition-all whitespace-nowrap ${
            activeTab === 'closer_look_1'
              ? 'text-amber-600 border-b-2 border-amber-600 font-extrabold'
              : 'text-slate-500 hover:text-slate-800'
          }`}
        >
          🎯 A Closer Look 1 (Tr. 10)
        </button>

        <button
          onClick={() => setActiveTab('closer_look_2')}
          className={`pb-2.5 px-2.5 transition-all whitespace-nowrap ${
            activeTab === 'closer_look_2'
              ? 'text-purple-600 border-b-2 border-purple-600 font-extrabold'
              : 'text-slate-500 hover:text-slate-800'
          }`}
        >
          ⚙️ A Closer Look 2 (Tr. 11)
        </button>

        <button
          onClick={() => setActiveTab('communication')}
          className={`pb-2.5 px-2.5 transition-all whitespace-nowrap ${
            activeTab === 'communication'
              ? 'text-emerald-600 border-b-2 border-emerald-600 font-extrabold'
              : 'text-slate-500 hover:text-slate-800'
          }`}
        >
          💬 Communication (Tr. 12-13)
        </button>

        <button
          onClick={() => setActiveTab('skills')}
          className={`pb-2.5 px-2.5 transition-all whitespace-nowrap ${
            activeTab === 'skills'
              ? 'text-sky-600 border-b-2 border-sky-600 font-extrabold'
              : 'text-slate-500 hover:text-slate-800'
          }`}
        >
          ✍️ Skills 1 & 2 (Tr. 14-15)
        </button>

        <button
          onClick={() => setActiveTab('looking_back')}
          className={`pb-2.5 px-2.5 transition-all whitespace-nowrap ${
            activeTab === 'looking_back'
              ? 'text-blue-700 border-b-2 border-blue-700 font-extrabold'
              : 'text-slate-500 hover:text-slate-800'
          }`}
        >
          📝 Looking Back & Checklist (Tr. 16-17)
        </button>
      </div>

      {/* 1. TAB MIND MAP */}
      {activeTab === 'mindmap' && (
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-indigo-900 via-slate-900 to-rose-950 rounded-3xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-rose-500/20 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/30 border border-rose-400/40 text-rose-200 text-xs font-bold">
                <Brain className="w-3.5 h-3.5 text-rose-300" />
                <span>Bản đồ tư duy toàn diện Unit 1</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black tracking-tight leading-tight">
                Leisure Time • Thời Gian Rảnh Rỗi Trong Tầm Tay
              </h2>
              <p className="text-slate-200 text-xs sm:text-sm max-w-2xl leading-relaxed">
                Hệ thống hóa toàn bộ kiến thức 10 trang sách giáo khoa: Từ vựng hoạt động rảnh rỗi, cấu trúc ngữ pháp Gerunds, nguyên âm /ʊ/ vs /u:/ và kỹ năng viết email kể về sở thích.
              </p>
            </div>
          </div>

          {/* 4 Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Branch 1 */}
            <div className="bg-white rounded-3xl border border-slate-200/90 p-5 shadow-xs hover:border-indigo-300 transition-all space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-indigo-100 flex items-center justify-center text-indigo-700 font-black">
                  🎨
                </div>
                <div>
                  <h3 className="font-black text-slate-900 text-sm sm:text-base">1. Hoạt Động Rảnh Rỗi & Cụm Từ Thích</h3>
                  <span className="text-xs text-slate-500 font-medium">Leisure Activities & Expressions</span>
                </div>
              </div>
              <ul className="text-xs text-slate-700 space-y-1.5 pl-2 border-l-2 border-indigo-300">
                <li>• <strong>origami</strong> (gấp giấy), <strong>DIY</strong> (tự làm thủ công), <strong>knitting kit</strong> (bộ đồ đan len)</li>
                <li>• <strong>dollhouse</strong> (nhà búp bê), <strong>paper flowers</strong> (làm hoa giấy)</li>
                <li>• <strong>doing puzzles</strong> (giải câu đố), <strong>surfing the net</strong> (lướt mạng)</li>
                <li>• <strong>be fond of / be keen on / be crazy about / be into + V-ing</strong></li>
              </ul>
            </div>

            {/* Branch 2 */}
            <div className="bg-white rounded-3xl border border-slate-200/90 p-5 shadow-xs hover:border-purple-300 transition-all space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-purple-100 flex items-center justify-center text-purple-700 font-black">
                  ⚙️
                </div>
                <div>
                  <h3 className="font-black text-slate-900 text-sm sm:text-base">2. Ngữ Pháp: Danh Động Từ (Gerunds)</h3>
                  <span className="text-xs text-slate-500 font-medium">Verbs of liking & disliking</span>
                </div>
              </div>
              <ul className="text-xs text-slate-700 space-y-1.5 pl-2 border-l-2 border-purple-300">
                <li>• <strong>Nhóm 1 (Chỉ đi với V-ing):</strong> fancy, detest, enjoy, dislike, avoid, mind</li>
                <li>• <em>Mẹo nhớ: FED DAM luôn cộng V-ing!</em></li>
                <li>• <strong>Nhóm 2 (Cả V-ing và To-V):</strong> love, like, hate, prefer</li>
                <li>• <em>Lưu ý: Would like / Would love BẮT BUỘC + to V-inf</em></li>
              </ul>
            </div>

            {/* Branch 3 */}
            <div className="bg-white rounded-3xl border border-slate-200/90 p-5 shadow-xs hover:border-amber-300 transition-all space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-amber-100 flex items-center justify-center text-amber-700 font-black">
                  🔊
                </div>
                <div>
                  <h3 className="font-black text-slate-900 text-sm sm:text-base">3. Phát Âm: Âm Ngắn /ʊ/ và Âm Dài /u:/</h3>
                  <span className="text-xs text-slate-500 font-medium">Sounds /ʊ/ and /u:/</span>
                </div>
              </div>
              <ul className="text-xs text-slate-700 space-y-1.5 pl-2 border-l-2 border-amber-300">
                <li>• <strong>Âm ngắn /ʊ/:</strong> c<u>oo</u>k, b<u>oo</u>k, p<u>u</u>sh, w<u>ou</u>ld, w<u>o</u>man, f<u>oo</u>t, l<u>oo</u>k</li>
                <li>• <strong>Âm dài /u:/:</strong> sch<u>oo</u>l, gr<u>ou</u>p, J<u>u</u>ne, m<u>o</u>ve, c<u>oo</u>l, p<u>oo</u>l, s<u>ou</u>p</li>
              </ul>
            </div>

            {/* Branch 4 */}
            <div className="bg-white rounded-3xl border border-slate-200/90 p-5 shadow-xs hover:border-emerald-300 transition-all space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-emerald-100 flex items-center justify-center text-emerald-700 font-black">
                  ✉️
                </div>
                <div>
                  <h3 className="font-black text-slate-900 text-sm sm:text-base">4. Giao Tiếp & Kỹ Năng Viết Email</h3>
                  <span className="text-xs text-slate-500 font-medium">Invitations & 80-100 words email</span>
                </div>
              </div>
              <ul className="text-xs text-slate-700 space-y-1.5 pl-2 border-l-2 border-emerald-300">
                <li>• <strong>Lời mời:</strong> Would you like to...? / Do you fancy + V-ing...?</li>
                <li>• <strong>Đáp lời:</strong> Yes, I&apos;d love to. Thanks! / That&apos;s great. Thanks!</li>
                <li>• <strong>Từ chối khéo:</strong> I&apos;d love to, but I&apos;m busy then.</li>
                <li>• <strong>Viết email:</strong> Kể về hoạt động giải trí (80 - 100 từ) chuẩn điểm 10.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* 2. TAB GETTING STARTED (Pages 8-9) */}
      {activeTab === 'getting_started' && (
        <div className="space-y-6">
          {/* Audio Dialogue */}
          <div className="bg-white rounded-3xl border border-slate-200/90 p-6 shadow-xs space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-700">
                  Bài 1 • Getting Started (SGK Trang 8)
                </span>
                <h3 className="text-xl font-black text-slate-900 mt-1">
                  I&apos;m keen on doing DIY (do-it-yourself)
                </h3>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setShowPhoneticsGuide(!showPhoneticsGuide)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 shadow-2xs cursor-pointer ${
                    showPhoneticsGuide 
                      ? 'bg-amber-100 text-amber-900 border border-amber-300' 
                      : 'bg-slate-100 text-slate-600 border border-slate-200'
                  }`}
                  title="Bật/Tắt phiên âm IPA và gợi ý cách đọc"
                >
                  <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                  <span>{showPhoneticsGuide ? 'Ẩn Phiên Âm & Cách Đọc' : 'Hiện Phiên Âm & Cách Đọc'}</span>
                </button>
                <button
                  onClick={() => speakEnglish("Tom and Trang are talking about their leisure time activities at the bookshop.")}
                  className="px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Volume2 className="w-4 h-4 text-indigo-600" />
                  <span>Nghe giới thiệu</span>
                </button>
              </div>
            </div>

            <div className="space-y-3 bg-slate-50 p-4 rounded-3xl border border-slate-200">
              {[
                { 
                  speaker: 'Tom', 
                  en: 'Hi, Trang. Surprised to see you. What brings you here?', 
                  ipa: '/haɪ, træŋ. səˈpraɪzd tuː siː juː. wɒt brɪŋz juː hɪə/',
                  tip: '🗣️ Đọc: [Hai, Trang. Sơ-prai-st tu si iu. Oát bring-z iu hia?] • Chú ý: nhấn SURPRISED, BRINGS; nối âm /z/ sang /j/ trong "brings you"',
                  vi: 'Chào Trang. Bất ngờ gặp cậu ở đây quá. Có việc gì đưa cậu đến đây thế?' 
                },
                { 
                  speaker: 'Trang', 
                  en: "Oh, hello Tom. I'm looking for a knitting kit.", 
                  ipa: '/əʊ, həˈləʊ tɒm. aɪm ˈlʊkɪŋ fər ə ˈnɪtɪŋ kɪt/',
                  tip: '🗣️ Đọc: [Ôu, he-lôu Tom. Aim LÚC-king phơ ơ NÍT-ting kịt] • Âm "k" trong knitting là âm câm, chỉ đọc NÍT-ting',
                  vi: 'Ồ chào Tom. Tớ đang tìm một bộ dụng cụ đan len.' 
                },
                { 
                  speaker: 'Tom', 
                  en: "A knitting kit? I didn't know you like knitting.", 
                  ipa: '/ə ˈnɪtɪŋ kɪt? aɪ ˈdɪdnt nəʊ juː laɪk ˈnɪtɪŋ/',
                  tip: '🗣️ Đọc: [Ơ NÍT-ting kịt? Ai ĐÍT-dừnt nâu iu laik NÍT-ting] • Lên giọng ở cuối câu hỏi ngạc nhiên "A knitting kit?"',
                  vi: 'Bộ đồ đan len á? Tớ không ngờ là cậu lại thích đan lát đấy.' 
                },
                { 
                  speaker: 'Trang', 
                  en: "Actually, I'm keen on many DIY activities. In my leisure time, I love knitting, building dollhouses, and making paper flowers.", 
                  ipa: '/ˈæktʃuəli, aɪm kiːn ɒn ˈmeni ˌdiː aɪ ˈwaɪ ækˈtɪvətiz. ɪn maɪ ˈleʒə taɪm, aɪ lʌv ˈnɪtɪŋ, ˈbɪldɪŋ ˈdɒlhaʊsɪz, ənd ˈmeɪkɪŋ ˈpeɪpə ˈflaʊəz/',
                  tip: '🗣️ Đọc: [Éc-chu-ơ-li, aim KIN-on me-ni Đi-Ai-Oai ec-TÍ-vơ-tiz. In mai LE-zhơ taim, ai lăv NÍT-ting, BÍL-đing ĐÓL-hao-siz, en MÊI-king PÊI-pơ Phlao-ơ-z]',
                  vi: 'Thật ra tớ rất say mê các hoạt động tự làm (DIY). Lúc rảnh rỗi, tớ thích đan len, dựng nhà búp bê và làm hoa giấy.' 
                },
                { 
                  speaker: 'Tom', 
                  en: 'I see. So, you like spending time on your own.', 
                  ipa: '/aɪ siː. səʊ, juː laɪk ˈspendɪŋ taɪm ɒn jɔːr əʊn/',
                  tip: '🗣️ Đọc: [Ai si. Sôu, iu laik SPÉN-đing taim on ior ôun] • Cụm "on your own" nghĩa là một mình',
                  vi: 'Ra là vậy. Vậy là cậu thích dành thời gian một mình.' 
                },
                { 
                  speaker: 'Trang', 
                  en: 'Yeah. What do you do in your free time?', 
                  ipa: '/jeə. wɒt duː juː duː ɪn jɔː friː taɪm/',
                  tip: '🗣️ Đọc: [Ie. Oát đu iu đu in ior phri taim?] • Đọc lướt nhanh What do you do',
                  vi: 'Ừ đúng rồi. Còn cậu làm gì vào lúc rảnh rỗi?' 
                },
                { 
                  speaker: 'Tom', 
                  en: "I'm a bit different. I usually hang out with my friends. We go to the cinema, go cycling, or play sport in the park.", 
                  ipa: '/aɪm ə bɪt ˈdɪfrənt. aɪ ˈjuːʒuəli hæŋ aʊt wɪð maɪ frendz. wiː ɡəʊ tuː ðə ˈsɪnəmə, ɡəʊ ˈsaɪklɪŋ, ɔː pleɪ spɔːt ɪn ðə pɑːk/',
                  tip: '🗣️ Đọc: [Aim ơ bít ĐÍ-phrơnt. Ai IU-zhu-li HENG-aot uýt mai phrên-dz. Ui gôu tu đơ SÍ-nơ-mơ, gôu SAI-kling, o plei spót in đơ pác]',
                  vi: 'Tớ thì hơi khác chút. Tớ thường đi tụ tập với bạn bè. Tụi tớ đi xem phim rạp, đi đạp xe, hoặc chơi thể thao ở công viên.' 
                },
                { 
                  speaker: 'Trang', 
                  en: "You love spending free time with other people, don't you?", 
                  ipa: '/juː lʌv ˈspendɪŋ friː taɪm wɪð ˈʌðə ˈpiːpl, dəʊnt juː/',
                  tip: '🗣️ Đọc: [Iu lăv SPÉN-đing phri taim uýt Á-đơ PI-pồ, đôn-t iu?] • Câu hỏi đuôi "don\'t you" hạ giọng nhẹ nhàng',
                  vi: 'Cậu thích dành thời gian rảnh với mọi người xung quanh đúng không?' 
                },
                { 
                  speaker: 'Tom', 
                  en: "That's right. By the way, would you like to go to the cinema with me and Mark this Sunday? There's a new comedy at New World Cinema.", 
                  ipa: '/ðæts raɪt. baɪ ðə weɪ, wʊd juː laɪk tuː ɡəʊ tuː ðə ˈsɪnəmə wɪð miː ənd mɑːk ðɪs ˈsʌndeɪ? ðeəz ə njuː ˈkɒmədi ət njuː wɜːld ˈsɪnəmə/',
                  tip: '🗣️ Đọc: [Đét-s rait. Bai đơ uei, Uút iu laik tu gôu tu đơ SÍ-nơ-mơ uýt mi en Mác đít SĂN-đêi? Đe-z ơ niu CÓ-mơ-đi ét Niu Uơ-l-d SÍ-nơ-mơ]',
                  vi: 'Đúng rồi. Nhân tiện, Chủ nhật này cậu có muốn đi xem phim với tớ và Mark không? Có phim hài mới ở rạp New World đấy.' 
                },
                { 
                  speaker: 'Trang', 
                  en: "Yes, I'd love to. Can I ask Mai to join us?", 
                  ipa: '/jes, aɪd lʌv tuː. kæn aɪ ɑːsk maɪ tuː dʒɔɪn ʌs/',
                  tip: '🗣️ Đọc: [Iét, aid LĂV tu. Ken ai ác-sk Mai tu JOIN-ơs?] • Nối âm /n/ sang /ʌs/ trong "join us"',
                  vi: 'Có chứ, tớ rất thích! Tớ rủ thêm Mai cùng đi được không?' 
                },
                { 
                  speaker: 'Tom', 
                  en: "Sure. Let's meet outside the cinema at 9 a.m.", 
                  ipa: '/ʃʊə. lets miːt ˌaʊtˈsaɪd ðə ˈsɪnəmə ət naɪn eɪˈem/',
                  tip: '🗣️ Đọc: [Shua. Lét-s mít AOT-said đơ SÍ-nơ-mơ ét nain ÊI-EM] • Âm sh uốn cong lưỡi thổi mạnh',
                  vi: 'Chắc chắn rồi. Hẹn gặp nhau ngoài rạp lúc 9 giờ sáng nhé.' 
                }
              ].map((row, idx) => (
                <div
                  key={idx}
                  onClick={() => speakEnglish(row.en)}
                  className={`p-3.5 rounded-2xl border transition-all cursor-pointer hover:shadow-xs flex items-start justify-between gap-3 ${
                    row.speaker === 'Tom'
                      ? 'bg-sky-50/70 border-sky-200 ml-0 sm:mr-6'
                      : 'bg-emerald-50/70 border-emerald-200 mr-0 sm:ml-6'
                  }`}
                >
                  <div className="space-y-1.5 flex-1">
                    <div className="flex items-center gap-2">
                      <span className={`font-black text-xs px-2 py-0.5 rounded-md ${row.speaker === 'Tom' ? 'bg-sky-200 text-sky-900' : 'bg-emerald-200 text-emerald-900'}`}>
                        {row.speaker}
                      </span>
                      <span className="text-xs sm:text-sm font-bold text-slate-900">{row.en}</span>
                    </div>

                    {showPhoneticsGuide && (
                      <div className="space-y-1 pl-1">
                        <div className="text-[11px] font-mono text-indigo-700 bg-indigo-50/80 px-2 py-0.5 rounded-md border border-indigo-100 font-semibold inline-block">
                          {row.ipa}
                        </div>
                        <div className="text-[11px] text-amber-900 bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200 font-medium">
                          {row.tip}
                        </div>
                      </div>
                    )}

                    <div className="text-xs text-slate-600 italic pl-1 font-medium">{row.vi}</div>
                  </div>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      speakEnglish(row.en);
                    }}
                    className="p-1.5 rounded-xl bg-white border border-slate-200 text-slate-500 hover:text-indigo-600 hover:border-indigo-300 shadow-2xs shrink-0 cursor-pointer"
                    title="Nghe câu này"
                  >
                    <Volume2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Activity 2 Comprehension Check */}
          <div className="bg-white rounded-3xl border border-slate-200/90 p-6 shadow-xs space-y-4">
            <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700">
              Bài tập 2 (SGK Trang 9) • Hoàn thành câu theo bài đọc
            </span>
            <div className="space-y-3">
              {[
                { id: 1, q: '1. Trang is looking for a...', options: ['knitting kit', 'dollhouse', 'bike'], correct: 'knitting kit' },
                { id: 2, q: '2. She likes doing DIY in her...', options: ['free / leisure time', 'school time', 'evening'], correct: 'free / leisure time' },
                { id: 3, q: '3. Tom loves spending his free time with...', options: ['other people / his friends', 'his family only', 'on his own'], correct: 'other people / his friends' },
                { id: 4, q: '4. Tom and his friends usually...', options: ['go to the cinema, go cycling, or play sport', 'stay at home', 'do DIY alone'], correct: 'go to the cinema, go cycling, or play sport' },
                { id: 5, q: '5. Tom, Mark, Trang, and Mai are going to see a comedy this...', options: ['Sunday', 'Saturday', 'Friday'], correct: 'Sunday' }
              ].map(item => (
                <div key={item.id} className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
                  <div className="text-xs sm:text-sm font-bold text-slate-800">{item.q}</div>
                  <div className="flex flex-wrap gap-2">
                    {item.options.map(opt => {
                      const isChosen = gsAnswers[item.id] === opt;
                      const isRight = opt === item.correct;
                      let cls = 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100';
                      if (gsAnswers[item.id]) {
                        if (isRight) cls = 'bg-emerald-500 text-white border-emerald-600 font-bold';
                        else if (isChosen) cls = 'bg-rose-500 text-white border-rose-600 font-bold';
                      }
                      return (
                        <button
                          key={opt}
                          onClick={() => handleGsAnswer(item.id, opt, item.correct)}
                          className={`px-3 py-1.5 rounded-xl border text-xs transition-all ${cls}`}
                        >
                          {opt}
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Activity 3 & 4 Word web */}
          <div className="bg-white rounded-3xl border border-slate-200/90 p-6 shadow-xs space-y-4">
            <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-purple-50 text-purple-700">
              Bài tập 3 & 4 (SGK Trang 9) • Phân loại hoạt động giải trí (Word-Web)
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-indigo-50 border border-indigo-200 space-y-2">
                <span className="text-xs font-black text-indigo-900 uppercase">Hoạt động làm một mình (On your own)</span>
                <ul className="text-xs text-slate-700 space-y-1">
                  <li>• <strong>doing DIY</strong> (làm đồ thủ công handmade)</li>
                  <li>• <strong>building dollhouses</strong> (dựng nhà búp bê)</li>
                  <li>• <strong>making paper flowers / origami</strong> (gấp giấy, làm hoa giấy)</li>
                  <li>• <strong>reading books</strong> (đọc sách, truyện tranh)</li>
                  <li>• <strong>doing puzzles / Sudoku</strong> (giải câu đố rèn luyện trí óc)</li>
                </ul>
              </div>

              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 space-y-2">
                <span className="text-xs font-black text-emerald-900 uppercase">Hoạt động cùng bạn bè (With other people)</span>
                <ul className="text-xs text-slate-700 space-y-1">
                  <li>• <strong>playing sport</strong> (chơi cầu lông, bóng đá, bóng rổ)</li>
                  <li>• <strong>going to the cinema</strong> (đi xem phim rạp)</li>
                  <li>• <strong>going cycling</strong> (đạp xe cùng bạn)</li>
                  <li>• <strong>hanging out with friends</strong> (đi chơi tụ tập)</li>
                  <li>• <strong>messaging friends</strong> (nhắn tin trò chuyện)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 3. TAB A CLOSER LOOK 1 (Page 10) */}
      {activeTab === 'closer_look_1' && (
        <div className="space-y-6">
          {/* Ex 1 & 2 Vocabulary */}
          <div className="bg-white rounded-3xl border border-slate-200/90 p-6 shadow-xs space-y-4">
            <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-700">
              Vocabulary: Bài tập 1 (SGK Trang 10)
            </span>
            <h3 className="text-lg font-black text-slate-900">
              Điền từ thích hợp vào chỗ trống: <code className="text-amber-800 bg-amber-100 px-2 py-0.5 rounded-lg">into, fond, keen, interested, about</code>
            </h3>

            <div className="space-y-3">
              {[
                { id: 1, sentence: "1. I'm ________ of taking photos. In my free time, I take photos of people and things.", options: ['fond', 'keen', 'into', 'about'], correct: 'fond', note: 'fond + OF' },
                { id: 2, sentence: '2. Mai is ________ in history. She often goes to museums.', options: ['interested', 'fond', 'keen', 'about'], correct: 'interested', note: 'interested + IN' },
                { id: 3, sentence: '3. My sister is ________ on cooking. She wants to become a chef.', options: ['keen', 'into', 'fond', 'about'], correct: 'keen', note: 'keen + ON' },
                { id: 4, sentence: "4. My brother spends lots of time surfing the net, but I'm not ________ it.", options: ['into', 'keen', 'fond', 'about'], correct: 'into', note: 'be INTO sth' },
                { id: 5, sentence: "5. I'm not crazy ________ doing DIY. It's not my cup of tea.", options: ['about', 'into', 'fond', 'keen'], correct: 'about', note: 'crazy + ABOUT' }
              ].map(item => (
                <div key={item.id} className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
                  <div className="text-xs sm:text-sm font-bold text-slate-800">{item.sentence}</div>
                  <div className="flex flex-wrap gap-2">
                    {item.options.map(opt => {
                      const isChosen = acl1Blanks[item.id] === opt;
                      const isRight = opt === item.correct;
                      let cls = 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100';
                      if (acl1Blanks[item.id]) {
                        if (isRight) cls = 'bg-emerald-500 text-white border-emerald-600 font-bold';
                        else if (isChosen) cls = 'bg-rose-500 text-white border-rose-600 font-bold';
                      }
                      return (
                        <button
                          key={opt}
                          onClick={() => handleAcl1Answer(item.id, opt, item.correct)}
                          className={`px-3 py-1.5 rounded-xl border text-xs transition-all ${cls}`}
                        >
                          {opt}
                        </button>
                      );
                    })}
                  </div>
                  {acl1Blanks[item.id] && (
                    <div className="text-xs text-indigo-700 font-medium">💡 Ghi nhớ: {item.note}</div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Activity Benefits Matcher (SGK Trang 10 Ex 2) */}
          <div className="bg-white rounded-3xl border border-slate-200/90 p-6 shadow-xs space-y-4">
            <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-700">
              Bài tập 2 (SGK Trang 10) • Nối Hoạt Động & Lợi Ích
            </span>
            <div className="space-y-3">
              {benefitQuestions.map(item => (
                <div key={item.id} className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
                  <div className="text-xs sm:text-sm font-bold text-slate-800">Hoạt động: <strong>{item.activity}</strong></div>
                  <div className="flex flex-wrap gap-2">
                    {item.options.map(opt => {
                      const isChosen = benefitAnswers[item.id] === opt;
                      const isRight = opt === item.correct;
                      let cls = 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100';
                      if (benefitAnswers[item.id]) {
                        if (isRight) cls = 'bg-emerald-500 text-white border-emerald-600 font-bold';
                        else if (isChosen) cls = 'bg-rose-500 text-white border-rose-600 font-bold';
                      }
                      return (
                        <button
                          key={opt}
                          onClick={() => handleBenefitAnswer(item.id, opt, item.correct)}
                          className={`px-3 py-1.5 rounded-xl border text-xs transition-all ${cls}`}
                        >
                          {opt}
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Phonetics Lab /ʊ/ vs /u:/ */}
          <div className="bg-white rounded-3xl border border-slate-200/90 p-6 shadow-xs space-y-4">
            <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-purple-50 text-purple-700">
              Pronunciation Lab (SGK Trang 11) • Luyện Phân Biệt Âm /ʊ/ và /u:/
            </span>

            <div className="bg-slate-900 rounded-2xl p-5 text-white space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-amber-400">Thử Thách Nhận Diện Âm</span>
                <span className="text-xs text-slate-400">Từ {phoneticIdx + 1} / {phoneticsWords.length}</span>
              </div>

              <div className="text-center py-4 space-y-2">
                <button
                  onClick={() => speakEnglish(currentPhonetic.word)}
                  className="w-16 h-16 rounded-full bg-rose-500 hover:bg-rose-400 text-white flex items-center justify-center mx-auto shadow-lg transition-transform hover:scale-105"
                >
                  <Volume2 className="w-8 h-8" />
                </button>
                <div className="text-2xl font-black text-white tracking-wide">{currentPhonetic.word}</div>
                <div className="text-sm text-amber-300 font-mono font-bold">{currentPhonetic.ipa}</div>
                <div className="text-xs text-amber-100 bg-white/10 px-3 py-1 rounded-xl max-w-sm mx-auto">
                  {currentPhonetic.tip}
                </div>
                <div className="text-xs text-rose-300">({currentPhonetic.vi})</div>
                <p className="text-xs text-slate-400">Bấm loa nghe từ trên, sau đó chọn nguyên âm chính xác:</p>
              </div>

              <div className="flex gap-3 justify-center">
                <button
                  onClick={() => handleAnswerPhonetic('/ʊ/')}
                  className="px-6 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-sm transition-all"
                >
                  Âm /ʊ/ (ngắn)
                </button>
                <button
                  onClick={() => handleAnswerPhonetic('/u:/')}
                  className="px-6 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-black text-sm transition-all"
                >
                  Âm /u:/ (dài)
                </button>
              </div>

              {phoneticResult && (
                <div className={`p-3 rounded-xl text-center text-xs font-bold flex items-center justify-between ${
                  phoneticResult === 'correct' ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' : 'bg-rose-500/20 text-rose-300 border border-rose-500/30'
                }`}>
                  <span>
                    {phoneticResult === 'correct' ? '🎉 Chính xác! Bạn nhận diện âm rất tốt!' : `Chưa đúng! Từ "${currentPhonetic.word}" có âm là ${currentPhonetic.sound}.`}
                  </span>
                  <button
                    onClick={() => {
                      setPhoneticResult(null);
                      setPhoneticIdx(prev => (prev + 1) % phoneticsWords.length);
                    }}
                    className="px-3 py-1 bg-white text-slate-900 rounded-lg text-xs font-bold hover:bg-slate-100"
                  >
                    Từ tiếp theo →
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* 4. TAB A CLOSER LOOK 2 (Page 11) */}
      {activeTab === 'closer_look_2' && (
        <div className="space-y-6">
          {/* Rules explanation */}
          <div className="bg-white rounded-3xl border border-slate-200/90 p-6 shadow-xs space-y-4">
            <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-purple-50 text-purple-700">
              Grammar Focus (SGK Trang 11) • Động Từ Chỉ Sở Thích
            </span>
            <h3 className="text-xl font-black text-slate-900">
              Quy Tắc Vàng: Động từ đi với V-ing hay To-V?
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-indigo-50 border border-indigo-200 space-y-2">
                <div className="text-xs font-black text-indigo-900 uppercase">Nhóm 1: CHỈ ĐI VỚI V-ING (Gerunds)</div>
                <div className="font-mono text-xs bg-white p-2 rounded-lg border border-indigo-100 text-indigo-950 font-bold">
                  fancy, detest, enjoy, dislike, avoid, mind + V-ing
                </div>
                <p className="text-xs text-slate-600">
                  TUYỆT ĐỐI không đi với To-V! Thần chú: <strong>FED DAM</strong>.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 space-y-2">
                <div className="text-xs font-black text-emerald-900 uppercase">Nhóm 2: ĐI VỚI CẢ V-ING VÀ TO-V</div>
                <div className="font-mono text-xs bg-white p-2 rounded-lg border border-emerald-100 text-emerald-950 font-bold">
                  love, like, hate, prefer + V-ing / To-V
                </div>
                <p className="text-xs text-slate-600">
                  Dùng dạng nào nghĩa cũng không đổi. Thần chú: <strong>LLHP</strong>.
                </p>
              </div>
            </div>
          </div>

          {/* Interactive Verb Sorter Game */}
          <div className="bg-white rounded-3xl border border-slate-200/90 p-6 shadow-xs space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-purple-100 text-purple-800">
                Mini-game: Phân Loại Động Từ Vào Đúng Rổ
              </span>
              <button onClick={resetSorter} className="text-xs font-bold text-indigo-600 hover:underline flex items-center gap-1">
                <RotateCcw className="w-3.5 h-3.5" /> Chơi lại
              </button>
            </div>

            {remainingVerbs.length > 0 ? (
              <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200 text-center space-y-3">
                <span className="text-xs text-slate-500 font-semibold">Bấm chọn rổ thích hợp cho động từ:</span>
                <div className="text-3xl font-black text-purple-900 font-mono tracking-wider">
                  {remainingVerbs[0].verb}
                </div>
                <div className="flex gap-3 justify-center pt-2">
                  <button
                    onClick={() => handleSortVerb(remainingVerbs[0], 'gerund_only')}
                    className="px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-md transition-all"
                  >
                    📥 Chỉ đi với V-ing
                  </button>
                  <button
                    onClick={() => handleSortVerb(remainingVerbs[0], 'both')}
                    className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md transition-all"
                  >
                    📥 Cả V-ing và To-V
                  </button>
                </div>
              </div>
            ) : (
              <div className="p-5 bg-emerald-50 rounded-2xl border border-emerald-200 text-center space-y-2">
                <div className="text-2xl font-black text-emerald-900">🎉 Tuyệt vời! Bạn đã phân loại đúng tất cả!</div>
                <p className="text-xs text-emerald-700">Bạn đã nắm chắc quy tắc ngữ pháp quan trọng nhất của Unit 1!</p>
              </div>
            )}

            {sorterFeedback && (
              <div className="text-xs font-bold text-center text-slate-700">{sorterFeedback}</div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-indigo-50 border border-indigo-200 space-y-2">
                <div className="text-xs font-black text-indigo-800 uppercase">Rổ 1: Chỉ V-ing ({gerundOnlyBucket.length}/6)</div>
                <div className="flex flex-wrap gap-1.5">
                  {gerundOnlyBucket.map(w => (
                    <span key={w} className="px-3 py-1 rounded-lg bg-indigo-600 text-white font-bold text-xs">{w}</span>
                  ))}
                </div>
              </div>
              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 space-y-2">
                <div className="text-xs font-black text-emerald-800 uppercase">Rổ 2: Cả V-ing & To-V ({bothBucket.length}/4)</div>
                <div className="flex flex-wrap gap-1.5">
                  {bothBucket.map(w => (
                    <span key={w} className="px-3 py-1 rounded-lg bg-emerald-600 text-white font-bold text-xs">{w}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Sentence Rewriting Drills */}
          <div className="bg-white rounded-3xl border border-slate-200/90 p-6 shadow-xs space-y-4">
            <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-700">
              Luyện Viết Lại Câu Đồng Nghĩa (Sentence Rewriting)
            </span>
            <div className="space-y-3">
              {[
                {
                  id: 1,
                  original: 'Lan likes making paper flowers.',
                  req: 'Viết lại bằng "fond of":',
                  options: ['Lan is fond of making paper flowers.', 'Lan is fond of make paper flowers.', 'Lan is fond to making paper flowers.'],
                  correct: 'Lan is fond of making paper flowers.'
                },
                {
                  id: 2,
                  original: 'Do you want to go to the cinema this Sunday?',
                  req: 'Viết lại bằng "fancy":',
                  options: ['Do you fancy going to the cinema this Sunday?', 'Do you fancy to go to the cinema this Sunday?', 'Do you fancy go to the cinema this Sunday?'],
                  correct: 'Do you fancy going to the cinema this Sunday?'
                },
                {
                  id: 3,
                  original: 'I hate getting up early on cold mornings.',
                  req: 'Viết lại bằng "detest":',
                  options: ['I detest getting up early on cold mornings.', 'I detest to get up early on cold mornings.', 'I detest get up early on cold mornings.'],
                  correct: 'I detest getting up early on cold mornings.'
                }
              ].map(item => (
                <div key={item.id} className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
                  <div className="text-xs text-slate-500 font-semibold">Câu gốc: <strong>{item.original}</strong></div>
                  <div className="text-xs font-bold text-slate-800">{item.req}</div>
                  <div className="space-y-1.5">
                    {item.options.map(opt => {
                      const isChosen = transformAnswers[item.id] === opt;
                      const isRight = opt === item.correct;
                      let cls = 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100';
                      if (transformAnswers[item.id]) {
                        if (isRight) cls = 'bg-emerald-500 text-white border-emerald-600 font-bold';
                        else if (isChosen) cls = 'bg-rose-500 text-white border-rose-600 font-bold';
                      }
                      return (
                        <button
                          key={opt}
                          onClick={() => handleTransformAnswer(item.id, opt, item.correct)}
                          className={`w-full text-left p-2.5 rounded-xl border text-xs transition-all ${cls}`}
                        >
                          {opt}
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* 5. TAB COMMUNICATION (Pages 12-13) */}
      {activeTab === 'communication' && (
        <div className="space-y-6">
          {/* Everyday English Invitations */}
          <div className="bg-white rounded-3xl border border-slate-200/90 p-6 shadow-xs space-y-4">
            <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700">
              Everyday English (SGK Trang 12) • Lời Mời & Đáp Lời
            </span>
            <h3 className="text-lg font-black text-slate-900">Mẫu câu mời mọc & Chấp nhận lời mời</h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-sky-50 border border-sky-200 space-y-2">
                <span className="text-xs font-black text-sky-900">Mẫu 1: Would you like to + V-inf...?</span>
                <div className="text-xs text-slate-700 font-semibold bg-white p-2.5 rounded-xl border border-sky-100">
                  • <strong>Would you like to go to the cooking club with me?</strong><br />
                  → <strong>Yes, I&apos;d love to. Thanks!</strong>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 space-y-2">
                <span className="text-xs font-black text-emerald-900">Mẫu 2: Do you fancy + V-ing...?</span>
                <div className="text-xs text-slate-700 font-semibold bg-white p-2.5 rounded-xl border border-emerald-100">
                  • <strong>Do you fancy going for a walk in the park?</strong><br />
                  → <strong>That&apos;s great. Thanks!</strong>
                </div>
              </div>
            </div>
          </div>

          {/* 3 Teens around the world */}
          <div className="bg-white rounded-3xl border border-slate-200/90 p-6 shadow-xs space-y-4">
            <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-purple-50 text-purple-700">
              Bài đọc 3 Bạn trẻ trên thế giới (SGK Trang 13)
            </span>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200 space-y-2">
                <div className="font-black text-rose-900">Sakura (Kyoto, Nhật Bản)</div>
                <div className="text-xs font-bold text-slate-700">Origami (Gấp giấy)</div>
                <p className="text-xs text-slate-600">Làm một mình khi rảnh, tạo hình hoa lá, quạt giấy. <strong>Lợi ích: Giúp thư giãn đầu óc (helps me to relax).</strong></p>
              </div>

              <div className="p-4 rounded-2xl bg-sky-50 border border-sky-200 space-y-2">
                <div className="font-black text-sky-900">Eric (Thụy Sĩ)</div>
                <div className="text-xs font-bold text-slate-700">Snowboarding (Trượt ván tuyết)</div>
                <p className="text-xs text-slate-600">Đến khu trượt tuyết với bố mẹ vào cuối tuần. <strong>Lợi ích: Cải thiện thể lực và độ thăng bằng (health and balance).</strong></p>
              </div>

              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 space-y-2">
                <div className="font-black text-emerald-900">Lan (Quảng Bình, Việt Nam)</div>
                <div className="text-xs font-bold text-slate-700">Badminton (Chơi cầu lông)</div>
                <p className="text-xs text-slate-600">Chơi với bạn thân mỗi buổi chiều. <strong>Lợi ích: Tăng cơ bắp & giảm căng thẳng (muscle strength, reduce stress).</strong></p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 6. TAB SKILLS 1 & 2 (Pages 14-15) */}
      {activeTab === 'skills' && (
        <div className="space-y-6">
          {/* Skills 1 Reading Trang's Family */}
          <div className="bg-white rounded-3xl border border-slate-200/90 p-6 shadow-xs space-y-4">
            <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-sky-50 text-sky-700">
              Skills 1 • Reading (SGK Trang 14)
            </span>
            <h3 className="text-lg font-black text-slate-900">Hoạt Động Rảnh Rỗi Cùng Gia Đình Của Trang</h3>
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 text-xs sm:text-sm text-slate-700 space-y-2 leading-relaxed">
              <p>• Cuối tuần cả nhà đạp xe ra làng lân cận tận hưởng không khí trong lành và chụp ảnh.</p>
              <p>• Trang cùng anh trai tìm công thức nấu ăn đơn giản rồi vào bếp nấu nướng.</p>
              <p>• Hoạt động Trang thích nhất là làm đồ thủ công DIY cùng mẹ: Mẹ dạy may váy và quần áo búp bê. Trang từng đoạt giải nhất cuộc thi trang phục ở trường!</p>
              <p className="font-bold text-indigo-700">💡 Từ khóa: &quot;connect&quot; = better understand someone (hiểu và gắn kết tình cảm hơn).</p>
            </div>
          </div>

          {/* Skills 2 Writing Guide & Model Essay */}
          <div className="bg-white rounded-3xl border border-slate-200/90 p-6 shadow-xs space-y-4">
            <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700">
              Skills 2 • Writing (SGK Trang 15)
            </span>
            <h3 className="text-lg font-black text-slate-900">Viết Email 80 - 100 Từ Kể Về Thời Gian Rảnh Cho Bạn Qua Thư</h3>

            <div className="p-4 bg-emerald-50/60 rounded-2xl border border-emerald-200 space-y-3 font-mono text-xs">
              <div className="font-bold text-emerald-950">BÀI VIẾT MẪU ĐẠT ĐIỂM TỐI ĐA (MODEL EMAIL):</div>
              <div className="bg-white p-4 rounded-xl border border-emerald-200 text-slate-800 space-y-2 leading-relaxed font-sans text-xs sm:text-sm">
                <p>Hi Peter,</p>
                <p>It&apos;s nice to hear from you again. Let me tell you about my free time activities.</p>
                <p>At the weekend, I usually have plenty of leisure time. I am very keen on playing sport, especially badminton with my classmates in the park because it improves our physical health and muscle strength. Besides, I am fond of doing DIY projects with my mother. We love making paper flowers and decorating my room. Doing DIY helps me save money and increases my creativity.</p>
                <p>What about you? How do you spend your free time?</p>
                <p>Bye for now,</p>
                <p>Nam</p>
              </div>
            </div>

            {/* Student Draft with Word Counter */}
            <div className="space-y-2 pt-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-slate-700">Góc Tự Luyện Viết Email:</span>
                <span className={`font-bold ${wordCount >= 80 && wordCount <= 120 ? 'text-emerald-600' : 'text-slate-500'}`}>
                  {wordCount} / 80-100 từ {wordCount >= 80 && wordCount <= 120 ? '✅ Đạt chuẩn' : ''}
                </span>
              </div>
              <textarea
                value={writingDraft}
                onChange={(e) => setWritingDraft(e.target.value)}
                placeholder="Hãy thử viết email của bạn tại đây (sử dụng: keen on, fond of, leisure time, muscle strength, save money...)..."
                rows={4}
                className="w-full p-3 rounded-xl border border-slate-200 text-xs sm:text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-hidden"
              />
            </div>
          </div>
        </div>
      )}

      {/* 7. TAB LOOKING BACK & CHECKLIST (Pages 16-17) */}
      {activeTab === 'looking_back' && (
        <div className="space-y-6">
          {/* Ann's Story Looking Back Ex 4 */}
          <div className="bg-white rounded-3xl border border-slate-200/90 p-6 shadow-xs space-y-4">
            <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-700">
              Looking Back: Bài tập 4 (SGK Trang 16)
            </span>
            <h3 className="text-lg font-black text-slate-900">Câu Chuyện Cuối Tuần Của Bạn Ann</h3>
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 text-xs sm:text-sm space-y-2 leading-relaxed">
              <p>Ann is my best friend. She usually has free time at the weekend. She enjoys <strong>riding a horse</strong> at the riding club. Sometimes, she likes <strong>reading books</strong> or <strong>messaging friends</strong>. She also loves <strong>making paper flowers</strong> and <strong>knitting</strong>. However, there is one thing she doesn&apos;t like doing in her free time. She dislikes <strong>playing badminton</strong>.</p>
            </div>
          </div>

          {/* Now I Can Checklist Page 17 */}
          <div className="bg-white rounded-3xl border border-slate-200/90 p-6 shadow-xs space-y-4">
            <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-700">
              Bảng Tự Đánh Giá Năng Lực (SGK Trang 17 • Now I Can...)
            </span>
            <h3 className="text-lg font-black text-slate-900">Kiểm Tra Những Kỹ Năng Bạn Đã Làm Chủ:</h3>

            <div className="space-y-2">
              {[
                'Sử dụng các từ vựng về hoạt động giải trí và cụm từ chỉ sở thích/không thích (keen on, fond of...)',
                'Phát âm chuẩn xác cặp âm /ʊ/ (cook, push) và /u:/ (school, group)',
                'Sử dụng đúng động từ đi với gerunds (FED D) và động từ đi với cả hai (LLHP)',
                'Đưa ra lời mời và đáp lại lời mời lịch sự (Would you like to...? / I\'d love to)',
                'Đọc hiểu và nói về các hoạt động rảnh rỗi cùng gia đình và bạn bè',
                'Viết được email 80 - 100 từ kể về hoạt động giải trí cho bạn qua thư'
              ].map((skill, idx) => {
                const currentLevel = checklist[idx] || 0;
                return (
                  <div key={idx} className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <span className="text-xs font-semibold text-slate-800">{idx + 1}. {skill}</span>
                    <div className="flex gap-1.5 shrink-0">
                      {[1, 2, 3].map(stars => (
                        <button
                          key={stars}
                          onClick={() => toggleCheck(idx, stars)}
                          className={`px-2 py-1 rounded-lg text-xs font-bold transition-all ${
                            currentLevel >= stars ? 'bg-amber-400 text-slate-900 shadow-2xs' : 'bg-slate-200 text-slate-500'
                          }`}
                        >
                          {'★'.repeat(stars)}
                        </button>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
