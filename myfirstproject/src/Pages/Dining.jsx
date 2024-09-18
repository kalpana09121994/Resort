import React, { useState } from 'react'
import Navbar from '../Component/Navbar'

import DiningNavbar from './DiningNavbar'


const Dining = () => {

  const[currentIndex,setCurrentIndex]=useState(0);

  const images=[
    'https://res.cloudinary.com/simplotel/image/upload/w_5000,h_3333/x_0,y_260,w_5000,h_2813,r_0,c_crop,q_80,fl_progressive/w_900,f_auto,c_fit/jenneys-residency-coimbatore/Urban_BBQ_0101-HDR_nad5hl',
    'https://res.cloudinary.com/simplotel/image/upload/w_5000,h_3333/x_0,y_260,w_5000,h_2813,r_0,c_crop,q_80,fl_progressive/w_900,f_auto,c_fit/jenneys-residency-coimbatore/Urban_BBQ_0129-HDR_urogkw',
    'https://res.cloudinary.com/simplotel/image/upload/w_5000,h_3333/x_0,y_260,w_5000,h_2813,r_0,c_crop,q_80,fl_progressive/w_900,f_auto,c_fit/jenneys-residency-coimbatore/Urban_BBQ_0119-HDR_pvpdwh',
    'https://res.cloudinary.com/simplotel/image/upload/w_5000,h_3333/x_0,y_260,w_5000,h_2813,r_0,c_crop,q_80,fl_progressive/w_900,f_auto,c_fit/jenneys-residency-coimbatore/Urban_BBQ_0095-HDR_evjlcx'
  ];

  const handlePrevClick=()=>{
    setCurrentIndex ((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
  );

  };

  const handleNextClick=()=>{
    setCurrentIndex ((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
  );
  };

  return (
    <div>
      
         <Navbar/>
         <DiningNavbar/>
      <h1 className="text-3xl font-bold font-serif italic mt-10 text-center text-yellow-800">Urban Bar-B-Que Restaurant In Chennai</h1>
      <main className="p-4">
        {/* Your existing content for the Dining component */}
        {/*<images scrolling>*/}
        <div className="relative w-full max-w-5xl mx-auto">
            <img
                src={images[currentIndex]}
                alt={`Slide ${currentIndex + 1}`}
                className="w-full h-600 w-982 object-cover"
            />
            <button
                onClick={handlePrevClick}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700"
            >
                &lt;
            </button>
            <button
                onClick={handleNextClick}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700"
            >
                &gt;
            </button>
            </div>
        
        {/* Other content */}
      </main>
      <br/>
<br/>

      {/*next para>*/}


    <div className='flex'>
    <div className="w-1/2 bg-white-200">
    <img
          src="https://res.cloudinary.com/simplotel/image/upload/w_5000,h_3333/x_0,y_260,w_5000,h_2813,r_0,c_crop,q_80,fl_progressive/w_825,f_auto,c_fit/jenneys-residency-coimbatore/Urban_BBQ_0117-HDR_dijejn"
          alt="Sample Image"
          className="w-full h-full object-cover"
        />
    </div>
    {/* Text Section */}
    <div className="w-1/2 p-8 flex items-center justify-center bg-white-100">
    <p className="text-lg font-medium  text-yellow-700">
    Are you a fan of grills and barbecues? If so, Jenneys Residency's Urban Bar-B-Que is the right place for yo! This newly launched topical barbecue resto-bar, with quaint interiors is a promising hub for food and fun. Of course, who wouldn't love setting up a rendezvous with near and dear and devour some steaming hot delicacies on skewers, Peri Peri prawns and some creamy cheese potatoes! Also, don't forget to try out the buffet-style full course meal spread and delectable desserts from the counters of Urban Barbecue, our restaurant on Avinashi Road.
<br/>
<br/>
Timings:
<br/>
<br/>
Lunch -12:00 PM - 4:00 PM
Dinner - 7:00 PM - 11:00 PM
<br/>
<br/>

Chill & Grill at our unlimited BBQ buffet with over 70 dishes. 
<br/>
<br/>
    </p>
    </div>

    </div>
      
    </div>
  )
}

export default Dining


