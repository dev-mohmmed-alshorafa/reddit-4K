import React from 'react'

function Story({story}) {
  return (
    <div className='story'>
      <img src={story.img} alt="" />
      <div>
        <img src={story.userImg} alt="" />
        <h4>{story.username}</h4>
      </div>
    </div>
  )
}

export default Story
