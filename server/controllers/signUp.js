const {userIsExist,addNewUser}=require('../database/queries')
const {jwtFun}=require('../middleware/jwt')
const bcrypt = require("bcryptjs");
const { json } = require('body-parser');

const signUp=(req,res)=>{
  const { username,email,img,password}=req.body
  if(req.fileUrl){
    const img=req.fileUrl;
    const {username,email,password}=JSON.parse(req.body.data)
    
  userIsExist('email').then(({rows})=>{
    if(rows[0]){
      res.json({msg:"fuck ypu"})
    }else{
      bcrypt.hash(password,12)
      .then(hashPassword=>addNewUser(username,email,hashPassword,img))
      .then(token=>{
        jwtFun(token.rows[0],res)
      })
      // res.json({ss:'hi'})

    }
  })
  }
  

}
module.exports=signUp