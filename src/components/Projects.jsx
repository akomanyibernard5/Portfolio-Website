import React from "react";
import { PROJECTS } from "../constants/index";
import { motion } from "framer-motion"
const Projects = () => {
    return (
        <div className="pb-4" id="projects">
            <motion.h1
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
                className="my-20 text-center cursor-pointer text-4xl bg-gradient-to-r from-blue-100 via-slate-500 to-blue-500 bg-clip-text tracking-tight text-transparent">Projects</motion.h1>
            <div>
                {PROJECTS.map((project, index) => (
                    <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: -100 }}
                            transition={{ duration: 1 }}
                            className="w-full lg:w-1/4">
                            <img src={project.image} width={150} height={150} className="mb-6 cursor-pointer rounded" alt={project.title} />
                        </motion.div>
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: 100 }}
                            transition={{ duration: 1 }}
                            className="w-full max-w-xl lg:w-3/4">
                            <h6 className="mb-2 font-semibold cursor-pointer">{project.title}</h6>
                            <p className="mb-4 text-neutral-400">{project.description}</p>
                            {project.technologies.map((tech, index) => (
                                <span key={index} className="mr-2 cursor-pointer rounded bg-neutral-900 text-white px-2 py-1 text-small font-medium text-blue-900">
                                    {tech}
                                </span>
                            ))}

                        </motion.div>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default Projects
