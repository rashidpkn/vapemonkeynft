import React from 'react'
import NavBar from '../../common/NavBar'
/* eslint-disable */
function Screen1() {
    return (
        <section className='relative  h-[50vh] md:h-screen bg-cover bg-no-repeat' style={{ backgroundImage: "url('/image/home/bg.png')" }}>
            <NavBar />
            <marquee direction="right" width="100%" scrollamount='20' className="hidden lg:block">
                <h1 className='linearcolor-marquee text-[8.5rem] font-bold mt-[10%]'>Vape Monkey NFT</h1>
            </marquee>
            <img src="/image/home/monkey.png" className=' absolute bottom-0 inset-x-0 mx-auto object-cover w-full' title='vapemonkeynft' alt="vapemonkeynft" />

            <div className="absolute h-[50vh] md:h-screen w-full flex justify-center items-center top-0 left-0">
                <a href="https://mint.vapemonkeynft.io">
                 <button className='text-neo-latina text-white text-2xl border px-5 py-3 rounded-md rounded-tl-3xl hover:rounded-tl-md rounded-br-3xl hover:rounded-br-md duration-200'>MINT NOW</button>
                </a>
            </div>
        </section>
    )
}

export default Screen1