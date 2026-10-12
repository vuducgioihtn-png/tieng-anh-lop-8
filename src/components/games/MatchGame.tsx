import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { RotateCcw, Trophy, ArrowLeft, Volume2, Sparkles, Timer } from 'lucide-react';
import { ALL_FLASHCARDS, UNITS_DATA } from '../../data/unitsData';
import { playSound, speakEnglish } from '../../utils/audio';
import { addXP } from '../../utils/spacedRepetition';

interface MatchCard {
  id: string;
  text: string;
  type: 'en' | 'vi';
  pairId: string;
  isMatched: boolean;
}

interface MatchGameProps {
  initialUnitId?: number;
  onBack: () => void;
}

export const MatchGame: React.FC<MatchGameProps> = ({ initialUnitId, onBack }) => {
  const [selectedUnit, setSelectedUnit] = useState<number | 'all'>(initialUnitId || 1);
  const [cards, setCards] = useState<MatchCard[]>([]);
  const [selectedCards, setSelectedCards] = useState<MatchCard[]>([]);
  const [matchedPairsCount, setMatchedPairsCount] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [combo, setCombo] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);
  const [isGameOver, setIsGameOver] = useState<boolean>(false);

  // Setup game board with 6 pairs (12 cards)
  const initGame = (unitId = selectedUnit) => {
    let pool = ALL_FLASHCARDS;
    if (unitId !== 'all') {
      pool = pool.filter(c => c.unitId === unitId);
    }
    // Random 6 cards
    const chosen = [...pool].sort(() => 0.5 - Math.random()).slice(0, 6);

    const cardList: MatchCard[] = [];
    chosen.forEach(item => {
      cardList.push({
        id: `en-${item.id}`,
        text: item.word,
        type: 'en',
        pairId: item.id,
        isMatched: false
      });
      cardList.push({
        id: `vi-${item.id}`,
        text: item.meaningVi,
        type: 'vi',
        pairId: item.id,
        isMatched: false
      });
    });

    setCards([...cardList].sort(() => 0.5 - Math.random()));
    setSelectedCards([]);
    setMatchedPairsCount(0);
    setScore(0);
    setCombo(0);
    setSeconds(0);
    setIsGameOver(false);
    playSound('pop');
  };

  useEffect(() => {
    initGame(selectedUnit);
  }, [selectedUnit]);

  // Timer
  useEffect(() => {
    if (isGameOver) return;
    const interval = setInterval(() => {
      setSeconds(s => s + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [isGameOver]);

  const handleCardClick = (card: MatchCard) => {
    if (card.isMatched || selectedCards.some(c => c.id === card.id) || selectedCards.length >= 2) {
      return;
    }

    playSound('click');
    if (card.type === 'en') {
      speakEnglish(card.text);
    }

    const newSelected = [...selectedCards, card];
    setSelectedCards(newSelected);

    if (newSelected.length === 2) {
      const [first, second] = newSelected;
      if (first.pairId === second.pairId && first.type !== second.type) {
        // MATCH!
        playSound('correct');
        const nextCombo = combo + 1;
        setCombo(nextCombo);
        setScore(s => s + 100 * nextCombo);

        setTimeout(() => {
          setCards(prev =>
            prev.map(c =>
              c.pairId === first.pairId ? { ...c, isMatched: true } : c
            )
          );
          setSelectedCards([]);
          const nextCount = matchedPairsCount + 1;
          setMatchedPairsCount(nextCount);

          if (nextCount === 6) {
            // WIN GAME!
            setIsGameOver(true);
            playSound('win');
            addXP(150);
            confetti({
              particleCount: 100,
              spread: 70,
              origin: { y: 0.6 }
            });
          }
        }, 300);
      } else {
        // MISMATCH
        playSound('wrong');
        setCombo(0);
        setTimeout(() => {
          setSelectedCards([]);
        }, 800);
      }
    }
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6 pb-12">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 hover:text-indigo-600 transition-colors self-start sm:self-center"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Quay lại kho game</span>
        </button>

        <div className="flex items-center gap-3">
          <select
            value={selectedUnit}
            onChange={(e) => setSelectedUnit(e.target.value === 'all' ? 'all' : Number(e.target.value))}
            className="px-3 py-1.5 rounded-xl border border-slate-200 bg-white text-xs font-semibold text-slate-700 shadow-2xs"
          >
            <option value="all">Tất cả các Unit</option>
            {UNITS_DATA.map(u => (
              <option key={u.id} value={u.id}>Unit {u.id}: {u.englishTitle}</option>
            ))}
          </select>

          <button
            onClick={() => initGame(selectedUnit)}
            className="p-1.5 rounded-xl border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 shadow-2xs"
            title="Chơi lại ván mới"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Game Stats bar */}
      <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs flex items-center justify-between text-xs font-bold">
        <div className="flex items-center gap-2 text-slate-600">
          <Timer className="w-4 h-4 text-indigo-500" />
          <span>Thời gian: {seconds}s</span>
        </div>

        <div className="flex items-center gap-1 text-amber-600 font-extrabold">
          <Sparkles className="w-4 h-4" />
          <span>Combo x{combo}</span>
        </div>

        <div className="text-indigo-700 font-black text-sm">
          Điểm: {score}
        </div>
      </div>

      {/* Grid of 12 Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
        {cards.map(card => {
          const isSelected = selectedCards.some(c => c.id === card.id);
          const isMatched = card.isMatched;

          let cardStyle = 'bg-white border-slate-200 hover:border-indigo-400 text-slate-800 shadow-2xs';

          if (isMatched) {
            cardStyle = 'bg-emerald-50 border-emerald-300 text-emerald-800 opacity-40 scale-95 pointer-events-none';
          } else if (isSelected) {
            cardStyle = 'bg-indigo-600 border-indigo-700 text-white shadow-md scale-102';
          }

          return (
            <button
              key={card.id}
              disabled={isMatched}
              onClick={() => handleCardClick(card)}
              className={`p-4 min-h-[96px] rounded-2xl border font-bold text-xs sm:text-sm flex flex-col items-center justify-center text-center transition-all active:scale-95 select-none ${cardStyle}`}
            >
              <span>{card.text}</span>
              {card.type === 'en' && !isMatched && (
                <span className="text-[10px] opacity-60 mt-1 uppercase tracking-wider">
                  Tiếng Anh
                </span>
              )}
              {card.type === 'vi' && !isMatched && (
                <span className="text-[10px] opacity-60 mt-1 uppercase tracking-wider">
                  Tiếng Việt
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Game Over Popup */}
      {isGameOver && (
        <div className="bg-gradient-to-br from-indigo-900 to-indigo-950 p-6 rounded-3xl text-white text-center space-y-4 shadow-xl">
          <Trophy className="w-12 h-12 text-amber-400 mx-auto animate-bounce" />
          <h3 className="text-xl font-black">Chúc mừng bạn đã hoàn thành!</h3>
          <p className="text-xs text-indigo-200">
            Thời gian hoàn thành: <strong>{seconds} giây</strong> • Tổng điểm: <strong>{score} điểm</strong> (+150 XP)
          </p>
          <div className="flex justify-center gap-3 pt-2">
            <button
              onClick={() => initGame(selectedUnit)}
              className="px-5 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-900 font-bold text-xs shadow-md transition-all"
            >
              Chơi ván tiếp theo
            </button>
            <button
              onClick={onBack}
              className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs transition-all"
            >
              Về kho trò chơi
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
