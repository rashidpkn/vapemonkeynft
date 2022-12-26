import React from 'react'
import NavBar from '../../common/NavBar'
/* eslint-disable */
function Screen1() {
    return (
        <section className='relative  h-[50vh] md:h-screen bg-cover bg-no-repeat' style={{ backgroundImage: "url('/image/home/bg.png')" }}>
            <NavBar />
            <marquee direction="right" width="100%" scrollamount='20' className="">
                <h1 className='linearcolor-marquee text-[8.5rem] font-bold mt-[10%]'>Vape Monkey NFT</h1>
            </marquee>
            <img src="/image/home/monkey.png" className=' absolute bottom-0 inset-x-0 mx-auto object-cover w-full' title='vapemonkeynft' alt="vapemonkeynft" />
        </section>
    )
}

export default Screen1