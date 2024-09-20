import React, { useState, useEffect } from 'react';
import { Menu } from 'lucide-react'; 
import Logo from './Logo';
import Links from './Links';
import Images from '../assets/img';
import Text from './Text';
import Buttons from './Buttons';
import Airplane from './Airplane';
import '../App.css';
// import Aboutus from '../Pages/Aboutus';


export default function Home(){
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
  };
  return (
    <div className='whole'>
      <header>
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
          <div className="content">
            <Logo logoimg={Images.img1} logotx='logo' logosec='logostyle'/>
            <Links linkstyle='links' directory1='#homepage' directory2='#about' homelink='active1' link1='Home' link2='About' link3='Contact Us' link4='Tour review'/>
            {/* Mobile Menu Button */}
            <div className="mobile-only">
              <button className="menu-button" onClick={toggleMenu}>
                <Menu className="menu-icon" />
              </button>
            </div>
          </div>
        </nav>
      </header>

      <section className='container' id='homepage'>
        <div className='herosec'>
        <div className='herotx'>
          <div className='cust-sec'>
          <Logo logoimg={Images.img11} logosec='custpic'/><Text texts='100k+ customer' textstyle='customer'/>
          </div>
          <Text texts="Your Trusted All-In-One" textstyle='herotx1' travel="Travel Companion" travelstyle='herotx2'/>
          <Text texts="Find and Book Hotels, Flights, Car Rentals, and Unique Experiences Across the Globe –Tailored Recommendations for Every Journey" textstyle='herotx3'/>
            <Buttons buttx='Trip Catalog' butstyle='catalog' butlink='catlink' triplink='./tripcatalog'/>
        </div>
        <Airplane airimg={Images.img3} airstyle='airplane'/>
        </div>
      </section>

      <section className='container about-sec' id='about'>
        <div className='about'>
          <div className='abouttx'>
            <Text texts='About Us' textstyle='abouttx1'/>
            <Text texts='Travel Smart is your one-stop destination for all your travel planning needs. Whether you are dreaming of a tropical getaway, a cultural adventure, or a city break, we are here to help you plan the perfect trip' textstyle='abouttx2'/>
            <Buttons buttx='Explore' butstyle='exp' butlink='explink' triplink='./explore'/>
          </div>
          </div>
      </section>
    </div>
  )
}