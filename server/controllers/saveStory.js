const {saveNewStory}=require('../database/queries')
const saveStory=(req,res)=>{
  if(req.user&& req.fileUrl){
    saveNewStory(req.user.id,req.fileUrl).then(({rows})=>{
      res.json({...req.user,...rows[0]})})
  }
  
}
module.exports=saveStory