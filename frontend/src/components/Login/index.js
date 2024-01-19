import React ,{useState,useContext}from 'react'
import axios from 'axios'
import { userContext } from '../../App'
import { Link, useNavigate } from 'react-router-dom'
import'./login.css'
const Login = () => {
const vani=useNavigate()
    const [user, setUser] = useState({email:"",
    password:""})
  const {setIsLoggedIn,setToken}=useContext(userContext)

  return (
    <div className='login'>
<div className='contaner-log'>
<h1>Sign In</h1>
        <input
        placeholder="Email"
        type="email"
        onChange={(e) => {
            setUser({ ...user, email: e.target.value });
           
        }}
      />
      
      <input
        placeholder="Password"
        type="password"
        onChange={(e) => {
            setUser({ ...user,password: e.target.value });
        }}
      />
    
      <button onClick={()=>{
         axios.post("http://localhost:5000/users/login",user).then((res)=>{
          console.log(res.data.message)
          
          console.log(res.data);
          setIsLoggedIn(true)
          localStorage.setItem("token",res.data.token)
          setToken(res.data.token)
          vani("/home")
         
          
          }).catch((err)=>{
            console.log(err);
          })

        }
      }>LOGIN</button>
</div>
   <div>
    <Link to='/register'><h2 >Don't Have , Click TO SIGN UP</h2></Link>
    
    </div>    
    </div>
  )
}

export default Login