import React from "react";

function Services() {
  return (
    <section className="px-[15px]">
      <div>
        <h3 className="mt-[30px] text-[#f0f0f0] underAbout relative inline-block text-[20px] md:text-[24px] lg:text-[31px] font-semibold tracking-[.3px] leading-[normal] mb-[40px]">
          MY SERVICES
        </h3>
        <div className="grid gap-[30px] grid-cols-2 lg:grid-cols-3 ">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div
              key={item}
              className="bg-[#2b3d4f] p-[40px_30px] rounded-b-[5px] border-b-[2px] border-b-[#0095ff] h-[200px] text-center"
            >
              <div className="w-[50px] h-[50px] mx-auto rounded-full border border-[green] "></div>
              <h3>FRONTEND DEVELOPMENT</h3>
              <p>Lorem ipso here i come yes </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
