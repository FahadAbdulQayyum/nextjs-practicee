import React from 'react'

const Navbar = () => {
    return (
        <div className='flex bg-rose-400 fixed w-full text-white shadow'>
            <span className='flex w-full flex-col md:flex-row md:justify-between mx-10  m-5 cursor-default items-center'>
                <span>
                    logo
                </span><span>
                </span><span>
                </span><span>
                </span><span>
                </span>
                {/* <span className='invisible md:visible md:flex'> */}
                <span className='hidden md:visible md:flex'>
                    <span className='flex md:space-x-10 md:mx-2 flex-col md:flex-row'>
                        <ul className='rounded-lg border-0 hover:border-b-2 hover:border-red-800 p-2 px-5 cursor-pointer hover:scale-105 duration-300'>
                            <li>Home</li>
                        </ul>
                        <ul className='rounded-lg border-0 hover:border-b-2 hover:border-red-800 p-2 px-5 cursor-pointer hover:scale-105 duration-300'>
                            <li>Home</li>
                        </ul>
                        <ul className='rounded-lg border-0 hover:border-b-2 hover:border-red-800 p-2 px-5 cursor-pointer hover:scale-105 duration-300'>
                            <li>Home</li>
                        </ul>
                        <ul className='rounded-lg border-0 hover:border-b-2 hover:border-red-800 p-2 px-5 cursor-pointer hover:scale-105 duration-300'>
                            <li>Home</li>
                        </ul>
                    </span>
                </span>
                <span className='hidden md:visible md:flex'>
                    <button>Button</button>
                </span>
            </span>
        </div>
    )
}

export default Navbar