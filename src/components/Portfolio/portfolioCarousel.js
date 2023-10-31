"use client";
import { RWData } from "./PortfolioData";

import React, {
  useRef,
  useEffect,
  useState,
  useImperativeHandle,
  forwardRef,
} from "react";
import { Slide } from "react-slideshow-image";
import { RiFullscreenFill } from "react-icons/ri";
import { BsZoomIn, BsZoomOut, BsShare } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import "react-slideshow-image/dist/styles.css";
import RecentWorksCarouselButtons from "./portfolioCarouselButtons";
import Image from "next/image";

function PortfolioCarouselMain(props, ref) {
  // console.log(pictureIndex, "hello");
  const slideRef = useRef();
  const [Index, setIndex] = useState(0);
  const [openPopup, setPopup] = useState(false);
  // use to forward functions of this component to the parent component
  useImperativeHandle(ref, () => ({
    setGoTo: slideRef.current.goTo,
    setPopup: setPopup,
  }));
  useEffect(() => {
    function ScrollOff(e) {
      console.log("event listener is working");
      setPopup(false);
      console.log(e);
    }
    if (openPopup === true) {
      window.addEventListener("scroll", ScrollOff);
    }
    // if (openPopup === false) {
    //   console.log("scroll event removed from if condition");
    //   window.removeEventListener("scroll", ScrollOff);
    // }
    return () => {
      window.removeEventListener("scroll", ScrollOff);
      console.log("scroll event removed");
    };
  });
  const item = RWData[Index];
  // console.log("getting component ref", openPopup);
  return (
    <div
      className={`${
        openPopup == true ? "block" : "hidden"
      } fixed left-0 text-[white] flex items-center top-0 max-w-full h-screen bg-[#000000] z-[99]`}
    >
      <div className="flex absolute top-0 left-0 right-0 justify-between px-10 py-3">
        <span>
          {Index + 1} / {RWData.length}
        </span>
        <div className="flex gap-5 ">
          {/* <BsZoomIn /> */}
          {/* <RiFullscreenFill /> */}
          <BsShare />
          <AiOutlineClose
            onClick={(e) => {
              e.stopPropagation();
              setPopup(false);
            }}
            size={20}
            className="text-[] cursor-pointer"
          />
        </div>
      </div>
      <div className="w-full ">
        <Slide
          ref={slideRef}
          autoplay={false}
          transitionDuration={0}
          {...RecentWorksCarouselButtons}
          onChange={(from, to) => {
            setIndex(to);
          }}
        >
          {RWData.map((image) => (
            <div
              key={image.title}
              // className="h-full mx-auto w-full relative flex items-center "
              className="max-h-[355px] mx-auto max-w-[700px] llg:max-w-[1000px] relative top-[50%] -translate-y-1/2 flex items-center xl:max-h-[500px]"
            >
              <Image
                className="mx-auto  h-full w-[90%]"
                // className="xs:h-[455px]  pc:h-[755px] object-contain w-full mx-auto xs:w-[722px]  bg-[#000000]"
                src={image.img}
                // fill
                width={1000}
                height={1000}
                alt={`${image.title}`}
              />
            </div>
          ))}
        </Slide>

        <div className="text-center text-[white] p-[10px] hello ">
          <h4 className="mb-[0.6rem]">{item.title}</h4>
          <h4 className="text-[13px] mb-[3rem] break-words">{item.desc}</h4>
        </div>
      </div>
    </div>
  );
}
const PortfolioCarousel = React.forwardRef(PortfolioCarouselMain);
export default PortfolioCarousel;
