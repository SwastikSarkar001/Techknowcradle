import React from 'react';

import Navbar from './Navbar';
import Home from "./Home";
import Events from './Events'
import Location from './Location';
import ContactUs from './ContactUs'

import '../css/HomePage.css'

export default function HomePage() {
  return (
    <div id='home-page'>
      <Navbar />
      <Home />
      <Events />
      <Location />
      <ContactUs />
    </div>
  )
}
