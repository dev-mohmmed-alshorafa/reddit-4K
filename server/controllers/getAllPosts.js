const {allPosts}=require('../database/queries')

const getAllPosts=(req,res)=>{
  allPosts().then(({rows})=>res.json(rows))
  
}
module.exports=getAllPosts