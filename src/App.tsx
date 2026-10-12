/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar, TabType } from './components/Navbar';
import { StudyDashboard } from './components/dashboard/StudyDashboard';
import { Unit1VisualMaster } from './components/unit1/Unit1VisualMaster';
import { Unit2VisualMaster } from './components/unit2/Unit2VisualMaster';
import { Unit3VisualMaster } from './components/unit3/Unit3VisualMaster';
import { Unit4VisualMaster } from './components/unit4/Unit4VisualMaster';
import { Unit5VisualMaster } from './components/unit5/Unit5VisualMaster';
import { Unit6VisualMaster } from './components/unit6/Unit6VisualMaster';
import { Review1VisualMaster } from './components/review1/Review1VisualMaster';
import { Review2VisualMaster } from './components/review2/Review2VisualMaster';
import { FlashcardDeck } from './components/flashcards/FlashcardDeck';
import { QuizPlayer } from './components/quiz/QuizPlayer';
import { GamesHub } from './components/games/GamesHub';
import { UnitHandbook } from './components/notebook/UnitHandbook';
import { GlossaryView } from './components/notebook/GlossaryView';
import { getUserStats, getStoredCardStates } from './utils/spacedRepetition';
import { FlashcardItem, UserStats, SpacedItemState } from './types';
import { BookOpen, Heart, Sparkles } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>('dashboard');
  const [userStats, setUserStats] = useState<UserStats>(getUserStats());
  const [cardStates, setCardStates] = useState<Record<string, SpacedItemState>>(getStoredCardStates());

  // Deep link params for sub-flows
  const [flashcardUnit, setFlashcardUnit] = useState<number | undefined>(undefined);
  const [flashcardDueOnly, setFlashcardDueOnly] = useState<boolean>(false);
  const [quizUnit, setQuizUnit] = useState<number | undefined>(undefined);
  const [quizReviewId, setQuizReviewId] = useState<string | undefined>(undefined);
  const [gameUnit, setGameUnit] = useState<number | undefined>(undefined);
  const [handbookUnit, setHandbookUnit] = useState<number | undefined>(undefined);

  // Sync state helpers
  const refreshStatsAndCards = () => {
    setUserStats(getUserStats());
    setCardStates(getStoredCardStates());
  };

  useEffect(() => {
    refreshStatsAndCards();
  }, []);

  const handleStartSpacedReview = () => {
    setFlashcardUnit(undefined);
    setFlashcardDueOnly(true);
    setActiveTab('flashcards');
  };

  const handleSelectUnitFromDashboard = (unitId: number, mode: 'flashcard' | 'quiz' | 'game' | 'handbook') => {
    if (unitId === 1 && mode === 'handbook') {
      setActiveTab('unit1_master');
      return;
    }
    if (unitId === 2 && mode === 'handbook') {
      setActiveTab('unit2_master');
      return;
    }
    if (unitId === 3 && mode === 'handbook') {
      setActiveTab('unit3_master');
      return;
    }
    if (unitId === 4 && mode === 'handbook') {
      setActiveTab('unit4_master');
      return;
    }
    if (unitId === 5 && mode === 'handbook') {
      setActiveTab('unit5_master');
      return;
    }
    if (unitId === 6 && mode === 'handbook') {
      setActiveTab('unit6_master');
      return;
    }

    if (mode === 'flashcard') {
      setFlashcardUnit(unitId);
      setFlashcardDueOnly(false);
      setActiveTab('flashcards');
    } else if (mode === 'quiz') {
      setQuizUnit(unitId);
      setQuizReviewId(undefined);
      setActiveTab('quiz');
    } else if (mode === 'game') {
      setGameUnit(unitId);
      setActiveTab('games');
    } else if (mode === 'handbook') {
      setHandbookUnit(unitId);
      setActiveTab('handbook');
    }
  };

  const handleSelectReviewExam = (reviewId: string) => {
    setQuizReviewId(reviewId);
    setQuizUnit(undefined);
    setActiveTab('quiz');
  };

  const handleStudyCardFromGlossary = (card: FlashcardItem) => {
    setFlashcardUnit(card.unitId);
    setFlashcardDueOnly(false);
    setActiveTab('flashcards');
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      {/* Top sticky navbar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={(tab) => {
          setActiveTab(tab);
          // reset filters when directly clicking top tabs
          if (tab === 'flashcards') {
            setFlashcardDueOnly(false);
            setFlashcardUnit(undefined);
          }
        }}
        userStats={userStats}
      />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        {activeTab === 'dashboard' && (
          <StudyDashboard
            userStats={userStats}
            cardStates={cardStates}
            onStartSpacedReview={handleStartSpacedReview}
            onSelectUnit={handleSelectUnitFromDashboard}
            onSelectReviewExam={handleSelectReviewExam}
            onOpenUnit1Master={() => setActiveTab('unit1_master')}
            onOpenUnit2Master={() => setActiveTab('unit2_master')}
            onOpenUnit3Master={() => setActiveTab('unit3_master')}
            onOpenUnit4Master={() => setActiveTab('unit4_master')}
            onOpenUnit5Master={() => setActiveTab('unit5_master')}
            onOpenUnit6Master={() => setActiveTab('unit6_master')}
            onOpenReview1Master={() => setActiveTab('review1_master')}
            onOpenReview2Master={() => setActiveTab('review2_master')}
          />
        )}

        {activeTab === 'unit1_master' && (
          <Unit1VisualMaster
            onBack={() => setActiveTab('dashboard')}
            onGoToFlashcards={() => {
              setFlashcardUnit(1);
              setFlashcardDueOnly(false);
              setActiveTab('flashcards');
            }}
            onGoToQuiz={() => {
              setQuizUnit(1);
              setQuizReviewId(undefined);
              setActiveTab('quiz');
            }}
          />
        )}

        {activeTab === 'unit2_master' && (
          <Unit2VisualMaster
            onBack={() => setActiveTab('dashboard')}
            onGoToFlashcards={() => {
              setFlashcardUnit(2);
              setFlashcardDueOnly(false);
              setActiveTab('flashcards');
            }}
            onGoToQuiz={() => {
              setQuizUnit(2);
              setQuizReviewId(undefined);
              setActiveTab('quiz');
            }}
          />
        )}

        {activeTab === 'unit3_master' && (
          <Unit3VisualMaster
            onBack={() => setActiveTab('dashboard')}
            onGoToFlashcards={() => {
              setFlashcardUnit(3);
              setFlashcardDueOnly(false);
              setActiveTab('flashcards');
            }}
            onGoToQuiz={() => {
              setQuizUnit(3);
              setQuizReviewId(undefined);
              setActiveTab('quiz');
            }}
          />
        )}

        {activeTab === 'unit4_master' && (
          <Unit4VisualMaster
            onBack={() => setActiveTab('dashboard')}
            onGoToFlashcards={() => {
              setFlashcardUnit(4);
              setFlashcardDueOnly(false);
              setActiveTab('flashcards');
            }}
            onGoToQuiz={() => {
              setQuizUnit(4);
              setQuizReviewId(undefined);
              setActiveTab('quiz');
            }}
          />
        )}

        {activeTab === 'unit5_master' && (
          <Unit5VisualMaster
            onBack={() => setActiveTab('dashboard')}
            onGoToFlashcards={() => {
              setFlashcardUnit(5);
              setFlashcardDueOnly(false);
              setActiveTab('flashcards');
            }}
            onGoToQuiz={() => {
              setQuizUnit(5);
              setQuizReviewId(undefined);
              setActiveTab('quiz');
            }}
          />
        )}

        {activeTab === 'unit6_master' && (
          <Unit6VisualMaster
            onBack={() => setActiveTab('dashboard')}
            onGoToFlashcards={() => {
              setFlashcardUnit(6);
              setFlashcardDueOnly(false);
              setActiveTab('flashcards');
            }}
            onGoToQuiz={() => {
              setQuizUnit(6);
              setQuizReviewId(undefined);
              setActiveTab('quiz');
            }}
          />
        )}

        {activeTab === 'review1_master' && (
          <Review1VisualMaster
            onBack={() => setActiveTab('dashboard')}
            onGoToQuiz={() => {
              setQuizReviewId('rev-1');
              setQuizUnit(undefined);
              setActiveTab('quiz');
            }}
          />
        )}

        {activeTab === 'review2_master' && (
          <Review2VisualMaster
            onBack={() => setActiveTab('dashboard')}
            onGoToQuiz={() => {
              setQuizReviewId('rev-2');
              setQuizUnit(undefined);
              setActiveTab('quiz');
            }}
          />
        )}

        {activeTab === 'flashcards' && (
          <FlashcardDeck
            initialUnitId={flashcardUnit}
            dueOnlyDefault={flashcardDueOnly}
            cardStates={cardStates}
            onReviewRecorded={refreshStatsAndCards}
            onBackToDashboard={() => setActiveTab('dashboard')}
          />
        )}

        {activeTab === 'quiz' && (
          <QuizPlayer
            initialUnitId={quizUnit}
            initialReviewId={quizReviewId}
            onBackToDashboard={() => setActiveTab('dashboard')}
            onStatsUpdated={refreshStatsAndCards}
          />
        )}

        {activeTab === 'games' && (
          <GamesHub
            initialUnitId={gameUnit}
            onBackToDashboard={() => setActiveTab('dashboard')}
          />
        )}

        {activeTab === 'handbook' && (
          <UnitHandbook
            initialUnitId={handbookUnit}
            onOpenGlossary={() => setActiveTab('glossary')}
            onOpenUnitMaster={(unitId) => {
              if (unitId === 1) setActiveTab('unit1_master');
              else if (unitId === 2) setActiveTab('unit2_master');
              else if (unitId === 3) setActiveTab('unit3_master');
              else if (unitId === 4) setActiveTab('unit4_master');
              else if (unitId === 5) setActiveTab('unit5_master');
              else if (unitId === 6) setActiveTab('unit6_master');
            }}
          />
        )}

        {activeTab === 'glossary' && (
          <GlossaryView
            onBackToHandbook={() => setActiveTab('handbook')}
            onStudyCard={handleStudyCardFromGlossary}
          />
        )}
      </main>

      {/* Footer */}
      <footer className="mt-auto border-t border-slate-200 bg-white py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-700">Tiếng Anh 8 (Global Success)</span>
            <span>•</span>
            <span>Bộ sách Kết nối tri thức với cuộc sống (NXB Giáo Dục Việt Nam & Pearson)</span>
          </div>
          <div className="flex items-center gap-1.5 font-medium">
            <span>Ứng dụng phương pháp Lặp lại ngắt quãng (Spaced Repetition)</span>
            <Sparkles className="w-3.5 h-3.5 text-indigo-500" />
          </div>
        </div>
      </footer>
    </div>
  );
}
