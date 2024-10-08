import React from "react";
import { EXPERIENCES } from "../constants/index";
import { motion } from "framer-motion";

const Experience = () => {
    return (
        <div className="pb-4" id="experience">
            <motion.h1
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
                className="my-20 text-center cursor-pointer text-4xl bg-gradient-to-r from-blue-100 via-slate-500 to-blue-500 bg-clip-text tracking-tight text-transparent">Experience</motion.h1>
            <div>
                {EXPERIENCES.map((experience, index) => (
                    <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: -100 }}
                            transition={{ duration: 1 }}
                            className="w-full lg:w-1/4">
                            <p className="mb-2 text-sm text-neutral-400">{experience.year}</p>
                        </motion.div>
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: -100 }}
                            transition={{ duration: 1 }}
                            className="w-full max-w-xl lg:w-3/4">
                            <h6 className="mb-2 font-semibold cursor-pointer">
                                {experience.role} - <span className="text-sm text-purple-100 cursor-pointer">{experience.company}</span>
                            </h6>
                            <p className="mb-4 text-neutral-400">{experience.description}</p>
                            {experience.technologies && experience.technologies.map((tech, techIndex) => (
                                <span key={techIndex} className="mr-2 cursor-pointer mt-4 rounded bg-neutral-900 px-2 py-1 text-small font-medium text-blue-800">{tech}</span>
                            ))}
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Experience;
