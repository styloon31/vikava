"use client";
import { Poppins, Roboto, Barlow, Inria_Sans, Inter } from "next/font/google";
import { motion, useTransform } from "framer-motion";
import Image from "next/image";

const poppins = Poppins({ weight: "600", subsets: ["latin"] });
const roboto = Roboto({ weight: "400", subsets: ["latin"] });
const barlow = Barlow({ weight: "600", subsets: ["latin"] });
const Inria = Inria_Sans({ weight: "700", subsets: ["latin"] });
const inter = Inter({ weight: "400", subsets: ["latin"] })

const About_Section10 = ({ progress, range, targetScale }) => {
  const scale = useTransform(progress, range, [1, targetScale]);
  return (
    <div
      style={{
        backgroundSize: "cover",
      }}
      className={`bg-[url('/backgrounds/aboutus1.jpg')] @apply h-screen flex items-center justify-center sticky top-0 w-full`}
    >
      <div className="bg-gray-600/60 @apply  flex flex-col justify-end items-end relative h-screen w-full transform-origin-top">
        <motion.section
          style={{
            scale,
          }}
          className=" flex flex-col min-h-screen  w-full px-5 lg:px-20 "
        >
            our philosophy  
        </motion.section>
      </div>
    </div>
  );
};

export default About_Section10;