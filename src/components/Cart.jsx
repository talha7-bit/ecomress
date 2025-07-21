import { collection, deleteDoc, doc, getDocs, query, where } from 'firebase/firestore'
import React, { useEffect } from 'react'
import { set } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux'
import { remove, setit } from '../store/cartSlice';
import { db } from '../firebase';

const Cart = () => {
    const user=useSelector(state=>state.auth.user)
const dispatch=useDispatch();
    const fetch=async()=>{
        if(!user||!user.uid) console.log("user is not logged in");
        try{
            console.log("fetching cart")
          const q=query(collection(db,"pics"),
        where("uid","==",user.uid));
        const querysnapshot=await getDocs(q);
        console.log("querysnapshotsize",querysnapshot.size);
        const item=querysnapshot.docs.map(doc=>({
            id:doc.id,
            ...doc.data()
        }))  
        dispatch(setit(item));
        console.log(item)

        }catch(error){
            console.log("an error occured")
        }
    }
    const items=useSelector(state=>state.cart.pics);
    const handleremove=async(it)=>{
try{
    await deleteDoc(doc(db,"pics",it));
    dispatch(remove(it))

}catch(error){
    console.log("an error occured while removing",error.message)
}
}
useEffect(()=>{
    fetch();
},[])
const totalprice=items.reduce((acc,item)=>acc + Number(item.price),0)

  return (
    <div className='w-screen h-full mt-20 mb-5 flex flex-col mx-3 md:mx-60 gap-2'>
        {items.length==0?(<p>No item found</p>):(
        
            items.map(item=>(
                <div key={item.id} className='flex items-center justify-between gap-10 px-4 py-2 font-semibold w-110 md:w-200 border'>
                 <h1>{item.name}</h1>
                 <p>${item.price}</p>
                 <button className='bg-pink-200 rounded-lg px-4 py-1 cursor-pointer' onClick={()=>handleremove(item.id)}>Remove</button>
                </div>
            ))
        )}
        <h1 className='mt-10 text-2xl font-bold'>Total:<span className='text-xl font-semibold'>${totalprice.toFixed(2)}</span></h1>
      <button className='bg-blue-500 px-4 py-1 rounded-lg w-50 mt-10'>Proceed To Payment</button>
    </div>
  )
}

export default Cart
