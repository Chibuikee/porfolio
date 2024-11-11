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
    { name: "Name", value: "Chibuike Ewenike" },
    { name: "Title", value: "Mr" },
    { name: "Phone", value: "+234 9032125576" },
    { name: "Address", value: "Apapa, Lagos, Nigeria" },
    { name: "Website", value: "https://github.com/Chibuikee" },
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
              I am a Full-Stack Developer
            </p>
            <p className="text-[#c7c5c7] pb-[10px] leading-[1.8rem] font-normal tracking-[.3px] ">
              I&#39;m an innovative and adaptable front-end developer with 2
              years of experience in creating exceptional and scalable web
              interfaces. Proficient in NextJS, React, TypeScript, JavaScript,
              NodeJs, ExpressJs, MongoDb, Tailwind CSS, Firebase, Git, and
              Redux, I thrive in dynamic environments.
            </p>
            <p className="text-[#c7c5c7] pb-[10px] leading-[1.8rem] font-normal tracking-[.3px] border-b-[1px] border-solid border-[#374757]">
              I&#39;m passionate about startups, constantly learning, and
              problem-solving. My goal is to partner with like-minded
              individuals and companies to build captivating digital
              experiences.{" "}
              <Link
                href={`/?${createQueryString("section", "contact")}#contactme`}
                className="text-[green]"
              >
                Let&#39;s connect and achieve together!
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
              href={`/chibuike_ewenike_software_cv.pdf`}
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
