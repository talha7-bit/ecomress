import React from 'react'
import Header from './Header'
import Footer from './Footer'
import pic from '../assets/popularpics/pic4.jpg'
import Womencol from '../pages/Womencol'


const Women = () => {
  return (
    <div className='w-screen h-full'>
        <Header picc={pic}/>
        <Womencol/>
        
      
    </div>
  )
}

export default Women
