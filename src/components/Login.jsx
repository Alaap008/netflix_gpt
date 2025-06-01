import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
    const [ signIn, setSignIn] = useState(true);
  return (
    <div>
      <Header></Header>
    <div className="absolute">
        <img src={'https://assets.nflxext.com/ffe/siteui/vlv3/af2fac72-d956-4952-8686-4d45d359d78c/web/IN-en-20250526-TRIFECTA-perspective_5db3e163-56f7-47c7-9a65-b79b9d76bf24_large.jpg'} className="logo react" alt="React logo" />
    </div>
    <form className='w-3/12 absolute p-12 bg-black/80 my-36 mx-auto right-0 left-0 text-white rounded-lg '>
    { signIn && <h1> Sign In </h1>}
    { !signIn && <h1> Sign Up </h1>}
    { !signIn &&<input type='text' placeholder='Full Name' className='p-4 my-4 w-full bg-gray-700' />}
    <input type='text' placeholder='Email Address' className='p-4 my-4 w-full bg-gray-700' />
    <input type='password' placeholder='Password' className='p-4 my-4 w-full bg-gray-700' />
    {signIn && <button className='p-4 my-6 bg-red-700 w-full rounded-lg' > Sign In </button>}
    {!signIn && <button className='p-4 my-6 bg-red-700 w-full rounded-lg' > Sign Up </button>}
    {signIn && <p className='w-full cursor-pointer' onClick={() => setSignIn(!signIn)}>New to NetflixGPT Sign Up Now !!</p>}
    {!signIn && <p className='w-full cursor-pointer' onClick={() => setSignIn(!signIn)}>Already Registered? Sign In </p>}
    </form>
    </div>
  )
}

export default Login
