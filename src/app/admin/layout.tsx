'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/navigation';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  Inbox,
  BookOpen,
  Users,
  BarChart3,
  Settings,
  LogOut,
  ExternalLink,
  ShieldAlert,
  KeyRound,
  CheckCircle2,
  Lock,
} from 'lucide-react';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [pinInput, setPinInput] = useState('');
  const [loginError, setLoginError] = useState('');
  const pathname = usePathname();

  // Check auth from localStorage on client
  useEffect(() => {
    const authStatus = localStorage.getItem('P4C_ADMIN_AUTH');
    if (authStatus === 'true') {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Default team admin password / PIN: 'p4c2026admin'
    if (pinInput.trim() === 'p4c2026admin' || pinInput.trim() === 'admin123') {
      localStorage.setItem('P4C_ADMIN_AUTH', 'true');
      setIsAuthenticated(true);
      setLoginError('');
    } else {
      setLoginError('Daxil edilmiş admin parolu yanlışdır.');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('P4C_ADMIN_AUTH');
    setIsAuthenticated(false);
  };

  if (isAuthenticated === null) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center text-white">
        <div className="text-sm font-semibold animate-pulse">İcazə yoxlanılır...</div>
      </div>
    );
  }

  // If not logged in, show login screen
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white rounded-3xl p-8 sm:p-10 shadow-2xl space-y-6">
          <div className="text-center space-y-2">
            <div className="w-16 h-16 mx-auto rounded-2xl bg-blue-50 text-p4c-navy flex items-center justify-center">
              <Lock className="w-8 h-8 text-p4c-navy" />
            </div>
            <h1 className="text-2xl font-extrabold text-slate-900">P4C Admin Paneli</h1>
            <p className="text-xs text-slate-500">
              Səlahiyyətli komanda üzvləri üçün idarəetmə mərkəzi
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            {loginError && (
              <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-600 text-xs font-medium">
                {loginError}
              </div>
            )}

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                Admin Giriş Parolu
              </label>
              <div className="relative">
                <KeyRound className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                <input
                  type="password"
                  required
                  placeholder="Admin parolunu daxil edin"
                  value={pinInput}
                  onChange={(e) => setPinInput(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-p4c-cyan text-sm text-slate-900"
                />
              </div>
              <p className="text-[11px] text-slate-400 mt-1">
                İlkin giriş parolu: <code className="bg-slate-100 text-p4c-navy px-1.5 py-0.5 rounded font-bold">p4c2026admin</code>
              </p>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl font-bold text-sm text-white bg-p4c-navy hover:bg-p4c-navy-light shadow-md transition"
            >
              Panellə Giriş Et
            </button>
          </form>

          <div className="pt-2 text-center">
            <a href="/" className="text-xs text-slate-500 hover:text-p4c-navy transition">
              ← Əsas Sayta Qayıt
            </a>
          </div>
        </div>
      </div>
    );
  }

  // Authenticated Admin Dashboard Layout
  const navigation = [
    { name: 'Dashboard', href: '/admin', icon: LayoutDashboard },
    { name: 'Müraciətlər', href: '/admin/muracietler', icon: Inbox },
    { name: 'Kursların İdarəsi', href: '/admin/kurslar', icon: BookOpen },
    { name: 'Müəllimlər', href: '/admin/muellimler', icon: Users },
    { name: 'Statistika', href: '/admin/statistika', icon: BarChart3 },
    { name: 'Sayt Parametrləri', href: '/admin/tenzimlemeler', icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col md:flex-row">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-slate-900 text-slate-300 flex flex-col justify-between shrink-0">
        <div>
          {/* Logo in Admin */}
          <div className="p-6 border-b border-slate-800 flex items-center justify-between">
            <div className="relative h-10 w-36">
              <Image
                src="/images/logo-horizontal.jpg"
                alt="P4C Admin"
                fill
                sizes="144px"
                className="object-contain"
              />
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="p-4 space-y-1.5">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              const Icon = item.icon;

              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-2xl text-xs sm:text-sm font-semibold transition ${
                    isActive
                      ? 'bg-p4c-navy text-white shadow-md'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800/80'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-p4c-cyan' : 'text-slate-400'}`} />
                  <span>{item.name}</span>
                </a>
              );
            })}
          </nav>
        </div>

        {/* Bottom User Actions */}
        <div className="p-4 border-t border-slate-800 space-y-2">
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-slate-800/60 text-slate-300 hover:text-white text-xs font-semibold transition"
          >
            <span>Saytı Canlı Aç</span>
            <ExternalLink className="w-3.5 h-3.5 text-p4c-cyan" />
          </a>

          <button
            onClick={handleLogout}
            className="w-full flex items-center space-x-2 px-3.5 py-2.5 rounded-xl text-xs font-semibold text-rose-400 hover:bg-rose-950/40 transition"
          >
            <LogOut className="w-4 h-4" />
            <span>Çıxış Et</span>
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Header */}
        <header className="bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between">
          <div className="text-sm font-bold text-slate-800">
            P4C Azərbaycan — İdarəetmə Paneli
          </div>
          <div className="flex items-center space-x-3">
            <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Sistem Aktivdir</span>
            </span>
            <span className="text-xs font-semibold text-slate-500 hidden sm:inline">
              Admin: <strong className="text-slate-800">Komanda Rəhbəri</strong>
            </span>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-6 sm:p-8 flex-1 overflow-auto">{children}</main>
      </div>
    </div>
  );
}
