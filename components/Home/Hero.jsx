"use client";
import React, { useRef } from "react";
import { Poppins, Roboto } from "next/font/google";
import { useScroll } from "framer-motion";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";
import Section6 from "./Section6";
import Section7 from "./Section7";
import Section8 from "./Section8";
import Section9 from "./Section9";
import Section10 from "./Section10";
import Section11 from "./Section11";
import Section12 from "./Section12";
import Section13 from "./Section13";


const poppins = Poppins({ weight: "600", subsets: ["latin"] });
const roboto = Roboto({ weight: "400", subsets: ["latin"] });

export default function Hero() {
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
      <Section1 progress={scrollYProgress} range={[0, 1]} targetScale={0.85} />
      <Section2 progress={scrollYProgress} range={[0.5, 1]} targetScale={0.9} />
      <Section3 progress={scrollYProgress} range={[0.25, 1]} targetScale={0.85} />
      <Section4 progress={scrollYProgress} range={[0.5, 1]} targetScale={0.9} />
      <Section5 progress={scrollYProgress} range={[0, 1]} targetScale={0.85} />
      <Section6 progress={scrollYProgress} range={[0.5, 1]} targetScale={0.9} />
      <Section7 progress={scrollYProgress} range={[0, 1]} targetScale={0.85} />
      <Section8 progress={scrollYProgress} range={[0.5, 1]} targetScale={0.9} />
      <Section9 progress={scrollYProgress} range={[0, 1]} targetScale={0.85} />
      <Section10
        progress={scrollYProgress}
        range={[0.5, 1]}
        targetScale={0.9}
      />
      <Section11 progress={scrollYProgress} range={[0, 1]} targetScale={0.85} />
      <Section12
        progress={scrollYProgress}
        range={[0.5, 1]}
        targetScale={0.9}
      />
      <Section13 progress={scrollYProgress} range={[0, 1]} targetScale={0.85} />
      {/* <Section3 /> */}
    </main>
  );
}
