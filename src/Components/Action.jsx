import React from 'react';

const Action = () => {
    return (
        <div className='w-9/10 h-4/5 flex m-5 justify-center ssm:flex-col lg:flex-row' style={{ alignItems: 'stretch' }}>

            <div className='border ssm:flex-row border-yellow-500 rounded-l-lg p-4'>
                <div className='text-white font-semibold'>
                    <h1 className='text-4xl text-white font-bold'>Crash Course Launch Offer (Save INR 1799)</h1>
                    <ul className='list-disc p-4 mb-4'>
                        <li className='p-3 text-xl'>Learn to look at the challenges through a different lens</li>
                        <li className='p-3 text-xl'>Learn to look at the challenges through a different lens</li>
                        <li className='p-3 text-xl'>Learn to look at the challenges through a different lens</li>
                    </ul>
                </div>
            </div>
            <div className=' border-yellow-500 border rounded-r-lg pt-4 pl-4'>
                <p className='font-semibold text-2xl text-white m-4'>Price of the Program</p>
                <div className='pl-4'><span className='font-extrabold text-3xl text-white'>₹499</span> <span className='line-through text-white'>₹1999</span></div>

                
                <button className='mt-4 text-black bg-yellow-300 rounded-lg m-3 p-4 font-semibold hover:scale-110'>Register Now</button>
            </div>
        </div>

    )
}

export default Action