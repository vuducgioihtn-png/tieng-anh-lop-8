/**
 * Audio helper using Web Speech API for Text-to-Speech
 * and Web Audio API for interactive game sound effects.
 */

// Danh sách từ khóa giọng nam cần LOẠI BỎ HOÀN TOÀN
const MALE_VOICE_KEYWORDS = [
  'male', 'david', 'mark', 'george', 'guy', 'brian', 'daniel', 'alex', 'fred',
  'ryan', 'richard', 'john', 'paul', 'mike', 'steve', 'tom', 'peter', 'james',
  'william', 'oliver', 'lucas', 'henry', 'benjamin', 'jack', 'arthur', 'edward',
  'charles', 'thomas', 'google uk english male'
];

// Thứ tự ưu tiên các giọng NỮ tiếng Anh vang sáng, ngân hay, chuẩn bản xứ
const PREFERRED_FEMALE_KEYWORDS = [
  // 1. Microsoft Natural Female (Edge/Windows: cực kỳ vang, tự nhiên, ngân ấm & sáng)
  'jenny', 'aria', 'sonia', 'ana', 'natasha', 'libby', 'maisie', 'clara',
  // 2. Google High-Quality Female (Chrome/Android: rõ nét, vang sáng và ngắt câu chuẩn)
  'google uk english female', 'google us english',
  // 3. Apple iOS / macOS Female (Safari: trong trẻo, ngân nga, thanh thoát)
  'samantha', 'ava', 'victoria', 'karen', 'serena', 'allison', 'susan', 'moira', 'fiona', 'tessa',
  // 4. Các giọng nữ tiếng Anh phổ biến khác
  'joanna', 'kendra', 'kimberly', 'salli', 'ivy', 'emma', 'amy', 'olivia',
  // 5. Từ khóa nữ chung
  'zira', 'female'
];

let cachedFemaleVoice: SpeechSynthesisVoice | null = null;

/**
 * Tìm kiếm giọng NỮ tiếng Anh vang sáng, hay nhất trên trình duyệt của người dùng.
 * Loại bỏ tuyệt đối tất cả các giọng nam và giọng không phù hợp.
 */
export const getBestFemaleEnglishVoice = (): SpeechSynthesisVoice | null => {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) return null;

  const voices = window.speechSynthesis.getVoices();
  if (!voices || voices.length === 0) return null;

  // 1. Chỉ lọc các giọng Tiếng Anh (en-US, en-GB, en-AU, en-CA,...)
  const englishVoices = voices.filter(
    (v) => v.lang && v.lang.toLowerCase().startsWith('en')
  );
  if (englishVoices.length === 0) return null;

  // 2. LOẠI BỎ HẾT tất cả các giọng nam
  const femaleCandidateVoices = englishVoices.filter((v) => {
    const nameLower = v.name.toLowerCase();
    return !MALE_VOICE_KEYWORDS.some((kw) => nameLower.includes(kw));
  });

  const voicePool = femaleCandidateVoices.length > 0 ? femaleCandidateVoices : englishVoices;

  // 3. Khớp theo danh sách giọng nữ vang sáng ưu tiên hàng đầu
  for (const keyword of PREFERRED_FEMALE_KEYWORDS) {
    const matched = voicePool.find((v) => v.name.toLowerCase().includes(keyword));
    if (matched) {
      cachedFemaleVoice = matched;
      return matched;
    }
  }

  // 4. Ưu tiên giọng nữ có mã vùng chuẩn Mỹ (en-US) hoặc Anh (en-GB)
  if (femaleCandidateVoices.length > 0) {
    const enUsOrGb = femaleCandidateVoices.find(
      (v) => v.lang.toLowerCase().includes('us') || v.lang.toLowerCase().includes('gb')
    );
    const chosen = enUsOrGb || femaleCandidateVoices[0];
    cachedFemaleVoice = chosen;
    return chosen;
  }

  return voicePool[0] || null;
};

