import React from "react";
import { Poppins, Barlow } from "next/font/google";
import Image from "next/image";

const barlow = Barlow({ subsets: ["latin"], weight: "700" });
const poppins = Poppins({ weight: "600", subsets: ["latin"] });

export default function HSection6() {
  return (
    <div className="w-full flex flex-col justify-end relative px-10 h-full py-20 ">
      <h1 className="absolute @apply text-[200px] font-bold leading-[157px] text-left text-white top-20 -left-28">
        INNOVATE
      </h1>
      <div className="lg:px-20 px-5 py-20 relative">
        <h1 className="absolute lg:block hidden left-[60px] font-bold top-[60px]">
          {"[5]"}
        </h1>
        <h1 className="xl:text-[35px] lg:text-[31px] md:text-[27px] text-[23px]  flex-col flex font-normal leading-[30px] text-left">
          Sourcing
          <span className="text-[15px] font-light leading-[30px] text-left">
            [ˈsɔːsɪŋ]
          </span>
        </h1>
        <p className="xl:text-lg lg:text-sm text-xs font-normal lg:leading-[25px] tracking-[-0.03em] text-left py-5">
          First ever tech enabled platform to eradicate all sourcing & supply
          chain hassles.Innovative and most effective way to
          <br /> cater sourcing needs of the fashion and textile industry.
        </p>
        <p className="xl:text-lg lg:text-sm text-xs font-normal lg:leading-[25px] tracking-[-0.03em] text-left lg:py-5">
          सभी सोर्सिंग और आपूर्ति श्रृंखला बाधाओं को खत्म करने के लिए पहली बार
          तकनीकी सक्षम मंच। फैशन और कपड़ा उद्योग की सोर्सिंग
          <br /> जरूरतों को पूरा करने के लिए अभिनव और सबसे प्रभावी तरीका।
        </p>
        <p className=" relative group cursor-pointer w-fit my-4">
          <span className="@apply text-lg font-bold lg:leading-[16.9px] tracking-[0.5px] ">
            Go to Sourcing cartel
          </span>
          <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
        </p>
        <div />
      </div>
      <Image
        className="absolute hidden lg:block top-0 -right-16 h-[80%] w-auto object-cover"
        src="/services/img7.jpg"
        alt=""
        width={500}
        height={450}
      />
    </div>
  );
}
