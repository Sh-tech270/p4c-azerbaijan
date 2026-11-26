import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { getResources } from '@/lib/db';
import ResourcesCatalog from './ResourcesCatalog';
import { BookOpen, Download, ShieldCheck, Sparkles } from 'lucide-react';

export const revalidate = 0;

export default async function ResourcesPage() {
  const resources = await getResources();

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />

      <main className="flex-1 py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-100 text-[#0B357B] text-xs font-bold">
              <BookOpen className="w-3.5 h-3.5 text-[#00B4D8]" />
              <span>Rəsmi P4C Nəşrləri və Kitabxana</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
              Kitablar və Metodik Resurslar
            </h1>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Müəllimlər, fasilatatorlar, valideynlər və tədqiqatçılar üçün Azərbaycan dilində
              hazırlanmış rəsmi P4C bələdçiləri, fəlsəfə kitabları, atelye planları və elmi vəsaitləri pulsuz endirin.
            </p>
          </div>

          {/* Interactive Catalog Component */}
          <ResourcesCatalog initialResources={resources} />

          {/* Teacher Book Request Callout */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-1.5">
              <div className="flex items-center space-x-2 text-xs font-bold text-[#0B357B] uppercase">
                <ShieldCheck className="w-4 h-4 text-[#00B4D8]" />
                <span>Məktəb və Liseylər üçün Çap Nüsxələri</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                P4C dərsliklərini və kart dəstlərini fiziki çap formatında əldə etmək istəyirsiniz?
              </h3>
              <p className="text-xs text-slate-500 max-w-2xl">
                Təhsil müəssisələri və P4C klubları üçün xüsusi laminasiyalı dilemma kartları,
                iş dəftərləri və çap olunmuş metodiki bələdçiləri sifariş etmək üçün bizimlə əlaqə saxlayın.
              </p>
            </div>
            <a
              href="/elaqe"
              className="shrink-0 px-6 py-3.5 rounded-xl bg-[#0B357B] hover:bg-[#14499E] text-white text-xs font-bold transition shadow"
            >
              Bizimlə Əlaqə Saxlayın
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
