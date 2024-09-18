import React from 'react'
import Navbar from '../Component/Navbar'

const Gallery = () => {

  
  const images = Array(9).fill('https://res.cloudinary.com/simplotel/image/upload/w_5000,h_3333/x_0,y_260,w_5000,h_2813,r_0,c_crop,q_80,fl_progressive/w_900,f_auto,c_fit/jenneys-residency/405A0117,_Avinashi_Road_Hotels,_Coimbatore_Hotels,_Banquet_Halls_in_Coimbatore',
    'https://res.cloudinary.com/simplotel/image/upload/w_5000,h_3334/x_0,y_261,w_5000,h_2812,r_0,c_crop,q_80,fl_progressive/w_900,f_auto,c_fit/jenneys-residency/405A0027,_Avinashi_Road_Hotels,_Coimbatore_Hotels,_Banquet_Halls_in_Coimbatore',

  ); 
  return (
    <div>
         <Navbar/>
      <h1 className='text-3xl font-bold font-serif italic mt-10 text-center text-yellow-800'>Gallery</h1>
      <div className="px-4 py-8">
      <div className="grid grid-cols-3 gap-2">
        {images.map((src, index) => (
          <div key={index} className="flex justify-center items-center">
            <img
              src={src}
              alt={`Image ${index + 1}`}
              className="w-50 h-50 object-cover rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
    </div>
  )
}

export default Gallery
