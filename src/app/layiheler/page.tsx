import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { getProjects } from '@/lib/db';
import { Briefcase, Calendar, Users, Award, CheckCircle2 } from 'lucide-react';

export const revalidate = 0;

export default async function ProjectsPage() {
  const projects = await getProjects();

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Aktiv':
        return 'bg-emerald-100 text-emerald-800 border-emerald-200';
      case 'Tamamlanmış':
        return 'bg-blue-100 text-p4c-navy border-blue-200';
      default:
        return 'bg-amber-100 text-amber-800 border-amber-200';
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />

      <main className="flex-1 py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-100 text-p4c-navy text-xs font-bold">
              <Briefcase className="w-3.5 h-3.5 text-p4c-cyan" />
              <span>İctimai və Təhsil Təşəbbüslərimiz</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
              Layihələrimiz
            </h1>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Məktəblərdə, universitetlərdə və icmalarda həyata keçirdiyimiz fəlsəfi dialoq,
              tənqidi düşüncə və müəllim inkişafı layihələri.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((proj) => (
              <div
                key={proj.id}
                className="bg-white rounded-3xl border border-slate-200/80 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Cover Image */}
                  <div className="relative h-48 w-full bg-slate-100">
                    <Image
                      src={proj.image_url}
                      alt={proj.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover"
                    />
                    <div className="absolute top-3 right-3">
                      <span
                        className={`text-[11px] font-bold px-3 py-1 rounded-full border shadow-sm ${getStatusBadge(
                          proj.status
                        )}`}
                      >
                        {proj.status}
                      </span>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-6 space-y-3">
                    <div className="text-xs font-bold text-p4c-cyan uppercase tracking-wider">
                      {proj.category}
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 leading-snug">
                      {proj.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                      {proj.summary}
                    </p>

                    <div className="pt-3 border-t border-slate-100 space-y-2 text-xs text-slate-500">
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-3.5 h-3.5 text-p4c-navy shrink-0" />
                        <span>Müddət: <strong className="text-slate-700">{proj.duration}</strong></span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <Users className="w-3.5 h-3.5 text-p4c-cyan shrink-0 mt-0.5" />
                        <span className="line-clamp-1">Hədəf: {proj.target_groups}</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                        <span className="line-clamp-2">Nəticə: {proj.outcomes}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Partners footer */}
                {proj.partners && proj.partners.length > 0 && (
                  <div className="p-4 bg-slate-50 border-t border-slate-100 text-[11px] text-slate-500 flex flex-wrap items-center gap-1.5">
                    <span className="font-semibold text-slate-700">Tərəfdaşlar:</span>
                    {proj.partners.map((partner, i) => (
                      <span key={i} className="bg-white border border-slate-200 px-2 py-0.5 rounded text-slate-600">
                        {partner}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
