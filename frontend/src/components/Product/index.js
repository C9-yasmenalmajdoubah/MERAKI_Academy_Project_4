import React ,{useEffect,useState,useContext}from 'react'
import './product.css'
import { userContext } from "../../App"
import { useNavigate } from "react-router-dom";


import Details from '../Details'
const Product = (props) => {
  const navigate = useNavigate();
  const {choose, setChoose}=useContext(userContext)
  return (
    <div className='product'>
       <img  src ={props.image_src }alt ="img" onClick={(e)=>{
        console.log(e.target)
       console.log ("id",props.id )
         navigate(`/product/${props.id}`)

       }}/>
        
        <p>{props.title}</p>
        <p>{props.price} JD</p>
        
    </div>
  )
}

export default Product