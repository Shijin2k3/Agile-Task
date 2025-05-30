import React from 'react'
import {services} from '../../data/data'

const Services = () => {
  return (
    <div className="bg-black min-h-screen py-16 px-4 " id='services'>
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-white text-center mb-12 uppercase tracking-wider">Our Services</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 cursor-pointer p-6">
          {services.map((service, i) => (
            <div
              key={i}
              className="bg-white/10 rounded-xl shadow-lg p-8 flex flex-col items-center text-center hover:bg-cyan-900/30 transition-all duration-200"
            >
              <img
                src={service.icon}
                alt={service.title}
                className="w-20 h-20 object-contain mb-4" // Ensures all images are the same size
              />
              <h2 className="text-2xl font-semibold text-orange-400 mb-2">{service.title}</h2>
              <p className="text-gray-300">{service.description}</p>
          </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Services