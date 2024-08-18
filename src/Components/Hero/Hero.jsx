import React from 'react'
import './Hero.css'
import profile_img from '../../assets/Shilpa.jpg'
const Hero = () => {
  return (
    <div className='hero'>
      <img src={profile_img} alt=""/>
      <h1><span>I'm Shilpashree S,</span></h1>
      <h2>full stack developer based in India.</h2>
      <p>I am a Computer Science undergraduate with a solid foundation in software development, algorithms, and data structures. I have hands-on experience in web development, and am passionate about applying my skills to real-world challenges through innovative solutions.</p>
      <div className="hero-action">
        <div className="hero-connect">Github</div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  )
}

export default Hero
