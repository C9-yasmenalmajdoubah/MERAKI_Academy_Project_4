import React ,{useState,useContext}from 'react'
import './details.css'
import { userContext } from '../../App'

const Details = (props) => {
    const {productInCart, setProductInCart}=useContext(userContext)
    console.log(props)
  return (
    <div className='details'>
        <div className='left-display'>
            
                <img src ={props.image_src} alt = "2"/>
           

        </div>
        <div className='right-display'>
            <h1>{props.title}</h1>
            <h1>{props.price} JD</h1>
            <button onClick={()=>{
setProductInCart([...productInCart,setProductInCart(props)])
            }}>ADD TO CART</button>
        </div>
    </div>
  )
}

export default Details