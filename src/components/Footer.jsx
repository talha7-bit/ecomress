import React from 'react'
import footer from '../assets/footer.png'
import { FaFacebook,FaTwitter,FaWhatsapp,FaInstagram } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='w-screen h-full flex flex-col items-center justify-center gap-4 bg-gradient-to-br from-orange-100 to-white p-30'>
      <div className='flex items-center justify-center'>
        <img src={footer} className='w-10 h-10'/>
        <h1 className='font-bold text-2xl'>SHOPPER</h1>
      </div>
      <ul className='flex items-center justify-center gap-2'>
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Conatct</li>
      </ul>
     <div className="flex gap-4 justify-center items-center">
  <a href="#"><FaFacebook className='text-blue-600 text-2xl' /></a>
  <a href="#"><FaTwitter className='text-blue-400 text-2xl' /></a>
  <a href="#"><FaInstagram className='text-pink-500 text-2xl' /></a>
  <a href="#"><FaWhatsapp className='text-green-500 text-2xl' /></a>
</div>
<p className='hidden md:flex'>----------------------------------------</p>
<p className='text-sm'>2025 @Copyright | All Rights Reserved</p>
    </div>
  )
}

export default Footer
