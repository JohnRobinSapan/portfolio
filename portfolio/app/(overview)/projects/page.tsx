
import type { Metadata } from 'next';
import GenericForm from '@/app/components/generic-form';
import Submit from '@/app/components/submit';
import { authenticate } from '@/app/api/auth';

export const metadata: Metadata = {
  title: 'Projects',
  description:
    "These are my projects.",
};


export default function Page() {
  const formProps = {
    action: authenticate
  };

  return (
    <section>
      <div className='lg:ml-56 pt-12'>
        <h1 className="text-2xl mb-8">Projects</h1>
        <p>
          WIP
        </p>
      </div>
      {/* <GenericForm {...formProps}>
        <Submit />
      </GenericForm> */}
    </section>
  );
}
