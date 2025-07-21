import React from 'react'

const Subscribe = () => {
  return (
    <div className='w-screen h-full flex flex-col items-center justify-center mt-30 mb-10'>
      <div className='flex flex-col gap-3 bg-gradient-to-br from-orange-100 to-white px-10 md:px-40 py-20 rounded'>
        <h1 className='text-2xl md:text-3xl font-bold'>Get Exclusive Offers On Your Email</h1>
        <p>Subscribe to our newlatter and stay updated</p>
        <div>
            <input type='email' placeholder='Enter Email' className='w-40 md:w-70 border border-white/110 rounded-xl px-2 md:px-4 py-1'/>
            <button className='mt-2 md:mt-1 px-1 md:px-4 py-1 bg-black text-white rounded-lg mx-1 md:mx-2 text-sm md:text-xl'>Subscribe</button>
        </div>
      </div>
    </div>
  )
}

export default Subscribe
