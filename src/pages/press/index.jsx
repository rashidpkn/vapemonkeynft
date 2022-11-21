import React from 'react'
import Fixed from '../common/Fixed'
import NavBar from '../common/NavBar'

function Press() {
    return (
        <div className='bg-[#121212]'>
            <NavBar />
            <div className="px-[10%] py-[5%] h-screen flex flex-col justify-center items-center text-center text-white gap-5">
                <div className="w-[300px] h-[300px] lg:w-[488px] lg:h-[488px] bg-white rounded-full overflow-hidden flex justify-center items-center">
                    <img src="/image/press/1.jpeg" className='w-[calc(100%-10px)] h-[calc(100%-10px)] rounded-full ' alt="" />
                </div>
                <h1 className='text-4xl font-bold'>EGOZE PR/ Media Kit</h1>
                <p className='text-center text-[1.2rem] font-light lg:w-[60%]'>This is where all the stuff you want is. We did this so we can talk to you less and just continue working on the project. Thanks.</p>
                <button className='bg-[#ff0097] px-3 py-2 rounded-full'>COMING SOON</button>
            </div>
            <Fixed />
        </div>
    )
}

export default Press