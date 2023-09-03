import React, { useState } from 'react';

const Navbar = () => {

    const [menu, setMenu] = useState(true);

    return (
        <div className='flex bg-rose-400 fixed w-full text-white shadow'>
            {/* <span className='flex w-full flex-col md:flex-row md:justify-between mx-10  m-5 cursor-default items-center'> */}
            <span className='flex w-full flex-row justify-between mx-10  m-5 cursor-default items-center'>
                <span>
                    logo
                </span><span>
                </span><span>
                </span><span>
                </span><span>
                </span>
                {
                    !menu &&
                    <span className='flex'>
                        {/* <span className='hidden md:visible md:flex'> */}
                        <span className={`md:visible md:flex ${menu ? 'hidden' :'block'}`}>
                            <span className='flex md:space-x-10 md:mx-2 flex-col md:flex-row'>
                                <ul className='rounded-lg border-0 hover:border-b-2 hover:border-red-800 p-2 px-5 cursor-pointer hover:scale-105 duration-300'>
                                    <li>Home</li>
                                </ul>
                                <ul className='rounded-lg border-0 hover:border-b-2 hover:border-red-800 p-2 px-5 cursor-pointer hover:scale-105 duration-300'>
                                    <li>About</li>
                                </ul>
                                <ul className='rounded-lg border-0 hover:border-b-2 hover:border-red-800 p-2 px-5 cursor-pointer hover:scale-105 duration-300'>
                                    <li>Work</li>
                                </ul>
                                <ul className='rounded-lg border-0 hover:border-b-2 hover:border-red-800 p-2 px-5 cursor-pointer hover:scale-105 duration-300'>
                                    <li>Service</li>
                                </ul>
                            </span>
                        </span>
                        <span className='hidden md:visible md:flex'>
                            <button>Button</button>
                        </span>
                    </span>}
                <span className='md:hidden'>
                    <button onClick={() => setMenu(!menu)}>Menu</button>
                </span>
            </span>
        </div>
    )
}

export default Navbar