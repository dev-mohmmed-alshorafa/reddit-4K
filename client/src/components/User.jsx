import React from 'react'
import { useContext } from 'react'
import { Store } from './Storage'
import AcUnitOutlinedIcon from '@mui/icons-material/AcUnitOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';

function User() {
  const {isUser}=useContext(Store)
  return (
    <section className='userBox'>
      <figure>
      <img src={isUser.img} alt="" />
      <div className='userInfo'>
      <h5>{isUser.name}</h5>
           <div className='karmaIcon'>
        <AcUnitOutlinedIcon/>
        <p>1 Karma</p>
          </div>
      </div>
      </figure>
     <KeyboardArrowDownOutlinedIcon/>
    </section>
  )
}

export default User

// handel=e=>{
//   key=e.ta.v 
//   set({....vv,[key]:fhf})
// }