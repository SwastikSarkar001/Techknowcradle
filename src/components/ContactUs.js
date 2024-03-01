import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import SplitType from 'split-type'
import '../css/ContactUs.css'
import { Telephone, Facebook, WhatsApp, Instagram, TwitterX, LinkedIn, Gmail } from '../svg/Logos'

gsap.registerPlugin(ScrollTrigger)

export default function ContactUs() {
  const mainContentRef = useRef(null)

  useEffect(() => {
    const mainContent = mainContentRef.current
    new SplitType(mainContent)

    // const contents = gsap.utils.toArray('#contacts > *')

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#contact-section',
        start: 'top 35%',
        end: 'bottom 35%',
        toggleActions: 'play reverse play reverse',
        // markers: true
      }
    });

    tl.to('#contact-section > h1 .char', {
      y: 0,
      stagger: 0.05,
      duration: 1,
      ease: 'elastic'
    })
    
    tl.to('#contacts > div > *', {
      y: 0,
      stagger: 0.05,
      duration: 1,
      ease: 'elastic'
    })

  }, [])

  return (
    <div id='contact-section' className='sections'>
      <h1 ref={mainContentRef}>Contact Us</h1>
      <div id="contacts">
        <div>
          <h2>Still any doubts or having some problems?</h2>
          <p>Feel free to contact us at the following contact infos:</p>
        </div>
        <div>
          <a href='/' className='contact-infos' id="tel">
            <Telephone />
            <p>+91 87300 10507</p>
          </a>
        </div>
        <div>
          <a href='/' className='contact-infos' id="email">
            <Gmail />
            <p>techknowcradle.official.jusc@gmail.com</p>
          </a>
        </div>
        <div>
          <a href='/' className='contact-infos' id="fb">
            <Facebook />
            <p>techknowcradle_official</p>
          </a>
        </div>
        <div>
          <a href='/' className='contact-infos' id="insta">
            <Instagram />
            <p>techknowcradle_official</p>
          </a>
        </div>
        <div>
          <a href='/' className='contact-infos' id="whatsapp">
            <WhatsApp />
            <p>+91 6289 054 158</p>
          </a>
        </div>
        <div>
          <a href='/' className='contact-infos' id="linkedin">
            <LinkedIn />
            <p>techknowcradle</p>
          </a>
        </div>
        <div>
          <a href='/' className='contact-infos' id="x">
            <TwitterX />
            <p>techknowcradle_official</p>
          </a>
        </div>
      </div>
    </div>
  )
}
