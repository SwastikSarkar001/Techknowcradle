import React from 'react'
import '../css/Navbar.css';

function Navbar(props) {
  // const homeClickable = () => {
  //   props.allRefs.home.current.scrollIntoView({behavior: 'smooth'})
  // }
  // const eventsClickable = () => {
  //   props.allRefs.events.current.scrollIntoView({behavior: 'smooth'})
  // }
  // const locationClickable = () => {
  //   props.allRefs.location.current.scrollIntoView({behavior: 'smooth'})
  // }
  // const contactUsClickable = () => {
  //   props.allRefs.contactUs.current.scrollIntoView({behavior: 'smooth'})
  // }

  return(
    <nav id="navbar">
      <a href='/' id="title">Techknowcradle.com</a>
      <ul className="navbar-main-options">
        {/* <li id='home-option' className="options" onClick={homeClickable} >Home</li>
        <li id='events-option' className="options" onClick={eventsClickable} >Events</li>
        <li id='location-option' className="options" onClick={locationClickable} >Location</li>
        <li id='contact-us-option' className="options" onClick={contactUsClickable} >Contact Us</li> */}
        <li id='home-option' className="options">Home</li>
        <li id='events-option' className="options">Events</li>
        <li id='location-option' className="options">Location</li>
        <li id='contact-us-option' className="options">Contact Us</li>
      </ul>
    </nav>
  );
}

export default Navbar;