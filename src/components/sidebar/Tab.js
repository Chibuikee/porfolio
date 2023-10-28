"use client";
import Link from "next/link";
import { UseMobileToggler } from "../hooks/paramsSetter";

function BarTab({ data }) {
  const { pathname, toggler, section, createQueryString } = UseMobileToggler();

  const { Item } = data;

  return (
    <li
      key={Item.name}
      className={`relative ml-[.92rem] mt-[0.62rem] border-y-[1px]`}
    >
      <Link
        href={`/?${createQueryString("section", Item.url)}#${Item.url}`}
        title={Item.name}
        className={`pl-[1rem] group rounded-[0.25rem] w-full pt-[0.87rem] pb-[1rem] 
        text-[1.125rem] flex items-center
          transition-all ease-in-out duration-[0.5s] ${
            section == `${Item.url}`
              ? `bg-primary ml-[1rem] transition-all duration-[100ms] 
            ease-in text-[#16c0f0]  rounded-[0.25rem] w-[13.7rem]`
              : "hover:bg-[#263446] hover:transition-all text-white hover:duration-[100ms] hover:ease-in hover:text-[#e6e0e0]"
          } `}
      >
        <Item.icon
          className={` ${
            section == `${Item.url}`
              ? "text-[#16c0f0]  "
              : "text-white group-hover:text- [#da5c5c]"
          }`}
          size={18}
        />

        <span
          className={`
           ml-[16px]  block dark:text-default2 dark:group-hover:text-default opacity-100`}
        >
          {Item.name}
        </span>
      </Link>
    </li>
  );
}

export default BarTab;
