const {userIsExist,addNewUser}=require('./user')
const {saveNewStory,allStory,deleteFinishedStories}=require('./stories')
module.exports={
  userIsExist,addNewUser,saveNewStory,allStory,deleteFinishedStories
}