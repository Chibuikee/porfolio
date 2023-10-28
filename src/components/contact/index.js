import React from "react";
import Form from "../form";

function Contact() {
  const contactDetails = [
    {
      title: "Location",
      info: ["Apapa, Lagos, Nigeria.", "Yaba, Lagos, Nigeria."],
    },
    {
      title: "Email",
      info: ["sopewenike@yahoo.com", "sopewenike@gmail.com"],
    },
    {
      title: "Phone",
      info: ["+234 902125576", "09032125576"],
    },
  ];
  return (
    <section>
      <div>
        <h3 className="mt-[30px] text-[#f0f0f0] underAbout relative inline-block text-[20px] md:text-[24px] lg:text-[31px] font-semibold tracking-[.3px] leading-[normal] mb-[40px]">
          CONTACT ME
        </h3>
        <div className="md:flex gap-5 xl:justify-between">
          <div className="mb-[45px] basis-[30%] md:mb-[35px] text-[#c7c5c7] bg-[#2c3c4f] w-full md:w-[47%] border-[#374757] border-[3px] shadow-[0px_4px_5px_rgba(37,50,66,.7)] m-[3px]">
            {contactDetails.map((item) => (
              <React.Fragment key={item.title}>
                <h2 className="text-center text-[#16c0f0] py-[15px] font-semibold tracking[.5px] text-base">
                  {item.title}
                </h2>
                <h3 className="text-center relative text-[13px] mx-[20px] mb-[15px] border-b-[#373757] border-b pb-[15px]">
                  {item.info.map((info, key) => (
                    <span key={key} className="block mt-[5px]">
                      {info}
                    </span>
                  ))}
                </h3>
              </React.Fragment>
            ))}
          </div>
          <Form />
        </div>
      </div>
    </section>
  );
}

export default Contact;
