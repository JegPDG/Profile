import { useState } from 'react'
import './App.css'
import About from './components/AboutPage/About'
import NavBar from './components/NavBar'
import Techstack from './components/AboutPage/TechStack'
import { FooterComp } from './components/FooterComp'


function App() {
  const [page, setPage] = useState(true);

  return (
    <>
    <div className="app-cont">
      <div className='upper'>
        <NavBar page={page} setPage={setPage}/>
        {page
        ?
        <> 
        <About/>
        <Techstack/>
        </>
        :
        null
        }
      </div>
      <div className='app-footer'>
        <FooterComp/>
      </div>
    </div>
    </>
  )
}

export default App
