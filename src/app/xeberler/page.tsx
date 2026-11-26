import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { getNews } from '@/lib/db';
import { Newspaper, Calendar, User, ArrowRight } from 'lucide-react';

export const revalidate = 0;

export default async function NewsPage() {
  const newsList = await getNews();

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />

      <main className="flex-1 py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-100 text-p4c-navy text-xs font-bold">
              <Newspaper className="w-3.5 h-3.5 text-p4c-cyan" />
              <span>Məqalələr və Yeniliklər</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
              Xəbərlər və Maarifləndirici Məqalələr
            </h1>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              P4C metodologiyası, pedaqoji tədqiqatlar, layihə xəbərləri və təhsil yenilikləri haqqında ən son məlumatlar.
            </p>
          </div>

          {/* News Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsList.map((item) => (
              <article
                key={item.id}
                className="bg-white rounded-3xl border border-slate-200/80 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Image */}
                  <div className="relative h-52 w-full bg-slate-100 overflow-hidden">
                    <Image
                      src={item.cover_image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover group-hover:scale-105 transition duration-300"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-p4c-navy text-white shadow">
                        {item.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-3">
                    <div className="flex items-center space-x-4 text-xs text-slate-400">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{item.published_at}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <User className="w-3.5 h-3.5" />
                        <span>{item.author}</span>
                      </div>
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-p4c-navy transition leading-snug">
                      <a href={`/xeberler/${item.slug}`}>{item.title}</a>
                    </h3>

                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                      {item.excerpt}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <a
                    href={`/xeberler/${item.slug}`}
                    className="inline-flex items-center space-x-1 text-xs font-bold text-p4c-navy hover:text-p4c-cyan transition"
                  >
                    <span>Məqaləni oxu</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
