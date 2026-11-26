import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'P4C Azərbaycan — Uşaqlarla, Gənclərlə və Böyüklərlə Fəlsəfə',
  description:
    'Philosophy for Children (P4C) Azərbaycan rəsmi veb-platforması. Community of Inquiry, tənqidi və yaradıcı düşüncə, təlimçi sertifikasiya proqramları və fəlsəfə atelyeləri.',
  keywords: [
    'P4C Azərbaycan',
    'Philosophy for Children',
    'Uşaqlar üçün fəlsəfə',
    'Tənqidi təfəkkür',
    'Fasilatatorluq təlimi',
    'Sokratik dialoq',
    'Community of Inquiry',
    'Fəlsəfə atelyesi',
    'Müəllim təlimləri',
  ],
  authors: [{ name: 'P4C Azərbaycan' }],
  metadataBase: new URL('https://p4cazerbaijan.az'),
  openGraph: {
    title: 'P4C Azərbaycan — Uşaqlarla, Gənclərlə və Böyüklərlə Fəlsəfə',
    description:
      'Tənqidi, yaradıcı, əməkdaşlıq və qayğıkeş (4C) düşünmə bacarıqlarını inkişaf etdirən milli fəlsəfi təhsil platforması.',
    url: 'https://p4cazerbaijan.az',
    siteName: 'P4C Azərbaycan',
    images: [
      {
        url: '/images/logo-horizontal.jpg',
        width: 1200,
        height: 630,
        alt: 'P4C Azərbaycan Logo',
      },
    ],
    locale: 'az_AZ',
    type: 'website',
  },
  icons: {
    icon: '/images/logo-square.jpg',
    apple: '/images/logo-square.jpg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="az" className="scroll-smooth" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col font-sans bg-white text-slate-900 antialiased selection:bg-p4c-cyan selection:text-p4c-navy" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
