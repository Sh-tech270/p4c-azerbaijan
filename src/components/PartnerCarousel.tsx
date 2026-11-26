'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Partner } from '@/lib/types';
import { Pause, Play, ExternalLink } from 'lucide-react';

interface PartnerCarouselProps {
  partners: Partner[];
}

export default function PartnerCarousel({ partners }: PartnerCarouselProps) {
  const [isPaused, setIsPaused] = useState(false);

  // Duplicate items to ensure a seamless infinite marquee effect
  const displayPartners = [...partners, ...partners];

  return (
    <section className="py-14 bg-slate-50/70 border-y border-slate-200/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <span className="text-xs font-bold text-p4c-navy uppercase tracking-wider">
              Tərəfdaşlarımız və Əməkdaşlıqlar
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-0.5">
              Etibarlı Təhsil və İnstitusional Şəbəkəmiz
            </h3>
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={() => setIsPaused(!isPaused)}
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-600 bg-white border border-slate-200 hover:bg-slate-100 transition shadow-sm"
              title={isPaused ? 'Hərəkəti başlat' : 'Hərəkəti dayandır'}
            >
              {isPaused ? (
                <>
                  <Play className="w-3.5 h-3.5 text-emerald-600 fill-emerald-600" />
                  <span>Hərəkət etdir</span>
                </>
              ) : (
                <>
                  <Pause className="w-3.5 h-3.5 text-slate-500" />
                  <span>Dayandır</span>
                </>
              )}
            </button>
            <a
              href="/terefdaslar"
              className="text-xs font-semibold text-p4c-navy hover:underline flex items-center space-x-1"
            >
              <span>Hamısına bax</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>

      {/* Infinite Horizontal Logo Marquee */}
      <div
        className="relative w-full overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Gradient Fade Edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-slate-50 via-slate-50/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-slate-50 via-slate-50/80 to-transparent z-10 pointer-events-none" />

        <div
          className={`flex items-center space-x-6 whitespace-nowrap ${
            isPaused ? '' : 'animate-scroll-left'
          }`}
          style={{ width: 'max-content' }}
        >
          {displayPartners.map((partner, index) => (
            <a
              key={`${partner.id}-${index}`}
              href={partner.website_url || '#'}
              target={partner.website_url ? '_blank' : undefined}
              rel="noopener noreferrer"
              className="group inline-flex items-center space-x-3.5 bg-white border border-slate-200/80 rounded-2xl p-3 px-5 shadow-sm hover:shadow-md hover:border-p4c-cyan/60 transition-all shrink-0 cursor-pointer"
            >
              <div className="relative w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center p-1 border border-slate-100 overflow-hidden">
                <Image
                  src={partner.logo_url}
                  alt={partner.name}
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <div className="text-left">
                <div className="text-xs font-bold text-slate-900 group-hover:text-p4c-navy transition">
                  {partner.name}
                </div>
                <div className="text-[10px] font-medium text-slate-400">{partner.category}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
