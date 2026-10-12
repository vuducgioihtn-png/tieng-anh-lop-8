import React from 'react';
import { BookOpen, Sparkles, Brain, Award, Gamepad2, Layers, Flame, Zap } from 'lucide-react';
import { UserStats } from '../types';

export type TabType = 'dashboard' | 'unit1_master' | 'unit2_master' | 'unit3_master' | 'unit4_master' | 'unit5_master' | 'unit6_master' | 'review1_master' | 'review2_master' | 'flashcards' | 'quiz' | 'games' | 'handbook' | 'glossary';

interface NavbarProps {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
  userStats: UserStats;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab, userStats }) => {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo & Title */}
          <div 
            onClick={() => setActiveTab('dashboard')}
            className="flex items-center gap-3 cursor-pointer group select-none"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-sky-500 flex items-center justify-center text-white shadow-md shadow-indigo-200 group-hover:scale-105 transition-transform">
              <BookOpen className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-lg tracking-tight bg-gradient-to-r from-indigo-700 via-sky-600 to-teal-600 bg-clip-text text-transparent">
                  Tiếng Anh 8
                </span>
                <span className="text-[11px] font-bold px-1.5 py-0.5 rounded-full bg-indigo-100 text-indigo-700 uppercase tracking-wider">
                  Global Success
                </span>
              </div>
              <p className="text-xs text-slate-500 font-medium hidden sm:block">
                Lặp lại ngắt quãng & Ôn tập thông minh
              </p>
            </div>
          </div>

          {/* Navigation Items */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-100/80 p-1 rounded-xl border border-slate-200/60">
            <button
              onClick={() => setActiveTab('dashboard')}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-semibold transition-all ${
                activeTab === 'dashboard'
                  ? 'bg-white text-indigo-700 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
              }`}
            >
              <Brain className="w-4 h-4 text-indigo-600" />
              <span>Lộ trình trí nhớ</span>
            </button>

            {/* Featured Visual Unit 1 Button */}
            <button
              onClick={() => setActiveTab('unit1_master')}
              className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-sm font-bold transition-all ${
                activeTab === 'unit1_master'
                  ? 'bg-gradient-to-r from-rose-500 to-pink-500 text-white shadow-xs'
                  : 'text-rose-700 hover:bg-rose-50 bg-rose-50/60'
              }`}
            >
              <Sparkles className="w-4 h-4" />
              <span>Unit 1</span>
            </button>

            {/* Featured Visual Unit 2 Button */}
            <button
              onClick={() => setActiveTab('unit2_master')}
              className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-sm font-bold transition-all ${
                activeTab === 'unit2_master'
                  ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-xs'
                  : 'text-emerald-700 hover:bg-emerald-50 bg-emerald-50/60'
              }`}
            >
              <Sparkles className="w-4 h-4" />
              <span>Unit 2</span>
            </button>

            {/* Featured Visual Unit 3 Button */}
            <button
              onClick={() => setActiveTab('unit3_master')}
              className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-sm font-bold transition-all ${
                activeTab === 'unit3_master'
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-xs'
                  : 'text-blue-700 hover:bg-blue-50 bg-blue-50/60'
              }`}
            >
              <Sparkles className="w-4 h-4" />
              <span>Unit 3</span>
            </button>

            {/* Featured Visual Unit 4 Button */}
            <button
              onClick={() => setActiveTab('unit4_master')}
              className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-sm font-bold transition-all ${
                activeTab === 'unit4_master'
                  ? 'bg-gradient-to-r from-teal-600 to-emerald-600 text-white shadow-xs'
                  : 'text-teal-700 hover:bg-teal-50 bg-teal-50/60'
              }`}
            >
              <Sparkles className="w-4 h-4" />
              <span>Unit 4</span>
            </button>

            {/* Featured Visual Unit 5 Button */}
            <button
              onClick={() => setActiveTab('unit5_master')}
              className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-sm font-bold transition-all ${
                activeTab === 'unit5_master'
                  ? 'bg-gradient-to-r from-amber-600 to-rose-600 text-white shadow-xs'
                  : 'text-rose-700 hover:bg-rose-50 bg-rose-50/60'
              }`}
            >
              <Sparkles className="w-4 h-4" />
              <span>Unit 5</span>
            </button>

            {/* Featured Visual Unit 6 Button */}
            <button
              onClick={() => setActiveTab('unit6_master')}
              className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-sm font-bold transition-all ${
                activeTab === 'unit6_master'
                  ? 'bg-gradient-to-r from-sky-600 to-indigo-600 text-white shadow-xs'
                  : 'text-indigo-700 hover:bg-indigo-50 bg-indigo-50/60'
              }`}
            >
              <Sparkles className="w-4 h-4" />
              <span>Unit 6</span>
            </button>

            {/* Featured Visual Review 1 Button */}
            <button
              onClick={() => setActiveTab('review1_master')}
              className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-sm font-bold transition-all ${
                activeTab === 'review1_master'
                  ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-xs'
                  : 'text-amber-800 hover:bg-amber-50 bg-amber-50/70'
              }`}
            >
              <Award className="w-4 h-4 text-amber-600" />
              <span>Review 1</span>
            </button>

            {/* Featured Visual Review 2 Button */}
            <button
              onClick={() => setActiveTab('review2_master')}
              className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-sm font-bold transition-all ${
                activeTab === 'review2_master'
                  ? 'bg-gradient-to-r from-rose-500 to-amber-500 text-white shadow-xs'
                  : 'text-rose-800 hover:bg-rose-50 bg-rose-50/70'
              }`}
            >
              <Award className="w-4 h-4 text-rose-600" />
              <span>Review 2</span>
            </button>

            <button
              onClick={() => setActiveTab('flashcards')}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-semibold transition-all ${
                activeTab === 'flashcards'
                  ? 'bg-white text-sky-700 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
              }`}
            >
              <Layers className="w-4 h-4 text-sky-600" />
              <span>Flashcard</span>
            </button>

            <button
              onClick={() => setActiveTab('quiz')}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-semibold transition-all ${
                activeTab === 'quiz'
                  ? 'bg-white text-emerald-700 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
              }`}
            >
              <Sparkles className="w-4 h-4 text-emerald-600" />
              <span>Trắc nghiệm</span>
            </button>

            <button
              onClick={() => setActiveTab('games')}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-semibold transition-all ${
                activeTab === 'games'
                  ? 'bg-white text-amber-700 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
              }`}
            >
              <Gamepad2 className="w-4 h-4 text-amber-600" />
              <span>Trò chơi</span>
            </button>

            <button
              onClick={() => setActiveTab('handbook')}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-semibold transition-all ${
                activeTab === 'handbook' || activeTab === 'glossary'
                  ? 'bg-white text-purple-700 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
              }`}
            >
              <BookOpen className="w-4 h-4 text-purple-600" />
              <span>Sổ tay</span>
            </button>
          </nav>

          {/* User Streak & XP Stats */}
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs sm:text-sm font-bold shadow-xs">
              <Flame className="w-4 h-4 text-amber-500 fill-amber-500 animate-pulse" />
              <span>{userStats.streakDays}</span>
              <span className="text-amber-600 font-medium text-[11px] hidden sm:inline">ngày</span>
            </div>

            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-800 text-xs sm:text-sm font-bold shadow-xs">
              <Zap className="w-4 h-4 text-indigo-500 fill-indigo-500" />
              <span>{userStats.xp}</span>
              <span className="text-indigo-600 font-medium text-[11px] hidden sm:inline">XP</span>
            </div>
          </div>
        </div>

        {/* Mobile Navigation bar */}
        <div className="md:hidden flex items-center justify-around py-2 border-t border-slate-100 text-xs font-semibold overflow-x-auto gap-1">
          <button
            onClick={() => setActiveTab('dashboard')}
            className={`flex flex-col items-center py-1 px-2 rounded-lg ${
              activeTab === 'dashboard' ? 'text-indigo-600 font-bold' : 'text-slate-500'
            }`}
          >
            <Brain className="w-4 h-4" />
            <span>Lộ trình</span>
          </button>
          <button
            onClick={() => setActiveTab('unit1_master')}
            className={`flex flex-col items-center py-1 px-2 rounded-lg ${
              activeTab === 'unit1_master' ? 'text-rose-600 font-bold' : 'text-rose-500'
            }`}
          >
            <Sparkles className="w-4 h-4" />
            <span>Unit 1</span>
          </button>
          <button
            onClick={() => setActiveTab('unit2_master')}
            className={`flex flex-col items-center py-1 px-2 rounded-lg ${
              activeTab === 'unit2_master' ? 'text-emerald-700 font-bold' : 'text-emerald-600'
            }`}
          >
            <Sparkles className="w-4 h-4" />
            <span>Unit 2</span>
          </button>
          <button
            onClick={() => setActiveTab('unit3_master')}
            className={`flex flex-col items-center py-1 px-2 rounded-lg ${
              activeTab === 'unit3_master' ? 'text-blue-700 font-bold' : 'text-blue-600'
            }`}
          >
            <Sparkles className="w-4 h-4" />
            <span>Unit 3</span>
          </button>
          <button
            onClick={() => setActiveTab('unit4_master')}
            className={`flex flex-col items-center py-1 px-2 rounded-lg ${
              activeTab === 'unit4_master' ? 'text-teal-700 font-bold' : 'text-teal-600'
            }`}
          >
            <Sparkles className="w-4 h-4" />
            <span>Unit 4</span>
          </button>
          <button
            onClick={() => setActiveTab('unit5_master')}
            className={`flex flex-col items-center py-1 px-2 rounded-lg ${
              activeTab === 'unit5_master' ? 'text-rose-700 font-bold' : 'text-rose-600'
            }`}
          >
            <Sparkles className="w-4 h-4" />
            <span>Unit 5</span>
          </button>
          <button
            onClick={() => setActiveTab('unit6_master')}
            className={`flex flex-col items-center py-1 px-2 rounded-lg ${
              activeTab === 'unit6_master' ? 'text-indigo-700 font-bold' : 'text-indigo-600'
            }`}
          >
            <Sparkles className="w-4 h-4" />
            <span>Unit 6</span>
          </button>
          <button
            onClick={() => setActiveTab('review1_master')}
            className={`flex flex-col items-center py-1 px-2 rounded-lg ${
              activeTab === 'review1_master' ? 'text-amber-700 font-bold' : 'text-amber-600'
            }`}
          >
            <Award className="w-4 h-4" />
            <span>Rev 1</span>
          </button>
          <button
            onClick={() => setActiveTab('review2_master')}
            className={`flex flex-col items-center py-1 px-2 rounded-lg ${
              activeTab === 'review2_master' ? 'text-rose-700 font-bold' : 'text-rose-600'
            }`}
          >
            <Award className="w-4 h-4" />
            <span>Rev 2</span>
          </button>
          <button
            onClick={() => setActiveTab('flashcards')}
            className={`flex flex-col items-center py-1 px-2 rounded-lg ${
              activeTab === 'flashcards' ? 'text-sky-600 font-bold' : 'text-slate-500'
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>Flashcard</span>
          </button>
          <button
            onClick={() => setActiveTab('quiz')}
            className={`flex flex-col items-center py-1 px-2 rounded-lg ${
              activeTab === 'quiz' ? 'text-emerald-600 font-bold' : 'text-slate-500'
            }`}
          >
            <Sparkles className="w-4 h-4" />
            <span>Trắc nghiệm</span>
          </button>
          <button
            onClick={() => setActiveTab('games')}
            className={`flex flex-col items-center py-1 px-2 rounded-lg ${
              activeTab === 'games' ? 'text-amber-600 font-bold' : 'text-slate-500'
            }`}
          >
            <Gamepad2 className="w-4 h-4" />
            <span>Trò chơi</span>
          </button>
          <button
            onClick={() => setActiveTab('handbook')}
            className={`flex flex-col items-center py-1 px-2 rounded-lg ${
              activeTab === 'handbook' || activeTab === 'glossary' ? 'text-purple-600 font-bold' : 'text-slate-500'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>Sổ tay</span>
          </button>
        </div>
      </div>
    </header>
  );
};
