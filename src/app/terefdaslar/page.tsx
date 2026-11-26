import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PartnerCarousel from '@/components/PartnerCarousel';
import Image from 'next/image';
import { getPartners } from '@/lib/db';
import { Handshake, ExternalLink, School, Building2, Globe2 } from 'lucide-react';

export const revalidate = 0;

export default async function PartnersPage() {
  const partners = await getPartners();

  const categories = [
    { title: 'Dövlət Qurumları', icon: <Building2 className="w-5 h-5 text-p4c-navy" /> },
    { title: 'Məktəb və Liseylər', icon: <School className="w-5 h-5 text-p4c-cyan" /> },
    { title: 'Təhsil Mərkəzləri', icon: <Building2 className="w-5 h-5 text-indigo-600" /> },
    { title: 'Beynəlxalq Tərəfdaşlar', icon: <Globe2 className="w-5 h-5 text-emerald-600" /> },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />

      <main className="flex-1 py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-14">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-100 text-p4c-navy text-xs font-bold">
              <Handshake className="w-3.5 h-3.5 text-p4c-cyan" />
              <span>İnstitusional Əməkdaşlıq Şəbəkəmiz</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
              Tərəfdaşlarımız və Əməkdaş Məktəblər
            </h1>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Azərbaycan Respublikası Elm və Təhsil Nazirliyi, aparıcı lisey və təhsil kompleksləri,
              həmçinin qlobal P4C təşkilatları ilə birgə tənqidi təfəkkür mədəniyyətini qururuq.
            </p>
          </div>

          {/* Marquee Banner */}
          <PartnerCarousel partners={partners} />

          {/* Categorized List */}
          <div className="space-y-12">
            {categories.map((cat, idx) => {
              const catPartners = partners.filter((p) => p.category === cat.title);
              if (catPartners.length === 0) return null;

              return (
                <div key={idx} className="space-y-4">
                  <div className="flex items-center space-x-2.5 pb-2 border-b border-slate-200">
                    {cat.icon}
                    <h3 className="text-xl font-bold text-slate-900">{cat.title}</h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {catPartners.map((partner) => (
                      <div
                        key={partner.id}
                        className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-sm hover:shadow-md transition flex items-center justify-between group"
                      >
                        <div className="flex items-center space-x-4">
                          <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center p-1.5 shrink-0">
                            <Image
                              src={partner.logo_url}
                              alt={partner.name}
                              width={48}
                              height={48}
                              className="object-contain"
                            />
                          </div>
                          <div>
                            <h4 className="font-bold text-sm text-slate-900 group-hover:text-p4c-navy transition">
                              {partner.name}
                            </h4>
                            <span className="text-xs text-slate-400">{partner.category}</span>
                          </div>
                        </div>

                        {partner.website_url && (
                          <a
                            href={partner.website_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-xl text-slate-400 hover:text-p4c-navy hover:bg-slate-50 transition"
                            title="Rəsmi veb-sayta keçid"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
