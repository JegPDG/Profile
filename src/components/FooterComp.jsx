import React from 'react'
import { assets } from '../assets/assets'

export const FooterComp = () => {
  return (
    <div className='Footer'>
      <div>
        <img src={assets.facebookicon} alt="" />
        <img src={assets.instagramicon} alt="" />
      </div>
    </div>
  )
}
