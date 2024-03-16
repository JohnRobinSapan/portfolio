import { auth } from 'app/auth';
import { getGuestbookEntries } from 'app/db/queries';
import { redirect } from 'next/navigation';
import Form from './form';

// TODO: replace page

export const metadata = {
  title: 'Admin',
};

export default async function GuestbookPage() {
  let session = await auth();
  if (session?.user?.email !== 'me@johnsapan.com') {
    redirect('/');
  }

  let entries = await getGuestbookEntries();

  return (
    <section>
      <h1 className="text-2xl mb-8">admin</h1>
      <Form entries={entries} />
    </section>
  );
}
