import React, { useState } from 'react'
import logo from '../images/ondolo-logo-w.svg'
import logoAlt from '../images/ondolo-logo.svg'
import { Link, NavLink } from 'react-router-dom'

function Header() {

    const [visible, setVisible] = useState(false);
    const mobileMenu = () => {
        setVisible(!visible);
    }

    const [fix, setFix] = useState(false);
    const setFixed = () => {
        window.scrollY >= 200  ?  setFix(true) : setFix(false);
    }
    window.addEventListener("scroll", setFixed);

  return (
    <div className='fixed w-full z-40'>
        {/**Menu */}
        <div className={`w-full mx-auto transition-all duration-200 ease-in ${fix ? 'bg-black/70' : ''}`}>
            <div className={`max-w-7xl px-2 py-2 xl:px-0 mx-auto flex justify-between items-center ${visible ? 'bg-white' : ''}`}>
                <Link to="/"><img src={visible ? logoAlt : logo} alt="" className='h-7'/></Link>
                <nav className='hidden md:flex tracking-normal'>
                    <NavLink to="/" className={({isActive}) => isActive ? 'menu-desktop-active' : 'menu-desktop'}>accueil</NavLink>
                    <NavLink to="/services" className={({isActive}) => isActive ? 'menu-desktop-active' : 'menu-desktop'}>services</NavLink>
                    <NavLink to="/realisations" className={({isActive}) => isActive ? 'menu-desktop-active' : 'menu-desktop'}>réalisations</NavLink>
                    <NavLink to="/articles" className={({isActive}) => isActive ? 'menu-desktop-active' : 'menu-desktop'}>articles</NavLink>
                    <NavLink to="/contact" className={({isActive}) => isActive ? 'menu-desktop-active' : 'menu-desktop'}>contact</NavLink>
                </nav>
                <div className={`flex p-4 md:hidden cursor-pointer ${visible ? '' : 'text-white'}`} onClick={mobileMenu}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </div>
            </div>
        </div>
        {/**Mobile menu */}
            <div className={`absolute top-[72px] w-full left-0 z-10 duration-200 transition-all ${visible ? 'max-h-[80px] opacity-100' : 'max-h-0 opacity-0'}`} onClick={mobileMenu}>
                <nav className='flex flex-col md:hidden w-full'>
                <NavLink to="/" className="menu-mobile">accueil</NavLink>
                    <NavLink to="/services" className="menu-mobile">services</NavLink>
                    <NavLink to="/realisations" className="menu-mobile">réalisations</NavLink>
                    <NavLink to="/articles" className="menu-mobile">articles</NavLink>
                    <NavLink to="/contact" className="menu-mobile">contact</NavLink>
                </nav>
            </div>
    </div>
  )
}

export default Header