const {addNewPost}=require('../database/queries')
const addPost=(req,res)=>{
  
  const post=JSON.parse(req.body.data)
  const imgUrl=req.fileUrl||null
  if(req.user){
    addNewPost(req.user.id,post.post,imgUrl).then(({rows})=>{
      res.json({...req.user,...rows[0]})
    })
  }}

module.exports=addPost