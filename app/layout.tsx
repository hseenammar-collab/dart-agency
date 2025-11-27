import './globals.css';
import type { Metadata } from 'next';
import { Inter, Tajawal } from 'next/font/google';
import { LanguageProvider } from '@/lib/language-context';
import { Toaster } from '@/components/ui/toaster';

// Optimized font loading with display swap and subset
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  preload: true,
});

const tajawal = Tajawal({
  subsets: ['arabic'],
  weight: ['400', '500', '700', '800'],
  variable: '--font-tajawal',
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  title: 'Dart Agency | أفضل وكالة تسويق رقمي في العراق',
  description: 'وكالة دارت للتسويق الرقمي في بغداد. تصميم، إعلانات Meta/Google/TikTok، إنتاج فيديو، أتمتة AI. $425K+ إنفاق مُدار بمتوسط ROAS 6.6x',
  keywords: 'تسويق رقمي العراق, وكالة إعلانات بغداد, digital marketing iraq, social media iraq',
  authors: [{ name: 'Dart Agency' }],
  metadataBase: new URL('https://dartagency.iq'),
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/logo.png', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
      { url: '/logo.png', sizes: '192x192', type: 'image/png' },
    ],
    shortcut: '/logo.png',
  },
  openGraph: {
    title: 'Dart Agency | وكالة التسويق الرقمي',
    description: 'أفضل وكالة تسويق رقمي في العراق',
    url: 'https://dartagency.iq',
    type: 'website',
    locale: 'ar_IQ',
    siteName: 'Dart Agency',
    images: [
      {
        url: '/logo.png',
        width: 512,
        height: 512,
        alt: 'Dart Agency Logo',
      },
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Dart Agency - Digital Marketing Excellence',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dart Agency | دارت للتسويق الرقمي',
    description: 'أفضل وكالة تسويق رقمي في العراق',
    images: ['/og-image.png'],
    creator: '@dartagency',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  manifest: '/manifest.json',
  other: {
    'msapplication-TileImage': '/logo.png',
    'msapplication-TileColor': '#E63946',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#DAA520" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />

        {/* Preconnect to external domains for faster loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* DNS prefetch for potential external resources */}
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://wa.me" />

        {/* Preload critical fonts */}
        <link
          rel="preload"
          href="/fonts/tajawal-v9-arabic-700.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body
        className={`${inter.variable} ${tajawal.variable} font-sans scroll-smooth antialiased`}
        suppressHydrationWarning
      >
        <LanguageProvider>
          {children}
          <Toaster />
        </LanguageProvider>
      </body>
    </html>
  );
}
