import React from 'react'
import pic from '../assets/offer.jpg'
import { useNavigate } from 'react-router'

const Offer = () => {
  const navigate=useNavigate();
  return (
    <div className='w-screen h-screen flex items-center justify-center'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-15 bg-gradient-to-b from-orange-100 to-white p-30'>
        <div className=''>
            <h1 className='text-3xl md:text-6xl font-bold'>Exclusive</h1>
            <h2 className='mt-2 text-3xl md:text-6xl font-semibold'>Offer For You</h2>
            <h3 className='text-sm md:text-xl font-semibold'>Only On Best Sellers Products</h3>
            <button onClick={()=>navigate('/women')} className='mt-3 bg-orange-600 rounded-full px-4 py-1 text-white cursor-pointer'>Check Now</button>
        </div>
        <div>
            <img src={pic} className='w-90 h-50'/>
        </div>
      </div>
    </div>
  )
}

export default Offer
