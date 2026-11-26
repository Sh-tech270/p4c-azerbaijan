'use client';

import React, { useState, useEffect } from 'react';
import { ResourceItem, ResourceCategory } from '@/lib/types';
import {
  FileText,
  Plus,
  Edit2,
  Trash2,
  X,
  Download,
  BookOpen,
  CheckCircle2,
  AlertCircle,
  FileArchive,
} from 'lucide-react';

export default function ResourcesAdminPage() {
  const [resources, setResources] = useState<ResourceItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingRes, setEditingRes] = useState<ResourceItem | null>(null);
  const [saving, setSaving] = useState(false);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [feedback, setFeedback] = useState('');

  const loadData = async () => {
    try {
      const res = await fetch('/api/admin/resources');
      const data = await res.json();
      if (data.success) {
        setResources(data.resources);
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

  const handleCreate = () => {
    const newRes: ResourceItem = {
      id: 'res-' + Date.now().toString(),
      title: '',
      category: 'Metodik Vəsait',
      description: '',
      file_format: 'PDF',
      file_size: '2.5 MB',
      download_url: '',
      cover_url:
        'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80',
      author: 'P4C Azərbaycan',
      published_year: '2026',
      pages: 50,
      featured: true,
    };
    setEditingRes(newRes);
    setFeedback('');
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingRes || !editingRes.title || !editingRes.download_url) return;

    setSaving(true);
    setFeedback('');

    try {
      const res = await fetch('/api/admin/resources', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(editingRes),
      });
      const data = await res.json();
      if (data.success) {
        setFeedback('Material uğurla yadda saxlanıldı!');
        setResources((prev) => {
          const idx = prev.findIndex((r) => r.id === data.resource.id);
          if (idx >= 0) {
            const arr = [...prev];
            arr[idx] = data.resource;
            return arr;
          }
          return [data.resource, ...prev];
        });
        setTimeout(() => setEditingRes(null), 1200);
      }
    } catch (e) {
      setFeedback('Xəta baş verdi');
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Bu materialı silmək istədiyinizə əminsiniz?')) return;

    setDeletingId(id);
    try {
      const res = await fetch(`/api/admin/resources?id=${encodeURIComponent(id)}`, {
        method: 'DELETE',
      });
      const data = await res.json();
      if (data.success) {
        setResources((prev) => prev.filter((r) => r.id !== id));
      }
    } catch (e) {
      alert('Silinmə zamanı xəta baş verdi');
    } finally {
      setDeletingId(null);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Kitablar və Resursların İdarəsi
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
            Müəllimlər və iştirakçılar üçün tədris vəsaitləri, kitablar və yüklənə bilən P4C materialları.
          </p>
        </div>

        <button
          onClick={handleCreate}
          className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-xl font-bold text-xs text-white bg-[#0B357B] hover:bg-[#14499E] shadow-md transition"
        >
          <Plus className="w-4 h-4" />
          <span>Yeni Material Əlavə Et</span>
        </button>
      </div>

      {loading ? (
        <div className="p-12 text-center text-xs text-slate-400">Yüklənir...</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl p-5 border border-slate-200/80 shadow-sm flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-16 h-20 rounded-xl overflow-hidden bg-slate-100 shrink-0 border border-slate-200 shadow-sm">
                    <img
                      src={
                        item.cover_url ||
                        'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80'
                      }
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="min-w-0 flex-1">
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-blue-50 text-[#0B357B]">
                      {item.category}
                    </span>
                    <h3 className="font-bold text-sm text-slate-900 mt-1 line-clamp-2">
                      {item.title}
                    </h3>
                    <div className="text-[11px] text-slate-500 mt-0.5">
                      {item.file_format} • {item.file_size} {item.pages ? `• ${item.pages} səh.` : ''}
                    </div>
                  </div>
                </div>

                <p className="text-xs text-slate-600 line-clamp-2">{item.description}</p>
                <div className="text-[11px] text-slate-400 truncate">
                  Link: <code className="text-slate-600">{item.download_url}</code>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                <button
                  onClick={() => {
                    setEditingRes(item);
                    setFeedback('');
                  }}
                  className="flex-1 py-2 rounded-xl bg-slate-100 hover:bg-[#0B357B] hover:text-white text-xs font-bold text-slate-700 transition flex items-center justify-center space-x-1"
                >
                  <Edit2 className="w-3.5 h-3.5" />
                  <span>Redaktə</span>
                </button>

                <button
                  onClick={() => handleDelete(item.id)}
                  disabled={deletingId === item.id}
                  className="p-2 rounded-xl bg-red-50 hover:bg-red-100 text-red-600 text-xs font-bold transition"
                  title="Sil"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Edit / Create Modal */}
      {editingRes && (
        <div className="fixed inset-0 bg-slate-950/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl space-y-4 animate-fade-in max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <h3 className="text-base font-bold text-slate-900">
                {editingRes.title ? 'Materialı Redaktə Et' : 'Yeni Material Əlavə Et'}
              </h3>
              <button
                onClick={() => setEditingRes(null)}
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

            <form onSubmit={handleSave} className="space-y-3 text-xs">
              <div>
                <label className="block font-bold text-slate-700 uppercase mb-1">Materialın Adı *</label>
                <input
                  type="text"
                  required
                  value={editingRes.title}
                  onChange={(e) => setEditingRes({ ...editingRes, title: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 font-semibold"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-700 uppercase mb-1">Kateqoriya *</label>
                  <select
                    value={editingRes.category}
                    onChange={(e) =>
                      setEditingRes({ ...editingRes, category: e.target.value as ResourceCategory })
                    }
                    className="w-full px-3 py-2 rounded-xl border border-slate-300"
                  >
                    <option value="Metodik Vəsait">Metodik Vəsait</option>
                    <option value="Kitab">Kitab</option>
                    <option value="Atelye Materialı">Atelye Materialı</option>
                    <option value="Təlimçi Bələdçisi">Təlimçi Bələdçisi</option>
                    <option value="Tədqiqat və Məqalə">Tədqiqat və Məqalə</option>
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 uppercase mb-1">Fayl Formatı *</label>
                  <select
                    value={editingRes.file_format}
                    onChange={(e) =>
                      setEditingRes({
                        ...editingRes,
                        file_format: e.target.value as 'PDF' | 'DOCX' | 'ZIP',
                      })
                    }
                    className="w-full px-3 py-2 rounded-xl border border-slate-300"
                  >
                    <option value="PDF">PDF</option>
                    <option value="DOCX">DOCX (Word)</option>
                    <option value="ZIP">ZIP (Arxiv)</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="block font-bold text-slate-700 uppercase mb-1">Fayl Həcmi *</label>
                  <input
                    type="text"
                    required
                    placeholder="məs. 4.5 MB"
                    value={editingRes.file_size}
                    onChange={(e) => setEditingRes({ ...editingRes, file_size: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 uppercase mb-1">Səhifə Sayı</label>
                  <input
                    type="number"
                    placeholder="məs. 60"
                    value={editingRes.pages || ''}
                    onChange={(e) =>
                      setEditingRes({
                        ...editingRes,
                        pages: e.target.value ? Number(e.target.value) : undefined,
                      })
                    }
                    className="w-full px-3 py-2 rounded-xl border border-slate-300"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 uppercase mb-1">Nəşr İli</label>
                  <input
                    type="text"
                    placeholder="2026"
                    value={editingRes.published_year || ''}
                    onChange={(e) =>
                      setEditingRes({ ...editingRes, published_year: e.target.value })
                    }
                    className="w-full px-3 py-2 rounded-xl border border-slate-300"
                  />
                </div>
              </div>

              <div>
                <label className="block font-bold text-slate-700 uppercase mb-1">Müəllif / Tərtibatçı</label>
                <input
                  type="text"
                  placeholder="məs. P4C Azərbaycan Metodika Şöbəsi"
                  value={editingRes.author || ''}
                  onChange={(e) => setEditingRes({ ...editingRes, author: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border border-slate-300"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 uppercase mb-1">
                  Yükləmə Linki (Fayl URL) *
                </label>
                <input
                  type="text"
                  required
                  placeholder="məs. /files/P4C_Azerbaycan_Dilinde_Beledci_Redakte_Olunan_2026.docx"
                  value={editingRes.download_url}
                  onChange={(e) => setEditingRes({ ...editingRes, download_url: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 font-mono text-xs"
                />
                <p className="text-[10px] text-slate-400 mt-0.5">
                  Fayl public/files/ qovluğunda yerləşə bilər və ya birbaşa Google Drive / bulud linki ola bilər.
                </p>
              </div>

              {/* Cover Image with File Picker */}
              <div>
                <label className="block font-bold text-slate-700 uppercase mb-1">Üz Qabığı Şəkli</label>
                <div className="flex items-center space-x-3 mb-2">
                  {editingRes.cover_url && (
                    <img
                      src={editingRes.cover_url}
                      alt="Önbaxış"
                      className="w-12 h-16 rounded-lg object-cover border border-[#00B4D8] shadow-sm"
                    />
                  )}
                  <label className="cursor-pointer inline-flex items-center space-x-1.5 px-3 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs rounded-xl border border-slate-300 transition">
                    <span>📁 Kompüterdən Şəkil Seç</span>
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) {
                          const reader = new FileReader();
                          reader.onloadend = () => {
                            setEditingRes({ ...editingRes, cover_url: reader.result as string });
                          };
                          reader.readAsDataURL(file);
                        }
                      }}
                    />
                  </label>
                </div>
                <input
                  type="text"
                  placeholder="və ya şəkil URL linki"
                  value={editingRes.cover_url || ''}
                  onChange={(e) => setEditingRes({ ...editingRes, cover_url: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 uppercase mb-1">Qısa Açıqlama</label>
                <textarea
                  rows={3}
                  value={editingRes.description}
                  onChange={(e) => setEditingRes({ ...editingRes, description: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border border-slate-300"
                />
              </div>

              <div className="flex items-center justify-end space-x-2 pt-3 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setEditingRes(null)}
                  className="px-4 py-2 rounded-xl text-xs font-bold text-slate-500 hover:bg-slate-100"
                >
                  Ləğv Et
                </button>
                <button
                  type="submit"
                  disabled={saving}
                  className="px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-[#0B357B] hover:bg-[#14499E] shadow transition disabled:bg-slate-400"
                >
                  {saving ? 'Yadda saxlanılır...' : 'Yadda Saxla'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
