import Image from "next/image";
import React, { useRef } from "react";
import useOnScreen from "../hooks/hooks";

function Resume({ setIntersecting, isvisible }) {
  // { isIntersecting, setIntersecting }
  const resumeref = useRef(null);
  useOnScreen(resumeref, setIntersecting);
  //   console.log("intersectingresume", isvisible);
  return (
    <section ref={resumeref} id="resume" className="h-screen text-white">
      <div className="">This is resume section</div>
    </section>
  );
}

export default Resume;
