import React from 'react'
import './product.css'
import { Link, useNavigate } from "react-router-dom";
import Details from '../Details'
const Product = (props) => {
 
  return (
    <div className='product'>
       <img  src ={props.image_src }alt ="img" />
        
        <p>{props.title}</p>
        <p>{props.price} JD</p>
        <button onClick={()=>{
          <Details name ={props.title} image_src={props.image_src} price ={props.price} title ={props.title} id ={props._id}/>
        }}>Show details</button>

    </div>
  )
}

export default Product