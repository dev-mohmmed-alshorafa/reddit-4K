const {userIsExist,addNewUser}=require('../database/queries')
const {jwtFun}=require('../middleware/jwt')
const bcrypt = require("bcryptjs");

const signUp=(req,res)=>{
  const { username,email,img,password}=req.body
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
module.exports=signUp