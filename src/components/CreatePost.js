import React from 'react'
import { Avatar } from "@mui/material"
import Profile from '../img/profile-pic.jpg'
import PhotoIcon from '@mui/icons-material/InsertPhoto';
import PlayIcon from '@mui/icons-material/SmartDisplay';
import RestaurantIcon from '@mui/icons-material/Campaign';
import ReviewIcon from '@mui/icons-material/Reviews';
import Button from './Button';

function CreatePost() {
  return (
    <div className='rounded-md bg-white shadow py-1 w-[36rem]'>
      <div className='flex pt-2 pl-4 items-center'>
        <Avatar className='!h-12 !w-12' src={Profile} />
        <form action="" className="flex grow ml-3 mr-4">
          <input className='hover:bg-neutral-100 transition ease-in cursor-pointer grow border rounded-full border-neutral-400 py-2.5 px-5' type='text' placeholder='Start a post'/>
          <button className='hidden' type='submit'>Send</button>
        </form>
      </div>
      { /* Buttons */ }
      <div className='flex justify-around pt-1'>
        <Button Icon={PhotoIcon} title='Photo' color='#378fe9' />
        <Button Icon={PlayIcon} title='Video' color='#5f9b41' />
        <Button Icon={RestaurantIcon} title='Restaurant' color='#a872e8' />
        <Button Icon={ReviewIcon} title='Write Review' color='#e16745' />
      </div>
    </div>
  )
}

export default CreatePost