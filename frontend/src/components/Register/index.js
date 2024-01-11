import React ,{useState}from 'react'
import axios from 'axios'
const Register = () => {

const [user, setUser] = useState({
    name:"",
 
    email:"",
    password:""

})

  return (

    <div>Register <br></br>
        <input
        placeholder="Your Name"
        type="text"
        onChange={(e) => {
            setUser({ ...user, name: e.target.value });
        }}
      />
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
         axios.post("http://localhost:5000/users/register",user).then((res)=>{
          console.log(res.data.message)
          }).catch((err)=>{
            console.log(err);
          })
        }
      }>Register</button>
    </div>
  )
}

export default Register