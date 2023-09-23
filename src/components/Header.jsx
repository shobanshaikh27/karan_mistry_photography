// import React from 'react';
// import Socials from './Socials';
// import Logo from '../img/header/logo.svg';
// import MobileNav from './MobileNav';
// import { Link } from 'react-router-dom';

// const Header = () => {
//   return (
//     <>
//       {/* <header className='fixed w-full px-[30px] lg:px-[100px] z-30 h-[100px] lg:h-[140px] flex items-center '> */}
//       <header className=" sticky w-full px-[30px] lg:px-[100px] z-30 flex items-center pt-2 pb-2 ">
//         <div className="flex flex-col lg:flex-row lg:items-center w-full justify-between">
//           <Link to='/' className=' max-w-[200px] '>
//             <img src={Logo} alt="logo" />
//           </Link>
//           <nav className=' hidden xl:flex gap-x-12 font-semibold'>
//             <Link to={'/'}
//             className='text-[#696c6d] hover:text-primary transition'>
//               Home
//             </Link>
//             <Link to={'about'}
//             className='text-[#696c6d] hover:text-primary transition'>
//               About
//             </Link>
//             <Link to={'portfolio'}
//             className='text-[#696c6d] hover:text-primary transition'>
//               Portfolio
//             </Link>
//             <Link to={'contact'}
//             className='text-[#696c6d] hover:text-primary transition'>
//               Contact
//             </Link>
//           </nav>
//         </div>
//           <Socials />
//           <MobileNav />
//       </header>
//     </>
//   );
// };

// export default Header;
import { useRef, useState, useEffect } from 'react';
import Logo from '../img/header/logo.svg'
import { IoMdClose } from 'react-icons/io'
import { CgMenuRight } from 'react-icons/cg'
import Socials from './Socials';
import { Link } from 'react-router-dom';

const Header = () => {
  const navLinks =[
    { to: "/", label: "Home" },
    { to: "about", label: "About Us" },
    { to: "portfolio", label: "Portfolio" },
    { to: "contact", label: "Contact Us" },
  ]
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const linksRef = useRef(null)
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        const body = document.body;
        linksRef.current.classList.toggle("hidden");
        linksRef.current.classList.toggle("flex");
        body.classList.toggle("overflow-hidden");
    }
    useEffect(() => {
        const checkIsMobile = () => {
            setIsMobile(window.innerWidth <= 1024);
        }
        window.addEventListener('resize', checkIsMobile);
        checkIsMobile();
        return () => {
            window.removeEventListener('resize', checkIsMobile);
        }
    }, [])
    return (
        (
            <header className=' sticky sm:px-16 px-8 py-4  z-[999] w-full'>
                <nav className='flex justify-between items-center max-container'>
                    <Link to="/">
                        <div className='flex gap-2 items-center justify-center'>
                            <img src={Logo} alt="Logo" className='z-[999] max-w-[200px]' />
                        </div>
                    </Link>
                    {!isMobile && <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden  '>
                        {navLinks.map((item) => (
                            <li key={item.label} className='relative navLinks'>
                                <Link to={item.to} className='font-primary leading-normal text-lg  font-medium hoverLine text-[#696c6d] hover:text-primary transition'>{item.label}</Link>
                            </li>
                        ))}
                    </ul>}
                    {isMobile && <ul className='absolute flex-1 justify-center items-center gap-8 flex-col bg-white w-full min-h-screen top-0 left-0 hidden' ref={linksRef}>
                       
                        {navLinks.map((item) => (
                            <li key={item.label} className='relative navLinks '>
                                <Link to={item.to} className='font-primary leading-normal text-lg text-[#696c6d] hover:text-primary transition' onClick={toggleMenu}>{item.label}</Link>
                            </li>
                        ))}
                    </ul>}
                
                <Socials />
                    <div className=' text-4xl hidden max-lg:block z-10 cursor-pointer'>
                        {isMenuOpen ? (
                           
                            <IoMdClose onClick={toggleMenu} />
                        ) : (

                            <CgMenuRight  onClick={toggleMenu}/>
                        )}
                    </div>
                </nav>
            </header>)
    )
}

export default Header
