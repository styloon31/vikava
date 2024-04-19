"use client";
import { motion, useTransform } from "framer-motion";
import Image from "next/image";

const Section8 = ({ progress, range, targetScale }) => {
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
                src="/quote/a.svg"
                width={500}
                height={500}
                className="h-[25vh] w-auto"
              />
            </div>
            <div className=" text-xs lg:text-lg sm:text-sm md:text-[16px] xl:text-xl text-black font-light leading-[30px] text-left">
              <h1>
                Business is not just about forming a venture,
                <br /> supplying products or services, or earning money,
                <br /> there has to be a completely different thought
                <br /> process behind it.
              </h1>
            </div>
          </div>
        </section>
      </motion.div>
    </div>
  );
};

export default Section8;
