import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <main className="flex-auto min-w-0 mt-12 2xl:mx-52 lg:ml-52 px-2 md:px-0 h-screen">
        {children}
      </main>
      <Analytics />
      <SpeedInsights />
    </div>
  );
}
