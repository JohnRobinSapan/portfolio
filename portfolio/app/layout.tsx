import './global.css';
import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { SandpackCSS } from './blog/[slug]/sandpack';
import { Navbar } from './components/nav';


export const metadata: Metadata = {
  metadataBase: new URL('https://johnsapan.io'),
  title: {
    default: ' Home | John Robin Sapan',
    template: '%s | John Robin Sapan',
  },
  description: 'Developer',
  openGraph: {
    title: 'John Robin Sapan',
    description: 'Developer',
    url: 'https://johnsapan.io',
    siteName: 'John Robin Sapan',
    locale: 'en_US',
    type: 'website',
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
  twitter: {
    title: 'John Robin Sapan',
    card: 'summary_large_image',
  },
  verification: {
    google: 'eZSdmzAXlLkKhNJzfgwDqWORghxnJ8qR9_CHdAh5-xw',
    yandex: '14d2e73487fa6c71',
  },
};

const cx = (...classes) => classes.filter(Boolean).join(' ');

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cx(
        'text-black bg-white dark:text-white dark:bg-[#111010]',
        GeistSans.variable,
        GeistMono.variable
      )}
    >
      <head>
        <SandpackCSS />
      </head>
      <body className="antialiased mb-40 mx-4 mt-8 flex flex-col">
        <div className='flex-auto lg:sticky lg:top-8'>
          <Navbar />
        </div>
        <main className="flex-auto min-w-0 mt-6 px-2 md:px-0 ">
          {children}
        </main>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
