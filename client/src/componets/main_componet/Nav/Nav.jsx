import React from 'react'
import logo from '../../../assets/logo.png'
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <header className='flex flex-row z-2 absolute w-full justify-between items-center px-8 py-4 bg-gradient border-none'>
      <div className="logo flex gap-4 items-center w-full h-full">
            <img src={logo} alt="" width={50} /><span className='font-lobster text-[1.5rem]'> <span className='text-red-500'>EduAid</span>Africa</span>
      </div>
            <nav className='w-full h-full flex text-white  flex-row justify-between items-center text-body font-semibold'>
                  <NavLink className='nav_list mr-4' to="/home">Home</NavLink>
                  <NavLink className='nav_list mr-4' to="/learners"> Scholarship Type</NavLink>
                  <NavLink className='nav_list mr-4' to="/educators">About Us</NavLink>
                  <NavLink className='nav_list mr-4' to="/partners">contact us</NavLink>
             </nav>
              <button className='w-full h-full  flex justify-end font-bold text-black'>
                  <NavLink to="/login"> Apply Now</NavLink>  
              </button>
     </header>
  )
}

export default Nav