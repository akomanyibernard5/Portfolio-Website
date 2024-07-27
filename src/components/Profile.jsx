import React from 'react';
import { ABOUT } from "../constants/index";
import PROFILE_PIC from "../assets/PROFILE_PIC.jpg";
import { motion } from "framer-motion";

const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, delay: delay }
    }
})


const About = () => {
    return (
        <div className="lg:mb-35">
            <div className="flex flex-wrap">
                <div className='w-full lg:w-1/2'>
                    <div className="flex flex-col items-center lg:items-start lg:ml-8">
                        <motion.h1
                            variants={container(0)}
                            initial="hidden"
                            animate="visible"
                            className="pb-5 font-thin  cursor-pointer lg:mt-16 lg:text-5xl my-20 text-center text-4xl bg-gradient-to-r from-blue-100 via-slate-500 to-blue-500 bg-clip-text tracking-tight text-transparent"
                        >
                            Bernard Akomanyi
                        </motion.h1>
                        <motion.span variants={container(0.5)}
                            initial="hidden"
                            animate="visible"
                            className="bg-gradient-to-r  cursor-pointer from-blue-100 via-slate-500 to-blue-500 bg-clip-text text-4xl tracking-tight text-transparent">
                            Full Stack Developer
                        </motion.span>
                        <motion.p variants={container(1)}
                            initial="hidden"
                            animate="visible" className="my-2 max-w-xl py-6 font-light tracking-tighter">
                            {ABOUT}
                        </motion.p>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex justify-center">
                        <motion.img
                            initial={{ x: 100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{duration: 1, delay: 1.2}}
                            src={PROFILE_PIC} alt="profile picture" className="lg:w-3/5 rounded-md shadow-lg" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
