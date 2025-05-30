import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import MobileNav from './components/navbar/MobileNav'
import ResponsiveNav from './components/navbar/ResponsiveNav'
import Hero from './components/hero/Hero'
import About from './components/about/About'

function App() {


  return (
  
    <div className='overflow-hidden'>
      <ResponsiveNav/>
      <Hero/>
      <About/>
    </div>
    
    
  )
}

export default App
