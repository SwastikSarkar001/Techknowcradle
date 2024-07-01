import React, { useRef, useEffect } from 'react'
import '../css/Location.css'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import SplitType from 'split-type'

gsap.registerPlugin(ScrollTrigger)
// import { APIProvider, Map, AdvancedMarker, Pin, InfoWindow } from '@vis.gl/react-google-maps'

export default function Location() {
  const mainContentRef = useRef(null)

  useEffect(() => {
    const mainContent = mainContentRef.current
    new SplitType(mainContent)

    // const contents = gsap.utils.toArray('#contacts > *')

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#location-section',
        start: 'top 25%',
        end: 'bottom 25%',
        toggleActions: 'play reverse play reverse',
        // markers: true
      }
    });
    
    tl.to('#location-section h1 .char', {
      y: 0,
      stagger: 0.05,
      duration: 1,
      ease: 'elastic',
    })

    const tl1 = gsap.timeline({
      scrollTrigger: {
        trigger: '#location-section',
        start: 'top 25%',
        end: 'bottom 25%',
        toggleActions: 'play reverse play reverse',
        // markers: true
      }
    });

    tl1.to('#location p', {
      y: 0,
      stagger: 0.05,
      duration: 1,
      ease: 'elastic',
    })

  }, [])
  // const location = {
  //   "lat": 22.4988822,
  //   "lng": 88.3714123
  // }

  // return (
  //   <APIProvider apiKey={ process.env.GOOGLE_MAPS_API_KEY } >
  //     <div style={{width: '100vw', height: '100vh'}}>
  //       <Map zoom={15} center={location} >
  //         <Pin center={location} />
  //       </Map>
  //     </div>
  //   </APIProvider>
  // )

  return (
    <div id='location-section' className='sections'>
      <div>
        <h1 ref={mainContentRef}>Location</h1>
        <div id='location'>
          <div><p>Jadavpur University (Jadavpur Campus)</p></div>
          <div><p>188, Raja Subodh Chandra Mallick Road,</p></div>
          <div><p>Jadavpur, Kolkata</p></div>
          <div><p>West Bengal - 700 032</p></div>
        </div>
      </div>
      <iframe
        title='Location of Jadavpur University'
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7372.300187718328!2d88.37245821137756!3d22.4985511129299!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0271237f28abe9%3A0xd047bab0c8bfb11c!2sJadavpur%20University!5e0!3m2!1sen!2sin!4v1709098193901!5m2!1sen!2sin"
        allowFullScreen=""
        loading="eager"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  )
}