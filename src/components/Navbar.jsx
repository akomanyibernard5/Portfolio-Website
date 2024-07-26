import React from "react";
import PROFILE_NAME from "../assets/PROFILE_NAME.png";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

// bg-custom-blue

const Navbar = () => {
    return (
        <div>
            <nav className='flex items-center justify-between py-6'>
                <div className='flex flex-shrink-0 items-center'>
                    <img src={PROFILE_NAME} className="h-10 w-10" alt="Profile" />
                </div>
                <div className="m-8 flex items-center justify-center gap-4 text-2xl">
                    <FaLinkedin />
                    <FaGithub />
                    <FaInstagram />
                    <FaSquareXTwitter />
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
