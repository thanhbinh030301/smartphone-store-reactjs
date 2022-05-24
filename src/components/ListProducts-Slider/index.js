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


const ListProductsSlider = (props) => {
    return (
        <Container>
            <h1 style={{padding:"45px"}} className="text-center">{props.title}</h1> 
            <Swiper
            breakpoints={{
                600: {
                    slidesPerView: 3,
                },
                800: {
                  slidesPerView: 4,
                },
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