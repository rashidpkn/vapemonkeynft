import React from 'react'
import metaMaskIcon from './step/metaMask.svg'
import ETHIcon from './step/ETH.svg'
import nftIcon from './step/nft.svg'

import redeem from './step/redeem.svg'
import metamaskDownloadIcon from './step/metaMask-download.png'
import ethBuy from './step/ETH-buy.png'


import { useState } from 'react'
import { useEffect } from 'react'

function Screen4() {
    const [selected, setSelected] = useState(0)

    useEffect(() => {

        console.log(selected);
    }, [selected])


    return (
        <div className='space-y-10'>
            <h2 className='text-center text-3xl md:text-5xl text-white'>How It Works ?</h2>
            <div className='w-full  flex flex-col justify-center items-center gap-10 text-white  overflow-x-auto'>
                <div className="w-[1000px] space-y-7 py-10 ">

                    <div className="flex justify-between items-center w-full">
                        <p className='hover:rotate-[360deg] duration-500 cursor-pointer'>Step 1</p>
                        <p className='hover:rotate-[360deg] duration-500 cursor-pointer'>Step 2</p>
                        <p className='hover:rotate-[360deg] duration-500 cursor-pointer'>Step 3</p>
                        <p className='hover:rotate-[360deg] duration-500 cursor-pointer'>Step 4</p>
                    </div>

                    <div className="flex justify-between items-center w-full px-4 relative">
                        <div className="p-1 rounded-full bg-white"></div>
                        <div className="p-1 rounded-full bg-white"></div>
                        <div className="p-1 rounded-full bg-white"></div>
                        <div className="p-1 rounded-full bg-white"></div>
                        <div className="absolute w-full px-4 left-0">
                            <div className="w-full h-[1px] bg-white rounded-full"></div>
                        </div>
                    </div>

                    <div className="flex justify-between items-center w-full">
                        <div className=" relative flex flex-col gap-3 justify-center items-center hover:scale-110 duration-200 cursor-pointer" onClick={() => { setSelected(1) }} >
                            <div className="absolute w-full h-full bg-[#F5841F]/60" style={{ filter: 'blur(46px)' }}></div>
                            <img className='relative' src={metaMaskIcon} alt="" />
                            <p>METAMASK</p>
                            <p className='text-[14px] text-center'>Download MetaMask <br />
                                from the wallet’s website.</p>
                        </div>
                        <div className=" relative flex flex-col gap-3 justify-center items-center hover:scale-110 duration-200 cursor-pointer" onClick={() => { setSelected(2) }} >
                            <div className="absolute w-full h-full bg-[#E57FED]/60" style={{ filter: 'blur(46px)' }}></div>
                            <img className='relative' src={ETHIcon} alt="" />
                            <p className='text-[14px] text-center'>Download MetaMask <br />
                                from the wallet’s website.</p>
                        </div>
                        <div className=" relative flex flex-col gap-3 justify-center items-center hover:scale-110 duration-200 cursor-pointer" onClick={() => { setSelected(3) }} >
                            <div className="absolute w-full h-full bg-[#6000B6]/60" style={{ filter: 'blur(46px)' }}></div>
                            <img className='relative' src={nftIcon} alt="" />
                            <p className='text-[14px] text-center'>Download MetaMask <br />
                                from the wallet’s website.</p>
                        </div>
                        <div className=" relative flex flex-col gap-3 justify-center items-center hover:scale-110 duration-200 cursor-pointer" onClick={() => { setSelected(4) }} >
                            <div className="absolute w-full h-full bg-[#5AACA7]/60" style={{ filter: 'blur(46px)' }}></div>
                            <img className='relative' src={redeem} alt="" />
                            <p className='text-[14px] text-center'>Download MetaMask <br />
                                from the wallet’s website.</p>
                        </div>
                    </div>
                    {/* <div className="flex justify-between items-center w-full text-center">
                        <p className='text-[14px]'>Download MetaMask <br />
                            from the wallet’s website.</p>
                        <p className='text-[14px]'>Funding Your <br />
                            MetaMask Wallet with ETH</p>
                        <p className='text-[14px]'>Buying the <br />
                            VapeMonkey NFT</p>
                        <p className='text-[14px]'>Redeeming <br /> the Discount</p>
                    </div> */}
                </div>

                <div className="flex justify-center items-center">
                    <button className='bg-white text-black w-[256px] h-[56px] rounded hover:scale-110 duration-200' onClick={() => { setSelected(1) }}>View Full Process</button>
                </div>

            </div>

            {selected !== 0 && <div className="fixed h-screen w-full -top-10 left-0 z-50 bg-black/90 flex justify-center  overflow-y-auto py-10">
                {selected === 1 && <Selected1 setSelected={setSelected} />}
                {selected === 2 && <Selected2 setSelected={setSelected} />}
                {selected === 3 && <Selected3 setSelected={setSelected} />}
                {selected === 4 && <Selected4 setSelected={setSelected} />}
                <div className="flex justify-between absolute w-[1200px] bottom-10 ">
                    <button className='bg-white text-black px-8 py-2 rounded hover:scale-110 duration-200' onClick={() => { setSelected(selected - 1) }}>BACK</button>
                    <button className='bg-white text-black px-8 py-2 rounded hover:scale-110 duration-200' onClick={() => { selected ===4 ? setSelected(0)  :setSelected(selected +1) }}>NEXT</button>
                </div>
            </div>}
        </div>
    )
}

export default Screen4



