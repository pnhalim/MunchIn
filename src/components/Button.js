import React from 'react'

function Button({ Icon, title, color }) {
  return (
    <div className='py-3 px-3 flex justify-center items-center rounded-md hover:bg-neutral-200 cursor-pointer transition ease-in'>
      <Icon style={{ color: color }} />
      <span className='ml-3 text-neutral-400 font-semibold'>{title}</span>
    </div>
  )
}

export default Button