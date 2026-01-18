// Central location for all blog post data

export const blogData = {
    "post-1": {
        id: "post-1",
        title: "Current Plans",
        date: "Jan 2026",
        thumbnailPublicId: "website_kxccqm",
        description: `
# Introduction

I'm not certain what to do with the blog section for now, but I feel like I'll want to start writing things
here eventually, so look forwards to that.
        `.trim()
    }
};

// Helper to get all blog posts as an array
export const getAllBlogs = () => Object.values(blogData);

// Helper to get a single blog post by ID
export const getBlogById = (id) => blogData[id];
