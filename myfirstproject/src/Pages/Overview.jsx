import React from 'react'
import DiningNavbar from './DiningNavbar'

const Overview = () => {
  return (
    <div>
      <DiningNavbar/>
      <h1 className='text-center font-bold serif italic text-yellow-800 text-3xl m-5'>Overview of RK Residency</h1>
      <img src='https://res.cloudinary.com/simplotel/image/upload/w_5000,h_3333/x_0,y_260,w_5000,h_2813,r_0,c_crop,q_80,fl_progressive/w_825,f_auto,c_fit/jenneys-residency-coimbatore/kayal_c1_22_i6c0vm'
      alt='Overview of the resort'
      className='w-full h-full bg-cover '/>
    </div>
  )
}

export default Overview
