import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Mobilemenu = () => {
const[sho,setsho]=useState(false);
  return (
    <div>
        <ul className='w-screen h-[550px] flex flex-col items-center justify-center bg-white gap-4 list-none'>
        <li><Link to='/'>Shop</Link></li>
        <li><Link to='/men'>Men</Link></li>
        <li><Link to='/women'>Women</Link></li>
        <li><Link to='/kids'>Kids</Link></li>
        </ul>
      </div>
  )
}

export default Mobilemenu
