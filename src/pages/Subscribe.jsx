import React from 'react'

const Subscribe = () => {
  return (
    <div className='w-screen h-full flex flex-col items-center justify-center mt-30 mb-10'>
      <div className='flex flex-col gap-3 bg-gradient-to-br from-orange-100 to-white px-10 md:px-40 py-20 rounded'>
        <h1 className='text-2xl md:text-3xl font-bold'>Get Exclusive Offers On Your Email</h1>
        <p>Subscribe to our newlattre and stay updated</p>
        <div>
            <input type='email' placeholder='Enter your Email' className='border border-white/110 rounded-xl px-4 py-1'/>
            <button className='px-4 py-1 bg-black text-white rounded-full mx-2'>Subscribe</button>
        </div>
      </div>
    </div>
  )
}

export default Subscribe
