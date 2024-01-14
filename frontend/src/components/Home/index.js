
import React ,{useEffect,useState,useContext}from 'react'
import axios from 'axios';
import { userContext } from "../../App"
const Home = () => {
  const { token,productInCart, setProductInCart } = useContext(userContext);
  const [product, setProduct] = useState([])
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

const allProduct = product.map((elem , i)=>{
  return  (
    
    <>
    {console.log(elem)}
      <h2>{elem.title}</h2>{elem.title}
<h2> {elem.price}  JD</h2>
     
     <img src= {elem.image_src} ></img>
     <br></br>
     <button onClick={()=>{
setProductInCart ([...productInCart,elem])
     }}>ADD To Cart</button>
        </>)
})


  return (
    <div>
      {allProduct}
    </div>
  )
}

export default Home