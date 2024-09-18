import React from 'react'
import DiningNavbar from './DiningNavbar'
import { useNavigate } from 'react-router-dom'

const Reservations = () => {

  const navigate=useNavigate();

  const handlecontact=()=>{
    navigate("/Contact")
  }
  return (
    <div>
      <DiningNavbar/>
      <h1 className='text-center font-bold serif italic text-yellow-800 text-3xl m-5'>Reserve Your Table</h1>
      <img src='https://images.pexels.com/photos/5086616/pexels-photo-5086616.jpeg?auto=compress&cs=tinysrgb&w=600'
       alt='Table Reserve'     className='w-full h-full bg-cover m-5 p-5'/>
       <div className=' p-8 text-center'>
        <button onClick={handlecontact}className='bg-yellow-500 rounded p-3 px-5 '>Contact Us</button>
        </div>
    </div>
  )
}

export default Reservations
