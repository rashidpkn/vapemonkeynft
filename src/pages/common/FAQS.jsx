import React, { useState } from 'react'

function FAQS() {

    const faq = [
    
        {
            question: 'When is the public mint date?',
            ans: <>1st June 2023. Stay up to date with this information by joining our <a href='https://discord.gg/NC3RXXh8'>Discord</a>.</>,
        },
        {
            question: 'What blockchain do you use?',
            ans: 'All Vape Monkey NFTs on the Ethereum blockchain. (ERC721A Smart Contracts)',
        },
        {
            question: 'What is the mint price?',
            ans: '0.05 ETH.',
        },

    ]
    return (
        <div className='text-white flex flex-col items-center gap-10 bg-[#121212] py-[5%]'>
            <div className="">
                <h2 className='text-center text-3xl md:text-5xl'>In Case You </h2>
                <h2 className='text-center text-3xl md:text-5xl'>Missed Anything</h2>
            </div>
            <div className="divide-y w-[80%] xl:w-3/4 divide-[#333] space-y-5">
                
                

                

                {faq.map(e => <FAQ key={e.question} question={e.question} ans={e.ans} />)}
            </div>
        </div>
    )
}

export default FAQS

function FAQ({ question, ans }) {
    const [show, setShow] = useState(false)
    return (
        <div className="w-full flex flex-col justify-center gap-5 divide-y divide-[#333]">
            <div className="flex justify-between cursor-pointer" onClick={() => { setShow(!show) }}>
                <p className='text-lg md:text-2xl'>{question}</p>
                <button className='text-3xl text-[#333]' >+</button>
            </div>
            <div className={`${show ? 'block text-white/75 text-md md:text-xl' : 'hidden'}`}>{ans}</div>
        </div>
    )
}