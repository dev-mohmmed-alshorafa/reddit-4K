import React, { useContext } from 'react'
import { useState } from 'react';
import { Store } from './Storage';
import IconButton from '@mui/material/IconButton';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import NewStory from './NewStory';


function AddStoryBtn() {
  const[checkStory,setCheckStory]=useState(false)
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
  }
  const handleClickOutside = () => {
    setCheckStory(false)
  };
  const ref = useOutsideClick(handleClickOutside);
  return (
    <div ref={ref}>
        {isUser.name && 
            <IconButton className='addPost'>
              
            <AddCircleOutlineOutlinedIcon/>
            <ul className='addDropDown'>
              <li>add post</li>
              <li  type="button" onClick={handleClick} >add story</li>
            </ul>
            </IconButton>}
            {checkStory && <NewStory setCheckStory={setCheckStory}/>}
      
    </div>
  )
}

export default AddStoryBtn
