import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Buttons from './Components/Buttons';
import Airplane from './Components/Airplane';
import Footers from './Footers/footers';
function App() {
  return (
    <>
    <div className='whole'>
    <header>
      <nav className='container'>
        <Logo logoimg={Images.img1} logotx='logo' logosec='logostyle'/>
        <Links linkstyle='links' directory1='#homepage' directory2='#about' homelink='active1'/>
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
        <Buttons buttx='Trip Catalog'butstyle='catalog'/>
      </div>
      <Airplane airimg={Images.img3} airstyle='airplane'/>
      </div>
    </section>

    <section className='container about-sec' id='about'>
      <div className='about'>
        <div className='abouttx'>
          <Text texts='About Us' textstyle='abouttx1'/>
          <Text texts='Travel Smart is your one-stop destination for all your travel planning needs. Whether you are dreaming of a tropical getaway, a cultural adventure, or a city break, we are here to help you plan the perfect trip' textstyle='abouttx2'/>
          <Buttons buttx='Explore' butstyle='exp'/>
        </div>
        </div>
    </section>
    </div>
    <Footers />
    </>
  );
}

export default App;
