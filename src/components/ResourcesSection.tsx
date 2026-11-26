'use client';

import React from 'react';
import Link from 'next/link';
import { ResourceItem } from '@/lib/types';
import {
  BookOpen,
  Download,
  FileText,
  FileArchive,
  ArrowRight,
  Sparkles,
  Calendar,
  Layers,
} from 'lucide-react';

interface ResourcesSectionProps {
  resources: ResourceItem[];
  title?: string;
  subtitle?: string;
}

export default function ResourcesSection({
  resources,
  title = 'Kitablar və Metodik Resurslar',
  subtitle = 'Müəllimlər, tədqiqatçılar və valideynlər üçün Azərbaycan dilində rəsmi P4C bələdçiləri və vəsaitlər.',
}: ResourcesSectionProps) {
  const getFormatBadge = (format: string) => {
    switch (format.toUpperCase()) {
      case 'PDF':
        return {
          bg: 'bg-red-50 text-red-600 border-red-200',
          icon: <FileText className="w-3.5 h-3.5 mr-1" />,
        };
      case 'DOCX':
        return {
          bg: 'bg-blue-50 text-blue-700 border-blue-200',
          icon: <FileText className="w-3.5 h-3.5 mr-1" />,
        };
      case 'ZIP':
        return {
          bg: 'bg-amber-50 text-amber-700 border-amber-200',
          icon: <FileArchive className="w-3.5 h-3.5 mr-1" />,
        };
      default:
        return {
          bg: 'bg-slate-50 text-slate-700 border-slate-200',
          icon: <FileText className="w-3.5 h-3.5 mr-1" />,
        };
    }
  };

  return (
    <section id="resurslar" className="py-20 bg-slate-50/70 border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-bold text-p4c-navy uppercase tracking-wider flex items-center space-x-1.5">
              <BookOpen className="w-4 h-4 text-[#00B4D8]" />
              <span>Milli P4C Kitabxanası və Nəşrlər</span>
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-1">
              {title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 max-w-2xl mt-1">
              {subtitle}
            </p>
          </div>

          <Link
            href="/resurslar"
            className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-[#0B357B] hover:bg-[#14499E] shadow transition shrink-0"
          >
            <span>Bütün Kitabxananı Gör ({resources.length})</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.slice(0, 3).map((item) => {
            const badge = getFormatBadge(item.file_format);

            return (
              <div
                key={item.id}
                className="bg-white rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group"
              >
                <div>
                  {/* Book Cover / Banner */}
                  <div className="relative h-48 w-full bg-slate-100 overflow-hidden">
                    <img
                      src={item.cover_url || 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80'}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

                    <div className="absolute top-3 left-3 flex items-center space-x-2">
                      <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-[#0B357B] text-white shadow">
                        {item.category}
                      </span>
                    </div>

                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-[11px] font-medium">
                      <span>{item.author || 'P4C Azərbaycan'}</span>
                      {item.pages && <span>{item.pages} səhifə</span>}
                    </div>
                  </div>

                  {/* Body Info */}
                  <div className="p-6 space-y-2.5">
                    <div className="flex items-center justify-between">
                      <span
                        className={`inline-flex items-center text-[11px] font-bold px-2 py-0.5 rounded-md border ${badge.bg}`}
                      >
                        {badge.icon}
                        <span>{item.file_format} • {item.file_size}</span>
                      </span>

                      {item.published_year && (
                        <span className="text-[11px] text-slate-400 font-medium">
                          {item.published_year}
                        </span>
                      )}
                    </div>

                    <h3 className="font-bold text-base text-slate-900 group-hover:text-[#0B357B] transition line-clamp-2">
                      {item.title}
                    </h3>

                    <p className="text-xs text-slate-500 line-clamp-3 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Footer Download Action */}
                <div className="p-6 pt-0">
                  <a
                    href={item.download_url}
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center space-x-2 py-3 px-4 rounded-xl font-bold text-xs bg-slate-100 hover:bg-[#0B357B] text-slate-800 hover:text-white transition group-hover:bg-[#0B357B] group-hover:text-white shadow-sm"
                  >
                    <Download className="w-4 h-4" />
                    <span>Materialı Endir ({item.file_size})</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
