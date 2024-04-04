import LocomotiveScroll from 'locomotive-scroll';
import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from './Components/Navbar';
import About from './Pages/About';
import Hero from './Pages/Hero';
import IndustriesPage from './Pages/Industries';
import PortfolioPage from './Pages/Portfolio';

const App = () => {

  const locomotiveScroll = new LocomotiveScroll();

  return (
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Hero/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/industries' element={<IndustriesPage/>} />
          <Route path='/portfolio' element={<PortfolioPage/>} />

        </Routes>
      </BrowserRouter>
  )
}

export default App