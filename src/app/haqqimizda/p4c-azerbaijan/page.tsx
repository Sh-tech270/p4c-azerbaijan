import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ShieldCheck, Target, Eye, Compass, Award, CheckCircle2 } from 'lucide-react';

export default function P4CAzerbaijanAboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />

      <main className="flex-1 py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-3">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-100 text-p4c-navy text-xs font-bold">
              <ShieldCheck className="w-3.5 h-3.5 text-p4c-cyan" />
              <span>Təşkilatın Rəsmi Profili</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
              P4C Azərbaycan Haqqında
            </h1>
            <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Azərbaycanda uşaqların, gənclərin və böyüklərin fəlsəfi təfəkkürünü və dialoq mədəniyyətini
              institusional səviyyədə inkişaf etdirən aparıcı milli mərkəz.
            </p>
          </div>

          {/* Mission & Vision Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-p4c-navy flex items-center justify-center">
                <Target className="w-6 h-6" />
              </div>
              <h2 className="text-xl font-bold text-slate-900">Missiyamız</h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                Azərbaycan təhsil mühitində tənqidi düşüncəni, Sokratik sualvermə vərdişini və demokratik
                müzakirə mədəniyyətini formalaşdırmaq; müəllim, şagird və valideynlər üçün fəlsəfəni gündəlik
                həyatın təbii alətinə çevirmək.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-cyan-50 text-p4c-cyan-dark flex items-center justify-center">
                <Eye className="w-6 h-6" />
              </div>
              <h2 className="text-xl font-bold text-slate-900">Vizyonumuz</h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                Hər bir məktəbdə fəlsəfi dialoq icmalarının mövcud olduğu, informasiya manipulyasiyalarına qarşı
                intellektual immunitet qazanmış, öz fikrini arqumentlə müdafiə edən və fərqliliklərə hörmətlə yanaşan
                gələcək nəsil yetişdirmək.
              </p>
            </div>
          </div>

          {/* Core Values */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/80 shadow-sm space-y-6">
            <h2 className="text-2xl font-bold text-slate-900 flex items-center space-x-2">
              <Compass className="w-6 h-6 text-p4c-cyan" />
              <span>Dəyərlərimiz və Fəaliyyət Prinsiplərimiz</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-1">
                <h4 className="font-bold text-sm text-slate-900">İntellektual Dürüstlük</h4>
                <p className="text-xs text-slate-600">
                  Dəlillərə və məntiqi arqumentlərə əsaslanan, doqmatizmdən uzaq obyektiv araşdırma.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-1">
                <h4 className="font-bold text-sm text-slate-900">Bərabərlik və Hörmət</h4>
                <p className="text-xs text-slate-600">
                  Yaşından və statusundan asılı olmayaraq hər bir iştirakçının fikrinə dəyər vermək.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-1">
                <h4 className="font-bold text-sm text-slate-900">Yerli Mədəni Uyğunlaşma</h4>
                <p className="text-xs text-slate-600">
                  P4C metodologiyasını Azərbaycan ədəbiyyatı, nağılları və milli kontekstinə peşəkar adaptasiya etmək.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-1">
                <h4 className="font-bold text-sm text-slate-900">Beynəlxalq Standartlar</h4>
                <p className="text-xs text-slate-600">
                  SAPERE və ICPIC kimi qlobal P4C təşkilatlarının sertifikasiya və etik kodekslərinə sadiqlik.
                </p>
              </div>
            </div>
          </div>

          {/* Strategic Goals in Azerbaijan */}
          <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-10 shadow-xl space-y-4">
            <h2 className="text-2xl font-bold">Azərbaycan Üzrə Strateji Hədəflərimiz</h2>
            <ul className="space-y-3 text-sm text-slate-300">
              <li className="flex items-start space-x-3">
                <CheckCircle2 className="w-4 h-4 text-p4c-cyan shrink-0 mt-0.5" />
                <span>Məktəbəqədər və ümumtəhsil məktəblərində çalışan 1,000+ müəllimə P4C fasilatatorluq təlimlərinin keçirilməsi.</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle2 className="w-4 h-4 text-p4c-cyan shrink-0 mt-0.5" />
                <span>Azərbaycan dilində milli P4C dərslik, stimul və bələdçi kitablarının nəşr olunması.</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle2 className="w-4 h-4 text-p4c-cyan shrink-0 mt-0.5" />
                <span>Region məktəblərində şagirdlər üçün pulsuz fəlsəfə və tənqidi təfəkkür klublarının təşkili.</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle2 className="w-4 h-4 text-p4c-cyan shrink-0 mt-0.5" />
                <span>Təhsil Nazirliyi və institutlarla birgə P4C-nin məktəb fənlərinə inteqrasiyası modelinin tətbiqi.</span>
              </li>
            </ul>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
