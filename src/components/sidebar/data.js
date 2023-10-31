"use client";
import { ImHome3 } from "react-icons/im";
import { FaCodeMerge } from "react-icons/fa6";
import { BsFillPersonFill } from "react-icons/bs";
import { AiFillProfile } from "react-icons/ai";
import { PiPhoneCallFill } from "react-icons/pi";
import { MdReviews } from "react-icons/md";
import { FaBloggerB, FaFileCode } from "react-icons/fa";
export const navItems = [
  {
    icon: ImHome3,

    name: "Home",
    url: "home",
  },
  {
    icon: BsFillPersonFill,
    name: "About",
    url: "about",
  },
  {
    icon: FaFileCode,
    name: "Resume",
    url: "resume",
  },
  {
    icon: FaCodeMerge,
    name: "Portfolio",
    url: "portfolio",
  },
  {
    icon: MdReviews,
    name: "Testimonials",
    url: "testimonials",
  },
  {
    icon: FaBloggerB,
    name: "Blog",
    url: "blog",
  },
  {
    icon: PiPhoneCallFill,
    name: "Contact",
    url: "contact",
  },
];
