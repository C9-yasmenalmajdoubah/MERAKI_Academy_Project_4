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
export const userContext = createContext();

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [productInCart, setProductInCart] = useState([])
  return (
    <userContext.Provider value={{ setIsLoggedIn, setToken, token ,productInCart, setProductInCart}}>
       <div className="App">
     
      <Nav/>
      <Routes>
          <Route path="/users/register" element={<Register />} />
          <Route path="/users/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/category" element={<Category />} />


        </Routes>
    </div>
    </userContext.Provider>
   
  );
}

export default App;
