"use client";
import { Poppins, Roboto } from "next/font/google";
import { motion, useTransform } from "framer-motion";

const poppins = Poppins({ weight: "600", subsets: ["latin"] });
const roboto = Roboto({ weight: "400", subsets: ["latin"] });

const Section1 = ({ progress, range, targetScale }) => {
  const scale = useTransform(progress, range, [1, targetScale]);
  return (
    <div
      className={`bg-white @apply h-screen flex items-center justify-center sticky top-0 w-full`}
    >
      <div className="@apply flex flex-col relative h-screen w-full transform-origin-top">
        <motion.section
          style={{
            scale,
          }}
          className="flex min-h-screen justify-center items-center w-full"
        >
          <div className="flex items-center justify-center text-center text-name flex-col">
            <h1
              className={`
            ${poppins.className}
            text-4xl sm:text-6xl font-semibold leading-[84px] tracking-[10px] text-center
          `}
            >
              Vikava Labs
            </h1>
            <h2
              className={`${roboto.className} text-[15px] font-normal leading-[27px] tracking-[1px] text-center`}
            >
              A Self Sustainable ecosystem for{" "}
            </h2>{" "}
            <h3
              className={`${roboto.className} text-[15px] font-normal leading-[27px] tracking-[1px] text-center`}
            >
              Fashion Industry
            </h3>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Section1;
