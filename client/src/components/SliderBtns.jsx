import React, { useContext, useState } from 'react'
import IconButton from '@mui/material/IconButton';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Store } from './Storage';
function SliderBtns() {
  const {moveSlider,setMoveSlider,stories}=useContext(Store)
  return (
    <section className='sliderBtns'>
    <IconButton className=' incressBtn' style={{display:(moveSlider<=0  &&moveSlider>= -((200*stories.length)+(stories.length*40)+40-(window.innerWidth*0.7)))?'block':'none'}} onClick={()=>{moveSlider<=0  &&moveSlider>= -((200*stories.length)+(stories.length*40)+120-(window.innerWidth*0.7)) && setMoveSlider(moveSlider-50)}} ><ArrowBackIosIcon/></IconButton>
  {moveSlider!==0 && <IconButton className='decresBtn'   onClick={()=>{moveSlider<0 && setMoveSlider(moveSlider+50)}}> <ArrowForwardIosIcon/></IconButton>}
  </section>
  )
}

export default SliderBtns
