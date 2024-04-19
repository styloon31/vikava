import React from "react";
import { Barlow } from "next/font/google";
import Image from "next/image";

const barlow = Barlow({ subsets: ["latin"], weight: "700" });

export default function HSection4() {
  return (
    <div className="w-full flex flex-col justify-center relative px-10 h-full py-20 ">
      <div className="flex flex-row  gap-10 w-full h-1/2 items-center justify-center lg:justify-normal relative">
        <div className="flex flex-col  h-full items-center justify-end">
          <Image
            className=" border-white w-auto h-[70%] object-cover aspect-[4/5] shadow-xl"
            src="/services/img4.jpg"
            alt=""
            width={500}
            height={500}
          />
        </div>
        <div className="flex flex-col h-full items-center justify-start">
          <Image
            className=" border-white w-auto h-[70%] object-cover aspect-[4/5] shadow-xl"
            src="/services/img5.jpg"
            alt=""
            width={500}
            height={500}
          />
        </div>
        <Image
          className="absolute -bottom-20 -right-20 hidden lg:block h-[70%] w-auto object-cover mix-blend-multiply"
          src="/services/round.png"
          alt=""
          width={500}
          height={450}
        />

      </div>
      <div className="lg:px-56 px-5 py-10 relative">
        <h1 className="absolute lg:block hidden left-52 font-bold top-5">
          {"[3]"}
        </h1>
        <h1 className="xl:text-[35px] lg:text-[31px] md:text-[27px] text-[23px]   flex-col flex font-normal leading-[30px] text-left">
          Design Services
          <span className="text-[15px] font-light leading-[30px] text-left">
            [dɪˈzʌɪn][ˈsəːvɪs]
          </span>
        </h1>
        <p className="xl:text-lg lg:text-sm text-xs font-normal lg:leading-[25px] tracking-[-0.03em] text-left py-5">
          Tech enabled, an innovative, economical & a new way for product
          reasearch & design for fashion businesses
          <br /> across all verticals viz. apparels, home furnishings &
          lifestyle accessories.
        </p>
        <p className="xl:text-lg lg:text-sm text-xs font-normal lg:leading-[25px] tracking-[-0.03em] text-left lg:py-5">
          टेक सक्षम, एक अभिनव, किफायती और उत्पाद खोज के लिए एक नया तरीका और फैशन
          व्यवसायों के लिए डिजाइन सभी वर्टिकल
          <br /> जैसे परिधान, होम फर्निशिंग और लाइफस्टाइल एक्सेसरीज़ में फैशन
          व्यवसायों के लिए।
        </p>
        <p className=" relative group cursor-pointer w-fit my-4">
          <span className="@apply text-lg font-bold lg:leading-[16.9px] tracking-[0.5px] ">
            Go to Design Cartel
          </span>
          <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
        </p>
      </div>
    </div>
  );
}
