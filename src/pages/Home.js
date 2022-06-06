import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Footer from '../components/Footer'
import Header from '../components/Header/index'
import ListProductsSlider from '../components/ListProducts-Slider'
import Slider from '../components/Slider'
import { getProducts } from '../redux/Slice/productsSlice'



const Home = () => {
    return (
        <div>
            <Slider/>
            <ListProductsSlider title={"Iphone"}/>
            <ListProductsSlider title={"Samsung"}/>
        </div>
    )
}

export default Home;