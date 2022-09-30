import React, { useEffect } from 'react'
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import IconButton from '@mui/material/IconButton';
import { useState } from 'react';
import  Axios  from 'axios'
import io from "socket.io-client";
import { useContext } from 'react';
import { Store } from '../Storage';
const socket=io.connect('http://localhost:5000')


function SinglePost({post}) {
  const {isUser}=useContext(Store)
  const [isLike,setIsLike]=useState(post.wholike?post.wholike.some(e=>e.id===isUser.id):false)
  const [likesNum,setLikesNum]=useState(post.likes)


const handelLike=()=>{
  Axios.post('/api/likes',{
    post_id:post.id
  })
  socket.emit('like',{like:!isLike,likesNum:isLike?+(likesNum)-1:+(likesNum)+1,id:post.id});

} 
socket.on('like', function(msg) {
  if(msg.id===post.id){
    setIsLike(msg.like)
    setLikesNum(msg.likesNum)
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
          likesNum>0 && <><FavoriteOutlinedIcon />{ likesNum}</>
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
