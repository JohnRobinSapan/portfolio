"use client";

import {
    BlobProvider,
} from "@react-pdf/renderer";
import { useRef } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import Image from 'next/image'
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import spinner from 'public/spinner.svg'


// //this due a Worker not found error
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    "pdfjs-dist/build/pdf.worker.min.js",
    import.meta.url
).toString();

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

    const parentRef = useRef<HTMLDivElement>(null);
    
    return (
        <div id="pdf" ref={parentRef} className={props.className + ""}>
            <Document file={url} loading={loading ? <LoadingScreen /> : null}>
                <Page
                    loading={loading ? <LoadingScreen /> : null}
                    pageNumber={1}
                    error={"Error"}
                    width={parentRef.current?.clientWidth}
                />
            </Document>
        </div>
    );
};