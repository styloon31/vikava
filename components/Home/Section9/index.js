"use client";
import { Poppins, Roboto, Barlow } from "next/font/google";
import { motion, useTransform } from "framer-motion";

const poppins = Poppins({ weight: "600", subsets: ["latin"] });
const roboto = Roboto({ weight: "400", subsets: ["latin"] });
const barlow = Barlow({ weight: "600", subsets: ["latin"] });

const Section9 = ({ progress, range, targetScale }) => {
  const scale = useTransform(progress, range, [1, targetScale]);
  return (
    <div
      style={{
        backgroundSize: "cover",
      }}
      className={`bg-[url('/backgrounds/5bg.png')] @apply h-screen flex items-center justify-center sticky top-0 w-full`}
    >
      <div className="@apply flex flex-col relative h-screen w-full transform-origin-top">
        <motion.section
          style={{
            scale,
          }}
          className="flex min-h-screen justify-center items-center w-full px-5 lg:px-20 py-5"
        >
          <div className="flex items-start justify-center  flex-col w-full h-full ">
            <div className=" w-full lg:w-full h-full relative flex items-start justify-center flex-col">
              <div className="absolute shadow-lg -right-1 lg:w-[28%] h-[60%] bg-white top-[10%] bottom-[10%] pl-10">
                <div className="flex flex-col items-start justify-center text-left w-full h-full">
                  <h1
                    className={`${barlow.className} @apply text-4xl font-semibold leading-[35px] tracking-[1px] text-left py-2`}
                  >
                    Our Mission
                  </h1>
                  <p className={` text-[14px] font-normal  text-left`}>
                    Vikava labs is on mission to make end to
                    <br /> end operations of any fashion business
                    <br /> easy, ecomical & optimal.
                  </p>

                  <div className="flex items-center justify-start w-full mt-5">
                    <p className="text-[14px] font-normal  text-left relative group cursor-pointer">
                      <span>Know More</span>
                      <span className="absolute -bottom-[2px] left-0 w-0 h-[2px] bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
                    </p>
                  </div>
                </div>
              </div>
              <div
                style={{
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                className="bg-[url('/backgrounds/9.jpg')] w-full lg:w-[90%] h-full "
              ></div>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Section9;
