import React, { useState } from 'react'
import './SignIn.css'
import { auth } from '../../Firebase-config'
import { createUserWithEmailAndPassword , signInWithEmailAndPassword , sendPasswordResetEmail } from 'firebase/auth'

function SignIn() {
  const [email , setEmail] = useState("");
  const [password , setPassword] = useState("");

  const register = () => {
         createUserWithEmailAndPassword(auth , email , password).then((authUSer) => {
            alert("Registration Succesfull")
         }).catch((err) => {
              alert(err.message)
         })
  }

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth , email , password).then((authUSer) => {
      alert("succesfully loged in")
   }).catch((err) => {
        alert(err.message)
   })
  }

  const forogotPassowrd = () => [
    sendPasswordResetEmail(auth , email).then(() => {
        alert("Password Reset successfully")
    })
  ]

  return (
    <div className='signupScreen'>
      <form>
        <h1>Sign In</h1>
        <input   onChange={(e) => {setEmail(e.target.value)}} placeholder='Email' type='mail' />
        <input   onChange={(e) => {setPassword(e.target.value)}} placeholder='Paswword' type='password' />
        <button onClick={((e) => {signIn(e)})} >Sign In</button>
      </form>

      <h4 style={{padding:'8px 12px'}} >
        <span className='signupScreen__gray '>New To Netflix</span>
        <span style={{marginLeft:"8px"}} onClick={register} className='signinScreen_Link'>Sign Up</span>
        <p onClick={forogotPassowrd} style={{padding:'8px 12px' , cursor:'pointer'}}>Forogot password</p>
      </h4>
    </div>
  )
}

export default SignIn