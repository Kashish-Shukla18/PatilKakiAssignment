import React from 'react';
import Heroimg from "../assets/hero.png";

const Hero = () => {
    return (
        <section className='min-h-screen fadeInLeft mt-5 pt-5' >
            <div className='flex flex-col lg:flex-row mt-8 pt-5'>
                <div className='lg:w-1/2 sm:p-3'>
                    <img src={Heroimg} alt="Hero" className="w-full animate-pulse" /> {/* Added alt attribute for accessibility */}
                </div>
                <div className='lg:w-1/2 lg:pl-6 m-4 text-white'>
                    <h1 className="text-5xl font-bold sm:text-6xl">Ac mattis<br></br>
                        <span className="text-yellow-500 mt-2">senectus</span> erat<br></br> pharetra
                    </h1>
                    <p className="mt-6 mb-6 text-xl">Dictum aliquam porta in condimentum ac integer
                        <br className="hidden md:inline lg:hidden" />turpis pulvinar,<br></br> est scelerisque ligula sem
                    </p>
                    <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                        <a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold rounded bg-yellow-400 text-gray-900">Suspendisse</a>
                        <a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold border rounded border-gray-100 hover:bg-yellow-400 hover:border-none">Malesuada</a>                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
