import React from "react";
import'./nav.css'
import { Link, useNavigate } from "react-router-dom";
const Nav = () => {

  const navigate = useNavigate();
  const hanfle=()=>{
    console.log("test");
  }
  return (
    <div className="Nav" style={{ display: "flex", gap: "20px" }}>
      <div className="nav-logo">
        <img src ="https://logomaker.designfreelogoonline.com/media/productdesigner/logo/resized/000750_online_international_e_commerce_logo_maker-01.png" alt ="logo"/>
      <p>For You Lady</p>
      <ul className="nav-menu">
        <li>HOME</li>
        <li>Dimaond</li>
        <li>SLIVER</li>
        <li>GOLD</li>
      </ul>
      <div className="nav-login-cart">
        <button>Login</button>
        <img src="https://i.pinimg.com/564x/a2/c1/be/a2c1beb00b8d5d172f07c548bd29c6aa.jpg" alt = "cart"/>
      </div>
      </div>
      <Link to="/users/register">Register</Link>

      <Link to="/users/login">Login</Link>
      <Link to="/home">Home</Link>
      <label>
        Category 
        <select
          onClick={
           hanfle
          }
        >
          <option value="/diamon">TEst</option>
          {/* <option
          value="Dimaond"
          onSelect={(e) => {
            console.log(e.target.value);
            navigate("/users/login");
          }}
        >
          Dimaond
        </option>
        <option
          value="Gold"
          onClick={(e) => {
            console.log(e.target.value);
            navigate("/users/login");
          }}
        >
          Gold
        </option> */}
          <option value="Silver">Silver</option>
        </select>
      </label>
      <Link to="/cart">Cart</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/about">About</Link>
    </div>
  );
};

export default Nav;
