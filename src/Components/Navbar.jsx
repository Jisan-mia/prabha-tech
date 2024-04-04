import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "../Components/Navbar.css";
import logo from "../assets/images/newlogo.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={scrolled ? 'scrolled' : ''}>
        <div className="logo">
            <Link to="/"><img src={logo} alt="" /></Link>
        </div>
        <div className="menu">
            <Link to="/about">About</Link>
            <Link>Services</Link>
            <Link to='/industries'>Industries</Link>
            <Link to='/portfolio'>Portfolio</Link>
            <Link>Pesoureces</Link>
            <button>Contact us</button>
        </div>
    </nav>
  );
}

export default Navbar;
