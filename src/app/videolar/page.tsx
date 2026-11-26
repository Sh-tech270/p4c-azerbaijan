import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import VideoSection from '@/components/VideoSection';
import { getVideos } from '@/lib/db';
import { Video, Youtube, ExternalLink } from 'lucide-react';

export const revalidate = 0;

export default async function VideosPage() {
  const videos = await getVideos();

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />

      <main className="flex-1 py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-100 text-p4c-navy text-xs font-bold">
              <Video className="w-3.5 h-3.5 text-p4c-cyan" />
              <span>Video Dərslik və Dialoq Arxivimiz</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
              Faydalı Video Materiallar
            </h1>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              P4C, fəlsəfə, uşaqlarla Sokratik dialoq, fasilatasiya nümunələri və təhsil metodologiyası üzrə
              seçilmiş rəsmi video dərslər.
            </p>
          </div>

          {/* Interactive Player Component */}
          <VideoSection videos={videos} />

          {/* Video Grid */}
          <div className="space-y-6 pt-6">
            <h3 className="text-xl font-bold text-slate-900">Bütün Videolar</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {videos.map((vid) => (
                <div
                  key={vid.id}
                  className="bg-white rounded-3xl border border-slate-200/80 overflow-hidden shadow-sm hover:shadow-lg transition-all"
                >
                  <div className="relative aspect-video w-full bg-black">
                    <iframe
                      src={`https://www.youtube.com/embed/${vid.youtube_id}?rel=0`}
                      title={vid.title}
                      className="w-full h-full border-0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                  <div className="p-5 space-y-2">
                    <span className="text-[10px] font-bold text-p4c-cyan uppercase">{vid.category}</span>
                    <h4 className="font-bold text-sm text-slate-900 line-clamp-2 leading-snug">{vid.title}</h4>
                    <p className="text-xs text-slate-500 line-clamp-2">{vid.description}</p>
                    <div className="pt-2 text-[11px] text-slate-400">
                      Təlimçi: <strong className="text-slate-700">{vid.speaker}</strong>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
