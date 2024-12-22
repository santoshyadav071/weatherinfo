
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FaMoon, FaSun, FaBars, FaTimes } from 'react-icons/fa';
import logo from '../assets/logo.webp'; 

const Header = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
        document.body.classList.toggle('bg-gray-800', !isDarkMode);
        document.body.classList.toggle('bg-white', isDarkMode);
        document.body.classList.toggle('text-white', !isDarkMode);
        document.body.classList.toggle('text-black', isDarkMode);
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className={`p-4 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} text-${isDarkMode ? 'white' : 'black'} flex justify-between items-center sticky top-0 z-50`}>
            <img src={logo} alt="Logo" className="rounded-full w-12 h-12" />
            
            <button onClick={toggleMenu} className="md:hidden p-2">
                <FaBars />
            </button>
            <nav className={`md:flex ${isMenuOpen ? 'block' : 'hidden'} absolute md:static bg-white md:bg-transparent w-full md:w-auto`}>
                <ul className="flex flex-col md:flex-row justify-end space-y-2 md:space-y-0 md:space-x-4 p-4 md:p-0">
                    <li>
                        <Link to="/" className="hover:underline font-bold">Home</Link>
                    </li>
                    <li>
                        <Link to="/about" className="hover:underline font-bold">About</Link>
                    </li>
                    <li>
                        <Link to="/contact" className="hover:underline font-bold">Contact</Link>
                    </li>
                </ul>
                {isMenuOpen && (
                    <button onClick={toggleMenu} className="absolute top-2 right-2 p-2">
                        <FaTimes className="text-black" /> {/* Cross icon to close the menu */}
                    </button>
                )}
            </nav>
            <button onClick={toggleTheme} className="mt-2 p-2 border rounded-full flex items-center">
                {isDarkMode ? <FaSun /> : <FaMoon />}
            </button>
        </header>
    );
};

export default Header;
