import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CartPage from './pages/CartPage.js';
import DetailPage from './pages/DetailPage.js';

import Home from './pages/Home.js';
import ListProductPage from './pages/ListProductPage.js';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {<Home/>}/>
        <Route path="/product" element = {<DetailPage/>}/>
        <Route path="/cart" element = {<CartPage/>}/>
        <Route path="/list-product" element = {<ListProductPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
