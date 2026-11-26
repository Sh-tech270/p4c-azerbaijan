import React from 'react';
import { notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { getNews } from '@/lib/db';
import { Calendar, User, ArrowLeft, Share2, ChevronRight } from 'lucide-react';

interface NewsDetailPageProps {
  params: { slug: string };
}

export const revalidate = 0;

export async function generateStaticParams() {
  const news = await getNews();
  return news.map((item) => ({
    slug: item.slug,
  }));
}

export default async function NewsDetailPage({ params }: NewsDetailPageProps) {
  const newsList = await getNews();
  const article = newsList.find((n) => n.slug === params.slug);

  if (!article) {
    notFound();
  }

  const related = newsList.filter((n) => n.id !== article.id).slice(0, 2);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />

      <main className="flex-1 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Breadcrumb */}
          <nav className="flex items-center space-x-2 text-xs text-slate-500">
            <a href="/" className="hover:text-slate-900 transition">
              Ana Səhifə
            </a>
            <ChevronRight className="w-3.5 h-3.5" />
            <a href="/xeberler" className="hover:text-slate-900 transition">
              Xəbərlər
            </a>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-slate-800 font-semibold truncate max-w-xs">{article.title}</span>
          </nav>

          <article className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-md space-y-6">
            <div className="space-y-3">
              <span className="inline-block text-xs font-bold px-3 py-1 rounded-full bg-blue-100 text-p4c-navy">
                {article.category}
              </span>
              <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
                {article.title}
              </h1>
              <div className="flex items-center space-x-4 text-xs text-slate-500 pt-2 border-b border-slate-100 pb-4">
                <div className="flex items-center space-x-1.5">
                  <Calendar className="w-4 h-4 text-p4c-cyan" />
                  <span>{article.published_at}</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <User className="w-4 h-4 text-p4c-navy" />
                  <span>{article.author}</span>
                </div>
              </div>
            </div>

            {/* Featured Image */}
            <div className="relative h-72 sm:h-96 w-full rounded-2xl overflow-hidden shadow-sm bg-slate-100">
              <Image
                src={article.cover_image}
                alt={article.title}
                fill
                sizes="(max-width: 768px) 100vw, 800px"
                className="object-cover"
                priority
              />
            </div>

            {/* Article Content */}
            <div className="text-slate-700 text-base leading-relaxed space-y-4 whitespace-pre-line pt-4">
              {article.content}
            </div>

            {/* Back link */}
            <div className="pt-8 border-t border-slate-100 flex items-center justify-between">
              <a
                href="/xeberler"
                className="inline-flex items-center space-x-2 text-xs font-bold text-p4c-navy hover:text-p4c-cyan transition"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Bütün Xəbərlərə Qayıt</span>
              </a>
            </div>
          </article>

          {/* Related Articles */}
          {related.length > 0 && (
            <div className="space-y-4 pt-6">
              <h3 className="text-lg font-bold text-slate-900">Əlaqəli Məqalələr</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {related.map((item) => (
                  <a
                    key={item.id}
                    href={`/xeberler/${item.slug}`}
                    className="p-4 bg-white rounded-2xl border border-slate-200/80 hover:shadow-md transition block"
                  >
                    <div className="text-[10px] font-bold text-p4c-cyan uppercase">{item.category}</div>
                    <div className="text-sm font-bold text-slate-900 mt-1 line-clamp-2">{item.title}</div>
                    <div className="text-xs text-slate-400 mt-2">{item.published_at}</div>
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
