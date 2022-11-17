import React from 'react'

function Screen2() {
  return (
    <div className="py-[5%] px-[10%]  flex flex-col gap-10 text-white ">
                <div className="flex items-center gap-2">
                    <div className="h-3 w-3 bg-[#0075ff] rounded-full" />
                    <h2>About Us</h2>
                </div>
                <div className="h-1/2 w-full lg:w-2/3">                
                    <p className='text-3xl text-justify'>We are a Web3 Technology company that is merging
                        realities between Digital Art, Play to Earn Gaming, and
                        Social Interaction. We’re building a network of 3D Virtual
                        Worlds and experiences that are completely
                        interoperable and focused on social connection.
                    </p>
                    
                </div>
                <div className="h-1/2 w-full lg:w-1/2 self-end text-justify">
                    <p className='text-2xl'>We aren’t your typical NFT Project and we are proud
                        of that. We’ll be delivering unrivaled experiences with
                        functionality beyond comprehension. We’re setting a
                        new standard for “Utility Focused” NFT Projects.</p>
                </div>
                <div className="self-end w-full lg:w-2/3 flex gap-3 text-xl">
                    <div className="w-1/2 border-b border-white">More About Us</div>
                    <div className="w-1/2 border-b border-white">The Roadmap</div>
                </div>
            </div>
  )
}

export default Screen2