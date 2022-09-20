import React, { useContext } from 'react'
import IconButton from '@mui/material/IconButton';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Store } from './Storage';
function SliderBtns() {
  const {moveSlider,setMoveSlider}=useContext(Store)
  return (
    <section className='sliderBtns'>
    <IconButton className='incressBtn' onClick={()=>{moveSlider<=0  &&moveSlider>= -((200*9)+320-(window.innerWidth*0.7)) && setMoveSlider(moveSlider-50)}} ><ArrowBackIosIcon/></IconButton>
   <IconButton className='decresBtn' onClick={()=>{moveSlider<0 && setMoveSlider(moveSlider+50)}}> <ArrowForwardIosIcon/></IconButton>
  </section>
  )
}

export default SliderBtns
