import React from 'react'
import { Avatar } from "@mui/material"

function HeaderOption({ avatar, displayName, Icon, title, onClick }) {
  return (
    <div onClick={onClick} className='cursor-pointer grid px-3 w-20 min-w-max opacity-60 justify-items-center hover:opacity-100 transition items-center pb-1.5'>
      {Icon && <Icon className='scale-125 sm:scale-110 p-0.5 sm:p-0' />}
      {(avatar || displayName) && <Avatar className='!h-7 !w-7' src={avatar}>{displayName[0]}</Avatar>}
      <h3 className='text-sm pt-.5 hidden sm:block'>{ title }</h3>
    </div>
  )
}

export default HeaderOption