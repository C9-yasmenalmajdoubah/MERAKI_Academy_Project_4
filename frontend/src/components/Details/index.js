import React ,{useEffect,useState,useContext}from 'react'
import './details.css'
import { userContext } from '../../App'

const Details = () => {

    const {productInCart, setProductInCart,product,choose, setChoose}=useContext(userContext)
   
let c= product.filter((elem)=>{
return elem._id===choose._id

})
  return (
    <div className='details'>
        <div className='left-display'>
            
                <img src ={choose.image_src} alt = "2"/>
           

        </div>
        <div className='right-display'>
            <h1>{choose.title}</h1>
            <h1>{choose.price} JD</h1>
            <button onClick={()=>{
setProductInCart([...productInCart,setProductInCart(choose)])
            }}>ADD TO CART</button>
        </div>
    </div>
  )
}

export default Details