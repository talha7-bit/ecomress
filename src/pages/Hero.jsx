import React from 'react'
import hand from '../assets/handicon.png'
import hero from '../assets/hero.jpeg'

const Hero = () => {
  return (
    <div className='bg-gradient-to-b from-orange-100 to-white w-screen h-screen flex items-center justify-center gap-5'>
      <div className='flex flex-col items-center justify-center gap-3'>
      <h3 className='text-xl font-semibold'>NEW ARRIVALS ONLY</h3>
      <div>
      <div className='flex '>
        <h1 className='text-3xl md:text-6xl md:text-6xl font-bold'>new</h1>
        <img src={hand} className='w-5 h-5 mt-2 ml-2'/>
      </div>
      <h1 className='text-3xl md:text-6xl font-bold'>collections</h1>
      <h1 className='text-3xl md:text-6xl font-bold'>for everyone</h1>
      <button className='mt-3 bg-orange-700 rounded-full px-4 py-1 text-white'>Latest Collection</button>
      </div>
      </div>
      <div>
      <img src={hero} className='h-50 md:h-100 w-[200px] md:w-[300px]'/>
      </div>
      
    </div>
  )
}

export default Hero
