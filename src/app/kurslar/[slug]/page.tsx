import React from 'react';
import { notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { getCourseBySlug, getCourses } from '@/lib/db';
import {
  Clock,
  MapPin,
  Users,
  Award,
  ArrowRight,
  CheckCircle2,
  Calendar,
  BookOpen,
  HelpCircle,
  ShieldCheck,
  ChevronRight,
} from 'lucide-react';

interface CourseDetailPageProps {
  params: Promise<{ slug: string }>;
}

export const revalidate = 0;

export async function generateStaticParams() {
  const courses = await getCourses();
  return courses.map((course) => ({
    slug: course.slug,
  }));
}

export default async function CourseDetailPage({ params }: CourseDetailPageProps) {
  const { slug } = await params;
  const course = await getCourseBySlug(slug);

  if (!course) {
    notFound();
  }

  const isTrainer = course.track === 'trainer';

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />

      <main className="flex-1">
        {/* Breadcrumb & Hero */}
        <section className="bg-slate-900 text-white pt-10 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center space-x-2 text-xs text-slate-400 mb-6">
              <a href="/" className="hover:text-white transition">
                Ana Səhifə
              </a>
              <ChevronRight className="w-3.5 h-3.5" />
              <a href="/kurslar" className="hover:text-white transition">
                Kurslar
              </a>
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="text-p4c-cyan truncate max-w-xs">{course.title}</span>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span
                    className={`inline-flex items-center space-x-1.5 text-xs font-bold px-3 py-1 rounded-full ${
                      isTrainer ? 'bg-p4c-navy text-cyan-300' : 'bg-p4c-cyan text-p4c-navy font-extrabold'
                    }`}
                  >
                    <Award className="w-3.5 h-3.5" />
                    <span>{isTrainer ? 'Təlimçi Sertifikasiyası' : 'Fəlsəfə Atelyesi'}</span>
                  </span>

                  <span className="text-xs bg-slate-800 text-slate-300 px-3 py-1 rounded-full flex items-center space-x-1">
                    <Clock className="w-3 h-3 text-p4c-cyan" />
                    <span>{course.duration_hours} Saat</span>
                  </span>

                  <span className="text-xs bg-slate-800 text-slate-300 px-3 py-1 rounded-full flex items-center space-x-1">
                    <MapPin className="w-3 h-3 text-emerald-400" />
                    <span>{course.format}</span>
                  </span>
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
                  {course.title}
                </h1>

                <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-3xl">
                  {course.short_description}
                </p>
              </div>

              {/* Side CTA Card */}
              <div className="lg:col-span-4 bg-white text-slate-900 rounded-3xl p-6 shadow-2xl border border-slate-100 space-y-5">
                <div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    {course.price ? 'Kursun Qiyməti' : 'Qeydiyyat Statusu'}
                  </div>
                  {course.price ? (
                    <div className="text-3xl font-extrabold text-p4c-navy mt-1">
                      {course.price} AZN
                    </div>
                  ) : (
                    <div className="text-xl font-bold text-emerald-600 mt-1 flex items-center space-x-1.5">
                      <ShieldCheck className="w-5 h-5" />
                      <span>Qəbul Açıqdır</span>
                    </div>
                  )}
                </div>

                <div className="space-y-2.5 text-xs text-slate-600 border-t border-slate-100 pt-4">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Növbəti Qrup:</span>
                    <strong className="text-slate-900">{course.next_batch || 'Tezliklə'}</strong>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Müddət:</span>
                    <strong className="text-slate-900">{course.duration_hours} Akademik Saat</strong>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Təlimçi:</span>
                    <strong className="text-slate-900">{course.instructor_name || 'P4C Eksperti'}</strong>
                  </div>
                </div>

                <a
                  href={`/muraciet?course=${course.id}`}
                  className="w-full py-3.5 px-4 rounded-xl font-bold text-sm text-white bg-p4c-navy hover:bg-p4c-navy-light shadow-md transition flex items-center justify-center space-x-2"
                >
                  <span>Kursa Müraciət Et</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Course Detailed Content */}
        <section className="py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left Content (8 cols) */}
            <div className="lg:col-span-8 space-y-10">
              {/* Long Description */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm space-y-4">
                <h2 className="text-xl font-bold text-slate-900 flex items-center space-x-2">
                  <BookOpen className="w-5 h-5 text-p4c-cyan" />
                  <span>Kursun Məqsədi və İcmalı</span>
                </h2>
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                  {course.long_description}
                </p>
              </div>

              {/* Learning Outcomes */}
              {course.learning_outcomes && course.learning_outcomes.length > 0 && (
                <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm space-y-4">
                  <h2 className="text-xl font-bold text-slate-900 flex items-center space-x-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                    <span>Qazanılacaq Bacarıqlar və Təlim Nəticələri</span>
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    {course.learning_outcomes.map((outcome, idx) => (
                      <div
                        key={idx}
                        className="flex items-start space-x-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-100 text-xs text-slate-700"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span className="font-medium">{outcome}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Syllabus / Modules */}
              {course.syllabus && course.syllabus.length > 0 && (
                <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm space-y-4">
                  <h2 className="text-xl font-bold text-slate-900 flex items-center space-x-2">
                    <Calendar className="w-5 h-5 text-p4c-navy" />
                    <span>Tədris Proqramı və Modullar</span>
                  </h2>

                  <div className="space-y-4 pt-2">
                    {course.syllabus.map((mod, idx) => (
                      <div
                        key={idx}
                        className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2.5"
                      >
                        <div className="flex items-center space-x-2">
                          <span className="w-6 h-6 rounded-full bg-p4c-navy text-white text-xs font-bold flex items-center justify-center">
                            {idx + 1}
                          </span>
                          <h4 className="font-bold text-slate-900 text-sm sm:text-base">{mod.module}</h4>
                        </div>
                        <ul className="pl-8 space-y-1.5 text-xs text-slate-600 list-disc">
                          {mod.topics.map((topic, i) => (
                            <li key={i}>{topic}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Frequently Asked Questions */}
              {course.faqs && course.faqs.length > 0 && (
                <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm space-y-4">
                  <h2 className="text-xl font-bold text-slate-900 flex items-center space-x-2">
                    <HelpCircle className="w-5 h-5 text-p4c-cyan" />
                    <span>Tez-Tez Verilən Suallar</span>
                  </h2>
                  <div className="space-y-3 pt-2">
                    {course.faqs.map((faq, i) => (
                      <div key={i} className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                        <div className="font-bold text-sm text-slate-900 mb-1">{faq.question}</div>
                        <div className="text-xs text-slate-600 leading-relaxed">{faq.answer}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Details (4 cols) */}
            <div className="lg:col-span-4 space-y-6">
              {/* Target Audience Card */}
              <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-sm space-y-3">
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center space-x-2">
                  <Users className="w-4 h-4 text-p4c-cyan" />
                  <span>Kimlər Üçün Nəzərdə Tutulub?</span>
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">{course.target_audience}</p>
              </div>

              {/* Requirements Card */}
              {course.requirements && (
                <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-sm space-y-3">
                  <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center space-x-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>Qəbul Şərtləri</span>
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{course.requirements}</p>
                </div>
              )}

              {/* CTA Widget */}
              <div className="bg-gradient-to-br from-p4c-navy to-p4c-cyan text-white rounded-3xl p-6 space-y-4 shadow-lg text-center">
                <h4 className="font-bold text-lg">Bu kursa yazılmaq istəyirsiniz?</h4>
                <p className="text-xs text-slate-100 leading-relaxed">
                  Onlayn müraciət formasını doldurun, komandamız dərhal sizinlə əlaqə saxlasın.
                </p>
                <a
                  href={`/muraciet?course=${course.id}`}
                  className="block w-full py-3 rounded-xl bg-white text-p4c-navy font-bold text-xs hover:bg-slate-100 transition shadow"
                >
                  İndi Müraciət Et
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
