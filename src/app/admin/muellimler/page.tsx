'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Instructor } from '@/lib/types';
import { Users, Plus, Edit2, X, Award, BookOpen } from 'lucide-react';

export default function InstructorsAdminPage() {
  const [instructors, setInstructors] = useState<Instructor[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingInst, setEditingInst] = useState<Instructor | null>(null);
  const [saving, setSaving] = useState(false);
  const [feedback, setFeedback] = useState('');

  const loadData = async () => {
    try {
      const res = await fetch('/api/admin/instructors');
      const data = await res.json();
      if (data.success) {
        setInstructors(data.instructors);
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
    const newInst: Instructor = {
      id: 'inst-' + Date.now().toString(),
      full_name: '',
      title: 'P4C Fasilatatoru və Təlimçisi',
      bio: '',
      education: 'Ali Pedaqoji Təhsil',
      p4c_experience: 'P4C Fasilatatorluq təcrübəsi',
      teaching_courses: ['P4C Giriş Təlimi'],
      photo_url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
      email: '',
      sort_order: instructors.length + 1,
    };
    setEditingInst(newInst);
    setFeedback('');
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingInst || !editingInst.full_name) return;

    setSaving(true);
    setFeedback('');

    try {
      const res = await fetch('/api/admin/instructors', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(editingInst),
      });
      const data = await res.json();
      if (data.success) {
        setFeedback('Müəllim məlumatları uğurla yadda saxlanıldı!');
        setInstructors((prev) => {
          const idx = prev.findIndex((i) => i.id === data.instructor.id);
          if (idx >= 0) {
            const arr = [...prev];
            arr[idx] = data.instructor;
            return arr;
          }
          return [...prev, data.instructor];
        });
        setTimeout(() => setEditingInst(null), 1200);
      }
    } catch (e) {
      setFeedback('Xəta baş verdi');
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Müəllim və Təlimçilərin İdarəsi
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
            Saytda nümayiş olunan müəllim heyətini, bioqrafiyaları və fotoları yeniləyin.
          </p>
        </div>

        <button
          onClick={handleCreate}
          className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-xl font-bold text-xs text-white bg-p4c-navy hover:bg-p4c-navy-light shadow-md transition"
        >
          <Plus className="w-4 h-4" />
          <span>Yeni Müəllim Əlavə Et</span>
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {loading ? (
          <div className="col-span-full text-center text-xs text-slate-400 py-10">Yüklənir...</div>
        ) : (
          instructors.map((inst) => (
            <div
              key={inst.id}
              className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-sm flex flex-col justify-between"
            >
              <div className="space-y-3 text-center">
                <div className="relative w-24 h-24 mx-auto rounded-full overflow-hidden border-2 border-p4c-cyan">
                  <img
                    src={inst.photo_url || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80'}
                    alt={inst.full_name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-base text-slate-900">{inst.full_name}</h3>
                  <p className="text-xs font-semibold text-p4c-cyan-dark">{inst.title}</p>
                </div>
                <p className="text-xs text-slate-500 line-clamp-2">{inst.bio}</p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100">
                <button
                  onClick={() => {
                    setEditingInst(inst);
                    setFeedback('');
                  }}
                  className="w-full py-2 rounded-xl bg-slate-100 hover:bg-p4c-navy hover:text-white text-xs font-bold text-slate-700 transition flex items-center justify-center space-x-1"
                >
                  <Edit2 className="w-3.5 h-3.5" />
                  <span>Redaktə Et</span>
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Edit Modal */}
      {editingInst && (
        <div className="fixed inset-0 bg-slate-950/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl space-y-4 animate-fade-in max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <h3 className="text-base font-bold text-slate-900">
                {editingInst.full_name ? 'Müəllimi Redaktə Et' : 'Yeni Müəllim'}
              </h3>
              <button
                onClick={() => setEditingInst(null)}
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
                <label className="block font-bold text-slate-700 uppercase mb-1">Ad və Soyad *</label>
                <input
                  type="text"
                  required
                  value={editingInst.full_name}
                  onChange={(e) => setEditingInst({ ...editingInst, full_name: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 font-semibold"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 uppercase mb-1">Vəzifə və ya Status *</label>
                <input
                  type="text"
                  required
                  value={editingInst.title}
                  onChange={(e) => setEditingInst({ ...editingInst, title: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border border-slate-300"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 uppercase mb-1">Müəllimin Fotosu</label>
                <div className="flex items-center space-x-3 mb-2">
                  {editingInst.photo_url && (
                    <img
                      src={editingInst.photo_url}
                      alt="Önbaxış"
                      className="w-14 h-14 rounded-full object-cover border-2 border-[#00B4D8] shadow-sm"
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
                            setEditingInst({ ...editingInst, photo_url: reader.result as string });
                          };
                          reader.readAsDataURL(file);
                        }
                      }}
                    />
                  </label>
                  {editingInst.photo_url && (
                    <button
                      type="button"
                      onClick={() =>
                        setEditingInst({
                          ...editingInst,
                          photo_url:
                            'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
                        })
                      }
                      className="px-2.5 py-2 text-[11px] text-slate-500 hover:text-red-600 bg-slate-50 hover:bg-red-50 rounded-xl border border-slate-200 transition"
                    >
                      Şəkli Sıfırla
                    </button>
                  )}
                </div>
                <input
                  type="text"
                  placeholder="və ya birbaşa şəkil linki (URL)"
                  value={editingInst.photo_url}
                  onChange={(e) => setEditingInst({ ...editingInst, photo_url: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border border-slate-300"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 uppercase mb-1">Təhsil və İxtisas</label>
                <input
                  type="text"
                  value={editingInst.education}
                  onChange={(e) => setEditingInst({ ...editingInst, education: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border border-slate-300"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 uppercase mb-1">P4C Təcrübəsi</label>
                <input
                  type="text"
                  value={editingInst.p4c_experience}
                  onChange={(e) => setEditingInst({ ...editingInst, p4c_experience: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border border-slate-300"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 uppercase mb-1">Qısa Bioqrafiya</label>
                <textarea
                  rows={3}
                  value={editingInst.bio}
                  onChange={(e) => setEditingInst({ ...editingInst, bio: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border border-slate-300"
                />
              </div>

              <div className="flex items-center justify-end space-x-2 pt-3 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setEditingInst(null)}
                  className="px-4 py-2 rounded-xl text-xs font-bold text-slate-500 hover:bg-slate-100"
                >
                  Ləğv Et
                </button>
                <button
                  type="submit"
                  disabled={saving}
                  className="px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-p4c-navy hover:bg-p4c-navy-light shadow transition disabled:bg-slate-400"
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
