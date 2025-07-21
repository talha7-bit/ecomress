import { signInWithEmailAndPassword } from 'firebase/auth';
import React from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux'
import { auth } from '../firebase';
import { loginsuccess } from '../store/authSlice';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';



const Login = () => {
    const {register,handleSubmit,reset}=useForm();
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const loginh=async(data)=>{
     try{
     const usercred=await signInWithEmailAndPassword(auth,data.email,data.password)   
     const user=usercred.user;
     dispatch(loginsuccess({uid:user.uid,email:data.email,password:data.password}));
     console.log("login success");
     toast.success("login was successful")
     navigate('/')
     }catch(error){
     console.log("an error occured while login")
     toast.error("an error occured while login")
     }
    }
  return (
    <div className='w-screen h-[520px] md:h-[580px] bg-gradient-to-br from-orange-200 to-orange-100 flex flex-col items-center justify-center'>
     <div className=''>
     <form onSubmit={handleSubmit(loginh)} className='grid grid-cols-1 gap-4'>
       <input className='border rounded-lg px-4 py-1' type='email' placeholder='enter your email' {...register("email",{required:true})}/>
       <input className='border rounded-lg px-4 py-1' type='password' placeholder='enter your password' {...register("password",{required:true})}/>
       <button className='bg-orange-500 w-20 mx-15 px-4 py-1 rounded-full text-white cursor-pointer hover:bg-orange-900' type='submit'>Login</button> 
    </form>
    <div className='flex flex-col items-center justify-center mt-10'>
    <p className='text-sm'>Do not have an account</p>
    <Link to='/signup' className='underline text-blue-900'>signup</Link>
    </div> 
    </div>
    </div>
  )
}

export default Login
