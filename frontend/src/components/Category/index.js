import React ,{useEffect,useState,useContext}from 'react'
import { useParams } from "react-router-dom";
import axios from 'axios';
import { userContext } from "../../App"
import './category.css'
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
    setProduct( res.data.products)
     
  })
  .catch((err) => {
    console.log(err);
  });

  }

useEffect(() => {
getProduct()
}, []);

//console.log (select)
  return (
   <div className='shop-cat'>
<img src={select} alt='1' height='300' width ='1350'/>
<div className='shop'>
<p>
  <span>Showing 1-12</span> out of 36 products
</p>
<div className='ppp'>
  
  
</div>
</div>


   </div>
  
  
  
  )
}

export default Category