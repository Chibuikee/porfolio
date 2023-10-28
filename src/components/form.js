"use client";
import { useFormik } from "formik";
import React, { useState } from "react";
import { toast } from "react-toastify";
import * as Yup from "yup";

const Form = () => {
  const formfields = [
    { name: "name", placeholder: "Your name*" },
    { name: "email", placeholder: "Your email*" },
    { name: "subject", placeholder: "Your subject*" },
    { name: "message", placeholder: "Your message..." },
  ];
  const InitiaState = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };

  const formik = useFormik({
    initialValues: InitiaState,
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      email: Yup.string().email().required("Required"),
      // /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i
      subject: Yup.string().required("Required").min(6),
      message: Yup.string().required("Required").min(8),
    }),

    onSubmit: handleSubmit,
  });
  // const [userInfo, setUserInfo] = useState();
  async function handleSubmit(values, { resetForm }) {
    // console.log("Attempting to send message");

    try {
      // setUserInfo(values);
      // console.log(values);
      const url = "https://techdiaserver.onrender.com/api/send-enquiries"; // Replace with your API endpoint

      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Set the content type to JSON
        },
        body: JSON.stringify(values), // Convert the data to JSON format
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json(); // Parse the response as JSON
        })
        .then((responseData) => {
          toast.success("Sent Successfully!");
          console.log("POST request successful:", responseData);
        })
        .catch((error) => {
          console.error("POST request error:", error);
        });

      resetForm();
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <section id="Contact" className="py-20">
        <div className="mt-4 px-4 mx-auto sm:max-w-[600px] md:max-w-[760px] lg:max-w-[1010px] xl:max-w-[1280px]">
          <div>
            <h1 className="text-center font-medium tracking-wide text-[1.75rem] pb-4">
              GET IN TOUCH
            </h1>
            <div className="w-12 h-[0.125rem] mt-3 mx-auto bg-[#fb3e3e]"></div>
            <p className="pt-4 text-[#95a0ab] text-sm mb-4 text-center">
              We thrive when coming up with innovative ideas but also understand
              that a smart concept should be supported with measurable results.
            </p>
          </div>
          <div className="lg:flex justify-between">
            <div className="mt-4 pt-4 basis-1/3">
              <p className="mt-4">
                <span className="text-[#212529]">Head Office Address</span>
                <br />
                <span className=" text-[#95a0ab] mt-2">
                  119 Awolowo Way, (Suite B49 & 50 De Plaza Ville) Ikeja, Lagos
                </span>
              </p>
              <p className="mt-4">
                <span className="text-[#212529]">Branch Office</span>
                <br />
                <span className="text-[#95a0ab] mt-2">
                  33A, Abakaliki Road, Suite 39,
                  <br />
                  Grand Mall GRA, Enugu.
                </span>
              </p>
              <p className="mt-4">
                <span className="text-[#212529]">Working Hours:</span>
                <br />
                <span className="text-[#95a0ab] mt-2">9:00AM To 6:00PM</span>
              </p>
            </div>

            <div className="basis-2/3 px-3 pt-5">
              {/* <pre> {JSON.stringify(userInfo, undefined, 2)} </pre> */}
              <form className="space-y-4" onSubmit={formik.handleSubmit}>
                <div className="md:flex flex-wrap space-y-4 md:space-y-0 md:gap-[2%] w-full">
                  {formfields.map((item) => (
                    <div
                      key={item.name}
                      className={
                        item.name === "message" || item.name === "subject"
                          ? "md:basis-[100%]"
                          : "basis-[49%]"
                      }
                    >
                      {/* <label className="reg-label-name">NAME</label> */}
                      {item.name == "message" ? (
                        <textarea
                          className="appearance-none mt-4 block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                          name={item.name}
                          onChange={(e) => {
                            console.log("current value", e.target.value);
                            const { value, name } = e.target;
                            formik.setValues((prev) => ({
                              ...prev,
                              [name]: value,
                            }));
                          }}
                          placeholder={item.placeholder}
                        ></textarea>
                      ) : (
                        <input
                          name={item.name}
                          className="appearance-none mt-4 w-full block bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                          placeholder={item.placeholder}
                          value={formik.values[item.name]}
                          onChange={(e) => {
                            console.log("current value", e.target.value);
                            const { value, name } = e.target;
                            formik.setValues((prev) => ({
                              ...prev,
                              [name]: value,
                            }));
                          }}
                        ></input>
                      )}
                      {formik.errors[item.name] && (
                        <p className="text-red-500 text-xs italic">
                          Please complete field
                        </p>
                      )}
                    </div>
                  ))}
                </div>
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="bg-[#fb3e3e] text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Form;
