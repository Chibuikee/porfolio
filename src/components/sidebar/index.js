"use client";
import React from "react";
import BarTab from "./Tab";
import { navItems } from "./data";
import { UseMobileToggler } from "../hooks/paramsSetter";

function Sidebar() {
  const { mobileView, toggler } = UseMobileToggler();
  return (
    <section
      id="sideBarComponent"
      className={`sidebar ${
        mobileView == "true" ? null : "left-[-300px]"
      } fixed left-0 overflow-y-scroll overflow-x-hidden h-screen w-[265px] bg-[#2b3d4f] z-50`}
    >
      <div className="h-[90%] ">
        <div className="py-[70px] ">
          <h1 className="text-[23px] text-center text-white relative font-semibold first-letter:text-[#16c0f0] after:absolute after:content-[' '] after:w-[5px] after:h-[5px] after:ml-[3px] after:bg-[#16c0f0] after:bottom-[10px] ">
            Chibuike
          </h1>
        </div>
        <ul className=" relative">
          {navItems.map((Item, key) => (
            <BarTab key={key} data={{ Item }} />
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Sidebar;
