
import React ,{useEffect,useState,useContext}from 'react'
import axios from 'axios';
import { userContext } from "../../App"
import Hero from '../Hero';
import All from '../AllItems';
const Home = () => {
  

  return (
    <>
    <Hero/> 
   <All/>
    </>
   
  )
}

export default Home