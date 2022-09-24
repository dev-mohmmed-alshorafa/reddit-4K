import React from 'react'
import { useContext } from 'react'
import '../css/Header.css'
import HeaderIcons from './HeaderIcons'
import SignsBox from './SignsBox'
import { Store } from './Storage'
import User from './User'


function Header({newStoryIsClicked,setNewStoryIsClicked }) {
  const {isUser}=useContext(Store)
  return (
    <header>
      <img className='logo' src="https://external-preview.redd.it/iDdntscPf-nfWKqzHRGFmhVxZm4hZgaKe5oyFws-yzA.png?auto=webp&s=38648ef0dc2c3fce76d5e1d8639234d8da0152b2" alt="logo" />
     <div></div>
      <input className='inputSearch' type="search" placeholder='Search' />
      <HeaderIcons isUser={isUser}newStoryIsClicked={newStoryIsClicked}setNewStoryIsClicked={setNewStoryIsClicked}/>
    {isUser.msg? <SignsBox/>: <User/>}
    </header>
  )
}

export default Header
