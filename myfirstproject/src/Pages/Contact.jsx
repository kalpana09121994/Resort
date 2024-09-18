import React from 'react'
import Navbar from '../Component/Navbar'

const Contact = () => {
  return (
    <div>
       <Navbar/>
      <h1 className='bold font-serif italic text-3xl py-10 text-yellow-800 bg-gray-100 text-center' >ContactUs</h1>
      <div className="flex">
      {/* Image Section */}
      <div className="w-1/2 bg-gray-200">
        <img
          src="https://res.cloudinary.com/simplotel/image/upload/w_5000,h_3310/x_-2,y_233,w_5002,h_2813,r_0,c_crop,q_80,fl_progressive/w_825,f_auto,c_fit/jenneys-residency/Reception,_Avinashi_Road_Hotels,_Coimbatore_Hotels,_Banquet_Halls_in_Coimbatore"
          alt="Resortlobby"
          className="w-full h-full object-cover"
        />

      </div>

      {/* Text Section */}
      <div className="w-1/2 p-8 flex items-center justify-center bg-gray-100">
        <p className="text-xl font-medium  text-yellow-700">
Address:<br/>
47, Anna Nagar West Extension,<br/>
Chennai,<br/>
Tamil Nadu
<br/><br/>
Phone Number: <br/>
Banquet & hall Enquiry - +91 75 3888 8209 | +91 98 9404 4833<br/>
Room Enquiry - +91 98 9405 5385<br/>
Restaurant - +91 95 0052 9333<br/>
Landline: 0422 433 5777<br/><br/>

Email ID:<br/>
booking@rkresidencyresidency.in<br/>
reservations@rkresidency.in<br/>

        </p>
      </div>
    </div>
  

    </div>
  )
}

export default Contact
