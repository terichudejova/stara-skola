import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Carousel } from 'react-bootstrap';
import "./CarouselGallery.css";

export default function CarouselGallery() {
    return (
            <Carousel className='carousel'>
              <Carousel.Item className='carousel-item'>
                <img
                  className="d-block w-100"
                  src="/src/images/Carousel2.png"
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item className='carousel-item'>
                <img
                  className="d-block w-100"
                  src="/src/images/Carousel3.png"
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item> 
                <img
                  className="d-block w-100"
                  src="/src/images/carousel1.png"
                  alt="Third slide"
                />
              </Carousel.Item>
              <Carousel.Item> 
                <img
                  className="d-block w-100"
                  src="/src/images/carousel4.png"
                  alt="Third slide"
                />
              </Carousel.Item>
              <Carousel.Item> 
                <img
                  className="d-block w-100"
                  src="/src/images/carousel5.png"
                  alt="Third slide"
                />
              </Carousel.Item>
              <Carousel.Item> 
                <img
                  className="d-block w-100"
                  src="/src/images/carousel6.png"
                  alt="Third slide"
                />
              </Carousel.Item>
            </Carousel>
    )
}