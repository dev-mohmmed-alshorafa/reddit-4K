const {userIsExist,addNewUser}=require('./user')
const {saveNewStory,allStory,deleteFinishedStories}=require('./stories')
const {addNewPost,allPosts}=require('./posts')
module.exports={
  userIsExist,addNewUser,saveNewStory,allStory,
  deleteFinishedStories,addNewPost,allPosts
}