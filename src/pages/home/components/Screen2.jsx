import React, { useState } from 'react'

function Screen2() {
    
    const [loadMore, setLoadMore] = useState(false)
    return (

        
        <section className='text-white space-y-10'>
            <h2 className='text-center text-3xl lg:text-5xl'>What is Vape Monkey NFT?</h2>
            <div className="px-[5%] space-y-5 text-justify ">
                <p className='text-lg lg:text-2xl'>Become the Hero of Your Vaping Story with Vape Monkey NFT Get a lifetime discount on Vape Monkey websites worldwide with our NFTs. Take control of your vaping journey and save big with our exclusive discount cards. Mint one of our handsome monkeys for 0.05 ETH to start saving today. Don't miss out on this opportunity to become the hero of your vaping story. Join the <span className='linearcolor'>Vape Monkey community</span>  now!</p>
                <p className='text-lg lg:text-2xl'>We understand that as a vaper, you're always looking for ways to save money on high-quality vaping products. It can be frustrating to search for discounts that fit your budget while still providing the quality you expect. We understand your struggle and are here to help. Enjoy lifetime discount by linking your NFT to your Vape Monkey account to receive the discount every time you order.</p>

                {!loadMore && <div className="flex justify-center items-center w-full">
                    <button className='text-neo-latina text-white text-2xl border px-5 py-3 rounded-md rounded-tl-3xl hover:rounded-tl-md rounded-br-3xl hover:rounded-br-md duration-200' onClick={()=>{setLoadMore(true)}}>Read More</button>
                </div>}

                {loadMore && <div className="space-y-5">
                    <p className=' text-2xl lg:text-4xl'>Choose Vape Monkey NFT as your guide to savings and get the following benefits:</p>
                    <ul className="ml-10 space-y-1  list-disc text-lg lg:text-2xl">
                        <li>A lifetime discount on Vape Monkey websites globally.</li>
                        <li>A chance to own a unique and exclusive NFT with cool artwork.</li>
                        <li>Confidence in a company voted number 1 vape store in the Middle East 2021.</li>
                        <li>Join a community on Discord for exclusive promotions and giveaways.</li>
                        <li>At Vape Monkey NFT, we are here to guide you to savings and success in your vaping journey. As fellow vapers, we understand the importance of quality and affordability. We are committed to providing you with both, and our NFTs are just the beginning. Trust us to be your guide and join the <span className='linearcolor'>Vape Monkey community </span> today.</li>
                    </ul>
                    <div className="flex justify-evenly items-center flex-wrap gap-10 py-5">
                            <div className="w-56  h-60 space-y-3">
                                <div className="h-12 w-full flex justify-center items-center">
                                    <p>Step 1</p>
                                </div>
                                <p className='text-center'>Mint one of our handsome monkeys for 0.05 ETH.</p>
                            </div>

                            <div className="w-56 h-60  space-y-3">
                                <div className="h-12 w-full flex justify-center items-center">
                                    <p>Step 2</p>
                                </div>
                                <p className='text-center'>Receive a lifetime discount on Vape Monkey websites globally.</p>
                            </div>


                            <div className="w-56  h-60 space-y-3">
                                <div className="h-12 w-full flex justify-center items-center">
                                    <p>Step 3</p>
                                </div>
                                <p className='text-center'>Start saving big on high-quality vaping products.</p>
                            </div>

                    </div>
                    {/* <ul className="ml-5 list-disc space-y-1">
                        <li className='text-lg lg:text-2xl'>Step 1: Mint one of our handsome monkeys for 0.05 ETH.</li>
                        <li className='text-lg lg:text-2xl'>Step 2: Receive a lifetime discount on Vape Monkey websites globally.</li>
                        <li className='text-lg lg:text-2xl'>Step 3: Start saving big on high-quality vaping products.</li>
                    </ul> */}
                    <p className='text-lg lg:text-2xl'>Join the Vape Monkey community now and mint your NFT to start saving today. Don't miss out on this chance to become the hero of your vaping story. 
                      <a href="https://mint.vapemonkeynft.io">  <button className='text-neo-latina text-white text-2xl border px-5 py-1 rounded-md rounded-tl-3xl hover:rounded-tl-md rounded-br-3xl hover:rounded-br-md duration-200'>Buy now!</button> </a>
                    </p>
                    <p className='text-lg lg:text-2xl'>Join the Vape Monkey community on Discord to get exclusive promotions and giveaways. Stay up-to-date on new products and brands onboarded by Vape Monkey. And remember, our NFTs aren't just another useless collectible. They are a valuable asset that will grow in value as we continue to expand and open new locations. Trust us to be your guide to savings and success in your vaping journey.</p>
                </div>}
            </div>
        </section>
    )
}

export default Screen2




// const TextAnimation = ({ content }) => {
//     return (
//         // <p className='text-2xl'>
//         //     {content.split(' ').map((e, index) => <> {e.split('').map((en, index) => <span key={index} className={`text-animation overflow-hidden h-8`}>{en}</span>)}</>)}
//         // </p>
//         <p className='lineUp text-2xl'>
//             {content}
//         </p>
//     )
// }