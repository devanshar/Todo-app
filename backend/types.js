const zod = require('zod')

const createTodo =zod.object({
    title:zod.string().min(2),
    description:zod.string().min(2)
})

const updateTodo =zod.object({
    id:zod.string()
})
module.exports={
    createTodo:createTodo,
    updateTodo:updateTodo
}