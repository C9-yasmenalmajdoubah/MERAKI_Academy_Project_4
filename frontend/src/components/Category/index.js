import React ,{useEffect,useState,useContext}from 'react'
import { useParams } from "react-router-dom";
import axios from 'axios';
import { userContext } from "../../App"
import './category.css'
import Product from "../Product/index"
const Category = () => {
  const [product, setProduct] = useState([])
  let select=''
  
  const {index}= useParams()
  console.log(index)
 if(index==='659a167a6833c57aa3ae0b10'){
select='https://www.suratdiamond.com/ProductADImages/DiabannerR.jpg'
  }
else if (index === '659a16696833c57aa3ae0b0e'){
  select='https://reliancejewels.net/html/html/img/page-banner/Category_Banners_Gold_Bangles.jpg'
  }
  else if (index === '659a165f6833c57aa3ae0b0c'){
    select='https://i.pinimg.com/1200x/b8/38/ca/b838ca5207ee0623ba003ce4e2086103.jpg'
      }
  const getProduct = () => {
  axios
  .get(`http://localhost:5000/products/${index}` )
  .then((res) => {
console.log(res.data)
    setProduct( res.data.product)
     
  })
  .catch((err) => {
    console.log(err);
  });

  }

useEffect(() => {
getProduct()
}, []);

console.log (product)
  return (
   <div className='shop-cat'>
<img  className='pic' src={select} alt='1' height='300' width ='82%'/>
<div className='shop'>
<p>
  Showing 1-12 out of 36 products
</p>

</div>

<div className='product-after-filter'>
  
  {product.map((elem , i)=>{
        console.log (elem)
        return <Product key ={i} name ={elem.title} image_src={elem.image_src} price ={elem.price}/>
    })}
</div>
   </div>
  
  
  
  )
}

export default Category