import img from "./Notepad.png";
import "./index.css";
import{submit} from "./submit"
const h1= document.createElement('h1')
h1.innerHTML="Notepad";
h1.classList.add("redcolor")


const logo= document.createElement('img');
logo.classList.add("logo");
logo.src=img;



const text =document.createElement("textarea");
text.classList.add("text")
text.rows="10";
text.cols="30";

const title = document.createElement("h1");
title.innerText = "note";
const button =document.createElement("div");
button.textContent= "submit";


document.getElementById("root").append(logo,h1)
document.getElementById("text").append(title,text,button)

button.onclick = ()=>{
    submit(text.value)
}






