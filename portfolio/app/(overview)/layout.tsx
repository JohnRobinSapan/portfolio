import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='overflow-hidden'>
      <main className="flex-auto mt-12 px-2 md:px-0 max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-8 min-h-screen">
        {children}
      </main>
      <Analytics />
      <SpeedInsights />
    </div>
  );
}
