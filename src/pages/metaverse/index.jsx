import React from 'react'
import FAQS from '../common/FAQS'
import Fixed from '../common/Fixed'
import Footer from '../common/Footer'
import NavBar from '../common/NavBar'
import Screen2 from './components/Screen2'
import Screen3 from './components/Screen3'
import Screen4 from './components/Screen4'

function Metaverse() {
  return (
    <div className='bg-[#121212]'>
        <NavBar/>
        <Screen2/>
        <Screen3 />
        <Screen4 />

        <FAQS />
        <Fixed />
        <Footer />
    </div>
  )
}

export default Metaverse