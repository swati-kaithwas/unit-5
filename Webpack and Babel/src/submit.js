function submit(value){
const maintitle = document.createElement("h3");
maintitle.textContent= "submit note"
const p=document.createElement("p");
p.textContent=value;

document.getElementById("submit").append(maintitle,p)
}
export {submit}