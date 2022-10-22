import React from 'react';
import { Carousel } from 'react-bootstrap';
import brand1 from '../../assets/images.jpg'
import brand2 from '../../assets/Martin_Schiere_003_COVER.jpg'

const BrandCarousel = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={brand1}
                        alt="First slide"
                    />

                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={brand2}
                        alt="Second slide"
                    />


                </Carousel.Item>

            </Carousel>

        </div>
    );
};

export default BrandCarousel;