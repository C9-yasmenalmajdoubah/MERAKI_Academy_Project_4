
import React ,{useEffect,useState,useContext}from 'react'
import axios from 'axios';
import { userContext } from "../../App"
import Hero from '../Hero';
import All from '../AllItems';
import Footer from '../Footer';
const Home = () => {
  

  return (
    <div className='c'>
    <Hero/> 
   <All/>

  {/* <div className='footer'> <Footer/></div>*/}
  
    </div>
   
  )
}

export default Home