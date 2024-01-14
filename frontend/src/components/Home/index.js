
import React ,{useEffect,useState,useContext}from 'react'
import axios from 'axios';
import { userContext } from "../../App"
const Home = () => {
  const { token } = useContext(userContext);
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
console.log(res)
        setProduct( res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  
  useEffect(() => {
    getProduct()
  }, []);
  return (
    <div>
      {/* {product} */}
    </div>
  )
}

export default Home