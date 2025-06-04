import React from 'react'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='min-h-screen h-auto pb-40  bg-slate-200'>
        <Navbar/>
        <div className='w-[80%] m-auto my-4 bg-white'>
            <Outlet />
        </div>
      </div>
  )
}

export default Layout