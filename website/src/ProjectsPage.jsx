import React from "react";
//import "./tokens.css";
import "./index.css";
import {Link} from "react-router";
import { useCloudinaryImage } from "./useCloudinaryImage";
import { getAllProjects } from "./projectsData";

export function ProjectsPage() {
    const projects = getAllProjects();

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "20px",
            minHeight: "100vh",
            gap: "30px"
        }}>
            <h1>My Projects</h1>

            <ProjectButton
                href="https://github.com/Gabe-Alonso"
                icon={<GitHubIcon />}
                label="View My Projects on Github"
                target="_blank"
            />

            <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "20px",
                width: "100%",
                maxWidth: "1200px",
                marginTop: "20px"
            }}>
                {projects.map(project => (
                    <ProjectCard
                        key={project.id}
                        id={project.id}
                        title={project.title}
                        date={project.date}
                        thumbnailPublicId={project.thumbnailPublicId}
                    />
                ))}
            </div>
        </div>
    )
}

function ProjectCard({ id, title, date, thumbnailPublicId }) {
    const { imageUrl, loading } = useCloudinaryImage(thumbnailPublicId, '');

    return (
        <Link
            to={`/projects/${id}`}
            style={{
                display: "flex",
                flexDirection: "column",
                aspectRatio: "1 / 1",
                backgroundColor: "#1a1a1a",
                borderRadius: "12px",
                overflow: "hidden",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                textDecoration: "none",
                color: "rgba(255, 255, 255, 0.87)",
                transition: "all 0.3s ease",
                cursor: "pointer"
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.2)";
                e.currentTarget.style.transform = "translateY(-4px)";
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
                e.currentTarget.style.transform = "translateY(0)";
            }}
        >
            <div style={{
                flex: 1,
                backgroundColor: "#2a2a2a",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden"
            }}>
                {loading ? (
                    <span>Loading...</span>
                ) : imageUrl ? (
                    <img
                        src={imageUrl}
                        alt={title}
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover"
                        }}
                    />
                ) : (
                    <span>No Image</span>
                )}
            </div>
            <div style={{
                padding: "15px",
                display: "flex",
                flexDirection: "column",
                gap: "5px"
            }}>
                <h3 style={{
                    margin: 0,
                    fontSize: "18px",
                    fontWeight: "600"
                }}>
                    {title}
                </h3>
                <p style={{
                    margin: 0,
                    fontSize: "14px",
                    color: "rgba(255, 255, 255, 0.6)"
                }}>
                    {date}
                </p>
            </div>
        </Link>
    );
}

function ProjectButton({ href, icon, label, target }) {
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

function GitHubIcon() {
    return (
        <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="currentColor"
        >
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
    );
}