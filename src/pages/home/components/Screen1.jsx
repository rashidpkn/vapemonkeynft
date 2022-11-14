import React from 'react'
import NavBar from '../../common/NavBar'

function Screen1() {
    return (
        <div className='relative h-screen bg-[linear-gradient(135deg,#0073ff,#ff0097)]'>
            <img src="/image/home/logo.svg" className='absolute top-10 left-10 z-50' alt="" />
            <NavBar />
            <img src="/image/home/monkey.png" className='absolute bottom-0 inset-x-0 mx-auto  object-cover' alt="" />
        </div>
    )
}

export default Screen1