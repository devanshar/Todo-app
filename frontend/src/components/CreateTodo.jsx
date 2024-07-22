import { useState } from "react";

export function CreateTodo(){

const [title,setTitle]=useState(""); 
const [description,setDescription]=useState("");


   return <div>

<input  style={{
    padding:10,
    border:'1px solid',
    margin:10
}}  type="text" placeholder="title" onChange={function(e){
    const value=e.target.value;
    setTitle(e.target.value)
}}/>  <br/>

<input style={{
    padding:10,
    border:'1px solid',
    margin:10
}}  type="text" placeholder="description" onChange={function(e){
    const value=e.target.value;
    setDescription(e.target.value)
}} />  <br/>

<button style={{
    padding:5,
    marginLeft:60,
}}  onClick={()=>{

    // for better we should use axios library to fetch,syntax is much easier

    fetch("http://localhost:3000/todos",
      {  method:"POST" , body : JSON.stringify({   

        title:title,
        description:description

      }),headers:{ "Content-Type": "application/json"}  }
    ).then(async function(res) {
          const json = await res.json(); 
         alert("Todo added")
        });
}}        >Add a todo</button>

</div>  
}