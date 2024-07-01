import React, { lazy, Suspense } from 'react';
import LoadingScreen from './LoadingScreen';

// import Navbar from './Navbar';
// import Home from "./Home";
// import Events from './Events'
// import Location from './Location';
// import ContactUs from './ContactUs'

const Navbar = lazy(() => import('./Navbar'))
const Home = lazy(() => import('./Home'))
const Events = lazy(() => import('./Events'))
const Location = lazy(() => import('./Location'))
const ContactUs = lazy(() => import('./ContactUs'))

import '../css/HomePage.css'

export default function HomePage() {
  return (
    <div id='home-page'>
      <Suspense fallback={<LoadingScreen />}>
        <Navbar />
        <Home />
        <Events />
        <Location />
        <ContactUs />
      </Suspense>
    </div>
  )
}
