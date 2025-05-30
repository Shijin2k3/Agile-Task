import React from 'react'
import { FaEnvelope, FaPhone } from 'react-icons/fa'
import { FaMapMarkerAlt } from 'react-icons/fa'

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
                <span className="text-base md:text-lg break-all"><a href="mailto:contact@agilejob.com">contact@agilejob.com</a></span>
              </div>
              <div className="flex items-center mb-4">
                <FaPhone className="text-orange-400 text-xl mr-3" />
                <span className="text-base md:text-lg">+91-9876543210</span>
              </div>
              <div className="flex items-center">
                <FaMapMarkerAlt className="text-orange-400 text-xl mr-3" />
                <span className="text-base md:text-lg">Bangalore, India</span>
              </div>
            </div>
            <div className="text-gray-400 text-xs md:text-sm mt-6 md:mt-0 text-center md:text-left">
              &copy; {new Date().getFullYear()} Agile Job. All rights reserved.
            </div>
          </div>
          {/* Contact Form */}
          <div className="w-full md:w-1/2 bg-black/60 p-8 flex flex-col justify-center">
            <form className="space-y-5">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
              <button
                type="submit"
                className="w-full py-2 rounded bg-orange-400 text-black font-semibold hover:bg-orange-300 transition-all duration-200"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact