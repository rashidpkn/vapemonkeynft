import React from 'react'
import { useDispatch } from 'react-redux'
import { setRoadMap } from '../../../redux/slice/util'

function Screen3() {
  const dispatch = useDispatch()
  return (
    <div className='h-screen w-full flex flex-col justify-center items-center gap-5'>
       <span className='text-xs tracking-[0.2rem]'>ROADMAP</span>
        <h2 className='text-center text-[3.5rem]'>
          What we're doing
          <br />
          and where we're headed
        </h2>
        <button className='border border-[#ffffff45] text-lg px-3 py-2 rounded-xl ' onClick={() => { dispatch(setRoadMap(true)) }}>View the Roadmap</button>
    </div>
  )
}

export default Screen3