"use client";
import { motion, useTransform } from "framer-motion";
import Image from "next/image";

const Section6 = ({ progress, range, targetScale }) => {
  const scale = useTransform(progress, range, [1, targetScale]);
  return (
    <div
      className={`@apply h-screen flex items-center justify-center sticky top-0 w-full`}
    >
      <motion.div className="@apply flex flex-col relative h-screen w-full transform-origin-top">
        <section
          style={{
            scale,
          }}
          className="bg-secondary flex min-h-screen justify-center items-center w-full"
        >
          <div className="flex gap-4 items-center justify-center text-center text-name ">
            <div>
              <Image
                alt=""
                src="/quote/k.svg"
                width={500}
                height={500}
                className="h-[25vh] w-auto"
              />
            </div>
            <div className=" text-xs lg:text-lg sm:text-sm md:text-[16px] xl:text-xl text-black font-light leading-[30px] text-left">
              <h1>
                Until you solve the problem of your client, provide
                <br /> more value than you charge them for your product
                <br /> or service and create value & wealth opportunities
                <br /> for your team & down the line supply chain,its really
                <br /> not sustainable. Trust has to be at the core of all
                <br /> your transactions & relations and that&apos;s the right
                <br />
                way of doing business.
                <br /> Puneet Aggarwal - Founder Vikava Labs
              </h1>
            </div>
          </div>
        </section>
      </motion.div>
    </div>
  );
};

export default Section6;
