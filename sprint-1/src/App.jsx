import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import MobileNav from './components/navbar/MobileNav'
import ResponsiveNav from './components/navbar/ResponsiveNav'
import Hero from './components/hero/Hero'
import About from './components/about/About'
import Services from './components/services/Services'
import Contact from './components/contact/Contact'

function App() {


  return (
  
    <div className='overflow-hidden'>
      <ResponsiveNav/>
      <Hero/>
      <About/>
      <Services/>
      <Contact/>
    </div>
    
    
  )
}

export default App
