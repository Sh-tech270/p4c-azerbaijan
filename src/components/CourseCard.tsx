'use client';

import React from 'react';
import { Course } from '@/lib/types';
import { Clock, MapPin, Users, Award, ArrowRight, CheckCircle } from 'lucide-react';

interface CourseCardProps {
  course: Course;
}

export default function CourseCard({ course }: CourseCardProps) {
  const isTrainer = course.track === 'trainer';

  return (
    <div className="flex flex-col bg-white rounded-3xl border border-slate-200/80 hover:border-p4c-cyan/60 hover:shadow-xl transition-all duration-300 overflow-hidden group">
      {/* Header Accent Bar */}
      <div className={`h-2.5 w-full ${isTrainer ? 'bg-p4c-navy' : 'bg-p4c-cyan'}`} />

      <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
        <div className="space-y-4">
          {/* Badges */}
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span
              className={`inline-flex items-center space-x-1 text-xs font-bold px-3 py-1 rounded-full ${
                isTrainer
                  ? 'bg-blue-50 text-p4c-navy border border-blue-200/70'
                  : 'bg-cyan-50 text-cyan-900 border border-cyan-200/70'
              }`}
            >
              <Award className="w-3.5 h-3.5" />
              <span>{isTrainer ? 'Təlimçi Sertifikasiyası' : 'Fəlsəfə Atelyesi'}</span>
            </span>

            <span className="inline-flex items-center space-x-1 text-xs font-semibold text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-md">
              <Clock className="w-3 h-3" />
              <span>{course.duration_hours} Saat</span>
            </span>
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-slate-900 group-hover:text-p4c-navy transition leading-snug">
            <a href={`/kurslar/${course.slug}`}>{course.title}</a>
          </h3>

          {/* Short Description */}
          <p className="text-sm text-slate-600 line-clamp-3 leading-relaxed">
            {course.short_description}
          </p>

          {/* Target Audience */}
          <div className="flex items-start space-x-2 text-xs text-slate-500 pt-1">
            <Users className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
            <span>
              <strong className="text-slate-700">Kimlər üçün:</strong> {course.target_audience}
            </span>
          </div>

          {/* Highlights */}
          {course.learning_outcomes && course.learning_outcomes.length > 0 && (
            <div className="pt-2 border-t border-slate-100 space-y-1.5">
              {course.learning_outcomes.slice(0, 2).map((item, idx) => (
                <div key={idx} className="flex items-start space-x-2 text-xs text-slate-600">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="line-clamp-1">{item}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer info: Format, Price (if present), Buttons */}
        <div className="pt-6 mt-6 border-t border-slate-100 space-y-4">
          <div className="flex items-center justify-between text-xs text-slate-500">
            <span className="inline-flex items-center space-x-1 font-medium">
              <MapPin className="w-3.5 h-3.5 text-p4c-cyan" />
              <span>{course.format}</span>
            </span>

            {/* Price: Only show if provided, completely hide if null/0 */}
            {course.price ? (
              <span className="text-base font-extrabold text-p4c-navy">
                {course.price} AZN
              </span>
            ) : null}
          </div>

          <div className="grid grid-cols-2 gap-2.5">
            <a
              href={`/kurslar/${course.slug}`}
              className="inline-flex items-center justify-center py-2.5 px-3 rounded-xl text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition"
            >
              Proqrama Bax
            </a>
            <a
              href={`/muraciet?course=${course.id}`}
              className="inline-flex items-center justify-center space-x-1.5 py-2.5 px-3 rounded-xl text-xs font-semibold text-white bg-p4c-navy hover:bg-p4c-navy-light shadow-sm transition"
            >
              <span>Müraciət Et</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
