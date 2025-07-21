import React, { useState } from 'react'
import { menscollection } from '../data/Menscollection'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {getDownloadURL, getStorage, ref, uploadBytes} from "firebase/storage"
import {addDoc, collection} from "firebase/firestore"
import { db } from '../firebase';
import { addpic } from '../store/pageSlice';

const Menscol = () => {
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const[value,setvalue]=useState("");
  const user=useSelector(state=>state.auth.user)
  const handleclick=async(item)=>{
    try{
   const docref=await addDoc(collection(db,"pic"),{
    name:item.name,
    image:item.image,
    description:item.description,
    price:item.price,
    oldprice:item.oldprice
   })
   const payload={
    id:docref.id,
    name:item.name,
    price:item.price,
    oldprice:item.oldprice,
    description:item.description,
    image:item.image
   }

   dispatch(addpic(payload));
   localStorage.setItem("selected",JSON.stringify(payload));
   console.log("success")
   navigate('/singlepage')
   
    }catch(error){
      console.log("an error occured");
    }
   
  }
  return (
    <div className='w-screen h-full flex items-center justify-center'>
    <div className='grid grid-cols-2 md:grid-cols-4 gap-2 p-7 md:p-20'>
      {menscollection.map((item)=>(
        <div key={item.id} className='rounded cursor-pointer' onClick={()=>handleclick(item)}>
          <img src={item.image} className='w-50 md:w-90 h-45 rounded-xl'/>
          <h1>{item.name}</h1>
          <h3 className='font-bold text-sm'>New Price:${item.price}</h3>
          <h5 className='text-sm text-gray-500'>Old Price:${item.oldprice}</h5>
        </div>
      ))}
    </div>
    </div>
  )
}

export default Menscol
