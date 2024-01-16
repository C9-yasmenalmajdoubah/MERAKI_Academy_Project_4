import React ,{useEffect,useState,useContext}from 'react'
import { useParams } from "react-router-dom";
import axios from 'axios';
import { userContext } from "../../App"

const Category = () => {
  const [product, setProduct] = useState([])
  const {index}= useParams()
  console.log(index)
  const getProduct = () => {
  axios
  .get(`http://localhost:5000/products/${index}` )
  .then((res) => {
console.log(res.data)
    setProduct( res.data.products)
     
  })
  .catch((err) => {
    console.log(err);
  });

  }

useEffect(() => {
getProduct()
}, []);

  return (
   
  
  <></>
  
  )
}

export default Category