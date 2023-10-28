"use client";
import Hero from "@/components/Hero";
import About from "@/components/about";
import { UseMobileToggler } from "@/components/hooks/paramsSetter";
import Nav from "@/components/nav/Nav";
import Resume from "@/components/resume";
import Sidebar from "@/components/sidebar";
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
    <main className="relative min-h-screen bg-[#2b3d4f]">
      <Sidebar />
      <Nav />
      <Hero isvisible={isIntersecting} setIntersecting={setIntersecting} />
      <Resume isvisible={isIntersecting} setIntersecting={setIntersecting} />
      <About isvisible={isIntersecting} setIntersecting={setIntersecting} />
    </main>
  );
}
