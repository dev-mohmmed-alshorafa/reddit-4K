import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import SliderStories from './SliderStories'
import { Store } from '../Storage'

function Story({story,handleClick,index}) {
  const {stories,setStories,setStoryIndex}=useContext(Store)
  useEffect(()=>{
    const time=+(story.timefront)-Date.now()
    setTimeout(()=>{
      setStories(stories.filter(e=>e.id !==story.id)) 
    },time)
  },[])
 
  return (
    <div   className='story'>

      <img onClick={()=>{
        handleClick()
  setStoryIndex(index)
        }} src={story.storyimg} alt="" />
      <div>
        <img src={story.img} alt="" />
        <h4>{story.name}</h4>
      </div>
    </div>
  )
}

export default Story
