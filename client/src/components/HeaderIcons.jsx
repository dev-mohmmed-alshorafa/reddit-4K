import React from 'react'
import SmsOutlinedIcon from '@mui/icons-material/SmsOutlined';
import NavigationOutlinedIcon from '@mui/icons-material/NavigationOutlined';
import GroupWorkOutlinedIcon from '@mui/icons-material/GroupWorkOutlined';
import IconButton from '@mui/material/IconButton';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import {NavLink} from 'react-router-dom'


function HeaderIcons() {
  return (
    <section className='iconsHeader'>
      
            <IconButton className='addPost'>
            <AddCircleOutlineOutlinedIcon/>
            <ul className='addDropDown'>
              <li>add post</li>
              <li>add story</li>
            </ul>
            </IconButton>
            <IconButton>
            <SmsOutlinedIcon/>
            </IconButton>
            <IconButton>
            <NavigationOutlinedIcon/>
            </IconButton>
            <IconButton>
            <GroupWorkOutlinedIcon/>
            </IconButton>
            <IconButton>
            <DarkModeOutlinedIcon/>
            </IconButton>
            <IconButton >
            <NotificationsNoneOutlinedIcon/>
          
            </IconButton>
           
    </section>
  )
}

export default HeaderIcons
