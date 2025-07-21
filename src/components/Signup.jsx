import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import React from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux'
import { auth } from '../firebase';
import { loginsuccess } from '../store/authSlice';
import { Link, useNavigate } from 'react-router';
import { toast } from 'react-toastify';

const Signup = () => {
  const navigate=useNavigate();
    const {register,handleSubmit,reset}=useForm();
    const dispatch=useDispatch();
    const signuph=async(data)=>{
     try{
     const usercred=await createUserWithEmailAndPassword(auth,data.email,data.password)   
     const user=usercred.user;
     dispatch(loginsuccess({uid:user.uid,email:data.email,password:data.password}));
     console.log("signup success");
     toast.success("signup was succesful");
     navigate('/login')
     }catch(error){
     console.log("an error occured while signup")
     toast.error("an error occured while signup")
     }
    }
  return (
    <div  className='w-screen h-[520px] md:h-[580px] bg-gradient-to-br from-orange-200 to-orange-100 flex flex-col items-center justify-center'>
     <form onSubmit={handleSubmit(signuph)}  className='grid grid-cols-1 gap-4'>
       <input className='border rounded-lg px-4 py-1' type='email' placeholder='enter your email' {...register("email",{required:true})}/>
       <input className='border rounded-lg px-4 py-1' type='password' placeholder='enter your password' {...register("password",{required:true})}/>
       <button className='bg-orange-500 w-20 mx-15 px-4 py-1 rounded-full text-white cursor-pointer hover:bg-orange-900'  type='submit'>Signup</button> 
    </form> 
    <div className='flex flex-col items-center justify-center mt-10'>
    <p className='text-sm'>already have an account</p>
    <Link to='/login' className='underline text-blue-900'>login</Link>
    </div>
    </div>
  )
}

export default Signup
