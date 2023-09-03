import Link from 'next/link';
import React, { useState } from 'react';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="bg-rose-400 shadow">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center py-4">
                    <div className="flex items-center">
                        <span className="text-white text-lg font-bold">Logo</span>
                    </div>
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
                    {/* <div className={`md:flex md:items-center ${menuOpen ? 'block bg-rose-400 absolute top-14 right-14 md:right-0 md:top-0 md:relative' : 'hidden'}`}> */}
                    <div className={`md:flex md:items-center ${menuOpen ? 'block bg-rose-300 absolute top-14 px-14 left-0 right-0 bottom-0 md:top-0 md:relative' : 'hidden'} trans`}>
                        <ul className="md:flex md:space-x-4">
                            <li>
                                <Link
                                    href="/home"
                                    className="text-white hover:text-red-800 font-medium">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/about    "
                                    className="text-white hover:text-red-800 font-medium">
                                    About
                                </Link>
                            </li>
                            {/* Add more navigation links as needed */}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;