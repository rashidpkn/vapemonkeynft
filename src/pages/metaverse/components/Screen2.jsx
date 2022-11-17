import React from 'react'
import Features from '../Features'

function Screen2() {
  return (
    <div className='px-[10%] py-[5%] flex justify-center items-center gap-20 flex-wrap'>
      <Features image='image/metaverse/1.png' title='Social Profiles' desc='Public or Private Profiles, your choice. Meet and connect with other players.'/>
      <Features image='image/metaverse/2.png' title='Secure Wallet' desc="The wallet lives directly in-app. Safely store your NFT's and tokens." />
      <Features image='image/metaverse/3.png' title='3D Gallery' desc='Connect your wallet and show off your collection in a 3D gallery.'/>
    </div>
  )
}

export default Screen2


