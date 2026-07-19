import './globals.css';
import Link from 'next/link';
import type { Metadata } from 'next';

const siteName = 'Business Analyst Spark';
const faviconPath = '/favicon.svg';
const siteDescription = 'Daily business analysis, finance, data science, and strategic insight for professionals who want sharper decisions and clearer reasoning.';
const siteUrl = 'https://businessanalystspark.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} | Daily Business Analysis & Finance Insights`,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  keywords: [
    'business analysis',
    'data analysis',
    'finance insight',
    'corporate finance',
    'strategic thinking',
    'data science',
    'accounting',
    'analytical reasoning',
    'daily insights',
  ],
  authors: [{ name: 'Rafael Rodrigues Troiani' }],
  creator: 'Rafael Rodrigues Troiani',
  publisher: siteName,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: `${siteName} | Daily Business Analysis & Finance Insights`,
    description: siteDescription,
    url: siteUrl,
    siteName,
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: faviconPath,
        width: 512,
        height: 512,
        alt: `${siteName} favicon`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteName} | Daily Business Analysis & Finance Insights`,
    description: siteDescription,
    creator: '@rafaelrtroiani',
    images: [faviconPath],
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
  icons: {
    icon: [{ url: faviconPath, type: 'image/svg+xml' }],
    apple: [{ url: faviconPath }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-zinc-950 text-zinc-100 antialiased">
        <header className="border-b border-zinc-800 bg-zinc-950 sticky top-0 z-50">
          <nav className="max-w-2xl mx-auto px-6 py-6 flex items-center justify-between">
            <Link href="/" className="text-lg font-light tracking-tight hover:text-zinc-300 transition-colors">
              Business Analyst Spark
            </Link>
            <ul className="flex items-center gap-8">
              <li>
                <Link href="/" className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors">
                  Daily
                </Link>
              </li>
              <li>
                <Link href="/info" className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors">
                  Info
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        <main>{children}</main>
        <footer className="border-t border-zinc-800 mt-16 py-8 text-center text-xs text-zinc-500 uppercase tracking-widest">
          <p>© 2026 Business Analyst Spark. All insights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
