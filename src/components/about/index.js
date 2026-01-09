import Image from "next/image";
import React, { useRef } from "react";
import useOnScreen from "../hooks/hooks";
import Link from "next/link";
import { UseMobileToggler } from "../hooks/paramsSetter";

function About() {
  const { mobileView, toggler, section, router, createQueryString } =
    UseMobileToggler();
  const Aboutref = useRef(null);
  const AboutIsvisible = useOnScreen(Aboutref);
  //   console.log("intersectingAbout", isvisible);

  const bio = [
    { name: "Name", value: "Chibuike Sopuruchukwu Ewenike" },
    { name: "Title", value: "Mr" },
    { name: "Phone", value: "+234 9032125576" },
    { name: "Address", value: " Lagos, Nigeria" },
    { name: "Github", value: "https://github.com/Chibuikee" },
    { name: "Email", value: "sopewenike@yahoo.com" },
  ];
  return (
    <section
      ref={Aboutref}
      id="about"
      className={` ${
        AboutIsvisible ? "bg- [#ff000028]" : null
      } pt-[30px] h- screen text-white`}
    >
      <div className="">
        <div className=" lg:flex">
          <div className="relative basis-[50%] py-[7px]  h-[85vh] shrink-0 min-[992px]:basis-[41.66666667%]">
            <Image
              className="lg:px-[22px] h-auto"
              // src="/images/img-1.jpeg"
              src="/images/chibuike.jpg"
              style={{ objectFit: "cover" }}
              fill
              alt="Chibuike Ewenike"
            />
          </div>
          <div className="basis py-[7px] fonts-monserrat lg:px-[22px]">
            {/* <div className="relative inline-block"> */}
            <h3 className="text-[#f0f0f0] underAbout relative inline-block text-[20px] md:text-[24px] lg:text-[31px] font-semibold tracking-[.3px] leading-[normal] mb-[40px]">
              ABOUT ME
            </h3>
            {/* </div> */}
            <h3 className="text-[#f0f0f0] text-[20px] md:text-[24px] lg:text-[31px] font-semibold tracking-[.3px] leading-[normal]  mb-[15px]">
              I am Chibuike Ewenike
            </h3>
            <p className="text-[#16c0f0] text-base font-semibold mb-[15px] tracking-[.5px] leading-[19.2px]">
              Software Engineer | Backend & Fullstack | Cloud & AI Systems
            </p>
            <p className="text-[#c7c5c7] pb-[10px] leading-[1.8rem] font-normal tracking-[.3px] ">
              Highly adaptable Software Engineer with strong expertise in Python
              and JavaScript-based backend systems, cloud deployments, and
              fullstack product development. Proven experience building and
              maintaining production-grade SaaS platforms, including AI-driven
              systems, e-commerce, e-learning platforms, legal-tech, financial,
              and booking applications. Comfortable owning features end-to-end
              from system design and API development to cloud deployment and
              performance optimization.
            </p>
            <p className="text-[#c7c5c7] pb-[10px] leading-[1.8rem] font-normal tracking-[.3px] border-b-[1px] border-solid border-[#374757]">
              Proficient in Python, Go, JavaScript, TypeScript, React, Next.js,
              FastAPI, Django, PostgreSQL, MongoDB, AWS, and Docker. Thrives in
              fast-paced startup and scale-up environments with a passion for
              building software that solves real-world problems.{" "}
              <Link
                href={`/?${createQueryString("section", "contact")}#contactme`}
                className="text-[green]"
              >
                Let&#39;s connect and build something impactful!
              </Link>
            </p>
            {/* <div className="h-[2px] w-full "></div> */}
            <div className="md:grid grid-cols-2 py-[25px] border-t-[1px] border-solid border-[#374757] ">
              {bio.map((item) => (
                <div
                  key={item.name}
                  className="flex gap-[10px] text-[14px] leading-[20px] font-open_Sans"
                >
                  <h3 className="text-[#16c0f0] font-semibold tracking-[.4px] lg:tracking-[.6px] mb-[12px]">
                    {item.name}:
                  </h3>
                  <h4 className="text-[#c7c5c7] font-normal">{item.value}</h4>
                </div>
              ))}
            </div>
            <a
              download="Chibuike Ewenike CV"
              href={`/Chibuike_Ewenike_Software_engineer_CV.pdf`}
            >
              <button className="py-3 text-base w-[160px] border-[#16c0f0] border bg-[transparent] text-[#16c0f0] rounded-[50px]">
                Download CV
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
