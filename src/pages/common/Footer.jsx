import React from 'react'
import {useLocation} from 'react-router-dom'
function Footer() {
    const location = useLocation()
    console.log(location.pathname)
    return (
        <div className='text-white bg-[#121212]'>
            <div className="flex flex-col lg:flex-row   border-y border-[#333] divide-x divide-[#333]">
                <div className="px-3 md:px-0 w-full lg:w-1/2 h-[420px] flex flex-col justify-center items-center gap-3">
                    <div className="flex flex-col gap-3">
                        <h2 className='text-3xl md:text-5xl'>Stay Up To Date </h2>
                        <h2 className='text-3xl md:text-5xl'>With Vapemonkeydubai.</h2>
                        <p>Get the latest news and information about the Vapemonkeydubai NFT project.</p>
                    </div>
                    <div className="flex gap-3 justify-center flex-wrap">
                        <div className="max-w-[432px] flex flex-col gap-3">
                            <input className='w-full h-[38px] bg-transparent outline-none border-b' type="text" />
                            <p>By submitting your email, you are agreeing to our Terms of Service  & Privacy Policy.</p>
                        </div>
                        <button className='w-[100px] h-[100px] rounded-full bg-[#ff0097] hover:h-[90px] hover:w-[90px] duration-200'>SEND IT</button>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 h-[420px] flex flex-col divide-y divide-[#333]">
                    <Navigation />
                    <div className="w-full h-[120px] flex items-center justify-center lg:justify-start gap-10 px-0 lg:px-10 ">
                        <div className="flex flex-col">
                            <span>Terms & Privacy Policy</span>
                            <span>Licensing</span>
                        </div>
                        <div className="flex gap-5">
                            <div className="h-10 w-10 bg-white"></div>
                            <div className="h-10 w-10 bg-white"></div>
                            <div className="h-10 w-10 bg-white"></div>
                        </div>
                    </div>
                </div>
            </div>

            <CopyRight />
        </div>
    )
}

export default Footer


function Navigation() {
    return (
        <div className="w-full h-[300px] p-10"></div>
    )
}


function CopyRight() {
    return (
        <div className="flex justify-around items-center h-20">
            <span>® 2022. Vapemonkeydubai. All Rights Reserved</span>
            <span>Website by Vapemonkeydubai</span>
        </div>
    )
}