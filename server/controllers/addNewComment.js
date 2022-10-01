const {addComment}=require('../database/queries')
const addNewComment=(req,res)=>{
  const post=JSON.parse(req.body.data)
  const imgUrl=req.fileUrl||null
if(req.user){
  addComment(post.comment,post.id,req.user.id,imgUrl).then(({rows})=>res.json(rows[0]))
}

}

module.exports=addNewComment