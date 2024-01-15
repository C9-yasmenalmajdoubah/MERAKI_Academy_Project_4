import React from "react";
import'./nav.css'
import { Link, useNavigate } from "react-router-dom";
const Nav = () => {

  const navigate = useNavigate();
  const hanfle=()=>{
    console.log("test");
  }
  return (
    <div className="Nav" >
      <div className="nav-logo">
        <img src ="https://logomaker.designfreelogoonline.com/media/productdesigner/logo/resized/000750_online_international_e_commerce_logo_maker-01.png" alt ="logo" style={{ widthay: "30%", height: "auto" }}/>
      <p>For You Lady</p>
      </div>
      <ul className="nav-menu">
        <li>HOME<hr/></li>
        <li>Dimaond</li>
        <li>SLIVER</li>
        <li>GOLD</li>
      </ul>
      <div className="nav-login-cart">
        <button>Login</button>
        <img src="https://i.pinimg.com/564x/a2/c1/be/a2c1beb00b8d5d172f07c548bd29c6aa.jpg" alt = "cart"/>
      
      </div>
     
    </div>
  );
};

export default Nav;
/*
<Link to="/users/register">Register</Link>

      <Link to="/users/login">Login</Link>
      <Link to="/home">Home</Link>
      
      <Link to="/cart">Cart</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/about">About</Link>
*/
