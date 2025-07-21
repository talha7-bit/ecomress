import React from 'react'
import { collections } from '../data/Collection'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addDoc ,collection} from 'firebase/firestore';
import { db } from '../firebase';
import { addpic } from '../store/pageSlice';

const Collections = () => {
   const dispatch=useDispatch();
  const navigate=useNavigate();
  const handleclick=async(data)=>{
    try{
    const docref=await addDoc(collection(db,"pics"),{
      name:data.name,
      image:data.image,
      price:data.price,
      oldprice:data.oldprice,
      description:data.description
      //description:item.escription
    })

    const payload=({
      id:docref.id,
      name:data.name,
      image:data.image,
      price:data.price,
      oldprice:data.oldprice,
      description:data.description
      //description:item.description
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
    <div className='w-screen h-full bg-gradient-to-br from-orange-100 to-white'>
        <h1 className='pt-10 flex items-center justify-center font-bold text-2xl md:text-5xl underline'> New Collections</h1>
        <div className='grid grid-cols-2 md:grid-cols-4 md:gap-1 p-5 md:p-40 md:pt-10 mt-5 md:mt-1'>
           
            {collections.map((item)=>(
                <div className='cursor-pointer' key={item.id} onClick={()=>handleclick(item)}>
                    <img src={item.image} className='w-50 md:w-70 h-30 md:h-40'/>
                    <h1 className='text-gray-500 font-semibold md:font-bold'>{item.name}</h1>
                    <h2 className='font-semibold '>Price:${item.price}</h2>
                    <h4>OLd Price:${item.oldprice}</h4>
                 </div>
            ))}
        </div>
      
    </div>
  )
}

export default Collections
