require('dotenv').config();
const express = require('express');
const cors = require('cors');
const cloudinary = require('./cloudinaryConfig');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/api/hello', (req, res) => {
    res.json({ message: 'Hello from backend!' });
});

// Get a specific image URL from Cloudinary by public_id
app.get('/api/images/:publicId', (req, res) => {
    try {
        const { publicId } = req.params;
        console.log('Fetching image for public_id:', publicId);

        const imageUrl = cloudinary.url(publicId, {
            secure: true,
            transformation: [
                { quality: 'auto' },
                { fetch_format: 'auto' }
            ]
        });

        console.log('Generated URL:', imageUrl);
        res.json({ url: imageUrl });
    } catch (error) {
        console.error('Error generating image URL:', error);
        res.status(500).json({ error: 'Failed to fetch image URL', details: error.message });
    }
});

// Get all images from a specific folder (optional)
app.get('/api/images', async (req, res) => {
    try {
        const { folder } = req.query;
        const options = folder ? { type: 'upload', prefix: folder } : { type: 'upload' };

        const result = await cloudinary.api.resources(options);
        const images = result.resources.map(resource => ({
            publicId: resource.public_id,
            url: resource.secure_url,
            width: resource.width,
            height: resource.height
        }));

        res.json({ images });
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch images' });
    }
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
