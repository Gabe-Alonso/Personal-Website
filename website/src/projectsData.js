// Central location for all project data
// Easy to maintain and share across components

export const projectsData = {
    
    "personal-website": {
        id: "personal-website",
        title: "Personal Website",
        date: "Dec 2025 - Present",
        thumbnailPublicId: "website_kxccqm",
        description: `
# Project Overview

Your second project description goes here...
        `.trim()
    },
    "open-mic": {
        id: "open-mic",
        title: "Open Mic",
        date: "April 2025 - Present",
        thumbnailPublicId: "open-mic_vzoh0m",
        description: `
# Project Overview

This is where you write your blog-style description of the project.

## Technologies Used
- Technology 1
- Technology 2
- Technology 3

## Key Features
1. Feature description here
2. Another feature description
3. More features

## Challenges and Solutions
Write about the challenges you faced and how you solved them.

## Results
Describe the outcomes and what you learned from this project.
        `.trim()
    },
    "zombie-game": {
        id: "zombie-game",
        title: "Zombie Escape",
        date: "Feb 2025 - Mar 2025",
        thumbnailPublicId: "zombie_ybk99y",
        description: `
# Project Overview

Your third project description goes here...
        `.trim()
    },
    "437-final": {
        id: "437-final",
        title: "Dynamic Web Dev Final Project: Album Tracker",
        date: "Feb 2025 - Mar 2025",
        thumbnailPublicId: "album_tracker_dkopdn",
        description: `
# Project Overview

This is where you write your blog-style description of the project.

## Technologies Used
- Technology 1
- Technology 2
- Technology 3

## Key Features
1. Feature description here
2. Another feature description
3. More features

## Challenges and Solutions
Write about the challenges you faced and how you solved them.

## Results
Describe the outcomes and what you learned from this project.
        `.trim()
    },
    "synergistic": {
        id: "synergistic",
        title: "Synergistic Intelligence",
        date: "September 2024 - March 2025",
        thumbnailPublicId: "syn_mg8nwn",
        description: `
# Project Overview

Your third project description goes here...
        `.trim()
    },
    "ttt": {
        id: "ttt",
        title: "TinyTeeTour",
        date: "March 2024",
        thumbnailPublicId: "ttt_vnb72y",
        description: `
# Project Overview

[demo](https://kghalamb.itch.io/tinyteetour)
        `.trim()
    },
    "polypicks": {
        id: "polypicks",
        title: "PolyPicks",
        date: "Feb 2024 - Mar 2024",
        thumbnailPublicId: "polypicks_vf08og",
        description: `
# Project Overview

This is where you write your blog-style description of the project.

## Technologies Used
- Technology 1
- Technology 2
- Technology 3

## Key Features
1. Feature description here
2. Another feature description
3. More features

## Challenges and Solutions
Write about the challenges you faced and how you solved them.

## Results
Describe the outcomes and what you learned from this project.
        `.trim()
    }
};

// Helper to get all projects as an array (useful for listing)
export const getAllProjects = () => Object.values(projectsData);

// Helper to get a single project by ID
export const getProjectById = (id) => projectsData[id];


// ,
//     "project-4": {
//         id: "project-4",
//         title: "Crazy Webdev Stuff",
//         date: "Forever",
//         thumbnailPublicId: "your-thumbnail-2",
//         description: `
// # Project Overview

// You've truly never seen anything like this.

// ## Text Formatting Examples

// You can use **bold text**, *italic text*, or ***bold and italic***.

// You can also use ~~strikethrough~~.

// ## Lists

// ### Unordered List
// - Item 1
// - Item 2
//   - Nested item
//   - Another nested item
// - Item 3

// ### Ordered List
// 1. First step
// 2. Second step
// 3. Third step

// ## Links

// Check out [my GitHub](https://github.com/your-username) or visit [my website](https://yoursite.com).

// ## Images from Cloudinary

// ![Project Screenshot](https://res.cloudinary.com/your-cloud-name/image/upload/your-image-id.jpg)

// Or use your backend to get the URL:
// ![Another Image](http://localhost:4000/api/images/your-public-id)

// ## Code Blocks

// Inline code: \`const myVar = 'hello'\`

// Code block:
// \`\`\`javascript
// function example() {
//   console.log('Hello, world!');
//   return true;
// }
// \`\`\`

// ## Quotes

// > This is a blockquote. Great for highlighting important information or testimonials.

// ## Videos

// For videos, you can embed using HTML (ReactMarkdown supports it):

// <video width="100%" controls>
//   <source src="https://your-video-url.mp4" type="video/mp4">
// </video>

// Or embed YouTube videos:

// <iframe width="100%" height="400" src="https://www.youtube.com/embed/VIDEO_ID" frameborder="0" allowfullscreen></iframe>

// ## Horizontal Rule

// ---

// That's it! You have full markdown support now.
//         `.trim()
//     }