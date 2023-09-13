import React from 'react'
import logo from '../../../assets/img/logo.png'
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <header className='flex flex-row justify-between px-6 bg-transparent border-none'>
      <div className="logo w-full h-full">
            <img src={logo} alt="" width={50} />
      </div>
            <nav className='flex flex-row justify-between items-center text-body font-semibold'>
                  <NavLink className='nav_list mr-4' to="/">Home</NavLink>
                  <NavLink className='nav_list mr-4' to="/learners"> Scholarship Type</NavLink>
                  <NavLink className='nav_list mr-4' to="/educators">About Us</NavLink>
                  <NavLink className='nav_list mr-4' to="/partners">contact us</NavLink>
             </nav>
              <button className='font-bold text-black'>
                  <NavLink to="/login"> Apply Now</NavLink>  
              </button>
     </header>
  )
}

export default Nav