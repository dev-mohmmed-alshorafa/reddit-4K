import  Axios  from 'axios'
import React, { useContext, useState } from 'react'
import { Store } from '../Storage'

function NewPostForm({setCheckForm}) {
  const [newPost,setNewPost]=useState('')
  const [imgPost,setImgPost]=useState('')
  const {posts,setPosts}=useContext(Store)
  const addPost=(e)=>{
    e.preventDefault()

    const newData= new FormData()
    newData.append('file',imgPost)
    newData.append('data',JSON.stringify({post:newPost}))
    Axios.post( "/api/add-new-post",newData).then(onePost=>setPosts([onePost.data,...posts]))
    setCheckForm(false)
  }
  return (
    <form onSubmit={addPost} className='formPost'>
      <textarea value={newPost} onChange={(e)=>setNewPost(e.target.value)} name="" id="" cols="30" rows="10"></textarea>
      <div>
      <input onChange={e=>setImgPost(e.target.files[0])} type="file" name="" id="" />
      <button>post</button>
      </div>
    </form>
  )
}

export default NewPostForm
