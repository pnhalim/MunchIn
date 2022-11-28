import React from 'react'

function Button({ Icon, title, color, onClick }) {
  return (
    <div onClick={onClick} className='py-3 px-3 flex justify-center items-center rounded-md hover:bg-neutral-200 cursor-pointer transition ease-in'>
      <Icon className='hidden min-[420px]:block' style={{ color: color }} />
      <span className='hidden min-[420px]:block ml-3 text-neutral-400 font-semibold'>{title}</span>
    </div>
  )
}

export default Button