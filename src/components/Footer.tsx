'use client';

import React from 'react';
import Image from 'next/image';
import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Facebook,
  Linkedin,
  Youtube,
  Shield,
  Heart,
  ExternalLink,
  LogIn,
} from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="bg-white/10 p-1.5 rounded-lg inline-block">
              <img
                src="/images/logo-horizontal.jpg"
                alt="P4C Azərbaycan"
                style={{ height: '40px', width: 'auto', maxHeight: '40px', maxWidth: '190px', objectFit: 'contain' }}
                className="h-10 w-auto object-contain"
              />
            </div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              <strong className="text-white">P4C Azərbaycan</strong> — Uşaqların, gənclərin və böyüklərin tənqidi,
              yaradıcı, əməkdaşlıq və qayğıkeş (4C) düşünmə bacarıqlarını inkişaf etdirən milli fəlsəfi təhsil təşəbbüsüdür.
            </p>
            <div className="flex items-center space-x-3 pt-2">
              <a
                href="https://instagram.com/p4cazerbaijan"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:text-p4c-cyan hover:bg-slate-700 transition"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com/p4cazerbaijan"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:text-p4c-cyan hover:bg-slate-700 transition"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com/company/p4cazerbaijan"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:text-p4c-cyan hover:bg-slate-700 transition"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com/@p4cazerbaijan"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:text-p4c-cyan hover:bg-slate-700 transition"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-white font-semibold text-sm tracking-wider uppercase">Bölmələr</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/haqqimizda/p4c" className="hover:text-white transition">
                  P4C Nədir?
                </a>
              </li>
              <li>
                <a href="/haqqimizda/p4c-azerbaijan" className="hover:text-white transition">
                  P4C Azərbaycan
                </a>
              </li>
              <li>
                <a href="/kurslar" className="hover:text-white transition">
                  Bütün Kurslar
                </a>
              </li>
              <li>
                <a href="/muellimler" className="hover:text-white transition">
                  Müəllimlərimiz
                </a>
              </li>
              <li>
                <a href="/test" className="text-p4c-cyan hover:underline transition flex items-center space-x-1">
                  <span>Özünü Kəşf Testi</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div className="space-y-3">
            <h4 className="text-white font-semibold text-sm tracking-wider uppercase">Proqramlar</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/kurslar?track=trainer" className="hover:text-white transition">
                  Fasilatatorluq (15 saat)
                </a>
              </li>
              <li>
                <a href="/kurslar?track=trainer" className="hover:text-white transition">
                  İrəli Səviyyə (30 saat)
                </a>
              </li>
              <li>
                <a href="/kurslar?track=trainer" className="hover:text-white transition">
                  Təlimçi Sertifikasiyası (30s)
                </a>
              </li>
              <li>
                <a href="/kurslar?track=participant" className="hover:text-white transition">
                  Uşaq Fəlsəfə Atelyesi (10s)
                </a>
              </li>
              <li>
                <a href="/kurslar?track=participant" className="hover:text-white transition">
                  Gənclər üçün Məntiq (20s)
                </a>
              </li>
              <li>
                <a href="/kurslar?track=participant" className="hover:text-white transition">
                  Valideyn Dialoq Klubu (30s)
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-3">
            <h4 className="text-white font-semibold text-sm tracking-wider uppercase">Əlaqə</h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-p4c-cyan shrink-0 mt-0.5" />
                <span>Bakı şəhəri, Nizami küçəsi 142</span>
              </li>
              <li className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-p4c-cyan shrink-0" />
                <a href="tel:+994124004440" className="hover:text-white transition">
                  +994 (12) 400 44 40
                </a>
              </li>
              <li className="flex items-center space-x-2.5">
                <Mail className="w-4 h-4 text-p4c-cyan shrink-0" />
                <a href="mailto:info@p4cazerbaijan.az" className="hover:text-white transition">
                  info@p4cazerbaijan.az
                </a>
              </li>
              <li className="pt-2">
                <a
                  href="/admin"
                  className="inline-flex items-center space-x-1.5 text-xs text-slate-400 hover:text-p4c-cyan bg-slate-800/80 px-2.5 py-1.5 rounded-lg border border-slate-700 transition"
                >
                  <LogIn className="w-3.5 h-3.5" />
                  <span>Komanda İdarəetmə Paneli</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} P4C Azərbaycan. Bütün hüquqlar qorunur.</p>
          <div className="flex items-center space-x-6">
            <a href="/mexfilik" className="hover:text-slate-300 transition">
              Məxfilik Siyasəti
            </a>
            <a href="/terefdaslar" className="hover:text-slate-300 transition">
              Tərəfdaşlarımız
            </a>
            <a href="/haqqimizda/p4c" className="hover:text-slate-300 transition">
              Etik Standartlar
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
