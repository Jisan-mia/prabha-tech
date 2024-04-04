import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar';
import Hero from './Pages/Hero';
import LocomotiveScroll from 'locomotive-scroll';
import About from './Pages/About';

const App = () => {

  const locomotiveScroll = new LocomotiveScroll();
  
  return (
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Hero/>} />
          <Route path='/about' element={<About/>} />
        </Routes> 
      </BrowserRouter>
  )
}

export default App