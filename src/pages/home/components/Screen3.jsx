import React from 'react'

function Screen3() {


  return (
    <section className='text-white flex flex-wrap justify-center items-center gap-5'>
      <div className="flex flex-col gap-5 max-w-[650px]">
        <div className="w-full h-24 flex flex-col justify-center">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 bg-[#0075ff] rounded-full" />
            {/* <h2>BENEFITS</h2> */}
            <div className="wrap">
                    <p className="text">BENEFITS</p>
                    <p className="text">BENEFITS</p>
                    <p className="text">BENEFITS</p>
                    <p className="crack"></p>
            </div>
          </div>
          <h2 className='text-3xl md:text-5xl'>We're different by design.</h2>
        </div>
        <div className="w-full min-h-[550px] border p-5 space-y-10">
          <div className="w-full  space-y-5">
            <h2 className='text-xl md:text-3xl'>One Vapemonkeydubai,</h2>
            <h2 className='text-2xl md:text-4xl linearcolor'>Limitless Possibilities.</h2>
          </div>
          <div className="w-full text-xl md:text-3xl space-y-5 divide-y divide-[#333]">
            <h2>Vapemonkeydubai Social App</h2>
            <h2 className=''>Play to Earn Gaming</h2>
            <h2>Sandbox Voxels</h2>
            <h2>Exclusive Airdrops</h2>
            <h2>Revenue Distributions</h2>
          </div>
          <div className="w-full">
            <p className=''>
            {/* text-[#636363] */}
              All Vapemonkeydubai live on the Ethereum Blockchain. We leverage logic in our ERC-721A smart contract(s) to reward and verify the Vapemonkeydubai
              community / holders.
            </p>
          </div>
        </div>
        <Marquee />
      </div>
      <div className="flex flex-col gap-5 max-w-[650px]">
        <div className="w-full h-24 invisible"></div>
        <img src="/image/home/image1.jpg" className='w-full h-[550px] object-cover' alt="vapemonkeynft banner" title='vapemonkeynft' />
        <div className="w-full  flex flex-wrap justify-center items-center gap-7">
          <Features icon={'/image/home/icon/icon1.svg'} title={'250+ Unique Traits'} />
          <Features icon={'/image/home/icon/icon2.svg'} title={'Fully 3D Avatars'} />
          <Features icon={'/image/home/icon/icon3.svg'} title={'Fully Decentralized'} />
          <Features icon={'/image/home/icon/icon4.svg'} title={'Fully Doxxed Team'} />
        </div>
      </div>
    </section>
  )
}

export default Screen3

function Marquee() {
  const src = [
    "/image/home/nft/1.jpg",
    "/image/home/nft/2.jpg",
    "/image/home/nft/3.jpg",
    "/image/home/nft/4.jpg",
    "/image/home/nft/5.jpg",
    "/image/home/nft/6.jpg",
    "/image/home/nft/7.jpg",
    "/image/home/nft/8.jpg",
  ]
  return (
    <div className="w-full h-48 overflow-hidden">
      <div className="track-horizontal flex">
        {
          src.map(e=><img key={e} className="w-[180px] h-[180px]" src={e} alt="nft" title='nft' />)
        }
        
      </div>
    </div>
  )
}

function Features({ title, icon }) {
  return (
    <div className="w-[300px] h-20 border border-[#4B4B4B] flex ">
      <div className="h-full w-1/4 bg-[#4B4B4B] flex justify-center items-center">
        <img src={icon} className='h-3/4 w-auto' alt={title} title={title} />
      </div>
      <div className="h-full w-3/4 flex items-center pl-3">{title}</div>
    </div>
  )
}
