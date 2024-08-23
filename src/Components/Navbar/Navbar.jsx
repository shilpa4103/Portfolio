import React from 'react'
import './Navbar.css'
import { useState } from 'react'
import underline from '../../assets/nav_underline.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Navbar = () => {
  const[menu,setMenu]=useState("home");
  return (
    <div className='navbar'>
      <h1>Portfolio.</h1>
      <ul className="nav-menu">
        <li><AnchorLink className='anchor-link' href="#home"><p onClick={()=>setMenu("home")}>About</p></AnchorLink>{menu==="home"?<img src={underline} alt=''/>:<></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href="#education"><p onClick={()=>setMenu("education")}>Education</p></AnchorLink>{menu==="education"?<img src={underline} alt=''/>:<></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href="#skills"><p onClick={()=>setMenu("skills")}>Skills</p></AnchorLink>{menu==="skills"?<img src={underline} alt=''/>:<></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href="#projects"><p onClick={()=>setMenu("projects")}>Projects</p></AnchorLink>{menu==="projects"?<img src={underline} alt=''/>:<></>}</li>

      </ul>
      <div className="nav-connect"><AnchorLink className='anchor-link' offset={50} href="#contact"><p onClick={()=>setMenu("contact")}>Connect with me</p></AnchorLink></div>
    </div>
  )
}

export default Navbar
