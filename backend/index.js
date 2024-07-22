
const express = require('express')
const app = express();
const port=3000;
const {createTodo} =require('./types');
const cors =require('cors')
const { todo } = require('./db');
app.use(express.json())
app.use(cors())


app.get("/todos",async (req,res)=>{ 
 
const todos = await todo.find()

res.json({
    todos
})

})

app.post("/todos",async (req,res)=>{ 
 const createPayload =req.body;
 const parsePayload =createTodo.safeParse(createPayload) ;

 if(!parsePayload.success){ 
    res.status(411).json({
        msg:"You sent the wrong inputs",
    })
    return;
 }


 await todo.create({
    title:createPayload.title,
    description: createPayload.description,
    completed:false
 })
 res.json({
    msg:"Todo created"
 })

});

app.put("/completed",async (req,res)=>{ 
    const updatePayload =req.body;
    const parsePayload =createTodo.safeParse(updatePayload) ;

    
 if(!parsePayload.success){
    res.status(411).json({
        msg:"You sent the wrong inputs",
    })
    return;
 }
 
await todo.update({  
    _id:req.body.id},{
        completed:true
    })
    res.json({
        msg:"Todo marked as completed"
    })

})

app.listen(port,()=>{
    console.log("Server started");
})