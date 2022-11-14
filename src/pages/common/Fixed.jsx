import React from 'react'

function Fixed() {
  return (
    <>
        <div className="hidden md:flex fixed bottom-10 left-10  gap-3">
            <div className="h-14 w-48 bg-black rounded-full"></div>
            <div className="h-14 w-14 bg-white rounded-full"></div>
        </div>
        <div className="hidden md:flex fixed bottom-10 right-10 h-14 w-48 rounded-full bg-black"></div>
    </>
  )
}

export default Fixed