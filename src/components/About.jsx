import React from "react";
import ABOUT_IMG from "../assets/ABOUT_IMG.png";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

const About = () => {
    return (
        <div className="pd-4" id="about">
            <h1 className="my-20 text-center text-4xl bg-gradient-to-r from-blue-100 via-slate-500 to-blue-500 bg-clip-text tracking-tight text-transparent cursor-pointer">About Me</h1>
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2 lg:p-8">
                    <motion.div
                    whileInView={{opacity:1 , x: 0}}
                    initial={{opacity: 0, x:-100}}
                    transition={{duration: 0.5}}
                    className="flex items-center justify-center">
                        <img src={ABOUT_IMG} alt="About" className="lg:w-4/5 rounded-md" />
                    </motion.div>
                </div>
                <div className="w-full lg:w-1/2">
                    <motion.div 
                    whileInView={{opacity: 1, x: 0}}
                    initial={{opacity: 0, x: 100}}
                    transition={{duration: 0.5}}
                    className="flex justify-center lg:justify-start">
                        <p className="my-2 max-w-xl py-6">
                            {ABOUT_TEXT}
                        </p>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default About
