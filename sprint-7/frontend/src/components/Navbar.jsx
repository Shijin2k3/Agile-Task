import React from 'react';
import { FaShoppingCart } from 'react-icons/fa'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='w-ful h-20 bg-gray-300 border-none shadow-lg flex items-center justify-between px-6  sticky  top-0 z-50'>
        <Link className='flex flex-col items-center p-1 md:p-6' to={'/'}> 
        <span className='font-bold text-2xl'>Ecom</span>
        </Link>
         <NavLink
        to="/"
        className={({ isActive }) =>
          "md:text-xl font-bold" + (isActive ? " text-blue-700" : "")
        }
        end
      >
        <span>Products</span>
      </NavLink>
      <NavLink
        to="/cart"
        className={({ isActive }) =>
          "relative flex items-center" + (isActive ? " text-blue-700" : "")
        }
      >
        <FaShoppingCart className="text-2xl cursor-pointer" />
        <div className="absolute -top-2 -right-2 w-4 text-xs bg-blue-700 text-white flex items-center justify-center rounded-full">
          1
        </div>
      </NavLink>


    </div>
  )
}

export default Navbar