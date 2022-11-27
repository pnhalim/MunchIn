import React, { useState } from 'react'
import munchinLongLogo from '../img/munchin-logo-long.png'
import { auth } from './firebase';
import { createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from "firebase/auth";
import InputBox from './InputBox'
import { useDispatch } from 'react-redux';
import { login } from '../features/userSlice'


function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // register new users
  const [profilePic, setProfilePic] = useState('');
  const [name, setName] = useState('');
  const [registered, setRegistered] = useState(true);
  // error message
  const [error, setError] = useState('');
  // auth
  const dispatch = useDispatch();


  const register = (e) => {
    e.preventDefault();
    // error handling
    if (!name) {
      setError('Please enter a full name');
      return;
    }
    if (!email) {
      setError('Please enter an email');
      return;
    }
    if (!password) {
      setError('Please enter a password');
      return;
    }
    if (!profilePic) {
      setError('Please enter profile pic URL (from google images!)');
      return;
    }
    // profile
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        updateProfile(userCredential.user, {
          displayName: name, 
          photoURL: profilePic,
        })
          .then(() => {
            dispatch(login({
              email: userCredential.user.email, 
              uid: userCredential.user.uid,
              displayName: name, 
              photoURL: profilePic,
            }));
          });
      })
      .catch((error) => {
        setError('A user already exists with this email');
      })
  };
  const loginToApp = (e) => {
    e.preventDefault();
    if (!email) {
      setError('Please enter an email');
      return;
    }
    if (!password) {
      setError('Please enter a password');
      return;
    }
    signInWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        // Signed in
        dispatch(login({
          email: userCredential.user.email, 
          uid: userCredential.user.uid,
          displayName: userCredential.user.displayName, 
          photoURL: userCredential.user.photoURL,
        }));
      })
      .catch((error) => {
        setError('Invalid email or password');
      })
  };
  const submitForm = (e) => (registered ? loginToApp(e) : register(e));

  return (
    <div className='flex flex-col justify-between h-screen'>
      <div className='ml-12 mt-7'>
        <img className='h-10' src={munchinLongLogo} alt='MunchIn'/>
      </div>
      <div className='flex flex-col items-center'>
        <div className='px-6 py-10 bg-white shadow-xl border border-neutral-100 rounded-lg'>
          <h1 className='text-4xl font-semibold'>Sign in</h1>
          <p className='py-1'>Stay updated with the foodie world</p>
          <form className='flex flex-col w-80' onSubmit={submitForm}>
            {!registered && <InputBox title='Full Name' content={name} setContent={setName}/>}
            <InputBox title='Email' content={email} setContent={setEmail}/>
            <InputBox title='Password' type='password' content={password} setContent={setPassword}/>
            {!registered && <InputBox title='Image URL for Profile (Optional)' content={profilePic} setContent={setProfilePic}/>}
            {registered && <div className='rounded-full cursor-pointer hover:bg-background hover:underline transition ease-in-out text-primary text-lg font-semibold p-1 pl-3 w-40 mb-3'>Forgot password?</div>}
            <p className='text-red-600 p-2 pb-0'>{error}</p>
            <button className='rounded-full bg-primary opacity-80 hover:opacity-100 p-3 text-lg text-white transition ease-linear mt-2' type='submit' onClick={submitForm}>Sign in</button>
          </form>
        </div>
        {registered ? (
          <p className='text-lg mt-10'>New to MunchIn?
            <span className='rounded-full cursor-pointer hover:bg-background hover:underline transition ease-in-out text-primary text-lg font-semibold py-1 px-2' onClick={() => (setRegistered(false))}>Join now</span>
          </p>
          ) : (
          <p className='text-lg mt-10'>Returning User?
            <span className='rounded-full cursor-pointer hover:bg-background hover:underline transition ease-in-out text-primary text-lg font-semibold py-1 px-2' onClick={() => (setRegistered(true))}>Sign in</span>
          </p>
        )}
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