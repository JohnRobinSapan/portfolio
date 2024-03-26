
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects',
  description:
    "These are my projects.",
};


export default function Page() {
  return (
    <section>
      <div className='lg:ml-56 pt-12 prose dark:prose-invert'>
        <h1 className="text-2xl mb-8">Projects</h1>
        <p>
          WIP
        </p>
      </div>
    </section>
  );
}
