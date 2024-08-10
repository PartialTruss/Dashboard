import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';

const FetchImage = () => {
    const [imageLinks, setImageLinks] = useState([]);

    const fetchImages = async () => {
        const response = await axios.get("https://api.unsplash.com/search/photos?page=23&query=macbook&client_id=_-dvj2OP0sbo8AbLZnwf7wS9bXzWngpRXDBe_iDfE4Y");
        const data = response.data.results; // Access the results array

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
