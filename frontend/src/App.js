import "./App.css";
import React, { useState, createContext } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
export const userContext = createContext();
function App() {
  return (
    <userContext.Provider>
       <div className="App">
      <h1>Hello, World!</h1>
      <Routes>
          <Route path="/users/register" element={<Register />} />
          <Route path="/users/login" element={<Login />} />

          
        </Routes>
    </div>
    </userContext.Provider>
   
  );
}

export default App;
