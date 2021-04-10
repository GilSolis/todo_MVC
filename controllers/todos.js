const Todo = require('../models/Todo')

module.exports = {
    getTodos: async (req,res)=>{
        try{
            const todoItems = await Todo.find()
            const itemsLeft = await Todo.countDocuments({completed: false})
            res.render('todos.ejs', {todos: todoItems, left: itemsLeft})
        }catch(err){
            console.log(err)
        }
    },
    createTodo: async (req, res)=>{
        try {
           await Todo.create({todo: req.body.todoItem, completed: false})
           console.log('todo added')
           res.redirect('/todos')
        } catch (error) {
            console.log(error)
            
        }
    }

}