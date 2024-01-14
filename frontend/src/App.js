import "./App.css";
import React, { useState, createContext } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import Nav from "./components/Nav";
export const userContext = createContext();

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState(localStorage.getItem("token"));
  return (
    <userContext.Provider value={{ setIsLoggedIn, setToken, token }}>
       <div className="App">
      <h1>Hello, World!</h1>
      <Nav/>
      <Routes>
          <Route path="/users/register" element={<Register />} />
          <Route path="/users/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          
        </Routes>
    </div>
    </userContext.Provider>
   
  );
}

export default App;
