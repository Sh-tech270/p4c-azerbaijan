'use client';

import React, { useState } from 'react';
import { VideoItem } from '@/lib/types';
import { Play, Video, ExternalLink } from 'lucide-react';

interface VideoSectionProps {
  videos: VideoItem[];
}

export default function VideoSection({ videos }: VideoSectionProps) {
  const [activeVideo, setActiveVideo] = useState<VideoItem>(videos[0] || null);

  if (!videos || videos.length === 0) return null;

  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center space-x-2 text-xs font-bold text-p4c-cyan tracking-wider uppercase mb-2">
              <Video className="w-4 h-4" />
              <span>Maarifləndirici Resurslar</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Faydalı Fəlsəfə və P4C Video Materialları
            </h2>
          </div>
          <a
            href="/videolar"
            className="text-sm font-semibold text-p4c-cyan hover:underline flex items-center space-x-1"
          >
            <span>Bütün videolara bax</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Selected Video Player */}
          <div className="lg:col-span-8 bg-slate-800 rounded-3xl overflow-hidden border border-slate-700 shadow-2xl">
            <div className="relative aspect-video w-full bg-black">
              <iframe
                src={`https://www.youtube.com/embed/${activeVideo.youtube_id}?rel=0`}
                title={activeVideo.title}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="p-6">
              <div className="inline-block bg-p4c-cyan/20 text-p4c-cyan text-xs font-bold px-3 py-1 rounded-full mb-2">
                {activeVideo.category}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{activeVideo.title}</h3>
              <p className="text-sm text-slate-300 leading-relaxed">{activeVideo.description}</p>
              <div className="mt-4 pt-3 border-t border-slate-700/60 text-xs text-slate-400">
                Təqdim edən: <strong className="text-slate-200">{activeVideo.speaker}</strong>
              </div>
            </div>
          </div>

          {/* Video List Playlist */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">
              Digər Video Dərslər
            </h4>
            {videos.map((vid) => (
              <button
                key={vid.id}
                onClick={() => setActiveVideo(vid)}
                className={`w-full text-left p-3.5 rounded-2xl border transition-all flex items-start space-x-3.5 ${
                  activeVideo.id === vid.id
                    ? 'bg-slate-800 border-p4c-cyan text-white shadow-lg'
                    : 'bg-slate-800/40 border-slate-800 text-slate-300 hover:bg-slate-800 hover:border-slate-700'
                }`}
              >
                <div className="w-10 h-10 rounded-xl bg-p4c-navy flex items-center justify-center shrink-0 mt-0.5">
                  <Play className="w-4 h-4 text-p4c-cyan fill-p4c-cyan" />
                </div>
                <div>
                  <div className="text-xs font-semibold line-clamp-2 leading-snug">{vid.title}</div>
                  <div className="text-[10px] text-slate-400 mt-1">{vid.speaker}</div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
