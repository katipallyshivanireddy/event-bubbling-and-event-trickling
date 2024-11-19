const g=document.getElementById("grand")
g.addEventListener("click",()=> {
    console.log("grand parent clicked");
})
const p=document.getElementById("parent")
p.addEventListener("click",()=> {
    console.log("parent clicked");
})
const c=document.getElementById("child")
c.addEventListener("click",()=> {
    console.log("child clicked");
})




const grand=document.getElementById("grand")
grand.addEventListener("click",(e)=> {
    e.stopPropagation();
    console.log("grand parent clicked");
})
const parent=document.getElementById("parent")
parent.addEventListener("click",(e)=> {
    e.stopPropagation();
    console.log("parent clicked");
})
const child=document.getElementById("child")
child.addEventListener("click",(e)=> {
    e.stopPropagation();
    console.log("child clicked");
})




const grandparent=document.getElementById("grand")
grandparent.addEventListener("mouseover",()=> {
    console.log("grand parent clicked");
})
const parents=document.getElementById("parent")
parents.addEventListener("keydown]",()=> {
    console.log("parent clicked");
})
const childs=document.getElementById("child")
childs.addEventListener("click",()=> {
    console.log("child clicked");
})


const grandparents=document.getElementById("grand")
grandparents.addEventListener("click",(e)=> {
e.stopPropagation();
setTimeout(()=>{
    console.log("grand parent clicked");
},2000)
})
const Parents=document.getElementById("parent")
Parents.addEventListener("click",(e)=> {
    e.stopPropagation();
setTimeout(()=>{
    console.log("parent clicked");
},2000)
})
const Childs=document.getElementById("child")
Childs.addEventListener("click",(e)=> {
    e.stopPropagation();
setTimeout(()=>{
    console.log("child clicked");
},2000)
})



const gp=document.getElementById("grand")
gp.addEventListener("click",()=> {
    console.log("grand parent clicked");
},true)
const pp=document.getElementById("parent")
pp.addEventListener("click",()=> {
    console.log("parent clicked");
},true)
const cc=document.getElementById("child")
cc.addEventListener("click",()=> {
    console.log("child clicked");
},true)





const grandparentss=document.getElementById("grand")
grandparentss.addEventListener("click",(e)=> {
e.stopPropagation();
setTimeout(()=>{
    console.log("grand parent clicked");
},2000)
},true)
const Parentss=document.getElementById("parent")
Parentss.addEventListener("click",(e)=> {
    e.stopPropagation();
setTimeout(()=>{
    console.log("parent clicked");
},2000)
},true)
const Childss=document.getElementById("child")
Childss.addEventListener("click",(e)=> {
    e.stopPropagation();
setTimeout(()=>{
    console.log("child clicked");
},2000)
},true)






const GRANDPARENTS=document.getElementById("grand")
GRANDPARENTS.addEventListener("click",(e)=> {

setTimeout(()=>{
    console.log("grand parent clicked");
    GRANDPARENTS.style.backgroundColor="lightcoral"
},2000)
},true)
const PARENTS=document.getElementById("parent")
PARENTS.addEventListener("click",(e)=> {
   
setTimeout(()=>{
    console.log("parent clicked");
    PARENTS.style.backgroundColor="lightblue"
},2000)
},false)
const CHILDS=document.getElementById("child")
CHILDS.addEventListener("click",(e)=> {
   
setTimeout(()=>{
    console.log("child clicked");
    CHILDS.style.backgroundColor="lightgreen"
},2000)
},true)