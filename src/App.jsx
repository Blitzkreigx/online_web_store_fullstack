import React, { useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom"
import AcercaDe from "./routes/acerca"
import Products from "./routes/products"
import Product from "./components/product"
import Contact from "./routes/contact"
import SingIn from "./routes/signin"
import SignUp from "./routes/signup"
import Header from "./routes/header"
import Footer from "./routes/footer"
import Car from "./routes/car"
import User from './routes/user';

function App() {
  const [cartCount, setCartCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState([])
  function getProducts() {
      fetch('http://localhost:3000')
        .then(response => {
          return response.json();
        })
        .then(data => {
          setProducts(data);
        });
  }
  useEffect(() => {
      getProducts();
  }, []);

  const updateCartCount = (count) => {
    setCartCount(count);
  };
  
  const addToCart = (product) => {
    setCartItems(prevItems => {
      const updatedItems = [...prevItems, product];
      localStorage.setItem('cartItems', JSON.stringify(updatedItems));
      return updatedItems;
    });
  };

  const removeFromCart = (productId) => {
    setCartItems(prevItems => {
        const updatedItems = prevItems.filter(item => item.id !== productId);
        localStorage.setItem('cartItems', JSON.stringify(updatedItems));
        return updatedItems;
    });

    setCartCount(prevCount => prevCount - 1);
  };

  useEffect(() => {
    const savedCartItems = localStorage.getItem('cartItems');
    if (savedCartItems) {
      setCartItems(JSON.parse(savedCartItems));
    }
  }, []);

  return (
    <>
      <Header cartCount={cartCount} setCartCount={setCartCount} />
      <main>
        <Routes>
          <Route path="/" element={<Products updateCartCount={updateCartCount} addToCart={addToCart} cartItems={cartItems} removeFromCart={removeFromCart} products={products} setProducts={setProducts} cartCount={cartCount} />} />
          <Route path="acerca-de" element={<AcercaDe />} />
          <Route path='contacto' element={<Contact />} />
          <Route path="product/:id" element={<Product updateCartCount={updateCartCount} addToCart={addToCart} cartItems={cartItems} removeFromCart={removeFromCart} products={products} setProducts={setProducts} cartCount={cartCount} />} /> 
          <Route path="perfil" element={<SingIn />} />
          <Route path="perfil/crear-cuenta" element={<SignUp />} />
          <Route path="user/:id" element={<User />} />
          <Route path="carrito" element={<Car cartItems={cartItems} removeFromCart={removeFromCart} />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App;
