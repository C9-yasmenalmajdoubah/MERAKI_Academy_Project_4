import React from 'react'
import {Link } from "react-router-dom";
const Nav = () => {
  return (
    <div className='Nav' style={{ display: "flex", gap: "20px" }}>
        <Link to="/users/register">Register</Link> 
      
        <Link to="/users/login">Login</Link>
        <Link to="/home">Home</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/contact">Contact</Link>


    </div>
  )
};

export default Nav
