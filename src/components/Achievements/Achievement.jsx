"use client";
import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { staggerContainer} from "@/utils/motion";
import externellink from "@/assets/externellink.png";
import Image from "next/image";

const Achievement = ({ achievement }) => {
  return (
    <motion.section
      id="achievements"
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto relative z-0`}
    >
      <motion.div>
        <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">
          My Achievements
        </p>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
          Achievements
        </h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
          Following achievements showcases my dedication, commitment, and
          mastery of the subject matter or skills covered in different
          program.These achievement of a certificate represents a significant
          milestone in a person's professional or academic journey
        </motion.p>
      </div>

      {/* -------- */}
      <div className="mt-20 flex flex-wrap gap-7">
        {achievement.map((item, index) => {
          return (
            <div key={index}>
              <motion.div
                data-aos="zoom-in"
                name="achievements"
                id="achievements"
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
                      src={item.achievementImg.asset.url}
                      alt="project_image"
                      className="w-full h-full object-cover rounded-2xl"
                    />
                  </div>

                  <div className="mt-5">
                    <h3 className="text-white font-bold text-[24px]">
                      {item.achievementName}
                    </h3>
                  </div>
                  <div className="flex justify-center mx-auto mt-5">
                    <a
                      href={item.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="bg-black hover:bg-slate-600 border-2 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer ">
                        <Image
                          src={externellink}
                          alt="source code"
                          className="w-1/2 h-1/2 object-contain"
                        />
                      </div>
                    </a>
                  </div>
                </Tilt>
              </motion.div>
            </div>
          );
        })}
      </div>
    </motion.section>
  );
};

export default Achievement;
