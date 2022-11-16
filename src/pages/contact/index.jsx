import React from 'react'
import Fixed from '../common/Fixed'
import Footer from '../common/Footer'
import NavBar from '../common/NavBar'

function Contact() {
    return (
        <div>
            <NavBar />
            <div className="min-h-screen w-full flex flex-wrap gradient">
                <div className="w-full min-h-1/2 lg:w-1/2 lg:min-h-full  flex justify-center items-center p-5">
                    <div className="space-y-5 flex flex-col justify-center items-center  lg:block">
                        <h2 className='text-white text-5xl font-semibold'>Have a Question?</h2>
                        <h2 className='text-white text-5xl font-semibold'>Drop us a line.</h2>
                    </div>
                </div>
                <div className="w-full min-h-1/2 lg:w-1/2 lg:min-h-full bg-black flex flex-col justify-center items-center gap-14 p-5">
                    <input placeholder='Your Name'  className='outline-none border-b bg-transparent w-full text-[#828282] text-2xl px-1' type="text" />
                    <input placeholder='Your Title' className='outline-none border-b bg-transparent w-full text-[#828282] text-2xl px-1' type="text" />
                    <input placeholder='Your Email' className='outline-none border-b bg-transparent w-full text-[#828282] text-2xl px-1' type="text" />
                    <input placeholder='Your Phone' className='outline-none border-b bg-transparent w-full text-[#828282] text-2xl px-1' type="text" />
                    <div className="w-full">
                        <h2>What best describes you?</h2>
                        <div className="w-full flex flex-wrap gap-3">
                            <div className="border border-[#333] rounded-3xl text-white text-2xl px-4 py-1">Influencer</div>
                            <div className="border border-[#333] rounded-3xl text-white text-2xl px-4 py-1">Investor</div>
                            <div className="border border-[#333] rounded-3xl text-white text-2xl px-4 py-1">3D Designer</div>
                            <div className="border border-[#333] rounded-3xl text-white text-2xl px-4 py-1">Web3 Developer</div>
                            <div className="border border-[#333] rounded-3xl text-white text-2xl px-4 py-1">Press/ Media</div>
                            <div className="border border-[#333] rounded-3xl text-white text-2xl px-4 py-1">Project Collaboration</div>
                        </div>
                    </div>
                    <textarea className='outline-none border-b bg-transparent text-[#828282] text-2xl px-1 w-full' placeholder='Write us a message'></textarea>
                    <button className='w-[100px] h-[100px] rounded-full bg-[#ff0097] hover:h-[90px] hover:w-[90px] duration-200 self-start text-white'>SEND IT</button>

                </div>
            </div>
            <Fixed />
            <Footer />
        </div>
    )
}

export default Contact