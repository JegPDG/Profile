import React from 'react'
import './AboutPage/about.css'
import { assets } from '../assets/assets'

const NavBar = (props) => {
  const {setPage} = props;


  return (
    <div className='NavCont'>
      <div  onClick={() => {
          setPage(true)
        }
      }>
        <img src={assets.aboutIcon} alt="" />
       <p>About</p>
      </div>
      <div  onClick={() => {
          setPage(false)
        }
      }>
        <img src={assets.projectsIcon} alt="" />
        <p>Projects</p>
      </div>
    </div>

  )
}

export default NavBar