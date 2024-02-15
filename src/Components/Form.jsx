import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'; // Import Link component

const Form = () => {
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowForm(true);
    }, 15000);

    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
  };

  const handleClose = () => {
    setShowForm(false);
  };

  return (
    <div className={`rounded-tr rounded-tr-xl fixed bottom-0 left-0 w-full md:w-1/3 bg-yellow-500 p-4 shadow-lg transition-transform duration-500 transform ${showForm ? 'translate-y-0' : 'translate-y-full'}`}>
      <div className="p-4 flex flex-row justify-between">
        <h1 className="text-black text-3xl font-bold">
          FLAT 20% OFF 
        </h1>
        <button onClick={handleClose} className="text-gray-600 hover:text-gray-800 focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
      <div className="p-4 pl-3 flex flex-col">
        <p className="text-xl font-semibold">
          Enter your details and win a coupon worth 15% Off
        </p>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <label htmlFor="phone" className="text-gray-800"></label>
        <input type="tel" id="phone" placeholder="Enter your Phone" name="phone" required className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-blue-500" />
        <label htmlFor="email" className="text-gray-800"></label>
        <input type="email" id="email" placeholder="Enter your Email" name="email" required className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-blue-500" />
        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300">Generate Coupon</button>
      </form>

    </div>
  );
};

export default Form;
