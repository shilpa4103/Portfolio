import React from 'react'
import './Education.css'

const Education = () => {
  return (
    <div id="education"className="education">
      <div className="education-title">
        <h1><span>Education</span></h1>
      </div>
      <div className="education-container">
      <div className='education-box'>
      <h1>JSS Science and Technology University (Formerly SJCE), Mysuru</h1>
      <h2>Bachelor of Engineering  (2022-2025)</h2>
      <h3>Computer Science</h3>
      <h3>9.02</h3>
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
