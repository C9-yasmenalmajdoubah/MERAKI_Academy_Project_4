import React ,{useEffect,useState,useContext}from 'react'
import { useParams,useNavigate } from "react-router-dom";
import axios from 'axios';
import { userContext } from "../../App"
import './category.css'
import Product from "../Product/index"
const Category = () => {
  const { product,filter,setFilter } = useContext(userContext);
const [first, setfirst] = useState([])
  let productFilter=[]
  let select=''
  
  const {index}= useParams()
  const navigate=useNavigate()
  console.log(index)
 if(index==='659a167a6833c57aa3ae0b10'){
select='https://www.suratdiamond.com/ProductADImages/DiabannerR.jpg'
  }
else if (index === '659a16696833c57aa3ae0b0e'){
  select='https://reliancejewels.net/html/html/img/page-banner/Category_Banners_Gold_Bangles.jpg'
  }
  else if (index === '659a165f6833c57aa3ae0b0c'){
    select='https://mln2jro7x3jo.i.optimole.com/cb:tfXT.1b6e4/w:600/h:338/q:100/f:avif/https://www.925silverjewelry.com/wp-content/uploads/2023/10/10-2023-925Silver-Blog-CZ-Ring.jpg'
      }
      // setFilter(product.filter((elem,i)=>{
      //   console.log(elem)
      //   return elem.category._id===index
      //   })
      //   )
/*productFilter=product.filter((elem,i)=>{
console.log(elem)
return elem.category._id===index
})*/



  const getProduct = () => {
  axios
  .get(`http://localhost:5000/products/item/${index}` )
  .then((res) => {
console.log(res.data)
    setfirst( res.data.product)
     
  })
  .catch((err) => {
    console.log(err);
  });

  }

useEffect(() => {
getProduct()
}, [index]);

console.log (product)
  return (
    <>
    <h1>test</h1>
    <div className='shop-cat'>
 <img  className='pic' src={select} alt='1' height='300' width ='82%'/>
<div className='shop'>
<p>
  ALL NEW FOR YOU
</p>

 </div>

<div className='product-after-filter'>
  
  {first && first?.map((elem , i)=>{
        console.log (elem)
        // Product key ={i} name ={elem.title} image_src={elem.image_src} price ={elem.price}
        return  <div className='product'>
        <img  src ={elem.image_src }alt ="img" onClick={(e)=>{
         console.log(e.target)
        // console.log ("id",props.id )
          navigate(`/product/${elem._id}`)
 
        }}/>
         
         <p>{elem.title}</p>
         <p>{elem.price} JD</p>
         
     </div> 
    })}
</div>
   </div>
   </>
  
  
  )
}

export default Category