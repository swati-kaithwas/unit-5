import React from "react";

import './App.css';

 export default function App() {
  const [counter,setCounter] =React.useState(5);
// React.useState == [value,setvalue]  
const handleIncrement =(value) => {
setCounter(counter+value);
}
const handIncrement =(value) => {
  setCounter(counter*value);
  }
  return (
<div className="App">
  <h1>Counter</h1>
  <h2>{counter}</h2>
  <button onClick ={()=>handleIncrement(1)}>Add</button>
  <button onClick ={()=>handleIncrement(-1)}>Reduce</button>
  <button onDoubleClick={()=>handIncrement(2)}>Multi</button>
    </div>
  );
}
