import React from 'react'

function Notes({title,heading,desc}) {
  return (
    <div className='text-center space-y-5 text-white px-[10%] py-[5%]'>
        <h6>{title}</h6>
        <h1 className='text-5xl '>{heading}</h1>
        <p className='text-[1.5rem] font-light'>{desc}</p>
    </div>
  )
}

export default Notes