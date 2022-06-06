import './product-image-slider.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Thumbs } from 'swiper'
import { Container } from 'react-bootstrap'
import { useState } from 'react'

const Thumbnail= ({images}) => {
    const [thumbsSwiper, setThumbsSwiper] = useState();
    console.log("hi")
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
                {images && images.map((image,index) => {
                    console.log(index)
                    return(
                        <SwiperSlide key={index}>
                        <img src={image} alt="product images" />
                    </SwiperSlide>
                    )})}
            </Swiper>
            
            {/* Thumbnail image */}
            <Swiper
                onSwiper={setThumbsSwiper}
                loop={true}
                spaceBetween={10}
                slidesPerView={5}
                modules={[Navigation, Thumbs]}
                className='product-images-slider-thumbs'
            >
                {images && images.map((image,index) => (
                    <SwiperSlide key={index}>
                        <img src={image} alt="product images" />
                    </SwiperSlide>
                ))}
            </Swiper>
        </Container>
    )
}


export default Thumbnail