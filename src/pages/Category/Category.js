import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsThumb from '../../shared/NewsThumb/NewsThumb';

const Category = () => {
    const allNews = useLoaderData()

    return (
        <div>
            <h4> News found on this cetegory: {allNews.length}</h4>
            {
                allNews.map(news => <NewsThumb
                    key={news._id}
                    news={news}
                />)
            }
        </div>
    );
};

export default Category;