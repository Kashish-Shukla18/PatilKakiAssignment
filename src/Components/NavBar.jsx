import { AiOutlineClose } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import React from 'react';

const NavBar = () => {
    const [toggle, setToggle] = useState(false);

    const openMenu = () => {
        setToggle(true);
    };

    const closeMenu = () => {
        setToggle(false);
    };

    const handleClick = (id) => {
        // Handle navigation to the specified section on the same page
        const targetSection = document.getElementById(id);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <>
            <div className={`flex w-full bg-custom-sage items-center justify-between p-7 lg:flex-row text-indigo-600 transition-max-h duration-300 ${toggle ? 'max-h-screen' : 'max-h-0'}`}>
                <div><a href="#" className="text-white font-mono text-3xl tracking-wider flex items-center"></a></div>
                <div className="space-x-4">
                    <div className='ssm:hidden lg:block space-x-2'>
                    <Link to="/about"><button className="text-white hover:bg-indigo-800 rounded-full px-5 py-2 text-xl" onClick={() => handleClick('about')}>About</button></Link>
                    <Link to="/features"><button className="text-white hover:bg-indigo-800 rounded-full px-5 py-2 text-xl" onClick={() => handleClick('features')}>Features</button></Link>
                    <Link to="/offers"><button className="text-white hover:bg-indigo-800 rounded-full px-5 py-2 text-xl" onClick={() => handleClick('offers')}>Offers</button></Link>
                    </div>

                    <div className='lg:hidden ssm:block space-x-2'>
                        {toggle
                            ? (<AiOutlineClose onClick={closeMenu} size={30} className='text-white' />)
                            : (<GiHamburgerMenu onClick={openMenu} size={30} className='text-white' />)
                        }
                    </div>
                </div>
            </div>
            <div className={`ssm:block lg:hidden transition-max-h duration-300 ${toggle ? 'max-h-screen' : 'max-h-0'}`}>
                {toggle
                    ? (<div className='flex flex-col justify-between items-center bg-black '>
                    <Link to="/about"><button className="text-white hover:bg-indigo-800 rounded-full px-5 py-2 text-xl" onClick={() => handleClick('about')}>About</button></Link>
                    <Link to="/features"><button className="text-white hover:bg-indigo-800 rounded-full px-5 py-2 text-xl" onClick={() => handleClick('features')}>Features</button></Link>
                    <Link to="/offers"><button className="text-white hover:bg-indigo-800 rounded-full px-5 py-2 text-xl" onClick={() => handleClick('offers')}>Offers</button></Link>
                    </div>)
                    : (<div></div>)
                }
            </div>
        </>
    );
};

export default NavBar;