import React, { useRef, useEffect } from 'react';
import RegisterButton from './RegisterButton';
import '../css/Home.css';
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import SplitType from 'split-type'

gsap.registerPlugin(ScrollTrigger)
// import mainSectionImage from '../img/home-section.jpg';

function Home() {
  const mainContentRef = useRef(null)

  useEffect(() => {
    // Section header animation

    const mainContent = mainContentRef.current
    new SplitType(mainContent)

    // const contents = gsap.utils.toArray('#contacts > *')

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#home-section',
        start: 'top 10%',
        end: 'bottom 10%',
        toggleActions: 'play reverse play reverse',
        // markers: true
      }
    });

    tl.to('#text > h1 .char', {
      y: 0,
      stagger: 0.05,
      duration: 1,
      ease: 'elastic'
    })
  }, [])
  return (

    <section id="home-section" className='sections'>
      <div id='text'>
        <h1 ref={mainContentRef}>Techknowcradle</h1>
        <h3>Where Wonder Meets Knowledge: Empowering Young Minds Through Hands-On Science!</h3>
      </div>
      <RegisterButton isBig={true} />
      {/* <img src={mainSectionImage} alt="Home Section" className='section-images' /> */}
    </section>
  );
}

export default Home;