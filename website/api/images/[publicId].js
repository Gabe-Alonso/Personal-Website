import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

export default function handler(req, res) {
    try {
        const { publicId } = req.query;

        const imageUrl = cloudinary.url(publicId, {
            secure: true,
            transformation: [
                { quality: 'auto' },
                { fetch_format: 'auto' },
            ],
        });

        res.json({ url: imageUrl });
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch image URL', details: error.message });
    }
}
