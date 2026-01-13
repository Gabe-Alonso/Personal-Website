import React from "react";
import "./index.css";
import {Link} from "react-router";
import { useCloudinaryImage } from "./useCloudinaryImage";
import { getAllMusic } from "./musicData";

export function MusicPage() {
    const musicPosts = getAllMusic();

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "20px",
            minHeight: "100vh",
            gap: "30px"
        }}>
            <h1>My Music</h1>

            <InstagramButton
                href="https://www.instagram.com/gabriel_alonso_music/"
                icon={<InstagramIcon />}
                label="Check out my Music Instagram Page!"
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
                {musicPosts.map(post => (
                    <MusicCard
                        key={post.id}
                        id={post.id}
                        title={post.title}
                        date={post.date}
                        thumbnailPublicId={post.thumbnailPublicId}
                    />
                ))}
            </div>
        </div>
    )
}

function MusicCard({ id, title, date, thumbnailPublicId }) {
    const { imageUrl, loading } = useCloudinaryImage(thumbnailPublicId, '');

    return (
        <Link
            to={`/music/${id}`}
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

function InstagramButton({ href, icon, label, target }) {
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

function InstagramIcon() {
    return (
        <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="currentColor"
        >
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
    );
}