const express = require('express')
const app = express()
const db = require('./db');


app.get('/', function (req, res) {
  res.send('Hello World, welcome to my server')
})









app.listen(3000, ()=>{
    console.log("Server is working");
})  



