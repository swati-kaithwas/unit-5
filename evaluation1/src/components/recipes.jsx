// import e from "express";
import { useState,useRef} from "react";
export const Recies=()=>{
    const [show,setShow]=useState([]);
    const total =useRef([])
    const getDetails = () => {
        fetch('http://localhost:3001/recipes')
        .then(v => v.json())
        .then(res =>
            
     total.current=res)
        
    }
    getDetails();
    const  w=total.current;
    console.log("ww",w);
    
 return (
     <>{w.map((e)=>
  <>
    <div>{e.title}</div>
    <div>{e.ingredients}</div>
    <div>{e.timetocook}</div>
    <div>{e.instructions}</div>
  </>)}</>
 )}