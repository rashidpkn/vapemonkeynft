// import React from 'react'
// import { useDispatch } from 'react-redux'
// import { Link, useLocation } from 'react-router-dom'
// import { setRoadMap } from '../../redux/slice/util'
import { Discode, InstagramLogo, TiwtterLogo } from './NavBar'
// import { Discount } from '@mui/icons-material'
// function Footer() {
//     return (
//         <footer className='text-white bg-[#121212]'>
//             <div className="flex flex-col lg:flex-row   border-y border-[#333] divide-x divide-[#333]">
//                 <div className="px-[5%] w-full lg:w-1/2 h-[420px] flex flex-col justify-center items-center gap-3">
//                     <div className="flex flex-col gap-3">
//                         <h2 className='text-3xl md:text-5xl'>Stay Up To Date With<br/> Vapemonkeydubai.</h2>
//                         <p className='text-justify'>Get the latest news and information about the Vapemonkeydubai NFT project.</p>
//                     </div>
//                     <div className="flex gap-3 justify-center flex-wrap">
//                         <button className='w-[100px] h-[100px] rounded-full bg-[#ff0097] hover:h-[90px] hover:w-[90px] duration-200'>JOIN NOW</button>
//                     </div>
//                 </div>
//                 <div className="w-full lg:w-1/2 h-[420px] flex flex-col divide-y divide-[#333]">
//                     <Navigation />
//                     <div className="w-full h-[120px] flex items-center justify-center lg:justify-start gap-10 px-0 lg:px-10 ">
//                         <div className="flex flex-col">
//                             <Link to={'/terms-and-privacy'}>
//                                 <span>Terms & Privacy Policy</span>
//                             </Link>
//                             <span>Licensing</span>
//                         </div>
//                         <div className="flex gap-5 invert">
//                             <a title='Social Media Links' aria-label='social Media links' target={'_blank'} rel="noreferrer" href='https://google.com' className="h-10 w-10 ">
//                                 <InstagramLogo />
//                             </a>
//                             <a title='Social Media Links' aria-label='social Media links' target={'_blank'} rel="noreferrer" href='https://twitter.com/monkey_dubai' className="h-10 w-10 ">
//                                 <TiwtterLogo />
//                             </a>
//                             <a title='Social Media Links' aria-label='social Media links' target={'_blank'} rel="noreferrer" href='https://discord.gg/NC3RXXh8' className="h-10 w-10 ">
//                                 <Discode />
//                             </a>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <CopyRight />
//         </footer>
//     )
// }

// export default Footer


// function Navigation() {
//     const dispatch = useDispatch()
//     const {pathname} = useLocation()
//     return (
//         <div className="w-full h-[300px] flex flex-col p-[5%] text-sm ">
//             <h2 className='tracking-[.2rem]'>NAVIGATION</h2>
//             <ul className="flex flex-col flex-wrap w-1/2 h-3/4 text-4xl font-light gap-x-5">
//                 <li className={`decoration-[#ff0097] ${pathname === '/' && 'line-through'} h-1/3 flex items-center`}><Link title='home' to={'/'}> Home </Link></li>
//                 <li className={`decoration-[#ff0097] ${pathname === '/about' && 'line-through'} h-1/3 flex items-center`}><Link title='about' to={'/about'}> About </Link></li>
//                 <li className={`decoration-[#ff0097] ${pathname === '/roadmaps' && 'line-through'} h-1/3 flex items-center cursor-pointer`} onClick={()=>{dispatch(setRoadMap(true))}}> Roadmaps </li>
//                 {/* <li className={`decoration-[#ff0097] ${pathname === '/meta' && 'line-through'} h-1/3 flex items-center`}><Link title='metaverse' to={'/meta'}> Metaverse </Link></li> */}
//                 <li className={`decoration-[#ff0097] ${pathname === '/contact' && 'line-through'} h-1/3 flex items-center`}><Link title='contact' to={'/contact'}> Contact </Link></li>
//                 {/* <li className='h-1/3 flex items-center text-lg'><Link title='press and media kit' to={'/press'}> Press/Media Kit </Link></li> */}
//             </ul>
//         </div>
//     )
// }


// function CopyRight() {
//     return (
//         <div className="flex justify-around items-center h-20">
//             <span>® 2023. Vapemonkeydubai. All Rights Reserved</span>
//             <span>Website by Vapemonkeydubai</span>
//         </div>
//     )
// }


import React from 'react'

function Footer() {
    return (
        <footer className="bg-black px-[5%] text-white py-5" >
            <div className="flex w-full flex-col items-center justify-center gap-5 py-10">
                <p className="text-center text-3xl font-semibold md:text-5xl">
                    Stay Up To Date <br className="hidden md:block" />
                    With Vape Monkey Dubai
                </p>
                <p className="text-lg font-medium md:text-2xl">Joint our discount channel</p>
                <a href='https://discord.gg/NC3RXXh8'>
                 <button className="rounded-full bg-[#ff0097] px-6 py-3 text-2xl font-medium flex  gap-3 items-center"> <div className="h-8 w-8"> <Discode /></div> JOIN</button>
                </a>
            </div>
            <div className="flex flex-col items-center gap-5 py-5 lg:flex-row lg:items-center lg:justify-end">

                <p className="text-center lg:text-start">
                    Terms & Privacy Policy <br />
                    Licencing
                </p>

                <div className="flex gap-5">

                    <a href="https://twitter.com/monkey_dubai">
                        <div className="h-10 w-10 rounded-full bg-white border">
                            <InstagramLogo />
                        </div>
                    </a>

                    <a href="https://google.com">
                        <div className="h-10 w-10 rounded-full bg-white border">
                            <TiwtterLogo />
                        </div>
                    </a>

                    <a href='https://discord.gg/NC3RXXh8'>
                        <div className="h-10 w-10 rounded-full bg-white border">
                            <Discode />
                        </div>
                    </a>


                </div>

            </div>
            <div className="py-5 flex flex-col md:flex-row justify-between items-center gap-5 text-center">
                <p> © 2023. Vape Monkey Dubai. All Right Reserved </p>
                <p>Website by Vape Monkey Dubai</p>
            </div>
        </footer>

    )
}

export default Footer