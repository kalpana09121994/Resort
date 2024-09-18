// DiningNavBar.js
import React from 'react';
import { Link } from 'react-router-dom';

const DiningNavbar = () => {
  return (
        <nav className="bg-yellow-600 p-4">
            <header>

            </header>
      <ul className="flex space-x-4 justify-center gap-14 ">
        <li>
          <Link to="/Dining/Overview" className="text-white text-lg font-bold italic">Overview</Link>
        </li>
        <li>
          <Link to="/Dining/Menu" className="text-white  text-lg font-bold italic">Menu</Link>
        </li>
        <li>
          <Link to="/Dining/Reservations" className="text-white text-lg font-bold italic">Reservations</Link>
        </li>
      </ul>
    </nav>
  );
};

export default DiningNavbar;
