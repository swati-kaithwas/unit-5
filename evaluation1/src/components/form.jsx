
import { useState,useRes} from "react"
import { nanoid } from 'nanoid'
const form =({data})=> {
 const[form,setForm] =useState({
    title:"",
     ingredients:"",
      timetocook:"",
       image:"",
        instructions:""
 })
 const [stat,setStat] = useState([]);
 const res=useRes("");
 const handleChange=(e)=>{
const {name,val}=e.target;
setForm({...form,[name]:val});

 }

 const handleChangefirst=(e)=>{
     set({...form,image:res.current.file[0].name})
 }

 const handlesub=(e)=> {
     .preventDefault();
     const payload={
        title:form.title,
        ingredients:form.ingredients,
         timetocook:form.timetocook,
          image:from.image,
           instructions:form.instructions,
     }
 }
}