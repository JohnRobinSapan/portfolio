import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Work',
  description:
    "This is my work experience.",
};


export default function Page() {
  return (
    <section>
      <h1 className="text-2xl mb-8">my work</h1>
      <p className="prose-default">
        This is where your work experience goes.
      </p>
    </section>
  );
}
