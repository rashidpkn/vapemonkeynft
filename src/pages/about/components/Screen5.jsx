import React from 'react'

function Screen5() {
  return (
    <div className='flex items-center flex-wrap flex-col bg-[#101010] gap-5 py-[5%]'>
            <span>AN INSIDE LOOK</span>
            <h2 className='text-5xl'>Meet the Team</h2>
            <div className="flex justify-center items-center flex-wrap gap-5">
                <Profile name='SM' designation='CO-Founder & CEO' image={'/image/home/nft/1.jpg'}/>
                <Profile name=' AF' designation='CO-Founder & CEO' image={'/image/home/nft/3.jpg'}/>
                {/* <Profile name='Ben Schinsky' designation='Blockchain Expert'/> */}
                {/* <Profile name='Justin Kochman' designation='Community Manager'/> */}
            </div>
    </div>
  )
}

export default Screen5


function Profile({name,designation,image}) {
    return(
        <div className="w-[365px] h-[442px] rounded-lg bg-[#121212] flex flex-col justify-center items-center gap-5">
            <div className="w-[300px] h-[300px] rounded-full bg-black overflow-hidden">
              <img src={image} className='w-full h-full' alt="" />
            </div>
            <h2 className='text-3xl font-medium'>{name}</h2>
            <h3 className='text-[#666]'>{designation}</h3>
        </div>
    )
}