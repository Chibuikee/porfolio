import Image from "next/image";
import React, { useRef } from "react";
import useOnScreen from "../hooks/hooks";
import { FcCalendar } from "react-icons/fc";
function Resume() {
  // { isIntersecting, setIntersecting }
  const resumeref = useRef(null);
  useOnScreen(resumeref);
  //   console.log("intersectingresume", isvisible);
  const resumeDetails = [
    {
      title: "Front End Developer",
      date: "2020 - 2021",
      type: "Freelance",
      details:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet, consectetur adipisicing elit incididunt ut labore et.",
      position: "justify-center md:justify-start",
    },
    {
      title: "Marketing Strategist",
      date: "2020 - 2022",
      type: "Freelance",
      details:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet, consectetur adipisicing elit incididunt ut labore et.",
      position: "justify-center md:justify-end",
    },
    {
      title: "SEO Developer",
      date: "2021 - 2021",
      type: "Freelance",
      details:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet, consectetur adipisicing elit incididunt ut labore et.",
      position: "justify-center md:justify-start",
    },
    {
      title: "Back End Developer",
      date: "2022 - 2023",
      type: "Freelance",
      details:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet, consectetur adipisicing elit incididunt ut labore et.",
      position: "justify-center md:justify-end",
    },
  ];
  return (
    <section
      ref={resumeref}
      id="resume"
      className="h-auto text-white relative mt-[30px]"
    >
      <div className="">
        <h3 className="mt-[30px] text-[#f0f0f0] underAbout relative inline-block text-[20px] md:text-[24px] lg:text-[31px] font-semibold tracking-[.3px] leading-[normal] mb-[40px]">
          MY RESUME
        </h3>
        <div className="pt-[40px] relative ">
          <div className=" timeline h- [700px]">
            {resumeDetails.map((item) => (
              <div
                key={item.title}
                className={`dot before:top-[-30px] md:before:top-[10px] w-full ${item.position} flex relative`}
              >
                <div className="mb-[45px] md:mb-[35px] text-[#c7c5c7] bg-[#2c3c4f] w-full md:w-[47%] border-[#374757] border-[3px] shadow-[0px_4px_5px_rgba(37,50,66,.7)] m-[3px]">
                  <h2 className="text-center text-[#16c0f0] py-[15px] font-semibold tracking[.5px] text-base">
                    {item.title}
                  </h2>
                  <h3 className="text-center relative text-[13px] mx-[20px] mb-[15px] border-b-[#373757] border-b pb-[15px]">
                    <span>
                      <FcCalendar size={12} className="inline mb-[3px]" />{" "}
                      {item.date}
                    </span>{" "}
                    | <span>{item.type}</span>
                  </h3>
                  <p className="text-[14px] px-[20px] pb-[15px] leading-[1.8rem] font-normal font-open_Sans ">
                    {item.details}
                  </p>
                </div>
              </div>
            ))}
            {/* <div className="dot relative justify-end flex w-full">
              <div className="mb-[35px]  w-[47%] ">
                <h2 className="text-center">Front End Developer</h2>
                <h3 className="text-center">
                  <FcCalendar size={15} /> <span>2020 - 2021</span> |{" "}
                  <span>Freelance</span>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusm tempor incididunt ut labore et dolore magna aliqua
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit
                  incididunt ut labore et.
                </p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;
