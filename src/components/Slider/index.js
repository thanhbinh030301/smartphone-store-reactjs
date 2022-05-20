import React from 'react';
import { Carousel } from 'react-bootstrap';
const Slider = () =>{
    return (
        <Carousel bg='dark' variant='dark' style={{marginTop: '58px'}}>
            <Carousel.Item interval={2000} className='a'>
                <img
                className="d-block w-100"
                src='https://shopdunk.com/wp-content/uploads/2022/05/Banner-PC-macbook-Pro-1.jpg'
                alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <img
                className="d-block w-100 imgHeight"
                src='https://shopdunk.com/wp-content/uploads/2022/05/Banner-PC-macbook-air.jpg'
                alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <img 
                className="d-block w-100 a"
                src='https://shopdunk.com/wp-content/uploads/2022/05/ip13green_Banner-PC.jpg'
                alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    )
}
export default Slider;