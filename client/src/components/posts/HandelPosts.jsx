import React, { useContext } from 'react'
import { Store } from '../Storage'
import SinglePost from './SinglePost'
import '../../css/posts.css'
function HandelPosts() {
  const {posts}=useContext(Store)
  return (
    <div>
      {
        posts.map(post=><SinglePost key={post.id} post={post}/>)
      }
    </div>
  )
}

export default HandelPosts
