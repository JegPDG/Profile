import { useState } from 'react'
import './App.css'
import About from './components/AboutPage/About'
import NavBar from './components/NavBar'
import Techstack from './components/AboutPage/TechStack'


function App() {

  return (
    <>
    <NavBar/>
    <About/>
    <Techstack/>
    </>
  )
}

export default App
