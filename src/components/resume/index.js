import Image from "next/image";
import React, { useRef } from "react";
import useOnScreen from "../hooks/hooks";

function Resume({ setIntersecting, isvisible }) {
  // { isIntersecting, setIntersecting }
  const resumeref = useRef(null);
  useOnScreen(resumeref, setIntersecting);
  //   console.log("intersectingresume", isvisible);
  return (
    <section
      ref={resumeref}
      id="resume"
      className="h-screen text-white relative mt-[30px]"
    >
      <div className="">
        <h3 className="mt-[30px] text-[#f0f0f0] underAbout relative inline-block text-[20px] md:text-[24px] lg:text-[31px] font-semibold tracking-[.3px] leading-[normal] mb-[40px]">
          MY RESUME
        </h3>
        <div className="pt-[40px] relative ">
          <div className=" timeline h-[700px]">
            <div className="dot relative grid grid-cols-2">
              <div className="mb-[35px]">
                <h2 className="text-center">Full Stack Developer</h2>
                <div className="flex">
                  a <h4>2020 - 2021</h4> | <h3>Freelance</h3>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusm tempor incididunt ut labore et dolore magna aliqua
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit
                  incididunt ut labore et.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;
