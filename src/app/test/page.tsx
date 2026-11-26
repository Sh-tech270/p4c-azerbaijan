'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { initialQuizQuestions, quizResultProfiles } from '@/lib/mock-data';
import { Sparkles, ArrowRight, RotateCcw, Share2, CheckCircle2, AlertCircle, Award } from 'lucide-react';

// Lightweight zero-dependency celebration animation
function triggerCelebration() {
  if (typeof window === 'undefined') return;
  const colors = ['#0B357B', '#00B4D8', '#48CAE4', '#FFD166', '#06D6A0'];
  for (let i = 0; i < 35; i++) {
    const el = document.createElement('div');
    el.style.position = 'fixed';
    el.style.width = '10px';
    el.style.height = '10px';
    el.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    el.style.left = `${Math.random() * 90 + 5}vw`;
    el.style.top = '-10px';
    el.style.borderRadius = '50%';
    el.style.pointerEvents = 'none';
    el.style.zIndex = '99999';
    el.style.transition = 'transform 2.2s cubic-bezier(0.25, 1, 0.5, 1), opacity 2.2s ease-out';
    document.body.appendChild(el);
    setTimeout(() => {
      el.style.transform = `translateY(${window.innerHeight * 0.75}px) rotate(${Math.random() * 360}deg)`;
      el.style.opacity = '0';
    }, 20);
    setTimeout(() => el.remove(), 2400);
  }
}

