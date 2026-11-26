'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageSquare, Clock } from 'lucide-react';

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />

      <main className="flex-1 py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-100 text-p4c-navy text-xs font-bold">
              <MessageSquare className="w-3.5 h-3.5 text-p4c-cyan" />
              <span>Əlaqə və Konsultasiya</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
              Bizimlə Əlaqə Saxlayın
            </h1>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Kurslar, məktəb əməkdaşlığı və ya ümumi suallarınızla bağlı komandamızla birbaşa əlaqə qura bilərsiniz.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Contact Info (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-sm space-y-6">
                <h3 className="text-xl font-bold text-slate-900">Rəsmi Əlaqə Məlumatları</h3>

                <div className="space-y-4 text-sm text-slate-600">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-p4c-navy flex items-center justify-center shrink-0 mt-0.5">
                      <MapPin className="w-5 h-5 text-p4c-cyan" />
                    </div>
                    <div>
                      <strong className="block text-slate-900 text-xs font-bold uppercase tracking-wider">Ünvan</strong>
                      <span>Bakı şəhəri, Nizami küçəsi 142</span>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-p4c-navy flex items-center justify-center shrink-0 mt-0.5">
                      <Phone className="w-5 h-5 text-p4c-cyan" />
                    </div>
                    <div>
                      <strong className="block text-slate-900 text-xs font-bold uppercase tracking-wider">Telefon</strong>
                      <a href="tel:+994124004440" className="hover:text-p4c-navy font-semibold">
                        +994 (12) 400 44 40
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-p4c-navy flex items-center justify-center shrink-0 mt-0.5">
                      <MessageSquare className="w-5 h-5 text-emerald-600" />
                    </div>
                    <div>
                      <strong className="block text-slate-900 text-xs font-bold uppercase tracking-wider">WhatsApp</strong>
                      <a href="https://wa.me/994504404440" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-700 font-semibold">
                        +994 (50) 440 44 40
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-p4c-navy flex items-center justify-center shrink-0 mt-0.5">
                      <Mail className="w-5 h-5 text-p4c-cyan" />
                    </div>
                    <div>
                      <strong className="block text-slate-900 text-xs font-bold uppercase tracking-wider">E-poçt</strong>
                      <a href="mailto:info@p4cazerbaijan.az" className="hover:text-p4c-navy font-semibold">
                        info@p4cazerbaijan.az
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-p4c-navy flex items-center justify-center shrink-0 mt-0.5">
                      <Clock className="w-5 h-5 text-p4c-cyan" />
                    </div>
                    <div>
                      <strong className="block text-slate-900 text-xs font-bold uppercase tracking-wider">İş Saatları</strong>
                      <span>Bazar ertəsi – Şənbə: 09:30 – 18:30</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Message Form (7 cols) */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/80 shadow-xl">
                {!sent ? (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Bizə Mesaj Göndərin</h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Ad və Soyad</label>
                        <input
                          type="text"
                          required
                          placeholder="Adınız"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-p4c-cyan text-sm"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase mb-1">E-poçt</label>
                        <input
                          type="email"
                          required
                          placeholder="e-poct@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-p4c-cyan text-sm"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Telefon</label>
                        <input
                          type="tel"
                          placeholder="+994 XX XXX XX XX"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-p4c-cyan text-sm"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Mövzu</label>
                        <input
                          type="text"
                          placeholder="Məs: Kurs haqqında sual"
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-p4c-cyan text-sm"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Mesajınız</label>
                      <textarea
                        rows={4}
                        required
                        placeholder="Sual və ya təklifinizi bura qeyd edin..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-p4c-cyan text-sm"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-xl font-bold text-sm text-white bg-p4c-navy hover:bg-p4c-navy-light shadow-md transition flex items-center justify-center space-x-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>Mesajı Göndər</span>
                    </button>
                  </form>
                ) : (
                  <div className="text-center py-10 space-y-4">
                    <div className="w-16 h-16 mx-auto rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900">Mesajınız Uğurla Göndərildi!</h3>
                    <p className="text-sm text-slate-600 max-w-sm mx-auto">
                      Müraciətiniz üçün təşəkkür edirik. Əməkdaşlarımız ən qısa zamanda sizinlə əlaqə saxlayacaqlar.
                    </p>
                    <button
                      onClick={() => setSent(false)}
                      className="text-xs font-bold text-p4c-navy hover:underline pt-2"
                    >
                      Yeni mesaj göndər
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
