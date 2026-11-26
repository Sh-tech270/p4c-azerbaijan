'use client';

import React, { useState, useEffect } from 'react';
import { SiteSettings } from '@/lib/types';
import {
  Settings,
  Save,
  CheckCircle2,
  ShieldCheck,
  Phone,
  Mail,
  Globe,
  LayoutTemplate,
  BookOpen,
} from 'lucide-react';

export default function SettingsAdminPage() {
  const [settings, setSettings] = useState<SiteSettings | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [feedback, setFeedback] = useState('');

  const loadData = async () => {
    try {
      const res = await fetch('/api/admin/settings');
      const data = await res.json();
      if (data.success) {
        setSettings(data.settings);
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

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!settings) return;

    setSaving(true);
    setFeedback('');

    try {
      const res = await fetch('/api/admin/settings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(settings),
      });
      const data = await res.json();
      if (data.success) {
        setFeedback('Sayt parametrləri uğurla yadda saxlanıldı!');
        setTimeout(() => setFeedback(''), 3000);
      }
    } catch (e) {
      setFeedback('Xəta baş verdi');
    } finally {
      setSaving(false);
    }
  };

  if (loading || !settings) {
    return <div className="p-10 text-center text-xs text-slate-400">Yüklənir...</div>;
  }

  return (
    <div className="space-y-6 max-w-4xl">
      <div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
          Saytın Ümumi Parametrləri
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
          Təşkilatın əlaqə məlumatlarını, sosial şəbəkə linklərini və ana səhifə mətnlərini idarə edin.
        </p>
      </div>

      {feedback && (
        <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold flex items-center space-x-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
          <span>{feedback}</span>
        </div>
      )}

      <form onSubmit={handleSave} className="space-y-6 text-xs">
        {/* Organization & Branding */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm space-y-4">
          <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center space-x-2">
            <ShieldCheck className="w-4 h-4 text-p4c-navy" />
            <span>Təşkilat və Brend</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-bold text-slate-700 uppercase mb-1">Rəsmi Ad</label>
              <input
                type="text"
                value={settings.org_name}
                onChange={(e) => setSettings({ ...settings, org_name: e.target.value })}
                className="w-full px-3 py-2.5 rounded-xl border border-slate-300 font-semibold"
              />
            </div>

            <div>
              <label className="block font-bold text-slate-700 uppercase mb-1">Sloqan / Tagline</label>
              <input
                type="text"
                value={settings.tagline}
                onChange={(e) => setSettings({ ...settings, tagline: e.target.value })}
                className="w-full px-3 py-2.5 rounded-xl border border-slate-300"
              />
            </div>
          </div>
        </div>

        {/* Hero Section Texts */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm space-y-4">
          <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center space-x-2">
            <Globe className="w-4 h-4 text-p4c-cyan" />
            <span>Ana Səhifə (Hero) Mətnləri</span>
          </h2>

          <div>
            <label className="block font-bold text-slate-700 uppercase mb-1">Hero Başlığı</label>
            <input
              type="text"
              value={settings.hero_title}
              onChange={(e) => setSettings({ ...settings, hero_title: e.target.value })}
              className="w-full px-3 py-2.5 rounded-xl border border-slate-300 font-bold text-slate-900"
            />
          </div>

          <div>
            <label className="block font-bold text-slate-700 uppercase mb-1">Hero Açıqlaması</label>
            <textarea
              rows={2}
              value={settings.hero_subtitle}
              onChange={(e) => setSettings({ ...settings, hero_subtitle: e.target.value })}
              className="w-full px-3 py-2 rounded-xl border border-slate-300"
            />
          </div>

          <div>
            <label className="block font-bold text-slate-700 uppercase mb-1">Badge (Yuxarı lövhəcik)</label>
            <input
              type="text"
              value={settings.hero_badge}
              onChange={(e) => setSettings({ ...settings, hero_badge: e.target.value })}
              className="w-full px-3 py-2 rounded-xl border border-slate-300"
            />
          </div>
        </div>

        {/* Section Headings & Subtitles */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm space-y-5">
          <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center space-x-2">
            <LayoutTemplate className="w-4 h-4 text-[#0B357B]" />
            <span>Ana Səhifə Bölmə Başlıqları</span>
          </h2>
          <p className="text-xs text-slate-500">
            Ana səhifədəki hər bir blokun əsas başlığını və izah mətnini buradan rahatlıqla dəyişə bilərsiniz.
          </p>

          <div className="space-y-4 pt-2">
            {/* Section 1: Haqqında */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-3">
              <div className="font-bold text-slate-800 text-xs uppercase text-[#0B357B]">
                1. P4C Metodologiyası (Haqqında Bölməsi)
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold text-slate-600 mb-1">Bölmə Başlığı</label>
                  <input
                    type="text"
                    value={settings.section_about_title || ''}
                    placeholder="Philosophy for Children: Əzbərçilikdən Dərin Fəlsəfi Təfəkkürə"
                    onChange={(e) => setSettings({ ...settings, section_about_title: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 bg-white"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-slate-600 mb-1">Bölmə Açıqlaması</label>
                  <input
                    type="text"
                    value={settings.section_about_subtitle || ''}
                    placeholder="P4C uşaqların doğuşdan gələn maraq və sualvermə qabiliyyətini inkişaf etdirir..."
                    onChange={(e) => setSettings({ ...settings, section_about_subtitle: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 bg-white"
                  />
                </div>
              </div>
            </div>

            {/* Section 2: Təşkilat Missiyası */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-3">
              <div className="font-bold text-slate-800 text-xs uppercase text-[#0B357B]">
                2. P4C Azərbaycan Missiyası
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold text-slate-600 mb-1">Bölmə Başlığı</label>
                  <input
                    type="text"
                    value={settings.section_mission_title || ''}
                    placeholder="Azərbaycan Təhsil Mühitində Yeni Bir Dialoq Mədəniyyəti"
                    onChange={(e) => setSettings({ ...settings, section_mission_title: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 bg-white"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-slate-600 mb-1">Bölmə Açıqlaması</label>
                  <input
                    type="text"
                    value={settings.section_mission_subtitle || ''}
                    placeholder="İnformasiya bolluğu və süni intellekt əsrində əzbərçi bilik köhnəlir..."
                    onChange={(e) => setSettings({ ...settings, section_mission_subtitle: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 bg-white"
                  />
                </div>
              </div>
            </div>

            {/* Section 3: Fəaliyyətlər */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-3">
              <div className="font-bold text-slate-800 text-xs uppercase text-[#0B357B]">
                3. Fəaliyyət Sahələri
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold text-slate-600 mb-1">Bölmə Başlığı</label>
                  <input
                    type="text"
                    value={settings.section_activities_title || ''}
                    placeholder="Fəaliyyətimizin Əsas İstiqamətləri"
                    onChange={(e) => setSettings({ ...settings, section_activities_title: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 bg-white"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-slate-600 mb-1">Bölmə Açıqlaması</label>
                  <input
                    type="text"
                    value={settings.section_activities_subtitle || ''}
                    placeholder="Təlimçi hazırlığı, məktəb dərnəkləri və valideyn atelyeləri..."
                    onChange={(e) => setSettings({ ...settings, section_activities_subtitle: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 bg-white"
                  />
                </div>
              </div>
            </div>

            {/* Section 4: Kurslar */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-3">
              <div className="font-bold text-slate-800 text-xs uppercase text-[#0B357B]">
                4. Kurslar və Tədris Proqramları
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold text-slate-600 mb-1">Bölmə Başlığı</label>
                  <input
                    type="text"
                    value={settings.section_courses_title || ''}
                    placeholder="Seçilmiş Kurs və Atelyelər"
                    onChange={(e) => setSettings({ ...settings, section_courses_title: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 bg-white"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-slate-600 mb-1">Bölmə Açıqlaması</label>
                  <input
                    type="text"
                    value={settings.section_courses_subtitle || ''}
                    placeholder="Təlimçi sertifikasiyası və fəlsəfə atelyeləri proqramları..."
                    onChange={(e) => setSettings({ ...settings, section_courses_subtitle: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 bg-white"
                  />
                </div>
              </div>
            </div>

            {/* Section 5: Müəllimlər */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-3">
              <div className="font-bold text-slate-800 text-xs uppercase text-[#0B357B]">
                5. Müəllimlər və Təlimçilər
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold text-slate-600 mb-1">Bölmə Başlığı</label>
                  <input
                    type="text"
                    value={settings.section_instructors_title || ''}
                    placeholder="Müəllimlərimiz və Təlimçilərimiz"
                    onChange={(e) => setSettings({ ...settings, section_instructors_title: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 bg-white"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-slate-600 mb-1">Bölmə Açıqlaması</label>
                  <input
                    type="text"
                    value={settings.section_instructors_subtitle || ''}
                    placeholder="Azərbaycanda P4C təlimçiləri və fasilatatorları..."
                    onChange={(e) => setSettings({ ...settings, section_instructors_subtitle: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 bg-white"
                  />
                </div>
              </div>
            </div>

            {/* Section 6: Resurslar və Kitablar */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-3">
              <div className="font-bold text-slate-800 text-xs uppercase text-[#0B357B]">
                6. Kitablar və Resurslar
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold text-slate-600 mb-1">Bölmə Başlığı</label>
                  <input
                    type="text"
                    value={settings.section_resources_title || ''}
                    placeholder="Kitablar və Metodik Resurslar"
                    onChange={(e) => setSettings({ ...settings, section_resources_title: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 bg-white"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-slate-600 mb-1">Bölmə Açıqlaması</label>
                  <input
                    type="text"
                    value={settings.section_resources_subtitle || ''}
                    placeholder="Azərbaycan dilində rəsmi P4C bələdçiləri və vəsaitlər..."
                    onChange={(e) => setSettings({ ...settings, section_resources_subtitle: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 bg-white"
                  />
                </div>
              </div>
            </div>

            {/* Section 7: Layihələr */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-3">
              <div className="font-bold text-slate-800 text-xs uppercase text-[#0B357B]">
                7. Layihələrimiz
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold text-slate-600 mb-1">Bölmə Başlığı</label>
                  <input
                    type="text"
                    value={settings.section_projects_title || ''}
                    placeholder="Layihələrimiz"
                    onChange={(e) => setSettings({ ...settings, section_projects_title: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 bg-white"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-slate-600 mb-1">Bölmə Açıqlaması</label>
                  <input
                    type="text"
                    value={settings.section_projects_subtitle || ''}
                    placeholder="Məktəb və dərnəklərdəki fəlsəfi təşəbbüslərimiz..."
                    onChange={(e) => setSettings({ ...settings, section_projects_subtitle: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 bg-white"
                  />
                </div>
              </div>
            </div>

            {/* Section 8: Xəbərlər */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-3">
              <div className="font-bold text-slate-800 text-xs uppercase text-[#0B357B]">
                8. Xəbərlər və Bloq
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold text-slate-600 mb-1">Bölmə Başlığı</label>
                  <input
                    type="text"
                    value={settings.section_news_title || ''}
                    placeholder="Son Xəbərlər və Məqalələr"
                    onChange={(e) => setSettings({ ...settings, section_news_title: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 bg-white"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-slate-600 mb-1">Bölmə Açıqlaması</label>
                  <input
                    type="text"
                    value={settings.section_news_subtitle || ''}
                    placeholder="P4C dünyasından yeniliklər və elanlar..."
                    onChange={(e) => setSettings({ ...settings, section_news_subtitle: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 bg-white"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm space-y-4">
          <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center space-x-2">
            <Phone className="w-4 h-4 text-emerald-600" />
            <span>Əlaqə Məlumatları</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-bold text-slate-700 uppercase mb-1">Telefon</label>
              <input
                type="text"
                value={settings.phone}
                onChange={(e) => setSettings({ ...settings, phone: e.target.value })}
                className="w-full px-3 py-2 rounded-xl border border-slate-300 font-mono"
              />
            </div>

            <div>
              <label className="block font-bold text-slate-700 uppercase mb-1">WhatsApp Nömrəsi</label>
              <input
                type="text"
                value={settings.whatsapp}
                onChange={(e) => setSettings({ ...settings, whatsapp: e.target.value })}
                className="w-full px-3 py-2 rounded-xl border border-slate-300 font-mono"
              />
            </div>

            <div>
              <label className="block font-bold text-slate-700 uppercase mb-1">Rəsmi E-poçt</label>
              <input
                type="email"
                value={settings.email}
                onChange={(e) => setSettings({ ...settings, email: e.target.value })}
                className="w-full px-3 py-2 rounded-xl border border-slate-300 font-medium"
              />
            </div>

            <div>
              <label className="block font-bold text-slate-700 uppercase mb-1">Ünvan</label>
              <input
                type="text"
                value={settings.address}
                onChange={(e) => setSettings({ ...settings, address: e.target.value })}
                className="w-full px-3 py-2 rounded-xl border border-slate-300"
              />
            </div>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm space-y-4">
          <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
            Sosial Şəbəkələr
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-bold text-slate-700 uppercase mb-1">Instagram Linki</label>
              <input
                type="url"
                value={settings.instagram}
                onChange={(e) => setSettings({ ...settings, instagram: e.target.value })}
                className="w-full px-3 py-2 rounded-xl border border-slate-300"
              />
            </div>

            <div>
              <label className="block font-bold text-slate-700 uppercase mb-1">Facebook Linki</label>
              <input
                type="url"
                value={settings.facebook}
                onChange={(e) => setSettings({ ...settings, facebook: e.target.value })}
                className="w-full px-3 py-2 rounded-xl border border-slate-300"
              />
            </div>

            <div>
              <label className="block font-bold text-slate-700 uppercase mb-1">LinkedIn Linki</label>
              <input
                type="url"
                value={settings.linkedin}
                onChange={(e) => setSettings({ ...settings, linkedin: e.target.value })}
                className="w-full px-3 py-2 rounded-xl border border-slate-300"
              />
            </div>

            <div>
              <label className="block font-bold text-slate-700 uppercase mb-1">YouTube Linki</label>
              <input
                type="url"
                value={settings.youtube}
                onChange={(e) => setSettings({ ...settings, youtube: e.target.value })}
                className="w-full px-3 py-2 rounded-xl border border-slate-300"
              />
            </div>
          </div>
        </div>

        <button
          type="submit"
          disabled={saving}
          className="w-full py-4 rounded-xl font-bold text-sm text-white bg-p4c-navy hover:bg-p4c-navy-light shadow-lg transition flex items-center justify-center space-x-2"
        >
          <Save className="w-4 h-4" />
          <span>{saving ? 'Yadda saxlanılır...' : 'Bütün Parametrləri Yadda Saxla'}</span>
        </button>
      </form>
    </div>
  );
}
