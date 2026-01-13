import React from "react";
import "./index.css";
import {Link} from "react-router";
import { useCloudinaryImage } from "./useCloudinaryImage";
import { getAllBlogs } from "./blogData";

export function BlogPage() {
    const blogPosts = getAllBlogs();

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "20px",
            minHeight: "100vh",
            gap: "30px"
        }}>
            <h1>My Blog</h1>

            <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "20px",
                width: "100%",
                maxWidth: "1200px",
                marginTop: "20px"
            }}>
                {blogPosts.map(post => (
                    <BlogCard
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

function BlogCard({ id, title, date, thumbnailPublicId }) {
    const { imageUrl, loading } = useCloudinaryImage(thumbnailPublicId, '');

    return (
        <Link
            to={`/blog/${id}`}
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