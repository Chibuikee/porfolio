import React, { useRef } from "react";
import { BsInstagram } from "react-icons/bs";
import { FaLightbulb, FaCode, FaServer, FaPencilRuler } from "react-icons/fa";
import useOnScreen from "../hooks/hooks";
function Services() {
  const Servicesref = useRef(null);
  useOnScreen(Servicesref);
  const skills = [
    {
      name: "FRONTEND DEVELOPMENT",
      icon: FaCode,
      details:
        "Design-driven developer truning visions into captivating, user-friendly web experiences.",
    },
    {
      name: "CO-FOUNDER",
      icon: FaLightbulb,
      details:
        "Fusing vision and drive to forge the future, one venture at a time",
    },
    {
      name: "UI/UX DESIGN",
      icon: FaPencilRuler,
      details:
        "Crafting delightful digital experiences, ensuring seamless user journeys",
    },
    {
      name: "BACKEND DEVELOPMENT",
      icon: FaServer,
      details:
        "Architecting robust, scalable, high-performance digital foundations and systems.",
    },
  ];
  return (
    <section ref={Servicesref} id="services" className="px- [15px] h -screen">
      <div>
        <h3 className="mt-[30px] text-[#f0f0f0] underAbout relative inline-block text-[20px] md:text-[24px] lg:text-[31px] font-semibold tracking-[.3px] leading-[normal] mb-[40px]">
          MY SERVICES
        </h3>
        <div className="md:grid gap-[30px] grid-cols-2 lg:grid-cols-3 ">
          {skills.map((Item) => (
            <div
              key={Item.name}
              className="bg-[#2b3d4f] max-md:mb-[30px] group relative hover:-translate-y-2 transition delay-150 duration-500 ease-in-out font-open_Sans text-white p-[40px_30px] rounded-b-[5px] border-b-[2px] border-b-[rgba(22,192,240,.65)] text-center"
            >
              <div className="w-[55px] grid place-items-center group-hover:bg-[rgba(22,192,240,.65)] h-[55px] mx-auto rounded-[50%] border border-[rgba(22,192,240,.65)] ">
                <Item.icon
                  size={20}
                  className="text-[red] group-hover:text-white"
                />
              </div>
              <h3 className="text-[14px] whitespace-nowrap md:text-base font-montserrat tracking-[1px] lg:tracking-[.7px] my-[20px] font-semibold uppercase">
                {Item.name}
              </h3>
              <p className="text-[14px] text-[#c7c5c7] font-normal mb-[10px] leading-[1.8rem] ">
                {Item.details}{" "}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
