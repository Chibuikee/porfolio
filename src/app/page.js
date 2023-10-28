"use client";
import Hero from "@/components/Hero";
import About from "@/components/about";
import Contact from "@/components/contact";
import { UseMobileToggler } from "@/components/hooks/paramsSetter";
import Nav from "@/components/nav/Nav";
import Resume from "@/components/resume";
import Services from "@/components/services";
import Sidebar from "@/components/sidebar";
import Testimonials from "@/components/testimonials";
import { useEffect, useState } from "react";

export default function Home() {
  const [isIntersecting, setIntersecting] = useState(false);
  const { createQueryString, router } = UseMobileToggler();
  console.log("intersectingnow", isIntersecting);
  // useEffect(() => {
  //   router.push(
  //     `/?${createQueryString("section", isIntersecting?.hash)}#${
  //       isIntersecting?.hash
  //     }`
  //   );

  //   return () => {};
  // }, [isIntersecting?.hash]);

  return (
    <main className="relative bg-[#263446]">
      <Sidebar />
      <Hero isvisible={isIntersecting} setIntersecting={setIntersecting} />
      <Nav />
      <div className="px-[30px] h- full lg:px-[15px] md:w-[750px] relative pc:w-[970px] xl:w-[1170px] mx-auto">
        <About isvisible={isIntersecting} setIntersecting={setIntersecting} />
        <Services
          isvisible={isIntersecting}
          setIntersecting={setIntersecting}
        />
        <Resume isvisible={isIntersecting} setIntersecting={setIntersecting} />
        <Testimonials
          isvisible={isIntersecting}
          setIntersecting={setIntersecting}
        />
        <Contact isvisible={isIntersecting} setIntersecting={setIntersecting} />
      </div>
    </main>
  );
}
