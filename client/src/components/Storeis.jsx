import React, { useContext, useState } from 'react'
import Story from './Story'
import '../css/story.css'
import { Store } from './Storage'
import SliderStories from './SliderStories'


function Storeis() {
  const {moveSlider,stories ,storyIndex}=useContext(Store)
  const [isShowStory,setIsShowStory]=useState(false)
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
    setIsShowStory(true)
  }
  const handleClickOutside = () => {
    setIsShowStory(false)
  };
  const ref = useOutsideClick(handleClickOutside);




  return (
    <section ref={ref} className='stories'>
      <div  style={{marginLeft:moveSlider}} className="box"></div>
      {stories.map((story,i)=>{
   return   <Story  key={story.id} index={i} isShowStory={isShowStory} handleClick={handleClick}  story={story}/>})}
{storyIndex !==null&&isShowStory &&<SliderStories />}
    </section>
  )
}

export default Storeis
