import React from 'react';
import {Container } from 'react-bootstrap';
import ProductItem from '../ProductItem';

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import './productItems-slider.scss'


const ListProductsSlider = () => {
    // const settings = {
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 6,
    //     slidesToScroll: 5,
    //     initialSlide: 0,
    //     responsive: [
    //         {
    //           breakpoint: 1024,
    //           settings: {
    //             slidesToShow: 3,
    //             slidesToScroll: 3,
    //             infinite: true
    //           }
    //         },
    //         {
    //           breakpoint: 600,
    //           settings: 'unslick'
    //         },
    //         {
    //           breakpoint: 480,
    //           settings: 'unslick'
    //         }
    //       ]
    //   };
    return (
        <Container>
            {/* <h1 style={{paddingTop:"45px"}} className="text-center">Iphone</h1>  
            <Row className='hi'>
                <Slider {...settings}>
                    <Col style = {{width: '13.7em'}} className="p-2">
                        <ProductItem  />
                    </Col>     
                    <Col style = {{width: '13.7em'}} className="p-2">
                        <ProductItem />
                    </Col>     
                    <Col style = {{width: '13.7em'}} className="p-2">
                        <ProductItem />
                    </Col>     
                    <Col style = {{width: '13.7em'}} className="p-2">
                        <ProductItem />
                    </Col>     
                    <Col style = {{width: '13.7em'}} className="p-2">
                        <ProductItem />
                    </Col>     
                    <Col style = {{width: '13.7em'}} className="p-2">
                        <ProductItem />
                    </Col>   
                    <Col style = {{width: '13.7em'}} className="p-2">
                        <ProductItem />
                    </Col>   
                    <Col style = {{width: '13.7em'}} className="p-2">
                        <ProductItem />
                    </Col>   
                    <Col style = {{width: '13.7em'}} className="p-2">
                        <ProductItem />
                    </Col>   
                </Slider>  
            </Row> */}
            <h1 style={{padding:"45px"}} className="text-center">Iphone</h1> 
            <Swiper
            breakpoints={{
                600: {
                    slidesPerView: 3,
                },
                800: {
                  slidesPerView: 4,
                },
                // when window width is >= 768px
                1000: {
                  slidesPerView: 5,
                },
            }}
            loop={true}
            modules={[Navigation, Autoplay]}
            spaceBetween={30}
            slidesPerView={2}
            navigation
            autoplay = {{delay: 2000}}
            className="productItems-slider"
            >
                <SwiperSlide>
                    <ProductItem  />
                </SwiperSlide>
                <SwiperSlide>
                    <ProductItem />
                </SwiperSlide>
                <SwiperSlide>
                    <ProductItem />
                </SwiperSlide>
                <SwiperSlide>
                    <ProductItem />
                </SwiperSlide>
                <SwiperSlide>
                    <ProductItem />
                </SwiperSlide>
                <SwiperSlide>
                    <ProductItem />
                </SwiperSlide>
            </Swiper>


        </Container>
       
    )
}

export default ListProductsSlider;