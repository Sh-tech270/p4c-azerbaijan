import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { BookOpen, Users, Brain, Heart, Sparkles, CheckCircle2 } from 'lucide-react';

export default function P4CAboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />

      <main className="flex-1 py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-3">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-100 text-p4c-navy text-xs font-bold">
              <BookOpen className="w-3.5 h-3.5 text-p4c-cyan" />
              <span>Fəlsəfi və Pedaqoji Metodologiya</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
              Philosophy for Children (P4C) Nədir?
            </h1>
            <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Uşaqlar, gənclər və böyüklər üçün fəlsəfə — düşüncəni əzbərçilikdən azad edən,
              müstəqil mühakimə və dialoq mədəniyyətini formalaşdıran qlobal təhsil hərəkatıdır.
            </p>
          </div>

          {/* Historical & Scientific Foundation */}
          <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-4">
            <h2 className="text-2xl font-bold text-slate-900">1. Tarixi və Elmi Əsasları</h2>
            <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
              Philosophy for Children (P4C) 1970-ci illərin əvvəllərində Kolumbiya Universitetinin fəlsəfə professoru{' '}
              <strong>Matthew Lipman</strong> və pedaqoq <strong>Ann Margaret Sharp</strong> tərəfindən yaradılmışdır.
              Lipman müşahidə etmişdir ki, universitet tələbələri tənqidi təfəkkür və arqumentasiya baxımından çətinlik çəkirlər,
              çünki ənənəvi məktəb təhsili uşaqlara düşünməyi deyil, yalnız hazır informasiyanı yadda saxlamağı öyrədir.
            </p>
            <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
              P4C sübut edir ki, uşaqlar təbii maraq və sualvermə instinktinə malikdirlər. Fəlsəfə tarixi böyük mütəfəkkirlərin
              kitablarını oxutmaq deyil, uşağın özünün fəlsəfə etməsi (philosophizing) prosesinə çevrilməlidir.
            </p>
          </div>

          {/* The 4C Model */}
          <div className="space-y-6">
            <div className="text-center">
              <span className="text-xs font-bold text-p4c-cyan uppercase tracking-wider">
                İdrak İnkişafının 4 Dayağı
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
                4C Düşünmə Modeli
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Critical */}
              <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-p4c-navy flex items-center justify-center">
                  <Brain className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">1. Critical Thinking (Tənqidi Düşüncə)</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Arqumentləri təhlil etmək, məntiqi xətaları aşkar etmək, fərziyyələri yoxlamaq və
                  dəlillərə əsaslanan qərarlar vermək bacarığı.
                </p>
              </div>

              {/* Creative */}
              <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-cyan-50 text-p4c-cyan-dark flex items-center justify-center">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">2. Creative Thinking (Yaradıcı Düşüncə)</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Standart qəliblərdən kənara çıxmaq, yeni ideyalar, alternativ fərziyyələr və metaforalar
                  vasitəsilə fərqli baxış bucaqları yaratmaq.
                </p>
              </div>

              {/* Collaborative */}
              <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-700 flex items-center justify-center">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">3. Collaborative Thinking (Əməkdaşlıq Düşüncəsi)</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Müzakirəni rəqabətə deyil, ortaq həqiqət axtarışına çevirmək; bir-birinin fikirlərindən yeni
                  mənalar inşa etmək və qrup zəkasına güvənmək.
                </p>
              </div>

              {/* Caring */}
              <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center">
                  <Heart className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">4. Caring Thinking (Qayğıkeş Düşüncə)</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Başqalarının hisslərinə, dəyərlərinə və fikirlərinə empatiya ilə yanaşmaq;
                  dialoq iştirakçısına hörmət bəsləmək və ədalətli mühit qorumaq.
                </p>
              </div>
            </div>
          </div>

          {/* Community of Inquiry Section */}
          <div id="community-of-inquiry" className="bg-gradient-to-br from-blue-900 to-p4c-navy text-white rounded-3xl p-8 sm:p-12 shadow-xl space-y-6">
            <span className="text-xs font-bold text-p4c-cyan uppercase tracking-wider">
              Əsas Metodoloji Mexanizm
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Community of Inquiry (Fəlsəfi Araşdırma İcması)
            </h2>
            <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
              Community of Inquiry modelində ənənəvi sinif partaları dairəvi şəkildə düzülür.
              Müəllim avtoritar bilik mənbəyi kimi deyil, prosesi yönləndirən <strong>fasilatator</strong> kimi çıxış edir.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/10 text-xs text-slate-200 space-y-1">
                <strong className="text-white block text-sm">Fəlsəfi Stimul</strong>
                <span>Hekayə, rəsm, qısa video və ya real həyat dilemmasından istifadə olunur.</span>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/10 text-xs text-slate-200 space-y-1">
                <strong className="text-white block text-sm">Sualvermə</strong>
                <span>Uşaqlar özləri stimulla bağlı maraqlı fəlsəfi suallar təklif edib səsvermə ilə seçirlər.</span>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/10 text-xs text-slate-200 space-y-1">
                <strong className="text-white block text-sm">Dialoq və Refleksiya</strong>
                <span>Qrup qaydalar çərçivəsində dərin müzakirə aparır və sonda əldə edilən fikirlər ümumiləşdirilir.</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
