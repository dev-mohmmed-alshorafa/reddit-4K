const {signUp,cloudUpload,saveStory,localUpload
,getAllStories,reduceSize,signOut,addNewPost,getAllPosts,saveLike,
addNewComment
}=require('../controllers')
const router=require('express').Router()

router.post('/api/signup',localUpload().single('file'),reduceSize,cloudUpload,signUp)
router.post('/api/upload',localUpload().single('file'),reduceSize,cloudUpload,saveStory)
router.get('/api/stories',getAllStories)
router.post('/api/add-new-post',localUpload().single('file'),reduceSize,cloudUpload,addNewPost)
router.get('/api/get-all-posts',getAllPosts)
router.post('/api/likes',saveLike)
router.post('/signout',signOut)
router.post('/api/add-new-comment',localUpload().single('file'),reduceSize,cloudUpload,addNewComment)


module.exports=router