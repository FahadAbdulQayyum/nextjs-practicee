import React, { useState } from 'react';

const Navbar = () => {

    const [menu, setMenu] = useState(false); // Set initial state to false

    // Function to toggle the menu state
    const toggleMenu = () => {
        setMenu(!menu);
    }

    return (
        <div className='flex bg-rose-400 fixed w-full text-white shadow'>
            <span className='flex w-full flex-col md:flex-row md:justify-between mx-10  m-5 cursor-default items-center'>
                <span>
                    logo
                </span>
                <span>
                    {/* Add a button to toggle the menu */}
                    <button onClick={toggleMenu}>Toggle Menu</button>
                </span>
                { (
                    <span className='flex'>
                        <span className='hidden md:visible md:flex'>
                            <span className='flex md:space-x-10 md:mx-2 flex-col md:flex-row'>
                                <ul className='rounded-lg border-0 hover:border-b-2 hover:border-red-800 p-2 px-5 cursor-pointer hover:scale-105 duration-300'>
                                    <li>Home</li>
                                </ul>
                                <ul className='rounded-lg border-0 hover:border-b-2 hover:border-red-800 p-2 px-5 cursor-pointer hover:scale-105 duration-300'>
                                    <li>About</li>
                                </ul>
                                {/* Add more menu items as needed */}
                            </span>
                        </span>
                    </span>
                )}
            </span>
        </div>
    )
}

export default Navbar;