import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkEmailPasswordValidation } from '../utils/validation';
import {  createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { LOGO_URL, USER_AVATAR } from '../utils/constants';
import withErrorBoundary from './withErrorBoundary'

const Login = () => {
    const [ signIn, setSignIn] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);
    const email = useRef(null);
    const password = useRef(null);
    const displayName = useRef(null);
    const dispatch = useDispatch();


    const onSubmit = () =>{
        const validationError = (checkEmailPasswordValidation(email.current.value,password.current.value));
        setErrorMessage(validationError);
        if (validationError) return;
        if (signIn){
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                const user = userCredential.user;
               
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });

        }else{
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                const user = userCredential.user;
                updateProfile(user,{
                    displayName: displayName.current.value,
                    photoURL: USER_AVATAR,
                }).then(()=>{
                    navigate("/");
                })
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode + ' - '+ errorMessage);
                // ..
            });
        }
    }

  return (
    <div>
      <Header></Header>
    <div className="absolute">
        <img src={LOGO_URL} className="logo react" alt="React logo" />
    </div>
    <form onSubmit={(e)=> e.preventDefault()} className='w-3/12 absolute p-12 bg-black/80 my-36 mx-auto right-0 left-0 text-white rounded-lg '>
    { signIn && <h1> Sign In </h1>}
    { !signIn && <h1> Sign Up </h1>}
    { !signIn &&<input type='text' placeholder='Full Name' ref={displayName} className='p-4 my-4 w-full bg-gray-700' />}
    <input type='text' ref={email} placeholder='Email Address' className='p-4 my-4 w-full bg-gray-700' />
    <input type='password' ref={password} placeholder='Password' className='p-4 my-4 w-full bg-gray-700' />
    {signIn && <button className='p-4 my-6 bg-red-700 w-full rounded-lg cursor-pointer' onClick={onSubmit} > Sign In </button>}
    {!signIn && <button className='p-4 my-6 bg-red-700 w-full rounded-lg cursor-pointer' onClick={onSubmit} > Sign Up </button>}
    <p className='text-red-500 font-bold'>{errorMessage} </p>
    {signIn && <p className='w-full cursor-pointer' onClick={() => setSignIn(!signIn)}>New to NetflixGPT Sign Up Now !!</p>}
    {!signIn && <p className='w-full cursor-pointer' onClick={() => setSignIn(!signIn)}>Already Registered? Sign In </p>}
    </form>
    </div>
  )
}

export default withErrorBoundary(Login, 'Login');
