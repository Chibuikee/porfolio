import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { FaQuoteLeft } from "react-icons/fa6";
import { FaQuoteRight } from "react-icons/fa6";
import useOnScreen from "../hooks/hooks";
import Link from "next/link";

function Testimonials() {
  const TestimonyPageRef = useRef(null);
  const TestimonyRef = useRef();
  useOnScreen(TestimonyRef);
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
      name: "Adebayo oluwafemi",
      title: " Fullstack Engineer",
      img: "femi.jpg",
      link: "https://www.linkedin.com/in/adebayo-oluwafemi-46b87718b/",
      testimony:
        "Great working with Chibuike , His frontend skills in Javascript and NextJS are seriously impressive. He writes great mobile responsive codes and always willing to learn. Plus, his positive attitude makes him a great team player. You'll love having him on board!",
    },
    {
      name: "Folahan Areago",
      title: " Fullstack Engineer",
      img: "fola.jpg",
      link: "https://www.linkedin.com/in/folahan-areago-0a7818164/",
      testimony:
        "I am delighted to recommend Chibuike, a highly skilled Frontend Developer. His expertise in JavaScript, React, NextJS, TypeScript, Firebase, Tailwind, and Git is truly impressive. Chibuike has an exceptional eye for detail and consistently delivers exceptional web experiences.",
    },
    {
      name: "Adebayo oluwafemi",
      title: " Fullstack Engineer",
      img: "femi.jpg",
      link: "https://www.linkedin.com/in/adebayo-oluwafemi-46b87718b/",
      testimony:
        "Great working with Chibuike , His frontend skills in Javascript and NextJS are seriously impressive. He writes great mobile responsive codes and always willing to learn. Plus, his positive attitude makes him a great team player. You'll love having him on board!",
    },
    {
      name: "Folahan Areago",
      title: " Fullstack Engineer",
      img: "fola.jpg",
      link: "https://www.linkedin.com/in/folahan-areago-0a7818164/",
      testimony:
        "I am delighted to recommend Chibuike, a highly skilled Frontend Developer. His expertise in JavaScript, React, NextJS, TypeScript, Firebase, Tailwind, and Git is truly impressive. Chibuike has an exceptional eye for detail and consistently delivers exceptional web experiences.",
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
    <section ref={TestimonyRef} id="testimonials">
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
              <div className="mx-auto relative h-[50px] w-[50px] rounded-full overflow-clip">
                <Image
                  src={"/images/" + item.img}
                  fill
                  alt="Satisfied clients"
                />
              </div>
              <div className="mx-[15px] mt-[10px] font-semibold">
                <Link
                  href={item.link}
                  className="text-base tracking-[1px] font- montserrat uppercase leading-[1.8rem] text-white"
                >
                  {item.name}
                </Link>

                <h3 className="text-[13px]  leading-[.6rem] text-[#16c0f0] tracking-[.7px]">
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
