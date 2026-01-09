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
      title: "Software Engineer",
      date: "2024 - Present",
      type: "Lexanalytics",
      details:
        "Designed and implemented metadata extraction algorithms for parsing law reports. Maintained enterprise-grade authentication systems and contributed to legal research tools. Worked on contract drafting and automation tools, enabling structured document generation. Tech: Python, FastAPI/Django, PostgreSQL, React, TypeScript",
      position: "justify-center md:justify-start",
    },
    {
      title: "Backend Engineer",
      date: "June 2025 - July 2025",
      type: "BrainzCode",
      details:
        "Built Python-based backend services for AI-powered applications. Worked on voice cloning and voice synchronization systems. Implemented secure authentication mechanisms and handled DevOps tasks including server provisioning and production deployments. Tech: Python, AWS, Linux, AI models",
      position: "justify-center md:justify-end",
    },

    {
      title: "Fullstack Engineer",
      date: "2023 - 2025",
      type: "Solid Fiction",
      details:
        "Built and maintained scalable e-learning platform supporting content delivery and enrollment workflows. Developed loan management system and worked on Nuvoro booking platform with Stripe payment integration. Delivered features across frontend and backend with focus on performance and reliability. Tech: Python, JavaScript, React, Stripe, PostgreSQL",
      position: "justify-center md:justify-start",
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
            {resumeDetails.map((item, idx) => (
              <div
                key={item.title + idx}
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
