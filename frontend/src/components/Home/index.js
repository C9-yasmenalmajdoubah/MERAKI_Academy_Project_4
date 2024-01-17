
import React ,{useEffect,useState,useContext}from 'react'
import axios from 'axios';
import { userContext } from "../../App"
import Hero from '../Hero';
import All from '../AllItems';
import Footer from '../Footer';
const Home = () => {
  

  return (
    <>
    <Hero/> 
   <All/>
   <div className='footer'> <Footer/></div>
  
    </>
   
  )
}

export default Home