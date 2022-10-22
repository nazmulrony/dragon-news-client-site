import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsThumb from '../../shared/NewsThumb/NewsThumb';

const Home = () => {
    const allNews = useLoaderData();

    return (
        <div>
            {
                allNews.map(news => <NewsThumb
                    key={news._id}
                    news={news}
                />)
            }
        </div>
    );
};

export default Home;