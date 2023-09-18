import React from 'react';
import { useState } from 'react';

import { IoMdClose } from 'react-icons/io'
import { CgMenuRight } from 'react-icons/cg'

import { Link } from 'react-router-dom';

import { motion } from 'framer-motion'

const menuVariants = {
  hidden: {
    x: '100%'
  },
  show: {
    x: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.9],
    }
  }
}

const MobileNav = () => {
  const [openMenu, setOpenMenu] = useState(false)
  return (
    <>
      <nav className='text-primary xl:hidden'>
        <div className='text-3xl cursor-pointer ' onClick={()=> setOpenMenu(true)}>
          <CgMenuRight />
        </div>
        <motion.div
          variants={menuVariants}
          initial= 'hidden'
          animate ={openMenu? 'show' : ''}
          className="bg-white shadow-2xl w-full absolute top-0 right-0 max-w-xs h-screen z-20 ">
          <div className='text-4xl absolute top-14 left-4 cursor-pointer text-primary' onClick={()=> setOpenMenu(false)}>
            <IoMdClose />
          </div>
          <ul className='h-full flex flex-col items-center justify-center gap-y-8 text-primary font-primary font-bold text-3xl '>
            <li>
              <Link to={'/'}
                className='text-[#696c6d] hover:text-primary transition'>
                Home
              </Link>
            </li>
            <li>
              <Link to={'about'}
                className='text-[#696c6d] hover:text-primary transition'>
                About
              </Link>
            </li>
            <li>
              <Link to={'portfolio'}
                className='text-[#696c6d] hover:text-primary transition'>
                Portfolio
              </Link>
            </li>
            <li>
              <Link to={'contact'}
                className='text-[#696c6d] hover:text-primary transition'>
                Contact
              </Link>
            </li>
          </ul>
        </motion.div>
      </nav>
    </>
  );
};

export default MobileNav;
