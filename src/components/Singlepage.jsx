import { addDoc, collection } from 'firebase/firestore';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add } from '../store/cartSlice';
import { db } from '../firebase';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Singlepage = () => {
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const user=useSelector(state=>state.auth.user)
    const item=useSelector(state=>state.page.pics);
    const fallback=localStorage.getItem("selected");
    const data=item||(fallback&& JSON.parse(fallback));
    if(!data){
        return <p>No Item Found.Please Go Back And Select</p>
    }
    const handleclick=async(list)=>{
        if(!user||!user.uid){
            toast.success("log in first")
            return;
        }
    try{
     const docref=await addDoc(collection(db,"pics"),{
        name:list.name,
        image:list.image,
        price:list.price,
        uid:user.uid
     })   
     const payload={
        id:docref.id,
        name:list.name,
        price:list.price,
        image:list.image,
        uid:user.uid
     }
     dispatch(add(payload));
    // localStorage.setItem("added",JSON.stringify(payload))
     navigate('/cart')
     console.log("item added succesfully");
     toast.success("item added succesfully")
    }catch(error){
        console.log("an error occured while adding to cart",error.message)
        toast.error("an error occured while adding to cart")
      }
    }

  return (
    <div className='w-screen h-[550px] flex flex-col items-center justify-center'>
   <h1 className='text-xl md:text-3xl font-bold mb-5 mt-5'>{data.name}</h1>
    <div className='flex flex-col md:flex-row items-center justify-center'>
    <div className='flex items-center mx-5 md:mx-50 gap-3'>
    
         <div className='flex flex-col gap-2'>
       <img src={data.image} className='h-17'/> 
       <img src={data.image} className='h-17'/> 
       <img src={data.image} className='h-17'/> 
       <img src={data.image} className='h-17'/> 

      </div>
             <img src={data.image} className='h-80 md:h-95'/>
      </div>
      <div className='flex flex-col mt-3 gap-2 md:gap-4 mx-4'>
       
      
      <h3 className='text-xl font-bold'>Price:${data.price}</h3>
      <h6 className='text-sm font-semibold text-gray-500'>Old Price:${data.oldprice}</h6>
      <p className='text-sm max-w-80 font-semibold'>{data.description}</p>
      </div>
    </div>
    <button className='bg-blue-500 rounded-full text-white px-4 py-1 mt-5 cursor-pointer' onClick={()=>handleclick(data)}>Add To Cart</button>
    </div>
  )
}

export default Singlepage
