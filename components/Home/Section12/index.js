"use client";
import { motion, useTransform } from "framer-motion";
import Image from "next/image";

const Section12 = ({ progress, range, targetScale }) => {
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
                When fashion business is done well, it&apos;s good for
                <br /> everyone. It creates jobs, prosperity, and great
                <br /> products eradicating all gaps in eco-system and
                <br /> that&apos;s what actual sustainability is.
              </h1>
            </div>
          </div>
        </section>
      </motion.div>
    </div>
  );
};

export default Section12;
