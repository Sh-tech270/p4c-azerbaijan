import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import InstructorCard from '@/components/InstructorCard';
import { getInstructors } from '@/lib/db';
import { Users, Award, ShieldCheck } from 'lucide-react';

export const revalidate = 0;

export default async function InstructorsPage() {
  const instructors = await getInstructors();

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />

      <main className="flex-1 py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-100 text-p4c-navy text-xs font-bold">
              <Users className="w-3.5 h-3.5 text-p4c-cyan" />
              <span>Peşəkar Təlimçi Heyətimiz</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
              Müəllimlərimiz və Təlimçilərimiz
            </h1>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Beynəlxalq akkreditasiyalı, fəlsəfə və pedaqoji təcrübəyə malik, Azərbaycanda Community of Inquiry
              mədəniyyətini quran peşəkar fasilatatorlarımızla tanış olun.
            </p>
          </div>

          {/* Instructors Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {instructors.map((inst) => (
              <InstructorCard key={inst.id} instructor={inst} />
            ))}
          </div>

          {/* Callout */}
          <div className="mt-16 bg-white rounded-3xl p-8 border border-slate-200/80 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-1">
              <h3 className="text-lg font-bold text-slate-900">Siz də P4C Fasilatatoru və Təlimçisi olmaq istəyirsiniz?</h3>
              <p className="text-xs text-slate-500">
                1-ci, 2-ci və 3-cü səviyyə mərhələli təlimçi proqramlarımızda iştirak edərək rəsmi təlimçi şəbəkəmizə qoşulun.
              </p>
            </div>
            <a
              href="/kurslar?track=trainer"
              className="shrink-0 px-6 py-3 rounded-xl bg-p4c-navy hover:bg-p4c-navy-light text-white text-xs font-bold transition shadow"
            >
              Təlimçi Proqramlarına Bax
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
