import React, { useState, useEffect } from 'react';
import {FaBars, FaTimes} from 'react-icons/fa';
import logo from '../assets/logo.png';

const NavBar = () => {

    const links = [
        {
            id: 1,
            link: 'home'
        },
        {
            id: 2,
            link: 'about'
        },
        {
            id: 3,
            link: 'experience'
        },
        {
            id: 4,
            link: 'projects'
        },
        {
            id: 5,
            link: 'contact'
        }
    ]

    const [nav, setNav] = useState(false);

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const threshold = 200;

            if (scrollY > threshold) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

  return (
    <div className={`flex justify-between w-full h-24 items-center text-white fixed px-5 transition-all duration-300 ${isScrolled ? ' bg-slate-950 bg-opacity-95' : 'bg-transparent'}`} style={{ zIndex: 2 }}>
        <img src={logo} alt='logo' className=' h-14 w-15 hover:scale-110 duration-200'/>
        <ul className='hidden md:flex'>
            {links.map(({id, link})=>(<li key={id} className='capitalize  px-7 font-medium text-xl cursor-pointer text-gray-500 hover:scale-125 hover:text-white duration-200'>
            {link}</li>))}
        </ul>
        <div onClick = {() => setNav(!nav)} className='md:hidden cursor-pointer pr-5 text-gray-500 hover:text-white hover:scale-110 duration-200 z-10'>
            {nav ? <FaTimes size={30}/> : <FaBars size={30}/>}
        </div>
        {nav && (<ul className='md:hidden flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-slate-600'>
            {links.map(({id, link})=>(<li key={id} className='capitalize px-4 py-6 text-4xl cursor-pointer text-gray-500 hover:scale-125 hover:text-white duration-200'>
            {link}</li>))}
        </ul>)}
    </div>
  )
}

export default NavBar