import React from "react";
import { useParams, Link } from "react-router";
import ReactMarkdown from "react-markdown";
import "./index.css";
import { useCloudinaryImage } from "./useCloudinaryImage";
import { getProjectById } from "./projectsData";

export function ProjectDetailPage() {
    const { projectId } = useParams();
    const project = getProjectById(projectId);

    const { imageUrl, loading } = useCloudinaryImage(
        project?.thumbnailPublicId || '',
        ''
    );

    if (!project) {
        return (
            <div style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "20px",
                minHeight: "100vh",
                gap: "20px"
            }}>
                <h1>Project Not Found</h1>
                <Link
                    to="/projects"
                    style={{
                        color: "#646cff",
                        textDecoration: "none"
                    }}
                >
                    ← Back to Projects
                </Link>
            </div>
        );
    }

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "20px",
            minHeight: "100vh"
        }}>
            <div style={{
                width: "100%",
                maxWidth: "800px"
            }}>
                <Link
                    to="/projects"
                    style={{
                        color: "#646cff",
                        textDecoration: "none",
                        marginBottom: "20px",
                        display: "inline-block"
                    }}
                >
                    ← Back to Projects
                </Link>

                <h1 style={{ marginTop: "20px" }}>{project.title}</h1>
                <p style={{
                    color: "rgba(255, 255, 255, 0.6)",
                    fontSize: "16px",
                    marginBottom: "30px"
                }}>
                    {project.date}
                </p>

                {loading ? (
                    <div style={{
                        width: "100%",
                        aspectRatio: "16 / 9",
                        backgroundColor: "#2a2a2a",
                        borderRadius: "12px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginBottom: "30px"
                    }}>
                        <span>Loading image...</span>
                    </div>
                ) : imageUrl ? (
                    <img
                        src={imageUrl}
                        alt={project.title}
                        style={{
                            width: "100%",
                            borderRadius: "12px",
                            marginBottom: "30px"
                        }}
                    />
                ) : null}

                <div style={{
                    lineHeight: "1.8"
                }} className="markdown-content">
                    <ReactMarkdown>{project.description}</ReactMarkdown>
                </div>
            </div>
        </div>
    );
}
