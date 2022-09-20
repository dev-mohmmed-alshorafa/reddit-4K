import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'

import Storage from './components/Storage'
import SignUp from './components/SignUp'
import Header from './components/Header'
import Storeis from './components/Storeis'
import SliderBtns from './components/SliderBtns'

function App() {
  return <div className="App">
    <Storage>
      <Header/>
    <Routes>
            <Route path="/signUp" element={<SignUp/>} />
    </Routes>
    <main>
      <section className='storiesT'>
        <SliderBtns/>
      <Storeis/>
      </section>

    </main>
    </Storage>
  </div>
}

export default App
