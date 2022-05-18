import React, { useEffect, useState } from 'react'
import netflixLogo from '../../Assets/netflix-logo-vector.png' 
import avatar from '../../Assets/index.png' 
import './Nav.css'
import { Link } from 'react-router-dom';

function Nav() {
  const [show ,setShow] = useState(false); 
    
  const transitionNavbar = () => {

      if(window.scrollY > 100){
          setShow(true)
      }else{
          setShow(false)
      }
  }

  useEffect(() => {
      window.addEventListener("scroll" , transitionNavbar);

     
  },[]) 


  return (
    <nav className={`nav ${show && 'nav_black' }`} >
         <div className='nav_contents'>
            <Link to='/'>
                <img src={netflixLogo} alt='' className='nav_image' /> 
            </Link> 
            <Link to='/Profile'>
             <img src={avatar} alt='' className='nav_avatar' /> 
            </Link>
         </div>
    </nav>
  )
}

export default Nav