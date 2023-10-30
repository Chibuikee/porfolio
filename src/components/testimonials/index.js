import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { FaQuoteLeft } from "react-icons/fa6";
import { FaQuoteRight } from "react-icons/fa6";

function Testimonials() {
  const TestimonyPageRef = useRef();
  const indicators = (index) => (
    <span className="relative active:bg-[red] indicator flex h-3 w-3 mr-5">
      <span
        className={`${
          null
          // section === item.url ? "animate-ping bg-sky-400" : null
        } absolute pingchild inline-flex h-full w-full rounded-full  opacity-75`}
      ></span>
      <span
        className={`relative pingchildsibling inline-flex  rounded-full h-3 w-3 border border-sky-400 ${
          // section === item.url ? "bg-sky-500 " : null
          null
        }`}
      ></span>
    </span>
  );

  const testimonialsList = [
    {
      name: "Mayowa Adeboye",
      title: " Fullstack Engineer",
      testimony:
        " Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
    },
    {
      name: "Mayowa Adeboye",
      title: " Fullstack Engineer",
      testimony:
        " Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
    },
    {
      name: "Mayowa Adeboye",
      title: " Fullstack Engineer",
      testimony:
        " Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
    },
    {
      name: "Mayowa Adeboye",
      title: " Fullstack Engineer",
      testimony:
        " Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
    },
  ];
  const [slidesToShow, setSlidesToShow] = useState(1);

  useEffect(() => {
    const calculateSlidesToShow = () => {
      setSlidesToShow(window.innerWidth <= 700 ? 1 : 2);
    };

    calculateSlidesToShow(); // Initialize the value

    const handleWindowResize = () => {
      calculateSlidesToShow();
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      // Clean up the event listener when the component unmounts
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
  const properties = {
    duration: 5000,
    transitionDuration: 500,
    slidesToShow: slidesToShow,
    // arrows: true,
  };
  return (
    <section id="testimonials">
      <div>
        <h3 className="mt-[30px] text-[#f0f0f0] uppercase underAbout relative inline-block text-[20px] md:text-[24px] lg:text-[31px] font-semibold tracking-[.3px] leading-[normal] mb-[40px]">
          Testimonials
        </h3>
        <Slide
          indicators={indicators}
          ref={TestimonyPageRef}
          // autoplay={true}
          slidesToScroll={2}
          // responsive={responsiveSettings}
          slidesToShow={2}
          arrows={false}
          {...properties}
        >
          {testimonialsList.map((item, key) => (
            <div
              key={key}
              className="mb-[45px] text-center p-[35px_30px] md:mb-[35px] text-[#c7c5c7] bg-[#2c3c4f] w-[98%] border-[#374757] border-[3px] shadow-[0px_4px_5px_rgba(37,50,66,.7)] m-[3px]"
            >
              <div className="mx-auto relative h-[50px] w-[50px]">
                <Image src="/images/img-1.jpeg" fill alt="Satisfied clients" />
              </div>
              <div className="mx-[15px] mt-[10px] font-semibold">
                <h3 className="text-base tracking-[1px] font- montserrat uppercase leading-[1.8rem] text-white">
                  {item.name}
                </h3>

                <h3 className="text-[13px]  leading-[1.6rem] text-[#16c0f0] tracking-[.7px]">
                  {item.title}
                </h3>
              </div>
              <div className="flex testimonialGradient before:w-[80%] s:before:w-[90%]  md:before:w-[94%] relative w-full justify-between">
                {[FaQuoteLeft, FaQuoteRight].map((Item, key) => (
                  <div
                    key={key}
                    className="w-[30px] relative h-[30px] border rounded-full border-[#ff000054] grid place-items-center"
                  >
                    <div className="w-[30px] animate-ping h-[30px] border rounded-full border-[#16c0f0] grid place-items-center"></div>
                    <Item
                      size={20}
                      className="absolute left-1/2 text-[#374757] top-1/2 rotate -45 -translate-x-1/2 -translate-y-1/2"
                    />
                  </div>
                ))}
              </div>
              <p className="text-[13px] tracking-[.3px] font-normal leading-[1.8rem] ">
                {item.testimony}
              </p>
            </div>
          ))}
        </Slide>
      </div>
    </section>
  );
}

export default Testimonials;
