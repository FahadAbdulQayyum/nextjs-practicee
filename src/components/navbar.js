// components/Navbar.tsx
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-blue-500 p-4">
      <div className="flex justify-between items-center">
        <div className="text-white font-bold text-lg">Your Logo</div>
        <button
          className="lg:hidden text-white"
          onClick={toggleMenu}
        >
          Menu
        </button>
        <ul
          className={`${
            isMenuOpen ? "block" : "hidden"
          } lg:flex lg:space-x-4 space-y-4 lg:space-y-0 mt-4 lg:mt-0`}
        >
          <li>
            <a className="text-white" href="#home">
              Home
            </a>
          </li>
          <li>
            <a className="text-white" href="#about">
              About
            </a>
          </li>
          <li>
            <a className="text-white" href="#services">
              Services
            </a>
          </li>
          <li>
            <a className="text-white" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
