const express = require('express');
const http = require('http');
const app = express();
const server = http.createServer(app);


app.get('/',(req, res)=>{
    res.sendFile(__dirname+'/public/home.html');
})
app.get('/login',(req, res)=>{
    res.sendFile(__dirname+'/public/login.html');
})

server.listen(3000);