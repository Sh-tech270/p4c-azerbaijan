'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import {
  Menu,
  X,
  ChevronDown,
  Sparkles,
  ArrowRight,
  BookOpen,
  Users,
  ShieldCheck,
  Award,
  Layers,
  LogIn,
} from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [aboutDropdown, setAboutDropdown] = useState(false);
  const [courseDropdown, setCourseDropdown] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setIsOpen(false);
    setAboutDropdown(false);
    setCourseDropdown(false);
  }, [pathname]);

  return (
    <>
      {/* Top Announcement Utility Bar */}
      <div className="bg-[#0B357B] text-white text-xs py-2 px-4 border-b border-blue-900/40">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2 truncate">
            <span className="bg-[#00B4D8] text-[#0B357B] font-bold text-[10px] px-2 py-0.5 rounded-full uppercase tracking-wider shrink-0">
              Yenilik
            </span>
            <span className="text-slate-200 truncate">
              Yaz mövsümü üzrə P4C Fasilatator və Təlimçi Sertifikasiya Proqramına qəbul başladı!
            </span>
          </div>
          <div className="hidden sm:flex items-center space-x-4 text-slate-300 text-xs shrink-0">
            <a href="tel:+994124004440" className="hover:text-white transition">
              +994 (12) 400 44 40
            </a>
            <span className="text-blue-400">|</span>
            <Link
              href="/admin"
              className="flex items-center space-x-1 text-[#00B4D8] hover:text-white transition font-medium"
              title="Komanda İdarəetmə Paneli"
            >
              <LogIn className="w-3.5 h-3.5" />
              <span>Admin Girişi</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-200 ${
          scrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-2.5' : 'bg-white py-3.5 border-b border-slate-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            {/* Logo */}
            <Link href="/" className="flex items-center shrink-0">
              <img
                src="/images/logo-horizontal.jpg"
                alt="P4C Azerbaijan"
                style={{ height: '42px', width: 'auto', maxHeight: '42px', maxWidth: '180px', objectFit: 'contain' }}
                className="h-10 sm:h-11 w-auto object-contain"
              />
            </Link>

            {/* Desktop & Laptop Navigation Links - Visible from md (768px) upwards */}
            <nav className="hidden md:flex items-center space-x-1 lg:space-x-3 text-xs lg:text-sm font-semibold text-slate-700">
              {/* Haqqında with Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setAboutDropdown(true)}
                onMouseLeave={() => setAboutDropdown(false)}
              >
                <Link
                  href={isHomePage ? '#haqqinda' : '/haqqimizda/p4c'}
                  className="flex items-center space-x-1 px-2.5 py-1.5 rounded-lg hover:text-[#0B357B] hover:bg-slate-50 transition"
                >
                  <span>P4C Nədir?</span>
                  <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
                </Link>

                {aboutDropdown && (
                  <div className="absolute top-full left-0 w-64 bg-white rounded-xl shadow-xl border border-slate-100 py-2 px-1 animate-fade-in z-50">
                    <Link
                      href="/haqqimizda/p4c"
                      className="flex items-start space-x-3 p-2 rounded-lg hover:bg-slate-50 transition"
                    >
                      <BookOpen className="w-4 h-4 text-[#00B4D8] shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold text-slate-900 text-xs">P4C Metodologiyası</div>
                        <div className="text-[11px] text-slate-500">Uşaqlar üçün Fəlsəfə nədir?</div>
                      </div>
                    </Link>
                    <Link
                      href="/haqqimizda/p4c-azerbaijan"
                      className="flex items-start space-x-3 p-2 rounded-lg hover:bg-slate-50 transition"
                    >
                      <ShieldCheck className="w-4 h-4 text-[#0B357B] shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold text-slate-900 text-xs">P4C Azərbaycan</div>
                        <div className="text-[11px] text-slate-500">Missiya və milli hədəflər</div>
                      </div>
                    </Link>
                    <Link
                      href="/haqqimizda/p4c#community-of-inquiry"
                      className="flex items-start space-x-3 p-2 rounded-lg hover:bg-slate-50 transition"
                    >
                      <Users className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold text-slate-900 text-xs">Community of Inquiry</div>
                        <div className="text-[11px] text-slate-500">Araşdırma icması modeli</div>
                      </div>
                    </Link>
                  </div>
                )}
              </div>

              {/* Kurslar with Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setCourseDropdown(true)}
                onMouseLeave={() => setCourseDropdown(false)}
              >
                <Link
                  href={isHomePage ? '#kurslar' : '/kurslar'}
                  className="flex items-center space-x-1 px-2.5 py-1.5 rounded-lg hover:text-[#0B357B] hover:bg-slate-50 transition"
                >
                  <span>Kurslar və Proqramlar</span>
                  <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
                </Link>

                {courseDropdown && (
                  <div className="absolute top-full left-0 w-72 bg-white rounded-xl shadow-xl border border-slate-100 py-2 px-1.5 animate-fade-in z-50">
                    <Link
                      href="/kurslar?track=trainer"
                      className="flex items-start space-x-3 p-2 rounded-lg hover:bg-blue-50/50 transition"
                    >
                      <Award className="w-4 h-4 text-[#0B357B] shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold text-[#0B357B] text-xs">Təlimçi Ol (Sertifikasiya)</div>
                        <div className="text-[11px] text-slate-500">15s, 30s və 30s beynəlxalq dərəcələr</div>
                      </div>
                    </Link>
                    <Link
                      href="/kurslar?track=participant"
                      className="flex items-start space-x-3 p-2 rounded-lg hover:bg-cyan-50/50 transition"
                    >
                      <Layers className="w-4 h-4 text-[#00B4D8] shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold text-slate-900 text-xs">İştirakçı Ol (Atelyelər)</div>
                        <div className="text-[11px] text-slate-500">Uşaqlar, gənclər və böyüklər üçün</div>
                      </div>
                    </Link>
                  </div>
                )}
              </div>

              {/* Müəllimlərimiz */}
              <Link
                href={isHomePage ? '#muellimler' : '/muellimler'}
                className="px-2.5 py-1.5 rounded-lg hover:text-[#0B357B] hover:bg-slate-50 transition"
              >
                Müəllimlərimiz
              </Link>

              {/* ✨ Özünü Kəşf Et Testi */}
              <Link
                href="/test"
                className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-full text-xs font-bold text-[#0B357B] bg-cyan-50 border border-cyan-200 hover:bg-[#00B4D8] hover:text-white transition"
              >
                <Sparkles className="w-3 h-3 text-[#00B4D8] hover:text-white" />
                <span>Özünü Kəşf Et</span>
              </Link>

              {/* Layihələr */}
              <Link
                href={isHomePage ? '#layiheler' : '/layiheler'}
                className="px-2.5 py-1.5 rounded-lg hover:text-[#0B357B] hover:bg-slate-50 transition"
              >
                Layihələr
              </Link>

              {/* Xəbərlər */}
              <Link
                href={isHomePage ? '#xeberler' : '/xeberler'}
                className="px-2.5 py-1.5 rounded-lg hover:text-[#0B357B] hover:bg-slate-50 transition"
              >
                Xəbərlər
              </Link>

              {/* Kitablar və Resurslar */}
              <Link
                href={isHomePage ? '#resurslar' : '/resurslar'}
                className="px-2.5 py-1.5 rounded-lg hover:text-[#0B357B] hover:bg-slate-50 transition"
              >
                Kitablar
              </Link>

              {/* Videolar */}
              <Link
                href={isHomePage ? '#videolar' : '/videolar'}
                className="px-2.5 py-1.5 rounded-lg hover:text-[#0B357B] hover:bg-slate-50 transition"
              >
                Videolar
              </Link>

              {/* Əlaqə */}
              <Link
                href={isHomePage ? '#elaqe' : '/elaqe'}
                className="px-2.5 py-1.5 rounded-lg hover:text-[#0B357B] hover:bg-slate-50 transition"
              >
                Əlaqə
              </Link>
            </nav>

            {/* Right Action CTA Button */}
            <div className="hidden sm:flex items-center space-x-2 shrink-0">
              <Link
                href={isHomePage ? '#muraciet' : '/muraciet'}
                style={{ backgroundColor: '#0B357B', color: '#ffffff' }}
                className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold text-white bg-[#0B357B] hover:bg-[#14499E] shadow-sm hover:shadow transition"
              >
                <span style={{ color: '#ffffff' }}>Kursa Müraciət Et</span>
                <ArrowRight className="w-3.5 h-3.5 text-white" style={{ color: '#ffffff' }} />
              </Link>
            </div>

            {/* Mobile Hamburger Menu Button (< md) */}
            <div className="flex md:hidden items-center space-x-2">
              <Link
                href="/test"
                className="p-1.5 px-2.5 rounded-lg bg-cyan-50 text-[#0B357B] text-xs font-bold flex items-center space-x-1 border border-cyan-100"
              >
                <Sparkles className="w-3 h-3 text-[#00B4D8]" />
                <span>Test</span>
              </Link>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition focus:outline-none"
                aria-label="Menyu"
              >
                {isOpen ? <X className="w-6 h-6 text-[#0B357B]" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isOpen && (
          <div className="md:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-2 animate-fade-in shadow-xl">
            <Link
              href="/"
              className="block px-3 py-2 rounded-lg text-sm font-bold text-slate-900 hover:bg-slate-50"
            >
              Ana Səhifə
            </Link>
            <div className="pl-3 border-l-2 border-slate-100 space-y-1 my-1">
              <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider py-1">P4C Haqqında</div>
              <Link href="/haqqimizda/p4c" className="block py-1 text-xs text-slate-600 hover:text-[#0B357B]">
                P4C Metodologiyası Nədir?
              </Link>
              <Link href="/haqqimizda/p4c-azerbaijan" className="block py-1 text-xs text-slate-600 hover:text-[#0B357B]">
                P4C Azərbaycan Təşkilatı
              </Link>
            </div>
            <Link
              href="/kurslar"
              className="block px-3 py-2 rounded-lg text-sm font-semibold text-slate-800 hover:bg-slate-50"
            >
              Kurslar və Proqramlar
            </Link>
            <Link
              href="/muellimler"
              className="block px-3 py-2 rounded-lg text-sm font-semibold text-slate-800 hover:bg-slate-50"
            >
              Müəllimlərimiz
            </Link>
            <Link
              href="/layiheler"
              className="block px-3 py-2 rounded-lg text-sm font-semibold text-slate-800 hover:bg-slate-50"
            >
              Layihələrimiz
            </Link>
            <Link
              href="/xeberler"
              className="block px-3 py-2 rounded-lg text-sm font-semibold text-slate-800 hover:bg-slate-50"
            >
              Xəbərlər və Bloq
            </Link>
            <Link
              href="/resurslar"
              className="block px-3 py-2 rounded-lg text-sm font-semibold text-slate-800 hover:bg-slate-50"
            >
              Kitablar və Resurslar
            </Link>
            <Link
              href="/videolar"
              className="block px-3 py-2 rounded-lg text-sm font-semibold text-slate-800 hover:bg-slate-50"
            >
              Faydalı Videolar
            </Link>
            <Link
              href="/terefdaslar"
              className="block px-3 py-2 rounded-lg text-sm font-semibold text-slate-800 hover:bg-slate-50"
            >
              Tərəfdaşlarımız
            </Link>
            <Link
              href="/elaqe"
              className="block px-3 py-2 rounded-lg text-sm font-semibold text-slate-800 hover:bg-slate-50"
            >
              Əlaqə
            </Link>

            <div className="pt-3 border-t border-slate-100 space-y-2">
              <Link
                href="/test"
                className="w-full flex items-center justify-center space-x-2 py-2.5 rounded-xl font-bold text-xs bg-cyan-50 text-[#0B357B] border border-cyan-200"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#00B4D8]" />
                <span>Özünü Kəşf Testi (10 Sual)</span>
              </Link>
              <Link
                href="/muraciet"
                className="w-full flex items-center justify-center space-x-2 py-2.5 rounded-xl font-bold text-xs text-white bg-[#0B357B] shadow-md"
              >
                <span>Kursa Müraciət Et</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="/admin"
                className="w-full flex items-center justify-center space-x-2 py-2 rounded-xl text-xs font-medium text-slate-500 hover:text-slate-800"
              >
                <LogIn className="w-3 h-3" />
                <span>Admin İdarəetmə Paneli</span>
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
