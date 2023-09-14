import React from 'react'
import logo from '../../../assets/logo.png'
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <header className='flex flex-row z-2 absolute w-full justify-between items-center px-8 py-4 bg-blue-200 border-none'>
      <div className="logo w-full h-full">
            <img src={logo} alt="" width={50} />
      </div>
            <nav className='w-full h-full flex text-white  flex-row justify-between items-center text-body font-semibold'>
                  <NavLink className='nav_list mr-4' to="/">Home</NavLink>
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