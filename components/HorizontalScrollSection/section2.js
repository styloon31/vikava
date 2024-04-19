import React from "react";
import Image from "next/image";

export default function HSection2() {
  return (
    <>
      <div className="w-full flex lg:hidden flex-col justify-center items-center gap-4 relative px-10 h-full py-20 ">
        <Image
          className=" border-[8px] border-white w-[50%]  aspect-square object-cover"
          src="/services/img2.jpg"
          alt=""
          width={500}
          height={500}
        />
        <p className="  text-[16px] text-name font-normal leading-[39px] tracking-[2px] text-center">
          उत्साहस्य बीजं ज्ञानं, प्रेरणा च पराक्रमम्।
          <br />
          समर्पणं सर्वकार्येषु, सिद्धिर्भवति सुव्रत।&quot;
        </p>
      </div>

      <div className="w-full hidden lg:block relative px-10 h-full py-20">
        <p className="absolute right-28 top-24 text-[32px] text-name font-normal leading-[39px] tracking-[2px] text-center">
          उत्साहस्य बीजं ज्ञानं, प्रेरणा च पराक्रमम्।
          <br />
          समर्पणं सर्वकार्येषु, सिद्धिर्भवति सुव्रत।&quot;
        </p>

        <Image
          className="absolute -left-20 top-10 h-[90%] object-cover"
          src="/services/img1.jpg"
          alt=""
          width={500}
          height={500}
        />
        <Image
          className="absolute -right-[11.5rem] -bottom-10 h-[50%] w-auto object-cover"
          src="/services/E.svg"
          alt=""
          width={500}
          height={450}
        />
        <Image
          className="absolute left-80 border-[8px] border-white top-[45%] aspect-square w-auto h-[40%] object-cover"
          src="/services/img2.jpg"
          alt=""
          width={500}
          height={500}
        />
      </div>
    </>
  );
}
