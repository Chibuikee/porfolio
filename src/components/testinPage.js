import React from "react";
import { RWData } from "./Portfolio/PortfolioData";
import Image from "next/image";

function TestinPage() {
  return (
    <div>
      <div className="grid grid-cols-2 grid-flow-row flex- wrap">
        {RWData.map((item, index) => (
          <div
            key={item.title + index}
            // style={{ position: "relative", zIndex: "1" }}
            className="Work- card h-fit basis-1/2 w- [50%]  relative z-[1] overflow-hidden"
          >
            <Image
              className="recent- img z-[70] object- cover"
              //   style={{ height: "100%", width: "100%" }}
              height="500"
              width="700"
              //   fill
              src={item.img}
              alt="recent work"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default TestinPage;
