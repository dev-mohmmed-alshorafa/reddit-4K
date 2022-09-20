const {signUp}=require('../controllers')
const router=require('express').Router()

router.post('/api/signup',signUp)

module.exports=router