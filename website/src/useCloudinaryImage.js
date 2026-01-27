import { useState, useEffect } from 'react';

/**
 * Custom hook to fetch image URL from Cloudinary via your backend
 * @param {string} publicId - The Cloudinary public_id of the image
 * @param {string} fallbackUrl - Optional fallback URL if fetch fails
 * @returns {object} { imageUrl, loading, error }
 */
export function useCloudinaryImage(publicId, fallbackUrl = '') {
    const [imageUrl, setImageUrl] = useState(fallbackUrl);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!publicId) {
            setLoading(false);
            return;
        }

        setLoading(true);
        fetch(`https://personalbackend-haeveff8gcg9exhw.canadacentral-01.azurewebsites.net/api/images/${publicId}`)
            .then(res => {
                if (!res.ok) throw new Error('Failed to fetch image');
                return res.json();
            })
            .then(data => {
                setImageUrl(data.url);
                setError(null);
            })
            .catch(err => {
                console.error('Error fetching image:', err);
                setError(err.message);
                if (fallbackUrl) setImageUrl(fallbackUrl);
            })
            .finally(() => setLoading(false));
    }, [publicId, fallbackUrl]);

    return { imageUrl, loading, error };
}
