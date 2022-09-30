import React, { useContext } from 'react'
import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import NewStory from '../stories/NewStory';
import { Store } from '../Storage';
import NewPostForm from './NewPostForm';


function AddStoryBtn() {
  const[checkStory,setCheckStory]=useState(false)
  const[checkForm,setCheckForm]=useState(false)
  const {isUser}=useContext(Store)

  const useOutsideClick = (callback) => {
    const ref = React.useRef();
    React.useEffect(() => {
      const handleClick = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
          callback();
        }      };
  
      document.addEventListener('click', handleClick);
  
      return () => {
        document.removeEventListener('click', handleClick);
      };
    }, []);

  
    return ref;
  };
  const handleClick=()=>{
    setCheckStory(true)
    setCheckForm(false)

  }
  const showFprmPost=()=>{
    setCheckForm(true)
    setCheckStory(false)

  }
  const handleClickOutside = () => {
    setCheckStory(false)
    setCheckForm(false)

  };
  const ref = useOutsideClick(handleClickOutside);
  return (
    <div ref={ref}>
        {isUser.name && 
            <IconButton className='addPost'>
              
            <AddCircleOutlineOutlinedIcon/>
            <ul className='addDropDown'>
              <li onClick={showFprmPost}>add post</li>
              <li  type="button" onClick={handleClick} >add story</li>
            </ul>
            </IconButton>}
            {checkStory && <NewStory setCheckStory={setCheckStory}/>}
            {checkForm && <NewPostForm setCheckForm={setCheckForm}/> }
      
    </div>
  )
}

export default AddStoryBtn
