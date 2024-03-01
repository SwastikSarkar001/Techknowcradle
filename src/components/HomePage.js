import React from 'react';

import Navbar from './Navbar';
import Home from "./Home";
import Events from './Events'
import Location from './Location';
import ContactUs from './ContactUs'

import '../css/HomePage.css'

export default function HomePage() {
  // const homeRef = useRef(null)
  // const eventsRef = useRef(null)
  // const locationRef = useRef(null)
  // const contactUsRef = useRef(null)
  // const allSectionsRef = {
  //   home: homeRef,
  //   events: eventsRef,
  //   location: locationRef,
  //   contactUs: contactUsRef
  // }
  return (
    <div id='home-page'>
      {/* <Navbar allRefs={allSectionsRef} /> */}
      <Navbar />
      <Home />
      <Events />
      <Location />
      <ContactUs />
      {/* <Home ref={homeRef} />
      <Events ref={eventsRef} />
      <Location ref={locationRef} />
      <ContactUs ref={contactUsRef} /> */}
    </div>
  )
}
