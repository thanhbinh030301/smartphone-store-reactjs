import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer/index.js';
import Header from './components/Header/index.js';
import CartPage from './pages/CartPage.js';
import DetailPage from './pages/DetailPage.js';

import Home from './pages/Home.js';
import ListProductPage from './pages/ListProductPage.js';
import { getProducts } from './redux/Slice/productsSlice.js';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts())
    console.log(1);
  }, [dispatch])
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element = {<Home/>}/>
        <Route path="/:brand/:slug" element = {<DetailPage/>}/>
        <Route path="/cart" element = {<CartPage/>}/>
        <Route path="/:brand" element = {<ListProductPage/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
