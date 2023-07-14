"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { textVariant, staggerContainer } from "@/utils/motion";

import { Tilt } from "react-tilt";
import Image from "next/image";

//images
import github from "@/assets/github.png";
import links from "@/assets/links.png";
import userlock from "@/assets/userlock.png";
import ProjectItem from "./ProjectItem";

const Projects = ({ project }) => {
  // console.log("projectData", project);
  const [selected, setSelected] = useState("frontend");
  const [projectList, setProjectList] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    let tempList = [];
    project.map((item) => {
      if (!tempList.includes(item.category)) {
        tempList.push(item.category);
      }
      return null;
    });

    setProjectList(tempList);
  }, [project]);

  //console.log("projectList", projectList);

  useEffect(() => {
    projectList.map((list) => {
      if (selected === list) {
        setData(project.filter((project) => project.category === list));
      }

      return null;
    });
  }, [selected, projectList]);

  //console.log("Data", data);

  const boxVariants = {
    hover: {
      scale: 1.04,
      transition: {
        type: "spring",
      },
    },
  };

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
        {/* -------- */}

        <div className="sm:grid sm:grid-cols-2 lg:flex justify-center mx-auto mt-4">
          {projectList &&
            projectList.map((list, index) => (
              <motion.div key={index} data-aos="fade-right" name="portfolio">
                <ProjectItem
                  title={list}
                  active={selected === list}
                  setSelected={setSelected}
                  id={list}
                />
              </motion.div>
            ))}
        </div>

        {/* ----- */}
        <div className="mt-20 flex flex-wrap gap-7">
          {data.map((project, index) => {
            return (
              <motion.div
                key={index}
                data-aos="fade-right"
                name="portfolio"
                variants={boxVariants}
                whileHover="hover"
              >
                <Tilt
                  options={{
                    max: 45,
                    scale: 1,
                    speed: 450,
                  }}
                  className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
                >
                  <div className="relative w-full h-[230px]">
                    <Image
                      width={200}
                      height={250}
                      src={project.projectImg.asset.url}
                      alt="project_image"
                      className="w-full h-full object-cover rounded-2xl"
                    />
                  </div>

                  <div className="mt-5">
                    <h3 className="text-white font-bold text-[24px]">
                      {project.projectname}
                    </h3>
                    <p className="mt-2 text-secondary text-[14px]">
                      {project.description}
                    </p>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    <p
                      key={`${project.tags[0]}-${project.tags[0]}`}
                      className={`text-[14px] ${project.tagsColor[0]}`}
                    >
                      #{project.tags[0]}
                    </p>
                    <p
                      key={`${project.tags[1]}-${project.tags[1]}`}
                      className={`text-[14px] ${project.tagsColor[1]}`}
                    >
                      #{project.tags[1]}
                    </p>
                    <p
                      key={`${project.tags[2]}-${project.tags[2]}`}
                      className={`text-[14px] ${project.tagsColor[2]}`}
                    >
                      #{project.tags[2]}
                    </p>
                  </div>
                  <div className="flex justify-end">
                    {project.sourcecodeLink !== "private" ? (
                      <a href={project.sourcecodeLink}>
                        <div className="bg-black hover:bg-slate-600 border-2 mx-2 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
                          <Image
                            src={github}
                            alt="source code"
                            className="w-1/2 h-1/2 object-contain"
                          />
                        </div>
                      </a>
                    ) : (
                      <a href="#_">
                        <div className="bg-black hover:bg-slate-600 border-2 mx-2 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
                          <Image
                            src={userlock}
                            alt="source code"
                            className="w-1/2 h-1/2 object-contain"
                          />
                        </div>
                      </a>
                    )}

                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="bg-black hover:bg-slate-600 border-2 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
                        <Image
                          src={links}
                          alt="source code"
                          className="w-1/2 h-1/2 object-contain"
                        />
                      </div>
                    </a>
                  </div>
                </Tilt>
              </motion.div>
            );
          })}
        </div>
      </motion.section>
    </>
  );
};

export default Projects;
