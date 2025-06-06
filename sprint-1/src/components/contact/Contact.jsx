import React from 'react'
import { FaEnvelope, FaPhone , FaHome, FaInfoCircle, FaServicestack } from 'react-icons/fa'
import { FaMapMarkerAlt } from 'react-icons/fa'
import {Link} from 'react-scroll'

const Contact = () => {
  return (
    <section className="bg-black text-white py-16" id="contact">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-orange-400 text-center mb-10">Contact Us</h2>
        <div className="flex flex-col md:flex-row bg-white/10 rounded-2xl shadow-lg overflow-hidden">
          {/* Contact Info */}
          <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start p-8">
            <div className="mb-6">
              <div className="flex items-center mb-4">
                <FaEnvelope className="text-orange-400 text-xl mr-3" />
                <span className="text-base md:text-lg break-all"><a href="mailto:info@example.com">info@example.com</a></span>
              </div>
              <div className="flex items-center mb-4">
                <FaPhone className="text-orange-400 text-xl mr-3" />
                <a href="tel:+1234567890" className="text-base md:text-lg"> +1234567890</a>
              </div>
              <div className="flex items-center">
                <FaMapMarkerAlt className="text-orange-400 text-xl mr-3" />
                <span className="text-base md:text-lg">Bangalore, India</span>
              </div>
            </div> 
          </div>
          {/* Contact Form */}
          <div className="w-full bg-black/60 md:w-1/2 flex flex-col justify-center items-center md:items-start p-8">
            <div className="mb-6">
              <div className="flex items-center mb-4 cursor-pointer">
                  <FaHome className="text-orange-400 text-xl mr-3" />
                  <Link to='home' spy={true} offset={-100} smooth={true} className="text-base md:text-lg break-all">Home</Link>
                </div>
                <div className="flex items-center mb-4 cursor-pointer">
                  <FaInfoCircle className="text-orange-400 text-xl mr-3" />
                  <Link to='about' spy={true} offset={-100} smooth={true} className="text-base md:text-lg">About Us</Link>
                </div>
                <div className="flex items-center cursor-pointer">
                  <FaServicestack className="text-orange-400 text-xl mr-3" />
                  <Link to='services' spy={true} offset={-100} smooth={true} className="text-base md:text-lg">Services</Link>
                </div>
                </div>
             </div>
          </div>
      </div>
       <div className="text-gray-400 flex items-center justify-center text-xs md:text-sm mt-6 md:mt-10 text-center md:text-left">
         <p> &copy; {new Date().getFullYear()} Agile Job. All rights reserved.</p>
             
       </div>
    </section>
  )
}

export default Contact