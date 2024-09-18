import React, { useState } from 'react'
import Navbar from '../Component/Navbar'

//import Booknow from '../Component/Booknow'

const Home = () => {

  const[currentIndex,setCurrentIndex]=useState(0);

  const images=[
    'https://res.cloudinary.com/simplotel/image/upload/x_111,y_0,w_1656,h_828,r_0,c_crop,q_80,fl_progressive/w_900,f_auto,c_fit/jenneys-residency-coimbatore/Room_Image_1_cxvcgq_rgkxye',
    'https://res.cloudinary.com/simplotel/image/upload/x_111,y_0,w_1656,h_828,r_0,c_crop,q_80,fl_progressive/w_900,f_auto,c_fit/jenneys-residency-coimbatore/Room_Image_2_wbpmby_xlqmo5',
    'https://res.cloudinary.com/simplotel/image/upload/x_111,y_0,w_1656,h_828,r_0,c_crop,q_80,fl_progressive/w_900,f_auto,c_fit/jenneys-residency-coimbatore/Room_Image_1_cxvcgq_rgkxye'
  
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


  const [formData, setFormData] = useState({
    checkin: '',
    checkout: '',
    adults: 1,
    children: 0,
    promocode: ''
});

// Handle input change
const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
        ...formData,
        [name]: value
    });
};

// Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Format form data for the alert
        const alertMessage = `
            Your rooms are booked with the following details:
            - Check In: ${formData.checkin}
            - Check Out: ${formData.checkout}
            - Adults: ${formData.adults}
            - Children: ${formData.children}
            - Promo Code: ${formData.promocode}
        `;
        alert(alertMessage);
    };



  return (
    <div>
        <Navbar/>
        
        <div className="relative">
            {/* Background Image */}
             
        <img src='https://res.cloudinary.com/simplotel/image/upload/w_5000,h_3337/x_0,y_261,w_5000,h_2811,r_0,c_crop,q_80,fl_progressive/w_1650,c_fit,f_auto/jenneys-residency/Exterior_1,_Avinashi_Road_Hotels,_Coimbatore_Hotels,_Banquet_Halls_in_Coimbatore'
        alt='resort frontview'/>
        {/*<button for booking>*/}
        </div>
        <br/>

        <form className="flex flex-wrap gap-3 items-center" onSubmit={handleSubmit}>
            <div className="flex items-center gap-2">
                <label htmlFor="checkin" className="text-right w-24">Check In:</label>
                <input
                    type="date"
                    id="checkin"
                    name="checkin"
                    value={formData.checkin}
                    onChange={handleChange}
                    className="bg-gray-800 border border-gray-600 text-white rounded-sm p-2 w-32"
                />
            </div>
            <div className="flex items-center gap-1">
                <label htmlFor="checkout" className="text-right w-24">Check Out:</label>
                <input
                    type="date"
                    id="checkout"
                    name="checkout"
                    value={formData.checkout}
                    onChange={handleChange}
                    className="bg-gray-800 border border-gray-600 text-white rounded-sm p-2 w-32"
                />
            </div>
            <div className="flex items-center gap-1">
                <label htmlFor="adults" className="text-right w-24">Adults:</label>
                <input
                    type="number"
                    id="adults"
                    name="adults"
                    min="1"
                    value={formData.adults}
                    onChange={handleChange}
                    className="bg-gray-800 border border-gray-600 text-white rounded-sm p-2 w-32"
                />
            </div>
            <div className="flex items-center gap-1">
                <label htmlFor="children" className="text-right w-24">Children:</label>
                <input
                    type="number"
                    id="children"
                    name="children"
                    min="0"
                    value={formData.children}
                    onChange={handleChange}
                    className="bg-gray-800 border border-gray-600 text-white rounded-sm p-2 w-32"
                />
            </div>
            <div className="flex items-center gap-1">
                <label htmlFor="promocode" className="text-right w-24">Promo Code:</label>
                <input
                    type="text"
                    id="promocode"
                    name="promocode"
                    value={formData.promocode}
                    onChange={handleChange}
                    className="bg-gray-800 border border-gray-600 text-white rounded-sm p-2 w-32"
                />
            </div>
            <div className="flex">
                <button
                    type="submit"
                    className="bg-yellow-600 hover:bg-yellow-700 text-white rounded-sm p-2 w-32 text-center">
                    Book Now
                </button>
            </div>
        </form>

        {/* <div>
          <form className='space-y-4 bg-black'>
            <label className='text-sm inline-block font-medium text-white' htmlFor="checkin">Check-In Date</label><br/>
            <input className='mt-1 border-yellow-300 shadow-sm focus:border-yellow-500 focus:ring focus:ring-yellow-500 focus:ring-opacity-50'
            type='date' name='checkin' id='checkin'></input>
            <label className='text-sm font-medium text-white' htmlFor="checkout">Check-In Out</label>
            <input className='mt-1 border-yellow-300  shadow-sm focus:border-yellow-500 focus:ring focus:ring-yellow-500 focus:ring-opacity-50'
             type='date' name='checkout' id='checkout'></input>
            <label className='text-sm font-medium text-white' htmlFor="adults">Adults</label>
            <input className='mt-1  border-yellow-200  shadow-sm focus:border-yellow-500 focus:ring focus:ring-yellow-500 focus:ring-opacity-50'
             type='number' name='adults' id='adults'></input>
            <label className=' text-sm font-medium text-white' htmlFor="child">Child</label>
            <input className='mt-1 border-yellow-300  shadow-sm focus:border-yellow-500 focus:ring focus:ring-yellow-500 focus:ring-opacity-50'
             type='number' name='child' id='child'></input>
            <label className=' text-sm font-medium text-white' htmlFor="promocode">PromoCode</label>
            <input className='mt-1 border-yellow-300  shadow-sm focus:border-yellow-500 focus:ring focus:ring-yellow-500 focus:ring-opacity-50'
             type='text' name='promocode' id='promocode'></input>
            <button className=' text-white  bg-yellow-700 mt-1 border-yellow-300  shadow-sm focus:border-yellow-500 focus:ring focus:ring-yellow-500 focus:ring-opacity-50'>
             Book Now</button>
        </form>
        </div> */}
        <h1 className='text-bold italic font-serif text-center text-3xl mt-4 text-yellow-800'>A Peaceful Stay Near Chennai International Airport</h1>
        <h1 className='text-bold italic font-serif text-center text-3xl mt-4 text-yellow-800'>Accommodation at RK Residency</h1>
       
       
        <div className='text-justify text-yellow-700 m-10'>
        <p>Situated right on Avinashi Road, the lifeline in the development of Coimbatore, Jenneys Residency offers a convenient stay for guests who want to get away from the drudgery of work, while also enjoying easy access to the city. Just a five-minute drive from Coimbatore International Airport, Jenneys Residency is famed for its ambience and hospitality.</p><br/>
        <p>Embellished with classy interiors of dark wood furnishings, it sports a palatial look fit for a king. It is spread across an area of 5 acres and is the right choice for your outdoor parties and events. It also has a lush green lawn and a swimming pool. Our well-lit pastel themed upscale hotel on Avinashi Road, Coimbatore, also makes a striking contrast with the flamboyant works of handicrafts hinged onto its walls.</p><br/>
        <p>On an official trip or bringing your family down for a short break? Luxuriate, and enjoy an exquisite stay at Jenneys Residency. Aesthetically designed, and bedecked with premium quality furnishings, our rooms on Avinashi Road, Coimbatore, bestow you with comfort and repose. Promising a hassle-free stay, plenty of amenities, and a refreshing ambience, these rooms offer the comfort of home and the luxury of fine living.
        </p> <br/>
        </div>
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
      
    </div>
  )
}

export default Home
