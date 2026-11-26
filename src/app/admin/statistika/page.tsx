'use client';

import React, { useState, useEffect } from 'react';
import { StatisticItem } from '@/lib/types';
import { BarChart3, Save, CheckCircle2 } from 'lucide-react';

export default function StatisticsAdminPage() {
  const [stats, setStats] = useState<StatisticItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [savingId, setSavingId] = useState<string | null>(null);
  const [feedback, setFeedback] = useState('');

  const loadData = async () => {
    try {
      const res = await fetch('/api/admin/stats');
      const data = await res.json();
      if (data.success) {
        setStats(data.stats);
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

  const handleChange = (id: string, field: keyof StatisticItem, value: any) => {
    setStats((prev) =>
      prev.map((s) => (s.id === id ? { ...s, [field]: value } : s))
    );
  };

  const handleSave = async (stat: StatisticItem) => {
    setSavingId(stat.id);
    setFeedback('');

    try {
      const res = await fetch('/api/admin/stats', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(stat),
      });
      const data = await res.json();
      if (data.success) {
        setFeedback(`«${stat.label}» uğurla yeniləndi!`);
        setTimeout(() => setFeedback(''), 3000);
      }
    } catch (e) {
      setFeedback('Xəta baş verdi');
    } finally {
      setSavingId(null);
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
          Statistik Göstəricilərin İdarəsi
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
          Ana səhifədə nümayiş olunan sayğacları və hesabat göstəricilərini birbaşa redaktə edin.
        </p>
      </div>

      {feedback && (
        <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold flex items-center space-x-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
          <span>{feedback}</span>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {loading ? (
          <div className="col-span-full p-10 text-center text-xs text-slate-400">Yüklənir...</div>
        ) : (
          stats.map((stat) => (
            <div
              key={stat.id}
              className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-sm space-y-4"
            >
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <span className="font-bold text-sm text-slate-900">{stat.label}</span>
                <span className="text-[10px] font-mono text-slate-400">{stat.key}</span>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-600 uppercase mb-1">Rəqəm</label>
                  <input
                    type="number"
                    value={stat.value}
                    onChange={(e) => handleChange(stat.id, 'value', Number(e.target.value))}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 font-extrabold text-lg text-slate-900"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-600 uppercase mb-1">Şəkilçi (+ və s.)</label>
                  <input
                    type="text"
                    value={stat.suffix}
                    onChange={(e) => handleChange(stat.id, 'suffix', e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 font-bold text-lg text-slate-900"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-600 uppercase mb-1">Başlıq Mətni</label>
                <input
                  type="text"
                  value={stat.label}
                  onChange={(e) => handleChange(stat.id, 'label', e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs font-medium"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-600 uppercase mb-1">Açıqlama</label>
                <input
                  type="text"
                  value={stat.description}
                  onChange={(e) => handleChange(stat.id, 'description', e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs"
                />
              </div>

              <button
                onClick={() => handleSave(stat)}
                disabled={savingId === stat.id}
                className="w-full py-2.5 rounded-xl font-bold text-xs text-white bg-p4c-navy hover:bg-p4c-navy-light shadow transition flex items-center justify-center space-x-2"
              >
                <Save className="w-3.5 h-3.5" />
                <span>{savingId === stat.id ? 'Yenilənir...' : 'Yadda Saxla'}</span>
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
