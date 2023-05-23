import React, { useState } from 'react'
import { NavLink, Link } from "react-router-dom";
import logo from '../images/ondolo-logo.svg'
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiOutlineClose} from 'react-icons/ai'

function Navbar() {
  const [mobile, setMobile] = useState(false);

  return (
    <div className=' sticky top-0 z-10 bg-white/80'>
      {/**Menu */}
      <div className='max-w-[1560px] mx-auto py-3 px-5 md:px-0 flex justify-between items-center'>
        <Link to="/"><img src={logo} alt="Logo Ondolo" className='h-8 md:h-10' /></Link>
        <GiHamburgerMenu className=' md:hidden cursor-pointer' size={24} onClick={() => setMobile(!mobile)} />
        <nav className='hidden md:flex flex-row gap-[50px] items-center'>
          <NavLink to="/services" className={({ isActive }) => isActive ? 'menuLink text-[#FF9800]' : 'menuLink'} >services</NavLink>
          <NavLink to="/réalisations" className={({ isActive }) => isActive ? 'menuLink text-[#FF9800]' : 'menuLink'} >Réalisations</NavLink>
          <NavLink to="/articles" className={({ isActive }) => isActive ? 'menuLink text-[#FF9800]' : 'menuLink'} >articles</NavLink>
          <NavLink to="/contact" ><button>contact</button></NavLink>
        </nav>

        {/*Mobile Menu*/}
        {/*Overlay*/}
        { mobile ? <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0' onClick={()=> setMobile(!mobile)}></div> : ''}
        <div className={ mobile ? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300 ease-in-out' : 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-1000 ease-in'}>
        <AiOutlineClose 
            onClick={()=> setMobile(!mobile)}
            size={24} className='absolute right-4 top-4 cursor-pointer p-1 bg-[#0F4C81] rounded-full text-white' />
        <Link to="/"><img src={logo} alt="Logo Ondolo" className='h-8 ml-4 mt-4' /></Link>
        <nav className='flex flex-col gap-4 ml-4 mt-5'>
          <NavLink to="/services" className={({ isActive }) => isActive ? 'menuLink text-[#FF9800]' : 'menuLink'} >services</NavLink>
          <NavLink to="/réalisations" className={({ isActive }) => isActive ? 'menuLink text-[#FF9800]' : 'menuLink'} >Réalisations</NavLink>
          <NavLink to="/articles" className={({ isActive }) => isActive ? 'menuLink text-[#FF9800]' : 'menuLink'} >articles</NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? 'menuLink text-[#FF9800]' : 'menuLink'} >contact</NavLink>
        </nav>    
        </div>
      </div>
    </div>
  )
}

export default Navbar