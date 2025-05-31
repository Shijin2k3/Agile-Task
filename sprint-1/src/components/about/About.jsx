import React from 'react'
import {motion} from 'framer-motion'
 


const About = () => {
  return (
    <div className="bg-black min-h-screen text-white py-15 pt-20" id="about">
      <motion.h1 whileInView={{opacity:1,x:0}} initial={{opacity:0,x:-100}} transition={{duration:0.5}}
       className="text-4xl font-bold uppercase text-center mb-12 tracking-wider">
        About Us
      </motion.h1>
      <div className="max-w-7xl mx-auto px-4 md:px-12 lg:px-32">
        <div className="flex flex-col items-center">
        
          <div className="w-full mb-10">
            <motion.p whileInView={{opacity:1,x:0}} initial={{opacity:0,x:100}} transition={{duration:1}}
            className="text-lg text-gray-200 leading-relaxed text-center">
              Welcome to Agile Job! We are dedicated to delivering innovative solutions that empower businesses and individuals to achieve their goals efficiently and effectively.
              Our team is passionate about driving positive change through technology, collaboration, and a commitment to excellence.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
            {/* Mission */}
            <div className="bg-white/10 rounded-xl shadow-lg p-8 flex flex-col items-center text-center hover:bg-cyan-900/30 transition-all duration-200">
              <motion.h2 whileInView={{opacity:1,y:0}} initial={{opacity:0,y:-40}} transition={{duration:1.2}}
               className="text-2xl font-semibold mb-3 text-orange-400">Our Mission</motion.h2>
              <motion.p whileInView={{opacity:1,y:0}} initial={{opacity:0,y:50}} transition={{duration:1.2}}
              className="text-base text-center">
                We strive to deliver innovative solutions that empower businesses and individuals to achieve their goals efficiently and effectively.
              </motion.p>
            </div>
            
            {/* Vision */}
            <div className="bg-white/10 rounded-xl shadow-lg p-8 flex flex-col items-center text-center hover:bg-cyan-900/30 transition-all duration-200">
              <motion.h2 whileInView={{opacity:1,y:0}} initial={{opacity:0,y:-40}} transition={{duration:1.2}}
               className="text-2xl font-semibold mb-3 text-orange-400">Our Vision</motion.h2>
              <motion.p whileInView={{opacity:1,y:0}} initial={{opacity:0,y:50}} transition={{duration:1.2}}
               className="text-base text-center">
                To inspire and empower individuals worldwide by delivering innovative, sustainable, and inclusive solutions that transform lives.
              </motion.p>
            </div>
            
            <div className="bg-white/10 rounded-xl shadow-lg p-8 flex flex-col items-center text-center hover:bg-cyan-900/30 transition-all duration-200">
              <motion.h2 whileInView={{opacity:1,y:0}} initial={{opacity:0,y:-40}} transition={{duration:1.2}}
               className="text-2xl font-semibold mb-3 text-orange-400">Our Culture</motion.h2>
              <motion.p whileInView={{opacity:1,y:0}} initial={{opacity:0,y:50}} transition={{duration:1.2}}
              className="text-base text-center">
                We are committed to integrity, innovation, and inclusivity. Our values guide us in creating a positive impact and fostering collaboration.
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About