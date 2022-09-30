import React, { useContext, useState ,useRef, useEffect} from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'

import Storage from './components/Storage'
import Header from './components/nav/Header'
import Storeis from './components/stories/Storeis'
import SliderBtns from './components/stories/SliderBtns'
import NewStory from './components/stories/NewStory'
import HandelPosts from './components/posts/HandelPosts'

function App() {

  const [newStoryIsClicked,setNewStoryIsClicked]=useState(false)


  return <div  className="App">
    <Storage>
      <Header newStoryIsClicked={newStoryIsClicked}setNewStoryIsClicked={setNewStoryIsClicked}/>

    <main>
      <section className='storiesT'>
        <SliderBtns   />
      { newStoryIsClicked && <NewStory newStoryIsClicked={newStoryIsClicked}setNewStoryIsClicked={setNewStoryIsClicked}/>}
      <Storeis />
      </section>
      <section >
      <HandelPosts/>

      </section>
    </main>
    </Storage>
  </div>
}

export default App
