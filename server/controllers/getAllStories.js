const {allStory,deleteFinishedStories}=require('../database/queries')
const getAllStories=(req,res)=>{
  deleteFinishedStories()
  allStory().then(({rows})=>res.json(rows))
}
module.exports=getAllStories