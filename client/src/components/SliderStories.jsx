import React, { useContext, useEffect } from 'react'
import { useState } from 'react'
import { Store } from './Storage'
import IconButton from '@mui/material/IconButton';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function SliderStories() {
  const { stories,storyIndex,setStoryIndex}=useContext(Store)
  const [showStory,setShowStory]=useState(storyIndex)
  const [count,setCount]=useState(showStory)
  let b=showStory
  const toPrev=()=>{
    if(showStory!==0){
      setShowStory(showStory-1)
    }
  }
 const toNext=()=>{
    if(showStory!==stories.length-1){
      setShowStory(showStory+1)

    }
  }
  useEffect(()=>{
    if(showStory<stories.length-1){
     var a= setTimeout(()=>{
          console.log(showStory);
          setShowStory(showStory+1) 
      }
  ,5000)
    }else{

      clearTimeout(a)
      setTimeout(()=>{
        console.log(showStory);
        setStoryIndex(null)
      }
,5000)
      console.log('clear');
    }
    
  },[showStory])
  return (
    <div className='sliderStories'>
      <div className='showImgStory'>
      <img  src={stories[showStory].storyimg||''} alt="" />

      </div>

    </div>
  )
}

export default SliderStories
