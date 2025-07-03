import React, { useEffect, useState } from 'react';
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";
import Button from './button';
import { useScroll, useMotionValueEvent } from 'motion/react';
const Navbar = ({ }) => {
  // creating the hamburger menu here
  const { scrollYProgress } = useScroll();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState('');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    setIsScrolled(latest > 0);
    console.log(isScrolled);
    ;
  });
  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-10 ${isMenuOpen || isScrolled ? 'bg-sky-950 p-0' : 'p-2'
        } transition-all duration-400 `}
    >
      <div className={`flex justify-between items-center px-4  lg:px-10 sm:px-6 text-gray-400  mx-auto cursor-pointer py-4 w-4/5`}>
        {/* left side name or logo */}
        <div>
          <h3 className='font-bold text-emerald-300 text-xl hover:opacity-80 transition-opacity duration-400 '><span>Jnpaed</span></h3>
        </div>
        {/* navigation bar */}
        <div className='text-xs space-x-4 font-bold '>
          <div className='md:flex items-center justify-center space-x-6 hidden '>
            <a href="#" className='nav-hover '>Home</a>
            <a href="#" className='nav-hover' >About</a>
            <a href="#" className='nav-hover' >Skills</a>
            <a href="#" className='nav-hover' >Projects</a>
            <a href="#" className='nav-hover' >Experience</a>
            <a href="#" className='nav-hover ' >Contact</a>

            <Button text={'Resume'} />
          </div>

        </div>
        <button className=' md:hidden  text-emerald-400  ' onClick={toggleMenu}>
          {
            isMenuOpen ? <RxCross1 className='w-6 h-6' /> : <RxHamburgerMenu className='w-6 h-6' />
          }
        </button>

      </div>

      {/* Mobile view here */}
      <div className={`md:hidden transition-all duration-500  ease-linear
      ${isMenuOpen
          ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'} `}>
        <div className='bg-sky-950 backdrop-blur-sm '>
          <div className={`flex flex-col space-y-1 
             text-gray-400 text-sm w-full mx-auto $ pb-4 px-1 `}>
            <a href="#" className='mobile-nav-hover '>Home</a>
            <a href="#" className='mobile-nav-hover' >About</a>
            <a href="#" className='mobile-nav-hover' >Skills</a>
            <a href="#" className='mobile-nav-hover' >Projects</a>
            <a href="#" className='mobile-nav-hover' >Experience</a>
            <a href="#" className='mobile-nav-hover' >Contact</a>

            <button className='border-emerald-400  border-2 text-emerald-300 px-4 py-2 relative cursor-pointer overflow-hidden group shadow-sm rounded'>
              <span className='absolute inset-0 bg-emerald-400  transform -translate-x-[100%] group-hover:translate-x-0 duration-500'>
              </span>
              <span className=' relative z-10 w-full group-hover:text-emerald-100 transition-colors duration-300 '>
                Resume
              </span>
            </button>

          </div>

        </div>
      </div>
    </nav >
  );
};

export default Navbar;