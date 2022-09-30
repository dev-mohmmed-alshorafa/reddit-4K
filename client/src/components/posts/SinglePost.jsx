import React, { useEffect } from 'react'
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import IconButton from '@mui/material/IconButton';
import { useState } from 'react';
import  Axios  from 'axios'
import io from "socket.io-client";
const socket=io.connect('http://localhost:5000')


function SinglePost({post}) {
  const [isLike,setIsLike]=useState(false)



const handelLike=()=>{
  setIsLike(!isLike)
  socket.emit('like',{like:!isLike,id:post.id});

} 
socket.on('like', function(msg) {
  if(msg.id===post.id){
    setIsLike(msg.like)
  }
 });


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
