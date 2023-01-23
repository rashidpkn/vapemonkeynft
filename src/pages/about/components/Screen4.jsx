import React, { useState } from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import { useEffect } from 'react';


function Screen4() {
    // const settings = {
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     autoplay: true,
    //     // speed: 2000,
    //     autoplaySpeed: 500,
    //     cssEase: "linear"
    // };

    const src = [
        "/image/home/nft/1.jpg",
        "/image/home/nft/3.jpg",
        "/image/home/nft/4.jpg",
        "/image/home/nft/5.jpg",
        "/image/home/nft/6.jpg",
        "/image/home/nft/7.jpg",
        "/image/home/nft/8.jpg",
    ]
    const [bgImage, setBgImage] = useState(src[1])
    const [times, setTimes] = useState(0)

    useEffect(() => {
        const intervalId = setInterval(() => {
            setBgImage(src[times])
            if (times === 6) {
                setTimes(0)
            } else {
                setTimes(times + 1)
            }
        }, 500)

        return () => clearInterval(intervalId);
// eslint-disable-next-line
    }, [times])




    return (
        <div className='px-[10%] py-[5%] flex flex-col lg:flex-row justify-between items-center bg-[#101010] gap-y-10'>
            <div className="w-full lg:w-1/2 h-full space-y-5">
                <h6>AN INSIDE LOOK</h6>
                <h2 className='text-[3.5rem]'>The Specs</h2>
                <p className='text-xl font-light'>Vape Monkey NFTs are digital tokens that use blockchain technology to store and secure the data associated with the token.
                    Blockchain is a decentralized, digital ledger that records transactions across a network of computers.</p>
                <p className='text-xl font-light'>Vape Monkey NFTs are created using non-fungible tokens (NFTs),
                    which are a type of digital asset that is stored on a blockchain.</p>
                <p className='text-xl font-light'>Vape Monkey NFTs can be bought and sold on various online marketplaces that support NFTs.
                    These marketplaces use smart contracts, which are self-executing contracts with the terms of the agreement between buyer and seller being directly written into lines of code.</p>
            </div>
            <div className="w-96 h-96 bg-cover bg-no-repeat" style={{ backgroundImage: `url(${bgImage})` }}>
                {/* <Slider {...settings}>
                    {src.map((e,index) => <img key={index} src={e} className='w-full h-full' />)}
                </Slider> */}
                {/* <iframe
                title='nfts'
                    src="https://player.vimeo.com/video/705808623?autoplay=1&amp;loop=1&amp;title=0&amp;byline=0&amp;portrait=0&amp;background=1"
                    className='w-96 h-96'
                    frameBorder="0" webkitallowfullscreen=""
                    mozallowfullscreen="" allowFullScreen="" data-ready="true">
                </iframe> */}
            </div>
        </div>
    )
}

export default Screen4