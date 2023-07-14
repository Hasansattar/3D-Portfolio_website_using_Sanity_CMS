"use client";
import React from "react";
import TestimonialCard from "./TestimonialCard";

import { motion } from "framer-motion";

import { textVariant, staggerContainer } from "@/utils/motion";

const Testimonial = ({ testimonial }) => {
  // console.log("testimonialData",testimonial)
  return (
    <motion.section
      id="testimonials"
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto relative z-0`}
    >
      <div className={`mt-12 bg-black-100 rounded-[20px]`}>
        <div
          className={`bg-tertiary rounded-2xl sm:px-16 px-6 sm:py-16 py-10 min-h-[300px]`}
        >
          <motion.div variants={textVariant()}>
            <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">
              What others say
            </p>
            <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
              Testimonials.
            </h2>
          </motion.div>
        </div>
        <div className={`-mt-20 pb-14 sm:px-16 px-6 flex flex-wrap gap-7`}>
          {testimonial.map((testimonial, index) => (
            <div key={index}>
              <TestimonialCard index={index} {...testimonial} />
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Testimonial;
