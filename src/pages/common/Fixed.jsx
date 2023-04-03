import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setRoadMap } from '../../redux/slice/util'

function Fixed() {
  const dispatch = useDispatch()
  return (
    <>
      <div className="fixed bottom-5 md:bottom-10 left-5 md:left-10  gap-3">
        <button aria-label="Road map" title='Road map' className="px-2 md:px-4  py-2 md:py-3 bg-[#212121] hover:invert duration-700 rounded-full flex items-center justify-center gap-5" onClick={() => { dispatch(setRoadMap(true)) }}>
          <img src="/image/common/road-map.svg" className='w-9 h-9' alt="road map" title='road map' />
          <span className='text-xs text-white  w-20 md:w-32 flex justify-center items-center font-medium'>THE ROADMAP</span>
        </button>
      </div>
      <div className="fixed bottom-5 md:bottom-10 right-5 md:right-10  gap-3">
        <a href="https://mint.vapemonkeynft.io">
          <button aria-label="Road map" title='MINT NOW' className="px-2 md:px-4  py-2 md:py-3 bg-[#212121] hover:invert duration-700 rounded-full flex items-center justify-center gap-5" >
            <img src="/image/home/nft/5.jpg" className='w-9 h-9 rounded-full' alt="road map" title='road map' />
            <span className='text-xs text-white  w-20 md:w-32 flex justify-center items-center font-medium'>MINT NOW</span>
          </button>
        </a>
      </div>

      <RoadMap />
    </>
  )
}

export default Fixed

const roadmap = [
  {
    image: '/image/roadmap/1.jpg',
    date: 'Q1,1st May, 2023',
    title: 'Whitelist',
    desc: "50 of the 10,000 Vape Monkey NFT's are made available for sale whitelis on 1st May 2023."
  },
  {
    image: '/image/roadmap/2.jpg',
    date: 'Q2, 8th May, 2023',
    title: 'Public Launch',
    desc: "The remaining 9950  Vape Monkey NFT's are made available for sale to the public on 8th May 2023."
  },
  {
    image: '/image/roadmap/3.jpg',
    date: 'Q3, 2023',
    title: 'New Locations',
    desc: 'Launch in Thailand and Sri Lanka.'
  },
  {
    image: '/image/roadmap/5.jpg',
    date: 'Q4, 2023',
    title: 'Vape Monkey NFT Social',
    desc: <>We are social, follow us on 
    <a href="https://twitter.com/monkey_dubai"> Twitter</a>
    , 
    <a href='https://discord.gg/NC3RXXh8'> Discord</a>
    , 
    <a href="https://google.com"> Instagram </a>
    and join our community.</>
  },
  {
    image: '/image/roadmap/7.jpg',
    date: 'Q4, 2023',
    title: 'Spend To Save',
    desc: 'By owning Vapemonkey use case NTF to redeem on vapemonkey websites globally.'
  },
  
]







const RoadMap = () => {
  const dispatch = useDispatch()
  const { roadMap } = useSelector(state => state.util)
  return (
    <div className={` ${roadMap ? 'w-full  md:w-3/4 2xl:w-1/2 p-[5%]' : 'w-0'} space-y-5 duration-500 fixed  h-screen top-0 left-0  bg-[#171717] z-[999] text-white overflow-y-scroll`}>
      <div className="flex  justify-between gap-10">
        <div className={`${roadMap ? null : 'hidden'} space-y-5`}>
          <h2 className='text-2xl font-medium'>Our Roadmap</h2>
          <p className='text-base text-[#cccccc]'>
            We’re in this for the long haul. Once we hit our target sell through rates,
            demand generation goals, and KPI’s we will triple-down on realizing the stated goal.
          </p>
        </div>
        <button className="h-16 w-16 bg-white rounded-full flex-shrink-0 flex justify-center items-center p-3 rotate-45 hover:rotate-[225deg] duration-500" onClick={() => { dispatch(setRoadMap(false)) }}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32.22 32.22"><defs></defs><g id="a" />
            <g id="b">
              <g id="c">
                <polygon className='fill-[#231f20]'
                  points="32.22 15.11 17.11 15.11 17.11 0 15.11 0 15.11 15.11 0 15.11 0 17.11 15.11 17.11 15.11 32.22 17.11 32.22 17.11 17.11 32.22 17.11 32.22 15.11" />
              </g>
            </g>
          </svg>
        </button>
      </div>
      <div className={`${roadMap ? null : 'hidden'} roadmap space-y-10  xl:ml-10 p-5 xl:p-10 border-l`}>
        {roadmap.map(e => <MileStone key={e.title} image={e.image} date={e.date} title={e.title} desc={e.desc} />)}
      </div>
    </div>
  )
}



