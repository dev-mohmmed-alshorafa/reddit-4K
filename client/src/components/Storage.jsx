import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'
import  Axios  from 'axios'
import { useEffect } from 'react'
export const Store=createContext(0)
function Storage(props) {
  const initSignUp={
    username:'',
    email:'',
    img:'',
    password:''
  }
const [signUp,setSignUp]=useState(initSignUp)
const [isUser,setIsUser]=useState('')
const [moveSlider,setMoveSlider]=useState(0)


useEffect(()=>{
  Axios('/api/user').then(data=>setIsUser(data.data)).then(data=>console.log(isUser))
},[])

const signUpFun=(e)=>{
  e.preventDefault()
  Axios.post('/api/signup',signUp).then(isExist=>{
    if(isExist.data.msg){
      console.log(isExist.data);
    }else{
      window.location.href='/home'
    }
  })
  setSignUp(initSignUp)
}



  return (
    <div>
      <Store.Provider value={{signUp,setSignUp,isUser,signUpFun,moveSlider,setMoveSlider}}>
      {props.children}
      </Store.Provider>
      
    </div>
  )
}

export default Storage
