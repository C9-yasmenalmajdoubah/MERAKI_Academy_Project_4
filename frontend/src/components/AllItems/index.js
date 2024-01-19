
import React ,{useEffect,useState,useContext}from 'react'
import axios from 'axios';
import { userContext } from "../../App"
import Product from "../Product/index"
import './allitem.css'
const All = () => {
    const { token,product, setProduct } = useContext(userContext);
  
  const getProduct = () => {
    console.log("token:",token);
    axios
      .get("http://localhost:5000/products", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {

        setProduct( res.data.products)
         
      })
      .catch((err) => {
        console.log(err);
      });
  };

  
  useEffect(() => {
    getProduct()
  }, []);

  return (
    <div className='all'>
        <h1>ALL PRODUCT</h1>
        <hr/>
        <div className='All-item'>
{
    product.map((elem , i)=>{
        console.log (elem)
        return <Product key ={i}  descrption ={elem.description}name ={elem.title} image_src={elem.image_src} price ={elem.price} title ={elem.title} id ={elem._id} 
          />
    })
}
        </div>
    </div>
  )
}

export default All