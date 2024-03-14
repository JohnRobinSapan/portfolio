"use client";

import Image from 'next/image'
import { useState, useCallback } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import useResizeObserver from 'app/hooks/useResizeObserver'
import spinner from 'public/spinner.svg'


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

const resizeObserverOptions = {};
const maxWidth = 1200;


export default function PdfExport(props: Props) {
    const { document } = props;
    const { url, loading } = document;

    const [parentRef, setParentRef] = useState<HTMLElement | null>(null);
    const [containerWidth, setContainerWidth] = useState<number>();


    const onResize = useCallback<ResizeObserverCallback>((entries) => {
        const [entry] = entries;

        if (entry) {
            setContainerWidth(entry.contentRect.width);
        }
    }, []);


    useResizeObserver(parentRef, resizeObserverOptions, onResize);


    return (
        <div id="pdf" ref={setParentRef} className={`${props.className} mx-auto max-w-screen-xl`}>
            <Document file={url} loading={loading ? <LoadingScreen /> : null} >
                {/* <button>Download {maxWidth} {containerWidth}</button> */}
                <Page
                    loading={loading ? <LoadingScreen /> : null}
                    pageNumber={1}
                    error={"Error"}
                    width={containerWidth ? Math.min(containerWidth, maxWidth) : maxWidth}
                />
            </Document>
        </div>
    );
};