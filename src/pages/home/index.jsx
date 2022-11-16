import React from 'react'
import Fixed from '../common/Fixed'
import Footer from '../common/Footer'
import Screen1 from './components/Screen1'
import Screen2 from './components/Screen2'
import Screen3 from './components/Screen3'
import Screen5 from './components/Screen5'

function Home() {
    return (
        <div className='bg-[#121212] flex flex-col gap-10'>
            <Screen1 />
            <Screen2 />
            <Screen3 />
            <Screen5 />
            <Fixed />
            <Footer />
        </div>
    )
}

export default Home