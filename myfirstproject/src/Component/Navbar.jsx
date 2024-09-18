import React from 'react'
import { Link } from 'react-router-dom';
import Booknow from './Booknow';
import { useState } from 'react';
  


const Navbar = () => {

  const [isBookingVisible, setIsBookingVisible] = useState(false);

  const toggleBookingForm = () => {
    setIsBookingVisible(!isBookingVisible);
  };




  return (
    
    <nav className="bg-gray-100 text-yellow-800 font-serif ">
      
         <header className="bg-gray-100 bg-image text-yellow-800  p-4">
         <div className="container mx-auto flex items-center justify-between">
         {/* Contact Number */}
         <div className="flex- shrink-0">
          <p className="text font-bold mx-2"> +91 8667248726 </p>
          <p className='text font-bold mx-2'> booking@rkresidency.in</p>
        </div>

        {/* Logo */}
        <div className="align-middle ">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs-PSLZztqy7UGyzqWHgtJ14JshOtN0LKe7_V31qakv3J54YR1cn9Wbu4V_A&s" alt="Logo" className="h-20 " />
        <p className='text-bold text-center font-serif'>RK Resideny</p></div>

        {/* Button */}
        <div className="flex-shrink-0">
          <button onClick={toggleBookingForm}
          className="bg-yellow-700 text-white px-4 py-2 rounded hover:bg-yellow-600 animate-pulse">
            BOOK NOW 
            {isBookingVisible ? 'Close Booking' : ''}
            {isBookingVisible && <Booknow/>}
              
          </button>
          
        </div>
        
      </div>
    </header>




















         <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        <div className="text-xl font-bold">MySite</div>
        <div className="hidden md:flex space-x-4">
        
      <ul>
      <Link to="/" className="hover:bg-yellow-500 px-3 py-2 rounded font-bold">Home</Link> 
      <Link to="/Rooms" className="hover:bg-yellow-500 px-3 py-2 rounded font-bold">Rooms</Link> 
      <Link to="/Dining" className="hover:bg-yellow-500 px-3 py-2 rounded font-bold">Dining</Link> 
      <Link to="/Facility" className="hover:bg-yellow-500 px-3 py-2 rounded font-bold">Facility</Link> 
      <Link to="/Spa" className="hover:bg-yellow-500 px-3 py-2 rounded font-bold">Spa</Link> 
      <Link to="/Gallery" className="hover:bg-yellow-500 px-3 py-2 rounded font-bold">Gallery</Link> 
      <Link to="/Contact" className="hover:bg-yellow-500 px-3 py-2 rounded font-bold">Contact</Link> 
      </ul>
     
      </div>
      </div>
     
     
       </nav>
        
  )
}

export default Navbar
