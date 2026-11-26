import React, { Suspense } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CourseCard from '@/components/CourseCard';
import { getCourses } from '@/lib/db';
import { Award, Layers, Sparkles } from 'lucide-react';

interface CoursesPageProps {
  searchParams: Promise<{ track?: string }>;
}

export const revalidate = 0;

export default async function CoursesPage({ searchParams }: CoursesPageProps) {
  const allCourses = await getCourses();
  const { track: selectedTrack } = await searchParams;

  const filteredCourses = selectedTrack
    ? allCourses.filter((c) => c.track === selectedTrack)
    : allCourses;

  const trainerCount = allCourses.filter((c) => c.track === 'trainer').length;
  const participantCount = allCourses.filter((c) => c.track === 'participant').length;

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />

      <main className="flex-1 py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-100 text-p4c-navy text-xs font-bold mb-3">
              <Award className="w-3.5 h-3.5 text-p4c-cyan" />
              <span>P4C Azərbaycan Tədris Kataloqu</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
              Kurslarımız və Fəlsəfə Atelyelərimiz
            </h1>
            <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
              Müəllimlər üçün beynəlxalq səviyyəli fasilatatorluq sertifikasiya proqramları və
              uşaqlar, gənclər, valideynlər üçün fəlsəfə atelyeləri.
            </p>

            {/* Filter Tabs */}
            <div className="flex flex-wrap items-center justify-center gap-2 pt-8">
              <a
                href="/kurslar"
                className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all shadow-sm ${
                  !selectedTrack
                    ? 'bg-p4c-navy text-white shadow-md'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                Bütün Proqramlar ({allCourses.length})
              </a>

              <a
                href="/kurslar?track=trainer"
                className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all shadow-sm flex items-center space-x-1.5 ${
                  selectedTrack === 'trainer'
                    ? 'bg-p4c-navy text-white shadow-md'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                <Award className="w-4 h-4 text-p4c-cyan" />
                <span>Təlimçi Ol (15, 30, 30 saat) [{trainerCount}]</span>
              </a>

              <a
                href="/kurslar?track=participant"
                className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all shadow-sm flex items-center space-x-1.5 ${
                  selectedTrack === 'participant'
                    ? 'bg-p4c-cyan text-p4c-navy shadow-md font-extrabold'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                <Layers className="w-4 h-4 text-p4c-navy" />
                <span>İştirakçı Ol (Atelyelər) [{participantCount}]</span>
              </a>
            </div>
          </div>

          {/* Courses Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>

          {/* Bottom Guidance Banner */}
          <div className="mt-16 bg-white rounded-3xl p-8 border border-slate-200/80 shadow-md flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <span className="text-xs font-bold text-p4c-cyan uppercase tracking-wider block mb-1">
                Hansı kursun sizə uyğun olduğuna əmin deyilsiniz?
              </span>
              <h3 className="text-xl font-bold text-slate-900">
                10 suallıq «Özünü Kəşf Et» testini keçin
              </h3>
              <p className="text-xs text-slate-500 mt-1 max-w-lg">
                Düşünmə və dialoq tərzinizi təhlil edərək sizin üçün ən optimal P4C proqramını tövsiyə edək.
              </p>
            </div>
            <a
              href="/test"
              className="shrink-0 inline-flex items-center space-x-2 px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-p4c-navy hover:bg-p4c-navy-light shadow-md transition"
            >
              <Sparkles className="w-4 h-4 text-p4c-cyan" />
              <span>Testə Başla</span>
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
