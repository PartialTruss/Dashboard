import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

interface PostQuery {
    page: number;
    pageSize: number;
}

const FetchInfo = (query: PostQuery) => {
    const fetchData = async () => {
        const response = await axios.get(`https://newsapi.org/v2/everything`, {
            params: {
                q: 'apple',
                apikey: 'd7dc1a86bdab42c695843090ec7edb56',
                page: query.page,
                pageSize: query.pageSize,
            },
        });

        const data = response.data;
        // Filter out items with "[Removed]" and extract date
        const filteredArticles = data.articles
            .filter((article: any) => !article.title.includes('[Removed]'))
            .map((article: any) => ({
                ...article,
                publishedAt: article.publishedAt.split('T')[0], // Extract date
            }));

        return { ...data, articles: filteredArticles };
    };

    return useQuery({
        queryKey: ['news', query],
        queryFn: fetchData,
    });
};


export default FetchInfo;


