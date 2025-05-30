import React from 'react'

const About = () => {
  return (
    <div className='bg-black text-white pb-20  ' id='about'>
        <div className=' mx-auto px-8 md:px-16 lg:px-24'>
            <h1 className='text-4xl font-bold uppercase text-center mb-12'>About Us</h1>
            <div className='flex flex-col lg:flex-row  items-center lg:space-x-12'>
                <img 
                className='w-72 h-80 rounded object-cover mb-8 lg:mb-0' />
             <div className='flex-1'>
                <p 
                className='text-lg mb-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores dicta est, modi
                 vitae reiciendis quis, fugit pariatur blanditiis quam repudiandae vero provident consequatur voluptas, accusantium 
                 unde nulla iure assumenda r
                eprehenderit saepe maxime? Commodi ea doloribus, hic veniam molestiae incidunt ullam quam odit, quidem quae eum quis 
                cum beatae nisi amet?olutions Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis debitis at vel enim, i
                llo inventore voluptatibus repellendus aut odio, dolore eos possimus laborum. Laborum hic molestias eum voluptate voluptatem eaque.
                </p>
                <div className='space-y-4' >
                  
               </div>
              </div>
           </div>
        </div>
    </div>
  )
}

export default About