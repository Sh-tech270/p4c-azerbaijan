'use client';

import React from 'react';
import { StatisticItem } from '@/lib/types';
import { GraduationCap, Users, School, Briefcase } from 'lucide-react';

interface StatsProps {
  stats: StatisticItem[];
}

export default function StatsCounter({ stats }: StatsProps) {
  const getIcon = (key: string) => {
    switch (key) {
      case 'teachers_trained':
        return <GraduationCap className="w-7 h-7 text-p4c-navy" />;
      case 'total_participants':
        return <Users className="w-7 h-7 text-p4c-cyan" />;
      case 'partner_schools':
        return <School className="w-7 h-7 text-blue-600" />;
      case 'projects_completed':
        return <Briefcase className="w-7 h-7 text-teal-600" />;
      default:
        return <Users className="w-7 h-7 text-p4c-navy" />;
    }
  };

  return (
    <section className="relative z-20 -mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 p-6 sm:p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
          {stats.map((stat, idx) => (
            <div key={stat.id || idx} className={`text-center ${idx > 0 ? 'pt-6 sm:pt-0 sm:pl-6' : ''}`}>
              <div className="w-14 h-14 mx-auto rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-3">
                {getIcon(stat.key)}
              </div>
              <div className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                {stat.value ? (
                  <span>
                    {stat.value.toLocaleString()}
                    {stat.suffix}
                  </span>
                ) : (
                  <span className="text-sm font-medium text-slate-400">Məlumat əlavə olunur</span>
                )}
              </div>
              <div className="text-sm font-semibold text-slate-800 mt-1">{stat.label}</div>
              {stat.description && (
                <div className="text-xs text-slate-500 mt-1 max-w-xs mx-auto line-clamp-2">
                  {stat.description}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
