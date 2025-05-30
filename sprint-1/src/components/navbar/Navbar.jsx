import React from 'react'
import { navItems } from '../../data/data'
import {Link} from 'react-scroll'
import {HiMiniBars3BottomLeft} from 'react-icons/hi2'


const Navbar = ({openNav}) => {
  return (
    <div className='w-full h-[12vh] fixed bg-black text-white transition-all duration-200 z-[1000]'>
        <div className='flex items-center h-full  justify-between w-[90%] xl:w-[80%] mx-auto'>
            <div>
                <h1 className='text-orange-400 uppercase font-bold text-xl md:text-3xl cursor-pointer'>Bloom</h1>
            </div>
            <div className='hidden lg:flex items-center space-x-10'>
                 {navItems.map(({link,path})=>(
                <Link key={path} className="relative uppercase text-white text-base font-medium w-fit block hover:text-orange-400 cursor-pointer"
                to={path} spy={true} offset={-100} smooth={true}>{link}</Link>
              ))}   
            </div>
            <div className=' flex items-center lg:hidden'> 
                <HiMiniBars3BottomLeft  onClick={openNav} className='w-8 h-8 cursor-pointer text-white lg:hidden'/>

            </div>
        </div>
    </div>
  )
}

export default Navbar