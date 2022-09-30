const express = require("express");
const app=express();
const compression = require("compression");
require('dotenv').config()
const cookieParser = require('cookie-parser');
const router=require('./router')
const {auth}=require('./middleware/jwt')
const bodyParser = require('body-parser');
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const port =process.env.PORT||5000
app.set('port', port);
app.disable("x-powered-by");
// in latest body-parser use like below.
app.use(compression());
app.use(cookieParser());
const io = new Server(server)

io.on('connection', (socket) => {
  socket.on('chat message', (msg) => {
    console.log(msg);
    io.emit('chat message', msg); 
  });
});
app.use(auth)
app.use('/api/user',(req,res,next)=>{
  if(req.user){
    res.json(req.user)
  }else{
    res.json({msg:"user is not"})
  }
  next()
})


app.use(router)



module.exports=server
