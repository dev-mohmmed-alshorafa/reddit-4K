import React, { useEffect } from 'react'
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import IconButton from '@mui/material/IconButton';
import { useState } from 'react';
import  Axios  from 'axios'


function SinglePost({post}) {
  const [isLike,setIsLike]=useState(false)


const handelLike=()=>{
  setIsLike(!isLike)
} 


  return (
    <div className='post'>
      <div className='userPost'>
      <img src={post.img} alt="" />
      <h3>{post.name}</h3>
      </div>
      <p className='postContent'>{post.post}</p>
      {
        post.imgpost && <img className='postImg' src={post.imgpost} alt="" />
      }
      <div className='numCommentsAndLikesBox'>
      <p>0 comment's</p>
      <p>
        {
          post.likes>0 && <><FavoriteOutlinedIcon />{ post.likes}</>
        }
      
      </p>
      </div>
      <div className='addLikeAndComment'>
        <IconButton className='addComment'>
          Comment
        </IconButton>
        <IconButton onClick={handelLike}>
        <FavoriteOutlinedIcon style={{color:isLike && 'red'}} ></FavoriteOutlinedIcon>
        </IconButton>
      </div>
    </div>
  )
}

export default SinglePost
