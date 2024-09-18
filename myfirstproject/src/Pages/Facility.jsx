import React from 'react'
import Navbar from '../Component/Navbar'
import { useNavigate } from 'react-router-dom'

const Facility = () => {

  const navigate=useNavigate();

  const handlebutton=()=>{
    navigate('/');
  };
  return (
    <div>
         <Navbar/>
      <h1 className='font-bold text-3xl text-center font-serif italic text-yellow-800 mt-5'>Facility in rk residency </h1>
      <div className='flex'>
        <div className='w-1/3 m-10'>
          <img src='https://res.cloudinary.com/simplotel/image/upload/q_80,fl_progressive,w_352,h_198,f_auto,c_fit/jenneys-residency-coimbatore/Reception__Avinashi_Road_Hotels__Coimbatore_Hotels__Banquet_Halls_in_Coimbatore_wyfhic.jpg'
          alt='Clubmembership1'/>
          <img src='https://res.cloudinary.com/simplotel/image/upload/q_80,fl_progressive,w_352,h_198,f_auto,c_fit/jenneys-residency-coimbatore/Add_a_subheading_yrcic1_r1rwc2.jpg'
          alt='Clubmembership of the resort'/></div>

        <div className='w-1/3 m-10'>
          <img src='https://res.cloudinary.com/simplotel/image/upload/q_80,fl_progressive,w_352,h_198,f_auto,c_fit/jenneys-residency-coimbatore/Add_a_subheading_5_lczxeo_pgmdh0.jpg'
          alt="Swimming pool1"/>
          <img src='https://res.cloudinary.com/simplotel/image/upload/q_80,fl_progressive,w_352,h_198,f_auto,c_fit/jenneys-residency-coimbatore/_MG_0443__Avinashi_Road_Hotels__Coimbatore_Hotels__Banquet_Halls_in_Coimbatore_q5iq0y.jpg'
          alt="swimming pool2"/>
          </div>

        <div className='w-1/3 m-10'>
          <img src='https://res.cloudinary.com/simplotel/image/upload/q_80,fl_progressive,w_352,h_198,f_auto,c_fit/jenneys-residency-coimbatore/alan-caishan-cU53ZFBr3lk-unsplash_fnkgle_tstshe.jpg'
          alt='spa1'/>
          <img src='https://res.cloudinary.com/simplotel/image/upload/q_80,fl_progressive,w_352,h_198,f_auto,c_fit/jenneys-residency-coimbatore/Add_a_subheading_2_kj1adb_qxuo79.jpg'
          alt='spa2'/>
        </div>

      </div>
      <div className=' p-4 text-center'>
        <button onClick={handlebutton} className='bg-yellow-700 rounded p-3 px-5 '>HOME</button>
      </div>
      
    </div>
  )
}

export default Facility
