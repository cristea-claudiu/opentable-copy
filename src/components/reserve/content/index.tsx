import React from 'react'
import ReserveHeader from './header'
import ReserveForm from './form'

const ReserveContent = () => {
  return (
    <div className="border-t h-screen text-black">
            <div className="py-9 w-3/5 m-auto ">
            <ReserveHeader/>
            <ReserveForm/>
            </div>
          </div>
  )
}

export default ReserveContent