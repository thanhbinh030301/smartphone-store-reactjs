import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import ListProductsSlider from '../components/ListProducts-Slider'
import Slider from '../components/Slider'



const Home = () => {
    useEffect(() => {
            window.scrollTo({top: 0, left:0, behavior: "instant"});
    });
    return (
        <div>
            <Slider/>
            <ListProductsSlider title={"Sản phẩm mới"}/>
            <ListProductsSlider title={"Sản phẩm bán chạy"}/>
        </div>
    )
}

export default Home;