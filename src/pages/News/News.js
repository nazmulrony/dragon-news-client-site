import React from 'react';
import { Button, Card, Image } from 'react-bootstrap';
import { FaBookmark, FaEye, FaShareAlt, FaStar } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';

const News = () => {
    const news = useLoaderData()
    const { title, image_url, author, details, rating, category_id } = news
    return (
        <div>
            <Card>
                <Card.Body>
                    <Card.Img variant="top" src={image_url} />
                    <Card.Title className='mt-2'>{title}</Card.Title>
                    <div className='d-flex justify-content-between mt-2'>
                        <p><span className='fw-bold'>Author:</span> {author.name}</p>
                        <p><span className='fw-bold'>Published Date:</span> {author.published_date}</p>
                        <p><FaStar className='text-warning me-2'></FaStar>
                            <span>{rating.number}</span></p>
                    </div>
                    <Card.Text>
                        {details}
                    </Card.Text>
                </Card.Body>
                <Link to={`/category/${category_id}`} className="mb-3 ms-3"><Button variant='primary'> See other news</Button></Link>
            </Card>
        </div>
    );
};

export default News;