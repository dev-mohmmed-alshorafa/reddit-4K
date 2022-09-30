import React from 'react'

function SignIn({showLogin,showLoginFun}) {
  return (
    <div style={{  transform: `translateY(${showLogin})` }} className="login">
    <form>
      <label onClick={()=>{
        showLoginFun('-87vh')
      }} htmlFor="chk" className="log" >Login</label>
<div className="user-box">
  <input className="email-sign-in" type="text" title="Enter Username" required/>
  <label>Email</label>
</div>				

<div className="user-box">
  <input className="password-sign-in" type="password" title="Enter password" required/>
  <label>Password</label>
</div>
      <button className="signBtn">Login</button>
    </form>
  </div>
  )
}

export default SignIn
