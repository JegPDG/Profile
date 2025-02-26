import React from 'react'
import { assets } from '../../assets/assets'

const About = () => {
  return (
   <>
   <div className='contforIntro'>
    <div className="bgImg">
      <img src={assets.bg_img_squiggle} alt="" />
    </div>
    <div className='introCont'>
        <div className="textCont">
          <p>Hi, it's Jeg</p>
          <p>an aspiring web developer</p>
          <p>I'm a computer science student and aspiring web developer passionate about building intuitive and engaging websites, eager to grow in front-end and back-end development.</p>
        </div>
        <div className="profilePic">
          <img src={assets.prof_pic} alt="" />
        </div>
    </div>
   </div>
   </>
  )
}

export default About