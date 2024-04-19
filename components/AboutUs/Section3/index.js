"use client";
import { Poppins, Roboto, Barlow, Inria_Sans, Inter } from "next/font/google";
import { motion, useTransform } from "framer-motion";
import Image from "next/image";

const poppins = Poppins({ weight: "600", subsets: ["latin"] });
const roboto = Roboto({ weight: "400", subsets: ["latin"] });
const barlow = Barlow({ weight: "600", subsets: ["latin"] });
const Inria = Inria_Sans({ weight: "700", subsets: ["latin"] });
const inter = Inter({ weight: "400", subsets: ["latin"] })

const About_Section3 = ({ progress, range, targetScale }) => {
  const scale = useTransform(progress, range, [1, targetScale]);
  return (
    <div
      style={{
        backgroundSize: "cover",
      }}
      className={`bg-[url('/backgrounds/aboutus1.jpg')] @apply h-screen flex items-center justify-center sticky top-0 w-full`}
    >
      <div className="bg-[#666]/30 @apply  flex flex-col relative h-screen w-full transform-origin-top">
        <motion.section
          style={{
            scale,
          }}
          className=" flex min-h-screen items-center w-full px-5 lg:px-20 "
        >
            <Image
            src={'/services/a2.jpeg'}
            width={500} height={500}
            className="hidden lg:block lg:w-[35%] h-full object-cover"></Image>
            <div className="flex flex-col w-full h-full justify-center items-center ">
                <div className="  w-full h-auto lg:relative -left-[15%]">
                    <h2 className={`${barlow.className} text-white text-3xl sm:text-7xl`}>Why it&apos;s better with us?</h2>
                </div>
                <div className=" w-full h-auto p-5">
                    <h2 className={`${barlow.className} font-bold text-xl sm:text-2xl`}>Hum kamaal ke kyu hai?</h2>
                        <p className={`${inter.className}`}>
                        Lorem ipsum dolor sit amet consectetur. Pretium tincidunt tempus<br />
                        vestibulum ultrices nisi vitae enim. Pharetra mauris aenean adipiscing<br />
                        dictum nam. Ullamcorper lacus sagittis massa a adipiscing morbi egestas<br />
                        in condimentum.
                        </p>
                        <p className={`${inter.className}`}>
                        Lorem ipsum dolor sit amet consectetur. Pretium tincidunt tempus<br />
                        vestibulum ultrices nisi vitae enim. Pharetra mauris aenean adipiscing<br />
                        dictum nam. Ullamcorper lacus sagittis massa a adipiscing morbi egestas<br />
                        in condimentum.
                        </p>
                </div>
            </div>
        </motion.section>
      </div>
    </div>
  );
};

export default About_Section3;