const Selected1 = ({ setSelected }) => {
    return (
        <div className="selected-1 px-[5%] md:px-[10%] text-white space-y-5 w-[1300px]">
            <div className="flex  items-center gap-5">
                <div className="w-[100px] h-[100px] relative flex flex-col gap-3 justify-center items-center hover:scale-110 duration-200" >
                    <div className="absolute w-full h-full bg-[#F5841F]/60" style={{ filter: 'blur(46px)' }}></div>
                    <img className='relative' src={metaMaskIcon} alt="" />
                    <p>METAMASK</p>
                </div>
                <p className='text-white text-xl lg:text-[30px] font-semibold'>Download MetaMask from the wallet’s website.</p>
            </div>
            <p className='text-xl'>Download MetaMask from the wallet’s website or click “Download Now” Button. </p>
            <a href="https://metamask.io" target="_blank" rel="noopener noreferrer">
                <button className='bg-white text-black w-[256px] h-[56px] rounded hover:scale-110 duration-200' >Downlaod Now</button>
            </a>
            <p className='text-xl'>MetaMask can be added to several browsers such as Brave, Google Chrome, Edge, Firefox, as well as Android or iOS mobile devices.</p>

            <p className='text-xl'>1.Click on ‘Download’. A new tab will open and you’ll be able to add MetaMask to your browser.</p>

            <div className="flex justify-center">
                <img src={metamaskDownloadIcon} height={72} alt="" />
            </div>

            <p className='text-xl'>2.Complete the on screen process for creating you MetaMask account.</p>

            <div className="w-full p-5 bg-black/10 text-sm space-y-5">
                <p>Note:</p>
                <ul className='list-disc'>
                    <li>If you’ve used MetaMask before, you’ll already have a secret recovery phrase, which can restore your wallet on any device by importing the seed phrase. Otherwise, you can create a new wallet, after which you can agree or decline the request for user data.</li>
                    <li>Copy Keep your “Secret Backup Phrase” It’s important to keep this safe and never share it with anyone.</li>
                </ul>
            </div>
        </div>
    )
}

const Selected2 = ({ setSelected }) => {
    return (
        <div className="selected-2 px-[10%] text-white space-y-5 w-[1300px]">
            <div className="flex  items-center gap-5">
                <div className="w-[100px] h-[100px] relative flex justify-center items-center hover:scale-110 duration-200 cursor-pointer" >
                    <div className="absolute w-full h-full bg-[#E57FED]/60" style={{ filter: 'blur(46px)' }}></div>
                    <img className='relative' src={ETHIcon} alt="" />
                </div>
                <p className='text-white text-xl lg:text-[30px] font-semibold'>Funding Your MetaMask Wallet with ETH</p>
            </div>
            <p className='text-xl'>Now that your MetaMask wallet is set up, you can add ETH to your account.</p>

            <p className='text-xl'>1.Click on 'Buy' to add ETH to your wallet</p>

            <img src={ethBuy} alt="" height={250} />

            <p className='text-xl'>2.Choose your country and preferred payment method and proceed to make payment</p>

            

        </div>
    )
}

const Selected3 = ({ setSelected }) => {
    return (
        <div className="selected-1 px-[10%] text-white space-y-5 w-[1300px]">
            <div className="flex  items-center gap-5">
                <div className="w-[100px] h-[100px] relative flex justify-center items-center hover:scale-110 duration-200 cursor-pointer"  >
                    <div className="absolute w-full h-full bg-[#6000B6]/60" style={{ filter: 'blur(46px)' }}></div>
                    <img className='relative' src={nftIcon} alt="" />
                </div>
                <p className='text-white text-xl lg:text-[30px] font-semibold'>Buying the VapeMonkey NFT</p>
            </div>

            <p className='text-xl'>1. Navigate to the VapeMonkey NFT Marketplace</p>

            <div className="flex gap-5 items-center">
                <button className='bg-white text-black w-[256px] h-[56px] rounded hover:scale-110 duration-200'>NFT Marketplace</button>
                <span>or</span>
                <p>www.vapemonkeynft.io</p>
            </div>

            <p className='text-xl'>2. Connect your MetaMask wallet and authorize your Ethereum account.</p>

            <p className='text-xl'>3. The mint price for a VapeMonkey NFT is 0.05 ETH. Make sure you have enough ETH in your wallet to purchase the NFT.</p>

            <p className='text-xl'>4. Follow the instructions on the website to mint (purchase) your VapeMonkey NFT.</p>

          

        </div>
    )
}

const Selected4 = ({ setSelected }) => {
    return (
        <div className="selected-1 px-[10%] text-white space-y-10 w-[1300px]">
            <div className="flex  items-center gap-5">
                <div className="w-[100px] h-[100px] relative flex justify-center items-center hover:scale-110 duration-200 cursor-pointer" >
                    <div className="absolute w-full h-full bg-[#5AACA7]/60" style={{ filter: 'blur(46px)' }}></div>
                    <img className='relative' src={redeem} alt="" />
                </div>
                <p className='text-white text-xl lg:text-[30px] font-semibold'>Redeeming the Discount.</p>
            </div>
            <ol className='list-decimal text-xl space-y-3'>
                <li> After purchasing your VapeMonkey NFT, you can reveal a unique discount code. To do this, create an account on the VapeMonkey NFT website. This account will automatically connect to your VapeMonkey account.</li>
                <li>Go to the Vape Monkey website.</li>
                <li>Shop for the products you want and add them to your cart.</li>
                <li>Proceed to checkout. Enter your unique discount code in the appropriate box during checkout. Thediscount should be applied to your total purchase.</li>
            </ol>
           
        </div>
    )
}