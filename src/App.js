import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice'
import './App.css';
import Feed from './components/Feed';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Login from './components/Login';

function App() {
  const user = useSelector(selectUser);
  
  return (
    <div className="App font-default">
      {!user ? <Login /> : ( 
      <div>
        <Header />
        <div className='bg-main-background w-full flex justify-around pt-7'>
          <Sidebar />
          {/* Feed */}
          <Feed />
          {/* Widgets */}
        </div>
      </div>
      )}
    </div>
  );
}

export default App;
