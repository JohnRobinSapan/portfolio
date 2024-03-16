"use client";

import Image from 'next/image'
import { useState, useRef } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import useResizeObserver from '@react-hook/resize-observer'
import spinner from 'public/spinner.svg'
import LinkButton from 'app/components/link-button'

pdfjs.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.js";


type Props = {
    document: any;
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
    const { document } = props;
    const { url, loading } = document;

    const sheetContentRef = useRef(null);
    const [pageWidth, setPageWidth] = useState(0);

    const handleResize = (entry) => {
        const { width } = entry.contentRect;
        const margin = 0; // Adjust this margin as necessary
        setPageWidth(width - margin);
    };

    useResizeObserver(sheetContentRef, handleResize);


    return (
        <div id="pdf" ref={sheetContentRef} className={`${props.className} flex flex-col mx-auto max-w-screen-lg items-center`}>
            <LinkButton href={url} target='_blank' rel='noopener'>
                Download Resume
            </LinkButton>
            <Document file={url} loading={loading ? <LoadingScreen /> : null}>
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