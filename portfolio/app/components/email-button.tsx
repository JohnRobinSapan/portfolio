
import Link from 'next/link';

export default function EmailButton({ email, subject, body }) {
    const encodedSubject = encodeURIComponent(subject);
    const encodedBody = encodeURIComponent(body);
    return (
        <a href={`mailto:${email}?subject=${encodedSubject}&body=${encodedBody}`}
            className="px-3 py-2 border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded p-1 text-sm inline-flex items-center leading-4 text-neutral-900 dark:text-neutral-100 mb-8">
            Send Email
        </a>
    );
}