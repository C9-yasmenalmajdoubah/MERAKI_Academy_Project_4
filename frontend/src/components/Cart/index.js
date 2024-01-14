import axios from 'axios';
import React ,{useEffect,useState,useContext}from 'react'
import { userContext } from "../../App"

const Cart = () => {
  const { token,productInCart, setProductInCart } = useContext(userContext);
  
  const getProduct = () => {
    console.log("token:",token);
    axios
      .get("http://localhost:5000/cart", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
console.log(res)
        setProductInCart( res.data.products[0].cartItem);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  
  useEffect(() => {
    getProduct()
  }, []);
console.log(productInCart)
const allProduct = productInCart.map((elem , i)=>{
    return  (
      
      <>
      
        <h2>{elem.quantity}</h2>{elem.title}
  <h2> {elem.price}  JD</h2>
       
       <img src= {elem.image_src} ></img>
       <br></br>
      
          </>)
  })
  console.log(allProduct)
  return (
    <div>{allProduct}</div>
  )
}

export default Cart