import React from "react";
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb, SiFlask } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [0, -10, 0],
        transition: {
            duration: duration,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "loop",
        }
    }
});

const Technologies = () => {
    return (
        <div className="pb-24" id="technologies">
            <motion.h1
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.5 }}
                className="my-20 text-center text-4xl cursor-pointer bg-gradient-to-r from-blue-100 via-slate-500 to-blue-500 bg-clip-text tracking-tight text-transparent">
                Technologies
            </motion.h1>
            <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1.5 }}
                className="flex flex-wrap items-center justify-center gap-6 p-4">
                <motion.div
                    variants={iconVariants(2.5)}
                    initial="initial"
                    animate="animate"
                    className='rounded-md border-4 border-neutral-800 p-4 hover:scale-105 transition-transform duration-300'>
                    <RiReactjsLine className="text-5xl md:text-7xl text-cyan-400 cursor-pointer" aria-label="React" />
                </motion.div>
                <motion.div
                    variants={iconVariants(3)}
                    initial="initial"
                    animate="animate"
                    className='rounded-md border-4 border-neutral-800 p-4 hover:scale-105 transition-transform duration-300'>
                    <TbBrandNextjs className="text-5xl md:text-7xl cursor-pointer" aria-label="Next.js" />
                </motion.div>
                <motion.div
                    variants={iconVariants(4)}
                    initial="initial"
                    animate="animate"
                    className='rounded-md border-4 border-neutral-800 p-4 hover:scale-105 transition-transform duration-300'>
                    <SiMongodb className="text-5xl md:text-7xl text-green-500 cursor-pointer" aria-label="MongoDB" />
                </motion.div>
                <motion.div
                    variants={iconVariants(5)}
                    initial="initial"
                    animate="animate"
                    className='rounded-md border-4 border-neutral-800 p-4 hover:scale-105 transition-transform duration-300'>
                    <FaNodeJs className="text-5xl md:text-7xl text-green-500 cursor-pointer" aria-label="Node.js" />
                </motion.div>
                <motion.div
                    variants={iconVariants(6)}
                    initial="initial"
                    animate="animate"
                    className='rounded-md border-4 border-neutral-800 p-4 hover:scale-105 transition-transform duration-300'>
                    <SiFlask className="text-5xl md:text-7xl text-red-500 cursor-pointer" aria-label="Flask" />
                </motion.div>
            </motion.div>
        </div>
    );
}

export default Technologies;
