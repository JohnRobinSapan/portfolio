"use client";

import PdfExport from 'app/components/view-pdf'

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