import React from 'react'
import DiningNavbar from './DiningNavbar'

const Menu = () => {

  const images = [
    'https://images.pexels.com/photos/9009926/pexels-photo-9009926.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/397913/pexels-photo-397913.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/2862154/pexels-photo-2862154.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/6210959/pexels-photo-6210959.jpeg?auto=compress&cs=tinysrgb&w=600',
  ];

  return (
    <div>
      <DiningNavbar/>
      <h1 className='text-center font-bold serif italic text-yellow-800 text-3xl m-5'>Menus at RK Residency</h1>
      <div className="flex justify-between space-x-4 p-4">
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Menulist ${index + 1}`}
          className="w-1/4 h-auto object-cover rounded-lg shadow-md"
        />
      ))}
    </div>
  

    </div>
  )
}

export default Menu
