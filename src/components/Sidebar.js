import React from 'react'
import { Avatar } from "@mui/material"
import BackgroundImg from '../img/background-img.png'
import RestaurantIcon from '@mui/icons-material/Restaurant';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
/*
    Name, Avatar, Img
    Profile Views, Impressions on Post
*/
function Sidebar() {
    const user = useSelector(selectUser);

    const recentItem = (topic) => (
        <div className='flex py-1 px-3 opacity-60 hover:opacity-100 hover:bg-neutral-100 cursor-pointer transition ease-in-out'>
            <RestaurantIcon className='pr-1' />
            <p className="ml-1 mt-1 text-sm font-semibold">{topic}</p>
        </div>
    )

  return (
    <div className='w-56'>
        { /* Top */ }
        <div className='flex flex-col items-center bg-white grow shadow rounded-md overflow-hidden'>
            <div className='relative h-32'>
                <img className='object-cover opacity-90 w-56 h-20' src={BackgroundImg} alt='' />
                <Avatar className='border-white border-2 !h-16 !w-16 absolute bottom-10 left-20 scale-125' src={user.photoURL} />
            </div>
            <h1 className="font-semibold text-lg">{user.displayName}</h1>
            <h2 className="text-sm text-neutral-500 text-center mx-3">{user.description}</h2>

            <div className="w-56 border-t border-bg py-2 mt-3">
                <div className='flex justify-between py-1 px-3 hover:bg-neutral-100 cursor-pointer'>
                    <p className="text-sm font-semibold text-neutral-500">Who's viewed your profile</p>
                    <p className="text-sm text-primary font-semibold">114</p>
                </div>
                <div className='flex justify-between py-1 px-3 hover:bg-neutral-100 cursor-pointer'>
                    <p className="text-sm font-semibold text-neutral-500">Impressions of your post</p>
                    <p className="text-sm text-primary font-semibold">555</p>
                </div>
            </div>
        </div>
        { /* Bottom */ }
        <div className='mt-3 bg-white grow shadow rounded-md overflow-hidden sticky top-[5.5rem]'>
            <div className='my-3'> 
                <h1 className='text-sm px-3 py-1'>Recent</h1>
                {recentItem('Making MunchIn')}
                {recentItem('Thanksgiving Dinner')}
                {recentItem('Ann Arbor Restaurants List')}
            </div>
        </div>
    </div>
  )
}

export default Sidebar