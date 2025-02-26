import React from 'react'
import { assets } from '../../assets/assets'

const Techstack = () => {
  return (
    <div className='techStackMain'>
      <p className="techstackTitle">
        Technical Skills
      </p>

{/* FIRST PART */}
      <div className="technologies">
        <p className="skill-title">
          Frontend Development
        </p>
        <div className='box-for-img'>
          <div className="imgCont">
            <div className="tech-box">
              <img src={assets.html_icon} alt="" />
              <p>HTML</p>
            </div>
          </div>
          <div className="imgCont">
            <div className="tech-box">
              <img src={assets.css_icon} alt="" />
              <p>CSS</p>
            </div>
          </div>
          <div className="imgCont">
            <div className="tech-box">
              <img src={assets.js_icon} alt="" />
              <p>Javascript</p>
            </div>
          </div>
          <div className="imgCont">
            <div className="tech-box">
              <img src={assets.react_icon} alt="" />
              <p>React.js</p>
            </div>
          </div>
          <div className="imgCont">
            <div className="tech-box">
              <img src={assets.vscode_icon} alt="" />
              <p>VS Code</p>
            </div>
          </div>
        </div>
      </div>

{/* SECOND PART */}
      <div className="technologies">
        <p className="skill-title">
          Graphics
        </p>
        <div className='box-for-img'>
          <div className="imgCont">
            <div className="tech-box">
              <img src={assets.html_icon} alt="" />
              <p>HTML</p>
            </div>
          </div>
          <div className="imgCont">
            <div className="tech-box">
              <img src={assets.css_icon} alt="" />
              <p>CSS</p>
            </div>
          </div>
          <div className="imgCont">
            <div className="tech-box">
              <img src={assets.js_icon} alt="" />
              <p>Javascript</p>
            </div>
          </div>
          <div className="imgCont">
            <div className="tech-box">
              <img src={assets.react_icon} alt="" />
              <p>React.js</p>
            </div>
          </div>
          <div className="imgCont">
            <div className="tech-box">
              <img src={assets.vscode_icon} alt="" />
              <p>VS Code</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Techstack