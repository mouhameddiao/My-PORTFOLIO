import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaUser, FaFolderOpen, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
  const [navBackground, setNavBackground] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = () => {
    setNavBackground(window.scrollY > 50);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className={`fixed top-0 w-full z-50 ${navBackground ? 'bg-gray-800 shadow-md' : 'bg-white'} transition-colors duration-500`}>
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className={`text-2xl font-bold ${navBackground ? 'text-white' : 'text-gray-800'}`}
        >
          Portfolio
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <NavItem to="/" label="Home" icon={<FaHome />} navBackground={navBackground} />
          <NavItem to="/about" label="About" icon={<FaUser />} navBackground={navBackground} />
          <NavItem to="/projects" label="Projects" icon={<FaFolderOpen />} navBackground={navBackground} />
          <NavItem to="/contact" label="Contact" icon={<FaEnvelope />} navBackground={navBackground} />
        </div>

        {/* Burger Menu */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className={`${navBackground ? 'text-white' : 'text-gray-800'}`}>
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className={`md:hidden bg-white shadow-md px-4 py-2`}>
          <MobileNavItem to="/" label="Home" icon={<FaHome />} toggle={toggleMenu} />
          <MobileNavItem to="/about" label="About" icon={<FaUser />} toggle={toggleMenu} />
          <MobileNavItem to="/projects" label="Projects" icon={<FaFolderOpen />} toggle={toggleMenu} />
          <MobileNavItem to="/contact" label="Contact" icon={<FaEnvelope />} toggle={toggleMenu} />
        </div>
      )}
    </nav>
  );
}

const NavItem = ({ to, label, icon, navBackground }) => (
  <Link to={to} className={`${navBackground ? 'text-white' : 'text-gray-800'} hover:text-purple-500 flex items-center`}>
    {icon} <span className="ml-2">{label}</span>
  </Link>
);

const MobileNavItem = ({ to, label, icon, toggle }) => (
  <Link to={to} onClick={toggle} className="block py-2 px-2 text-gray-800 hover:text-purple-600 flex items-center">
    {icon} <span className="ml-2">{label}</span>
  </Link>
);

export default Navbar;
