import PdfExport from 'app/components/view-pdf'
import type { Metadata } from 'next';
import UploadForm from 'app/components/upload-form'

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
            <UploadForm />
            <PdfExport {...props} />
        </section>
    );
}