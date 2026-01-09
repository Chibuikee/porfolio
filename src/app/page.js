"use client";
import Hero from "@/components/Hero";
import PortfolioBuilder from "@/components/Portfolio/PortfolioBuilder";
import About from "@/components/about";
import Contact from "@/components/contact";
import { UseMobileToggler } from "@/components/hooks/paramsSetter";
import Nav from "@/components/nav/Nav";
import Resume from "@/components/resume";
import Services from "@/components/services";
import Sidebar from "@/components/sidebar";
import Testimonials from "@/components/testimonials";
import TestinPage from "@/components/testinPage";
import { Suspense, useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function Home() {
  // useEffect(() => {
  //   router.push(
  //     `/?${createQueryString("section", isIntersecting?.hash)}#${
  //       isIntersecting?.hash
  //     }`
  //   );

  //   return () => {};
  // }, [isIntersecting?.hash]);

  return (
    <>
      <ToastContainer />
      <main className="relative bg-[#263446]">
        <Suspense>
          {" "}
          <Sidebar />
          <Hero />
          <Nav />
          <div className="px-[30px] h- full lg:px-[15px] md:w-[750px] relative pc:w-[970px] xl:w-[1170px] mx-auto">
            <About />
            <Services />
            <Resume />
            <PortfolioBuilder />
            <Testimonials />
            <Contact />
            {/* <TestinPage /> */}
          </div>
        </Suspense>
      </main>
    </>
  );
}
