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
        setProductInCart( res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  
  useEffect(() => {
    getProduct()
  }, []);
  return (
    <div>Cart</div>
  )
}

export default Cart