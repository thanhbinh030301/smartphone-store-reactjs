import './product-image-slider.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Thumbs } from 'swiper'
import { Container } from 'react-bootstrap'
import { useState } from 'react'

const Thumbnail= () => {
    const [thumbsSwiper, setThumbsSwiper] = useState();

    return (
        <Container style={{width: '600px'}} className = "sticky-top">
            {/* Swiper Image */}
            <Swiper
            loop={true}
            spaceBetween={10}
            navigation={true}
            modules={[Navigation, Thumbs]}
            grabCursor={true}
            thumbs={{ swiper: thumbsSwiper }}
            className='product-images-slider'
            >
                <SwiperSlide key="1">
                    <img src='https://shopdunk.com/wp-content/uploads/2021/09/iPhone_13_PDP_Position-1A_Color_PRODUCTRED__VN-900x900.jpg' alt="product images" />
                </SwiperSlide>
                <SwiperSlide key="2">
                    <img src='https://shopdunk.com/wp-content/uploads/2021/09/iPhone_13_PDP_Position-1A_Color_PRODUCTRED__VN-900x900.jpg' alt="product images" />
                </SwiperSlide>
                <SwiperSlide key="3">
                    <img src='https://shopdunk.com/wp-content/uploads/2021/09/iPhone_13_PDP_Position-1A_Color_PRODUCTRED__VN-900x900.jpg' alt="product images" />
                </SwiperSlide>
            </Swiper>
            
            {/* Thumbnail image */}
            <Swiper
                onSwiper={setThumbsSwiper}
                loop={true}
                spaceBetween={10}
                slidesPerView={4}
                modules={[Navigation, Thumbs]}
                className='product-images-slider-thumbs'
            >
                <SwiperSlide key='1'>
                    <div className="product-images-slider-thumbs-wrapper">
                        <img src='https://shopdunk.com/wp-content/uploads/2021/09/iPhone_13_PDP_Position-1A_Color_PRODUCTRED__VN-900x900.jpg' alt="product images" />
                    </div>
                </SwiperSlide>
                <SwiperSlide key='2'>
                    <div className="product-images-slider-thumbs-wrapper">
                        <img src='https://shopdunk.com/wp-content/uploads/2021/09/iPhone_13_PDP_Position-1A_Color_PRODUCTRED__VN-900x900.jpg' alt="product images" />
                    </div>
                </SwiperSlide>
                <SwiperSlide key='3'>
                    <div className="product-images-slider-thumbs-wrapper">
                        <img src='https://shopdunk.com/wp-content/uploads/2021/09/iPhone_13_PDP_Position-1A_Color_PRODUCTRED__VN-900x900.jpg' alt="product images" />
                    </div>
                </SwiperSlide>
            </Swiper>
        </Container>
    )
}


export default Thumbnail