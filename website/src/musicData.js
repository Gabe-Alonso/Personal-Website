// Central location for all music post data

export const musicData = {
    "song-1": {
        id: "song-1",
        title: "My First Cover",
        date: "January 2024",
        thumbnailPublicId: "your-music-thumbnail-1",
        description: `
# About This Cover

Write about your cover here - what inspired you, any challenges, etc.

## Original Song
**Artist:** Original Artist Name
**Released:** Year

## My Version

Describe what you changed or your interpretation.

## Recording Setup
- Microphone: Your mic
- DAW: Your software
- Plugins used

## Listen

<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=YOUR_TRACK_URL"></iframe>

Or embed YouTube:

<iframe width="100%" height="400" src="https://www.youtube.com/embed/VIDEO_ID" frameborder="0" allowfullscreen></iframe>
        `.trim()
    },
    "song-2": {
        id: "song-2",
        title: "Original Composition",
        date: "February 2024",
        thumbnailPublicId: "your-music-thumbnail-2",
        description: `
# About This Song

Your description here...
        `.trim()
    },
    "song-3": {
        id: "song-3",
        title: "SWEET/ITYWTD Cover",
        date: "February 2026",
        thumbnailPublicId: "your-music-thumbnail-2",
        description: `
# About This Song

Your description here...
        `.trim()
    }
};

// Helper to get all music posts as an array
export const getAllMusic = () => Object.values(musicData);

// Helper to get a single music post by ID
export const getMusicById = (id) => musicData[id];