const MileStone = ({ image, date, title, desc }) => {
  return (
    <div className="h-full w-full flex flex-col md:flex-row gap-4">

      <img src={image} className='w-full md:w-1/2 object-cover rounded-md' alt={title} />

      <div className="w-full md:w-1/2 flex flex-col justify-center space-y-2">
        <span className='text-xs font-medium text-[#cccccc]'>{date}</span>
        <h3 className='text-4xl font-semibold'>{title}</h3>
        <hr className='w-1/3 h-[2px] bg-[#ccc]' />
        <p className='text-[16px] text-[#cccccc]'>{desc}</p>
      </div>
    </div>
  )
}

// function MonkeySVG() {
//   return (<svg xmlns="http://www.w3.org/2000/svg" width="45" height="46" viewBox="0 0 45 46" fill="none">
//     <g clipPath="url(#clip0_10_94)">
//       <path d="M22.4968 45.1534C34.9214 45.1534 44.9935 35.1886 44.9935 22.8965C44.9935 10.6043 34.9214 0.639526 22.4968 0.639526C10.0721 0.639526 0 10.6043 0 22.8965C0 35.1886 10.0721 45.1534 22.4968 45.1534Z" fill="white" />
//       <path d="M14.7717 15.5542C14.623 15.8292 14.4872 16.1106 14.3773 16.3984C14.3579 16.4368 14.345 16.4688 14.3385 16.4815C14.2157 16.7949 14.1058 17.1019 14.0282 17.4089L14.0088 17.4857C13.8278 18.1892 13.7373 18.9119 13.7373 19.6474V23.9901C13.2719 23.843 12.425 23.4848 11.7592 22.6534C11.0093 21.7068 10.7248 20.4533 10.9382 18.9119C11.1062 17.7095 11.5781 16.8077 12.3474 16.2449C13.149 15.6565 14.1058 15.5414 14.7329 15.5414H14.7717V15.5542Z" fill="black" />
//       <path d="M17.2606 30.7951H27.8173V32.2341C25.8521 34.0377 22.8525 34.0825 22.5099 34.0825H22.4775C22.1478 34.0825 19.2194 34.0313 17.2606 32.3045V30.7951V30.7951Z" fill="black" />
//       <path d="M27.0868 28.627C27.0868 28.8125 26.9317 28.9723 26.7442 28.9723H18.2433C18.0558 28.9723 17.9006 28.8125 17.9006 28.627C17.9006 28.4415 18.0558 28.2816 18.2433 28.2816H26.7442C26.9317 28.2816 27.0868 28.4351 27.0868 28.627Z" fill="black" />
//       <path d="M29.0132 27.1368C28.121 25.8448 25.8714 25.1285 22.5033 25.0646C19.1223 25.1285 16.8727 25.8448 15.9805 27.1368C15.4246 27.9362 15.3923 28.9979 15.8771 30.2962C16.0387 30.7375 16.265 31.1533 16.543 31.5242V30.7503C16.543 30.3794 16.8468 30.0788 17.2217 30.0788H27.856C28.2374 30.0788 28.5412 30.3794 28.5412 30.7503V31.4155C28.7804 31.0701 28.9744 30.6992 29.123 30.2962C29.6079 28.9979 29.5691 27.9362 29.0196 27.1368H29.0132ZM26.7441 29.7078H18.2431C17.6419 29.7078 17.1506 29.2218 17.1506 28.627C17.1506 28.0322 17.6419 27.5397 18.2431 27.5397H26.7441C27.3453 27.5397 27.8366 28.0258 27.8366 28.627C27.8366 29.2282 27.3453 29.7078 26.7441 29.7078Z" fill="black" />
//       <path d="M28.4249 19.8712C28.4249 20.7922 27.6685 21.5341 26.7441 21.5341H18.2561C17.3317 21.5341 16.5753 20.7922 16.5753 19.8712C16.5753 18.9503 17.3317 18.2084 18.2561 18.2084H26.7441C27.6685 18.2084 28.4249 18.9567 28.4249 19.8712Z" fill="black" />
//       <path d="M30.4871 19.059C30.4871 19.0015 30.4871 18.9567 30.4742 18.9055C30.429 18.445 30.3449 17.9909 30.2286 17.5624V17.5496C30.2286 17.5496 30.2156 17.5113 30.2092 17.4921C30.151 17.2938 30.0928 17.1083 30.0217 16.9293C30.0217 16.8973 30.0023 16.8717 29.9958 16.8525C29.8536 16.4816 29.692 16.1362 29.5045 15.81C29.4787 15.7589 29.4528 15.7205 29.4269 15.6693C29.0843 15.0873 28.6577 14.5309 28.1599 14.0384C28.0112 13.8913 27.8625 13.757 27.7138 13.6291C27.675 13.5971 27.6492 13.5779 27.6233 13.5524C26.1947 12.3692 24.4492 11.736 22.5809 11.7168H22.4904C20.5899 11.7168 18.8121 12.35 17.3576 13.546L17.3123 13.5843C17.3123 13.5843 17.2735 13.6163 17.2606 13.6291C17.1054 13.757 16.9568 13.8977 16.8081 14.0384C16.362 14.4797 15.9677 14.9722 15.638 15.503L15.5604 15.6309C15.3212 16.0211 15.1273 16.4304 14.9721 16.8397C14.9592 16.8717 14.9463 16.8973 14.9398 16.9165C14.8622 17.1211 14.8105 17.3002 14.7523 17.4793C14.7523 17.4793 14.7523 17.5049 14.7523 17.5177L14.7394 17.556C14.623 17.9973 14.5325 18.445 14.5002 18.8991L14.4873 19.059C14.4679 19.2509 14.4614 19.4492 14.4614 19.6538V27.1815C14.4614 28.0577 14.6166 28.9084 14.9269 29.7142C14.6618 28.5438 14.8105 27.5397 15.3729 26.721C16.3879 25.25 18.6505 24.4506 22.122 24.3355V24.3227H22.8783V24.3355C26.3498 24.4442 28.6253 25.25 29.6403 26.7146C30.1704 27.4821 30.3385 28.3967 30.1445 29.4648C30.3902 28.7357 30.5195 27.9682 30.5195 27.1815V19.6538C30.5195 19.4747 30.5195 19.2765 30.5001 19.059H30.4871ZM21.8311 23.9837C21.7599 24.0093 21.7018 24.0285 21.6307 24.0285C21.3721 24.0285 21.107 23.8366 20.9777 23.5424C20.8937 23.3697 20.8808 23.1778 20.9195 23.0116C20.9648 22.8261 21.0747 22.6918 21.2298 22.6214C21.385 22.5511 21.5595 22.5703 21.7276 22.6598C21.8763 22.7429 22.0056 22.89 22.0832 23.0627C22.2513 23.4401 22.1349 23.8494 21.8311 23.9773V23.9837ZM24.0161 23.5424C23.8868 23.8366 23.6217 24.0285 23.3567 24.0285C23.2921 24.0285 23.2274 24.0093 23.1563 23.9837C22.8525 23.8558 22.7426 23.4401 22.9042 23.0691C22.9818 22.89 23.111 22.7493 23.2597 22.6662C23.4278 22.583 23.6024 22.5639 23.7575 22.6278C23.9127 22.6982 24.0226 22.8325 24.0678 23.0179C24.1131 23.1842 24.0937 23.3761 24.0161 23.5488V23.5424ZM26.7377 22.2888H18.2497C16.905 22.2888 15.819 21.208 15.819 19.8777C15.819 18.5474 16.905 17.4665 18.2497 17.4665H26.7377C28.0823 17.4665 29.1684 18.5474 29.1684 19.8777C29.1684 21.208 28.0823 22.2888 26.7377 22.2888Z" fill="black" />
//       <path d="M34.0621 18.9183C34.2754 20.4597 33.991 21.7132 33.2411 22.6598C32.5559 23.5168 31.6638 23.8686 31.2371 24.0029V19.6538C31.2371 18.9247 31.1466 18.1956 30.9591 17.4921L30.9397 17.4154C30.8557 17.1084 30.7522 16.8078 30.6359 16.4944L30.5971 16.4112C30.4872 16.1298 30.3514 15.8484 30.1963 15.5606C30.7652 15.5606 31.806 15.6374 32.6593 16.2641C33.4286 16.827 33.9005 17.7287 34.0686 18.9311L34.0621 18.9183Z" fill="black" />
//     </g>
//     <defs>
//       <clipPath id="clip0_10_94">
//         <rect width="45" height="44.5203" fill="white" transform="translate(0 0.639526)" />
//       </clipPath>
//     </defs>
//   </svg>)
// }

// function PlayButton() {
//   return (
//     <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 45 45" fill="none">
//       <path d="M22.5 44.2717C34.9264 44.2717 45 34.3611 45 22.1358C45 9.91055 34.9264 0 22.5 0C10.0736 0 0 9.91055 0 22.1358C0 34.3611 10.0736 44.2717 22.5 44.2717Z" fill="white" />
//       <path d="M17.5637 14.4326V30.0809L29.9894 22.2599L17.5637 14.4326Z" fill="black" />
//     </svg>
//   )
// }