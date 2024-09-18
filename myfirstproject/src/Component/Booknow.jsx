import React, { useState } from 'react';
import Home from '../Pages/Home';


const Booknow = () => {

    const[checkin,setCheckin]=useState();
    const[checkout,SetCheckout]=useState();
    const[Adults,setAdults]=useState(1);
    const[child,setchild]=useState(0);

    const handleSubmit=(e)=>{
        e.preventDefault();
        alert(`Booking Details:\ncheck-in: ${setCheckin}\nCheck-out: ${SetCheckout}\nAdults: ${setAdults}\nchild: ${setchild}`);
        
    }



    return(
        <div>
            {/* <!---Heading of the button---> */}
            <div className='max-w-md mx-auto p-4 border rounded-lg shadow-lg'>
            <h2 className="text-2xl font-bold mb-4">Book Your Stay</h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
            {/* first label and input box for checkin */ }
            <div>
            <label htmlFor='check-in' className="block text-sm font-medium text-white-700">Check-In Date</label>
            <input className="mt-1 block w-full border-yellow-300 rounded-md shadow-sm focus:border-yellow-500 focus:ring focus:ring-yellow-500 focus:ring-opacity-50"
           required 
           type='date' 
           name='check-in'
           id='chekin' 
           value={checkin}/>          
            
            </div>
            
             {/* Second label and input box for checkout */ }
            <div>
            <label htmlFor='check-in' className="block text-sm font-medium text-white-700">Check-Out Date</label>
            <input className="mt-1 block w-full border-yellow-300 rounded-md shadow-sm focus:border-yellow-500 focus:ring focus:ring-yellow-500 focus:ring-opacity-50"
           required 
           type='date' 
           name='check-in' 
           id='chekin' 
           value={checkout}/>
            
            </div>
             {/* third label and input box for No.of.Adults */ }
            <div>
            <label htmlFor='check-in' className="block text-sm font-medium text-white-700">Adults</label>
            <input className="mt-1 block w-full border-yellow-300 rounded-md shadow-sm focus:border-yellow-500 focus:ring focus:ring-yellow-500 focus:ring-opacity-50"
            required 
            type='date' 
            name='check-in' 
            id='chekin' 
            value={Adults} /> 
            
            </div>
            {/* fourth label and input box for No.of.child */ }
            <div>
            <label htmlFor='check-in' className="block text-sm font-medium text-white-700">Child</label>
            <input className="mt-1 block w-full border-yellow-300 rounded-md shadow-sm focus:border-yellow-500 focus:ring focus:ring-yellow-500 focus:ring-opacity-50"
             required 
             type='date'
             name='check-in' 
             id='chekin' 
             value={child}/>
            </div>

            <div>
            <button className="w-full px-4 py-2 bg-yellow-700 text-white font-semibold rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            type='submit'>Book Now</button>

            </div>
            </form>
            </div>

        
    );
}
//   const [checkInDate, setCheckInDate] = useState('');
//   const [checkOutDate, setCheckOutDate] = useState('');
//   const [adults, setAdults] = useState(1);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert(`Booking Details:\nCheck-in: ${checkInDate}\nCheck-out: ${checkOutDate}\nAdults: ${adults}`);
//   };

//   return (
//     <div className="max-w-md mx-auto p-4 border rounded-lg shadow-lg">
//       <h2 className="text-2xl font-bold mb-4">Book Your Stay</h2>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div>
//           <label htmlFor="check-in" className="block text-sm font-medium text-gray-700">
//             Check-in Date
//           </label>
//           <input
//             type="date"
//             id="check-in"
//             value={checkInDate}
//             onChange={(e) => setCheckInDate(e.target.value)}
//             className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
//             required
//           />
//         </div>

//         <div>
//           <label htmlFor="check-out" className="block text-sm font-medium text-gray-700">
//             Check-out Date
//           </label>
//           <input
//             type="date"
//             id="check-out"
//             value={checkOutDate}
//             onChange={(e) => setCheckOutDate(e.target.value)}
//             className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
//             required
//           />
//         </div>

//         <div>
//           <label htmlFor="adults" className="block text-sm font-medium text-gray-700">
//             Number of Adults
//           </label>
//           <input
//             type="number"
//             id="adults"
//             min="1"
//             value={adults}
//             onChange={(e) => setAdults(e.target.value)}
//             className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
//             required
//           />
//         </div>

//         <button
//           type="submit"
//           className="w-full px-4 py-2 bg-indigo-600 text-white font-semibold rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//         >
//           Book Now
//         </button>
//       </form>
//     </div>
//   );
// };

export default Booknow;
