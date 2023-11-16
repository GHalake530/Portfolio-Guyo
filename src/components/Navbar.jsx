import React from 'react'
import Logo from '../data/mylogonobg.png'
import {FaBars, FaTimes} from 'react-icons/fa'

function Navbar() {
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-centre px-4 bg-[#0a192f] text-gray-300'>
        <div>
            <img className='w-[70px]' src={Logo} alt="mylogo" />
        </div>
        {/* menu */}
        <div>
            <ul className='flex '>
                <li>Home</li>
                <li>About</li>
                <li>Skills</li>
                <li>Work</li>
                <li>Contact</li>
            </ul>
        </div>
        {/* Hamburger */}
        <div className='hidden'>
            <FaBars />
        </div>
        {/* mobile menu */}
       <ul className='hidden'>
            <li>Home</li>
            <li>About</li>
            <li>Skills</li>
            <li>Work</li>
            <li>Contact</li>
       </ul>
        {/* social icons */}
    </div>
  )
}

export default Navbar