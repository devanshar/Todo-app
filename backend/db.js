
const mongoose=require('mongoose');
const { string } = require('zod');

mongoose.connect("Add your link to mongodb database") 



const todoschema=mongoose.Schema({
    title:String,
    description:String,
    completed:{
        type:Boolean,
        default:false
    }

})
const todo = mongoose.model('todos',todoschema);

module.exports={
    todo:todo 
}