import React, { useContext, useState ,useRef} from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'

import Storage from './components/Storage'
import SignUp from './components/SignUp'
import Header from './components/Header'
import Storeis from './components/Storeis'
import SliderBtns from './components/SliderBtns'
import NewStory from './components/NewStory'

function App() {
  const [newStoryIsClicked,setNewStoryIsClicked]=useState(true)


  return <div  className="App">
    <Storage>
      <Header newStoryIsClicked={newStoryIsClicked}setNewStoryIsClicked={setNewStoryIsClicked}/>
    <Routes>
            <Route path="/signUp" element={<SignUp/>} />
    </Routes>
    <main>
      <section className='storiesT'>
        <SliderBtns   />
      {/* { newStoryIsClicked && <NewStory newStoryIsClicked={newStoryIsClicked}setNewStoryIsClicked={setNewStoryIsClicked}/>} */}
      <Storeis />
      </section>
    </main>
    </Storage>
  </div>
}

export default App
