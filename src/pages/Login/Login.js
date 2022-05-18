import React, { useEffect, useState } from 'react'
import './Login.css'
import netflixLogo from '../../Assets/netflix-logo-vector.png' 
import backDrop from '../../Assets/LK-en-20211115-popsignuptwoweeks-perspective_alpha_website_small.jpg' 
import SignIn from '../SignIn/SignIn'
import { useSelector } from 'react-redux'
import { selectUser } from '../../features/userSlice'
import { useNavigate } from 'react-router-dom'

function Login() {
  const [signIn , setSignIn] = useState(false) 
  const user  = useSelector(selectUser);
  const navigate = useNavigate()

  useEffect(() => {
       if(user){
            navigate("/")
       }
  }, [user])

  return (
    <div className='Loginscreen' style={{ background: `url(${backDrop})`}}>
        <div className='loginscreen_background'>
            <img className='loginScreen_logo' src= {netflixLogo} alt='logo'/>
       
            <button className='Loginscreen_button'
                onClick={() => {setSignIn(true)}}
            > Sign In </button>

            <div className='loginscreen_gradiwnt' />
         </div>
         <div className='loginScreen__body'>
             {
                 signIn ? (
                     <SignIn  />
                 ) : (
                     <>
                        <h1>Unlimited Files, TV Programes and more</h1>
                        <h2>Watch Anyware, cancel at any times</h2>
                        <h3>
                            Raedt To watch? Enter your email to create or reatart your
                            membership
                        </h3>
                        <div className='LoginScreen_Input'>
                            <form>
                                <input  type='text' placeholder='Email adress...' />
                                <button className='Loginscreen_getStarded'
                                    onClick={() => {setSignIn(true)}}
                                    > Get Started </button>
                            </form>
                        </div>
                     </>
                 )
             }
         </div>

    </div>
  )
}

export default Login