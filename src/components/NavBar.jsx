import React from 'react'
import './AboutPage/about.css'
import { assets } from '../assets/assets'

const NavBar = () => {
  return (
    <div className='NavCont'>
      <div>
        <img src={assets.aboutIcon} alt="" />
       <p>About</p>
      </div>
      <div>
        <img src={assets.projectsIcon} alt="" />
        <p>Projects</p>
      </div>
    </div>

  )
}

export default NavBar