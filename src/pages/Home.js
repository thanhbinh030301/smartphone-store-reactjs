import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import ListProductsSlider from '../components/ListProducts-Slider'
import Slider from '../components/Slider'



const Home = () => {
    return (
        <div>
            <Header/>
            <Slider/>
            <ListProductsSlider title={"Iphone"}/>
            <ListProductsSlider title={"Samsung"}/>
            <Footer/>
        </div>
    )
}

export default Home;