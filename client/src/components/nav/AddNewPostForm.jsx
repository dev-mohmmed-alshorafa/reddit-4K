import React, { useState } from 'react'
import NewPostForm from './NewPostForm'

function AddNewPostForm() {
  const[checkForm,setCheckForm]=useState(false)

  const showFormPost=()=>{
    setCheckForm(true)

  }
  return (
    <div>
 <li onClick={showFormPost}>add post</li>
{checkForm && <NewPostForm setCheckForm={setCheckForm} path={"/api/add-new-post"}/>}
    </div>
  )
}

export default AddNewPostForm
