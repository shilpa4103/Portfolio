import React from 'react'
import './Education.css'
import theme_pattern from '../../assets/theme_pattern.svg'
const Education = () => {
  return (
    <div className="education">
      <div className="education-title">
        <h1>Education</h1>
        <img src={theme_pattern} alt=""/>
      </div>
      <div className="education-container">
      <div className='education-box'>
      <h1>JSS Science and Technology University (Formerly SJCE), Mysuru</h1>
      <h2>Bachelor of Engineering  (2022-2025)</h2>
      <h3>Computer Science</h3>
      <h3>8.95</h3>
      </div>
      <div className='education-box'>
      <h1>Jawahar Navodaya Vidyalaya, Chickamagaluru</h1>
      <h2>XII CBSE (2014-2021) </h2>
      <h3>PCMB</h3>
      <h3>96.5%</h3>
      </div>
      </div>
    </div>
  )
}

export default Education
