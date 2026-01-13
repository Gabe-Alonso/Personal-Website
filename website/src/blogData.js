// Central location for all blog post data

export const blogData = {
    "post-1": {
        id: "post-1",
        title: "My First Blog Post",
        date: "March 2024",
        thumbnailPublicId: "your-blog-thumbnail-1",
        description: `
# Introduction

Welcome to my first blog post! Here I'll share my thoughts on...

## Why I Started This Blog

Your reasons here...

## What to Expect

Topics I'll cover:
- Technology
- Personal experiences
- Tutorials
- And more!

## Conclusion

Thanks for reading! Feel free to [connect with me](/contact).
        `.trim()
    },
    "post-2": {
        id: "post-2",
        title: "Learning React",
        date: "April 2024",
        thumbnailPublicId: "your-blog-thumbnail-2",
        description: `
# My Journey Learning React

In this post, I'll share my experience learning React and building this website.

## Getting Started

The first challenge was...

## Key Concepts

### Components
React is all about reusable components...

### State Management
Managing state can be tricky...

## Tips for Beginners

1. **Start simple** - Don't overwhelm yourself
2. **Build projects** - Learn by doing
3. **Read the docs** - Official documentation is great

## Resources I Found Helpful

- [React Official Docs](https://react.dev)
- YouTube tutorials
- Practice projects

## Conclusion

Keep coding and learning!
        `.trim()
    }
};

// Helper to get all blog posts as an array
export const getAllBlogs = () => Object.values(blogData);

// Helper to get a single blog post by ID
export const getBlogById = (id) => blogData[id];
