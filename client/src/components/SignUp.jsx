import React from 'react'
import { useContext } from 'react'
import {Store} from './Storage'
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';


function SignUp({showLoginFun}) {
  const {signUp,setSignUp,signUpFun,updateImgUser,setUpdateImgUser}=useContext(Store)



  return (
    <div className="signup">
    <form onSubmit={signUpFun}>
      <label onClick={()=>{
        showLoginFun('-142px')
      }} htmlFor="chk" className="sig">Sign up</label>
    
<div className="user-box">
  <input className="name" type="text" value={signUp.username} onChange={e=>setSignUp({...signUp,username:e.target.value})}  title="Enter Username" required/>
  <label>Username</label>
</div>
<div className="user-box">
  <input className="email" value={signUp.email} onChange={e=>setSignUp({...signUp,email:e.target.value})} type="text" title="Enter email" required/>
  <label>Email</label>
</div>
<div className="user-box">
  <input className="password" value={signUp.password} onChange={e=>setSignUp({...signUp,password:e.target.value})}  type="password" title="Enter password" required/>
  <label>Password</label>
</div>

<div className="user-box">
  <input className="confirm" type="password" title="confirm password" required/>
  <label>confirm password</label>
</div>

<div className="user-box">
  <input className="userImg" type="file" id='userImg'   onChange={e=>setUpdateImgUser(e.target.files[0])}  required/>
  <label htmlFor='userImg' className='labelUserImg'><AddCircleOutlineOutlinedIcon/>Image</label>
</div>
      
      <button className="signBtn" >Sign up</button>
    </form>
  </div>
      
  )
}

export default SignUp
