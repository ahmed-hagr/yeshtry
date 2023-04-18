import MainNavpar from './components/mainNavpar.js';
import Footer from './components/footer.jsx';

import { BrowserRouter, Routes, Route, Navigate, Link } from "react-router-dom";
import Whitelis from './pages/whitelis';
import Login from './pages/login';
import React, { useState } from 'react';

const Product = React.lazy(() => import("./pages/product"));





export default () => {

  const [myCartprops, setMyCartprops] = useState(JSON.parse(window.localStorage.getItem("myCart")) ? JSON.parse(window.localStorage.getItem("myCart")) : []);
  const getcartItems = (myCart) => {
    setMyCartprops(myCart)
  }

  return (
    <BrowserRouter>
      <div>
        <MainNavpar myCartprops={myCartprops} />
      </div>
      <div className='body-cont  '>
        <Routes >
          <Route path="/" element={<Product getcartItems={getcartItems} />} />
          <Route path="/whitelist" element={<Whitelis />} />
          <Route path="/Login" element={<Login />} />

        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

