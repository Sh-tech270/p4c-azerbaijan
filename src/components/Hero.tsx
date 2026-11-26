'use client';

import React from 'react';
import Image from 'next/image';
import { Sparkles, ArrowRight, BookOpen, Compass, CheckCircle2, ShieldCheck } from 'lucide-react';

interface HeroProps {
  title?: string;
  subtitle?: string;
  badge?: string;
}

export default function Hero({
  title = 'Düşün. Sual ver. Birlikdə kəşf et.',
  subtitle = 'P4C Azərbaycan — Uşaqların, gənclərin və böyüklərin tənqidi, yaradıcı, əməkdaşlıq və qayğıkeş (4C) düşünmə bacarıqlarını inkişaf etdirən milli fəlsəfi təhsil platformasıdır.',
  badge = 'Beynəlxalq P4C Metodologiyası və Standartları',
}: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50/60 via-white to-slate-50/40 pt-12 pb-20 lg:pt-20 lg:pb-28">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-blue-100/40 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 rounded-full bg-cyan-100/40 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Text Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white border border-blue-200/80 shadow-sm text-xs font-semibold text-p4c-navy">
              <span className="w-2 h-2 rounded-full bg-p4c-cyan animate-ping" />
              <span>{badge}</span>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
              <span className="block">{title}</span>
              <span className="text-gradient block mt-1">Uşaqlarla, Gənclərlə və Böyüklərlə Fəlsəfə</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              {subtitle}
            </p>

            {/* 4 Pillars Pills */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2">
              <div className="flex items-center space-x-1.5 text-xs font-medium text-slate-700 bg-white/80 border border-slate-200/70 py-1.5 px-2.5 rounded-lg">
                <CheckCircle2 className="w-4 h-4 text-p4c-cyan shrink-0" />
                <span>Tənqidi Düşüncə</span>
              </div>
              <div className="flex items-center space-x-1.5 text-xs font-medium text-slate-700 bg-white/80 border border-slate-200/70 py-1.5 px-2.5 rounded-lg">
                <CheckCircle2 className="w-4 h-4 text-p4c-cyan shrink-0" />
                <span>Yaradıcı Zəka</span>
              </div>
              <div className="flex items-center space-x-1.5 text-xs font-medium text-slate-700 bg-white/80 border border-slate-200/70 py-1.5 px-2.5 rounded-lg">
                <CheckCircle2 className="w-4 h-4 text-p4c-cyan shrink-0" />
                <span>Əməkdaşlıq</span>
              </div>
              <div className="flex items-center space-x-1.5 text-xs font-medium text-slate-700 bg-white/80 border border-slate-200/70 py-1.5 px-2.5 rounded-lg">
                <CheckCircle2 className="w-4 h-4 text-p4c-cyan shrink-0" />
                <span>Qayğıkeş Dialoq</span>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-4">
              <a
                href="/kurslar"
                style={{ backgroundColor: '#0B357B', color: '#ffffff' }}
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-7 py-3.5 rounded-xl font-bold text-white bg-[#0B357B] hover:bg-[#14499E] shadow-lg shadow-blue-900/25 hover:shadow-xl transition-all"
              >
                <span style={{ color: '#ffffff' }}>Kurslara Bax</span>
                <ArrowRight className="w-4 h-4 text-white" style={{ color: '#ffffff' }} />
              </a>

              <a
                href="/test"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-xl font-bold text-[#0B357B] bg-white hover:bg-blue-50/70 border border-blue-200/80 shadow-sm transition-all"
              >
                <Sparkles className="w-4 h-4 text-[#00B4D8]" />
                <span>Özünü Kəşf Testi</span>
              </a>

              <a
                href="/haqqimizda/p4c"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-xl font-semibold text-slate-700 hover:text-[#0B357B] hover:bg-slate-100/70 transition"
              >
                <BookOpen className="w-4 h-4 text-slate-500" />
                <span>P4C Nədir?</span>
              </a>
            </div>
          </div>

          {/* Right Visual Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer Card with P4C Brand Emblem */}
              <div className="relative bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-100 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-p4c-cyan/10 rounded-bl-full pointer-events-none" />

                {/* Logo Presentation in Hero */}
                <div className="text-center pb-6 border-b border-slate-100">
                  <div className="mx-auto flex justify-center">
                    <img
                      src="/images/logo-horizontal.jpg"
                      alt="P4C Azerbaijan Emblem"
                      style={{ height: '60px', width: 'auto', maxHeight: '60px', maxWidth: '200px', objectFit: 'contain' }}
                      className="h-16 w-auto object-contain"
                    />
                  </div>
                  <p className="text-xs text-slate-500 font-medium mt-1">
                    Philosophy for Children • Azerbaijan
                  </p>
                </div>

                {/* 2 Primary Track Cards */}
                <div className="space-y-3.5 pt-6">
                  {/* Track 1: Təlimçi Ol */}
                  <a
                    href="/kurslar?track=trainer"
                    className="block group p-4 rounded-2xl bg-gradient-to-r from-blue-50/70 to-slate-50 border border-blue-100 hover:border-p4c-navy hover:shadow-md transition-all"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-xl bg-p4c-navy text-white flex items-center justify-center font-bold text-sm shadow">
                          T1
                        </div>
                        <div>
                          <div className="font-bold text-slate-900 group-hover:text-p4c-navy text-sm transition">
                            Təlimçi Ol (Fasilatatorluq)
                          </div>
                          <div className="text-xs text-slate-500">15, 30 və 30 saatlıq beynəlxalq sertifikasiya</div>
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-p4c-navy group-hover:translate-x-1 transition-transform" />
                    </div>
                  </a>

                  {/* Track 2: İştirakçı Ol */}
                  <a
                    href="/kurslar?track=participant"
                    className="block group p-4 rounded-2xl bg-gradient-to-r from-cyan-50/70 to-slate-50 border border-cyan-100 hover:border-p4c-cyan hover:shadow-md transition-all"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-xl bg-p4c-cyan text-p4c-navy flex items-center justify-center font-bold text-sm shadow">
                          İ1
                        </div>
                        <div>
                          <div className="font-bold text-slate-900 group-hover:text-p4c-cyan-dark text-sm transition">
                            İştirakçı Ol (Fəlsəfə Atelyeləri)
                          </div>
                          <div className="text-xs text-slate-500">10, 15, 20, 30, 40 saatlıq canlı müzakirələr</div>
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-p4c-cyan group-hover:translate-x-1 transition-transform" />
                    </div>
                  </a>
                </div>

                {/* Trust Footer */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <div className="flex items-center space-x-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>Milli Təhsil Uyğunluğu</span>
                  </div>
                  <div className="flex items-center space-x-1.5">
                    <Compass className="w-4 h-4 text-p4c-navy" />
                    <span>Community of Inquiry</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
