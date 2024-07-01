import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import '../css/Events.css'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import SplitType from 'split-type'

gsap.registerPlugin(ScrollTrigger)

const eventDetails = [
  {
    header: 'Event Heading 1',
    details: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit, voluptatum nisi veniam itaque, nostrum quas minima.',
    subdetails: 'Ciick to know more!'
  },
  {
    header: 'Event Heading 2',
    details: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit, voluptatum nisi veniam itaque, nostrum quas minima.',
    subdetails: 'Ciick to know more!'
  },
  {
    header: 'Event Heading 3',
    details: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit, voluptatum nisi veniam itaque, nostrum quas minima.',
    subdetails: 'Ciick to know more!'
  },
  {
    header: 'Event Heading 4',
    details: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit, voluptatum nisi veniam itaque, nostrum quas minima.',
    subdetails: 'Ciick to know more!'
  },
  {
    header: 'Event Heading 5',
    details: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit, voluptatum nisi veniam itaque, nostrum quas minima.',
    subdetails: 'Ciick to know more!'
  },
  {
    header: 'Event Heading 6',
    details: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit, voluptatum nisi veniam itaque, nostrum quas minima.',
    subdetails: 'Ciick to know more!'
  },
  {
    header: 'Event Heading 7',
    details: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit, voluptatum nisi veniam itaque, nostrum quas minima.',
    subdetails: 'Ciick to know more!'
  },
  {
    header: 'Event Heading 8',
    details: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit, voluptatum nisi veniam itaque, nostrum quas minima.',
    subdetails: 'Ciick to know more!'
  },
  {
    header: 'Event Heading 9',
    details: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit, voluptatum nisi veniam itaque, nostrum quas minima.',
    subdetails: 'Ciick to know more!'
  },
  {
    header: 'Event Heading 10',
    details: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit, voluptatum nisi veniam itaque, nostrum quas minima.',
    subdetails: 'Ciick to know more!'
  },

]

export default function Events() {
  const leftScrollRef = useRef(null)
  const rightScrollRef = useRef(null)
  const contentsRef = useRef(null)
  const mainContentRef = useRef(null)

  useEffect(() => {
    // Section header animation

    const mainContent = mainContentRef.current
    new SplitType(mainContent)

    // const contents = gsap.utils.toArray('#contacts > *')

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#events-section',
        start: 'top 30%',
        end: 'bottom 30%',
        toggleActions: 'play reverse play reverse',
        // markers: true
      }
    });
    
    tl.to('#events-section > h1 .char', {
      y: 0,
      stagger: 0.05,
      duration: 1,
      ease: 'elastic'
    })

    // Scroll Horizontally

    const leftScroll = leftScrollRef.current
    const rightScroll = rightScrollRef.current
    const contents = contentsRef.current
    const children = contents.children.length;

    contents.style.setProperty('--x', children)

    //eslint-disable-next-line
    let currentScrollPosition;
    //eslint-disable-next-line
    if (contents !== null) currentScrollPosition = contents.scrollLeft;
    let scrollAmount = 500;

    const scrollHorizontally = (val) => {
      contents.scrollBy({
        top: 0,
        left: val * scrollAmount,
        behavior: 'smooth'
      });
      // console.log(element.scrollLeft);
      scrollVisibility();
    }

    const scrollVisibility = () => {
      if (contents.scrollWidth - contents.clientWidth <= contents.scrollLeft) {
        // console.log("End of right scroll");
        rightScroll.style.transform = "translateY(-50%) scale(0)";
      }
      else {
        // console.log("Continue scrolling right");
        rightScroll.style.transform = "translateY(-50%) scale(1)";
      }

      if (contents.scrollLeft <= 0) {
        // console.log("End of left scroll");
        leftScroll.style.transform = "translateY(-50%) scale(0)";

      }
      else {
        // console.log("Continue scrolling left");
        leftScroll.style.transform = "translateY(-50%) scale(1)";
      }
    }

    scrollVisibility()

    if (leftScroll !== null) {
      leftScroll.onclick = () => {
        scrollHorizontally(-1);
        // console.log("Left clicked");
      }
    }

    if (rightScroll !== null) {
      rightScroll.onclick = () => {
        scrollHorizontally(1);
        // console.log("Right clicked");
      }
    }

    if (contents !== null) {
      // console.log("scrolled");
      contents.onscroll = scrollVisibility
    }

  }, [])

  return (
    <section id='events-section' className='sections'>
      <h1 ref={mainContentRef}>Events</h1>
      <div id="viewable-window">
        <div id="leftarrow" className="arrow" ref={leftScrollRef} title='Move backward'><ion-icon name="arrow-back-outline"></ion-icon></div>
        <div id="event-list" ref={contentsRef}>

          {/* Contents start */}

          {eventDetails.map((event, index) => {
            return (<EventWrapper key={index} details={event} />)
          })}

          {/* Contents end */}

        </div>
        <div id="rightarrow" className="arrow" ref={rightScrollRef} title='Move forward'><ion-icon name="arrow-forward-outline"></ion-icon></div>
      </div>
    </section>
  )
}

function EventWrapper(props) {
  const details = props.details
  return (
    <div className="event-content">
      <div className="event">
        <div className="event-header">{details.header}</div>
        <div className="event-details">{details.details}</div>
        <div className="event-subdetails">{details.subdetails}</div>
      </div>
    </div>
  )
}

EventWrapper.propTypes = {
  details: PropTypes.object.isRequired,
}