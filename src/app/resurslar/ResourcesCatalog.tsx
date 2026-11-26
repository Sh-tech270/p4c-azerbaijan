'use client';

import React, { useState } from 'react';
import { ResourceItem, ResourceCategory } from '@/lib/types';
import {
  Search,
  BookOpen,
  Download,
  FileText,
  FileArchive,
  Layers,
  Filter,
} from 'lucide-react';

interface ResourcesCatalogProps {
  initialResources: ResourceItem[];
}

export default function ResourcesCatalog({ initialResources }: ResourcesCatalogProps) {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('Hamısı');

  const categories = [
    'Hamısı',
    'Metodik Vəsait',
    'Kitab',
    'Atelye Materialı',
    'Təlimçi Bələdçisi',
    'Tədqiqat və Məqalə',
  ];

  const filtered = initialResources.filter((item) => {
    const matchesSearch =
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.description.toLowerCase().includes(search.toLowerCase()) ||
      (item.author && item.author.toLowerCase().includes(search.toLowerCase()));

    const matchesCategory =
      selectedCategory === 'Hamısı' || item.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const getFormatBadge = (format: string) => {
    switch (format.toUpperCase()) {
      case 'PDF':
        return {
          bg: 'bg-red-50 text-red-600 border-red-200',
          icon: <FileText className="w-3.5 h-3.5 mr-1" />,
        };
      case 'DOCX':
        return {
          bg: 'bg-blue-50 text-blue-700 border-blue-200',
          icon: <FileText className="w-3.5 h-3.5 mr-1" />,
        };
      case 'ZIP':
        return {
          bg: 'bg-amber-50 text-amber-700 border-amber-200',
          icon: <FileArchive className="w-3.5 h-3.5 mr-1" />,
        };
      default:
        return {
          bg: 'bg-slate-50 text-slate-700 border-slate-200',
          icon: <FileText className="w-3.5 h-3.5 mr-1" />,
        };
    }
  };

  return (
    <div className="space-y-8">
      {/* Search & Category Filter Controls */}
      <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-sm space-y-4">
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
          <div className="relative w-full sm:max-w-md">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
            <input
              type="text"
              placeholder="Material, kitab və ya müəllif axtarın..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#00B4D8]"
            />
          </div>

          <div className="text-xs text-slate-500 font-medium">
            Tapılan material: <strong className="text-slate-900">{filtered.length}</strong>
          </div>
        </div>

        {/* Filter Badges */}
        <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-100">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition ${
                selectedCategory === cat
                  ? 'bg-[#0B357B] text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Catalog Grid */}
      {filtered.length === 0 ? (
        <div className="bg-white rounded-3xl p-12 text-center text-slate-400 space-y-2 border border-slate-200">
          <BookOpen className="w-10 h-10 mx-auto text-slate-300" />
          <div className="font-bold text-slate-700 text-sm">Axtarışa uyğun material tapılmadı</div>
          <p className="text-xs">Axtarış sözünü dəyişin və ya kateqoriya filtrini sıfırlayın.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((item) => {
            const badge = getFormatBadge(item.file_format);

            return (
              <div
                key={item.id}
                className="bg-white rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group"
              >
                <div>
                  {/* Book Cover */}
                  <div className="relative h-48 w-full bg-slate-100 overflow-hidden">
                    <img
                      src={
                        item.cover_url ||
                        'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80'
                      }
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

                    <div className="absolute top-3 left-3">
                      <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-[#0B357B] text-white shadow">
                        {item.category}
                      </span>
                    </div>

                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-[11px] font-medium">
                      <span>{item.author || 'P4C Azərbaycan'}</span>
                      {item.pages && <span>{item.pages} səhifə</span>}
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-6 space-y-2.5">
                    <div className="flex items-center justify-between">
                      <span
                        className={`inline-flex items-center text-[11px] font-bold px-2 py-0.5 rounded-md border ${badge.bg}`}
                      >
                        {badge.icon}
                        <span>{item.file_format} • {item.file_size}</span>
                      </span>

                      {item.published_year && (
                        <span className="text-[11px] text-slate-400 font-medium">
                          Nəşr: {item.published_year}
                        </span>
                      )}
                    </div>

                    <h3 className="font-bold text-base text-slate-900 group-hover:text-[#0B357B] transition line-clamp-2">
                      {item.title}
                    </h3>

                    <p className="text-xs text-slate-500 line-clamp-3 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Download Button */}
                <div className="p-6 pt-0">
                  <a
                    href={item.download_url}
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center space-x-2 py-3 px-4 rounded-xl font-bold text-xs bg-slate-100 hover:bg-[#0B357B] text-slate-800 hover:text-white transition group-hover:bg-[#0B357B] group-hover:text-white shadow-sm"
                  >
                    <Download className="w-4 h-4" />
                    <span>Materialı Endir ({item.file_size})</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
