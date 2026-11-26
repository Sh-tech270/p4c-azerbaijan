import React from 'react';
import { getApplications, getCourses, getInstructors, getStatistics } from '@/lib/db';
import {
  Inbox,
  Clock,
  CheckCircle2,
  BookOpen,
  Users,
  TrendingUp,
  ArrowRight,
  ShieldAlert,
} from 'lucide-react';

export const revalidate = 0;

export default async function AdminDashboardPage() {
  const [applications, courses, instructors, statistics] = await Promise.all([
    getApplications(),
    getCourses(),
    getInstructors(),
    getStatistics(),
  ]);

  const newAppsCount = applications.filter((a) => a.status === 'Yeni').length;
  const inReviewCount = applications.filter((a) => a.status === 'Baxılır' || a.status === 'Əlaqə saxlanılıb').length;
  const acceptedCount = applications.filter((a) => a.status === 'Qəbul edilib').length;

  return (
    <div className="space-y-8">
      {/* Title */}
      <div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
          İdarəetmə Paneli (Dashboard)
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">
          P4C platformasının real-vaxt statistikası, yeni müraciətlər və məzmun statusu.
        </p>
      </div>

      {/* KPI Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-sm flex items-center justify-between">
          <div>
            <div className="text-xs font-bold text-slate-400 uppercase">Ümumi Müraciətlər</div>
            <div className="text-3xl font-black text-slate-900 mt-1">{applications.length}</div>
            <div className="text-xs text-blue-600 font-semibold mt-1">Platformadan daxil olan</div>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-blue-50 text-p4c-navy flex items-center justify-center">
            <Inbox className="w-6 h-6" />
          </div>
        </div>

        <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-sm flex items-center justify-between">
          <div>
            <div className="text-xs font-bold text-amber-500 uppercase">Yeni Müraciətlər</div>
            <div className="text-3xl font-black text-amber-600 mt-1">{newAppsCount}</div>
            <div className="text-xs text-slate-400 font-medium mt-1">Cavab gözləyən</div>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center">
            <Clock className="w-6 h-6" />
          </div>
        </div>

        <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-sm flex items-center justify-between">
          <div>
            <div className="text-xs font-bold text-slate-400 uppercase">Aktiv Kurslar</div>
            <div className="text-3xl font-black text-slate-900 mt-1">{courses.length}</div>
            <div className="text-xs text-emerald-600 font-semibold mt-1">Təlimçi və Atelyelər</div>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-cyan-50 text-p4c-cyan-dark flex items-center justify-center">
            <BookOpen className="w-6 h-6" />
          </div>
        </div>

        <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-sm flex items-center justify-between">
          <div>
            <div className="text-xs font-bold text-slate-400 uppercase">Təlimçi Heyəti</div>
            <div className="text-3xl font-black text-slate-900 mt-1">{instructors.length}</div>
            <div className="text-xs text-indigo-600 font-semibold mt-1">Sertifikatlı mütəxəssis</div>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
            <Users className="w-6 h-6" />
          </div>
        </div>
      </div>

      {/* Recent Applications Section */}
      <div className="bg-white rounded-3xl border border-slate-200/80 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-slate-100 flex items-center justify-between">
          <div>
            <h2 className="text-base font-bold text-slate-900">Son Kurs Müraciətləri</h2>
            <p className="text-xs text-slate-500">Ən son qeydiyyatdan keçən iştirakçılar</p>
          </div>
          <a
            href="/admin/muracietler"
            className="text-xs font-bold text-p4c-navy hover:text-p4c-cyan transition flex items-center space-x-1"
          >
            <span>Bütün Müraciətlər ({applications.length})</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 text-slate-500 uppercase font-bold tracking-wider border-b border-slate-100">
              <tr>
                <th className="p-4">Ad və Soyad</th>
                <th className="p-4">Müraciət Edilən Kurs</th>
                <th className="p-4">Telefon</th>
                <th className="p-4">Status</th>
                <th className="p-4">Tarix</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {applications.slice(0, 5).map((app) => (
                <tr key={app.id} className="hover:bg-slate-50/80 transition">
                  <td className="p-4 font-bold text-slate-900">{app.full_name}</td>
                  <td className="p-4 text-slate-600 max-w-xs truncate">{app.course_title}</td>
                  <td className="p-4 text-slate-600 font-mono">{app.phone}</td>
                  <td className="p-4">
                    <span
                      className={`px-2.5 py-1 rounded-full text-[11px] font-bold ${
                        app.status === 'Yeni'
                          ? 'bg-amber-100 text-amber-800'
                          : app.status === 'Qəbul edilib'
                          ? 'bg-emerald-100 text-emerald-800'
                          : 'bg-blue-100 text-blue-800'
                      }`}
                    >
                      {app.status}
                    </span>
                  </td>
                  <td className="p-4 text-slate-400">
                    {app.created_at ? new Date(app.created_at).toLocaleDateString('az-AZ') : '—'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Quick Navigation Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <a
          href="/admin/kurslar"
          className="p-6 bg-white rounded-3xl border border-slate-200/80 hover:border-p4c-cyan/60 hover:shadow-md transition block group"
        >
          <div className="w-10 h-10 rounded-xl bg-blue-50 text-p4c-navy flex items-center justify-center mb-3">
            <BookOpen className="w-5 h-5" />
          </div>
          <h3 className="text-sm font-bold text-slate-900 group-hover:text-p4c-navy">
            Kursları və Qiymətləri Redaktə Et
          </h3>
          <p className="text-xs text-slate-500 mt-1">
            Yeni kurs əlavə et, saatları və qiymətləri dəyiş və ya gizlət.
          </p>
        </a>

        <a
          href="/admin/statistika"
          className="p-6 bg-white rounded-3xl border border-slate-200/80 hover:border-p4c-cyan/60 hover:shadow-md transition block group"
        >
          <div className="w-10 h-10 rounded-xl bg-cyan-50 text-p4c-cyan-dark flex items-center justify-center mb-3">
            <TrendingUp className="w-5 h-5" />
          </div>
          <h3 className="text-sm font-bold text-slate-900 group-hover:text-p4c-cyan-dark">
            Statistik Göstəriciləri Yenilə
          </h3>
          <p className="text-xs text-slate-500 mt-1">
            Müəllim, iştirakçı və məktəb sayğaclarını bir toxunuşla dəyiş.
          </p>
        </a>

        <a
          href="/admin/tenzimlemeler"
          className="p-6 bg-white rounded-3xl border border-slate-200/80 hover:border-p4c-navy/60 hover:shadow-md transition block group"
        >
          <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-700 flex items-center justify-center mb-3">
            <ShieldAlert className="w-5 h-5" />
          </div>
          <h3 className="text-sm font-bold text-slate-900 group-hover:text-indigo-700">
            Sayt Parametrləri və Əlaqə
          </h3>
          <p className="text-xs text-slate-500 mt-1">
            Əlaqə nömrələri, ünvan, email və sosial media linklərini yenilə.
          </p>
        </a>
      </div>
    </div>
  );
}
