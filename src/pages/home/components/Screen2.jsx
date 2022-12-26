import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'


function Screen2() {
    const content1 = 'Introducing Vape Monkey NFTs – the newest addition to our collection of digital art! These unique, one-of-a-kind items are perfect for collectors and vape enthusiasts alike.'
    const content2 = 'Each NFT features a different Vape Monkey design, making them a must-have for any fan. Own a piece of digital art history and collect them all today!'
    const content3 = 'Vape Monkey NFTs are more than just collectibles - they have practical uses too! Display your NFT on social media, use as a unique avatar, or trade with other collectors. '
    const content4 = 'Own a piece of digital history and show off your style with these must-have items. Start building your collection today!'

    const [text1, setText1] = useState('')
    const [text2, setText2] = useState('')
    const [text3, setText3] = useState('')
    const [text4, setText4] = useState('')

    return (
        
        <section className="py-[5%] px-[10%]  flex flex-col gap-10 text-white " onMouseEnter={() => {
            setText1(<TextAnimation content={content1} />)
            setText2(<TextAnimation content={content2} />)
            setText3(<TextAnimation content={content3} />)
            setText4(<TextAnimation content={content4} />)
        }}

        >
            <div className="flex items-center gap-2">
                <div className="h-3 w-3 bg-[#0075ff] rounded-full" />
                <div className="wrap">
                    <p className="text">About US</p>
                    <p className="text">About US</p>
                    <p className="text">About US</p>
                    <p className="crack"></p>
                </div>
            </div>
            <div className="h-1/2 w-full lg:w-2/3">

                {text1}
                {text2}

            </div>
            <div className="h-1/2 w-full lg:w-1/2 self-end text-justify">

                {text3}
                {text4}
            </div>
            <div className="self-end w-full lg:w-2/3 flex gap-10 text-xl ">
                {/* <div className="w-1/2 border-b border-white">
                <div className="wrap">
                    <p className="text">More About Us</p>
                    <p className="text">More About Us</p>
                    <p className="text">More About Us</p>
                    <p className="crack"></p>
                </div>
                </div>
                <div className="w-1/2 border-b border-white">
                <div className="wrap">
                    <p className="text">The Roadmap</p>
                    <p className="text">The Roadmap</p>
                    <p className="text">The Roadmap</p>
                    <p className="crack"></p>
                </div>
                </div> */}
                
                <Link to={'about'} className="wrap">
                    <p className="text">More About Us</p>
                    <p className="text">More About Us</p>
                    <p className="text">More About Us</p>
                    <p className="crack"></p>
                
                </Link>
                
                <div className="wrap">
                    <p className="text">The Roadmap</p>
                    <p className="text">The Roadmap</p>
                    <p className="text">The Roadmap</p>
                    <p className="crack"></p>
                
                </div>
            </div>
        </section>
    )
}

export default Screen2




const TextAnimation = ({ content }) => {
    return (
        // <p className='text-2xl'>
        //     {content.split(' ').map((e, index) => <> {e.split('').map((en, index) => <span key={index} className={`text-animation overflow-hidden h-8`}>{en}</span>)}</>)}
        // </p>
        <p className='lineUp text-2xl'>
            {content}
        </p>
    )
}