import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
  const [time, setTime] = useState(600); // 10 minutes in seconds

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(prevTime => {
        if (prevTime === 0) {
          clearInterval(interval);
          // You can add logic here for what to do when the countdown reaches zero
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  return (
    <div id='offers'>
    <div className="p-8 shadow-md rounded-lg text-center mt-6 bg-yellow-900">
      <h1 className="text-6xl mb-6 font-bold text-white">Time is running out.<br/>Grab Your spot fast!</h1>
      <div className="text-4xl text-white">
        <span className="mr-2">{minutes < 10 ? `0${minutes}` : minutes}</span>
        <span>:</span>
        <span className="ml-2">{seconds < 10 ? `0${seconds}` : seconds}</span>
      </div>
      <div className="text-2xl text-white mt-4">
        <span className="mr-2">Hours</span>
        <span>:</span>
        <span className="ml-2">Minutes</span>
        <span>:</span>
        <span className="ml-2">Seconds</span>
      </div>
      <button className="animate-pulse w-full sm:w-1/2 lg:w-1/4 bg-yellow-500 text-white text-xl font-bold py-3 px-6 rounded-lg mt-8 hover:bg-blue-600 focus:outline-none focus:shadow-outline">
        Register Now at ₹ 499 <span className="text-lg line-through">1999</span>
      </button>
    </div>
    </div>
  );
};

export default CountdownTimer;
