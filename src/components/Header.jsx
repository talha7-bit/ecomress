import React from 'react'
import pic from '../assets/mens/pic12.jpg'

const Header = ({picc}) => {
  return (
    <div className='flex items-center justify-center rounded-xl mt-5 mx-10 md:mx-20 p-2 md:p-5 gap-3 md:gap-30 bg-gradient-to-br from-orange-300 to-orange-200'>
      <div>
        <h1 className='text-3xl md:text-5xl text-orange-500 font-bold'>FLAT 50% OFF</h1>
        <h2 className='flex gap-2 font-semibold text-orange-500'>12 <p className='text-black'>Hours</p> 20 <p className='text-black'>Mins</p></h2>
        <button className='bg-orange-500 px-4 py-1 rounded-full text-white mt-4'>Explore Now</button>
      </div>
      <div>
        <img src={picc} className='w-40 md:w-50 h-40 md:h-50'/>
      </div>
    </div>
  )
}

export default Header
