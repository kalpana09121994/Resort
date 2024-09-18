import React from 'react'
import Navbar from '../Component/Navbar'

const Rooms = () => {
  return (
    
    <div className="p-2">
        <Navbar/>
        <h1 className="text-4xl font-bold text-center mb-5 p-3 font-serif italic">Rooms in RK resideny, Chennai</h1>
        <div className="flex gap-x-4 items-center">
        <img
          src="https://res.cloudinary.com/simplotel/image/upload/w_5000,h_3333/x_0,y_260,w_5000,h_2813,r_0,c_crop,q_80,fl_progressive/w_900,f_auto,c_fit/jenneys-residency-coimbatore/Jenneys-_NOV_49_-HDR_o0nthi"
          alt="Image 1"
          className="w-1/3 object-cover"/>
        
        
        <img
          src="https://res.cloudinary.com/simplotel/image/upload/w_5000,h_3333/x_0,y_260,w_5000,h_2813,r_0,c_crop,q_80,fl_progressive/w_900,f_auto,c_fit/jenneys-residency-coimbatore/Jenneys-_NOV_66_-HDR_tmcmil"
          alt="Image 2"
          className="w-1/3 object-cover"
        />
        <img
          src="https://res.cloudinary.com/simplotel/image/upload/w_5000,h_3333/x_0,y_260,w_5000,h_2813,r_0,c_crop,q_80,fl_progressive/w_900,f_auto,c_fit/jenneys-residency-coimbatore/Jenneys-_NOV_20_-HDR_at1ga5"
          alt="Image 3"
          className="w-1/3 object-cover"
        />
      </div>
      
      <div className="flex gap-x-4 items-center bg-orange-400">
        
        <p className="w-1/3 text-center p-2 my-5">
        <strong className='text-2xl'>Executive Rooms</strong><br/><br/>
        The Executive Rooms at our hotel in Coimbatore are spread over an area of 300 sq. ft., and can accommodate 2 guests, 1 adult and 1 child easily. The rooms are also fitted with Wi-Fi, an air conditioner, a tea/coffee maker, a TV, and a wardrobe among other things for your comfortable stay!</p>
        
        

        
        <p className="w-1/3 text-center p-2 my-5">
        <strong className='text-2xl'>Deluxe Rooms</strong><br/><br/>
        The Deluxe Rooms at our hotel in Coimbatore are 370 sq. ft. in size and can harbour either 2 adults or 1 adult and 1 child with ease. These rooms give you access to amenities such as Wi-Fi, AC, an LED television, a tea/coffee maker, a wardrobe, and many more.</p>
        

        
        <p className="w-1/3 text-center p-2 my-5">
        <strong className='text-2xl'>Presidential suite</strong><br/><br/>
        The most favoured accommodation of guests who prefer ultimate luxury, Presidential Suite on Avinashi Road, Coimbatore, is lavishly spreadly over an area of 890 sq. ft. It gives access to a spacious private living area and a minibar containing your favourite drinks.</p>
        </div>
      </div>
  )
}

export default Rooms
