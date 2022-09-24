const signUp=require('./signUp')
const cloudUpload=require('./updateStory')
const saveStory=require('./saveStory')
const localUpload=require('./localUpdate')
const getAllStories=require('./getAllStories')
const reduceSize=require('./tintify')
const signOut=require('./signOut')
module.exports={
  signUp,cloudUpload,saveStory,localUpload,getAllStories,reduceSize,signOut
}