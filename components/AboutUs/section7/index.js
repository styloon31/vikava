"use client";
import { Poppins, Roboto, Barlow, Inria_Sans, Inter } from "next/font/google";
import { motion, useTransform } from "framer-motion";
import Image from "next/image";

const poppins = Poppins({ weight: "600", subsets: ["latin"] });
const roboto = Roboto({ weight: "400", subsets: ["latin"] });
const barlow = Barlow({ weight: "600", subsets: ["latin"] });
const Inria = Inria_Sans({ weight: "700", subsets: ["latin"] });
const inter = Inter({ weight: "400", subsets: ["latin"] })

const About_Section7 = ({ progress, range, targetScale }) => {
  const scale = useTransform(progress, range, [1, targetScale]);
  return (
    <div
      style={{
        backgroundSize: "cover",
      }}
      className={`bg-[url('/backgrounds/aboutus1.jpg')] @apply h-screen flex items-center justify-center sticky top-0 w-full`}
    >
      <div className="bg-gray-600/60 @apply  flex flex-col relative h-screen w-full transform-origin-top">
        <motion.section
          style={{
            scale,
          }}
          className=" flex flex-col min-h-screen  w-full px-5 lg:px-20 "
        >
            <Image
            alt=""
            src={'/services/a5.jpeg'}
            width={500} height={500}
            className="hidden lg:block lg:w-full h-[65%] object-cover" ></Image>
            <div className="flex justify-center ">
                <h2 className={`${barlow.className} text-white text-3xl sm:text-7xl drop-shadow-2xl`}>Our History</h2>
            </div>
            <div className="flex flex-col justify-center items-center w-full h-auto p-5">
                    <h2 className={`${barlow.className} font-bold text-xl sm:text-2xl`}>Nazariya Naya</h2>
                        <p className={`${inter.className} lg:w-[50%] `}>
                        Lorem ipsum dolor sit amet consectetur. Pretium tincidunt tempus vestibulum ultrices nisi vitae enim. Pharetra mauris aenean adipiscing dictum Lorem ipsum dolor sit amet consectetur. Pretium tincidunt tempus vestibulum ultrices nisi vitae enim. Pharetra mauris aenean adipiscing dictum Lorem ipsum dolor sit amet consectetur. Pretium tincidunt tempus vestibulum ultrices nisi vitae enim. Pharetra mauris aenean adipiscing dictum
                        </p>
                </div>      
        </motion.section>
      </div>
    </div>
  );
};

export default About_Section7;