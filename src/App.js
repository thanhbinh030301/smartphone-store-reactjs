import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DetailPage from './pages/DetailPage.js';

import Home from './pages/Home.js';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {<Home/>}/>
        <Route path="/product" element = {<DetailPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
