import Image from "next/image";
import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
function Testimonials() {
  const indicators = (index) => (
    <span className="relative indicator flex h-3 w-3 mr-5">
      <span
        className={`${
          null
          // section === item.url ? "animate-ping bg-sky-400" : null
        } absolute animate-ping bg-sky-400 inline-flex h-full w-full rounded-full  opacity-75`}
      ></span>
      <span
        className={`relative inline-flex bg-sky-500 rounded-full h-3 w-3 border border-sky-400 ${
          // section === item.url ? "bg-sky-500 " : null
          null
        }`}
      ></span>
    </span>
  );
  const properties = {
    prevArrow: <></>,
    nextArrow: <></>,
  };

  return (
    <section id="testimonials">
      <div>
        <h3 className="mt-[30px] text-[#f0f0f0] uppercase underAbout relative inline-block text-[20px] md:text-[24px] lg:text-[31px] font-semibold tracking-[.3px] leading-[normal] mb-[40px]">
          Testimonials
        </h3>
        <Slide indicators={indicators} {...properties}>
          {[1, 2, 3, 4].map((item, key) => (
            <div
              key={key}
              className="mb-[45px] p-[35px_30px] md:mb-[35px] text-[#c7c5c7] bg-[#2c3c4f] w-full border-[#374757] border-[3px] shadow-[0px_4px_5px_rgba(37,50,66,.7)] m-[3px]"
            >
              <div className="relative">
                <Image src="/chibs.jpg" fill alt="Satisfied clients" />
              </div>
              <h3>Chibuike Ewenike</h3>
              <h3>Frontend Developer</h3>
              <div className="flex testimonialGradient relative w-full justify-between">
                <div className=" w-[30px] relative h-[30px] border rounded-full border-[red]"></div>
                <div className="w-[30px] h-[30px] border rounded-full border-[red]"></div>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo.
              </p>
            </div>
          ))}
        </Slide>
      </div>
    </section>
  );
}

export default Testimonials;
