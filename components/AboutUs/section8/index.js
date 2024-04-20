"use client";
import { Poppins, Roboto, Barlow, Inria_Sans, Inter } from "next/font/google";
import { motion, useTransform } from "framer-motion";
import Image from "next/image";

const poppins = Poppins({ weight: "600", subsets: ["latin"] });
const roboto = Roboto({ weight: "400", subsets: ["latin"] });
const barlow = Barlow({ weight: "600", subsets: ["latin"] });
const Inria = Inria_Sans({ weight: "700", subsets: ["latin"] });
const inter = Inter({ weight: "400", subsets: ["latin"] })

const About_Section8 = ({ progress, range, targetScale }) => {
  const scale = useTransform(progress, range, [1, targetScale]);
  return (
    <div
      style={{
        backgroundSize: "cover",
      }}
      className={`bg-[url('/backgrounds/aboutus1.jpg')] @apply h-screen flex items-center justify-center sticky top-0 w-full`}
    >
      <div className="bg-gray-600/60 @apply  flex justify-between relative h-screen w-full transform-origin-top">
      <div className="flex items-end w-[15%] h-full">
        <Image
            alt=""
            src={'/services/a6.jpeg'}
            width={500} height={500}
            className="hidden lg:block w-full h-[50%] object-cover" ></Image>
      </div>
      <div className="flex w-[25%] h-full">
        <Image
            alt=""
            src={'/services/a7.jpeg'}
            width={500} height={500}
            className="hidden lg:block w-full h-[50%] object-cover" ></Image>
      </div>
      
        <motion.section
          style={{
            scale,
          }}
          className="absolute flex flex-col min-h-screen  w-full items-center justify-center px-5 lg:px-20 "
        >
             <div className="flex flex-col justify-center items-center">
                <h2 className={`${barlow.className}  text-white text-3xl sm:text-7xl `}>
                    Our Mission
                </h2>
                <div className=" w-full h-auto p-5 flex flex-col justify-center items-center">
                    <h2 className={`${barlow.className} font-bold text-xl sm:text-2xl`}>Nazariya Naya</h2>
                        <p className={`${inter.className} lg:w-[50%] `}>
                        Lorem ipsum dolor sit amet consectetur. Pretium tincidunt tempus vestibulum ultrices nisi vitae enim. Pharetra mauris aenean adipiscing dictum Lorem ipsum dolor sit amet consectetur. Pretium tincidunt tempus vestibulum ultrices nisi vitae enim. Pharetra mauris aenean adipiscing dictum Lorem ipsum dolor sit amet consectetur. Pretium tincidunt tempus vestibulum ultrices nisi vitae enim. Pharetra mauris aenean adipiscing dictum
                        </p>
                </div>
             </div>
        </motion.section>
      </div>
    </div>
  );
};

export default About_Section8;