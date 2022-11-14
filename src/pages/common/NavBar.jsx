import React, { useState } from 'react'

function NavBar() {
    const [social, setSocial] = useState(false)
    const [menu, setMenu] = useState(false)
    return (
        <div className='fixed right-10 top-10 flex gap-3 z-50'>
            <div className={`${menu ? 'hidden' : 'flex gap-3'}`}>
                <div className={`duration-200  bg-white rounded-full ${social ? 'w-10 h-10' : 'w-0 h-0'}`}></div>
                <div className={`duration-200  bg-white rounded-full ${social ? 'w-10 h-10' : 'w-0 h-0'}`}></div>
                <div className={`duration-200  bg-white rounded-full ${social ? 'w-10 h-10' : 'w-0 h-0'}`}></div>
                <div className="w-10 h-10 bg-white rounded-full" onClick={() => setSocial(!social)}></div>
            </div>
            <div className="hidden lg:flex w-[78px] h-[42px] rounded-3xl bg-white" onClick={() => setMenu(!menu)}></div>
        </div>
    )
}

export default NavBar