export default function QuizPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [scores, setScores] = useState({
    socratic: 0,
    collaborative: 0,
    analytic: 0,
    creative: 0,
  });
  const [completed, setCompleted] = useState(false);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState<number | null>(null);
  const [copied, setCopied] = useState(false);

  const questions = initialQuizQuestions;
  const currentQuestion = questions[currentStep];

  const handleSelectOption = (index: number) => {
    setSelectedOptionIndex(index);
  };

  const handleNext = () => {
    if (selectedOptionIndex === null) return;

    const chosenOption = currentQuestion.options[selectedOptionIndex];
    const newScores = {
      ...scores,
      [chosenOption.profile_type]: scores[chosenOption.profile_type] + chosenOption.score,
    };
    setScores(newScores);
    setSelectedOptionIndex(null);

    if (currentStep + 1 < questions.length) {
      setCurrentStep(currentStep + 1);
    } else {
      setCompleted(true);
      // Trigger celebration
      triggerCelebration();
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setScores({ socratic: 0, collaborative: 0, analytic: 0, creative: 0 });
    setSelectedOptionIndex(null);
    setCompleted(false);
  };

  // Determine dominant profile
  const getDominantProfile = () => {
    let dominant: 'socratic' | 'collaborative' | 'analytic' | 'creative' = 'socratic';
    let maxScore = -1;
    (Object.keys(scores) as Array<keyof typeof scores>).forEach((key) => {
      if (scores[key] > maxScore) {
        maxScore = scores[key];
        dominant = key;
      }
    });
    return quizResultProfiles[dominant] || quizResultProfiles['socratic'];
  };

  const profile = getDominantProfile();

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `Mənim P4C Düşüncə Tərzim: ${profile.title}`,
        text: `Mən P4C Azərbaycanın "Özünü Kəşf Et" testindən keçdim və nəticəm: ${profile.title}. Sən də düşüncə profilini kəşf et!`,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const progressPercentage = Math.round(((currentStep + 1) / questions.length) * 100);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />

      <main className="flex-1 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-100 text-p4c-navy text-xs font-bold mb-3">
              <Sparkles className="w-3.5 h-3.5 text-p4c-cyan" />
              <span>İnteraktiv Refleksiya Aləti</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              Düşünmə Tərzini Tanı və Kəşf Et
            </h1>
            <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-xl mx-auto">
              Sualvermə, dinləmə, arqumentləşdirmə və əməkdaşlıq vərdişlərinizi 10 sualla qiymətləndirin və
              dominant fəlsəfi profilinizi müəyyən edin.
            </p>
          </div>

          {!completed ? (
            /* Quiz Active State */
            <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-slate-200/80">
              {/* Progress Bar */}
              <div className="mb-8">
                <div className="flex items-center justify-between text-xs font-semibold text-slate-500 mb-2">
                  <span>
                    Sual {currentStep + 1} / {questions.length}
                  </span>
                  <span>{progressPercentage}% tamamlandı</span>
                </div>
                <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-p4c-navy to-p4c-cyan transition-all duration-300 rounded-full"
                    style={{ width: `${progressPercentage}%` }}
                  />
                </div>
              </div>

              {/* Question */}
              <div className="mb-6">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug">
                  {currentQuestion.question}
                </h2>
              </div>

              {/* Options */}
              <div className="space-y-3 mb-8">
                {currentQuestion.options.map((option, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSelectOption(idx)}
                    className={`w-full text-left p-4 sm:p-5 rounded-2xl border-2 transition-all flex items-start space-x-3.5 ${
                      selectedOptionIndex === idx
                        ? 'border-p4c-cyan bg-cyan-50/50 shadow-md text-slate-900'
                        : 'border-slate-200/80 hover:border-slate-300 hover:bg-slate-50 text-slate-700'
                    }`}
                  >
                    <div
                      className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5 border text-xs font-bold ${
                        selectedOptionIndex === idx
                          ? 'bg-p4c-cyan text-white border-p4c-cyan'
                          : 'border-slate-300 text-slate-500 bg-white'
                      }`}
                    >
                      {String.fromCharCode(65 + idx)}
                    </div>
                    <span className="text-sm sm:text-base font-medium leading-relaxed">
                      {option.label}
                    </span>
                  </button>
                ))}
              </div>

              {/* Actions */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                <button
                  onClick={handleReset}
                  className="text-xs text-slate-400 hover:text-slate-600 transition flex items-center space-x-1"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Sıfırla</span>
                </button>

                <button
                  onClick={handleNext}
                  disabled={selectedOptionIndex === null}
                  className={`inline-flex items-center space-x-2 px-7 py-3 rounded-xl font-bold text-sm transition-all shadow-md ${
                    selectedOptionIndex !== null
                      ? 'bg-p4c-navy text-white hover:bg-p4c-navy-light'
                      : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                  }`}
                >
                  <span>{currentStep + 1 === questions.length ? 'Nəticəyə Bax' : 'Növbəti Sual'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ) : (
            /* Results State */
            <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-2xl border border-slate-200 space-y-8 animate-fade-in">
              <div className="text-center space-y-3 pb-6 border-b border-slate-100">
                <div className="w-16 h-16 mx-auto rounded-3xl bg-gradient-to-tr from-p4c-navy to-p4c-cyan flex items-center justify-center text-white shadow-xl shadow-p4c-cyan/20">
                  <Award className="w-8 h-8" />
                </div>
                <div className="text-xs font-bold text-p4c-cyan uppercase tracking-wider">
                  Sizin Dominant Düşüncə Profiliniz
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">{profile.title}</h2>
                <p className="text-sm font-semibold text-slate-500 italic max-w-lg mx-auto">
                  «{profile.subtitle}»
                </p>
              </div>

              {/* Description */}
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200/80">
                <h3 className="text-base font-bold text-slate-900 mb-2">Profilin İzahı</h3>
                <p className="text-sm text-slate-700 leading-relaxed">{profile.description}</p>
              </div>

              {/* Strengths */}
              <div>
                <h3 className="text-base font-bold text-slate-900 mb-3">Əsas Güclü Tərəfləriniz:</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {profile.strengths.map((strength, i) => (
                    <div
                      key={i}
                      className="flex items-start space-x-2.5 p-3.5 rounded-xl bg-blue-50/60 border border-blue-100 text-xs font-semibold text-p4c-navy"
                    >
                      <CheckCircle2 className="w-4 h-4 text-p4c-cyan shrink-0 mt-0.5" />
                      <span>{strength}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recommendation Course Box */}
              <div className="bg-gradient-to-r from-blue-900 to-p4c-navy text-white rounded-2xl p-6 sm:p-7 shadow-lg flex flex-col sm:flex-row items-center justify-between gap-6">
                <div>
                  <span className="text-xs font-bold text-p4c-cyan uppercase tracking-wider block mb-1">
                    Sizə Tövsiyə Edilən Kurs
                  </span>
                  <h4 className="text-lg font-bold">{profile.recommended_course_title}</h4>
                  <p className="text-xs text-slate-300 mt-1 max-w-md">
                    Düşüncə potensialınızı sistemləşdirmək və beynəlxalq metodologiya ilə dərinləşdirmək üçün ən uyğun seçim.
                  </p>
                </div>
                <a
                  href={`/kurslar/${profile.recommended_course_slug}`}
                  className="shrink-0 px-6 py-3 rounded-xl bg-p4c-cyan text-p4c-navy font-bold text-sm hover:bg-white transition shadow-md"
                >
                  Kursa Bax və Müraciət Et
                </a>
              </div>

              {/* Share & Actions */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-100">
                <button
                  onClick={handleReset}
                  className="text-xs font-semibold text-slate-500 hover:text-slate-800 flex items-center space-x-1"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Testi Yenidən Keç</span>
                </button>

                <button
                  onClick={handleShare}
                  className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 transition"
                >
                  <Share2 className="w-4 h-4 text-slate-600" />
                  <span>{copied ? 'Link Kopyalandı!' : 'Nəticəni Paylaş'}</span>
                </button>
              </div>

              {/* Ethical Disclaimer */}
              <div className="flex items-start space-x-2 p-3.5 rounded-xl bg-amber-50 border border-amber-200/60 text-xs text-amber-800">
                <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-amber-600" />
                <span>
                  <strong>Hüquqi və etik qeyd:</strong> Bu test tibbi, psixoloji və ya klinik diaqnoz daşımır.
                  Yalnız fərdi düşüncə və fəlsəfi vərdişləriniz üzərində ilkin refleksiya məqsədi daşıyır.
                </span>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
