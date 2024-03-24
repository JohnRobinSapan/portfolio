"use client";

import Image from 'next/image'
import { useState, useRef, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import useResizeObserver from '@react-hook/resize-observer'
import spinner from 'public/spinner.svg'
import LinkButton from 'app/components/link-button'
import { getResumeUrl } from 'app/api/send-email'

pdfjs.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.js";

type Props = {
    document?: any;
    filename?: string;
    isLoading?: boolean;
    className?: React.CSSProperties | string;
};

const LoadingScreen = () => (
    <div className="pt-10">
        <Image
            src={spinner}
            width={24}
            height={24}
            alt='loading'
        />
    </div>
);

export default function PdfExport(props: Props) {
    const sheetContentRef = useRef(null);
    const [pageWidth, setPageWidth] = useState(0);
    const [resumeUrl, setResumeUrl] = useState<string | null>(null);
    const isFetchingResume = useRef(false);

    const handleResize = (entry) => {
        const { width } = entry.contentRect;
        const margin = 0; // Adjust this margin as necessary
        setPageWidth(width - margin);
    };

    useResizeObserver(sheetContentRef, handleResize);

    useEffect(() => {
        if (!isFetchingResume.current) {
            isFetchingResume.current = true;
            const fetchResumeUrl = async () => {
                try {
                    let url = localStorage.getItem('resumeUrl') as string;
                    if (!url) {
                        url = await getResumeUrl();
                        localStorage.setItem('resumeUrl', url);
                    }
                    setResumeUrl(url);
                } catch (error) {
                    console.error('Error fetching resume URL:', error);
                } finally {
                    isFetchingResume.current = false;
                }
            };
            fetchResumeUrl();
        }
    }, []);

    const documentUrl = resumeUrl ? `${resumeUrl}?timestamp=${Date.now()}` : null;
    const loading = !documentUrl;
    return (
        <div id="pdf" ref={sheetContentRef} className={`${props.className} flex flex-col mx-auto max-w-screen-lg items-center`}>
            {documentUrl &&
                <LinkButton href={documentUrl} target='_blank' rel='noopener' prefetch={false}>
                    Download Resume
                </LinkButton>
            }
            <Document file={documentUrl} loading={loading ? <LoadingScreen /> : null}>
                <Page
                    loading={loading ? <LoadingScreen /> : null}
                    pageNumber={1}
                    error={"Error"}
                    width={pageWidth}
                />
            </Document>
        </div>
    );
};
