# Cloudinary Setup Guide

## Configuration

1. **Add your Cloudinary credentials to `.env`**:
   ```
   CLOUDINARY_CLOUD_NAME=your_cloud_name_here
   CLOUDINARY_API_KEY=your_api_key_here
   CLOUDINARY_API_SECRET=your_api_secret_here
   ```

2. **Find your credentials**:
   - Log in to [Cloudinary Dashboard](https://cloudinary.com/console)
   - Your credentials are on the dashboard home page

## Running the Backend

```bash
cd backend
node src/index.js
```

## API Endpoints

### 1. Get a specific image by public_id
```
GET http://localhost:4000/api/images/:publicId
```

**Example**:
```
GET http://localhost:4000/api/images/profile_photo
```

**Response**:
```json
{
  "url": "https://res.cloudinary.com/your-cloud/image/upload/profile_photo"
}
```

### 2. Get all images (optional: filter by folder)
```
GET http://localhost:4000/api/images?folder=homepage
```

**Response**:
```json
{
  "images": [
    {
      "publicId": "homepage/hero",
      "url": "https://res.cloudinary.com/...",
      "width": 1920,
      "height": 1080
    }
  ]
}
```

## Using in Frontend (React)

### Example: Fetch image URL for HomePage

```jsx
import React, { useState, useEffect } from "react";

export function HomePage() {
    const [imageUrl, setImageUrl] = useState("");

    useEffect(() => {
        // Replace 'your-public-id' with your actual Cloudinary public_id
        fetch('http://localhost:4000/api/images/your-public-id')
            .then(res => res.json())
            .then(data => setImageUrl(data.url))
            .catch(err => console.error('Error fetching image:', err));
    }, []);

    return (
        <div>
            <ContentBox
                imageUrl={imageUrl || "https://via.placeholder.com/400x300"}
                text="Your text here"
            />
        </div>
    );
}
```

## Uploading Images to Cloudinary

You can upload images through:
1. **Cloudinary Dashboard**: Go to Media Library > Upload
2. **Cloudinary Upload Widget**: Add to your frontend
3. **Direct API Upload**: Use the Cloudinary SDK

### Important: Public ID
- When you upload an image, note its "public_id"
- Example: If you upload `profile.jpg` to folder `homepage`, the public_id is `homepage/profile`
- Use this public_id in your API calls
