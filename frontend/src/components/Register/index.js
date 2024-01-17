import React ,{useState}from 'react'
import axios from 'axios'
import './register.css'
const Register = () => {

const [user, setUser] = useState({
    name:"",
 
    email:"",
    password:""

})

  return (

    <div className='signup'>

<div className='contaner'>       
<h1>Sign Up </h1> 
<div className='field'>
  <input
        placeholder="Your Name"
        type="text"
        onChange={(e) => {
            setUser({ ...user, name: e.target.value });
        }}
      />
    
     
    
      
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
    </div>
      <button onClick={()=>{
         axios.post("http://localhost:5000/users/register",user).then((res)=>{
          console.log(res.data.message)
          }).catch((err)=>{
            console.log(err);
          })
        }
      }>Continue</button>
      <p className='haveAccount'>Already have an account? <span>Log In Here</span></p>
      <div className='agree'>
        <input type="checkbox" />
        <p>By counitnuing , i agree to the term of use & privacy</p>
      
      </div>


      </div>
      
    </div>
  )
}

export default Register