import React from 'react';
import Writing from "../assets/writing.png";

const Question = () => {
  return (
    <section id="features">
    <div className='min-h-screen mt-4 p-4'>
      <div className=' flex justify-center mb-4 p-5 text-5xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-5xl m-3'>
        <span className=" w-screen text-transparent bg-clip-text bg-gradient-to-r p-3 to-yellow-600 from-violet-200">“Why should You go ahead with Me?”</span>
      </div>
      <div className='text-white mt-3'>
        <div className='flex flex-wrap justify-center m-4'>
          <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 m-2 shadow-lg p-4 rounded-lg overflow-hidden'>
            <img src={Writing} className="w-1/4 mx-auto" alt="Writing" />
            <p className="text-center mt-2">Learn to look at the challenges through a different lens</p>
          </div>
          <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 m-2 shadow-lg p-4 rounded-lg overflow-hidden'>
            <img src={Writing} className="w-1/4 mx-auto" alt="Writing" />
            <p className="text-center mt-2">Learn to look at the challenges through a different lens</p>
          </div>
          <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 m-2 shadow-lg p-4 rounded-lg overflow-hidden'>
            <img src={Writing} className="w-1/4 mx-auto" alt="Writing" />
            <p className="text-center mt-2">Learn to look at the challenges through a different lens</p>
          </div>
          <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 m-2 shadow-lg p-4 rounded-lg overflow-hidden'>
            <img src={Writing} className="w-1/4 mx-auto" alt="Writing" />
            <p className="text-center mt-2">Learn to look at the challenges through a different lens</p>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
}

export default Question;
