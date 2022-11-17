import React from 'react'
import FAQS from '../common/FAQS'
import Fixed from '../common/Fixed'
import Footer from '../common/Footer'
import NavBar from '../common/NavBar'
import Screen1 from './components/Screen1'
import Screen2 from './components/Screen2'
import Screen3 from './components/Screen3'
import Screen5 from './components/Screen5'

function About() {
  return (
    <div className='text-white'>
      <NavBar/>
      <img src="/image/about/bg.jpg" className='w-full h-screen fixed inset-0 mx-auto -z-10 object-cover' alt="" />
      <Screen1 />
      <Screen2 />
      <Screen3 />

      <Screen5 />
      <FAQS />
      <Fixed />
      <Footer />
    </div>
  )
}

export default About