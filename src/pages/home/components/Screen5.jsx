import React, { useState } from 'react'

function Screen5() {
    return (
        <div className='text-white flex flex-col items-center gap-10'>
            <div className="">
                <h2 className='text-center text-3xl md:text-5xl'>In Case You </h2>
                <h2 className='text-center text-3xl md:text-5xl'>Missed Anything</h2>
            </div>
            <div className="divide-y w-[80%] xl:w-3/4 divide-[#333] space-y-5">
                <FAQ ans={'This is yet to be announced. Stay up to date with this information by joining our Discord.'}
                    question={'When is the public mint date?'} />
                <FAQ ans={'This is yet to be announced. Stay up to date with this information by joining our Discord.'}
                    question={'When is the whitelist mint date?'} />
                <FAQ ans={'All Vapemonkeydubai live on the Ethereum blockchain. (ERC721A Smart Contracts)'}
                    question={'What blockchain do you use?'} />
                <FAQ ans={'This is yet to be announced. Stay up to date with this information by joining our Discord.'}
                    question={'What is the mint price?'} />
                <FAQ ans={'We will have a total of 1,000 whitelist spots available.'}
                    question={'How many whitelist spots will be available?'} />
                <FAQ ans={'We are running numerous whitelist competitions on our Twitter and Discord. Follow our Twitter and join our Discord to find out when the next whitelist competition is.'}
                    question={'How can I earn a whitelist spot?'} />
            </div>
        </div>
    )
}

export default Screen5

function FAQ({ question, ans }) {
    const [show, setShow] = useState(false)
    return (
        <div className="w-full flex flex-col justify-center gap-5 divide-y divide-[#333]">
            <div className="flex justify-between">
                <p className='text-lg md:text-2xl'>{question}</p>
                <button className='text-3xl text-[#333]' onClick={() => { setShow(!show) }}>+</button>
            </div>
            <div className={`${show ? 'block text-[#333] text-md md:text-xl' : 'hidden'}`}>{ans}</div>
        </div>
    )
}