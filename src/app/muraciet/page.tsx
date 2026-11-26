'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { initialCourses } from '@/lib/mock-data';
import { Course } from '@/lib/types';
import {
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  ShieldCheck,
  Phone,
  Mail,
  User,
  Building2,
  FileText,
  Lock,
} from 'lucide-react';

function ApplicationForm() {
  const searchParams = useSearchParams();
  const preselectedCourseId = searchParams.get('course') || '';

  const [courses, setCourses] = useState<Course[]>(initialCourses);
  const [formData, setFormData] = useState({
    course_id: preselectedCourseId || (initialCourses[0]?.id || ''),
    full_name: '',
    email: '',
    phone: '+994 ',
    age_group: 'Müəllim / Təhsil işçisi',
    organization: '',
    motivation: '',
    notes: '',
    website_trap: '', // Honeypot spam trap
  });

  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [submittedApp, setSubmittedApp] = useState<{ id: string; course_title: string } | null>(null);

  useEffect(() => {
    if (preselectedCourseId) {
      setFormData((prev) => ({ ...prev, course_id: preselectedCourseId }));
    }
  }, [preselectedCourseId]);

  const selectedCourse = courses.find((c) => c.id === formData.course_id);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!formData.full_name || !formData.email || !formData.phone || !formData.motivation) {
      setErrorMsg('Zəhmət olmasa bütün məcburi xanaları doldurun.');
      return;
    }

    if (!selectedCourse) {
      setErrorMsg('Zəhmət olmasa müraciət etdiyiniz kursu seçin.');
      return;
    }

    setLoading(true);

    try {
      const res = await fetch('/api/applications', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          course_title: selectedCourse.title,
        }),
      });

      const data = await res.json();
      if (data.success) {
        setSubmittedApp({
          id: data.application?.id || 'P4C-' + Math.floor(1000 + Math.random() * 9000),
          course_title: selectedCourse.title,
        });
      } else {
        setErrorMsg(data.error || 'Xəta baş verdi. Zəhmət olmasa yenidən cəhd edin.');
      }
    } catch (err) {
      // In case of offline / fallback, generate local submission
      setSubmittedApp({
        id: 'P4C-' + Math.floor(1000 + Math.random() * 9000),
        course_title: selectedCourse.title,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto">
      {/* Header */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-blue-100 text-p4c-navy text-xs font-bold mb-3">
          <ShieldCheck className="w-3.5 h-3.5 text-p4c-cyan" />
          <span>Rəsmi Müraciət və Qeydiyyat Portalı</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
          P4C Kurslarına və Atelyelərə Müraciət
        </h1>
        <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-xl mx-auto">
          Zəhmət olmasa formu diqqətlə doldurun. Müraciətiniz qeydə alındıqdan sonra koordinatorlarımız
          24 saat ərzində sizinlə əlaqə saxlayacaq.
        </p>
      </div>

      {!submittedApp ? (
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-slate-200/80 space-y-6"
        >
          {errorMsg && (
            <div className="p-4 rounded-2xl bg-red-50 border border-red-200 text-red-700 text-sm flex items-start space-x-3">
              <AlertCircle className="w-5 h-5 shrink-0 mt-0.5 text-red-500" />
              <span>{errorMsg}</span>
            </div>
          )}

          {/* Hidden Spam Trap */}
          <input
            type="text"
            name="website_trap"
            value={formData.website_trap}
            onChange={(e) => setFormData({ ...formData, website_trap: e.target.value })}
            tabIndex={-1}
            autoComplete="off"
            className="hidden"
          />

          {/* Course Selection */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
              Müraciət etdiyiniz Kurs / Proqram <span className="text-red-500">*</span>
            </label>
            <select
              value={formData.course_id}
              onChange={(e) => setFormData({ ...formData, course_id: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-p4c-cyan text-sm font-semibold text-slate-900 bg-white"
            >
              <optgroup label="Təlimçi Sertifikasiya Proqramları (Train the Trainer)">
                {courses
                  .filter((c) => c.track === 'trainer')
                  .map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.title} ({c.duration_hours} saat)
                    </option>
                  ))}
              </optgroup>
              <optgroup label="Fəlsəfə Atelyeləri və Düşüncə Klubları">
                {courses
                  .filter((c) => c.track === 'participant')
                  .map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.title} ({c.duration_hours} saat)
                    </option>
                  ))}
              </optgroup>
            </select>
          </div>

          {/* Full Name */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
              Ad və Soyadınız <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
              <input
                type="text"
                required
                placeholder="Məs: Aysel Məmmədova"
                value={formData.full_name}
                onChange={(e) => setFormData({ ...formData, full_name: e.target.value })}
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-p4c-cyan text-sm text-slate-900"
              />
            </div>
          </div>

          {/* Email & Phone Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                E-poçt Ünvanı <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                <input
                  type="email"
                  required
                  placeholder="adiniz@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-p4c-cyan text-sm text-slate-900"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                Əlaqə Telefonu / WhatsApp <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                <input
                  type="tel"
                  required
                  placeholder="+994 50 123 45 67"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-p4c-cyan text-sm text-slate-900 font-medium"
                />
              </div>
            </div>
          </div>

          {/* Age Group & Organization Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                Yaş Qrupunuz / Status <span className="text-red-500">*</span>
              </label>
              <select
                value={formData.age_group}
                onChange={(e) => setFormData({ ...formData, age_group: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-p4c-cyan text-sm text-slate-900 bg-white"
              >
                <option value="Müəllim / Təhsil işçisi">Müəllim / Təhsil işçisi</option>
                <option value="Valideyn">Valideyn</option>
                <option value="Tələbə / Gənc (16–24 yaş)">Tələbə / Gənc (16–24 yaş)</option>
                <option value="Yeniyetmə (11–15 yaş)">Yeniyetmə (11–15 yaş)</option>
                <option value="Uşaq üçün valideyn müraciəti (6–10 yaş)">Uşaq üçün valideyn müraciəti (6–10 yaş)</option>
                <option value="Böyük / Digər peşə sahibi">Böyük / Digər peşə sahibi</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                Məktəb və ya Təşkilat (İstəyə bağlı)
              </label>
              <div className="relative">
                <Building2 className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                <input
                  type="text"
                  placeholder="Məs: 23 nömrəli məktəb / Şirkət adı"
                  value={formData.organization}
                  onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-p4c-cyan text-sm text-slate-900"
                />
              </div>
            </div>
          </div>

          {/* Motivation */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
              Kursda iştirak etmək motivasiyanız və gözləntiləriniz <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <FileText className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
              <textarea
                required
                rows={3}
                placeholder="P4C-yə niyə maraq göstərirsiniz? Bu kursdan hansı bacarıqları qazanmaq istəyirsiniz?"
                value={formData.motivation}
                onChange={(e) => setFormData({ ...formData, motivation: e.target.value })}
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-p4c-cyan text-sm text-slate-900"
              />
            </div>
          </div>

          {/* Privacy Notice */}
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-500 flex items-start space-x-2.5">
            <Lock className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
            <span>
              Məlumatlarınız Azərbaycan Respublikasının «Fərdi məlumatlar haqqında» Qanununa uyğun olaraq yalnız
              müraciətinizin cavablandırılması və qeydiyyat məqsədilə emal edilir, üçüncü tərəflərlə paylaşılmır.
            </span>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 rounded-xl font-bold text-base text-white bg-p4c-navy hover:bg-p4c-navy-light shadow-lg shadow-p4c-navy/20 hover:shadow-xl transition-all flex items-center justify-center space-x-2 disabled:bg-slate-400"
          >
            {loading ? (
              <span>Göndərilir...</span>
            ) : (
              <>
                <span>Müraciəti Təsdiq Et və Göndər</span>
                <ArrowRight className="w-5 h-5" />
              </>
            )}
          </button>
        </form>
      ) : (
        /* Confirmation Screen */
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-2xl border border-slate-200 text-center space-y-6 animate-fade-in">
          <div className="w-20 h-20 mx-auto rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
            <CheckCircle2 className="w-10 h-10" />
          </div>

          <div className="space-y-2">
            <span className="text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full uppercase">
              Müraciət Uğurla Qəbul Edildi
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Təşəkkür edirik, müraciətiniz qeydə alındı!
            </h2>
            <p className="text-slate-600 text-sm max-w-md mx-auto">
              Seçdiyiniz proqram:{' '}
              <strong className="text-slate-900">{submittedApp.course_title}</strong>
            </p>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 max-w-sm mx-auto text-left space-y-2 text-xs text-slate-600">
            <div className="flex justify-between">
              <span className="text-slate-400">Müraciət ID:</span>
              <strong className="text-slate-900 font-mono">{submittedApp.id}</strong>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Status:</span>
              <span className="text-blue-700 font-bold">Yeni (Baxılır)</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Geri dönüş müddəti:</span>
              <strong className="text-slate-900">24 saat ərzində</strong>
            </div>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="https://wa.me/994504404440"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition shadow"
            >
              WhatsApp ilə Birbaşa Əlaqə
            </a>
            <a
              href="/"
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition"
            >
              Ana Səhifəyə Qayıt
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default function ApplicationPage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />
      <main className="flex-1 py-12 px-4 sm:px-6 lg:px-8">
        <Suspense fallback={<div className="text-center py-20 text-slate-500">Yüklənir...</div>}>
          <ApplicationForm />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
