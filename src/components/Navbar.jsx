import React from 'react'
import logo from '../assets/logo.jpg'
import cart from '../assets/cart.png'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { signOut } from 'firebase/auth'
import { auth } from '../firebase'
import { logoutsuccess } from '../store/authSlice'
import { clear, remove } from '../store/cartSlice'
import { Menu } from 'lucide-react'
import { toast } from 'react-toastify'



const Navbar = ({toggleshow}) => {
  const dispatch=useDispatch()
  const user=useSelector(state=>state.auth.user);
  const navigate=useNavigate();
  const handle=async()=>{
    if(user){
    try{
      dispatch(clear());
     await signOut(auth);
     dispatch(logoutsuccess());
     console.log("logout successful");
     toast.success("logout successful")
    }catch(error){
      console.log("an error occured while logout",error.message);
      toast.error("an error occured while logout")
    }
  }else{
    navigate('/login')
  }
  }
  const handlecart=()=>{
    if(!user){
      toast.success("please login first")
    }else{
      navigate('/cart')
    }
  }
  return (
    <div className='flex items-center justify-between mt-3'>
     <div className='flex items-center -justify-center gap-3 mx-5'>
    <img src={logo} className='w-12 h-10'/>
    <h1 className='text-2xl font-bold'>SHOPPERS</h1>
      </div> 
      <div className='hidden md:flex'>
        <ul className='flex items-center justify-center gap-4 list-none'>
        <li><NavLink className={({isActive})=>isActive?'text-orange-600 underline mb-5':""} to='/'>Shop</NavLink></li>
        <li><NavLink className={({isActive})=>isActive?'text-orange-600 underline mb-2':""} to='/men'>Men</NavLink></li>
        <li><NavLink className={({isActive})=>isActive?'text-orange-600 underline mb-2':""} to='/women'>Women</NavLink></li>
        <li><NavLink className={({isActive})=>isActive?'text-orange-600 underline mb-2':""} to='/kids'>Kids</NavLink></li>
        </ul>
      </div>
      <div className='flex items-center justify-center gap-3 mr-5 list-none'>
        <li className='border rounded px-4 py-1 cursor-pointer'><Link to='/login' onClick={()=>handle()}>{user? "Logout":"Login"}</Link></li>
        <img src={cart} className='w-12 h-10 cursor-pointer' onClick={()=>handlecart()}/>
        <Menu className='md:hidden cursor-pointer' onClick={toggleshow}/>
      </div>
      
    </div>
  )
}

export default Navbar
