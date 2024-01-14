import React from "react";
import { Link, useNavigate } from "react-router-dom";
const Nav = () => {
  const navigate = useNavigate();
  const hanfle=()=>{
    console.log("test");
  }
  return (
    <div className="Nav" style={{ display: "flex", gap: "20px" }}>
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
