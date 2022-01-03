
import { useState,useRef} from "react";
import { nanoid } from 'nanoid';
 export const Form =( )=> {
 const[form,setForm] =useState({
    title:"",
     ingredients:"",
      timetocook:"",
       image:"",
        instructions:""
 })
 const [stat,setStat] = useState([]);
 const ref=useRef("");
 const handleChange=(e)=>{
const {name,val}=e.target;
setForm({...form,[name]:val});

 }

 const handleChangefirst=(e)=>{
    setForm({...form,image:ref.current.file[0].name});
     console.log(ref.current.file)
 }

 const handlesub=(e) => {
     e.preventDefault();
     console.log(form);
    //  console.log(ref.current.file)
     const payload={
        title:form.title,
        ingredients:form.ingredients,
         timetocook:form.timetocook,
          image:form.image,
           instructions:form.instructions,
           id:nanoid(7)
     }
     setStat([...stat,payload]);
     fetch(' http://localhost:3001/recipes',{
         method:'POST',
         body: JSON.stringify(payload),
         headers: {
"content-type": 'application/json'
         }
     })
     .then(()=>console.log("eooeooe"))
 }
return (
    <form onSubmit={ handlesub}>
<input onChange ={handleChange}  name="title" type="text"  placeholder="title"/>
<input onChange ={handleChange}  name="ingredients"type="text"placeholder="ingredients" />
<input onChange ={handleChange}  name="timetocook"type="text" placeholder="  timetocook" />
<input onChange ={handleChange}  name=" instructions"type="text" placeholder="instructions" />
<input ref={ref} onChange={handleChangefirst} type="file" />
<input type="submit" val="submit" />
    </form>
)
}