import PdfExport from 'app/components/view-pdf'
import type { Metadata } from 'next';
// import UploadForm from 'app/components/upload-form'
import { Suspense } from 'react';


export const metadata: Metadata = {
    title: 'Resume',
    description:
        "This is my resume.",
};

// TODO: Add admin page for replacing/updating resume
export default function Page() {
    const props = {
        filename: 'johnsapan-resume',
    }
    return (
        <section>
            <Suspense fallback={<p className='text-center'>Loading resume...</p>}>
                {/* <UploadForm /> */}
                <PdfExport {...props} />
            </Suspense>
        </section>
    );
}