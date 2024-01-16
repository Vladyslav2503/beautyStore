import React, { useState } from 'react';

import './App.css';
import MainPage from './pages/MainPage/MainPage';
import Footer from './components/Footer';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Cosmetics from './pages/Cosmetics/Cosmetics';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Cart from './pages/Cart/Cart';

import img1 from './assets/image/item1.jpg';
import img2 from './assets/image/item2.jpg';
import img3 from './assets/image/item3.jpg';
import img4 from './assets/image/item4.jpg';
import img5 from './assets/image/item5.jpg';
import img6 from './assets/image/item6.jpg';
import ScrollToTop from './components/ScrollToTop';
import RegisterPage from './pages/Registration/Registration';
import LoginPage from './pages/Login/Login';
import AddGoods from './pages/AddGoods/AddGoods';
import Checkout from './pages/Checkout/Checkout';

function App() {
  const productItem = [
    {
      id: 1,
      img: img1,
      name: 'Frama',
      type: 'For Body',
      price: '19.99',
    },
    {
      id: 2,
      img: img2,
      name: 'Serum',
      type: 'For Face',
      price: '49.99',
    },
    {
      id: 3,
      img: img3,
      name: 'Solya Oksana',
      type: 'For Face',
      price: '99.99',
    },
    {
      id: 4,
      img: img4,
      name: 'Sleep Drops',
      type: 'For Face',
      price: '119.99',
    },
    {
      id: 5,
      img: img5,
      name: 'Good Night',
      type: 'For Face',
      price: '59.99',
    },
    {
      id: 6,
      img: img6,
      name: 'Coconut',
      type: 'For Body',
      price: '29.99',
    },
    {
      id: 7,
      img: img6,
      name: 'Coconut 2.0',
      type: 'For Body',
      price: '39.99',
    },
  ];

  const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem('cartItems')) || []);

  const [productItems, setProductItems] = useState(productItem)
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainPage productItems={productItems} />} />
        <Route
          path="/cosmetics"
          element={
            <Cosmetics
              productItems={productItems}
              cartItems={cartItems}
              setCartItems={setCartItems}
            />
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart cartItems={cartItems} setCartItems={setCartItems} />} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/registration" element={<RegisterPage/>} />
        <Route path="/addgoods" element={<AddGoods productItems={productItems} setProductItems={setProductItems} />} />
        <Route path="/checkout" element={<Checkout cartItems={cartItems} setCartItems={setCartItems}/>} />
      </Routes>
      {/*window.location.pathname !== '/login' && window.location.pathname !== '/registration' && <Footer />*/}
    </>
  );
}

export default App;
