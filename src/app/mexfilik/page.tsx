import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Shield, Lock, Eye, CheckCircle2 } from 'lucide-react';

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />

      <main className="flex-1 py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-10">
          <div className="text-center space-y-3">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-100 text-p4c-navy text-xs font-bold">
              <Lock className="w-3.5 h-3.5 text-p4c-cyan" />
              <span>Hüquqi Təminat</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
              Məxfilik Siyasəti və Fərdi Məlumatların Qorunması
            </h1>
            <p className="text-slate-500 text-xs sm:text-sm">
              Son yenilənmə tarixi: 21 Noyabr 2026
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-sm space-y-8 text-slate-700 text-sm leading-relaxed">
            <section className="space-y-3">
              <h2 className="text-lg font-bold text-slate-900">1. Ümumi Müddəalar</h2>
              <p>
                «P4C Azərbaycan» (bundan sonra «Təşkilat») istifadəçilərin məxfiliyinə və fərdi məlumatlarının
                təhlükəsizliyinə xüsusi həssaslıqla yanaşır. Bu Məxfilik Siyasəti sayt vasitəsilə toplanan məlumatların
                hansı məqsədlərlə istifadə olunduğunu və necə qorunduğunu müəyyən edir.
              </p>
              <p>
                Platformamız fəaliyyətini Azərbaycan Respublikasının «Fərdi məlumatlar haqqında» Qanununa və
                beynəlxalq standartlara tam uyğun olaraq həyata keçirir.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-slate-900">2. Toplanan Fərdi Məlumatlar</h2>
              <p>Saytımızda kurslara müraciət və ya əlaqə forması vasitəsilə yalnız zəruri məlumatlar toplanır:</p>
              <ul className="list-disc pl-5 space-y-1 text-slate-600">
                <li>Ad və Soyad;</li>
                <li>Əlaqə telefon nömrəsi və WhatsApp;</li>
                <li>E-poçt ünvanı;</li>
                <li>Yaş qrupu və təmsil olunan təhsil müəssisəsi;</li>
                <li>Kursa müraciət motivasiyası.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-slate-900">3. Uşaqların Məlumatlarının Xüsusi Qorunması</h2>
              <p>
                P4C uşaqlarla birbaşa çalışan təhsil təşəbbüsü olduğu üçün azyaşlı iştirakçılara aid məlumatların
                toplanması, işlənməsi və foto/video materiallarının dərc edilməsi yalnız onların valideynlərinin və ya
                qanuni nümayəndələrinin yazılı razılığı əsasında mümkündür.
              </p>
              <p>
                16 yaşdan aşağı şəxslərin müraciəti zamanı valideyn və ya qəyyum ilə birbaşa əlaqə yaradılır.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-slate-900">4. Məlumatların Üçüncü Tərəflərə Verilməməsi</h2>
              <p>
                Toplanan heç bir fərdi məlumat heç bir halda üçüncü şəxslərə, kommersiya şirkətlərinə və ya
                reklam agentliklərinə satılmır və ötürülmür. Məlumatlar yalnız P4C kurslarının təşkili və
                tədris prosesinin idarə edilməsi üçün istifadə olunur.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-slate-900">5. Əlaqə</h2>
              <p>
                Fərdi məlumatlarınızın dəyişdirilməsi və ya silinməsi ilə bağlı istənilən vaxt{' '}
                <a href="mailto:info@p4cazerbaijan.az" className="text-p4c-navy font-bold underline">
                  info@p4cazerbaijan.az
                </a>{' '}
                ünvanına müraciət edə bilərsiniz.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
