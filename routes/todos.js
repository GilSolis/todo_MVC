const express = require('express')
const router = express.Router()
const todosController = require('../controllers/todos')
// const { route } = require('./home')

router.get('/', todosController.getTodos)

router.post('/createTodo', todosController.createTodo)

router.delete('/deleteTodo', todosController.deleteTodo)

router.put('/markComplete', todosController.markComplete)

module.exports = router
