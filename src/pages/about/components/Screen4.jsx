import React from 'react'

function Screen4() {
    return (
        <div className='px-[10%] py-[5%] flex flex-col lg:flex-row justify-between items-center bg-[#101010] gap-y-10'>
            <div className="w-full lg:w-1/2 h-full space-y-5">
                <h6>AN INSIDE LOOK</h6>
                <h2 className='text-[3.5rem]'>The Specs</h2>
                <p className='text-xl font-light'>Each EGOZE is unique and programmatically generated from over 250 possible traits,
                    including accessories, headwear, clothing, and more.</p>
                <p className='text-xl font-light'>All EGOZE are dope, but some are more rare than others. EGOZE are stored as ERC-721A
                    tokens on the Ethereum blockchain and will be hosted on IFPS.</p>
                <p className='text-xl font-light'>To access members only areas, EGOZE holders will need to be signed into their
                    Metamask wallet.</p>
            </div>
            <div className="">
                <iframe
                title='nfts'
                    src="https://player.vimeo.com/video/705808623?autoplay=1&amp;loop=1&amp;title=0&amp;byline=0&amp;portrait=0&amp;background=1"
                    className='w-96 h-96'
                    frameBorder="0" webkitallowfullscreen=""
                    mozallowfullscreen="" allowFullScreen="" data-ready="true">
                </iframe>
            </div>
        </div>
    )
}

export default Screen4