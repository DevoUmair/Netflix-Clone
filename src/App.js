import React, { useEffect } from 'react'
import { BrowserRouter as Router , Route , Routes } from 'react-router-dom'
import Home from './pages/Home/Home';
import Profile from './pages/Profile/Profile';
import  './App.css' 
import Login from './pages/Login/Login';
import { useDispatch} from 'react-redux'
import { login, logout} from './features/userSlice';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './Firebase-config';


function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    const unsubScribe = onAuthStateChanged(auth , (authUser) => {
         if(authUser){
           dispatch(login({
             uid:authUser.uid,
             email:authUser.email
           }));
         }else{
           dispatch(logout());
           console.log("No User")
         }
    })

    return unsubScribe;
  } , [])

  return (
    <div className='App'>
      
      <Router>        
            <Routes>
               <Route path='/' element={<Home />} />
               <Route path='/Login' element={<Login /> } />
               <Route path='/Profile' element={<Profile />} />
            </Routes>   
      </Router>
    </div>
  )
}

export default App