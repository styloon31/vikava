import React from "react";
import { Barlow } from "next/font/google";
import Image from "next/image";

const barlow = Barlow({ subsets: ["latin"], weight: "700" });

export default function HSection5() {
  return (
    <div className="w-full flex flex-col justify-center relative px-10 h-full py-20 ">
      <div className="w-full z-10 h-full flex items-center justify-center">
        <div className="w-[70%] h-[80%] bg-[#F7F0DF]">
          <div className="lg:px-20 px-5 py-20 relative">
            <h1 className="absolute lg:block hidden left-[60px] font-bold top-[60px]">
              {"[4]"}
            </h1>
            <h1 className="xl:text-[35px] lg:text-[31px] md:text-[27px] text-[23px]  flex-col flex font-normal leading-[30px] text-left">
              Design Inspiration
              <span className="text-[15px] font-light leading-[30px] text-left">
                [dɪˈzʌɪn][ɪnspɪˈreɪʃ(ə)n]
              </span>
            </h1>
            <p className="xl:text-lg lg:text-sm text-xs font-normal lg:leading-[25px] tracking-[-0.03em] text-left py-5">
              Take inspiration or fullfill your design requirements in the most
              easy & economical manner. A game changing Tech platform to take
              fashion/textile designing to next level.
            </p>
            <p className="xl:text-lg lg:text-sm text-xs font-normal lg:leading-[25px] tracking-[-0.03em] text-left lg:py-5">
              प्रेरणा लें या अपनी डिज़ाइन आवश्यकताओं को सबसे आसान और किफायती
              तरीके से पूरा करें। फैशन / टेक्सटाइल डिजाइनिंग को अगले स्तर पर ले
              जाने के लिए एक गेम चेंजिंग टेक प्लेटफॉर्म।
            </p>
            <p className=" relative group cursor-pointer w-fit my-4">
              <span className="@apply text-lg font-bold lg:leading-[16.9px] tracking-[0.5px] ">
                Go to Design library of India
              </span>
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
            </p>
            <div />
          </div>
        </div>
      </div>
      <div className="absolute inset-0 overflow-hidden">
        <Image
          className="w-full h-full object-cover"
          src="/services/bg6.png"
          alt=""
          layout="fill"
        />
      </div>
    </div>
  );
}
