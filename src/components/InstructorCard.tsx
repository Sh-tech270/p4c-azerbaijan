'use client';

import React from 'react';
import Image from 'next/image';
import { Instructor } from '@/lib/types';
import { Award, BookOpen, Mail } from 'lucide-react';

interface InstructorCardProps {
  instructor: Instructor;
}

export default function InstructorCard({ instructor }: InstructorCardProps) {
  return (
    <div className="flex flex-col bg-white rounded-3xl border border-slate-200/80 p-6 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-300 group">
      {/* Profile Photo */}
      <div className="relative w-28 h-28 mx-auto rounded-full overflow-hidden border-4 border-slate-100 shadow-md group-hover:border-p4c-cyan/50 transition">
        <Image
          src={instructor.photo_url}
          alt={instructor.full_name}
          fill
          sizes="112px"
          className="object-cover group-hover:scale-105 transition duration-300"
        />
      </div>

      {/* Info */}
      <div className="text-center mt-4 space-y-1.5 flex-1 flex flex-col justify-between">
        <div>
          <h4 className="text-lg font-bold text-slate-900 group-hover:text-p4c-navy transition">
            {instructor.full_name}
          </h4>
          <p className="text-xs font-semibold text-p4c-cyan-dark">{instructor.title}</p>
          <p className="text-xs text-slate-500 mt-2 line-clamp-3 leading-relaxed">{instructor.bio}</p>
        </div>

        <div className="pt-4 mt-4 border-t border-slate-100 space-y-2 text-left">
          <div className="flex items-start space-x-2 text-[11px] text-slate-600">
            <Award className="w-3.5 h-3.5 text-p4c-navy shrink-0 mt-0.5" />
            <span className="line-clamp-1">{instructor.p4c_experience}</span>
          </div>

          <div className="flex items-start space-x-2 text-[11px] text-slate-600">
            <BookOpen className="w-3.5 h-3.5 text-p4c-cyan shrink-0 mt-0.5" />
            <span className="line-clamp-1">{instructor.education}</span>
          </div>

          {instructor.teaching_courses && instructor.teaching_courses.length > 0 && (
            <div className="pt-2 flex flex-wrap gap-1">
              {instructor.teaching_courses.slice(0, 2).map((c, i) => (
                <span
                  key={i}
                  className="inline-block text-[10px] bg-slate-100 text-slate-700 px-2 py-0.5 rounded-md font-medium truncate max-w-full"
                >
                  {c}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
