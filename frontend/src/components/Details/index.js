import React, { useEffect, useState, useContext } from "react";
import "./details.css";
import { userContext } from "../../App";
import axios from 'axios';
import { useParams } from "react-router-dom";
const Details = () => {
  const { productInCart, setProductInCart, product,token ,numOfItem,setNumOfItem} = useContext(userContext);
  const { id } = useParams();
  const [item , setItem ] = useState(null)
  console.log(id);

  // let choose = product.find((elem, i) => {
  //   console.log(elem);
  //   return elem._id === id;
  // });
  const getProduct = () => {
    axios
    .get(`http://localhost:5000/products/${id}` )
    .then((res) => {
  console.log(res.data)
      // setfirst( res.data.product)
      setItem(res.data.product)
       
    })
    .catch((err) => {
      console.log(err);
    });
  
    }
  
  useEffect(() => {
  getProduct()
  }, []);
// console.log(choose)
  return (
    <div className="details">
       <div className="left-display">
        <img src={item?.image_src} alt="2" />
      </div>
      <div className="right-display">
        <h1>{item?item.title:<h1>cart is empty</h1>}</h1>
        <h1>{item?.price} JD</h1>
        <button
          onClick={() => {
           
setNumOfItem(numOfItem+1)
axios
  .put(`http://localhost:5000/cart/`,
    {
      porduct:`${id}`
    },{
    headers: {
      Authorization: `Bearer ${token}`,
    } ,
     }
  )
  .then((res) => {

    //  setProductInCart([...productInCart, setProductInCart(item)]);// add cart 
     
  })
  .catch((err) => {
    console.log(err);
  });


          }}
        >
          ADD TO CART
        </button>
        </div>
    </div> 
  );
};

export default Details;
