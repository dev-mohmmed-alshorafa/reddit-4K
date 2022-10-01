import React, { useEffect } from 'react'
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import IconButton from '@mui/material/IconButton';
import { useState } from 'react';
import  Axios  from 'axios'
import io from "socket.io-client";
import { useContext } from 'react';
import { Store } from '../Storage';
import ImageIcon from '@mui/icons-material/Image';
import Comment from './Comment';
const socket=io.connect('http://localhost:5000')


function SinglePost({post}) {
  const {isUser}=useContext(Store)
  const [isLike,setIsLike]=useState(post.wholike?post.wholike.some(e=>e.id===isUser.id):false)
  const [likesNum,setLikesNum]=useState(post.likes)
  const [checkComment,setCheckComment]=useState(false)

  const [checkAllComment,setCheckAllComment]=useState(false)
  const [comments,setComments]=useState(post.comments||[])
  const [addComment,setAddComment]=useState('')
  const [imgComment,setImgComment]=useState(null)
  const [commentsNum,setCommentsNum]=useState(post.commentsnum||0)

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

const showallComments=()=>{
  setCheckAllComment(true)

}
const handleClickOutside = () => {
  setCheckAllComment(false)


};
const ref = useOutsideClick(handleClickOutside);
 const handelComment=(e)=>{
  e.preventDefault()
  const newData= new FormData()
    newData.append('file',imgComment)
    newData.append('data',JSON.stringify({comment:addComment,id:post.id}))
    Axios.post( "/api/add-new-comment",newData)
    .then(comment=>setComments([{name:isUser.name,userImg:isUser.img,...comment.data},...comments]))
    setAddComment('')
    setCheckComment(false)
  } 

  return (
    <div ref={ref} className='post'>
      <div className='userPost'>
      <img src={post.img} alt="" />
      <h3>{post.name}</h3>
      </div>
      <p className='postContent'>{post.post}</p>
      {
        post.imgpost && <img className='postImg' src={post.imgpost} alt="" />
      }
      <div className='numCommentsAndLikesBox'>
      <p onClick={showallComments}>{
        commentsNum>0 &&<>{commentsNum} comment's </>
        
        
        }</p>
      <p>
        {
          likesNum>0 && <><FavoriteOutlinedIcon />{ likesNum}</>
        }
      
      </p>
      </div>
      <div className='addLikeAndComment'>
        <IconButton onClick={()=>{
          setCheckComment(true)
        }} className='addComment'>
          Comment
        </IconButton>
        <IconButton onClick={handelLike}>
        <FavoriteOutlinedIcon style={{color:isLike && 'red'}} ></FavoriteOutlinedIcon>
        </IconButton>
      </div>
      {
         checkComment && <form onSubmit={handelComment} className='addCommentForm' action="">
          <input value={addComment} onChange={e=>setAddComment(e.target.value)} type="text" />
          <div className='addimgComment'>
            <label htmlFor="imgComments"><ImageIcon/></label>
            <input onChange={e=>setImgComment(e.target.files[0])} type="file" name="" id="imgComments" />
          </div>
          <button>Comment</button>
         </form> 
      }
      {
        comments.slice(0,2).map(comment=><Comment key={comment.id} comment={comment}/>)
      }
        {checkAllComment &&
              <div className='allComments'>
{        comments.map(comment=><Comment key={comment.id} comment={comment}/>)
}        </div>

        }
    </div>
  )
}

export default SinglePost
