import React from 'react'

function Screen3() {
  return (
    <div className='text-white flex flex-wrap justify-center items-center gap-5'>
        <div className="flex flex-col gap-5 max-w-[650px]">
          <div className="w-full h-24 flex items-center">
            <h2 className='text-5xl'>We're different by design.</h2>
          </div>
          <div className="w-full h-[500px] border"></div>
          <div className="w-full h-48 border"></div>
        </div>
        <div className="flex flex-col gap-5 max-w-[650px]">
          <div className="w-full h-24 invisible"></div>
          <img src="/image/home/image1.jpg" className='w-full h-[500px] object-cover' alt="" />
          <div className="w-full  flex flex-wrap justify-center items-center gap-7">
            <Features icon={'/image/home/icon/icon1.svg'} title={'250+ Unique Traits'}/>
            <Features icon={'/image/home/icon/icon2.svg'} title={'Fully 3D Avatars'}/>
            <Features icon={'/image/home/icon/icon3.svg'} title={'Fully Decentralized'}/>
            <Features icon={'/image/home/icon/icon4.svg'} title={'Fully Doxxed Team'}/>
          </div>
        </div>
    </div>
  )
}

export default Screen3

function Features({title,icon}) {
  return(
    <div className="w-[300px] h-20 border flex ">
      <div className="h-full w-1/4 bg-[#4B4B4B] flex justify-center items-center">
        <img src={icon} className='h-3/4 w-auto' alt="" />
      </div>
      <div className="h-full w-3/4 flex items-center pl-3">{title}</div>
    </div>
  )
}