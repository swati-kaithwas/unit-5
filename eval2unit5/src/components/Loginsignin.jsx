import { useState } from "react"
import { useContext } from "react";
import { useNavigate} from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
export const Login=()=>{
 const [form,setForm]=useState({});
 const {handleToken}=useContext(AuthContext)
 const navigate=useNavigate();
 const handleChange=({target:{name,value}})=>{
     setForm({
         ...form,
         [name]: value
     })
 }
 return (
<div>
  <input type="text" onChange={handleChange} name="email" placeholder="enter email"/>
  <input type="text" onChange={handleChange} name="password" placeholder="enter password"/>
  <button onClick={()=>{
     
      handleToken("123456789");
   
    }
  }
   > Signin</button>
</div>
 );
}