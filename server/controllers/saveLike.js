const {isLike,putLike,deleteLike}=require('../database/queries')
const saveLike=(req,res)=>{
  if(req.user){
    isLike(req.user.id,req.body.post_id).then(({rows})=>{
      if(rows[0]){
        deleteLike(req.user.id,req.body.post_id)
      }else{
        putLike(req.user.id,req.body.post_id)

      }
    })

  }
}
module.exports=saveLike