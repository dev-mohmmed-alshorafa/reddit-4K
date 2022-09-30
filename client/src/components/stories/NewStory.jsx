import axios from 'axios'
import React, { useContext,useRef } from 'react'
import {useState} from 'react'
import { Store } from '../Storage'
function NewStory({setCheckStory}) {
  const {stories,setStories}=useContext(Store)
  const [updateStory,setUpdateStory]=useState('')
  const link= ()=>{
    const newData= new FormData()

    newData.append('file',updateStory)
    console.log(updateStory);
     axios.post('/api/upload',newData).then(story=>{
      setStories([...stories,story.data])})
      setCheckStory(false)
  } 
 

  return (
    <div  onClick={()=>{
    }}  className='newStory'>
      <label htmlFor="a">+</label>
      <input  type="file" onChange={e=>{
        setUpdateStory(e.target.files[0])}} name="" id="a" />
      <button onClick={link}>Add story</button>
    </div>
  )
}

export default NewStory
