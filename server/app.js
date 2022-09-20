const express = require("express");
const app=express();
const compression = require("compression");
require('dotenv').config()
const cookieParser = require('cookie-parser');
const router=require('./router')
const {auth}=require('./middleware/jwt')
const port =process.env.PORT||5000
app.set('port', port);
app.disable("x-powered-by");
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(compression());
app.use(cookieParser());

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


module.exports=app