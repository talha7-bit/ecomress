import React from 'react'
import {data} from '../Data';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../firebase';
import { useDispatch } from 'react-redux';
import { addpic } from '../store/pageSlice';
import { useNavigate } from 'react-router-dom';

const Popular = () => {
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const handleclick=async(data)=>{
    try{
    const docref=await addDoc(collection(db,"pics"),{
      name:data.name,
      image:data.image,
      price:data.newprice,
      oldprice:data.oldprice,
      
      description:data.description
    })

    const payload=({
      id:docref.id,
      name:data.name,
      image:data.image,
      price:data.newprice,
      oldprice:data.oldprice,
      description:data.description
    })
dispatch(addpic(payload));
localStorage.setItem("added",JSON.stringify(payload));
console.log("succesfully added the pic");
navigate('/singlepage');
    }catch(error){
      console.log("an error occured while adding pic",error.message)
    }
  }
  return (
    <div className='w-screen h-screen flex flex-col items-center bg-gradient-to-br from-orange-100 to-white'>
      <h1 className='text-3xl md:text-5xl font-bold mt-15 underline'>Popular In Women</h1>
      <div className='grid grid-cols-2 md:grid-cols-4 gap-1 md:gap-5 mx-5 md:mx-20 mt-1 md:mt-15'>
      {data.map((item,i)=>(
        <div className='rounded cursor-pointer' key={i} onClick={()=>handleclick(item)}>
            <img src={item.image} className='h-40 md:h-70 w-90 '/>
            <h1 className='text-sm font-semibold'>{item.name}</h1>
            <h2 className='text-xl text-black font-bold'>New Price:${item.newprice}</h2>
            <h3 className='text-gray-500 font-semibold'>Old Price:${item.oldprice}</h3>
        </div>
      ))}
      </div>
    </div>
  )
}

export default Popular
