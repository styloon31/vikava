"use client";
import { Poppins, Roboto, Barlow, Inria_Sans } from "next/font/google";
import { motion, useTransform } from "framer-motion";

const poppins = Poppins({ weight: "600", subsets: ["latin"] });
const roboto = Roboto({ weight: "400", subsets: ["latin"] });
const barlow = Barlow({ weight: "600", subsets: ["latin"] });
const Inria = Inria_Sans({ weight: "700", subsets: ["latin"] });

const About_Section1 = ({ progress, range, targetScale }) => {
  const scale = useTransform(progress, range, [1, targetScale]);
  return (
    <div
      style={{
        backgroundSize: "cover",
      }}
      className={`bg-[url('/backgrounds/aboutus1.jpeg')] @apply h-screen flex items-center justify-center sticky top-0 w-full`}
    >
      <div className="@apply flex flex-col relative h-screen w-full transform-origin-top">
        <motion.section
          style={{
            scale,
          }}
          className="flex min-h-screen justify-center items-center w-full px-5 lg:px-20 py-5"
        >
          <h1
            className={`${Inria.className} text-4xl sm:text-6xl font-semibold leading-[84px] tracking-[10px] text-center text-white`}
          >
            Lets Get Back To Trust
          </h1>
        </motion.section>
      </div>
    </div>
  );
};

export default About_Section1;
