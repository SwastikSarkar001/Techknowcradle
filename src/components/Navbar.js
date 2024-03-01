import React, { useEffect } from 'react'
import '../css/Navbar.css'
import { HashLink as Link } from 'react-router-hash-link';

function Navbar() {
  useEffect(() => {
    const sections = document.querySelectorAll('.sections')
    const options = document.querySelectorAll('li.options')


    const setActiveClass = (section, option) => {
      if (section.getBoundingClientRect().top <= 70 && section.getBoundingClientRect().bottom >= 70) {
        if (option.className === "options")
          option.className = "options active";
      }
      else {
        if (option.className === "options active")
          option.className = "options";
      }
    }
    for (let i = 0; i < options.length; i++) {
      setActiveClass(sections[i], options[i]);
    }

    document.onscroll = () => {
      for (let i = 0; i < sections.length; i++) {
        setActiveClass(sections[i], options[i]);
      }
    };

  }, [])

  return (
    <nav id="navbar">
      <a href='/' id="title">Techknowcradle</a>
      <ul className="navbar-main-options">
        <Link style={{textDecoration: 'none'}} smooth to='/#home-section'><li id='home-option' className="options">Home</li></Link>
        <Link style={{textDecoration: 'none'}} smooth to='/#events-section'><li id='events-option' className="options">Events</li></Link>
        <Link style={{textDecoration: 'none'}} smooth to='/#location-section'><li id='location-option' className="options">Location</li></Link>
        <Link style={{textDecoration: 'none'}} smooth to='/#contact-section'><li id='contact-us-option' className="options">Contact Us</li></Link>
      </ul>
    </nav>
  );
}

export default Navbar;