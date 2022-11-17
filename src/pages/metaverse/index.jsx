import React from 'react'
import Fixed from '../common/Fixed'
import Footer from '../common/Footer'
import NavBar from '../common/NavBar'
import Screen2 from './components/Screen2'
import Screen3 from './components/Screen3'

function Metaverse() {
  return (
    <div className='bg-[#121212]'>
        <NavBar/>
        <Screen2/>
        <Screen3 />
        <Fixed />
        <Footer />
    </div>
  )
}

export default Metaverse