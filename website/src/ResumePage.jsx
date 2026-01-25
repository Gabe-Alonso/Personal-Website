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
            <div style={{
                display: "flex",
                justifyContent: "center",
                marginBottom: "20px"
            }}>
                <a
                    href="/resume.pdf"
                    download="Gabriel_Alonso_Resume.pdf"
                    style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "8px",
                        padding: "12px 24px",
                        backgroundColor: "#2563eb",
                        color: "white",
                        textDecoration: "none",
                        borderRadius: "8px",
                        fontSize: "16px",
                        fontWeight: "500",
                        transition: "background-color 0.2s ease"
                    }}
                    onMouseOver={(e) => e.target.style.backgroundColor = "#1d4ed8"}
                    onMouseOut={(e) => e.target.style.backgroundColor = "#2563eb"}
                >
                    <DownloadIcon />
                    Download Resume
                </a>
            </div>
            <PdfViewer />
        </div>
    );
}

function DownloadIcon() {
    return (
        <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
        </svg>
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
