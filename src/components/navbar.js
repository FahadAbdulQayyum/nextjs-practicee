import React, { useState } from 'react';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="bg-rose-400 shadow">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center py-4 relative">
                    <div className="flex items-center">
                        <span className="text-white text-lg font-bold">Logo</span>
                    </div>
                    <span className='bg-orange-300 absolute right-0 md:bg-transparent top-5'>
                        <div
                            className="md:hidden"
                        >
                            <button
                                onClick={toggleMenu}
                                className="block text-white hover:text-red-800 focus:outline-none">
                                {menuOpen ? (
                                    <svg
                                        className="w-6 h-6"
                                        fill="none"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path d="M6 18L18 6M6 6l12 12"></path>
                                    </svg>
                                ) : (
                                    <svg
                                        className="w-6 h-6"
                                        fill="none"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path d="M4 6h16M4 12h16m-7 6h7"></path>
                                    </svg>
                                )}
                            </button>
                        </div>
                        <div className={`md:flex md:items-center ${menuOpen ? 'block' : 'hidden'}`}>
                            <ul className="md:flex space-x-4">
                                <li>
                                    <a
                                        href="#"
                                        className="text-white hover:text-red-800 font-medium">
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-white hover:text-red-800 font-medium">
                                        About
                                    </a>
                                </li>
                                {/* Add more navigation links as needed */}
                            </ul>
                        </div>
                    </span>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;