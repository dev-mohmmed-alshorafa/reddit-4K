import SmsOutlinedIcon from '@mui/icons-material/SmsOutlined';
import NavigationOutlinedIcon from '@mui/icons-material/NavigationOutlined';
import GroupWorkOutlinedIcon from '@mui/icons-material/GroupWorkOutlined';
import IconButton from '@mui/material/IconButton';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import AddStoryBtn from './AddStoryBtn';

function HeaderIcons({isUser}) {
  
  


  return (
    <section className='iconsHeader'>
      <AddStoryBtn/>

            {isUser.name && 

            <IconButton>
            <SmsOutlinedIcon/>
            </IconButton>}
            <IconButton>
            <NavigationOutlinedIcon/>
            </IconButton>
            <IconButton>
            <GroupWorkOutlinedIcon/>
            </IconButton>
            <IconButton>
            <DarkModeOutlinedIcon/>
            </IconButton>


            {isUser.name && 
           <IconButton >
            <NotificationsNoneOutlinedIcon/>
            </IconButton>}
            
           
    </section>
  )
}

export default HeaderIcons
