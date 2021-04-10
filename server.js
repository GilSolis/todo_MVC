const express = require('express')
const app = express()
const connectDB = require('./config/database')
const PORT = 3000

connectDB()

app.get('/', (require, response)=>{
    // res.render('index.html', )
    response.sendFile(__dirname + '/index.html')
})

app.listen(PORT, () =>{
    console.log("server running yo")
})