import React from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "./index.css";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

// Configure the worker to use react-pdf's bundled pdfjs-dist
pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

export function ResumePage() {
    return (
        <div>
            <h1>Resume Page</h1>
            <PdfViewer />
        </div>
    );
}

function PdfViewer() {
    return (
        <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
            <Document file="/resume.pdf">
                <Page pageNumber={1} />
            </Document>
        </div>
    );
}
