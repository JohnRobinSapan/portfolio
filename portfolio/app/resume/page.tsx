import PdfExport from 'app/components/view-pdf'
import type { Metadata } from 'next';


export const metadata: Metadata = {
    title: 'Resume',
    description:
        "This is my resume.",
};


export default function Page() {
    const props = {
        document: {
            url: '/johnsapan-resume.pdf',
            loading: false,
        },
        filename: 'johnsapan-resume',
    }
    return (
        <PdfExport {...props} />
    );
}