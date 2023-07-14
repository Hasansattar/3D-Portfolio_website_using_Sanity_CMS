"use client";
import React from "react";
import { motion } from "framer-motion";
import { textVariant, staggerContainer } from "@/utils/motion";

import ProjectCard from "./ProjectCard";

const Projects = ({ project }) => {
 // console.log("projectData", project);
  return (
    <>
      <motion.section
        id="projects"
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto relative z-0`}
      >
        <motion.div variants={textVariant(0.2)}>
          <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">
            My work
          </p>
          <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
            Projects.
          </h2>
        </motion.div>

        <div className="w-full flex">
          {/* variants={fadeIn("", "", 0.1, 1)} */}
          <motion.p className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
            Following projects showcases my skills and experience through
            real-world examples of my work. Each project is briefly described
            with links to code repositories and live demos in it. It reflects my
            ability to solve complex problems, work with different technologies,
            and manage projects effectively.
          </motion.p>
        </div>
        <div className="mt-20 flex flex-wrap gap-7">
          <ProjectCard projects={project} />
        </div>
      </motion.section>
    </>
  );
};

export default Projects;
