import React, { useContext, useState } from 'react'
import Story from './Story'
import '../css/story.css'
import { Store } from './Storage'


const data=[
  {
    id:1,
    img:'https://i.pinimg.com/originals/75/af/80/75af805f72d4dcf7a9e984d7bff32c94.gif',
    username:'Kakashi',
    userImg:'https://c.tenor.com/EWW32mGrtykAAAAM/killua-gopackgo.gif'
  },
  {
    id:1,
    img:'https://i.pinimg.com/originals/75/af/80/75af805f72d4dcf7a9e984d7bff32c94.gif',
    username:'Kakashi',
    userImg:'https://c.tenor.com/EWW32mGrtykAAAAM/killua-gopackgo.gif'
  },
  {
    id:1,
    img:'https://i.pinimg.com/originals/75/af/80/75af805f72d4dcf7a9e984d7bff32c94.gif',
    username:'Kakashi',
    userImg:'https://c.tenor.com/EWW32mGrtykAAAAM/killua-gopackgo.gif'
  },
  {
    id:1,
    img:'https://i.pinimg.com/originals/75/af/80/75af805f72d4dcf7a9e984d7bff32c94.gif',
    username:'Kakashi',
    userImg:'https://c.tenor.com/EWW32mGrtykAAAAM/killua-gopackgo.gif'
  },
  {
    id:1,
    img:'https://i.pinimg.com/originals/75/af/80/75af805f72d4dcf7a9e984d7bff32c94.gif',
    username:'Kakashi',
    userImg:'https://c.tenor.com/EWW32mGrtykAAAAM/killua-gopackgo.gif'
  },
  {
    id:1,
    img:'https://i.pinimg.com/originals/75/af/80/75af805f72d4dcf7a9e984d7bff32c94.gif',
    username:'Kakashi',
    userImg:'https://c.tenor.com/EWW32mGrtykAAAAM/killua-gopackgo.gif'
  },  {
    id:1,
    img:'https://i.pinimg.com/originals/75/af/80/75af805f72d4dcf7a9e984d7bff32c94.gif',
    username:'Kakashi',
    userImg:'https://c.tenor.com/EWW32mGrtykAAAAM/killua-gopackgo.gif'
  },
  {
    id:1,
    img:'https://i.pinimg.com/originals/75/af/80/75af805f72d4dcf7a9e984d7bff32c94.gif',
    username:'Kakashi',
    userImg:'https://c.tenor.com/EWW32mGrtykAAAAM/killua-gopackgo.gif'
  },
  {
    id:1,
    img:'https://i.pinimg.com/originals/75/af/80/75af805f72d4dcf7a9e984d7bff32c94.gif',
    username:'Kakashi',
    userImg:'https://c.tenor.com/EWW32mGrtykAAAAM/killua-gopackgo.gif'
  }
]

function Storeis() {
  const {moveSlider,setMoveSlider}=useContext(Store)
  console.log(window.innerWidth*0.7,moveSlider);

  return (
    <section className='stories'>
      <div style={{marginLeft:moveSlider}} className="box"></div>
      {data.map(story=><Story key={story.id} story={story}/>)}
    </section>
  )
}

export default Storeis
