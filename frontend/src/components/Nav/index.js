import'./nav.css'
import React ,{useEffect,useState,useContext}from 'react'
import { userContext } from "../../App"
import { Link, useNavigate } from "react-router-dom";
const Nav = () => {
const [cat,setCat]=useState("home")
const { token,numOfItem,setNumOfItem} = useContext(userContext);
  const navigate = useNavigate();
  const hanfle=()=>{
    console.log("test");
  }
  return (
    <div className="Nav" >
      <div className="nav-logo">
        <img src ="https://logomaker.designfreelogoonline.com/media/productdesigner/logo/resized/000750_online_international_e_commerce_logo_maker-01.png" alt ="logo" style ={{width:"60px" ,height:"60px"}}/>
      <p>For You Lady</p>
      </div>
      <ul className="nav-menu">
        
        <li onClick={()=>{setCat("home")}}><Link style = {{textDecoration: 'none'}}to='/'>HOME</Link>{cat==="home"?<hr/>:<></> }</li>
        <li onClick={()=>{setCat("dimaond")}}><Link style = {{textDecoration: 'none'}}to='/cat/659a167a6833c57aa3ae0b10'>Dimaond</Link>{cat==="dimaond"?<hr/>:<></> }</li>
        
        <li onClick={()=>{setCat("gold")}}><Link style = {{textDecoration: 'none'}}to='/cat/659a16696833c57aa3ae0b0e'>GOLD</Link>{cat==="gold"?<hr/>:<></> }</li>
        <li onClick={()=>{setCat("silver")}}><Link style = {{textDecoration: 'none'}}to='/cat/659a165f6833c57aa3ae0b0c'>SLIVER</Link>{cat==="silver"?<hr/>:<></> }</li>
      </ul>
      <div className="nav-login-cart">
         {token?<img src ="https://st3.depositphotos.com/6050492/12653/v/450/depositphotos_126539060-stock-illustration-app-icon-template-vector.jpg"alt = "log" width="60" height="60"/>: <button onClick={()=>{navigate("/login")}} style={{outline: 'none'}}>Login</button>}

        <Link style = {{textDecoration: 'none'}} to ="/cart"><img src="https://i.pinimg.com/564x/a2/c1/be/a2c1beb00b8d5d172f07c548bd29c6aa.jpg" alt = "cart" width="60" height="60"/></Link>
      <div className="nav-cart-count">{numOfItem}</div>
      </div>
     
    </div>
  );
};

export default Nav;
/*
<div className="Nav" >
      <div className="nav-logo">
        <img src ="https://logomaker.designfreelogoonline.com/media/productdesigner/logo/resized/000750_online_international_e_commerce_logo_maker-01.png" alt ="logo"  width="60" height="60"/>
      <p>For You Lady</p>
      </div>
      <ul className="nav-menu">
        <li onClick={()=>{setCat("home")}}><Link style = {{textDecoration: 'none'}}to='/'>HOME</Link>{cat==="home"?<hr/>:<></> }</li>
        <li onClick={()=>{setCat("dimaond")}}><Link style = {{textDecoration: 'none'}}to='/'>Dimaond</Link>{cat==="dimaond"?<hr/>:<></> }</li>
        <li onClick={()=>{setCat("silver")}}><Link style = {{textDecoration: 'none'}}to='/'>SLIVER</Link>{cat==="silver"?<hr/>:<></> }</li>
        <li onClick={()=>{setCat("gold")}}><Link style = {{textDecoration: 'none'}}to='/'>GOLD</Link>{cat==="gold"?<hr/>:<></> }</li>
      </ul>
      <div classNalinkme="nav-login-cart">
         <button onClick={()=>{navigate("/login")}}>Login</button>
        <Link style = {{textDecoration: 'none'}} to ="/cart"><img src="https://i.pinimg.com/564x/a2/c1/be/a2c1beb00b8d5d172f07c548bd29c6aa.jpg" alt = "cart" width="60" height="60"/></Link>
      <div className="nav-cart-count">0</div>
      </div>
     
    </div>
*/
