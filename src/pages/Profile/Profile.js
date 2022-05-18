import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../../features/userSlice'
import Nav from '../../Components/Nav/Nav'
import Avatar  from '../../Assets/index.png'
import './Profile.css'
import { signOut } from 'firebase/auth'
import { auth } from '../../Firebase-config'
import {useNavigate} from 'react-router-dom'
 
function Profile() {
  const user = useSelector(selectUser)
  const navigate = useNavigate();

  const logout = () => {
         signOut(auth);
         navigate("/")
  }

  useEffect(() => {
     if(user === null){
         navigate("/Login")
     }
  }, [])
   
  return (
    <div className='profileScreen'>
       <Nav />
       <div className='profileScreen__body'>

         <h1>Edit Profile</h1>
         <div className='profileScreen__info'>
           <img src={Avatar} alt='' />
    
            <div className='profileScreen__details'>
                <h2>{user?.email}</h2>
                <div>
                  <h3>Plans</h3>

                  <button onClick={logout} className='profileScreen__signOut '> Sign Out</button>
                </div>
            </div>
         </div>

       </div>
    </div>
  )
}

export default Profile