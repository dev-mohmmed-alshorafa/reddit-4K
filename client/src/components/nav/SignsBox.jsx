import React, { useState } from 'react'
import {NavLink} from 'react-router-dom'
import SignIn from './SignIn'
import SignUp from './SignUp'
import '../../css/Forms.css'
function SignsBox() {
  const [showLogin,setShowLogin]=useState('-37px')
  const [isShow,setIsShow]=useState(false)
  const useOutsideClick = (callback) => {
    const ref = React.useRef();
    React.useEffect(() => {
      const showLoginFun = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
          callback();
        }      };
  
      document.addEventListener('click', showLoginFun);
  
      return () => {
        document.removeEventListener('click', showLoginFun);
      };
    }, []);

  
    return ref;
  };
 
  const handleClickOutside = () => {
    setIsShow(false)
  };
  const ref = useOutsideClick(handleClickOutside);
  const showLoginFun=(tansform)=>{
    setIsShow(true)
    setShowLogin(tansform)
  }
  return (
    <section ref={ref} className='signsBtn'>
    <NavLink onClick={()=>{
  showLoginFun('-22vh')
}}   to='/signUp'>
Sign Up
</NavLink>
<NavLink onClick={()=>{
  showLoginFun('-87vh')
}}  to='/signin'>
Sign In
</NavLink>
{
  isShow && <div  className="forms">
  <div  className='main'>
    <SignUp showLoginFun={showLoginFun}/>
    <SignIn showLoginFun={showLoginFun} showLogin={showLogin}/>
  </div>
  </div>
}
    </section>
  )
}

export default SignsBox
