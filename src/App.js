import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer/index.js';
import Header from './components/Header/index.js';
import CartPage from './pages/CartPage.js';
import DetailPage from './pages/DetailPage.js';

import Home from './pages/Home.js';
import InfoUserPage from './pages/InfoUserPage.js';
import ListProductPage from './pages/ListProductPage.js';
import ManagerPage from './pages/ManagerPage.js';
import OrderSuccessPage from './pages/OrderSuccessPage/OrderSuccessPage.js';
import { getProducts } from './redux/Slice/productsSlice.js';


function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])
  
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element = {<Home/>}/>
        <Route path="/:brand/:slug" element = {<DetailPage/>}/>
        <Route path="/cart" element = {<CartPage/>}/>
        <Route path="/:brand" element = {<ListProductPage/>}/>
        <Route path="/search" element = {<ListProductPage/>}/>
        <Route path="/manager" element = {<ManagerPage/>}/>
        <Route path="/user" element = {<InfoUserPage/>}/>
        <Route path="/orderSuccess" element = {<OrderSuccessPage/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
