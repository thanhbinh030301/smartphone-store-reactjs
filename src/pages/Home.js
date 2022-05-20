import React from 'react'
import Filter from '../components/Filter'
import Header from '../components/Header'
import ListProducts from '../components/ListProducts'
import ListProductsSlider from '../components/ListProducts-Slider'
import Slider from '../components/Slider'



const Home = () => {
    return (
        <div>
            <Header/>
            <Slider/>
            <Filter/>
            <ListProductsSlider />
            <ListProducts/>
        </div>
    )
}

export default Home;