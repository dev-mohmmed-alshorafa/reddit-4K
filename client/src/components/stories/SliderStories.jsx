import React, { useContext, useEffect } from 'react'
import { useState } from 'react'
import { Store } from '../Storage'


function SliderStories() {
  const { stories,storyIndex,setStoryIndex}=useContext(Store)
  const [showStory,setShowStory]=useState(storyIndex)

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
