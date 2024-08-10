import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';

interface ImageResult {
    urls: {
        full: string;

    };
}

const FetchImage = () => {
    const [imageLinks, setImageLinks] = useState<string[]>([]);

    const fetchImages = async () => {
        const response = await axios.get("https://api.unsplash.com/search/photos?page=23&query=macbook&client_id=_-dvj2OP0sbo8AbLZnwf7wS9bXzWngpRXDBe_iDfE4Y");
        const data: ImageResult[] = response.data.results; // Type the results array

        const links = data.map((imageLink) => imageLink.urls.full);
        setImageLinks(links);
    };

    useQuery({
        queryKey: ['photos'],
        queryFn: fetchImages
    });

    return imageLinks;
};

export default FetchImage;
