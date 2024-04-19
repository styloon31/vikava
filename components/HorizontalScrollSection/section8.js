import React from "react";
import Image from "next/image";

export default function HSection8() {
  return (
    <div className="w-full flex flex-col justify-start relative px-20 h-full py-20 ">
      <div className="lg:px-20 px-5 py-10 relative">
        <h1 className="absolute lg:block hidden left-16 font-bold top-5">
          {"[2]"}
        </h1>
        <h1 className="xl:text-[35px] lg:text-[31px] md:text-[27px] text-[23px]   flex-col flex font-normal leading-[30px] text-left">
          Sustainable Sourcing
          <span className="text-[15px] font-light leading-[30px] text-left">
            [səˈsteɪnəb(ə)l][ˈsɔːsɪŋ]
          </span>
        </h1>
        <p className="xl:text-lg lg:text-sm text-xs font-normal lg:leading-[25px] tracking-[-0.03em] text-left py-5">
          Deploying tech to bridge all sustainable sourcing gaps. Innovative
          platform to enable Indian sustainable fashion
          <br /> industry create global mark.
        </p>
        <p className="xl:text-lg lg:text-sm text-xs font-normal lg:leading-[25px] tracking-[-0.03em] text-left lg:py-5">
          सभी स्थायी सोर्सिंग अंतराल को पाटने के लिए तकनीक की तैनाती। भारतीय
          टिकाऊ फैशन उद्योग को वैश्विक पहचान बनाने
          <br /> में सक्षम बनाने के लिए अभिनव मंच।
        </p>
        <p className=" relative group cursor-pointer w-full text-center lg:w-fit my-4">
          <span className="@apply text-lg font-bold lg:leading-[16.9px] tracking-[0.5px] ">
            Go to Sustainable library of India
          </span>
          <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
        </p>
        <div className="w-full flex justify-center lg:justify-end items-center h-full lg:mt-20">
          <p className=" right-28 top-24 whitespace-nowrap text-[16px] lg:text-[32px] text-name font-normal leading-[39px] tracking-[2px] text-center">
            स्वयं प्रेरितः सदैव स्यात्, योऽस्ति नैव निराश्रयः। आत्मनो मोक्षाय
            <br /> सद्गतिः, उत्साहेन समृद्धिमान्।
          </p>
        </div>
      </div>
      <Image
        className="absolute hidden border-[8px] border-white lg:block bottom-0 -left-16 h-[40%] w-auto object-cover"
        src="/services/img8.jpg"
        alt=""
        width={500}
        height={450}
      />
    </div>
  );
}
