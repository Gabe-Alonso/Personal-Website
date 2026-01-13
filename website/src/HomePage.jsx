import React from "react";
//import "./tokens.css";
import "./index.css";
import {Link} from "react-router";
import { useCloudinaryImage } from "./useCloudinaryImage";

export function HomePage() {

    const { imageUrl, loading } = useCloudinaryImage(
        'grad_pic_dx3vox',
        '' // No fallback - will show nothing if Cloudinary fails
    );

    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
            padding: "20px",
            minHeight: "100vh"
        }}>
            {loading ? (
                <p>Loading image...</p>
            ) : imageUrl ? (
                <ContentBox
                    imageUrl={imageUrl}
                    text="Hello, I am Gabriel Alonso. I'm a recent computer science graduate from the California Polytechnic State University, with a minor in Japanese Language and Culture."
                />
            ) : (
                <p>Failed to load image</p>
            )}
        </div>
    )
}

function ContentBox({ imageUrl, text }) {
    return (
        <div style={{
            width: "100%",
            maxWidth: "700px",
            backgroundColor: "#1a1a1a",
            borderRadius: "12px",
            overflow: "hidden",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)"
        }}>
            <img
                src={imageUrl}
                alt="Content"
                style={{
                    width: "100%",
                    height: "auto",
                    display: "block"
                }}
            />
            <div style={{
                padding: "20px"
            }}>
                <p style={{ margin: 0 }}>{text}</p>
            </div>
        </div>
    )
}