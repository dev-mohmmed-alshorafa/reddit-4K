import React from 'react'
import {NavLink} from 'react-router-dom'

function SignsBox() {

  return (
    <section className='signsBtn'>
    <NavLink to='/signUp'>
Sign Up
</NavLink>
<NavLink to='/signUp'>
Sign In
</NavLink>
    </section>
  )
}

export default SignsBox