// Đăng ký lắng nghe sự kiện khi trình duyệt tải xong danh sách giọng nói
if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
  window.speechSynthesis.onvoiceschanged = () => {
    cachedFemaleVoice = getBestFemaleEnglishVoice();
  };
}

export interface SpeakOptions {
  rate?: number;
  pitch?: number;
  onStart?: () => void;
  onEnd?: () => void;
  onError?: () => void;
}

/**
 * Phát âm Tiếng Anh với giọng NỮ vang sáng, ngân nga, truyền cảm.
 * - Pitch = 1.06: Nâng nhẹ cao độ để giọng nữ thanh thoát, vang sáng, có độ ngân.
 * - Rate = 0.90: Tốc độ chuẩn mực, phát âm rõ từng phụ âm/nguyên âm cho học sinh.
 */
export const speakEnglish = (text: string, optionsOrRate?: number | SpeakOptions) => {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
    return;
  }

  const options: SpeakOptions = typeof optionsOrRate === 'number'
    ? { rate: optionsOrRate }
    : (optionsOrRate || {});

  try {
    window.speechSynthesis.cancel(); // Ngắt âm trước đó nếu đang phát

    const utterance = new SpeechSynthesisUtterance(text);
    
    // Tinh chỉnh âm vực: Vang sáng, ngân nga (Pitch 1.06) và tốc độ rõ ràng (Rate 0.90)
    utterance.rate = options.rate ?? 0.90;
    utterance.pitch = options.pitch ?? 1.06;

    // Chọn duy nhất giọng NỮ tốt nhất
    const femaleVoice = cachedFemaleVoice || getBestFemaleEnglishVoice();
    if (femaleVoice) {
      utterance.voice = femaleVoice;
      utterance.lang = femaleVoice.lang;
    } else {
      utterance.lang = 'en-US';
    }

    if (options.onStart) utterance.onstart = options.onStart;
    if (options.onEnd) utterance.onend = options.onEnd;
    if (options.onError) utterance.onerror = options.onError;

    window.speechSynthesis.speak(utterance);
  } catch (err) {
    console.warn('Speech synthesis error:', err);
    if (options.onError) options.onError();
  }
};

// Web Audio API Sound Synthesizer
let audioCtx: AudioContext | null = null;

const getAudioContext = (): AudioContext | null => {
  if (typeof window === 'undefined') return null;
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
};

export const playSound = (type: 'correct' | 'wrong' | 'flip' | 'click' | 'win' | 'streak' | 'pop') => {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    const now = ctx.currentTime;

    if (type === 'correct') {
      // Pleasant bright two-tone major chime
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(587.33, now); // D5
      osc.frequency.setValueAtTime(880, now + 0.1); // A5
      gain.gain.setValueAtTime(0.2, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.45);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.45);
    } else if (type === 'wrong') {
      // Gentle soft low buzz
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(180, now);
      osc.frequency.linearRampToValueAtTime(120, now + 0.25);
      gain.gain.setValueAtTime(0.15, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.3);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.3);
    } else if (type === 'flip') {
      // Card flip whoosh
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(300, now);
      osc.frequency.exponentialRampToValueAtTime(600, now + 0.08);
      gain.gain.setValueAtTime(0.08, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.12);
    } else if (type === 'click' || type === 'pop') {
      // Subtle crisp tap
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(700, now);
      gain.gain.setValueAtTime(0.1, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.06);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.06);
    } else if (type === 'streak' || type === 'win') {
      // Triad victory flourish
      const freqs = [523.25, 659.25, 783.99, 1046.5]; // C5, E5, G5, C6
      freqs.forEach((f, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        const noteStart = now + idx * 0.08;
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(f, noteStart);
        gain.gain.setValueAtTime(0.15, noteStart);
        gain.gain.exponentialRampToValueAtTime(0.001, noteStart + 0.35);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(noteStart);
        osc.stop(noteStart + 0.35);
      });
    }
  } catch (err) {
    // Non-blocking sound error
  }
};
