import React from 'react'

import { Link } from 'react-scroll'
import { CgClose } from 'react-icons/cg'
import { navItems } from '../../data/data';

const MobileNav = ({closeNav,showNav}) => {
    const navOpen=showNav?"translate-x-0":"translate-x-[-100%]";
  return (
    <div className={`fixed  ${navOpen} inset-0 transform transition-all duration-500 z-[1002] 
    opacity-100 w-full h-screen`}>
        <div  className={`text-white   ${navOpen} fixed justify-center flex  flex-col
      h-full transform transition-all duration-500 delay-300 w-[80%]
       sm:w-[60%] bg-black space-y-6 z-[1050]`}>
           {navItems.map(({link,path})=>(
             <Link onClick={closeNav} key={path} to={path} spy={true} offset={-100} smooth={true}
             className='text-white w-fit text-[20px] ml-12
             border-b-[1.5px] pb-1 border-white sm:text-[30px]
              cursor-pointer '>{link}</Link>
           ))}
            <CgClose onClick={closeNav} className='absolute top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 
           w-6 h-6 cursor-pointer'/>
        </div>

    </div>
  )
}

export default MobileNav