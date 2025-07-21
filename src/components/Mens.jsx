import React from 'react'
import Menscol from '../pages/Menscol'
import Header from './Header'
import pics from '../assets/mens/pic12.jpg'

const Mens = () => {
  return (
    <div>
    <Header picc={pics}/>
    <Menscol/>
    </div>
  )
}

export default Mens
