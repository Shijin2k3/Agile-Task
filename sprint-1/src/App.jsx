import './App.css'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Hero from './components/hero/Hero'
import ResponsiveNav from './components/navbar/ResponsiveNav'
import Services from './components/services/Services'


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
