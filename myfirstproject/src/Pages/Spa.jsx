import React from 'react'
import Navbar from '../Component/Navbar'
import { useNavigate } from 'react-router-dom';

const Spa = () => {

  

  const navigate = useNavigate(); // Initialize useNavigate

  const handlesubmit = () => {
    navigate('/Contact'); // Navigate to the TargetPage
  };
  return (
    <div>
         <Navbar/>
        <h1 className='bold font-serif italic text-3xl py-10 text-yellow-800 bg-gray-100 text-center' >Spa at rk residency</h1>
        <div className='flex'>
          {/* Image Section */}
        <div className="w-1/2 bg-gray-200">
        <img src='https://res.cloudinary.com/simplotel/image/upload/x_0,y_100,w_1920,h_1080,r_0,c_crop,q_80,fl_progressive/w_825,f_auto,c_fit/jenneys-residency/wellness-589774_1920_s9zukh'
        alt="spa image"
        className='w-full h-full object-cover '/>
        </div>
        <br/>
        <br/>
      {/* Text Section */}
        <div className='w-1/2 p-8 flex items-center justify-center bg-gray-100'>
        <p className="text-xl font-medium  text-yellow-700">
        Let your mind and muscles relax as we knead out your stress at our spa in Coimbatore. Our masseurs and masseuses are well trained to help you rejuvenate yourself and breathe a new life into you after a tiring day! We provide several types of massages and treatments that can help you unwind and restore you to your normal self!
        <br/>
        <br/>
         Timings:  10:00 AM - 8:00 PM</p>
         <br/>
         <br/>
         {/*button*/}

        
         
         
         </div>

         
        
        </div>
        <div className=' p-8 text-center'>
        <button onClick={handlesubmit}className='bg-yellow-500 rounded p-3 px-5'>Contact Us</button>
        </div>

    </div>
  )
}

export default Spa
