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
const [stories,setStories]=useState([])
const [storyIndex,setStoryIndex]=useState(null)

useEffect(()=>{
  Axios('/api/user').then(data=>setIsUser(data.data))
  Axios('/api/stories').then(data=>{
    setStories(data.data)})
  
},[])

const signUpFun=(e)=>{
  e.preventDefault()
  const newData= new FormData()
  newData.append('file',signUp)
  Axios.post('/api/signup',newData).then(isExist=>{
    if(isExist.data.msg){
      console.log(isExist.data);
    }else{
      // window.location.href='/home'
    }
  })
  setSignUp(initSignUp)
}



  return (
    <div>
      <Store.Provider  value={{signUp,setSignUp,isUser,signUpFun,
        moveSlider,setMoveSlider
        ,stories,setStories,storyIndex,setStoryIndex
        }}>
      {props.children}
      </Store.Provider>
      
    </div>
  )
}

export default Storage
