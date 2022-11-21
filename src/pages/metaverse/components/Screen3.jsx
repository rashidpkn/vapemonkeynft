import React from 'react'
import Features from '../Features'
import Notes from '../Notes'

function Screen3() {
    return (
        <div className='px-[10%] py-[5%]'>
            <Notes title={'EGOZE GAMING'} heading='Monetize your Gaming Experience' desc={'We’re taking Play to Earn gaming to the next level. EGOZE gaming is built with Unreal Engine 5 and fully leverages blockchain technology which provides users the opportunity to earn $EGO tokens.'} />
            <div className=' flex justify-center items-center gap-20 flex-wrap'>
                <Features image='image/metaverse/4.png' title={'Secure Login'} desc='Login Securely with your Web3/ Metamask wallet.'/>
                <Features image='image/metaverse/5.png' title={'Earn $EGO'} desc='Earn $EGO tokens in game. Win races, get rewarded.'/>
                <Features image='image/metaverse/6.png' title={'Customize It'} desc='Fully customize every part of your vehicle.'/>
            </div>

        </div>
    )
}

export default Screen3