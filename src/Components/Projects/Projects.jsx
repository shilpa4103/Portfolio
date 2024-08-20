import React from 'react'
import './Projects.css'
const Projects = () => {
  return (
    <div className="project">
      <div className="project-title">
        <h1><span>Projects</span></h1>
      </div>
      <div className="project-container">
      <div className='project-box'>
      <h1><a href="https://github.com/shilpa4103/Retail-Management">Threads & Trends</a> --  Stack: React, Node.js, MySQL</h1>
      <ul>
        <li>Developed a sophisticated web-based platform enabling users to effortlessly browse, select, and purchase a diverse range of apparel.</li>
        <li>Implemented a user-friendly interface with seamless navigation and integrated advanced search and filtering capabilities to enhance user experience.</li>
      </ul>
      </div>
      <div className='project-box'>
      <h1><a href="https://github.com/saichethanr/CoWork">Cowork</a> --  Stack: React, Node.js, PostgreSQL, Rest APIs, WebSockets, Cookies</h1>
      <ul>
        <li>Orchestrated the creation of a React interface interfaced with Node.js Backend and a resilient PostgreSQL Database, managing Rest-APIs to facilitate collaborative coding for multiple users, increasing productivity by 30%.</li>
        <li>Implemented state-of-the-art WebSockets technology to achieve seamless real-time communication, enhancing the collaborative coding experience, and reducing latency by 40%.</li>
      </ul>
      </div>
      <div className='project-box'>
      <h1><a href="https://github.com/saichethanr/classconnect">ClassConnect</a> --  Stack: HTML, CSS, JavaScript, Node.js, PostgreSQL, WebRTC, WebSockets</h1>
      <ul>
        <li>Developed a secure video conferencing application using Agora RTC with Automated Attendance Management: supporting over 200 concurrent users and enhancing security protocols</li>
        <li>Users could join rooms via room IDs, and attendance was automatically tracked based on stream start and end times, reducing manual attendance tracking time by 80% and providing accurate records,enhancing user experience and compliance.</li>
      </ul>
      </div>
      
      </div>
    </div>
  )
}

export default Projects
