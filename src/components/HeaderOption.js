import React from 'react'

function HeaderOption({ Icon, title }) {
  return (
    <div className='grid px-3 w-20 min-w-max opacity-60 justify-items-center hover:opacity-100 transition items-center pb-1.5'>
      {Icon && <Icon className='scale-125 sm:scale-110 p-0.5 sm:p-0' />}
      <h3 className='text-sm pt-0.5 hidden sm:block'>{ title }</h3>
    </div>
  )
}

export default HeaderOption