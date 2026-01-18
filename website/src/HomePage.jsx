import React from "react";
//import "./tokens.css";
import "./index.css";
import {Link} from "react-router";
import ReactMarkdown from "react-markdown";
import { useCloudinaryImage } from "./useCloudinaryImage";

export function HomePage() {

    const { imageUrl, loading } = useCloudinaryImage(
        'grad_pic_dx3vox',
        '' // No fallback - will show nothing if Cloudinary fails
    );

    const bioText = `Hello, I'm **Gabriel Alonso**. I'm a recent **Computer Science**
     graduate from the California Polytechnic State University - San Luis Obispo, with a minor in
      **Japanese Language and Culture**.

In the area of software development, I have primarily focused on **Full-Stack Development**
 projects, which can be seen [here](/projects).

My main interest is making things for other people to use or experience. In the past,
 this has manifested as an interest in game development, in which I developed various 
 games from scratch in groups for a multitude of contexts. In the modern day, it looks 
 more like making tools and websites to make people's lives easier.

Similarly, I have been exploring my musical side since my Junior year of college, 
and that pursuit is just as much for my own personal development as it is for other
 people to enjoy. You can see some of my past performances with my old band **GenKEY** as 
 well as some solo covers I have been working on [here](/music).
 
 I am currently based in the **Greater Seattle Area**, but am currently looking for employment
  all over the country. If you would like to contact me for professional purposes, my
  methods of contact are listed [here](/contact).`;

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
                    text={bioText}
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
            }} className="markdown-content">
                <ReactMarkdown>{text}</ReactMarkdown>
            </div>
        </div>
    )
}