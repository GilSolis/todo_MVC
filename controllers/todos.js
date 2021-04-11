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
    },
    deleteTodo: async (req, res)=>{
        try {
            await Todo.findOneAndDelete({_id:req.body.todoIdFromJSFile})
            res.json('deleted it')
        } catch (error) {
            console.log(error)
        }
    },
    markComplete: async( req, res)=>{
        try {
            await Todo.findOneAndUpdate({_id:req.body.todoIdFromJSFile},{
                completed: true
            })
            console.log('marked complete')
            res.json('Marked Complete')            
        } catch (error) {
            console.log(error)
        }
    },    
    markInComplete: async( req, res)=>{
        try {
            await Todo.findOneAndUpdate({_id:req.body.todoIdFromJSFile},{
                completed: false
            })
            console.log('marked inccomplete')
            res.json('Marked Incomplete')            
        } catch (error) {
            console.log(error)
        }
    }
    

}