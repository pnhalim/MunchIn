import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from './features/userSlice'
import './App.css';
import Feed from './components/Feed';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Login from './components/Login';
import Widgets from './components/Widgets';
import { auth, db } from './components/firebase'
import { onAuthStateChanged } from 'firebase/auth'
import { doc, getDoc } from 'firebase/firestore'
import { login, logout } from './features/userSlice'

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, userCredentials => {
      if (userCredentials) {
        // the user is logged in
        // get user profile information
        let profile = {};
        getDoc(doc(db, 'users', userCredentials.uid))
        .then(snapshot => {
          profile = snapshot.data();
          // add info to redux
          dispatch(login({
          email: userCredentials.email, 
          uid: userCredentials.uid,
          displayName: profile.name, 
          photoURL: profile.photoURL,
          description: profile.description,
        }));
        }) 
      }
      else {
        // the user is logged out
        dispatch(logout());
      }
    })
  }, [dispatch])
  
  return (
    <div className="App font-default ">
      {!user ? <Login /> : ( 
      <div className='bg-main-background w-screen flex flex-col items-center'>
        <Header />
        <div className='md:max-w-screen-md lg:max-w-6xl bg-main-background w-full flex flex-col items-center md:items-start md:flex-row justify-evenly pt-7'>
          <Sidebar />
          <Feed />
          <Widgets />
        </div>
      </div>
      )}
    </div>
  );
}

export default App;
