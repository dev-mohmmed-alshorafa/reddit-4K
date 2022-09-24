import axios from 'axios'
import React from 'react'

function SignOut() {
const handelSignUp=()=>{
  axios.post('/signout',{}).then(res=>{
    window.location.href='/'
  })
}
  return (
    <div className='signOut'>
      <p onClick={handelSignUp}>Sign out</p>
    </div>
  )
}

export default SignOut
