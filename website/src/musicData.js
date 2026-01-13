// Central location for all music post data

export const musicData = {
    "so-easy": {
        id: "so-easy",
        title: "So Easy (To Fall In Love)",
        date: "Dec 2025",
        thumbnailPublicId: "Olivia_Dean_-_The_Art_of_Loving_dptou7",
        description: `
# About This Song

Your description here...
        `.trim()
    },
    "wave": {
        id: "wave",
        title: "Wave",
        date: "Nov 2025",
        thumbnailPublicId: "wave_p9aqko",
        description: `
# About This Song

Your description here...
        `.trim()
    },
    "promise": {
        id: "promise",
        title: "Promise",
        date: "Oct 2025",
        thumbnailPublicId: "laufey_xftqh9",
        description: `
# About This Song

Your description here...
        `.trim()
    },
    "japanese-denim": {
        id: "japanese-denim",
        title: "Japanese Denim",
        date: "Sept 2025",
        thumbnailPublicId: "daniel_b5ndbz",
        description: `
# About This Song

Your description here...
        `.trim()
    },
    "lost-girl": {
        id: "lost-girl",
        title: "Lost Girl",
        date: "Aug 2025",
        thumbnailPublicId: "deltarune_movvpf",
        description: `
# About This Song

Your description here...
        `.trim()
    },
    "tsukimi": {
        id: "tsukimi",
        title: "Tsukimi Will Be Right Back",
        date: "Jun 2025",
        thumbnailPublicId: "garage_mywbex",
        description: `
# About This Song

Your description here...
        `.trim()
    },
    "hawaii-banquet": {
        id: "hawaii-banquet",
        title: "Hui O Hawaii Senior Banquet 2025",
        date: "Jun 2025",
        thumbnailPublicId: "hawaii_comt52",
        description: `
# About This Song

Your description here...
        `.trim()
    },
    "soubetsukai-25": {
        id: "soubetsukai-25",
        title: "JSA Soubetsukai 2025",
        date: "May 2024",
        thumbnailPublicId: "soub25_nllbtf",
        description: `
# About This Song

Your description here...
        `.trim()
    },
    "open-house-25": {
        id: "open-house-24",
        title: "Open House Farmer's Market 2025",
        date: "April 2025",
        thumbnailPublicId: "downtown_wc8oro",
        description: `
# About This Song

Your description here...
        `.trim()
    },
    "winter-formal-25": {
        id: "winter-formal-25",
        title: "GenKEY on the S.S. Shan: JSA Winter Formal 2025",
        date: "Feb 2025",
        thumbnailPublicId: "Screenshot_2026-01-12_214051_n3x96t",
        description: `
# About This Song

Your description here...
        `.trim()
    },
    "csa-banquet-25": {
        id: "csa-banquet-25",
        title: "CSA's 67th Annual Chinese New Year Banquet 2025",
        date: "Feb 2025",
        thumbnailPublicId: "csa_iihw0x",
        description: `
# About This Song

Your description here...
        `.trim()
    },
    "fall-house-show-24": {
        id: "fall-house-show-24",
        title: "Fall House Show 2024",
        date: "Dec 2024",
        thumbnailPublicId: "fall-house-24_jsim8x",
        description: `
# About This Song

Your description here...
        `.trim()
    },
    "soubestsukai-24": {
        id: "soubetsukai-24",
        title: "JSA Soubetsukai 2024",
        date: "May 2024",
        thumbnailPublicId: "soub24_ww5eoh",
        description: `
# About This Song

Your description here...
        `.trim()
    },
    "house-show-24": {
        id: "house-show-24",
        title: "Spring House Show 2024",
        date: "May 2024",
        thumbnailPublicId: "house-24_ggo6sq",
        description: `
# About This Song

Your description here...
        `.trim()
    },
    "lantern-fest-24": {
        id: "lantern-fest-24",
        title: "Lantern Fest 2024",
        date: "April 2024",
        thumbnailPublicId: "Lantern_pue5id",
        description: `
# About This Song

Your description here...
        `.trim()
    },
    "open-house-24": {
        id: "open-house-24",
        title: "CalPoly Open House 2024",
        date: "April 2024",
        thumbnailPublicId: "open-24_redmrd",
        description: `
# About This Song

Your description here...
        `.trim()
    },
    "winter-formal-24": {
        id: "winter-formal-24",
        title: "JSA Winter Formal 2024",
        date: "Feb 2024",
        thumbnailPublicId: "winter-24_zwtlqg",
        description: `
# About This Song

Your description here...
        `.trim()
    },
    "ah-louis": {
        id: "ah-louis",
        title: "Ah Louis Lunar New Year Block Party",
        date: "Feb 2024",
        thumbnailPublicId: "ah-louis_opdfpf",
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
