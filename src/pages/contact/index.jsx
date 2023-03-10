import React, { useState } from 'react'
import Fixed from '../common/Fixed'
import Footer from '../common/Footer'
import NavBar from '../common/NavBar'
import ScrollToTop from '../common/ScrollToTop'

function Contact() {
    const [title, setTitle] = useState('')
    return (
        <div>
            <ScrollToTop />
            <NavBar />
            <div className="min-h-screen w-full flex flex-wrap gradient">
                <div className="w-full min-h-1/2 lg:w-1/2 lg:min-h-full  flex justify-center items-center p-5">
                    <div className="space-y-5 flex flex-col justify-center items-center  lg:block">
                        <h2 className='text-white text-5xl font-semibold'>Have a Question?</h2>
                        <h2 className='text-white text-5xl font-semibold'>Drop us a line.</h2>
                    </div>
                </div>
                <div className="w-full min-h-1/2 lg:w-1/2 lg:min-h-full bg-black flex flex-col justify-center items-center gap-14 p-5 py-20">
                    <input placeholder='Your Name'  className='outline-none border-b bg-transparent w-full text-[#828282] text-2xl px-1 max-w-[643px]' type="text" />
                    <input placeholder='Your Email' className='outline-none border-b bg-transparent w-full text-[#828282] text-2xl px-1 max-w-[643px]' type="text" />
                    <input placeholder='Your Phone' className='outline-none border-b bg-transparent w-full text-[#828282] text-2xl px-1 max-w-[643px]' type="text" />
                    <div className="w-full max-w-[643px] flex flex-col gap-14">
                        <h2 className='text-white text-3xl'>What best describes you?</h2>
                        <div className="w-full flex flex-wrap gap-3">
                            <button className={`border border-[#333] hover:bg-[#333] duration-200 rounded-full text-white text-2xl px-5 py-3 ${title==='Influencer' ? 'border-2 border-white' : 'border'}`} onClick={()=>setTitle('Influencer')}>Influencer</button>
                            <button className={`border border-[#333] hover:bg-[#333] duration-200 rounded-full text-white text-2xl px-5 py-3 ${title==='Investor' ? 'border-2 border-white' : 'border'}`} onClick={()=>setTitle('Investor')}>Investor</button>
                            <button className={`border border-[#333] hover:bg-[#333] duration-200 rounded-full text-white text-2xl px-5 py-3 ${title==='3D Designer' ? 'border-2 border-white' : 'border'}`} onClick={()=>setTitle('3D Designer')}>3D Designer</button>
                            <button className={`border border-[#333] hover:bg-[#333] duration-200 rounded-full text-white text-2xl px-5 py-3 ${title==='Web3 Developer' ? 'border-2 border-white' : 'border'}`} onClick={()=>setTitle('Web3 Developer')}>Web3 Developer</button>
                            <button className={`border border-[#333] hover:bg-[#333] duration-200 rounded-full text-white text-2xl px-5 py-3 ${title==='Press/ Media' ? 'border-2 border-white' : 'border'}`} onClick={()=>setTitle('Press/ Media')}>Press/ Media</button>
                            <button className={`border border-[#333] hover:bg-[#333] duration-200 rounded-full text-white text-2xl px-5 py-3 ${title==='Project Collaboration' ? 'border-2 border-white' : 'border'}`} onClick={()=>setTitle('Project Collaboration')}>Project Collaboration</button>
                        </div>
                    </div>
                    <div className="w-full max-w-[643px] flex flex-col gap-14">
                        <textarea className='outline-none border-b bg-transparent text-[#828282] text-2xl px-1 w-full ' placeholder='Write us a message'></textarea>
                        <button className='w-[100px] h-[100px] rounded-full bg-[#ff0097] hover:h-[90px] hover:w-[90px] duration-200 self-start text-white'>SEND IT</button>
                    </div>

                </div>
            </div>
            <Fixed />
            <Footer />
        </div>
    )
}

export default Contact