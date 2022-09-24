const signOut=(req,res)=>{
  res.clearCookie('token')
  res.json({})}

  module.exports=signOut