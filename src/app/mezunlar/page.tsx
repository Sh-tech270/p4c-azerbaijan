import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { getGraduateStories } from '@/lib/db';
import { Quote, GraduationCap, Award, ArrowRight } from 'lucide-react';

export const revalidate = 0;

export default async function GraduatesPage() {
  const stories = await getGraduateStories();

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />

      <main className="flex-1 py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-100 text-p4c-navy text-xs font-bold">
              <GraduationCap className="w-3.5 h-3.5 text-p4c-cyan" />
              <span>İştirakçı Təcrübələri və Nəticələr</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
              Məzunlarımızın Hekayələri
            </h1>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              P4C fasilatatorluq təlimlərini və fəlsəfə atelyelərini bitirən müəllim, tələbə və valideynlərimizin
              real təcrübə və fikirləri.
            </p>
          </div>

          {/* Stories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stories.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <Quote className="w-8 h-8 text-p4c-cyan/40" />
                  <p className="text-slate-700 text-sm leading-relaxed italic">
                    «{item.story}»
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center space-x-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-p4c-cyan shrink-0">
                    <Image
                      src={item.photo_url}
                      alt={item.student_name}
                      fill
                      sizes="48px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-slate-900">{item.student_name}</h4>
                    <p className="text-[11px] text-slate-500">{item.role}</p>
                    <span className="inline-block text-[10px] font-semibold text-p4c-navy bg-blue-50 px-2 py-0.5 rounded mt-1">
                      {item.course_attended} ({item.year})
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to action */}
          <div className="bg-gradient-to-r from-blue-900 to-p4c-navy text-white rounded-3xl p-8 sm:p-12 text-center space-y-4 shadow-xl">
            <h3 className="text-2xl sm:text-3xl font-extrabold">Siz də bu ailənin bir parçası olun!</h3>
            <p className="text-slate-200 text-sm max-w-xl mx-auto">
              Özünüz və ya övladınız üçün uyğun P4C proqramını seçin, fəlsəfi düşüncə bacarıqlarınızı dərhal inkişaf etdirməyə başlayın.
            </p>
            <div className="pt-2">
              <a
                href="/kurslar"
                className="inline-flex items-center space-x-2 px-7 py-3.5 rounded-xl font-bold text-sm bg-p4c-cyan text-p4c-navy hover:bg-white transition shadow-lg"
              >
                <span>Kurslarımızı Seçin</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
