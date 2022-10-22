import React from 'react';
import { Card, Image } from 'react-bootstrap';
import { FaBookmark, FaEye, FaShareAlt, FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NewsThumb = ({ news }) => {
    const { title, image_url, author, total_view, details, rating } = news
    return (
        <div className='mb-4'>
            <Card>
                <Card.Header className='d-flex justify-content-between'>
                    <div className='d-flex gap-2'>
                        <Image
                            src={author?.img}
                            roundedCircle
                            fluid
                            style={{ height: '60px' }}
                        />
                        <div>
                            <p className='mb-0'>{author?.name}</p>
                            <p><small>{author?.published_date}</small></p>

                        </div>
                    </div>
                    <div className='d-flex justify-content-center align-items-center gap-2'>
                        <FaBookmark />
                        <FaShareAlt />

                    </div>
                </Card.Header>
                <Card.Body>
                    <Card.Img variant="top" src={image_url} />
                    <Card.Title>{title}</Card.Title>
                    <div>
                        {details.length > 250 ?
                            <p> {details.slice(0, 250) + '...'} <Link to={`/news/${news._id}`}>Read More</Link></p>
                            : <p>{details}</p>
                        }
                    </div>
                </Card.Body>
                <Card.Footer className="d-flex justify-content-between">
                    <div className='d-flex align-items-center'>
                        <FaStar className='text-warning me-2'></FaStar>
                        <span>{rating.number}</span>
                    </div>
                    <div className='d-flex align-items-center gap-1'>
                        <FaEye />
                        <span>{total_view}</span>

                    </div>
                </Card.Footer>
            </Card>
        </div >
    );
};

export default NewsThumb;