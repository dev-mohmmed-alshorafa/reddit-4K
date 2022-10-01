const {userIsExist,addNewUser}=require('./user')
const {saveNewStory,allStory,deleteFinishedStories}=require('./stories')
const {addNewPost,allPosts,isLike,putLike,deleteLike}=require('./posts')
const {addComment}=require('./comments')
module.exports={
  userIsExist,addNewUser,saveNewStory,allStory,
  deleteFinishedStories,addNewPost,allPosts,isLike,putLike,deleteLike,
  addComment
}