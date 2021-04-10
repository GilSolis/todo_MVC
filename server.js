const express = require('express')
const app = express()
const connectDB = require('./config/database')
const homeRoutes = require('./routes/home')
const todoRoutes = require('./routes/todos')
const PORT = 3000

connectDB()

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/', homeRoutes)
app.use('/todos', todoRoutes)

// app.get('/', (require, response)=>{
//     // res.render('index.html', )
//     response.sendFile(__dirname + '/index.html')
// })

app.listen(PORT, () =>{
    console.log("server running yo")
})