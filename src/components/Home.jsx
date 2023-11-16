import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'

function Home() {
  return (
    <div name='home' className='w-full h-screen bg-black '>

        {/* container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full text-[#646881]'>
            <p className='text-[#e93f33] text-xl'> Hi, my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#968d79]'>Guyo Halake</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#1C202D]'>I'm a Software Engineering Student</h2>
            <p className='py-4 max-w-[700px]'> I’m a Software engineering student specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I’m focused on
          building responsive full-stack web applications.</p>
          <div>
            <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#e93f33]'>View Work 
            <span className='group-hover:rotate-90 duration-300'>
            <HiArrowNarrowRight className='ml-3'/>
            </span>
            </button>
          </div>
        </div>
     </div>
  )
}

export default Home