import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';

interface AvatarImages {
    urls: {
        full: string;

    };
}

const FetchAvatars = () => {
    const [userAvatar, setUserAvatar] = useState<string[]>([]);

    const fetchAvatar = async () => {
        const response = await axios.get("https://api.unsplash.com/search/photos?page=3&query=user profile&client_id=_-dvj2OP0sbo8AbLZnwf7wS9bXzWngpRXDBe_iDfE4Y");
        const data: AvatarImages[] = response.data.results; // Access the results array

        const links = data.map((userAvatar) => userAvatar.urls.full);
        setUserAvatar(links);
    };

    useQuery({
        queryKey: ['users'],
        queryFn: fetchAvatar
    });

    return userAvatar;
};

export default FetchAvatars;
