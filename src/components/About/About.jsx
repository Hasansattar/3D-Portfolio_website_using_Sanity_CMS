"use client"
import React from "react";
import { motion } from "framer-motion";
import ServiceCard from "./ServiceCard";
import { fadeIn, textVariant, staggerContainer } from "@/utils/motion";


const About = ({ service }) => {
  //console.log("about", service);
  return (
    <>
      <motion.section
        id="about"
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto relative z-0`}
      >
        <motion.div variants={textVariant()}>
          <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">
            Introduction
          </p>
          <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
            Overview.
          </h2>
        </motion.div>

        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          I'm a skilled software developer with experience in TypeScript and
          JavaScript, and expertise in frameworks like React, Next.js, Node.js,
          Web 3.0 and blockchain . I'm a quick learner and collaborate closely
          with clients to create efficient, scalable, and user-friendly
          solutions that solve real-world problems. Let's work together to bring
          your ideas to life!
        </motion.p>

        <div className="mt-20 flex flex-wrap gap-10">
          {service?.map((services, index) => (
            <div key={index}>
            <ServiceCard  index={index} {...services} />
            </div>
          ))}
        </div>
      </motion.section>
    </>
  );
};

export default About;
