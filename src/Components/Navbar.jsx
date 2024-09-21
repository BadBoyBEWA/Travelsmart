import React, { useState, useEffect } from 'react';
import Logo from './Logo'
import Links from './Links'
import { Menu } from 'lucide-react'
import Images from '../assets/img'

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 50) {
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
  
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    }

  return (
    <header>
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
          <div className="content">
            <Logo logoimg={Images.img1} logotx='logo' logosec='logostyle'/>
            <Links linkstyle='links' home='/' about='/explore' link1='Home' link2='About' link3='Contact Us' link4='Tour review'/>
            {/* Mobile Menu Button */}
            <div className="mobile-only">
              <button className="menu-button" onClick={toggleMenu}>
                <Menu className="menu-icon" />
              </button>
            </div>
            {isMenuOpen && (
        <div className={`mobile-menu ${isMenuOpen ? 'open' : 'closed'}`}>
          <Links linkstyle="mobile-links" home="/" about="/explore" link1="Home" link2="About" link3="Contact Us" link4="Tour review" />
        </div>
      )}
          </div>
        </nav>
      </header>

  )
}
