import React, { useState } from 'react'
import munchinLongLogo from '../img/munchin-logo-long.png'
import InputBox from './InputBox'


function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const register = () => {};
  const loginToApp = () => {};

  return (
    <div className='flex flex-col justify-between h-screen'>
      <div className='ml-12 mt-7'>
        <img className='h-10' src={munchinLongLogo} alt='MunchIn'/>
      </div>
      <div className='flex flex-col items-center'>
        <div className='px-6 py-10 bg-white shadow-xl border border-neutral-100 rounded-lg'>
          <h1 className='text-4xl font-semibold'>Sign in</h1>
          <p className='py-1'>Stay updated with the foodie world</p>
          <form className='flex flex-col w-80'>
            <InputBox title='Email' content={email} setContent={setEmail}/>
            <InputBox title='Password' content={password} setContent={setPassword}/>
            <div className='rounded-full cursor-pointer hover:bg-background hover:underline transition ease-in-out text-primary text-lg font-semibold p-1 pl-3 w-40 mb-5'>Forgot password?</div>
            <button className='rounded-full bg-primary opacity-80 hover:opacity-100 p-3 text-lg text-white transition ease-linear' type='submit' onClick={loginToApp}>Sign in</button>
          </form>
        </div>
        <p className='text-lg mt-10'>New to MunchIn?
          <span className='rounded-full cursor-pointer hover:bg-background hover:underline transition ease-in-out text-primary text-lg font-semibold py-1 px-2' onClick={register}>Join now</span>
        </p>
      </div>
      <div className='flex space-x-6 mb-5 place-self-center'>
        <span className='text-sm cursor-default font-semibold'>MunchIn by Patrick Halim, 2022</span>
        <a className='text-sm cursor-pointer hover:underline text-neutral-500' target="_blank" href="https://github.com/pnhalim/linkedin-clone">GitHub</a>
        <a className='text-sm cursor-pointer hover:underline text-neutral-500' target="_blank" href='https://www.linkedin.com/in/patrick-halim/'>LinkedIn</a>
        <a className='hidden sm:inline text-sm cursor-pointer hover:underline text-neutral-500' target="_blank" href='https://github.com/CLAWS-UMICH/HOSHI-2021-2022-Release'>Other</a>
        <a className='hidden sm:inline text-sm cursor-pointer hover:underline text-neutral-500' target="_blank" href='https://www.youtube.com/watch?v=DjproJZUcOI&t=77s'>Random</a>
        <a className='hidden sm:inline text-sm cursor-pointer hover:underline text-neutral-500' target="_blank" href='https://main--timely-medovik-b279fe.netlify.app/'>Links</a>
      </div>
    </div>
  )
}

export default Login