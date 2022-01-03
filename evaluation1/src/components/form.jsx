
import { useState,useRef} from "react";
import { nanoid } from 'nanoid';
 export const Form =()=> {
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
     console.log(ref.current.file[0].name)
 }

 const handlesub=(e) => {
     e.preventDefault();
     console.log(form);
     console.log(ref.current.file[0].name)
     const payload={
        title:form.title,
        ingredients:form.ingredients,
         timetocook:form.timetocook,
          image:form.image,
           instructions:form.instructions,
           id:nanoid(7)
     }
     setStat([...stat,payload]);
     fetch(' http://localhost:3002/posts',{
         method:'POST',
         body: JSON.stringify(payload),
         headers: {
"content-type": 'application/json'
         }
     })
     .then(()=>console.log("done"))
 }
return (
    <form onSubmit={ handlesub}>
<input onchange ={handleChange}  name="title" type="text"  placeholder="title"/>
<input onchange ={handleChange}  name="ingredients"type="text"placeholder="ingredients" />
<input onchange ={handleChange}  name="timetocook"type="text" placeholder="  timetocook" />
<input onchange ={handleChange}  name=" instructions"type="text" placeholder="instructions" />
<input ref={ref} onChange={handleChangefirst} type="file" />
<input type="submit" val="submit" />
    </form>
)
}