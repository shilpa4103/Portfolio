import React from 'react'
import './Navbar.css'
const Navbar = () => {
  return (
    <div className='navbar'>
      <h1>Portfolio.</h1>
      <ul className="nav-menu">
        <li>About</li>
        <li>Education</li>
        <li>Skills</li>
        <li>Projects</li>
        <li>Achievements</li>

      </ul>
      <div className="nav-connect">Connect With Me</div>
    </div>
  )
}

export default Navbar
