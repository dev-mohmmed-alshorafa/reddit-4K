const {signUp,cloudUpload,saveStory,localUpload
,getAllStories,reduceSize,signOut
}=require('../controllers')
const router=require('express').Router()

router.post('/api/signup',localUpload().single('file'),reduceSize,cloudUpload,signUp)
router.post('/api/upload',localUpload().single('file'),reduceSize,cloudUpload,saveStory)
router.get('/api/stories',getAllStories)
router.post('/signout',signOut)


module.exports=router