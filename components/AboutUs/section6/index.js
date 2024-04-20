"use client";
import { Poppins, Roboto, Barlow, Inria_Sans, Inter } from "next/font/google";
import { motion, useTransform } from "framer-motion";
import Image from "next/image";

const poppins = Poppins({ weight: "600", subsets: ["latin"] });
const roboto = Roboto({ weight: "400", subsets: ["latin"] });
const barlow = Barlow({ weight: "600", subsets: ["latin"] });
const Inria = Inria_Sans({ weight: "700", subsets: ["latin"] });
const inter = Inter({ weight: "400", subsets: ["latin"] })

const About_Section6 = ({ progress, range, targetScale }) => {
  const scale = useTransform(progress, range, [1, targetScale]);
  return (
    <div
      style={{
        backgroundSize: "cover",
      }}
      className={` @apply h-screen flex items-center justify-center sticky top-0 w-full`}
    >
      <div className="hidden lg:block absolute left-0 h-[25%] w-[43%] bg-[#333333]">

      </div>
      <div className="bg-gray-600/60 @apply flex flex-col relative h-screen w-full transform-origin-top">
        <motion.section
          style={{
            scale,
          }}
          className=" flex flex-col min-h-screen w-full px-5 lg:px-20 "
        >

          <div className="flex max-h-screen gap-5 flex-col lg:flex-row items-center justify-center h-full w-full relative px-10">

            <div className="w-[30%] p-4">
              <Image src="/services/founder.jpeg" width={500} height={500} className="w-full h-auto" />

            </div>
            <div className="w-[70%]  flex flex-col ">

              <div className="flex lg:pt-[35%] flex-col w-fit justify-center items-center">

                <h1 className="text-7xl w-full font-semibold leading-[96px] text-left text-white">Meet the founder </h1>
                <div className="text-white w-full pt flex flex-col items-center text-lg">
                  <h1>Kalakar commander</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Pretium tincidunt<br /> tempus vestibulum ultrices nisi vitae enim. Pharetra mauris<br /> aenean adipiscing dictum Lorem ipsum dolor sit amet<br /> consectetur. Pretium tincidunt tempus vestibulum ultrices nisi<br /> vitae enim. Pharetra mauris aenean adipiscing dictumLorem<br /> ipsum dolor sit amet consectetur. Pretium tincidunt tempus<br /> vestibulum ultrices nisi vitae enim. Pharetra mauris aenean<br /> adipiscing dictum
                  </p>
                </div>
              </div>

            </div>


          </div>



        </motion.section>
      </div>
    </div>
  );
};

export default About_Section6;