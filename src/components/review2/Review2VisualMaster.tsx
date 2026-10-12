import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { 
  Sparkles, Volume2, CheckCircle2, RotateCcw, Lightbulb, 
  ArrowLeft, ArrowRight, Heart, Brain, Zap, Layers, Play,
  MessageCircle, HelpCircle, Trophy, BookOpen, Users,
  PenTool, Headphones, Smile, Eye, Share2, Award, FileText,
  Calendar, Check, AlertCircle, Globe, Pause
} from 'lucide-react';
import { getReadingTip } from '../../utils/pronunciationHelper';
import { speakEnglish } from '../../utils/audio';

interface Review2VisualMasterProps {
  onBack: () => void;
  onGoToQuiz?: () => void;
}

type TabMode = 'overview' | 'language' | 'skills';

export const Review2VisualMaster: React.FC<Review2VisualMasterProps> = ({
  onBack,
  onGoToQuiz
}) => {
  const [activeTab, setActiveTab] = useState<TabMode>('overview');

  // Text-to-speech helper (sử dụng duy nhất giọng NỮ vang sáng, ngân hay)
  const [activeSpeakingText, setActiveSpeakingText] = useState<string | null>(null);
  const [speechRate, setSpeechRate] = useState<number>(0.9);

  const speakText = (text: string, customRate?: number) => {
    speakEnglish(text, {
      rate: customRate || speechRate,
      onStart: () => setActiveSpeakingText(text),
      onEnd: () => setActiveSpeakingText(null),
      onError: () => setActiveSpeakingText(null)
    });
  };

  const stopSpeaking = () => {
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    setActiveSpeakingText(null);
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

  // State for Language Exercises (Trang 70 SGK)
  // Ex 1: Pronunciation (5 questions)
  const [pronAnswers, setPronAnswers] = useState<Record<number, string>>({});

  // Ex 2: Collocation Matching (Interactive Match Mode)
  const [selectedVerb, setSelectedVerb] = useState<{ id: number; verb: string; vi: string } | null>(null);
  const [matchedPairs, setMatchedPairs] = useState<Record<number, number>>({}); // verbId -> nounId
  const [showAllPairs, setShowAllPairs] = useState<boolean>(false);

  // Ex 3: Vocabulary Gap Fill (5 questions)
  const [vocabBoxAnswers, setVocabBoxAnswers] = useState<Record<number, string>>({});

  // Ex 4: Grammar MCQs (5 questions)
  const [grammarAnswers, setGrammarAnswers] = useState<Record<number, string>>({});

  // Ex 5: Verb forms (5 questions)
  const [verbFormAnswers, setVerbFormAnswers] = useState<Record<number, string>>({});

  // State for Skills Exercises (Trang 71 SGK)
  // Ex 1: Reading Spring Fair Matching (5 people)
  const [springFairAnswers, setSpringFairAnswers] = useState<Record<number, string>>({});
  const [showReadingResults, setShowReadingResults] = useState<boolean>(false);

  // Ex 2: Speaking Roleplay
  const [selectedSpeakingTopic, setSelectedSpeakingTopic] = useState<number>(1);

  // Ex 3: Listening Gap Fill (5 blanks)
  const [listenAnswers, setListenAnswers] = useState<Record<number, string>>({
    1: '', 2: '', 3: '', 4: '', 5: ''
  });
  const [listenChecked, setListenChecked] = useState<boolean>(false);
  const [showTranscript, setShowTranscript] = useState<boolean>(false);
  const [isAudioPlaying, setIsAudioPlaying] = useState<boolean>(false);

  // Ex 4: Writing Respect for Elders Clues (5 sentences reveal)
  const [writingRevealed, setWritingRevealed] = useState<Record<number, boolean>>({});
  const [userWritingDraft, setUserWritingDraft] = useState<string>('');

  const wordCount = userWritingDraft.trim() === '' ? 0 : userWritingDraft.trim().split(/\s+/).length;

  // Collocations data
  const collocationVerbs = [
    { id: 1, verb: 'weave', ipa: '/wiːv/', tip: '🗣️ [Uiv] • Âm /iː/ dài', vi: 'dệt (vải)' },
    { id: 2, verb: 'chase away', ipa: '/tʃeɪs əˈweɪ/', tip: '🗣️ [CHÂY-s ờ-UÂY] • Bật /tʃ/', vi: 'xua đuổi' },
    { id: 3, verb: 'harvest', ipa: '/ˈhɑːvɪst/', tip: '🗣️ [HA-vịt-st] • Nhấn HA', vi: 'thu hoạch' },
    { id: 4, verb: 'overlook', ipa: '/ˌəʊvəˈlʊk/', tip: '🗣️ [ôu-vơ-LÚC] • Nhấn LÚC', vi: 'trông ra, nhìn ra' },
    { id: 5, verb: 'make', ipa: '/meɪk/', tip: '🗣️ [Mêy-k] • Âm /eɪ/', vi: 'làm, chế tác' },
  ];

  const collocationNouns = [
    { id: 4, noun: 'a. terraced fields', ipa: '/ˈterəst fiːldz/', tip: '🗣️ [TÉ-rịt-st phiu-dz]', vi: 'ruộng bậc thang', targetVerbId: 4 },
    { id: 3, noun: 'b. crops', ipa: '/krɒps/', tip: '🗣️ [KROP-s] • Bật p', vi: 'hoa màu, mùa màng', targetVerbId: 3 },
    { id: 5, noun: 'c. crafts', ipa: '/krɑːfts/', tip: '🗣️ [KRAPH-ts] • Đuôi f-ts', vi: 'đồ thủ công', targetVerbId: 5 },
    { id: 1, noun: 'd. clothing', ipa: '/ˈkləʊðɪŋ/', tip: '🗣️ [KLÂU-đinh] • Âm đ rung', vi: 'quần áo, trang phục', targetVerbId: 1 },
    { id: 2, noun: 'e. bad spirits', ipa: '/bæd ˈspɪrɪts/', tip: '🗣️ [bed SPÍ-rịt-s]', vi: 'tà ma, điềm xấu', targetVerbId: 2 },
  ];

  const handleVerbSelect = (v: { id: number; verb: string; vi: string }) => {
    setSelectedVerb(v);
  };

  const handleNounSelect = (n: { id: number; noun: string; targetVerbId: number }) => {
    if (!selectedVerb) return;
    if (selectedVerb.id === n.targetVerbId) {
      // Match correct!
      const newMatches = { ...matchedPairs, [selectedVerb.id]: n.id };
      setMatchedPairs(newMatches);
      setSelectedVerb(null);
      speakText(`${selectedVerb.verb} ${n.noun.substring(3)}`);
      if (Object.keys(newMatches).length === 5) {
        triggerConfetti();
      }
    } else {
      // Wrong match
      setSelectedVerb(null);
    }
  };

  return (
    <div className="space-y-6 pb-20 max-w-6xl mx-auto">
      {/* Top Banner Header */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-amber-600 via-rose-600 to-indigo-700 p-6 sm:p-8 text-white shadow-xl">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-2">
            <button
              onClick={onBack}
              className="inline-flex items-center gap-2 text-xs font-bold text-amber-200 hover:text-white transition-colors bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-xl backdrop-blur-sm cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Quay lại Trang chủ</span>
            </button>
            <div className="inline-flex items-center gap-2 ml-2 rounded-full bg-white/20 px-3 py-0.5 text-xs font-semibold text-amber-200">
              <Award className="w-3.5 h-3.5 text-amber-300" />
              <span>Tiếng Anh 8 Global Success • Trang 70 & 71 SGK</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-black tracking-tight">
              Review 2 (Units 4 - 5 - 6)
            </h1>
            <p className="text-amber-100 text-xs sm:text-sm max-w-2xl leading-relaxed">
              Trọng tâm ôn tập tổng hợp Giữa kỳ & Cuối kỳ I: Dân tộc thiểu số Việt Nam (Unit 4), Phong tục truyền thống & Mạo từ Zero Article (Unit 5), 
              Phong cách sống thế giới & Câu điều kiện loại 1 (Unit 6)!
            </p>
          </div>

          <div className="flex sm:flex-col gap-2 shrink-0">
            {onGoToQuiz && (
              <button
                onClick={onGoToQuiz}
                className="px-4 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-900 text-xs font-extrabold transition flex items-center gap-1.5 cursor-pointer shadow-lg"
              >
                <Trophy className="w-4 h-4 text-amber-950" />
                <span>Làm Đề Thi Tổng Hợp 20 Câu</span>
              </button>
            )}
          </div>
        </div>

        {/* Tab switchers */}
        <div className="mt-6 flex items-center gap-2 border-t border-white/20 pt-4 overflow-x-auto">
          <button
            onClick={() => setActiveTab('overview')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer whitespace-nowrap ${
              activeTab === 'overview'
                ? 'bg-white text-rose-800 shadow-md font-extrabold'
                : 'bg-white/10 hover:bg-white/20 text-white'
            }`}
          >
            <Brain className="w-3.5 h-3.5" />
            <span>1. Sơ Đồ Tổng Hợp (Units 4 - 5 - 6)</span>
          </button>
          <button
            onClick={() => setActiveTab('language')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer whitespace-nowrap ${
              activeTab === 'language'
                ? 'bg-white text-rose-800 shadow-md font-extrabold'
                : 'bg-white/10 hover:bg-white/20 text-white'
            }`}
          >
            <Zap className="w-3.5 h-3.5" />
            <span>2. Phần Language (Trang 70 SGK)</span>
          </button>
          <button
            onClick={() => setActiveTab('skills')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer whitespace-nowrap ${
              activeTab === 'skills'
                ? 'bg-white text-rose-800 shadow-md font-extrabold'
                : 'bg-white/10 hover:bg-white/20 text-white'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>3. Phần Skills (Trang 71 SGK)</span>
          </button>
        </div>
      </div>

      {/* TAB 1: OVERVIEW */}
      {activeTab === 'overview' && (
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-amber-50 via-rose-50 to-indigo-50 border border-amber-200/70 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 flex items-center gap-2">
                  <Brain className="w-6 h-6 text-rose-600" />
                  <span>Ma Trận Kiến Thức Trọng Tâm Review 2 (Units 4 - 5 - 6)</span>
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  Ôn nhanh toàn diện 3 bài học lớn trước khi bước vào giải các bài tập SGK trang 70 - 71.
                </p>
              </div>
              <button
                onClick={triggerConfetti}
                className="px-4 py-2 bg-gradient-to-r from-amber-500 to-rose-600 text-white text-xs font-bold rounded-xl shadow hover:opacity-90 transition flex items-center gap-1.5 cursor-pointer"
              >
                <Sparkles className="w-4 h-4" />
                <span>Thắp sáng tự tin</span>
              </button>
            </div>

            {/* 3 Main Unit Matrix Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Unit 4 Card */}
              <div className="bg-white rounded-2xl p-5 border border-amber-200 shadow-xs hover:shadow-md transition space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-black">
                    U4
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-50 text-amber-700">Dân tộc VN</span>
                </div>
                <h3 className="font-extrabold text-amber-900 text-sm">Unit 4: Ethnic Groups of Viet Nam</h3>
                <div className="text-xs space-y-2 text-slate-700">
                  <p><strong>Từ vựng:</strong> 54 dân tộc, nhà sàn (stilt house), nhà Rông (Rong house), cồng chiêng, cọn nước, ruộng bậc thang (terraced fields).</p>
                  <p><strong>Ngữ pháp:</strong> Câu hỏi Yes/No & Wh-questions; Danh từ đếm được (countable) & không đếm được (uncountable); Lượng từ: many, much, a few, a little, some.</p>
                  <p><strong>Ngữ âm:</strong> Âm /k/ (culture, custom) và Âm /g/ (figure, growth, globe).</p>
                </div>
              </div>

              {/* Unit 5 Card */}
              <div className="bg-white rounded-2xl p-5 border border-rose-200 shadow-xs hover:shadow-md transition space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-9 h-9 rounded-xl bg-rose-100 text-rose-800 flex items-center justify-center font-black">
                    U5
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-rose-50 text-rose-700">Phong tục tập quán</span>
                </div>
                <h3 className="font-extrabold text-rose-900 text-sm">Unit 5: Our Customs and Traditions</h3>
                <div className="text-xs space-y-2 text-slate-700">
                  <p><strong>Từ vựng:</strong> Lễ mừng thọ (longevity party), cây nêu ngày Tết (bamboo pole), thờ tổ tiên (worship ancestors), Lễ hội Nghinh Ông (whale festival), phép lịch sự bàn ăn.</p>
                  <p><strong>Ngữ pháp:</strong> Mạo từ Zero Article (Ø) không dùng mạo từ với danh từ số nhiều chung, danh từ không đếm được, bữa ăn, tháng, phương tiện sau "by".</p>
                  <p><strong>Ngữ âm:</strong> Âm mũi /n/ (thin, identify, longevity) và Âm mũi /ŋ/ (thank, bring, sing, spring).</p>
                </div>
              </div>

              {/* Unit 6 Card */}
              <div className="bg-white rounded-2xl p-5 border border-indigo-200 shadow-xs hover:shadow-md transition space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-9 h-9 rounded-xl bg-indigo-100 text-indigo-800 flex items-center justify-center font-black">
                    U6
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-indigo-50 text-indigo-700">Phong cách sống</span>
                </div>
                <h3 className="font-extrabold text-indigo-900 text-sm">Unit 6: Lifestyles</h3>
                <div className="text-xs space-y-2 text-slate-700">
                  <p><strong>Từ vựng:</strong> Xe trượt tuyết chó kéo Alaska (dogsled & mushers), thói quen ăn sáng vỉa hè (street food), cuộc sống du mục (nomadic), học online, ẩm thực thế giới.</p>
                  <p><strong>Ngữ pháp:</strong> Thì Tương lai đơn (will / won’t) & Câu điều kiện loại 1 với công thức vàng: Unless = If ... not (Trừ phi / Nếu không).</p>
                  <p><strong>Ngữ âm:</strong> Cặp chùm phụ âm /br/ (bridge, breakfast) và /pr/ (present, practise).</p>
                </div>
              </div>
            </div>

            {/* Mnemonic Cheat Sheet: 3 Golden Rules */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 space-y-4 shadow-xs">
              <h3 className="font-extrabold text-slate-900 text-sm flex items-center gap-2">
                <Lightbulb className="w-5 h-5 text-amber-500" />
                <span>3 Mẹo Nhớ Vàng Xuất Hiện Trong Đề Thi Học Kỳ</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                <div className="p-3 bg-amber-50/60 rounded-xl border border-amber-200 space-y-1">
                  <span className="font-extrabold text-amber-900">1. Đếm được vs Không đếm được</span>
                  <p className="text-slate-600">
                    <strong>Countable:</strong> many, a few, few + N(s/es)<br/>
                    <strong>Uncountable:</strong> much, a little, little + N(không đếm được như information, furniture, water).
                  </p>
                </div>
                <div className="p-3 bg-rose-50/60 rounded-xl border border-rose-200 space-y-1">
                  <span className="font-extrabold text-rose-900">2. Quy tắc Zero Article (Ø)</span>
                  <p className="text-slate-600">
                    Không dùng a/an/the khi nói về sự vật số nhiều chung (flowers, trees), bữa ăn (have breakfast), môn thể thao (play football), hoặc phương tiện (by car).
                  </p>
                </div>
                <div className="p-3 bg-indigo-50/60 rounded-xl border border-indigo-200 space-y-1">
                  <span className="font-extrabold text-indigo-900">3. Unless = If ... not</span>
                  <p className="text-slate-600">
                    <em>Unless you try, you will never know</em> = <em>If you do NOT try, you will never know</em>. Mệnh đề chứa Unless KHÔNG chia phủ định (không dùng don't/doesn't).
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-amber-200/80 flex items-center justify-between flex-wrap gap-2 text-xs">
              <span className="text-slate-600 font-medium">Sẵn sàng thử thách toàn diện 100% bài tập trong SGK?</span>
              <button
                onClick={() => setActiveTab('language')}
                className="px-4 py-2 bg-rose-600 hover:bg-rose-700 text-white rounded-xl font-bold transition flex items-center gap-1.5 cursor-pointer shadow-sm"
              >
                <span>Bắt đầu Bài tập Language (Trang 70)</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: LANGUAGE (Page 70) */}
      {activeTab === 'language' && (
        <div className="space-y-6">
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-8">
            <div className="border-b border-slate-100 pb-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 text-rose-700 text-xs font-bold mb-2">
                <Zap className="w-3.5 h-3.5" />
                <span>Trang 70 Sách Giáo Khoa</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                LANGUAGE: Pronunciation, Vocabulary & Grammar Master
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Giải trọn vẹn và phân tích tường tận từng câu hỏi từ bài 1 đến bài 5 trên trang 70 SGK.
              </p>
            </div>

            {/* Exercise 1: Pronunciation (Page 70) */}
            <div className="bg-slate-50/70 rounded-2xl p-5 border border-slate-200 space-y-4">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <h3 className="font-extrabold text-slate-900 text-sm flex items-center gap-2">
                  <Volume2 className="w-4 h-4 text-rose-600" />
                  <span>Bài 1: Circle the word which has the underlined part pronounced differently (Trang 70 SGK)</span>
                </h3>
                <span className="text-xs text-slate-500 font-medium">Chạm vào từ để nghe phát âm IPA</span>
              </div>

              <div className="space-y-3">
                {[
                  {
                    id: 1,
                    words: [
                      { text: 'culture', underline: 'c', ipa: '/ˈkʌltʃə/', sound: '/k/', vi: 'văn hóa' },
                      { text: 'community', underline: 'c', ipa: '/kəˈmjuːnəti/', sound: '/k/', vi: 'cộng đồng' },
                      { text: 'circle', underline: 'c', ipa: '/ˈsɜːkl/', sound: '/s/', vi: 'vòng tròn' },
                      { text: 'custom', underline: 'c', ipa: '/ˈkʌstəm/', sound: '/k/', vi: 'phong tục' },
                    ],
                    correct: 'circle',
                    explain: '"circle" có âm c đọc là /s/ (/ˈsɜːkl/), còn culture, community, custom đều đọc là /k/.'
                  },
                  {
                    id: 2,
                    words: [
                      { text: 'identify', underline: 'n', ipa: '/aɪˈdentɪfaɪ/', sound: '/n/', vi: 'nhận diện' },
                      { text: 'thank', underline: 'n', ipa: '/θæŋk/', sound: '/ŋ/', vi: 'cảm ơn' },
                      { text: 'dance', underline: 'n', ipa: '/dɑːns/', sound: '/n/', vi: 'khiêu vũ' },
                      { text: 'plan', underline: 'n', ipa: '/plæn/', sound: '/n/', vi: 'kế hoạch' },
                    ],
                    correct: 'thank',
                    explain: '"thank" có chữ n đứng trước k nên phát âm là âm ngạc mềm /ŋ/, còn lại phát âm là /n/.'
                  },
                  {
                    id: 3,
                    words: [
                      { text: 'bring', underline: 'ng', ipa: '/brɪŋ/', sound: '/ŋ/', vi: 'mang theo' },
                      { text: 'sing', underline: 'ng', ipa: '/sɪŋ/', sound: '/ŋ/', vi: 'hát ca' },
                      { text: 'spring', underline: 'ng', ipa: '/sprɪŋ/', sound: '/ŋ/', vi: 'mùa xuân' },
                      { text: 'longevity', underline: 'n', ipa: '/lɒnˈdʒevəti/', sound: '/n/', vi: 'tuổi thọ' },
                    ],
                    correct: 'longevity',
                    explain: '"longevity" có n phát âm là /n/, các từ còn lại mang âm ngạc mềm /ŋ/.'
                  },
                  {
                    id: 4,
                    words: [
                      { text: 'figure', underline: 'g', ipa: '/ˈfɪɡə/', sound: '/g/', vi: 'nhân vật' },
                      { text: 'danger', underline: 'g', ipa: '/ˈdeɪndʒə/', sound: '/dʒ/', vi: 'sự nguy hiểm' },
                      { text: 'engine', underline: 'g', ipa: '/ˈendʒɪn/', sound: '/dʒ/', vi: 'động cơ' },
                      { text: 'change', underline: 'g', ipa: '/tʃeɪndʒ/', sound: '/dʒ/', vi: 'thay đổi' },
                    ],
                    correct: 'figure',
                    explain: '"figure" phát âm là /g/, còn danger, engine, change đều phát âm là /dʒ/.'
                  },
                  {
                    id: 5,
                    words: [
                      { text: 'growth', underline: 'g', ipa: '/ɡrəʊθ/', sound: '/g/', vi: 'sự tăng trưởng' },
                      { text: 'globe', underline: 'g', ipa: '/ɡləʊb/', sound: '/g/', vi: 'quả địa cầu' },
                      { text: 'ground', underline: 'g', ipa: '/ɡraʊnd/', sound: '/g/', vi: 'mặt đất' },
                      { text: 'gender', underline: 'g', ipa: '/ˈdʒendə/', sound: '/dʒ/', vi: 'giới tính' },
                    ],
                    correct: 'gender',
                    explain: '"gender" phát âm là /dʒ/, trong khi growth, globe, ground đều phát âm là /g/.'
                  }
                ].map((item) => {
                  const chosen = pronAnswers[item.id];
                  return (
                    <div key={item.id} className="p-3.5 bg-white rounded-xl border border-slate-200 text-xs space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="font-extrabold text-slate-800 text-sm">Câu {item.id}: Chọn từ có phần gạch chân phát âm khác</span>
                        {chosen && (
                          <span className={`text-xs font-bold ${chosen === item.correct ? 'text-emerald-600' : 'text-rose-600'}`}>
                            {chosen === item.correct ? '✓ Chính xác' : '✗ Hãy nghe lại'}
                          </span>
                        )}
                      </div>

                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                        {item.words.map((w) => (
                          <button
                            key={w.text}
                            onClick={() => {
                              setPronAnswers({ ...pronAnswers, [item.id]: w.text });
                              speakText(w.text);
                              if (w.text === item.correct) triggerConfetti();
                            }}
                            className={`p-2.5 rounded-xl border text-left transition-all cursor-pointer space-y-1 ${
                              chosen === w.text
                                ? w.text === item.correct
                                  ? 'bg-emerald-50 border-emerald-500 ring-2 ring-emerald-500 shadow-sm'
                                  : 'bg-rose-50 border-rose-500 ring-2 ring-rose-500 shadow-sm'
                                : 'bg-slate-50 hover:bg-slate-100 border-slate-200'
                            }`}
                          >
                            <div className="flex items-center justify-between">
                              <span className="font-extrabold text-xs text-slate-900">{w.text}</span>
                              <span className="text-[10px] px-1.5 py-0.5 rounded-md bg-white border border-slate-200 font-mono font-bold text-rose-700">
                                {w.sound}
                              </span>
                            </div>
                            <div className="text-[10px] font-mono text-slate-500">{w.ipa}</div>
                            <div className="text-[10px] text-amber-900 bg-amber-50 px-1.5 py-0.5 rounded border border-amber-200/80 font-medium">
                              {getReadingTip(w.text, w.ipa)}
                            </div>
                            <div className="text-[11px] text-slate-600 font-medium">
                              👉 {w.vi}
                            </div>
                          </button>
                        ))}
                      </div>

                      {chosen && (
                        <div className={`p-2.5 rounded-xl text-xs font-medium ${chosen === item.correct ? 'bg-emerald-50 border border-emerald-200 text-emerald-800' : 'bg-rose-50 border border-rose-200 text-rose-800'}`}>
                          <strong>{chosen === item.correct ? '✅ Phân tích chuẩn: ' : '❌ Hướng dẫn giải: '}</strong> {item.explain}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Exercise 2: Vocabulary Collocations Interactive Match (Page 70) */}
            <div className="bg-amber-50/50 rounded-2xl p-5 border border-amber-200 space-y-4">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div>
                  <h3 className="font-extrabold text-amber-950 text-sm flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-amber-600" />
                    <span>Bài 2: Match a verb or verb phrase in A with a noun or noun phrase in B (Trang 70 SGK)</span>
                  </h3>
                  <p className="text-xs text-amber-800 mt-0.5">
                    Chạm một Động từ ở cột trái rồi chạm Danh từ tương ứng ở cột phải để ghép cặp!
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      setMatchedPairs({});
                      setSelectedVerb(null);
                      setShowAllPairs(false);
                    }}
                    className="px-2.5 py-1 text-xs font-semibold text-slate-600 hover:text-slate-900 bg-white border border-slate-200 rounded-lg cursor-pointer"
                  >
                    Làm lại
                  </button>
                  <button
                    onClick={() => setShowAllPairs(!showAllPairs)}
                    className="px-2.5 py-1 text-xs font-bold text-amber-800 bg-amber-100 hover:bg-amber-200 rounded-lg cursor-pointer"
                  >
                    {showAllPairs ? 'Ẩn đáp án' : 'Xem toàn bộ đáp án'}
                  </button>
                </div>
              </div>

              {/* Interactive Matching Board */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Column A: Verbs */}
                <div className="space-y-2">
                  <span className="text-xs font-extrabold text-slate-700 uppercase tracking-wider block">
                    Cột A: Động từ (Verbs)
                  </span>
                  {collocationVerbs.map((v) => {
                    const isMatched = matchedPairs[v.id] !== undefined;
                    const isSelected = selectedVerb?.id === v.id;
                    return (
                      <button
                        key={v.id}
                        disabled={isMatched}
                        onClick={() => handleVerbSelect(v)}
                        className={`w-full p-2.5 text-left rounded-xl text-xs font-bold transition flex flex-col space-y-1 cursor-pointer ${
                          isMatched
                            ? 'bg-emerald-50 text-emerald-800 border border-emerald-200 opacity-80'
                            : isSelected
                            ? 'bg-amber-500 text-white shadow-md'
                            : 'bg-white hover:bg-amber-100 text-slate-800 border border-slate-200'
                        }`}
                      >
                        <div className="flex items-center justify-between w-full">
                          <div className="flex items-center gap-1.5">
                            <span>{v.id}. {v.verb}</span>
                            <span className="text-[10px] opacity-80 font-normal">({v.vi})</span>
                          </div>
                          {isMatched && <CheckCircle2 className="w-4 h-4 text-emerald-600" />}
                        </div>
                        <div className="flex items-center gap-1.5 text-[10px] font-mono opacity-80">
                          <span>{v.ipa}</span>
                          <span className="font-sans font-medium text-[9px] px-1 py-0.2 rounded bg-black/5">{v.tip}</span>
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* Column B: Nouns */}
                <div className="space-y-2">
                  <span className="text-xs font-extrabold text-slate-700 uppercase tracking-wider block">
                    Cột B: Danh từ (Nouns)
                  </span>
                  {collocationNouns.map((n) => {
                    const isMatched = Object.values(matchedPairs).includes(n.id);
                    return (
                      <button
                        key={n.id}
                        disabled={isMatched}
                        onClick={() => handleNounSelect(n)}
                        className={`w-full p-2.5 text-left rounded-xl text-xs font-bold transition flex flex-col space-y-1 cursor-pointer ${
                          isMatched
                            ? 'bg-emerald-50 text-emerald-800 border border-emerald-200 opacity-80'
                            : selectedVerb
                            ? 'bg-white hover:bg-emerald-100 text-slate-800 border border-amber-300 ring-1 ring-amber-300'
                            : 'bg-white hover:bg-slate-100 text-slate-800 border border-slate-200'
                        }`}
                      >
                        <div className="flex items-center justify-between w-full">
                          <div className="flex items-center gap-1.5">
                            <span>{n.noun}</span>
                            <span className="text-[10px] opacity-80 font-normal">({n.vi})</span>
                          </div>
                          {isMatched && <CheckCircle2 className="w-4 h-4 text-emerald-600" />}
                        </div>
                        <div className="flex items-center gap-1.5 text-[10px] font-mono opacity-80">
                          <span>{n.ipa}</span>
                          <span className="font-sans font-medium text-[9px] px-1 py-0.2 rounded bg-black/5">{n.tip}</span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Matched Summary or Cheat Sheet */}
              {(showAllPairs || Object.keys(matchedPairs).length > 0) && (
                <div className="mt-4 p-4 bg-white rounded-xl border border-amber-200 space-y-2">
                  <span className="text-xs font-black text-amber-900 block">
                    {showAllPairs ? '📚 Bảng tổng hợp trọn bộ 5 cụm từ SGK:' : '🎉 Các cặp bạn đã ghép đúng:'}
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 text-xs">
                    {[
                      { id: 1, full: 'weave clothing', vi: 'dệt vải may quần áo', ipa: '/wiːv ˈkləʊðɪŋ/', ex: 'Tribal women weave clothing skillfully.' },
                      { id: 2, full: 'chase away bad spirits', vi: 'xua đuổi tà ma', ipa: '/tʃeɪs əˈweɪ bæd ˈspɪrɪts/', ex: 'They erect a bamboo pole to chase away bad spirits.' },
                      { id: 3, full: 'harvest crops', vi: 'thu hoạch hoa màu', ipa: '/ˈhɑːvɪst krɒps/', ex: 'Farmers harvest crops every autumn.' },
                      { id: 4, full: 'overlook terraced fields', vi: 'nhìn ra ruộng bậc thang', ipa: '/ˌəʊvəˈlʊk ˈterəst fiːldz/', ex: 'The homestay overlooks terraced fields.' },
                      { id: 5, full: 'make crafts', vi: 'làm đồ thủ công mỹ nghệ', ipa: '/meɪk krɑːfts/', ex: 'Villagers make crafts to earn their living.' },
                    ].map(item => (
                      <div key={item.id} className="p-3 bg-amber-50/60 rounded-xl border border-amber-100 space-y-1.5">
                        <div className="flex items-center justify-between">
                          <span className="font-extrabold text-amber-950 text-xs">{item.full}</span>
                          <button
                            onClick={() => speakText(item.full)}
                            className="text-amber-700 hover:text-amber-950 cursor-pointer"
                          >
                            <Volume2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                        <div className="text-[10px] text-amber-800 font-mono font-semibold">{item.ipa}</div>
                        <div className="text-[10px] text-amber-900 bg-white/80 px-1.5 py-0.5 rounded border border-amber-200">
                          {getReadingTip(item.full, item.ipa)}
                        </div>
                        <p className="text-[11px] text-slate-700 font-medium">👉 {item.vi}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Exercise 3: Complete sentences with words from the box (Page 70) */}
            <div className="bg-white rounded-2xl p-5 border border-slate-200 space-y-3">
              <h3 className="font-extrabold text-slate-900 text-sm flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Bài 3: Complete each sentence with a word or phrase from the box (Trang 70 SGK)</span>
              </h3>
              
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs space-y-2">
                <span className="text-slate-700 font-bold block">Hộp từ vựng SGK (kèm phiên âm IPA & gợi ý đọc):</span>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2">
                  {[
                    { w: 'habit', ipa: '/ˈhæbɪt/', mean: 'thói quen' },
                    { w: 'lifestyle', ipa: '/ˈlaɪfstaɪl/', mean: 'phong cách sống' },
                    { w: 'minority group', ipa: '/maɪˈnɒrəti ɡruːp/', mean: 'nhóm dân tộc' },
                    { w: 'festivals', ipa: '/ˈfestɪvlz/', mean: 'các lễ hội' },
                    { w: 'decorative items', ipa: '/ˈdekərətɪv ˈaɪtəmz/', mean: 'đồ trang trí' }
                  ].map(item => (
                    <div key={item.w} className="p-2 bg-white border border-slate-200 rounded-lg shadow-2xs space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="font-mono font-bold text-rose-800 text-xs">{item.w}</span>
                        <button onClick={() => speakText(item.w)} className="text-slate-400 hover:text-rose-600">
                          <Volume2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <div className="text-[10px] text-slate-500 font-mono">{item.ipa}</div>
                      <div className="text-[10px] text-amber-900 bg-amber-50 px-1 py-0.5 rounded border border-amber-200">
                        {getReadingTip(item.w, item.ipa)}
                      </div>
                      <div className="text-[11px] text-slate-600">({item.mean})</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-3 text-xs">
                {[
                  {
                    id: 1,
                    text: '1. Ethnic minority girls wear a lot of beautiful ______ on special occasions.',
                    options: ['decorative items', 'festivals', 'habit', 'lifestyle'],
                    correct: 'decorative items',
                    vi: 'Các cô gái dân tộc đeo rất nhiều đồ trang sức đẹp vào các dịp đặc biệt.',
                    audioText: 'Ethnic minority girls wear a lot of beautiful decorative items on special occasions.'
                  },
                  {
                    id: 2,
                    text: '2. I love attending local ______ in my area because they are unique.',
                    options: ['festivals', 'lifestyle', 'minority group', 'decorative items'],
                    correct: 'festivals',
                    vi: 'Tớ thích tham gia các lễ hội địa phương vì chúng rất độc đáo.',
                    audioText: 'I love attending local festivals in my area because they are unique.'
                  },
                  {
                    id: 3,
                    text: '3. It was a big change in ______ when my family moved from the city to the countryside.',
                    options: ['lifestyle', 'habit', 'minority group', 'festivals'],
                    correct: 'lifestyle',
                    vi: 'Đó là một sự thay đổi lớn trong lối sống khi gia đình tôi chuyển từ phố về quê.',
                    audioText: 'It was a big change in lifestyle when my family moved from the city to the countryside.'
                  },
                  {
                    id: 4,
                    text: '4. I’d prefer you not to make a ______ of going to bed late.',
                    options: ['habit', 'lifestyle', 'festivals', 'decorative items'],
                    correct: 'habit',
                    vi: 'Bố mẹ muốn con đừng tạo thành thói quen thức khuya (make a habit of V-ing).',
                    audioText: 'I’d prefer you not to make a habit of going to bed late.'
                  },
                  {
                    id: 5,
                    text: '5. The Bahnar is a large ethnic ______ in the Central Highlands.',
                    options: ['minority group', 'lifestyle', 'habit', 'festivals'],
                    correct: 'minority group',
                    vi: 'Người Ba-na là một nhóm dân tộc thiểu số lớn ở Tây Nguyên.',
                    audioText: 'The Bahnar is a large ethnic minority group in the Central Highlands.'
                  }
                ].map((item) => {
                  const chosen = vocabBoxAnswers[item.id];
                  return (
                    <div key={item.id} className="p-3.5 bg-slate-50/80 rounded-xl border border-slate-200 space-y-2">
                      <div className="flex items-start justify-between gap-2">
                        <p className="font-semibold text-slate-800">{item.text}</p>
                        <button
                          onClick={() => speakText(item.audioText)}
                          className="text-slate-400 hover:text-indigo-600 transition shrink-0 cursor-pointer"
                          title="Nghe câu hoàn chỉnh"
                        >
                          <Volume2 className="w-4 h-4" />
                        </button>
                      </div>

                      {/* Options selector */}
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {item.options.map(opt => (
                          <button
                            key={opt}
                            onClick={() => {
                              setVocabBoxAnswers({ ...vocabBoxAnswers, [item.id]: opt });
                              if (opt === item.correct) triggerConfetti();
                            }}
                            className={`px-2.5 py-1 rounded-lg text-xs font-bold transition cursor-pointer ${
                              chosen === opt
                                ? opt === item.correct
                                  ? 'bg-emerald-600 text-white'
                                  : 'bg-red-500 text-white'
                                : 'bg-white hover:bg-slate-200 text-slate-700 border border-slate-200'
                            }`}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>

                      {chosen && (
                        <p className={`text-[11px] font-semibold ${chosen === item.correct ? 'text-emerald-700' : 'text-red-600'}`}>
                          {chosen === item.correct ? '✅ Đúng! ' : '❌ Chưa chính xác. '} ({item.vi})
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Exercise 4: Grammar MCQs (Page 70) */}
            <div className="bg-indigo-50/50 rounded-2xl p-5 border border-indigo-200 space-y-4">
              <h3 className="font-extrabold text-indigo-950 text-sm flex items-center gap-2">
                <Zap className="w-4 h-4 text-indigo-600" />
                <span>Bài 4: Choose the correct answer A, B, or C to complete each sentence (Trang 70 SGK)</span>
              </h3>
              <div className="space-y-3">
                {[
                  {
                    id: 1,
                    topic: 'Zero Article (Mạo từ Zero)',
                    q: '1. Tet is coming. I see ______ flowers and ornamental trees everywhere.',
                    opts: ['A. a', 'B. the', 'C. Ø'],
                    correct: 'C. Ø',
                    exp: 'Quy tắc Zero article: "flowers and ornamental trees" là danh từ số nhiều nói chung nên không dùng mạo từ -> Chọn C. Ø.'
                  },
                  {
                    id: 2,
                    topic: 'Mạo từ xác định The',
                    q: '2. Bat Trang Village is famous for ______ traditional craft of pottery making.',
                    opts: ['A. a', 'B. the', 'C. Ø'],
                    correct: 'B. the',
                    exp: 'Nghề thủ công truyền thống đã được xác định cụ thể bằng vế "of pottery making" (làm gốm), nên phải dùng mạo từ xác định -> Chọn B. the.'
                  },
                  {
                    id: 3,
                    topic: 'Từ để hỏi Wh-words',
                    q: '3. - Hi, Trang. ______ are things in Hue? - Everything’s great. The weather’s fantastic.',
                    opts: ['A. How', 'B. What', 'C. Where'],
                    correct: 'A. How',
                    exp: 'Cụm câu hỏi thăm tình hình quen thuộc: "How are things...?" (Dạo này mọi việc thế nào?) -> Chọn A. How.'
                  },
                  {
                    id: 4,
                    topic: 'Từ để hỏi Wh-words',
                    q: '4. ______ street food in Viet Nam is most popular among foreign visitors?',
                    opts: ['A. How', 'B. What', 'C. Why'],
                    correct: 'B. What',
                    exp: 'Hỏi về loại món ăn đường phố nào ("What street food...") -> Chọn B. What.'
                  },
                  {
                    id: 5,
                    topic: 'Lượng từ danh từ không đếm được',
                    q: '5. I’m searching for ______ information about the lifestyle of the Van Kieu.',
                    opts: ['A. some', 'B. many', 'C. an'],
                    correct: 'A. some',
                    exp: '"information" là danh từ không đếm được, không thể dùng many (chỉ đi với đếm được số nhiều) hay an -> Chọn A. some.'
                  }
                ].map((item) => {
                  const chosen = grammarAnswers[item.id];
                  return (
                    <div key={item.id} className="p-3.5 bg-white rounded-xl border border-slate-200 text-xs space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-slate-800">{item.q}</span>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-indigo-50 text-indigo-700">
                          {item.topic}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-2 pt-1">
                        {item.opts.map((opt) => (
                          <button
                            key={opt}
                            onClick={() => {
                              setGrammarAnswers({ ...grammarAnswers, [item.id]: opt });
                              if (opt === item.correct) triggerConfetti();
                            }}
                            className={`px-3 py-1.5 rounded-lg font-bold transition cursor-pointer ${
                              chosen === opt
                                ? opt === item.correct ? 'bg-emerald-600 text-white' : 'bg-red-500 text-white'
                                : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                            }`}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                      {chosen && (
                        <p className={`text-[11px] font-semibold ${chosen === item.correct ? 'text-emerald-700' : 'text-red-600'}`}>
                          {item.exp}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Exercise 5: Correct verb forms (Page 70) */}
            <div className="bg-slate-50/70 rounded-2xl p-5 border border-slate-200 space-y-4">
              <h3 className="font-extrabold text-slate-900 text-sm flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Bài 5: Use the correct forms of the verbs in brackets (Trang 70 SGK)</span>
              </h3>
              <p className="text-xs text-slate-600">
                Thử sức chọn dạng đúng của động từ để củng cố thì Tương lai đơn & Câu điều kiện loại 1:
              </p>

              <div className="space-y-3 text-xs">
                {[
                  {
                    id: 1,
                    text: '1. Next year we (build) ______ a house overlooking the lake.',
                    options: ['will build', 'builds', 'built'],
                    correct: 'will build',
                    rule: 'Dấu hiệu "Next year" -> Chia thì Tương lai đơn (will + V-nguyên thể: will build).'
                  },
                  {
                    id: 2,
                    text: '2. Spring is coming, so we (celebrate) ______ the Ban Flower Festival soon.',
                    options: ['will celebrate', 'celebrates', 'celebrating'],
                    correct: 'will celebrate',
                    rule: 'Dấu hiệu "soon" (sớm thôi) -> Chia thì Tương lai đơn (will celebrate).'
                  },
                  {
                    id: 3,
                    text: '3. If you have a chance to travel on a dogsled, you (never forget) ______ it.',
                    options: ['will never forget', 'never forget', 'never forgot'],
                    correct: 'will never forget',
                    rule: 'Câu điều kiện loại 1: Mệnh đề if hiện tại đơn (have) -> Mệnh đề chính dùng will + never + V (will never forget).'
                  },
                  {
                    id: 4,
                    text: '4. If I (be) ______ free to choose a topic, I will give a presentation on Alaska.',
                    options: ['am', 'is', 'will be'],
                    correct: 'am',
                    rule: 'Mệnh đề If loại 1 chia Hiện tại đơn: Chủ ngữ "I" đi với động từ to be "am" (KHÔNG dùng will be trong mệnh đề If).'
                  },
                  {
                    id: 5,
                    text: '5. Unless you try, you (never know) ______ if you can play football.',
                    options: ['will never know', 'never know', 'never knew'],
                    correct: 'will never know',
                    rule: 'Mệnh đề Unless hiện tại đơn (try) -> Mệnh đề chính loại 1 dùng will + never + V (will never know).'
                  }
                ].map((item) => {
                  const chosen = verbFormAnswers[item.id];
                  return (
                    <div key={item.id} className="p-3.5 bg-white rounded-xl border border-slate-200 space-y-2">
                      <p className="font-semibold text-slate-800">{item.text}</p>
                      <div className="flex flex-wrap gap-2">
                        {item.options.map(opt => (
                          <button
                            key={opt}
                            onClick={() => {
                              setVerbFormAnswers({ ...verbFormAnswers, [item.id]: opt });
                              if (opt === item.correct) triggerConfetti();
                            }}
                            className={`px-3 py-1.5 rounded-lg font-bold transition cursor-pointer font-mono ${
                              chosen === opt
                                ? opt === item.correct ? 'bg-emerald-600 text-white' : 'bg-red-500 text-white'
                                : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                            }`}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                      {chosen && (
                        <p className={`text-[11px] font-semibold ${chosen === item.correct ? 'text-emerald-700' : 'text-red-600'}`}>
                          {chosen === item.correct ? '✅ Đúng! ' : '❌ Chưa chính xác. '} 👉 {item.rule}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: SKILLS (Page 71) */}
      {activeTab === 'skills' && (
        <div className="space-y-6">
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-8">
            <div className="border-b border-slate-100 pb-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold mb-2">
                <BookOpen className="w-3.5 h-3.5" />
                <span>Trang 71 Sách Giáo Khoa</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                SKILLS: Reading, Speaking, Listening & Writing
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Luyện tập toàn diện 4 kỹ năng ngôn ngữ từ Hội chợ Mùa xuân Dân tộc đến lòng hiếu kính người già.
              </p>
            </div>

            {/* Reading: Spring Fair (Activity 1 Page 71) */}
            <div className="bg-gradient-to-br from-emerald-50/60 to-teal-50/60 rounded-2xl p-5 sm:p-6 border border-emerald-200 space-y-4">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-emerald-700" />
                  <h3 className="font-extrabold text-emerald-950 text-base">
                    Reading: SPRING FAIR (16 – 25 January) at Viet Nam National Village
                  </h3>
                </div>
                <div className="flex items-center gap-2">
                  {activeSpeakingText ? (
                    <button
                      onClick={stopSpeaking}
                      className="px-3 py-1.5 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs font-bold transition flex items-center gap-1.5 cursor-pointer shadow-xs"
                    >
                      <Pause className="w-3.5 h-3.5" />
                      <span>Dừng đọc</span>
                    </button>
                  ) : (
                    <button
                      onClick={() => speakText(
                        "Spring Fair offers opportunities for tourists to learn about the life of ethnic people in Viet Nam. Ethnic Markets feature vegetables, flowers, and crafts. Photo Exhibition shows the daily activities of ethnic people. Performances demonstrate traditional songs and dances. Childhood Fun has traditional folk games and handicrafts. A Pottery Village introduces pottery making by Bau Truc artisans."
                      )}
                      className="px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition flex items-center gap-1.5 cursor-pointer shadow-xs"
                    >
                      <Volume2 className="w-3.5 h-3.5" />
                      <span>Nghe bài đọc</span>
                    </button>
                  )}
                </div>
              </div>

              {/* Event Schedule Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-xs">
                <div className="p-3 bg-white rounded-xl border border-emerald-100 shadow-2xs space-y-1">
                  <span className="font-bold text-emerald-800">🌽 Ethnic Markets (16 - 25 Jan)</span>
                  <p className="text-slate-600 text-[11px]">Trưng bày đặc sản nông sản, rau củ, hoa và đồ thủ công của các dân tộc.</p>
                </div>
                <div className="p-3 bg-white rounded-xl border border-emerald-100 shadow-2xs space-y-1">
                  <span className="font-bold text-emerald-800">📸 Photo Exhibition (16 - 25 Jan)</span>
                  <p className="text-slate-600 text-[11px]">Triển lãm ảnh sinh hoạt thường ngày và nét đẹp văn hóa buôn làng.</p>
                </div>
                <div className="p-3 bg-white rounded-xl border border-emerald-100 shadow-2xs space-y-1">
                  <span className="font-bold text-emerald-800">💃 Performances (17 & 24 Jan)</span>
                  <p className="text-slate-600 text-[11px]">Hơn 20 tiết mục ca múa nhạc dân gian truyền thống sôi động.</p>
                </div>
                <div className="p-3 bg-white rounded-xl border border-emerald-100 shadow-2xs space-y-1">
                  <span className="font-bold text-emerald-800">🪁 Childhood Fun (17-18 & 24-25 Jan)</span>
                  <p className="text-slate-600 text-[11px]">Trò chơi dân gian cho trẻ em và tự tay làm đồ thủ công cùng nghệ nhân.</p>
                </div>
                <div className="p-3 bg-white rounded-xl border border-emerald-100 shadow-2xs space-y-1">
                  <span className="font-bold text-emerald-800">🏺 A Pottery Village (17-18 & 24-25 Jan)</span>
                  <p className="text-slate-600 text-[11px]">Giới thiệu và hướng dẫn nặn gốm từ nghệ nhân làng gốm Bàu Trúc.</p>
                </div>
              </div>

              {/* Interactive Matching Table */}
              <div className="bg-white p-4 rounded-xl border border-emerald-200 space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-slate-800 text-xs">
                    🎯 Ghép nhân vật với sự kiện họ muốn tham dự (Bảng trang 71 SGK):
                  </h4>
                  <button
                    onClick={() => setShowReadingResults(!showReadingResults)}
                    className="text-xs text-emerald-700 font-bold hover:underline cursor-pointer"
                  >
                    {showReadingResults ? 'Ẩn đáp án' : 'Xem đáp án'}
                  </button>
                </div>

                <div className="space-y-2 text-xs">
                  {[
                    { id: 1, person: '1. Ann wants to take her children out to play folk games.', correct: 'Childhood Fun' },
                    { id: 2, person: '2. Tom wants to learn about making pottery.', correct: 'A Pottery Village' },
                    { id: 3, person: '3. Alice wants to see ethnic dance performances.', correct: 'Performances' },
                    { id: 4, person: '4. Mai wants to learn more about farm products.', correct: 'Ethnic Markets' },
                    { id: 5, person: '5. Mark wants to see a collection of ethnic people’s daily activities.', correct: 'Photo Exhibition' },
                  ].map((item) => {
                    const chosen = springFairAnswers[item.id];
                    return (
                      <div key={item.id} className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-2.5 bg-slate-50 rounded-lg">
                        <span className="font-medium text-slate-800">{item.person}</span>
                        <div className="flex items-center gap-2">
                          <select
                            value={chosen || ''}
                            onChange={(e) => {
                              setSpringFairAnswers({ ...springFairAnswers, [item.id]: e.target.value });
                              if (e.target.value === item.correct) triggerConfetti();
                            }}
                            className="bg-white border border-slate-300 rounded px-2 py-1 text-xs font-semibold cursor-pointer"
                          >
                            <option value="">-- Chọn sự kiện --</option>
                            <option value="Ethnic Markets">Ethnic Markets</option>
                            <option value="Photo Exhibition">Photo Exhibition</option>
                            <option value="Performances">Performances</option>
                            <option value="Childhood Fun">Childhood Fun</option>
                            <option value="A Pottery Village">A Pottery Village</option>
                          </select>
                          {(showReadingResults || (chosen && chosen === item.correct)) && (
                            <span className="font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded shrink-0">
                              ✅ {item.correct}
                            </span>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Speaking: Discussion on Spring Fair (Activity 2 Page 71) */}
            <div className="bg-amber-50/60 rounded-2xl p-5 border border-amber-200 space-y-4">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div className="flex items-center gap-2">
                  <MessageCircle className="w-5 h-5 text-amber-700" />
                  <h3 className="font-extrabold text-amber-950 text-base">
                    Speaking: Which Activity Do You Want to Join and Why? (Trang 71 SGK)
                  </h3>
                </div>
                <span className="text-xs text-amber-800 font-semibold">Chạm vào lời thoại để nghe phát âm</span>
              </div>

              {/* Sample Dialogues */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                <div className="p-3 bg-white rounded-xl border border-amber-200 space-y-2">
                  <span className="font-extrabold text-amber-900 block">Mẫu 1: Tham gia Childhood Fun</span>
                  <div className="space-y-1.5 text-slate-700">
                    <p><strong>A:</strong> Which activity in the Spring Fair do you want to join?</p>
                    <p><strong>B:</strong> I want to join <em>Childhood Fun</em> because I love playing traditional folk games with my friends.</p>
                  </div>
                  <button
                    onClick={() => speakText("Which activity in the Spring Fair do you want to join? I want to join Childhood Fun because I love playing traditional folk games with my friends.")}
                    className="mt-2 text-xs font-bold text-amber-700 hover:text-amber-900 flex items-center gap-1 cursor-pointer"
                  >
                    <Volume2 className="w-3.5 h-3.5" />
                    <span>Luyện nghe mẫu này</span>
                  </button>
                </div>

                <div className="p-3 bg-white rounded-xl border border-amber-200 space-y-2">
                  <span className="font-extrabold text-amber-900 block">Mẫu 2: Tham gia A Pottery Village</span>
                  <div className="space-y-1.5 text-slate-700">
                    <p><strong>A:</strong> What about you, Tom?</p>
                    <p><strong>B:</strong> I’d like to attend <em>A Pottery Village</em> because I want to make my own ceramic bowl with Bau Truc craftsmen.</p>
                  </div>
                  <button
                    onClick={() => speakText("What about you, Tom? I’d like to attend A Pottery Village because I want to make my own ceramic bowl with Bau Truc craftsmen.")}
                    className="mt-2 text-xs font-bold text-amber-700 hover:text-amber-900 flex items-center gap-1 cursor-pointer"
                  >
                    <Volume2 className="w-3.5 h-3.5" />
                    <span>Luyện nghe mẫu này</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Listening: Life in the Countryside (Activity 3 Page 71) */}
            <div className="bg-purple-50/50 rounded-2xl p-5 border border-purple-200 space-y-4">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div className="flex items-center gap-2">
                  <Headphones className="w-5 h-5 text-purple-700" />
                  <div>
                    <h3 className="font-extrabold text-purple-950 text-base">
                      Listening: Phong Talking About Life in the Countryside (Trang 71 SGK)
                    </h3>
                    <p className="text-xs text-purple-800">
                      Nghe đoạn hội thoại và điền MỘT từ vào mỗi chỗ trống.
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      if (activeSpeakingText) {
                        stopSpeaking();
                      } else {
                        speakText(
                          "Phong always spends his summer holiday with his grandparents in the village. He really likes the folk games the children play there. The villagers sell their home-grown vegetables and fruits at the local market. They also buy food and other necessary things. At the market, the villagers meet and talk happily with each other.",
                          speechRate
                        );
                      }
                    }}
                    className="px-3 py-1.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white text-xs font-bold transition flex items-center gap-1.5 cursor-pointer shadow-xs"
                  >
                    {activeSpeakingText ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                    <span>{activeSpeakingText ? 'Dừng đọc' : 'Phát Audio'}</span>
                  </button>
                  <button
                    onClick={() => setSpeechRate(speechRate === 0.9 ? 0.75 : 0.9)}
                    className="px-2.5 py-1.5 rounded-xl bg-white text-purple-900 border border-purple-300 text-xs font-bold cursor-pointer"
                  >
                    {speechRate === 0.9 ? '1.0x Chuẩn' : '0.8x Chậm'}
                  </button>
                  <button
                    onClick={() => setShowTranscript(!showTranscript)}
                    className="px-2.5 py-1.5 rounded-xl bg-purple-100 hover:bg-purple-200 text-purple-900 text-xs font-bold cursor-pointer"
                  >
                    {showTranscript ? 'Ẩn lời thoại' : 'Hiện lời thoại'}
                  </button>
                </div>
              </div>

              {/* Transcript Box */}
              {showTranscript && (
                <div className="p-4 bg-white rounded-xl border border-purple-200 text-xs space-y-2">
                  <span className="font-bold text-purple-900 block">📜 Lời thoại bài nghe (Audio Transcript):</span>
                  <p className="text-slate-700 leading-relaxed font-serif">
                    "Phong always spends his summer <strong>holiday</strong> with his grandparents in the village. He really likes the <strong>folk</strong> games the children play there. The villagers sell their home-grown <strong>vegetables</strong> and fruits at the local market. They also buy food and other <strong>necessary</strong> things. At the market, the villagers <strong>meet</strong> and talk happily with each other."
                  </p>
                  <p className="text-[11px] text-slate-500 italic border-t border-purple-100 pt-1">
                    Dịch: "Phong luôn dành kỳ nghỉ hè ở quê cùng ông bà. Bạn ấy rất thích các trò chơi dân gian mà trẻ con ở đó chơi. Dân làng bán rau củ quả tự trồng ở chợ địa phương. Họ cũng mua đồ ăn và các vật dụng cần thiết khác. Tại chợ, dân làng gặp gỡ và trò chuyện vui vẻ với nhau."
                  </p>
                </div>
              )}

              {/* Interactive Gap-fill Test */}
              <div className="space-y-2 text-xs">
                {[
                  { id: 1, text: '1. Phong always spends his summer ______ with his grandparents.', ans: 'holiday', clue: 'kỳ nghỉ hè' },
                  { id: 2, text: '2. He likes the ______ games the children play.', ans: 'folk', clue: 'dân gian' },
                  { id: 3, text: '3. The villagers sell their home-grown ______.', ans: 'vegetables', clue: 'rau củ quả' },
                  { id: 4, text: '4. They buy food and other ______ things.', ans: 'necessary', clue: 'cần thiết' },
                  { id: 5, text: '5. At the market, the villagers ______ and talk happily.', ans: 'meet', clue: 'gặp gỡ' },
                ].map((item) => {
                  const val = listenAnswers[item.id] || '';
                  const isCorrect = val.trim().toLowerCase() === item.ans.toLowerCase();
                  return (
                    <div key={item.id} className="p-3 bg-white rounded-xl border border-purple-100 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <span className="font-medium text-slate-800">{item.text}</span>
                      <div className="flex items-center gap-2">
                        <input
                          type="text"
                          value={val}
                          placeholder={`Điền từ (${item.clue})`}
                          onChange={(e) => setListenAnswers({ ...listenAnswers, [item.id]: e.target.value })}
                          className="px-2.5 py-1 text-xs font-bold border border-slate-300 rounded-lg focus:outline-indigo-500 w-36"
                        />
                        {listenChecked && (
                          <span className={`px-2 py-0.5 rounded text-[11px] font-bold ${isCorrect ? 'bg-emerald-100 text-emerald-800' : 'bg-red-100 text-red-800'}`}>
                            {isCorrect ? '✅ Đúng' : `Đáp án: ${item.ans}`}
                          </span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="flex items-center justify-between pt-2">
                <button
                  onClick={() => {
                    setListenChecked(true);
                    triggerConfetti();
                  }}
                  className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-xl text-xs font-bold cursor-pointer shadow-xs"
                >
                  Kiểm tra bài nghe
                </button>
                <button
                  onClick={() => {
                    setListenAnswers({ 1: '', 2: '', 3: '', 4: '', 5: '' });
                    setListenChecked(false);
                  }}
                  className="text-xs text-purple-700 hover:underline cursor-pointer"
                >
                  Làm lại
                </button>
              </div>
            </div>

            {/* Writing Workbench: Respect for the Elders (Activity 4 Page 71) */}
            <div className="bg-gradient-to-br from-rose-50/60 to-amber-50/60 rounded-2xl p-5 sm:p-6 border border-rose-200 space-y-4">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div>
                  <h3 className="font-extrabold text-rose-950 text-base flex items-center gap-2">
                    <PenTool className="w-5 h-5 text-rose-600" />
                    <span>Writing Workbench: Respect for the Elders (Kính Trọng Người Già - Trang 71 SGK)</span>
                  </h3>
                  <p className="text-xs text-slate-600 mt-1">
                    Viết các câu hoàn chỉnh từ từ gợi ý trong SGK để hoàn thành đoạn văn về đạo lý kính trên nhường dưới.
                  </p>
                </div>
                <button
                  onClick={() => speakText(
                    "Many Vietnamese families teach their children to respect the elders. There are many ways to show respect. You can give up your seat or offer to carry something heavy for the elders. You should listen and not talk back when the elders speak. At mealtimes, children should not start to eat before the elders do."
                  )}
                  className="px-3 py-1.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold transition flex items-center gap-1.5 cursor-pointer shadow-xs"
                >
                  <Volume2 className="w-3.5 h-3.5" />
                  <span>Nghe toàn đoạn văn</span>
                </button>
              </div>

              {/* 5 Sentences from Clues */}
              <div className="space-y-3 text-xs">
                {[
                  {
                    id: 1,
                    clue: '1. Many / Vietnamese families / teach / children / respect / elders.',
                    sentence: 'Many Vietnamese families teach their children to respect the elders.',
                    vi: 'Nhiều gia đình Việt Nam dạy con cái phải biết kính trọng người lớn tuổi.'
                  },
                  {
                    id: 2,
                    clue: '2. There / many ways / show / respect.',
                    sentence: 'There are many ways to show respect.',
                    vi: 'Có rất nhiều cách để bày tỏ sự tôn kính.'
                  },
                  {
                    id: 3,
                    clue: '3. You / give up / seat / or offer / carry / something heavy / elders.',
                    sentence: 'You can give up your seat or offer to carry something heavy for the elders.',
                    vi: 'Bạn có thể nhường ghế ngồi hoặc đề nghị mang vác vật nặng giúp người già.'
                  },
                  {
                    id: 4,
                    clue: '4. You / listen / not talk back / elders / speak.',
                    sentence: 'You should listen and not talk back when the elders speak.',
                    vi: 'Bạn nên lắng nghe và không cãi lại khi người lớn tuổi đang nói.'
                  },
                  {
                    id: 5,
                    clue: '5. At mealtimes / children should not / start / eat / before / elders do.',
                    sentence: 'At mealtimes, children should not start to eat before the elders do.',
                    vi: 'Trong bữa ăn, trẻ nhỏ không nên bắt đầu ăn trước khi người lớn bắt đầu.'
                  }
                ].map((item) => (
                  <div key={item.id} className="p-3.5 bg-white rounded-xl border border-rose-200 shadow-2xs space-y-2">
                    <p className="text-slate-500 font-mono text-[11px]">Gợi ý SGK: {item.clue}</p>
                    <div className="flex items-start justify-between gap-2">
                      <p className="font-bold text-rose-900 text-xs sm:text-sm">
                        👉 {item.sentence}
                      </p>
                      <button
                        onClick={() => speakText(item.sentence)}
                        className="p-1 rounded text-slate-400 hover:text-rose-600 transition shrink-0 cursor-pointer"
                        title="Nghe câu"
                      >
                        <Volume2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                    <p className="text-slate-500 text-[11px] italic pl-4 border-l-2 border-rose-200">
                      Dịch nghĩa: {item.vi}
                    </p>
                  </div>
                ))}
              </div>

              {/* Student Writing Sandbox */}
              <div className="mt-4 p-4 bg-white rounded-xl border border-rose-200 space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-slate-800 text-xs flex items-center gap-1.5">
                    <PenTool className="w-4 h-4 text-rose-600" />
                    <span>Góc Tự Luyện Viết Đoạn Văn (80 - 100 từ)</span>
                  </h4>
                  <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                    wordCount >= 80 && wordCount <= 100
                      ? 'bg-emerald-100 text-emerald-800'
                      : wordCount > 100
                      ? 'bg-amber-100 text-amber-800'
                      : 'bg-slate-100 text-slate-600'
                  }`}>
                    Số từ: {wordCount} / 80-100 từ
                  </span>
                </div>

                <textarea
                  value={userWritingDraft}
                  onChange={(e) => setUserWritingDraft(e.target.value)}
                  placeholder="Gõ bài viết của bạn tại đây hoặc dựa vào các câu gợi ý phía trên..."
                  rows={4}
                  className="w-full p-3 text-xs border border-slate-300 rounded-xl focus:outline-rose-500"
                />

                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span>Tiêu chí: Mở đoạn giới thiệu truyền thống • 2-3 hành động cụ thể • Lời khuyên kết luận.</span>
                  <button
                    onClick={() => {
                      setUserWritingDraft(
                        "Many Vietnamese families teach their children to respect the elders. There are many ways to show respect. You can give up your seat on the bus or offer to carry something heavy for the elders. In conversation, you should listen politely and not talk back when the elders speak. At mealtimes, children should invite the elders first and never start eating before they do. In conclusion, respecting elders is a beautiful moral tradition that keeps our family united."
                      );
                    }}
                    className="font-bold text-rose-700 hover:underline cursor-pointer"
                  >
                    Xem bài mẫu điểm 10
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
