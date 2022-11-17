import React from 'react'

function Screen1() {
    return (
        <div className='h-[75vh] w-full flex justify-center items-center  relative' >
            <img src="/image/about/banner.jpg" className='h-full w-full object-top object-cover brightness-50 absolute inset-0 mx-auto -z-10' alt="" />
            <h1 className='text-3xl lg:text-[3.4rem] text-center flex flex-col justify-center items-center gap-7'>
                <p>We are building a multifaceted network of </p>
                <p>decentralized 3D Worlds and Experiences.</p>
            </h1>
        </div>
    )
}

export default Screen1