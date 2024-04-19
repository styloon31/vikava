"use client";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";

import { Barlow } from "next/font/google";
import HSection1 from "./section1";
import HSection2 from "./section2";
import HSection3 from "./section3";
import HSection4 from "./section4";
import HSection5 from "./section5";
import HSection6 from "./section6";
import HSection7 from "./section7";

const barlow = Barlow({ subsets: ["latin"], weight: "700" });

export default function HorizontalScrollSection() {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: "-900vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "5000 top",
          scrub: 1,
          pin: true,
        },
      }
    );
    return () => {
      {
        /* A return function for killing the animation on component unmount */
      }
      pin.kill();
    };
  }, []);

  return (
    <section className="overflow-hidden bg-gray-400 w-full ">
      {/* The section up act just as a wrapper. If the trigger (below) is the
      first jsx element in the component, you get an error on route change */}

      {/* The div below act just as a trigger. As the doc suggests, the trigger and 
      the animation should alway be two separated refs */}
      <div ref={triggerRef}>
        <div
          ref={sectionRef}
          className="@apply h-screen w-[1000vw] flex flex-row relative "
        >
          <div className="@apply h-screen w-screen flex justify-center items-center w-full bg-bgBlog">
            <HSection1/>
          </div>
          <div className="@apply h-screen w-screen flex justify-center items-center bg-[#E5E0DA]">
            <HSection2/>
          </div>
          <div className="@apply h-screen w-screen flex justify-center items-center bg-[#E5E0DA]">
            <HSection3/>
          </div>
          <div className="@apply h-screen w-screen flex justify-center items-center bg-[#DBEEFB]">
            <HSection4/>
          </div>
          <div className="@apply h-screen w-screen flex justify-center items-center w-full bg-[#DBEEFB]">
            <HSection5/>
          </div>
          <div className="@apply h-screen w-screen flex justify-center items-center bg-[#C4D0C6]">
            <HSection6/>
          </div>
          <div className="@apply h-screen w-screen flex justify-center items-center bg-blue-200">
            <HSection7/>
          </div>
          <div className="@apply h-screen w-screen flex justify-center items-center bg-purple-200">
            <h3>Section 8</h3>
          </div>
          <div className="@apply h-screen w-screen flex justify-center items-center bg-blue-200">
            <h3>Section 9</h3>
          </div>
          <div className="@apply h-screen w-screen flex justify-center items-center bg-purple-200">
            <h3>Section 10</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
