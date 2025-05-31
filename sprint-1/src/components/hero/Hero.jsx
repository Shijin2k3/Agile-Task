import React from 'react'
import profile from '../../assets/hero.jpg'
import {motion} from 'framer-motion'
 
const container=(delay) =>({
  hidden:{x:-100,opacity:0},
  visible:{
    x:0,opacity:1,
    transition:{duration:0.5,delay:delay}
  }
})




const Hero = () => {
  return (
    <div className='bg-black '  id='home'>
    <div className='relative w-full min-h-screen mt-10 bg-black text-white py-20'>
      <div className='w-[90%] xl:w-[80%] m-auto flex flex-col md:flex-row  items-center md:space-x-12 '>
         <div className='w-full lg:w-[50%] '>
            <div className='flex flex-col  justify-center  items-start'>
              <motion.h1 variants={container(0)} initial='hidden' animate='visible'
              className='pb-10 text-4xl font-medium tracking-tight lg:mt-16 lg:text-5xl p-2'>Welcome to BL-Tech</motion.h1>

              <motion.p variants={container(0.5)} initial='hidden' animate='visible'
              className=' max-w-xl text-lg mb-8 py-6 font-light tracking-tighter p-4'>At Tech Innovations Inc., we empower businesses with innovative software and IT services tailored to drive growth and success. Partner with us to unlock y
                our organization’s true potential through smart, reliable, and scalable technology., At Tech Innovations Inc., we empower businesses with innovative software and IT services tailored to drive growth and success. Partner with us to unlock 
                your organization’s true potential through smart, reliable, and scalable technology.
                a, inventore exercitationem dolorum nam provident perspiciatis.</motion.p>

                <motion.button variants={container(1)} initial='hidden' animate='visible'
                className='ml-4 bg-orange-400 text-black px-6 py-3 rounded-md font-semibold hover:bg-orange-500 transition-colors 
                duration-300'>
                    View More
                </motion.button>
            </div>
         </div>
         <div className='w-full  lg:w-[50%] flex items-center justify-center hover:shadow-lg transform mt-30 md:mt-0 transition-transform
                     duration-300 hover:scale-105'>
            <motion.img initial={{x:100,opacity:0}} animate={{x:0,opacity:1}} transition={{duration:1,delay:1.2}}
            alt='profile' src={profile} className='w-70 h-70  md:w-150 md:h-100 object-cover ' />
            
         </div>

        
      </div>
      
    </div>
    </div>
  )
}

export default Hero