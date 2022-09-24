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
  return (
    <div className='sliderStories'>
          <IconButton onClick={toNext}><ArrowBackIosIcon/></IconButton>

      <img src={stories[showStory].storyimg} alt="" />
      <IconButton onClick={toPrev}><ArrowForwardIosIcon/></IconButton>

    </div>
  )
}

export default SliderStories
