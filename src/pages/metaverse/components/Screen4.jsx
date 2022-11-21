import React from 'react'
import Notes from '../Notes'

function Screen4() {
    return (
        <div className='px-[18%] py-[5%] w-full text-white'>
            <Notes title={'EGOZE METAVERSE'} heading='An Experience as unique as you' desc={'Our Metaverse is for the Explorer, player, earner, creator, and owner. The Metaverse is a Play to Earn open world MMO & Strategic Life Simulation game built upon Blockchain technology and is centered around NFT Staking and Farming.'}/>
            <div className="flex flex-col justify-center items-center gap-10 w-full text-4xl font-bold">
                <FirstRow />
                <SecondRow />
                <ThirdRow />
            </div>
        </div>
    )
}

export default Screen4


function FirstRow() {
    return (
        <div className="flex w-full bg-[#8549dc] rounded-3xl overflow-hidden ">
            <div className="w-2/5 h-96 flex  items-center px-[7%]">
                <h2 className=''>Incarnate and Evolve your EGOZE in game.</h2>
            </div>
            <img src="/image/metaverse/7.jpg" className='w-3/5 h-[400px] object-cover ' alt="" />
        </div>
    )
}

function SecondRow() {
    return (
        <div className="flex h-[525px] w-full gap-10">
            <div className="h-full w-2/6 bg-[#7fc400] rounded-3xl flex justify-center items-center px-[5%]">
                <h2 className='text-center'>Become an owner of land that you can potentially monetize.</h2>
            </div>

            <div className="h-full w-4/6 bg-[#ff9f05] rounded-3xl  relative">
                <h2 className='text-center px-[14.6%] pt-10'>Shape your EGOZE' lifestyle.Own your look.</h2>
                <img src="/image/metaverse/8.png" className='object-cover w-3/4 absolute inset-x-0 mx-auto bottom-0' alt="" />
            </div>
        </div>
    )
}

function ThirdRow() {
    return (
        <div className="flex h-[525px] w-full gap-10">
            <div className="h-full w-1/2 bg-[linear-gradient(315deg,#6700dd,#00e5ff)] rounded-3xl relative">
                <h2 className='text-center px-[14.6%] pt-10'>Buy and Sell Assets with the $EGO token.</h2>
                <img src="/image/metaverse/9.png" className='object-cover w-1/2 absolute inset-x-0 mx-auto bottom-10' alt="" />
            </div>
            <div className="h-full w-1/2 bg-[#fa2669] rounded-3xl relative">
            <h2 className='text-center px-[14.6%] pt-10'>Build Experiences. Connect with friends.</h2>
                <img src="/image/metaverse/10.png" className='object-cover w-full absolute inset-x-0 mx-auto bottom-0' alt="" />
            </div>
        </div>
    )
}