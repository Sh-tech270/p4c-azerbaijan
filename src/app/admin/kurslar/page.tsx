'use client';

import React, { useState, useEffect } from 'react';
import { Course } from '@/lib/types';
import {
  BookOpen,
  Plus,
  Edit2,
  CheckCircle2,
  Clock,
  MapPin,
  X,
  Award,
  Layers,
} from 'lucide-react';

export default function CoursesAdminPage() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingCourse, setEditingCourse] = useState<Course | null>(null);
  const [saving, setSaving] = useState(false);
  const [feedback, setFeedback] = useState('');

  const loadCourses = async () => {
    try {
      const res = await fetch('/api/admin/courses');
      const data = await res.json();
      if (data.success) {
        setCourses(data.courses);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadCourses();
  }, []);

  const handleCreateNew = () => {
    const newCourse: Course = {
      id: 'course-' + Date.now().toString(),
      slug: 'yeni-kurs-' + Math.floor(Math.random() * 1000),
      title: '',
      track: 'participant',
      duration_hours: 15,
      format: 'Onlayn',
      price: null,
      target_audience: 'Məktəblilər və ya müəllimlər',
      short_description: '',
      long_description: '',
      learning_outcomes: ['Tənqidi düşünmə vərdişi', 'Dialoq mədəniyyəti'],
      syllabus: [{ module: '1-ci Modul', topics: ['Giriş və fəlsəfi suallar'] }],
      requirements: '',
      next_batch: 'Yaxın tarixdə',
      is_active: true,
      faqs: [],
    };
    setEditingCourse(newCourse);
    setFeedback('');
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingCourse || !editingCourse.title) return;

    setSaving(true);
    setFeedback('');

    try {
      const res = await fetch('/api/admin/courses', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(editingCourse),
      });
      const data = await res.json();
      if (data.success) {
        setFeedback('Kurs uğurla yadda saxlanıldı!');
        setCourses((prev) => {
          const idx = prev.findIndex((c) => c.id === data.course.id);
          if (idx >= 0) {
            const updated = [...prev];
            updated[idx] = data.course;
            return updated;
          }
          return [data.course, ...prev];
        });
        setTimeout(() => setEditingCourse(null), 1200);
      }
    } catch (err) {
      setFeedback('Yadda saxlanılarkən xəta baş verdi.');
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Kurs və Proqramların İdarəsi
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
            Kursların məzmununu, saatlarını, qiymətlərini (və ya qiymətin gizlədilməsini) idarə edin.
          </p>
        </div>

        <button
          onClick={handleCreateNew}
          className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-xl font-bold text-xs text-white bg-p4c-navy hover:bg-p4c-navy-light shadow-md transition"
        >
          <Plus className="w-4 h-4" />
          <span>Yeni Kurs Əlavə Et</span>
        </button>
      </div>

      {/* Courses List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {loading ? (
          <div className="col-span-full p-12 text-center text-xs text-slate-400">Yüklənir...</div>
        ) : (
          courses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-sm hover:shadow-md transition flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span
                    className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full ${
                      course.track === 'trainer'
                        ? 'bg-blue-100 text-p4c-navy'
                        : 'bg-cyan-100 text-p4c-cyan-dark'
                    }`}
                  >
                    {course.track === 'trainer' ? 'Təlimçi Sertifikasiyası' : 'Fəlsəfə Atelyesi'}
                  </span>

                  <span className="text-xs font-semibold text-slate-500">
                    {course.duration_hours} Saat
                  </span>
                </div>

                <h3 className="font-bold text-base text-slate-900 leading-snug">{course.title}</h3>
                <p className="text-xs text-slate-500 line-clamp-2">{course.short_description}</p>

                <div className="pt-2 border-t border-slate-100 text-xs text-slate-600 flex items-center justify-between">
                  <span>Format: <strong>{course.format}</strong></span>
                  <span>
                    Qiymət:{' '}
                    <strong>{course.price ? `${course.price} AZN` : 'Gizli (Göstərilmir)'}</strong>
                  </span>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                <span
                  className={`text-[11px] font-bold ${
                    course.is_active ? 'text-emerald-600' : 'text-slate-400'
                  }`}
                >
                  {course.is_active ? '● Aktivdir' : '○ Deaktivdir'}
                </span>

                <button
                  onClick={() => {
                    setEditingCourse(course);
                    setFeedback('');
                  }}
                  className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-p4c-navy hover:text-white text-slate-700 font-bold transition text-xs flex items-center space-x-1"
                >
                  <Edit2 className="w-3.5 h-3.5" />
                  <span>Redaktə Et</span>
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Course Edit/Create Modal */}
      {editingCourse && (
        <div className="fixed inset-0 bg-slate-950/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-2xl w-full shadow-2xl space-y-5 animate-fade-in max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <h3 className="text-lg font-bold text-slate-900">
                {editingCourse.title ? 'Kursu Redaktə Et' : 'Yeni Kurs Yarat'}
              </h3>
              <button
                onClick={() => setEditingCourse(null)}
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

            <form onSubmit={handleSave} className="space-y-4 text-xs">
              <div>
                <label className="block font-bold text-slate-700 uppercase mb-1">Kursun Adı *</label>
                <input
                  type="text"
                  required
                  value={editingCourse.title}
                  onChange={(e) => setEditingCourse({ ...editingCourse, title: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 text-sm font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-p4c-cyan"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block font-bold text-slate-700 uppercase mb-1">İstiqamət</label>
                  <select
                    value={editingCourse.track}
                    onChange={(e) =>
                      setEditingCourse({
                        ...editingCourse,
                        track: e.target.value as 'trainer' | 'participant',
                      })
                    }
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 font-medium bg-white"
                  >
                    <option value="trainer">Təlimçi Sertifikasiyası</option>
                    <option value="participant">Fəlsəfə Atelyesi (İştirakçı)</option>
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 uppercase mb-1">Müddət (Saat) *</label>
                  <input
                    type="number"
                    required
                    value={editingCourse.duration_hours}
                    onChange={(e) =>
                      setEditingCourse({ ...editingCourse, duration_hours: Number(e.target.value) })
                    }
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 font-semibold"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 uppercase mb-1">Format</label>
                  <select
                    value={editingCourse.format}
                    onChange={(e) =>
                      setEditingCourse({
                        ...editingCourse,
                        format: e.target.value as 'Onlayn' | 'Əyani' | 'Hibrid',
                      })
                    }
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 font-medium bg-white"
                  >
                    <option value="Onlayn">Onlayn</option>
                    <option value="Əyani">Əyani</option>
                    <option value="Hibrid">Hibrid</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-700 uppercase mb-1">
                    Qiymət (AZN) — Boş saxlasanız, saytda gizlənir
                  </label>
                  <input
                    type="number"
                    placeholder="Qiymət göstərilmirsə boş saxlayın"
                    value={editingCourse.price ?? ''}
                    onChange={(e) =>
                      setEditingCourse({
                        ...editingCourse,
                        price: e.target.value ? Number(e.target.value) : null,
                      })
                    }
                    className="w-full px-3 py-2 rounded-xl border border-slate-300"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 uppercase mb-1">Növbəti Başlama Tarixi</label>
                  <input
                    type="text"
                    placeholder="Məs: 15 Dekabr 2026"
                    value={editingCourse.next_batch || ''}
                    onChange={(e) => setEditingCourse({ ...editingCourse, next_batch: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300"
                  />
                </div>
              </div>

              <div>
                <label className="block font-bold text-slate-700 uppercase mb-1">Kimlər Üçündür (Hədəf Kütlə)</label>
                <input
                  type="text"
                  value={editingCourse.target_audience}
                  onChange={(e) =>
                    setEditingCourse({ ...editingCourse, target_audience: e.target.value })
                  }
                  className="w-full px-3 py-2 rounded-xl border border-slate-300"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 uppercase mb-1">Qısa Təqdimat</label>
                <textarea
                  rows={2}
                  value={editingCourse.short_description}
                  onChange={(e) =>
                    setEditingCourse({ ...editingCourse, short_description: e.target.value })
                  }
                  className="w-full px-3 py-2 rounded-xl border border-slate-300"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 uppercase mb-1">Geniş Məlumat</label>
                <textarea
                  rows={3}
                  value={editingCourse.long_description}
                  onChange={(e) =>
                    setEditingCourse({ ...editingCourse, long_description: e.target.value })
                  }
                  className="w-full px-3 py-2 rounded-xl border border-slate-300"
                />
              </div>

              <div className="flex items-center space-x-2 pt-2">
                <input
                  type="checkbox"
                  id="course_active"
                  checked={editingCourse.is_active}
                  onChange={(e) =>
                    setEditingCourse({ ...editingCourse, is_active: e.target.checked })
                  }
                  className="w-4 h-4 text-p4c-navy rounded border-slate-300"
                />
                <label htmlFor="course_active" className="text-xs font-semibold text-slate-800">
                  Kurs aktivdir və saytda nümayiş etdirilsin
                </label>
              </div>

              <div className="flex items-center justify-end space-x-2 pt-4 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setEditingCourse(null)}
                  className="px-4 py-2 rounded-xl text-xs font-bold text-slate-500 hover:bg-slate-100"
                >
                  Ləğv Et
                </button>
                <button
                  type="submit"
                  disabled={saving}
                  className="px-6 py-2.5 rounded-xl text-xs font-bold text-white bg-p4c-navy hover:bg-p4c-navy-light shadow transition disabled:bg-slate-400"
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
