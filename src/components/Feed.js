import React, { useEffect, useState } from 'react'
import { Avatar } from "@mui/material"
import PhotoIcon from '@mui/icons-material/InsertPhoto';
import PlayIcon from '@mui/icons-material/SmartDisplay';
import RestaurantIcon from '@mui/icons-material/Campaign';
import ReviewIcon from '@mui/icons-material/Reviews';
import Button from './Button';
import Post from './Post'
import { db } from './firebase';
import { collection, onSnapshot, query, orderBy, addDoc, serverTimestamp } from "firebase/firestore";
import { selectUser } from '../features/userSlice';
import { useSelector } from 'react-redux';
import FlipMove from 'react-flip-move';


function Feed() {
  const user = useSelector(selectUser);
  const [input, setInput] = useState('');
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    /*
    // single time data collection
    getDocs(collection(db, "posts"))
      .then(snapshot => {
        setPosts(snapshot.docs.map(doc => (
          {
            id: doc.id,
            ...doc.data(), // spread out objects in doc.data()
          }
        )))
      })
      .catch(err => {
        console.log(err.message);
      })
    */
    // real time data collection
    const q = query(collection(db, "posts"), orderBy('timestamp', 'desc'))
    onSnapshot(q, (snapshot) => {
      setPosts(snapshot.docs.map(doc => (
        {
          id: doc.id,
          ...doc.data(), // spread out objects in doc.data()
        }
      )))
    })
  }, []);
  
  const sendPost = e => {
    e.preventDefault(); // prevents from refreshing page
    
    addDoc(collection(db, "posts"), {
      name: user.displayName || 'Anonymous',
      description: user.description || 'Decentralized international activist and hacktivist collective and movement',
      message: input,
      photoURL: user.photoURL || '',
      timestamp: serverTimestamp(),
    })

    setInput('');
  };

  return (
    <div className='flex flex-col space-y-3'>
      { /* Input Field */ }
      <div className='rounded-md bg-white shadow py-1 w-screen max-w-[33rem] min-[820px]:w-[36rem]'>
        <div className='flex pt-2 pl-4 items-center'>
          <Avatar className='!h-12 !w-12' src={user.photoURL} />
          <form action="" className="flex grow ml-3 mr-4">
            <input value={input} onChange={e => setInput(e.target.value)} className='hover:bg-neutral-100 transition ease-in cursor-pointer grow border rounded-full border-neutral-400 py-2.5 px-5 w-full' type='text' placeholder='Start a post'/>
            <button className='hidden' onClick={sendPost} type='submit'>Send</button>
          </form>
        </div>
        <div className='flex justify-around pt-1'>
          <Button Icon={PhotoIcon} title='Photo' color='#378fe9' />
          <Button Icon={PlayIcon} title='Video' color='#5f9b41' />
          <Button Icon={RestaurantIcon} title='Restaurant' color='#a872e8' />
          <Button Icon={ReviewIcon} title='Write Review' color='#e16745' />
        </div>
      </div>
      
      { /* Posts */ }
      <FlipMove>
        {posts.map( post => (
          <Post key={post.id} name={post.name} description={post.description} message={post.message} photoURL={post.photoURL} likes={Math.floor(Math.random() * 1000) + 2}/>
        ))}
      </FlipMove>
    </div>
  )
}

export default Feed