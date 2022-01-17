import { useState,useEffect } from "react";
import { Button } from 'antd';
export const Home=()=>{
    const [ text, setText]=useState("");
    const [ name, setName]=useState("");
    const [ salaryrange, setSalaryrange]=useState("");
    const [ description, setDescription]=useState("");
    const [ locatation, setLocatation]=useState("");
    const [ jobtype, setJobtype]=useState("");
    const [ todo, setTodo]=useState([]);
    const [ page, setPage]=useState(1);
    useEffect(()=>{
        getHome()},
        [page]
    )
    const getHome=()=>{
        fetch(`http://localhost:3001/home?_page=${page}&_limit=3`)
        .then(d=>d.json()).then(res=>{
            // console.log(res);
            setName("");
            setText("");
            setSalaryrange("");
            setDescription("");
            setLocatation("");
            setJobtype("");
            setTodo(res);
            setText("");
        })
    }
    return (
    <div>
        {/* ompany name, job title, salary range, job description, location, job type */}
        <input value={name} type="text" placeholder="Company_name" onChange={(e)=>{setName(e.target.value)}}/>
        <input value={text} type="text" placeholder="job_title" onChange={(e)=>{setText(e.target.value)}}/>
        <input value={salaryrange} type="text" placeholder="salary_range" onChange={(e)=>{setSalaryrange(e.target.value)}}/>
        <input value={description} type="text" placeholder="job_description" onChange={(e)=>{setDescription(e.target.value)}}/>
        <input value={locatation} type="text" placeholder="location" onChange={(e)=>{setLocatation(e.target.value)}}/>
        <input value={jobtype} type="text" placeholder="job_type" onChange={(e)=>{setJobtype(e.target.value)}}/>

        <Button onClick={()=>{
            const payload={
                "setName":name,
                "setSalaryrange":salaryrange,
                "setDescription":description,
                "job_description":text,
                "setLocatation":locatation,
                "setJobtype":jobtype,
                "status":false
            }
            console.log(payload);
            fetch("http://localhost:3001/home",{
                method:"POST",
                body:JSON.stringify(payload),
                headers:{
                    "content-type":"application/json"
                }
            }).then(()=>{getHome()})
        }}  type="primary" danger ghostt>add  </Button> 
       {todo.map((e)=>(
          <>
          <div>{e.Company_name}</div>
          <div>{e.job_title}</div>
          <div>{e.salary_range}</div>
          <div>{e.job_description}</div>
          <div>{e.location}</div>
          <div>{e.job_type}</div>
          {/* <div>{e.title}</div>
          <div>{e.title}</div> */}
          </>
      ))}
       <Button disabled={page==1} onClick={()=>{setPage(page-1)}}type="primary" ghost>
       Previous
    </Button>
      
       <Button onClick={()=>{setPage(page+1)}} type="primary" danger ghost>Next</Button>
   
    </div>
    );
   
}