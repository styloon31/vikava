import React from "react";
import { Barlow } from "next/font/google";

const barlow = Barlow({ subsets: ["latin"], weight: "700" });

export default function HSection1() {
  return (
    <div className="w-full flex flex-col justify-center relative px-10 h-full py-20 ">
      <h1
        className={`@apply xl:text-9xl lg:text-7xl md:text-5xl text-3xl font-bold lg:leading-[157px] text-left text-name ${barlow.className}`}
      >
        Our Services
      </h1>
      <div className="lg:px-20 px-5 py-10 relative">
        <h1 className="absolute lg:block hidden left-16 font-bold top-5">
          {"[1]"}
        </h1>
        <h1 className="xl:text-[35px] lg:text-[31px] md:text-[27px] text-[23px]   flex-col flex font-normal leading-[30px] text-left">
          Mentoring & Consultancy
          <span className="text-[15px] font-light leading-[30px] text-left">
            /ˈmen.tɔː.rɪŋ/ - /ænd/ - /kənˈsʌl.tən.si/
          </span>
        </h1>
        <p className="xl:text-lg lg:text-sm text-xs font-normal lg:leading-[25px] tracking-[-0.03em] text-left py-5">
          A unique & innovative support system for your business, which helps
          you at all the stages of your enterprenureship journey, right
          <br /> from the stage of company inception to research to production
          to marketing to sales.
        </p>
        <p className="xl:text-lg lg:text-sm text-xs font-normal lg:leading-[25px] tracking-[-0.03em] text-left lg:py-5">
          आपके व्यवसाय के लिए एक अद्वितीय और अभिनव समर्थन प्रणाली, जो आपको अपनी
          उद्यमिता यात्रा के सभी चरणों में मदद करती है, कंपनी की स्थापना के चरण
          से लेकर अनुसंधान तक उत्पादन तक विपणन से बिक्री तक।
        </p>
        <p className=" relative group cursor-pointer w-fit my-4">
          <span className="@apply text-lg font-bold lg:leading-[16.9px] tracking-[0.5px] ">
            Go to MAC
          </span>
          <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
        </p>
      </div>
    </div>
  );
}
