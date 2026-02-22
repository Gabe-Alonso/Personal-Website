import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

export default async function handler(req, res) {
    try {
        const { folder } = req.query;
        const options = folder ? { type: 'upload', prefix: folder } : { type: 'upload' };

        const result = await cloudinary.api.resources(options);
        const images = result.resources.map(resource => ({
            publicId: resource.public_id,
            url: resource.secure_url,
            width: resource.width,
            height: resource.height,
        }));

        res.json({ images });
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch images' });
    }
}
