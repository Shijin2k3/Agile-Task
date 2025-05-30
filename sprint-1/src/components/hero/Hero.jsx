import React from 'react'
import profile from '../../assets/hero.jpg'



const Hero = () => {
  return (
    <div className='bg-black pb-10'  id='home'>
    <div className='relative w-full min-h-screen mt-10 bg-black text-white py-20'>
      <div className='w-[90%] xl:w-[80%] m-auto flex flex-col md:flex-row  items-center md:space-x-12 '>
         <div className='w-full lg:w-[50%] '>
            <div className='flex flex-col items-center justify-center  md:items-start'>
              <h1
              className='pb-10 text-4xl font-medium tracking-tight lg:mt-16 lg:text-5xl '>Welcome to bloom</h1>

              <p className=' max-w-xl text-lg mb-8 py-6 font-light tracking-tighter '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Volupta
                s nisi doloremque itaque deleniti! Iure quisquam tempora officia rerum excepturi quaerat illo unde nulla Lorem ipsum dolor sit amet consectetur adi
                pisicing elit. Sint itaque cupiditate inventore, fugit et voluptatibus fugiat distinctio a suscipit quibusdam delectus accusantium deserunt consequatu
                r illum dicta natus quaerat minima laudantium!
                a, inventore exercitationem dolorum nam provident perspiciatis.</p>

                <button className='bg-orange-400 text-black px-6 py-3 rounded-md font-semibold hover:bg-orange-500 transition-colors 
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