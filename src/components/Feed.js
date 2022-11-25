import React from 'react'
import CreatePost from './CreatePost'
import Post from './Post'

function Feed() {
  return (
    <div className='flex flex-col space-y-3'>
      <CreatePost />
      <Post name='Gordon Ramsay' 
        description='Acclaimed chef, Restaurateur, TV personality' 
        message="I am excited to announce that I have received yet another Michelin star at my newest restaurant: MY HOME.--NEWLINE--It has been an amazing joruney, but now that I've earned 7,000 stars, I think it's time for me to retire. See you in Hell's Kitchen" />
       
    </div>
  )
}

export default Feed