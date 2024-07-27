import React from "react";
import {
    AiFillGithub,
    AiOutlineTwitter,
    AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
    let date = new Date();
    let year = date.getFullYear();
    return (
        <div className="bg-gray-900 text-white py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap">
                    <div className="w-full md:w-1/3 mb-4 md:mb-0 text-center md:text-left">
                        <h3 className="text-lg font-semibold">Bernard Akomanyi</h3>
                    </div>
                    <div className="w-full md:w-1/3 mb-4 md:mb-0 text-center">
                        <h3 className="text-lg font-semibold">Copyright © {year} BA</h3>
                    </div>
                    <div className="w-full md:w-1/3 text-center">
                        <ul className="flex justify-center space-x-4">
                            <li>
                                <a
                                    href="https://github.com/akomanyibernard5"
                                    className="text-white hover:text-gray-400"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <AiFillGithub className="text-2xl" />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://x.com/bernard09731119"
                                    className="text-white hover:text-gray-400"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <AiOutlineTwitter className="text-2xl" />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.linkedin.com/in/bernard-akomanyi-8910b624b/"
                                    className="text-white hover:text-gray-400"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaLinkedinIn className="text-2xl" />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.instagram.com/os_bernard/"
                                    className="text-white hover:text-gray-400"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <AiFillInstagram className="text-2xl" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
