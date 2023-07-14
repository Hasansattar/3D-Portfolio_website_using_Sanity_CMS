"use client";
import React from "react";
import { motion } from "framer-motion";

import BallCanvas from "@/components/canvas/Ball";
import { staggerContainer } from "@/utils/motion";

const Tech = ({ tech }) => {
  //console.log("techs",tech)
  return (
    <motion.section
      id=""
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto relative z-0`}
    >
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {tech.map((technology) => (
          <div className="w-28 h-28" key={technology.technologyName}>
            <BallCanvas icon={technology.technologyImage.asset.url} />
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default Tech;
