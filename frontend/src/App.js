import "./App.css";
import React, { useState, createContext } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Cart from "./components/Cart";
import Contact from "./components/Contact";
import About from "./components/About";
import Category from "./components/Category";
import Footer from "./components/Footer";
import Details from "./components/Details";
export const userContext = createContext();

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [productInCart, setProductInCart] = useState([])
  const [product, setProduct] = useState([])
  const [choose, setChoose] = useState([])
  return (
    <userContext.Provider value={{choose, setChoose, setIsLoggedIn, setToken, token ,productInCart, setProductInCart,product, setProduct}}>
       <div className="App">
     
      <Nav/>
      <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/cat/:index" element={<Category />}/>
          <Route path="/product/:id" element={<Details />}/>


        </Routes>
       
    </div>
    </userContext.Provider>
   
  );
}

export default App;
