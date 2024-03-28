import 'app/global.css';
import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
// import { SandpackCSS } from 'app/(overview)/_blog/[slug]/sandpack';
import { ThemeProvider } from 'next-themes'
import { Navbar } from 'app/components/nav';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import Scroll from 'app/components/scroll';

export const metadata: Metadata = {
  metadataBase: new URL('https://johnsapan.com'),
  title: {
    default: ' Home | John Sapan',
    template: '%s | John Sapan',
  },
  description: 'Developer',
  openGraph: {
    title: 'John Sapan',
    description: 'Developer',
    url: 'https://johnsapan.com',
    siteName: 'John Sapan',
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
    title: 'John Sapan',
    card: 'summary_large_image',
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
      suppressHydrationWarning
      lang="en"
      className={cx(
        GeistSans.variable,
        GeistMono.variable
      )}
    >
      <Scroll />
      {/* <head>
        <SandpackCSS />
      </head> */}
      <body className="antialiased flex flex-col bg-gray-100 dark:bg-[#111010]">
        <ThemeProvider attribute="class">
          <div className='z-50 fixed w-full'>
            <Navbar />
          </div>
          {children}
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
