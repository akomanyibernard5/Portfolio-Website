import React from "react";
import PROFILE_NAME from "../assets/PROFILE_NAME.png";
import { FaLinkedin, FaGithub, FaInstagram, FaDownload } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import Resume from "../assets/Bernard_Akomanyi.pdf";

const Navbar = () => {
    return (
        <div>
            <nav className='flex  cursor-pointer items-center justify-between py-6'>
                <div className='flex flex-shrink-0 items-center'>
                    <img src={PROFILE_NAME} className="h-10 w-10" alt="Profile" />
                </div>
                <div className="m-8 flex items-center justify-center gap-8 text-2xl">
                    <a
                        href="#about"
                        className="hover:text-blue-500"
                    >
                        About
                    </a>
                    <a
                        href="#technologies"
                        className="hover:text-blue-500"
                    >
                        Technologies
                    </a>
                    <a
                        href="#experience"
                        className="hover:text-blue-500"
                    >
                        Experience
                    </a>
                    <a
                        href="#projects"
                        className="hover:text-blue-500"
                    >
                        Projects
                    </a>
                    <a
                        href="#contact"
                        className="hover:text-blue-500"
                    >
                        Contact
                    </a>
                    <a
                        href="https://www.linkedin.com/in/bernard-akomanyi-8910b624b/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                    >
                        <FaLinkedin />
                    </a>
                    <a
                        href="https://github.com/akomanyibernard5"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                    >
                        <FaGithub />
                    </a>
                    <a
                        href="https://www.instagram.com/os_bernard/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                    >
                        <FaInstagram />
                    </a>
                    <a
                        href="https://x.com/bernard09731119"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Twitter"
                    >
                        <FaTwitter />
                    </a>
                    <a
                        href={Resume}
                        download
                        aria-label="Download CV"
                        className="flex items-center gap-2"
                    >
                        <FaDownload />
                        <span>Resume</span>
                    </a>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
