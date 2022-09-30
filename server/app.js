const express = require("express");
const app=express();
const compression = require("compression");
require('dotenv').config()
const cookieParser = require('cookie-parser');
const router=require('./router')
const {auth}=require('./middleware/jwt')
const bodyParser = require('body-parser');
const cors=require('cors')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
app.use(cors())
const io = new Server(server,{
  cors:{
    origin:'http://localhost:3000',
    methods:["GET","POST"]
  }
})
const port =process.env.PORT||5000
app.set('port', port);
app.disable("x-powered-by");
// in latest body-parser use like below.
app.use(compression());
app.use(cookieParser());

io.on('connection', (socket) => {
  socket.on('like', (msg) => {
    io.emit('like', msg);
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
