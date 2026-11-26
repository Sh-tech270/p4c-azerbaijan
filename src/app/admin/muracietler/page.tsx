'use client';

import React, { useState, useEffect } from 'react';
import { CourseApplication, ApplicationStatus } from '@/lib/types';
import {
  Inbox,
  Search,
  Filter,
  Download,
  CheckCircle2,
  AlertCircle,
  Clock,
  Phone,
  Mail,
  Building2,
  FileText,
  X,
  ChevronDown,
} from 'lucide-react';

const statuses: ApplicationStatus[] = [
  'Yeni',
  'Baxılır',
  'Əlaqə saxlanılıb',
  'Qəbul edilib',
  'Gözləmə siyahısı',
  'Rədd edilib',
];

export default function ApplicationsAdminPage() {
  const [applications, setApplications] = useState<CourseApplication[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('Hamısı');
  const [selectedApp, setSelectedApp] = useState<CourseApplication | null>(null);
  const [editStatus, setEditStatus] = useState<ApplicationStatus>('Yeni');
  const [editNotes, setEditNotes] = useState('');
  const [saving, setSaving] = useState(false);
  const [feedback, setFeedback] = useState('');

  const loadData = async () => {
    try {
      const res = await fetch('/api/applications');
      const data = await res.json();
      if (data.success) {
        setApplications(data.applications);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const openAppDetails = (app: CourseApplication) => {
    setSelectedApp(app);
    setEditStatus(app.status);
    setEditNotes(app.admin_notes || '');
    setFeedback('');
  };

  const handleSaveStatus = async () => {
    if (!selectedApp) return;
    setSaving(true);
    setFeedback('');

    try {
      const res = await fetch('/api/applications', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          id: selectedApp.id,
          status: editStatus,
          admin_notes: editNotes,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setFeedback('Status uğurla yeniləndi!');
        setApplications((prev) =>
          prev.map((a) => (a.id === selectedApp.id ? { ...a, status: editStatus, admin_notes: editNotes } : a))
        );
        setSelectedApp((prev) => (prev ? { ...prev, status: editStatus, admin_notes: editNotes } : null));
      }
    } catch (err) {
      setFeedback('Yeniləmə zamanı xəta baş verdi');
    } finally {
      setSaving(false);
    }
  };

  // CSV Export with UTF-8 BOM
  const handleExportCSV = () => {
    if (applications.length === 0) return;

    const headers = [
      'Müraciət ID',
      'Kurs Adı',
      'Ad və Soyad',
      'E-poçt',
      'Telefon',
      'Yaş Qrupu',
      'Məktəb/Təşkilat',
      'Motivasiya',
      'İştirakçı Qeydi',
      'Status',
      'Admin Qeydləri',
      'Tarix',
    ];

    const rows = applications.map((a) => [
      a.id,
      `"${a.course_title.replace(/"/g, '""')}"`,
      `"${a.full_name.replace(/"/g, '""')}"`,
      a.email,
      `"${a.phone}"`,
      `"${a.age_group}"`,
      `"${(a.organization || '').replace(/"/g, '""')}"`,
      `"${a.motivation.replace(/"/g, '""')}"`,
      `"${(a.notes || '').replace(/"/g, '""')}"`,
      a.status,
      `"${(a.admin_notes || '').replace(/"/g, '""')}"`,
      a.created_at || '',
    ]);

    const csvContent =
      '\uFEFF' + [headers.join(','), ...rows.map((r) => r.join(','))].join('\r\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `P4C_Muracietler_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Filtered List
  const filteredApps = applications.filter((app) => {
    const matchesSearch =
      app.full_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.phone.includes(searchQuery) ||
      app.course_title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (app.organization && app.organization.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesStatus = statusFilter === 'Hamısı' || app.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Kurs Müraciətlərinin İdarəsi
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
            Gələn bütün müraciətləri izləyin, statuslarını dəyişin və CSV formatında ixrac edin.
          </p>
        </div>

        <button
          onClick={handleExportCSV}
          className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-xl font-bold text-xs text-slate-700 bg-white border border-slate-300 hover:bg-slate-50 shadow-sm transition"
        >
          <Download className="w-4 h-4 text-p4c-navy" />
          <span>CSV İxrac Et ({applications.length})</span>
        </button>
      </div>

      {/* Search and Filters Bar */}
      <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-sm flex flex-col sm:flex-row items-center gap-3">
        <div className="relative flex-1 w-full">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
          <input
            type="text"
            placeholder="Ad, telefon, e-poçt və ya kurs üzrə axtar..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-p4c-cyan text-xs text-slate-900"
          />
        </div>

        <div className="flex items-center space-x-2 w-full sm:w-auto">
          <Filter className="w-4 h-4 text-slate-400 shrink-0" />
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-3 py-2 rounded-xl border border-slate-200 text-xs font-semibold text-slate-700 bg-white focus:outline-none"
          >
            <option value="Hamısı">Bütün Statuslar</option>
            {statuses.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Applications Table */}
      <div className="bg-white rounded-3xl border border-slate-200/80 shadow-sm overflow-hidden">
        {loading ? (
          <div className="p-12 text-center text-xs text-slate-400">Məlumatlar yüklənir...</div>
        ) : filteredApps.length === 0 ? (
          <div className="p-12 text-center text-xs text-slate-400">Axtarışa uyğun müraciət tapılmadı.</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 text-slate-500 uppercase font-bold tracking-wider border-b border-slate-100">
                <tr>
                  <th className="p-4">Ad və Soyad</th>
                  <th className="p-4">Müraciət Edilən Kurs</th>
                  <th className="p-4">Telefon</th>
                  <th className="p-4">Yaş Qrupu / Məktəb</th>
                  <th className="p-4">Status</th>
                  <th className="p-4">Tarix</th>
                  <th className="p-4 text-right">Əməliyyat</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredApps.map((app) => (
                  <tr key={app.id} className="hover:bg-slate-50/80 transition">
                    <td className="p-4">
                      <div className="font-bold text-slate-900">{app.full_name}</div>
                      <div className="text-[11px] text-slate-400">{app.email}</div>
                    </td>
                    <td className="p-4 text-slate-700 max-w-xs font-medium truncate">{app.course_title}</td>
                    <td className="p-4 text-slate-600 font-mono">{app.phone}</td>
                    <td className="p-4 text-slate-500">
                      <div>{app.age_group}</div>
                      {app.organization && <div className="text-[10px] text-slate-400">{app.organization}</div>}
                    </td>
                    <td className="p-4">
                      <span
                        className={`px-2.5 py-1 rounded-full text-[11px] font-bold ${
                          app.status === 'Yeni'
                            ? 'bg-amber-100 text-amber-800'
                            : app.status === 'Qəbul edilib'
                            ? 'bg-emerald-100 text-emerald-800'
                            : app.status === 'Rədd edilib'
                            ? 'bg-rose-100 text-rose-800'
                            : 'bg-blue-100 text-blue-800'
                        }`}
                      >
                        {app.status}
                      </span>
                    </td>
                    <td className="p-4 text-slate-400 whitespace-nowrap">
                      {app.created_at ? new Date(app.created_at).toLocaleDateString('az-AZ') : '—'}
                    </td>
                    <td className="p-4 text-right">
                      <button
                        onClick={() => openAppDetails(app)}
                        className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-p4c-navy hover:text-white text-slate-700 font-bold transition text-[11px]"
                      >
                        Bax və İdarə Et
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Details & Status Modal */}
      {selectedApp && (
        <div className="fixed inset-0 bg-slate-950/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl space-y-5 animate-fade-in max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <h3 className="text-lg font-bold text-slate-900">Müraciət Detalları</h3>
              <button
                onClick={() => setSelectedApp(null)}
                className="p-1 rounded-lg text-slate-400 hover:bg-slate-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {feedback && (
              <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold">
                {feedback}
              </div>
            )}

            <div className="space-y-3 text-xs text-slate-600">
              <div className="p-3 bg-slate-50 rounded-xl space-y-1">
                <div className="text-[10px] uppercase font-bold text-slate-400">Müraciət Edilən Kurs</div>
                <div className="font-bold text-sm text-p4c-navy">{selectedApp.course_title}</div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 bg-slate-50 rounded-xl">
                  <div className="text-[10px] uppercase font-bold text-slate-400">Ad və Soyad</div>
                  <div className="font-bold text-slate-900 mt-0.5">{selectedApp.full_name}</div>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl">
                  <div className="text-[10px] uppercase font-bold text-slate-400">Telefon</div>
                  <div className="font-mono text-slate-900 mt-0.5">{selectedApp.phone}</div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 bg-slate-50 rounded-xl">
                  <div className="text-[10px] uppercase font-bold text-slate-400">E-poçt</div>
                  <div className="text-slate-900 mt-0.5">{selectedApp.email}</div>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl">
                  <div className="text-[10px] uppercase font-bold text-slate-400">Status / Məktəb</div>
                  <div className="text-slate-900 mt-0.5">{selectedApp.age_group} {selectedApp.organization ? `(${selectedApp.organization})` : ''}</div>
                </div>
              </div>

              <div className="p-3 bg-slate-50 rounded-xl space-y-1">
                <div className="text-[10px] uppercase font-bold text-slate-400">İştirak Motivasiyası</div>
                <div className="text-slate-800 leading-relaxed italic">«{selectedApp.motivation}»</div>
              </div>

              {selectedApp.notes && (
                <div className="p-3 bg-slate-50 rounded-xl space-y-1">
                  <div className="text-[10px] uppercase font-bold text-slate-400">Əlavə Qeyd</div>
                  <div className="text-slate-700">{selectedApp.notes}</div>
                </div>
              )}
            </div>

            {/* Status Editing */}
            <div className="pt-3 border-t border-slate-100 space-y-3">
              <div>
                <label className="block text-xs font-bold uppercase text-slate-700 mb-1">
                  Müraciətin Statusunu Dəyiş
                </label>
                <select
                  value={editStatus}
                  onChange={(e) => setEditStatus(e.target.value as ApplicationStatus)}
                  className="w-full px-3 py-2.5 rounded-xl border border-slate-300 text-xs font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-p4c-cyan bg-white"
                >
                  {statuses.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-slate-700 mb-1">
                  Daxili Komanda Qeydləri
                </label>
                <textarea
                  rows={2}
                  placeholder="Məs: İştirakçı ilə 21 noyabrda əlaqə saxlanıldı, təsdiqləndi..."
                  value={editNotes}
                  onChange={(e) => setEditNotes(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs text-slate-900 focus:outline-none"
                />
              </div>

              <div className="flex items-center justify-end space-x-2 pt-2">
                <button
                  onClick={() => setSelectedApp(null)}
                  className="px-4 py-2 rounded-xl text-xs font-bold text-slate-500 hover:bg-slate-100"
                >
                  Bağla
                </button>
                <button
                  onClick={handleSaveStatus}
                  disabled={saving}
                  className="px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-p4c-navy hover:bg-p4c-navy-light shadow transition disabled:bg-slate-400"
                >
                  {saving ? 'Yadda saxlanılır...' : 'Statusu Yenilə'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
