import React from 'react'
import { Avatar } from "@mui/material"
import Button from './Button';
import StarIcon from '@mui/icons-material/StarOutlineOutlined';
import CommentIcon from '@mui/icons-material/CommentOutlined';
import RepostIcon from '@mui/icons-material/Repeat';
import SendIcon from '@mui/icons-material/Send';

function Post({ name, description, message, photoURL }) {
  const formattedMessage = message.split('--NEWLINE--');

  return (
    <div className='rounded-md bg-white p-4 pb-0.5 shadow w-[36rem]'>
      <div className="flex items-center">
        <Avatar className='!h-12 !w-12' src={photoURL} />
        <div className='px-3 cursor-pointer'>
          <h1 className='font-semibold text-neutral-700 hover:text-sky-600 hover:underline cursor-pointer'>{name}</h1>
          <p className='text-sm text-neutral-400'>{description}</p>
          <div className="flex items-center">
            <p className='text-sm text-neutral-400 pr-0.5'>4d - </p>
            <svg className="w-4 h-4 opacity-60" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM6.262 6.072a8.25 8.25 0 1010.562-.766 4.5 4.5 0 01-1.318 1.357L14.25 7.5l.165.33a.809.809 0 01-1.086 1.085l-.604-.302a1.125 1.125 0 00-1.298.21l-.132.131c-.439.44-.439 1.152 0 1.591l.296.296c.256.257.622.374.98.314l1.17-.195c.323-.054.654.036.905.245l1.33 1.108c.32.267.46.694.358 1.1a8.7 8.7 0 01-2.288 4.04l-.723.724a1.125 1.125 0 01-1.298.21l-.153-.076a1.125 1.125 0 01-.622-1.006v-1.089c0-.298-.119-.585-.33-.796l-1.347-1.347a1.125 1.125 0 01-.21-1.298L9.75 12l-1.64-1.64a6 6 0 01-1.676-3.257l-.172-1.03z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
      </div>
      {formattedMessage.map((str, index) => <p key={index} className='px-1 py-1.5 text-neutral-700'>{str}</p>)}
      <div className="grid justify-items-stretch grid-flow-col border-t py-1 mt-1">
        <Button className='rounded-md hover:bg-neutral-200 cursor-pointer transition ease-in' Icon={StarIcon} title='Like' color='gray' />
        <Button className='rounded-md hover:bg-neutral-200 cursor-pointer transition ease-in' Icon={CommentIcon} title='Comment' color='gray' />
        <Button className='rounded-md hover:bg-neutral-200 cursor-pointer transition ease-in' Icon={RepostIcon} title='Repost' color='gray' />
        <Button className='rounded-md hover:bg-neutral-200 cursor-pointer transition ease-in' Icon={SendIcon} title='Send' color='gray' />
      </div>
    </div>
  )
}

export default Post