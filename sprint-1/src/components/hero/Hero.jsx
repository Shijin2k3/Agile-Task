import React from 'react'
import profile from '../../assets/hero.jpg'



const Hero = () => {
  return (
    <div className='bg-black '  id='home'>
    <div className='relative w-full min-h-screen mt-10 bg-black text-white py-20'>
      <div className='w-[90%] xl:w-[80%] m-auto flex flex-col md:flex-row  items-center md:space-x-12 '>
         <div className='w-full lg:w-[50%] '>
            <div className='flex flex-col  justify-center  items-start'>
              <h1
              className='pb-10 text-4xl font-medium tracking-tight lg:mt-16 lg:text-5xl p-2'>Welcome to BL-Tech</h1>

              <p className=' max-w-xl text-lg mb-8 py-6 font-light tracking-tighter p-4'>At Tech Innovations Inc., we empower businesses with innovative software and IT services tailored to drive growth and success. Partner with us to unlock y
                our organization’s true potential through smart, reliable, and scalable technology., At Tech Innovations Inc., we empower businesses with innovative software and IT services tailored to drive growth and success. Partner with us to unlock 
                your organization’s true potential through smart, reliable, and scalable technology.
                a, inventore exercitationem dolorum nam provident perspiciatis.</p>

                <button className='ml-4 bg-orange-400 text-black px-6 py-3 rounded-md font-semibold hover:bg-orange-500 transition-colors 
                duration-300'>
                    View More
                </button>
            </div>
         </div>
         <div className='w-full  lg:w-[50%] flex items-center justify-center hover:shadow-lg transform mt-30 md:mt-0 transition-transform
                     duration-300 hover:scale-105'>
            <img alt='profile' src={profile} className='w-70 h-70  md:w-150 md:h-100 object-cover ' />
            
         </div>

        
      </div>
      
    </div>
    </div>
  )
}

export default Hero