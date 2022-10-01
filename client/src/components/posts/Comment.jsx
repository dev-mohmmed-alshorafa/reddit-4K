import React from 'react'

function Comment({comment}) {
  return (
    <div className='commentBox'>
      <div className='ownerCommentBox'>
        <img className='ownerComment' src={comment.userImg} alt="" />
        <p>{comment.name}</p>
      </div>
      <div className='contentComment'>
        <p>{comment.comment}</p>
      {
        comment.img && <img src={comment.img} alt="" />
      } 
      </div>
    </div>
  )
}

export default Comment
