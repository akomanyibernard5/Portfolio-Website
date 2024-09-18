import React, { useState } from "react";
import PROFILE_NAME from "../assets/PROFILE_NAME.png";
import { FaLinkedin, FaGithub, FaInstagram, FaDownload, FaBars, FaTimes } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import Resume from "../assets/Akomanyi_Bernard_Resume.pdf";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <nav className="flex items-center justify-between py-6 cursor-pointer">
                <div className="flex items-center flex-shrink-0">
                    <img src={PROFILE_NAME} className="h-10 w-10" alt="Profile" />
                </div>
                <div className="block md:hidden">
                    <button onClick={toggleMenu} className="text-2xl">
                        {!isOpen && <FaBars />}
                    </button>
                </div>
                <div className="hidden md:flex items-center justify-center gap-8 text-2xl">
                    <a href="#about" className="hover:text-blue-500">
                        About
                    </a>
                    <a href="#technologies" className="hover:text-blue-500">
                        Technologies
                    </a>
                    <a href="#experience" className="hover:text-blue-500">
                        Experience
                    </a>
                    <a href="#projects" className="hover:text-blue-500">
                        Projects
                    </a>
                    <a href="#contact" className="hover:text-blue-500">
                        Contact
                    </a>
                    <a href="https://www.linkedin.com/in/bernard-akomanyi-8910b624b/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <FaLinkedin />
                    </a>
                    <a href="https://github.com/akomanyibernard5" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        <FaGithub />
                    </a>
                    <a href="https://www.instagram.com/os_bernard/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                        <FaInstagram />
                    </a>
                    <a href="https://x.com/bernard09731119" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                        <FaTwitter />
                    </a>
                    <a href={Resume} download aria-label="Download CV" className="flex items-center gap-2">
                        <FaDownload />
                        <span>Resume</span>
                    </a>
                </div>
            </nav>
            {isOpen && (
                <div className="fixed top-0 right-0 w-64 h-70 bg-transparent flex flex-col items-start p-4 z-50 border border-gray-300 rounded">
                    <button onClick={toggleMenu} className="text-2xl self-end">
                        <FaTimes />
                    </button>
                    <a href="#about" className="block py-2 text-lg hover:text-blue-500" onClick={toggleMenu}>
                        About
                    </a>
                    <a href="#technologies" className="block py-2 text-lg hover:text-blue-500" onClick={toggleMenu}>
                        Technologies
                    </a>
                    <a href="#experience" className="block py-2 text-lg hover:text-blue-500" onClick={toggleMenu}>
                        Experience
                    </a>
                    <a href="#projects" className="block py-2 text-lg hover:text-blue-500" onClick={toggleMenu}>
                        Projects
                    </a>
                    <a href="#contact" className="block py-2 text-lg hover:text-blue-500" onClick={toggleMenu}>
                        Contact
                    </a>
                    <div className="flex justify-around w-full py-2">
                        <a href="https://www.linkedin.com/in/bernard-akomanyi-8910b624b/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-blue-500">
                            <FaLinkedin />
                        </a>
                        <a href="https://github.com/akomanyibernard5" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-blue-500">
                            <FaGithub />
                        </a>
                        <a href="https://www.instagram.com/os_bernard/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-blue-500">
                            <FaInstagram />
                        </a>
                        <a href="https://x.com/bernard09731119" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-blue-500">
                            <FaTwitter />
                        </a>
                    </div>
                    <a href={Resume} download aria-label="Download CV" className="block py-2 text-lg flex items-center gap-2 hover:text-blue-500" onClick={toggleMenu}>
                        <FaDownload />
                        <span>Resume</span>
                    </a>
                </div>
            )}
        </div>
    );
};

export default Navbar;
