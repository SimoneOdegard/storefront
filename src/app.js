import React from 'react';
import Header from './components/header.js';
import Footer from './components/footer.js';
import Categories from './components/categories.js';
import Products from './components/products.js';
import './components/styles/style.scss';
import Cart from './components/simple-cart.js';

function App() {
  return (
    <>
      <Header />
      <Categories />
      <Cart />
      <Products />
      <Footer />
    </>
  )
}

export default App;