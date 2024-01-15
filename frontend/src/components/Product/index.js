import React from 'react'
import './product.css'
const Product = (props) => {
  return (
    <div className='product'>
        <img  src ={props.image_src }alt ="img"/>
        <p>{props.title}</p>
        <p>{props.price}</p>

    </div>
  )
}

export default Product