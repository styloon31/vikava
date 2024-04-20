"use client";
import React, { useRef } from "react";
import { Poppins, Roboto } from "next/font/google";
import { useScroll } from "framer-motion";
import About_Section1 from "../about";
import About_Section2 from "./Section2";
import About_Section3 from "./Section3";
import About_Section4 from "./Section4";
import About_Section5 from "./section5";
import About_Section6 from "./section6";
import About_Section7 from "./section7";
import About_Section8 from "./section8";
import About_Section9 from "./section9";
import White_Section1 from "./White_section1";
import White_Section2 from "./White_section2";
import About_Section10 from "./section10";

const poppins = Poppins({ weight: "600", subsets: ["latin"] });
const roboto = Roboto({ weight: "400", subsets: ["latin"] });

export default function AboutUs() {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,

    offset: ["start start", "end end"],
  });

  // const targetScale = 1 - ( (projects.length - i) * 0.05);
  // range={[i * .25, 1]}

  return (
    <main
      ref={container}
      className="bg-white flex min-h-screen flex-col items-center justify-between w-full "
    >
      <About_Section1
        progress={scrollYProgress}
        range={[0, 1]}
        targetScale={0.85}
      />
      <White_Section1 progress={scrollYProgress} range={[0.5, 1]} targetScale={0.9}/>
      <About_Section2 progress={scrollYProgress} range={[0.5, 1]} targetScale={0.9} />
      <About_Section3 progress={scrollYProgress} range={[0.5, 1]} targetScale={0.9}/>
      <About_Section4 progress={scrollYProgress} range={[0.5, 1]} targetScale={0.9}/>
      <White_Section2 progress={scrollYProgress} range={[0.5, 1]} targetScale={0.9}/>
      <About_Section5 progress={scrollYProgress} range={[0.25, 1]} targetScale={0.9}/>
      <About_Section6 progress={scrollYProgress} range={[0.5, 1]} targetScale={0.9}/>
      <About_Section7 progress={scrollYProgress} range={[0.5, 1]} targetScale={0.9}/>
      <About_Section8 progress={scrollYProgress} range={[0.5, 1]} targetScale={0.85}/>
      <About_Section9 progress={scrollYProgress} range={[0.5, 1]} targetScale={0.85}/>
      <About_Section10 progress={scrollYProgress} range={[0.5, 1]} targetScale={0.85}/>
    </main>
  );
}
