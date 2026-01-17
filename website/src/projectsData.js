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

[View Project on GitHub](https://github.com/Gabe-Alonso/Personal-Website)

This is the website you're currently on. I have been wanting to make a website of my own for a good while now,
as a portfolio to show to employers but also as a means of communicating some of who I am to whoever may be curious,
which is why I also emphasize music so much here. Seeing how much employers are asking for ability to use AI
Coding assistants such as Copilot or Claude Code, I decided to use this as an opportunity to see what I could
make while leveraging these tools. The general functionality of this website was built with assistance from
Claude Code, but all the content was written by me personally.

I also want to credit my good friend Shayan for inspiration as I used his personal website as a guide
to make my own. You can visit his page [here](https://shayandaijavad.com/).

## Technologies Used
- React Frontend Framework
- NodeJS Backend Framework
- Cloudinary
- JavaScript
- HTML/CSS
- GitHub
- Claude Code

## Key Features
1. View many of my projects, music performances/covers, and blog posts

## Challenges and Solutions
With all the experience in creating Full Stack projects and especially with Claude on my side, the process of
making this website was pretty straightforwards. My biggest struggle was in filling the website with content, as
I have been putting all of the pictures and text in manually, but it's not so much difficult as it really is time consuming.
I have felt oddly energized to work on this page in a way that I haven't for a while, which may be helping alleviate this.
        `.trim()
    },
    "open-mic": {
        id: "open-mic",
        title: "Open Mic",
        date: "April 2025 - Present",
        thumbnailPublicId: "open-mic_vzoh0m",
        description: `
# Project Overview

**Yet to Be Published**[View Project on GitHub]()

OpenMic is a project that started in my Intro to Entrepreneurship course. The idea came from my personal struggles
in finding somewhere for my band to gig at. I wanted to create an easy place for artists to find places to play
their music at local venues, and for venues to just as easily find artists to play for them. We interviewed many
people and sent out polls to artists and venues to figure out what their pain points in this field were and to figure out
how to make this idea into something that would work for them. As we learned more and more, we made various adjustments
of varying sizes to the direction the project was going. I will discuss later where these discoveries led.

We first used Wix as a means of garnering interest and gauging how much people really wanted the product. As a more
personal project, I decided to make the platform again from scratch into something more interactable and scalable
for both mentioned parties. I do not currently intend to make it a fully functioning startup for now, but I would like to
at least build the platform for now.

## Technologies Used
- Canva
- Google Slides
- Zoom
- Wix

## Key Features
1. Allow artists to display their work to make themselves known to venues and other artists
2. Allow venues to make postings about openings so that artists can know about openings and apply through the platform
3. Allow artists who have confirmed a performance at a venue to review their experience, similar to Glassdoor

## Challenges and Solutions
A minor challenge was finding people to interview. Being in a band, I was able to access a good amount of musicians,
and others in my group had good connections with venues, even internationally, so we were able to get a good idea of
what epople were looking for. It was in these conversations that we found that while artists were fairly open and interested
in the product, we did not get as much interest from venues. Bigger venues such as festivals liked it as a means of
helping them sift through options, but smaller venues already had their systems that they were used to and liked,
and forcing them to use our product, especially as unestablished as it was, was also an obviously non-viable option.
This forced us to have to heavily reconsider the direction of the platform, leading to a more portfolio like pivot
where the goal was more to find artists regardless of whether the user was an artist or venue. The artist-venue
pairing idea was put into the backburner while user numbers remain low and inconsistent.
        `.trim()
    },
    "zombie-game": {
        id: "zombie-game",
        title: "Zombie Escape",
        date: "Feb 2025 - Mar 2025",
        thumbnailPublicId: "zombie_ybk99y",
        description: `
# Project Overview

[View Project on GitHub](https://github.com/Gabe-Alonso/ZombieGame)

This was a month long project from my Game Design course. In a group of 5, we created a zombie survival game 
using the Unity engine, which I had a good amount of experience from in the past. The game followed a player character
who was able to use 3 different weapons (a pistol, assault rifle, and shotgot), trying to survive a zombie apocalypse.
Surviving in our game meant making it through all the waves. Among the waves were boss phases where a particularly difficult
enemy would appear and the player would have to defeat them to move on. As they progress and make money from defeating
enemies, they can spend their money on upgrades to their weapons, such as increased fire rate or increased damage.
We used various free assets available on the Unity Store for weapons, particles, etc.

## Technologies Used
- Unity Game Engine
- C#
- GitHub
- Itch.io

## Key Features
1. Move with WASD, aim character and weapon with Mouse
2. Shoot enemies to earn money and continue surviving
3. Spend money on upgrades

## Challenges and Solutions
Perhaps labeling it a challenge isn't quite correct, but not everyone in the group was in a program that involved programming,
or maybe they weren't exposed to tools like Git, so this project involved teaching various little software development
concepts to our teammates. This was a new experience for me as in the past, I have been the one who always needed
help with whatever technology we were using. I wanted to make sure I was helping in a way that was actually helpful
while also avoiding being condescending, as I fear some coders may be seen as by some people. There was also
general group dynamics to work around, such as what we should put into the game and divvying up work. I tried to generally
consider difficulty of implementation when discussing ideas, and tried to make sure we were focusing on implementing
features that would go towards our MVP as opposed to stretch goals, and I hope that did not come across as me shutting
down my teammates' ideas because I thought they were bad. Finding that balance is still something I was working on
during this project.
        `.trim()
    },
    "437-final": {
        id: "437-final",
        title: "Album Tracker",
        date: "Feb 2025 - Mar 2025",
        thumbnailPublicId: "album_tracker_dkopdn",
        description: `
# Project Overview

[View Project on GitHub](https://github.com/Gabe-Alonso/437_Final)

For my final project in my Dynamic Web Development class, I created a webapp to track music albums
that users have listened to and give them a platform to review them. The idea is very reminiscent to
something like Letterboxd or GoodReads, but to be performative about music instead.

## Technologies Used
- React Frontend Framework
- NodeJS Backend Framework
- MongoDB Database
- JavaScript
- TypeScript
- HTML/CSS
- GitHub

## Key Features
1. Create an account to log in with
2. Review an Album with a numerical rating, a more elaborate written rating, and more
3. See other people's ratings
4. Dark mode

## Challenges and Solutions
This was the deepest I ever got into the weeds of coding in JavaScript, adding TypeScript into the mix
in the process. I had never coded something as complicated as an end-to-end API call from scratch,
which required a lot of googling as well as talking to my professor. I also generally struggled to make
something that looks nice as I do not have the best eye for design, and that is something I am still working on now.
        `.trim()
    },
    "synergistic": {
        id: "synergistic",
        title: "Synergistic Intelligence",
        date: "September 2024 - March 2025",
        thumbnailPublicId: "syn_mg8nwn",
        description: `
# Project Overview

**Cannot share GitHub link, project is privated by owners**

Synergistic Intelligence was a startup that I joined and contributed to towards the end of my senior year.
Their primary goal was to help people be more productive and create more meaningful work by helping work out
what struggles they may be having as well as where their ego may be getting in the way. My main contributions
were in adding LinkedIn Oath as a sign in option, as well as training and implementing some of the first
versions of the bots that were deployed to the website that users could actually talk to.

## Technologies Used
- React Frontend Framework
- NodeJS Backend Framework
- MongoDB Database
- Supabase
- ChatGPT
- OpenAI API
- JavaScript
- HTML/CSS
- GitHub
- Atlassian Jira
- Atlassian Confluence
- Slack

## Key Features
1. Chat with a Trained Chatbot about your struggles with your work
2. Sign in with a dedicated account or with LinkedIn
3. Take a quiz to understand your level of acceptance and understanding of where you are in the flow journey

## Challenges and Solutions
This project had many little challenges to it, including a difficult-to-set-up code base and suboptimal documentation
about various aspects of the project and tech stack, but name of the game was a lot of trial and error and honesty.
I struggled to tell my team about how much I was struggling, especially at the start with the setup, but once I swallowed my pride,
I was able to start making more meaningful contributions. This was also helpful later on when communicating with
the team and with stakeholders about what was reasonable/possible for the project moving forwards. Another
interesting issue we were struggling to deal with was the chatbot's memory. At the start, the chatbot could
only give one off answers and would not remember anything about the user. We came up with a somewhat
brute force solution of including the entire conversation so far as the sent message to the API to imitate
memory so that at least to the user, it would seem like it was remembering the whole conversation.
        `.trim()
    },
    "ttt": {
        id: "ttt",
        title: "TinyTeeTour",
        date: "March 2024",
        thumbnailPublicId: "ttt_vnb72y",
        description: `
# Project Overview

[View Project on GitHub](https://github.com/Gabe-Alonso/TinyTeeTour2)

[Play Our Game Here!](https://kghalamb.itch.io/tinyteetour)

This was my final project for my Interactive Entertainment Engineering class. Me and a partner developed
a simple mini golf game from scratch, creating all the assets as well. This was my first experience with
the Godot game engine, but I was still able to leverage a lot of what I had learned with my previous
experience with the Unity engine to make this game.

## Technologies Used
- Godot
- GitHub
- Adobe Photoshop

## Key Features
1. Flick the ball to putt it
2. Get it into the hole in as few buts as possible

## Challenges and Solutions
This game gave me two main challenges. I was still not the most versed with Git at the time, and we ran into
quite a few merge errors that were messing with our assets. That unfortunately meant a lot of redoing work,
but it was managable. Another issue we unfortunately could not really solve, which was a well documented issue
with collision and fast moving objects in games called tunneling. We could not come up with a more proper solution
by the deadline, so instead we included a reset button to put the ball back at the start of the course.
        `.trim()
    },
    "polypicks": {
        id: "polypicks",
        title: "PolyPicks",
        date: "Feb 2024 - Mar 2024",
        thumbnailPublicId: "polypicks_vf08og",
        description: `
# Project Overview

[View Project on GitHub](https://github.com/EmuMan/stay-soft)

PolyPicks was the first Full Stack application that I built in a group. The idea behind the app was to be
a betting platform where people could offer a situation that was coming up in the CalPoly community that had
a binary outcome (True/False) and other users could be on it. Conceptually, it is very close to apps like
Kalshi and PolyMarket which have become much more popular in the last year (we were ahead of the curve on
that one, I suppose). The app is visually designed as a mobile app, but we built it as a web application
using React.

## Technologies Used
- React Frontend Framework
- NodeJS Backend Framework
- MongoDB Database
- JavaScript
- HTML/CSS
- GitHub

## Key Features
1. Propose a bet based on an event in the community
2. Make a bet on a community event
3. Comment on proposed bets
4. Earn Virtual Currency (Was not connected to real world money)
5. Make profiles and be able to view every bet a person has made or proposed

## Challenges and Solutions
My biggest struggle with this project was learning the mechanics of Full Stack development all at once.
This was the first time I had been exposed to the MVC structure, on top of learning JS and dealing with
all its intricacies. That required a lot of time, trial and error, and even more googling, as well as
occasionally asking for help from my teammates who were more experienced in the process.
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