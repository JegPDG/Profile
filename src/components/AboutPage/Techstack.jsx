import React from 'react'
import { assets } from '../../assets/assets'

const Techstack = () => {

  const frontIcon = [ {icon: assets.html_icon, name:'HTML'}, {icon: assets.css_icon, name:'CSS'}, {icon:assets.js_icon, name:'Javascript'}, {icon:assets.react_icon, name:'React.js'}, {icon: assets.vscode_icon, name:'VS Code'}]

  const graphicsList = [{icon: assets.asesprite_acon, name:'Aseprite'}, {icon: assets.photoshop_icon, name:'Photoshop'}, {icon: assets.illustrator_icon, name:'Illustrator'}]
  
  return (
    <div className='techStackMain'>
      <p className="techstackTitle">
        Technical Skills
      </p>

{/* FIRST PART */}
      <div className="technologies">
        <p className="skill-title">
          Frontend Development fic
        </p>
        <ul>
          {frontIcon.map((front, index) => (
            <li key={index}>
              <div className='box-for-img'>
                <div className="imgCont">
                  <div className="tech-box">
                    <img src={front.icon} alt="" />
                    <p>{front.name} </p>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

{/* SECOND PART */}
      <div className="technologies">
        <p className="skill-title">
          Graphics
        </p>
        <ul>
          {graphicsList.map((graphics, index) => (
            <li key={index}>
              <div className='box-for-img'>
                <div className="imgCont">
                  <div className="tech-box">
                    <img src={graphics.icon} alt="" />
                    <p>{graphics.name} </p>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
        {/* <div className='box-for-img'>

          <div className="imgCont">
            <div className="tech-box">
              <img src={assets.asesprite_acon} alt="" />
              <p>Aseprite</p>
            </div>
          </div>
          <div className="imgCont">
            <div className="tech-box">
              <img src={assets.photoshop_icon} alt="" />
              <p>Photoshop</p>
            </div>
          </div>
          <div className="imgCont">
            <div className="tech-box">
              <img src={assets.illustrator_icon} alt="" />
              <p>Illustrator</p>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default Techstack