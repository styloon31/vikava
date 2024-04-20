import Image from "next/image";
import React from "react";
import { Poppins, Roboto, Barlow, Inria_Sans, Inter } from "next/font/google";

const poppins = Poppins({ weight: "400", subsets: ["latin"] });
const roboto = Roboto({ weight: "400", subsets: ["latin"] });
const barlow = Barlow({ weight: "600", subsets: ["latin"] });
const Inria = Inria_Sans({ weight: "700", subsets: ["latin"] });
const inter = Inter({ weight: "400", subsets: ["latin"] });

const arrow = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 rotate-45">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75 12 3m0 0 3.75 3.75M12 3v18" />
              </svg>



export default function Footer() {
  return (
    <section className="text-white px-20 bg-[#3C3936] w-full flex flex-col items-center justify-center p-4">
      <Image 
      src={'/logo.png'}
      height={200}
      width={200}
      className="invert"
      alt="" />
      <div className="w-full  lg:flex gap-2 lg:justify-between">
        <div className="flex flex-col items-center lg:items-start justify-center">
          <h2 className={`${barlow.className} font-[18px] `}>Vikava Labs</h2>
          <ul className={`${inter.className} font-[14px] py-4 lg:text-left text-centerw`}>
            <li>About VL</li>
            <li>Members</li>
            <li>Partners</li>
            <li>Our Mission</li>
            <li>Work with us</li>
            <li>Team</li>
          </ul>
        </div>
        <div className="flex items-center lg:items-start justify-center">
          <div className=" flex flex-col items-center lg:items-start justify-center">
            <h2 className={`${barlow.className} font-[18px]`}>Our services</h2>
            <div className={`${inter.className} font-[14px] flex flex-col items-center lg:items-start justify-center lg:flex lg:flex-row lg:gap-4 py-4`}>
              <ul className="flex flex-col items-center lg:items-start">
                  <li>Mentoring & consultancy</li>
                  <li>Branding & Creatives</li>
                  <li>Product Design</li>
                  <li>Design inspiration</li>
                  <li>Sourcing</li>
                </ul>
                <ul className="flex flex-col items-center lg:items-start">
                  <li>Sustainable Sourcing</li>
                  <li>Digital Marketing</li>
                  <li>E-com Sales</li>
                  <li>Couture Commerce</li>
                </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center lg:items-start ">
          <h2 className={`${barlow.className} font-[18px]`}>Legal</h2>
            <ul className={`${inter.className} font-[14px] py-4 flex flex-col items-center lg:items-start`}>
              <li>Terms of Use</li>
              <li>Privacy Policy</li>
              <li>Report an issue</li>
            </ul>
        </div>
        <div className="hidden lg:block">
          <h2 className={`${barlow.className} font-[18px]`}>Contact with VL</h2>
          <div className="flex py-4 w-72 gap-4">
            <ul className={`${inter.className} font-[14px] w-full`} >
              <li className="flex w-full justify-between">
                Instagram {arrow}
              </li>
              <li className="flex w-full justify-between">
                Facebook {arrow}
              </li>
              <li className="flex w-full justify-between">
                Threads {arrow}
              </li>
            </ul>
            <ul className="w-full">
              <li className="flex w-full justify-between">
                Twitter {arrow}
              </li>
              <li className="flex w-full justify-between">
                Youtube {arrow}
              </li>
              <li className="flex w-full justify-between">
                Behance {arrow}
              </li>
            </ul>
          </div>
          <h2 className={`${poppins.className} font-[16px] pt-4`}>info@vikavalabs.com</h2>
        </div>
        <div className={`${poppins.className} font-[14px] hidden lg:block`}>
          <p>&#169; 2023 SUN INTERNATIONAL. ALL <br /> RIGHTS RESERVED.</p>
          <p className="pt-4">G1, Site b, Surajpur industrial<br /> area, Nicco chowk Dadri road,<br /> Greater Noida 201306, UP</p>
        </div>
      </div>
      <div>
        <h2>Newletter</h2>
        <input type="text" placeholder="Email id" className="placeholder:bg-[#3C3936] placeholder:text-black  border-white" />

      </div>
    </section>
  );
}
