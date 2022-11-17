import React from 'react'
import Features from '../Features'

function Screen3() {
    return (
        <div className='px-[10%] py-[5%]'>
            {/* title */}
            <div className=' flex justify-center items-center gap-20 flex-wrap'>
                <Features image='image/metaverse/4.png' title={'Secure Login'} desc='Login Securely with your Web3/ Metamask wallet.'/>
                <Features image='image/metaverse/5.png' title={'Earn $EGO'} desc='Earn $EGO tokens in game. Win races, get rewarded.'/>
                <Features image='image/metaverse/6.png' title={'Customize It'} desc='Fully customize every part of your vehicle.'/>
            </div>

        </div>
    )
}

export default Screen3