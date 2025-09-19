import React from 'react'
import '../styles/About.css'
import aboutImg from '../assets/about-Img.png'

const About = () => {
  return (
    <div className='about-container' id='about'>

      <div className="about-image">
          <img src={aboutImg} alt="" />
      </div>

      <div className="about-text">
          <span>
            <div className="about-line" />
            <h5>About Us</h5>
          </span>
          <h3>Embark on a Fitness Odyssey with FitFirst.. </h3>
          <p>Welcome to FitFirst, where the beat of cutting-edge workouts harmonizes. Our mission? To help you unleash your full potential with energizing workouts. Embark on a fitness journey that's not just about exercise, but also to find your rhythm of balance. This is FitFirst, where every step you take brings you closer to the best version of yourself.</p>
      </div>

    </div>
  )
}

export default About