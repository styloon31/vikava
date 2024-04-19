import React from "react";
import Image from "next/image";

export default function HSection3() {
  return (
    <div className="w-full flex flex-col justify-center relative px-10 h-full py-20 ">
      <div className="lg:px-20 px-5 py-10 relative">
        <h1 className="absolute lg:block hidden left-16 font-bold top-5">
          {"[2]"}
        </h1>
        <h1 className="xl:text-[35px] lg:text-[31px] md:text-[27px] text-[23px]   flex-col flex font-normal leading-[30px] text-left">
          Branding
          <span className="text-[15px] font-light leading-[30px] text-left">
            [ˈbrandɪŋ]
          </span>
        </h1>
        <p className="xl:text-lg lg:text-sm text-xs font-normal lg:leading-[25px] tracking-[-0.03em] text-left py-5">
          Your brand deserves laungauge of its own to communicate with the world
          ; Its all about branding & creative content
          <br />
          creation, to present your brands story in the most beautifull manner.
        </p>
        <p className="xl:text-lg lg:text-sm text-xs font-normal lg:leading-[25px] tracking-[-0.03em] text-left lg:py-5">
          आपका ब्रांड दुनिया के साथ संवाद करने के लिए अपने स्वयं के लॉन्गेज का
          हकदार है; यह सब ब्रांडिंग और रचनात्मक सामग्री निर्माण के बारे
          <br /> में है, अपने ब्रांड की कहानी को सबसे सुंदर तरीके से प्रस्तुत
          करने के लिए।
        </p>
        <p className=" relative group cursor-pointer w-full text-center lg:w-fit my-4">
          <span className="@apply text-lg font-bold lg:leading-[16.9px] tracking-[0.5px] ">
            Go to Vikara Design lab
          </span>
          <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
        </p>
        <div className="w-full flex justify-center lg:justify-end items-center lg:mt-20">
          <p className=" right-28 top-24 whitespace-nowrap text-[16px] lg:text-[32px] text-name font-normal leading-[39px] tracking-[2px] text-center">
            उत्साहस्य बीजं ज्ञानं, प्रेरणा च पराक्रमम्।
            <br />
            समर्पणं सर्वकार्येषु, सिद्धिर्भवति सुव्रत।&quot;
          </p>
        </div>
        <Image
          className="absolute hidden lg:block top-0 right-10 h-[50%] w-auto object-cover"
          src="/services/img3.jpg"
          alt=""
          width={500}
          height={450}
        />
      </div>
    </div>
  );
}
