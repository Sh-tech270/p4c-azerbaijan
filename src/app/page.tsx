import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import StatsCounter from '@/components/StatsCounter';
import PartnerCarousel from '@/components/PartnerCarousel';
import CourseCard from '@/components/CourseCard';
import InstructorCard from '@/components/InstructorCard';
import VideoSection from '@/components/VideoSection';
import ResourcesSection from '@/components/ResourcesSection';
import Image from 'next/image';
import {
  getCourses,
  getInstructors,
  getStatistics,
  getPartners,
  getProjects,
  getNews,
  getGraduateStories,
  getVideos,
  getSettings,
  getResources,
} from '@/lib/db';
import {
  Brain,
  Sparkles,
  Users,
  Compass,
  ArrowRight,
  ShieldCheck,
  Award,
  BookOpen,
  Calendar,
  CheckCircle2,
  Quote,
} from 'lucide-react';

export const revalidate = 0;

export default async function HomePage() {
  const [
    courses,
    instructors,
    statistics,
    partners,
    projects,
    news,
    graduates,
    videos,
    settings,
    resources,
  ] = await Promise.all([
    getCourses(),
    getInstructors(),
    getStatistics(),
    getPartners(),
    getProjects(),
    getNews(),
    getGraduateStories(),
    getVideos(),
    getSettings(),
    getResources(),
  ]);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <main className="flex-1">
        {/* HERO SECTION */}
        <Hero
          title={settings.hero_title}
          subtitle={settings.hero_subtitle}
          badge={settings.hero_badge}
        />

        {/* SECTION 6: STATS COUNTERS (Elevated over Hero transition) */}
        <StatsCounter stats={statistics} />

        {/* SECTION 1: P4C HAQQINDA QISA MƏLUMAT */}
        <section id="haqqinda" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center space-x-2 text-xs font-bold text-p4c-navy uppercase tracking-wider bg-blue-50 px-3 py-1.5 rounded-full border border-blue-100">
                <Brain className="w-3.5 h-3.5 text-p4c-cyan" />
                <span>P4C Metodologiyası</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
                {settings.section_about_title || (
                  <>
                    Philosophy for Children: <br />
                    <span className="text-gradient">Əzbərçilikdən Dərin Fəlsəfi Təfəkkürə</span>
                  </>
                )}
              </h2>

              <p className="text-slate-600 text-base leading-relaxed">
                {settings.section_about_subtitle || (
                  <>
                    Philosophy for Children (P4C) uşaqların və gənclərin doğuşdan gələn maraq və sualvermə
                    qabiliyyətini Sokratik dialoqla inkişaf etdirən beynəlxalq təhsil modelidir. Burada uşaqlar
                    hazır cavabları deyil, <strong>Community of Inquiry (Araşdırma İcması)</strong> çərçivəsində
                    öz arqumentlərini qurmağı öyrənirlər.
                  </>
                )}
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="font-bold text-slate-900 text-sm">4C Bacarıqları</div>
                  <div className="text-xs text-slate-500 mt-1">Tənqidi, Yaradıcı, Əməkdaşlıq və Qayğıkeş düşüncə</div>
                </div>
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="font-bold text-slate-900 text-sm">Elmi Əsaslılıq</div>
                  <div className="text-xs text-slate-500 mt-1">Matthew Lipman və SAPERE beynəlxalq standartları</div>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="/haqqimizda/p4c"
                  className="inline-flex items-center space-x-2 text-sm font-bold text-p4c-navy hover:text-p4c-cyan transition"
                >
                  <span>Metodologiya haqqında ətraflı oxu</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-100 aspect-[4/3]">
                <Image
                  src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80"
                  alt="Uşaqlarla fəlsəfi dialoq"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-6 sm:p-8">
                  <div className="text-white space-y-1">
                    <div className="text-xs font-bold text-p4c-cyan uppercase">Araşdırma İcması</div>
                    <div className="text-base font-bold">Sinifdə hər kəsin səsi bərabər və dəyərlidir.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: P4C AZERBAIJAN HAQQINDA */}
        <section id="p4c-azerbaijan" className="py-20 bg-slate-50/70 border-t border-slate-200/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6 order-2 lg:order-1 relative">
                <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/80 shadow-xl space-y-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-2xl bg-blue-100 text-p4c-navy flex items-center justify-center">
                      <ShieldCheck className="w-6 h-6 text-p4c-navy" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">P4C Azərbaycan</h3>
                      <p className="text-xs text-slate-500 font-medium">Uşaqlarla, Gənclərlə və Böyüklərlə Fəlsəfə</p>
                    </div>
                  </div>

                  <p className="text-slate-600 text-sm leading-relaxed">
                    Biz beynəlxalq fəlsəfi təhsil təcrübəsini Azərbaycanın zəngin mədəni və intellektual
                    mühiti ilə birləşdiririk. Məqsədimiz hər bir məktəbdə, universitetdə və ailədə
                    sağlam dialoq və tənqidi təfəkkür mədəniyyətini bərqərar etməkdir.
                  </p>

                  <div className="space-y-3 pt-2 text-xs text-slate-700">
                    <div className="flex items-center space-x-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>Elm və Təhsil Nazirliyi və ARTİ ilə birgə layihələr</span>
                    </div>
                    <div className="flex items-center space-x-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>Azərbaycan dilində milli P4C dərslik və stimul bazası</span>
                    </div>
                    <div className="flex items-center space-x-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>Mərhələli beynəlxalq təlimçi sertifikasiya imtahanları</span>
                    </div>
                  </div>

                  <div className="pt-2">
                    <a
                      href="/haqqimizda/p4c-azerbaijan"
                      className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-p4c-navy hover:bg-p4c-navy-light transition shadow"
                    >
                      <span>Təşkilatın Missiya və Tarixçəsi</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6 order-1 lg:order-2 space-y-5">
                <span className="text-xs font-bold text-p4c-cyan uppercase tracking-wider">
                  Milli Təhsil Missiyası
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
                  {settings.section_mission_title || 'Azərbaycan Təhsil Mühitində Yeni Bir Dialoq Mədəniyyəti'}
                </h2>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  {settings.section_mission_subtitle ||
                    'İnformasiya bolluğu və süni intellekt əsrində əzbərçi bilik köhnəlir, lakin düzgün sual vermək, analiz etmək və etik qərar vermək qabiliyyəti ən ali səriştəyə çevrilir. P4C Azərbaycan olaraq biz bu bacarıqları ibtidai siniflərdən universitet və şirkət komandalarına qədər sistemli şəkildə formalaşdırırıq.'}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: FƏALİYYƏTİMİZİN ƏSAS İSTİQAMƏTLƏRİ */}
        <section id="fealiyyetler" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-bold text-p4c-cyan uppercase tracking-wider">
              Strateji Fəaliyyət Sahələri
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              {settings.section_activities_title || 'Fəaliyyətimizin Əsas İstiqamətləri'}
            </h2>
            {settings.section_activities_subtitle && (
              <p className="text-xs sm:text-sm text-slate-500">{settings.section_activities_subtitle}</p>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-sm hover:shadow-xl transition-all space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-p4c-navy flex items-center justify-center font-bold">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-base text-slate-900">Təlimçi Sertifikasiyası</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Müəllimlər və pedaqoqlar üçün 15, 30 və 30 saatlıq beynəlxalq standartlı fasilatator hazırlığı.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-sm hover:shadow-xl transition-all space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-cyan-50 text-p4c-cyan-dark flex items-center justify-center font-bold">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-base text-slate-900">Məktəb Fəlsəfə Klubları</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Məktəblilərin həftəlik toplanıb fəlsəfi hekayələr və dilemmalar üzərində müzakirə apardığı icmalar.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-sm hover:shadow-xl transition-all space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-700 flex items-center justify-center font-bold">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-base text-slate-900">Valideyn və Dialoq Atelyeləri</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Ailədə uşaqla nəsihət deyil, fəlsəfi ortaq düşüncə bağı qurmaq üçün praktiki sessiyalar.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-sm hover:shadow-xl transition-all space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-base text-slate-900">Milli Tədris Nəşrləri</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Azərbaycan dilində fəlsəfi hekayə kitabları, metodiki vəsaitlər və təlimçi bələdçiləri.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 4: KURSLARIMIZ */}
        <section id="kurslar" className="py-20 bg-slate-50/80 border-t border-slate-200/70">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <span className="text-xs font-bold text-p4c-navy uppercase tracking-wider">
                  Tədris Proqramlarımız
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-1">
                  {settings.section_courses_title || 'Seçilmiş Kurs və Atelyelər'}
                </h2>
              </div>
              <a
                href="/kurslar"
                className="inline-flex items-center space-x-1.5 text-xs sm:text-sm font-bold text-p4c-navy hover:text-p4c-cyan transition"
              >
                <span>Bütün kataloqa bax ({courses.length})</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {courses.slice(0, 3).map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 5: MÜƏLLİMLƏRİMİZ VƏ TƏLİMÇİLƏRİMİZ */}
        <section id="muellimler" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-bold text-p4c-cyan uppercase tracking-wider">
                Ekspert Komandamız
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-1">
                {settings.section_instructors_title || 'Müəllimlərimiz və Təlimçilərimiz'}
              </h2>
            </div>
            <a
              href="/muellimler"
              className="text-xs sm:text-sm font-bold text-p4c-navy hover:text-p4c-cyan transition flex items-center space-x-1"
            >
              <span>Bütün heyəti gör</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {instructors.map((inst) => (
              <InstructorCard key={inst.id} instructor={inst} />
            ))}
          </div>
        </section>

        {/* SECTION 7: LAYİHƏLƏRİMİZ */}
        <section id="layiheler" className="py-20 bg-slate-50/70 border-t border-slate-200/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <span className="text-xs font-bold text-p4c-navy uppercase tracking-wider">
                  Real Fəaliyyətlər
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-1">
                  {settings.section_projects_title || 'Layihələrimiz'}
                </h2>
              </div>
              <a
                href="/layiheler"
                className="text-xs sm:text-sm font-bold text-p4c-navy hover:text-p4c-cyan transition flex items-center space-x-1"
              >
                <span>Bütün layihələr</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {projects.slice(0, 3).map((proj) => (
                <div
                  key={proj.id}
                  className="bg-white rounded-3xl border border-slate-200/80 overflow-hidden shadow-sm hover:shadow-lg transition flex flex-col justify-between"
                >
                  <div className="relative h-44 w-full bg-slate-100">
                    <Image
                      src={proj.image_url}
                      alt={proj.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover"
                    />
                    <span className="absolute top-3 right-3 text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-white/90 text-p4c-navy shadow">
                      {proj.status}
                    </span>
                  </div>
                  <div className="p-6 space-y-2">
                    <span className="text-[10px] font-bold text-p4c-cyan uppercase">{proj.category}</span>
                    <h4 className="font-bold text-base text-slate-900">{proj.title}</h4>
                    <p className="text-xs text-slate-500 line-clamp-2">{proj.summary}</p>
                  </div>
                  <div className="p-4 bg-slate-50 border-t border-slate-100 text-[11px] text-slate-500">
                    Müddət: <strong className="text-slate-700">{proj.duration}</strong>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 8: XƏBƏRLƏR VƏ YENİLİKLƏR */}
        <section id="xeberler" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-bold text-p4c-cyan uppercase tracking-wider">
                Yeniliklər və Bloq
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-1">
                {settings.section_news_title || 'Son Xəbərlər və Məqalələr'}
              </h2>
            </div>
            <a
              href="/xeberler"
              className="text-xs sm:text-sm font-bold text-p4c-navy hover:text-p4c-cyan transition flex items-center space-x-1"
            >
              <span>Bütün xəbərlər</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {news.slice(0, 3).map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-3xl border border-slate-200/80 overflow-hidden shadow-sm hover:shadow-md transition flex flex-col justify-between"
              >
                <div className="relative h-44 w-full bg-slate-100">
                  <Image
                    src={item.cover_image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                  <span className="absolute top-3 left-3 text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-p4c-navy text-white shadow">
                    {item.category}
                  </span>
                </div>
                <div className="p-6 space-y-2">
                  <div className="text-[10px] text-slate-400">{item.published_at}</div>
                  <h4 className="font-bold text-sm text-slate-900 line-clamp-2">
                    <a href={`/xeberler/${item.slug}`} className="hover:text-p4c-navy transition">
                      {item.title}
                    </a>
                  </h4>
                  <p className="text-xs text-slate-500 line-clamp-2">{item.excerpt}</p>
                </div>
                <div className="p-6 pt-0">
                  <a
                    href={`/xeberler/${item.slug}`}
                    className="text-xs font-bold text-p4c-navy hover:text-p4c-cyan flex items-center space-x-1"
                  >
                    <span>Daha ətraflı</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION: RESURSLAR VƏ KİTABLAR */}
        <ResourcesSection
          resources={resources}
          title={settings.section_resources_title}
          subtitle={settings.section_resources_subtitle}
        />

        {/* SECTION 9: MƏZUNLARIMIZIN HEKAYƏLƏRİ */}
        <section id="mezunlar" className="py-20 bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="text-xs font-bold text-p4c-cyan uppercase tracking-wider">
                Real Təcrübələr
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                {settings.section_graduates_title || 'Məzunlarımızın Hekayələri'}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {graduates.map((grad) => (
                <div
                  key={grad.id}
                  className="bg-slate-800/90 rounded-3xl p-6 sm:p-8 border border-slate-700 space-y-4 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <Quote className="w-8 h-8 text-p4c-cyan/40" />
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic">
                      «{grad.story}»
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-700 flex items-center space-x-3">
                    <div className="relative w-10 h-10 rounded-full overflow-hidden border border-p4c-cyan shrink-0">
                      <Image
                        src={grad.photo_url}
                        alt={grad.student_name}
                        fill
                        sizes="40px"
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">{grad.student_name}</div>
                      <div className="text-[10px] text-slate-400">{grad.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 10: TƏRƏFDAŞLARIMIZIN LOQO KARUSELİ */}
        <div id="terefdaslar">
          <PartnerCarousel partners={partners} />
        </div>

        {/* SECTION 11: FAYDALI VİDEO MATERİALLAR */}
        <div id="videolar">
          <VideoSection videos={videos} />
        </div>

        {/* SECTION 12: KURSA MÜRACİƏT ÜÇÜN ÇAĞIRIŞ BÖLMƏSİ (CTA) */}
        <section id="muraciet" className="py-20 bg-gradient-to-br from-blue-900 via-p4c-navy to-slate-900 text-white relative overflow-hidden">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-xs font-bold text-p4c-cyan">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Gələcəyi Fəlsəfi Düşüncə ilə Qur</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              {settings.section_cta_title || (
                <>
                  Daha yaxşı suallar, daha dərin düşüncə. <br />
                  <span className="text-p4c-cyan">P4C Ailəsinə Qoşulun!</span>
                </>
              )}
            </h2>

            <p className="text-slate-200 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
              {settings.section_cta_subtitle ||
                'Müəllim, valideyn, gənc və ya təhsil rəhbəri olmağınızdan asılı olmayaraq, P4C metodologiyası düşüncə tərzinizə yeni bir nəfəs verəcək.'}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <a
                href="/muraciet"
                className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-sm bg-p4c-cyan text-p4c-navy hover:bg-white shadow-xl transition"
              >
                Kursa Müraciət Et
              </a>
              <a
                href="/test"
                className="w-full sm:w-auto px-7 py-4 rounded-xl font-bold text-sm bg-white/10 border border-white/20 hover:bg-white/20 text-white transition"
              >
                Özünü Kəşf Testini Keç
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* SECTION 13: ƏLAQƏ VƏ FOOTER */}
      <div id="elaqe">
        <Footer />
      </div>
    </div>
  );
}
