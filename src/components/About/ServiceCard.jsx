"use client"
import React from 'react'
// react tilt
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import Image from "next/image";
import { fadeIn, textVariant } from "@/utils/motion";

const ServiceCard = ({serviceName,ServiceImg,index}) => {
 // console.log("serviceName",serviceName)
 // console.log("ServiceImg",ServiceImg.asset.url)
  return (
    <>
     <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <Image
          width={200}
          height={250}
          src={ServiceImg.asset.url}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">{serviceName}</h3>
      </div>
    </motion.div>
  </Tilt>
      
    </>
  )
}

export default ServiceCard
