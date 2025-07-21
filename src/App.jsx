import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Shop from './components/Shop'
import Footer from './components/Footer'
import Mens from './components/Mens'
import Women from './components/Women'
import Kids from './components/Kids'
import Login from './components/Login'
import Signup from './components/Signup'
import Singlepage from './components/Singlepage'
import Cart from './components/Cart'
import Mobilemenu from './components/Mobilemenu'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify'


function App() {
  const [show, setshow] = useState(false);
useEffect(()=>{
  toast.success("toast test");
},[])
  return (
 <div>
  <BrowserRouter>
  
  <Navbar toggleshow={()=>setshow(!show)}/>
  {show && (
    <div className='' onClick={()=>setshow(false)}>
    <Mobilemenu/>
    </div>
  )}
  <Routes>
    <Route path='/' element={<Shop/>}/>
    <Route path='/men' element={<Mens/>}/>
    <Route path='/women' element={<Women/>}/>
    <Route path='/kids' element={<Kids/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/signup' element={<Signup/>}/>
    <Route path='/singlepage' element={<Singlepage/>}/>
    <Route path='/cart' element={<Cart/>}/>
  </Routes>
  <Footer/>
  </BrowserRouter>
  <ToastContainer
  position='top-right'
  autoClose={1000}
  hideProgressBar={false}
  closeOnClick
  pauseOnHover
  draggable
  theme='colored'
  />
 </div>
  )
}

export default App
