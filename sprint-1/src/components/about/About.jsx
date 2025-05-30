import React from 'react'

const About = () => {
  return (
    <div className="bg-black min-h-screen text-white py-15 pt-20" id="about">
      <h1 className="text-4xl font-bold uppercase text-center mb-12 tracking-wider">
        About Us
      </h1>
      <div className="max-w-7xl mx-auto px-4 md:px-12 lg:px-32">
        <div className="flex flex-col items-center">
        
          <div className="w-full mb-10">
            <p className="text-lg text-gray-200 leading-relaxed text-center">
              Welcome to Agile Job! We are dedicated to delivering innovative solutions that empower businesses and individuals to achieve their goals efficiently and effectively.
              Our team is passionate about driving positive change through technology, collaboration, and a commitment to excellence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
            {/* Mission */}
            <div className="bg-white/10 rounded-xl shadow-lg p-8 flex flex-col items-center text-center hover:bg-cyan-900/30 transition-all duration-200">
              <h2 className="text-2xl font-semibold mb-3 text-orange-400">Our Mission</h2>
              <p className="text-base text-center">
                We strive to deliver innovative solutions that empower businesses and individuals to achieve their goals efficiently and effectively.
              </p>
            </div>
            
            {/* Vision */}
            <div className="bg-white/10 rounded-xl shadow-lg p-8 flex flex-col items-center text-center hover:bg-cyan-900/30 transition-all duration-200">
              <h2 className="text-2xl font-semibold mb-3 text-orange-400">Our Vision</h2>
              <p className="text-base text-center">
                To inspire and empower individuals worldwide by delivering innovative, sustainable, and inclusive solutions that transform lives.
              </p>
            </div>
            
            <div className="bg-white/10 rounded-xl shadow-lg p-8 flex flex-col items-center text-center hover:bg-cyan-900/30 transition-all duration-200">
              <h2 className="text-2xl font-semibold mb-3 text-orange-400">Our Culture</h2>
              <p className="text-base text-center">
                We are committed to integrity, innovation, and inclusivity. Our values guide us in creating a positive impact and fostering collaboration.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About