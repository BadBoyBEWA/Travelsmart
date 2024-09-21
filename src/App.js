import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Buttons from './Components/Buttons';
import Tripcatalog from './Pages/Tripcatalog';
import Home from './Components/Home';
import Aboutus from './Pages/Aboutus';
import Navbar from './Components/Navbar';
import Footer from "./Footers/footers.jsx"

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/tripcatalog' element={<Tripcatalog/>}/>
      <Route path='/buttons' element={<Buttons/>}/>
      <Route path='/explore' element={<Aboutus/>}/>
      {/* <Route path='/footer' element={<Footer/>}/> */}
    </Routes>
    < Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
