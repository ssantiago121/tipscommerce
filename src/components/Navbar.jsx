import React, { useState } from 'react';
import { FaShoppingBag, FaEquals, FaTimes } from 'react-icons/fa';
import tipsLogo from '../assets/logo-loja-tips.png'

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('');0
  const [hoveredLink, setHoveredLink] = useState('');

  const handleMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Shopping', href: '#' },
    { name: 'Sobre', href: 'https://tipscode.com.br/'},
    { name: 'Blog', href: 'https://tipscode.com.br/artigos'},    
    { name: 'Contato', href: '#' },
  ];

  return (
    <nav className="bg-[#E3E6F3] flex items-center justify-between px-6 py-4 md:px-20 md:py-6 sticky shadow-md z-10">
      <a href="https://tipscode.com.br/">
        <img className="h-10 w-auto" src={ tipsLogo } alt="Logo" />
      </a>
      <div className="hidden md:flex items-center justify-center">
        <ul className="flex items-center justify-center list-none relative">
          {navLinks.map((link) => (
            <li
              key={link.name}
              className="px-3 md:px-5 relative"
              onMouseEnter={() => setHoveredLink(link.name)}
              onMouseLeave={() => setHoveredLink('')}
            >
              <a
                className={`activeno-underline text-base font-semibold text-[#1a1a1a] hover:text-[#008178] ${
                    link.name === 'Home' ? 'active' : '' && 
                    activeLink === link.name ? 'active' : ''
                } ${hoveredLink === link.name ? 'hovered' : ''}`}
                href={link.href}
                onClick={() => handleLinkClick(link.name)}
              >
                {link.name}
              </a>
            </li>
          ))}
          <li className="px-3 md:px-5 relative">
            <a
              className="no-underline text-base font-semibold text-[#1a1a1a] hover:text-[#008178]"
              href="#"
            >
              <FaShoppingBag />
            </a>
          </li>
        </ul>
      </div>
      <div className="md:hidden">
        <button id="menu-toggle" className="text-[#1a1a1a]" onClick={handleMenuToggle}>
            {isMobileMenuOpen ? <FaTimes className='size-5' /> : <FaEquals className='size-5' />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div id="mobile-menu" className="md:hidden bg-blue-100 w-full absolute top-16 left-0 py-4 shadow-md">
          <ul className="flex flex-col items-end mr-6 list-none">
            {navLinks.map((link) => (
              <li key={link.name} className="py-2">
                <a
                  className={`no-underline text-base font-semibold text-[#1a1a1a] hover:text-[#008178] ${activeLink === link.name ? 'text-[#008178]' : ''}`}
                  href={link.href}
                  onClick={() => handleLinkClick(link.name)}
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li className="py-2">
              <a className="no-underline text-base font-semibold text-[#1a1a1a] hover:text-[#008178]" href="#">
                <FaShoppingBag />
                
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
