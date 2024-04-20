"use client";
import { Poppins, Roboto, Barlow, Inria_Sans, Inter } from "next/font/google";
import { motion, useTransform } from "framer-motion";
import Image from "next/image";

const poppins = Poppins({ weight: "600", subsets: ["latin"] });
const roboto = Roboto({ weight: "400", subsets: ["latin"] });
const barlow = Barlow({ weight: "600", subsets: ["latin"] });
const Inria = Inria_Sans({ weight: "700", subsets: ["latin"] });
const inter = Inter({ weight: "400", subsets: ["latin"] })

const About_Section2 = ({ progress, range, targetScale }) => {
  const scale = useTransform(progress, range, [1, targetScale]);
  return (
    <div
      style={{
        backgroundSize: "cover",
      }}
      className={`bg-[url('/backgrounds/aboutus1.jpg')]  @apply h-screen flex items-center justify-center sticky top-0 w-full`}
    >
      <div className=" bg-[#666]/30 @apply  flex flex-col relative h-screen w-full transform-origin-top">
        <motion.section
          style={{
            scale,
          }}
          className=" flex min-h-screen items-center w-full px-5 lg:px-20 "
        >
            <Image
            alt=""
            src={'/services/a1.jpeg'}
            width={500} height={500}
            className="hidden lg:block lg:w-[35%] h-full object-cover"></Image>
            <div className="flex flex-col w-full h-full justify-center items-center ">
                <div className=" w-full h-auto lg:relative -left-[15%]">
                    <h2 className={`${barlow.className} text-white text-3xl sm:text-7xl`}>About Vikava Labs</h2>
                </div>
                <div className=" w-full h-auto p-5">
                    <h2 className={`${barlow.className} font-bold text-xl sm:text-2xl`}>Humara Andaaz</h2>
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

export default About_Section2;
{/* <div className="flex  absolute h-[95%] -z-10 items-start">
            <Image
            className="hidden w-[35%] h-full  lg:block object-cover"
            src="/services/aboutus2.jpeg"
            alt=""
            width={500}
            height={500}
            />
             <div className="w-[50%]">
                    <div className="  ">
                        <h2 className={`${barlow.className} font-bold`}>Humara Andaaz</h2>
                        <p>
                        Lorem ipsum dolor sit amet consectetur. Pretium tincidunt tempus
                        vestibulum ultrices nisi vitae enim. Pharetra mauris aenean adipiscing
                        dictum nam. Ullamcorper lacus sagittis massa a adipiscing morbi egestas
                        in condimentum.
                        </p>
                        <p>
                        Lorem ipsum dolor sit amet consectetur. Pretium tincidunt tempus
                        vestibulum ultrices nisi vitae enim. Pharetra mauris aenean adipiscing
                        dictum nam. Ullamcorper lacus sagittis massa a adipiscing morbi egestas
                        in condimentum.
                        </p>
                    </div>
                    </div>
          </div>
          <div className="flex flex-col w-full h-full justify-center items-center">
            <div className=" flex  w-full justify-center items-center ">
                <h2 className={`${barlow.className} text-white text-4xl sm:text-6xl`}>About Vikava Labs</h2>
            </div>
           
          </div> */}