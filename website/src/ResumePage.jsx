import React from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "./index.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

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
