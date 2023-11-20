import React, { Children } from 'react'
import Navbar from './navbar'

const NavHeader = (children:React.ReactNode) => {
  return (
    <main className="bg-gray-100 min-h-screen w-screen text-black">
        <main className="max-w-screen-2xl ,m-auto bg-white">
            <Navbar/>
            [children]
        </main>
  </main>
  )
}

export default NavHeader