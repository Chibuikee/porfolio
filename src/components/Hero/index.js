"use client";
import useOnScreen from "@/components/hooks/hooks";
import React, { useRef } from "react";
import { HiChevronDown } from "react-icons/hi";
import { TypeAnimation } from "react-type-animation";
import { navItems } from "../sidebar/data";
import { Tooltip } from "react-tooltip";
import { UseMobileToggler } from "../hooks/paramsSetter";
import { usePathname } from "next/navigation";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { BsInstagram, BsTwitter, BsTiktok } from "react-icons/bs";
import Image from "next/image";

function Hero({ setIntersecting, isvisible }) {
  const pathname = usePathname();
  const { mobileView, toggler, section, router, createQueryString } =
    UseMobileToggler();
  const homeRef = useRef(null);
  useOnScreen(homeRef, setIntersecting);
  // console.log("intersectingHero", isvisible);
  //   console.log(isvisible, "from intro page");
  // const hash = location.hash.substring(1);
  // console.log("the hash", section);
  const socialMediaicons = [
    { name: "linkedin", link: "", icon: FaLinkedinIn },
    { name: "instagram", link: "", icon: BsInstagram },
    { name: "twitter", link: "", icon: BsTwitter },
    { name: "facebook", link: "", icon: FaFacebookF },
    { name: "tiktok", link: "", icon: BsTiktok },
  ];
  const servivesProvided = [
    "A Frontend Developer",
    200,
    "A Mobile Apps Developer",
    200,
    "An Analytics Engineer",
    200,
    "An Seo Engineer",
    200,
    "A UI/UX Designer",
    200,
    "A Backend Developer",
    200,
  ];

  return (
    <section
      ref={homeRef}
      id="home"
      className="Hero w-full z -0 flex h-screen  items- center justify-center bg-[#070303] relative"
    >
      <Image
        style={{ objectFit: "cover" }}
        src="/images/bg.jpg"
        fill
        className="z-[4]"
        alt="landing hero section"
      />
      <div className="absolute z-[5] left-0 right-0 top-0 bottom-0 bg-[#2b3d4fb2]"></div>
      <div className=" absolute z-20 left-[10px] md:left-[40px] w-[20px] -translate-y- 1/2 items-center top-[35%]  flex flex-col gap-3">
        <h3 className="rotate-[90deg] text-white text-base w-[15ch] shrink-0 m-3">
          FOLLOW <span> ME</span>
        </h3>
        <div className="w-[2px] h-[100px] bg-[#16c0f0] shrink-0 "></div>
        {socialMediaicons.map((Item, key) => (
          <React.Fragment key={Item.name + key}>
            <Item.icon size={10} className="text-white" />
          </React.Fragment>
        ))}
      </div>
      <div className="absolute z-10 -translate-x-1/2 -translate-y-1/2 left-[50%] top-[50%] w- full">
        <h1 className="text-[#ffffff] whitespace-nowrap text-center text-[35px] md:text-[60px] lg:text-[75px] font-montserrat mt-[60px] mb-[30px] font-bold">
          Chibuike Ewenike
        </h1>
        <p className="text-[red] text-[22px] text-center mb-[50px]">
          I&#39;m{" "}
          <TypeAnimation
            sequence={servivesProvided}
            // sequence={["One", 500, "Two", 500, "Three", 500]}
            style={{ color: "#16c0f0" }}
            repeat={Infinity}
          />
        </p>
        {/* <p className=" text-[#ffffff] w-auto mx-auto flex wrapper justify-center items-center">
          <span className="text-[1.4rem] text-center ">I&#39;m A</span>
          <ul className="dynamic-txts ">
            {servivesProvided.map((item, key) => (
              <li key={item + key} className="text-[1.4rem]">
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </p> */}
        <div className="flex max-md:flex-col items-center gap-5 justify-center bg-[transparent] text-white">
          <button className="py-3 text-base w-[160px] bg-[#16c0f0] text-white font-medium rounded-[50px] border border-[#16c0f0]">
            Hire me
          </button>
          <button className="py-3 text-base w-[160px] border-[#16c0f0] border bg-[transparent] text-[#16c0f0] rounded-[50px]">
            Download CV
          </button>
        </div>
      </div>
      <div className=" fixed z-50 right-[30px] translate-y-[-50%] top-[50%] flex flex-col gap-2">
        {navItems.map((item, key) => (
          <React.Fragment key={item.name}>
            <span
              //  <Link
              //  href={`/?${createQueryString("section", Item.url)}#${Item.url}`}
              onClick={() =>
                router.push(
                  `/?${createQueryString("section", item.url)}#${item.url}`
                )
              }
              // onClick={() => toggler("section", `${item.url}#$`)}
              data-tooltip-id={`component${item.name}`}
              data-tooltip-content={item.name}
              data-tooltip-delay-show={500}
              className="relative flex h-3 w-3"
            >
              <span
                className={`${
                  section === item.url ? "animate-ping bg-sky-400" : null
                } absolute inline-flex h-full w-full rounded-full  opacity-75`}
              ></span>
              <span
                className={`relative inline-flex rounded-full h-3 w-3 border border-sky-400 ${
                  section === item.url ? "bg-sky-500 " : null
                }`}
              ></span>
            </span>
            <Tooltip
              // className="react-tooltip__place-left"
              id={`component${item.name}`}
              place="left"
              // place={["left"]}
            />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}

export default Hero;
