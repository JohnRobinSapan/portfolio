
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Work',
  description:
    "This is my work experience.",
};


export default function Page() {
  return (
    <section>
      <h1 className="text-2xl mb-8">Work</h1>
      <p className="prose-default">
        WIP
      </p>
    </section>
  );
}
