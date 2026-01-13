import React from "react";
//import "./tokens.css";
import "./index.css";
import {Link} from "react-router";

export function ContactPage() {

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "start",
            alignItems: "center",
            padding: "20px",
            minHeight: "100vh",
            gap: "20px"
        }}>
            <h1>Contact Me</h1>

            <ContactButton
                href="mailto:gabriel.dacosta.alonso@outlook.com"
                icon={<EmailIcon />}
                label="gabriel.dacosta.alonso@outlook.com"
            />

            <ContactButton
                href="https://www.linkedin.com/in/gabe-alonso/"
                icon={<LinkedInIcon />}
                label="Connect on LinkedIn"
                target="_blank"
            />
        </div>
    )
}

function ContactButton({ href, icon, label, target }) {
    return (
        <a
            href={href}
            target={target}
            rel={target === "_blank" ? "noopener noreferrer" : undefined}
            style={{
                display: "flex",
                alignItems: "center",
                gap: "15px",
                width: "100%",
                maxWidth: "500px",
                padding: "20px 30px",
                backgroundColor: "#1a1a1a",
                borderRadius: "12px",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                textDecoration: "none",
                color: "rgba(255, 255, 255, 0.87)",
                transition: "all 0.3s ease",
                cursor: "pointer"
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#2a2a2a";
                e.currentTarget.style.boxShadow = "0 6px 12px rgba(0, 0, 0, 0.15)";
                e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#1a1a1a";
                e.currentTarget.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
                e.currentTarget.style.transform = "translateY(0)";
            }}
        >
            <div style={{ flexShrink: 0 }}>
                {icon}
            </div>
            <span style={{ fontSize: "16px", fontWeight: "500" }}>
                {label}
            </span>
        </a>
    );
}

function EmailIcon() {
    return (
        <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
            <polyline points="22,6 12,13 2,6"></polyline>
        </svg>
    );
}

function LinkedInIcon() {
    return (
        <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="currentColor"
        >
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
    );
}