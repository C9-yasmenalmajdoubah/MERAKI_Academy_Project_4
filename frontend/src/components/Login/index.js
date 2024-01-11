import React ,{useState,useContext}from 'react'
import axios from 'axios'
import { userContext } from '../../App'
import { useNavigate } from 'react-router-dom'
const Login = () => {
const vani=useNavigate()
    const [user, setUser] = useState({email:"",
    password:""})
  const {setIsLoggedIn,setToken}=useContext(userContext)

  return (
    <div>Login
        <br></br>
        <input
        placeholder="Email"
        type="email"
        onChange={(e) => {
            setUser({ ...user, email: e.target.value });
           
        }}
      />
      <br></br>
      <input
        placeholder="Password"
        type="password"
        onChange={(e) => {
            setUser({ ...user,password: e.target.value });
        }}
      />
      <br></br>
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
  )
}

export default Login