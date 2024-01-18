import React, { useEffect, useState, useContext } from "react";
import "./details.css";
import { userContext } from "../../App";
import axios from 'axios';
import { useParams } from "react-router-dom";
const Details = () => {
  const { productInCart, setProductInCart, product,token } = useContext(userContext);
  const { id } = useParams();
  console.log(id);

  let choose = product.find((elem, i) => {
    console.log(elem);
    return elem._id === id;
  });
console.log(choose)
  return (
    <div className="details">
      <div className="left-display">
        <img src={choose.image_src} alt="2" />
      </div>
      <div className="right-display">
        <h1>{choose.title}</h1>
        <h1>{choose.price} JD</h1>
        <button
          onClick={() => {
           

axios
  .put(`http://localhost:5000/cart/`,
    {
      porduct:`${id}`
    },{
    headers: {
      Authorization: `Bearer ${token}`,
    } ,
     }
  )
  .then((res) => {

     setProductInCart([...productInCart, setProductInCart(choose)]);// add cart 
     
  })
  .catch((err) => {
    console.log(err);
  });


          }}
        >
          ADD TO CART
        </button>
      </div>
    </div>
  );
};

export default Details;
