"use client";
import { useFormik } from "formik";
import React, { useState } from "react";
import { toast } from "react-toastify";
import * as Yup from "yup";
import SmallLoadingSpinner from "./smLoadingSpinner";

const Form = () => {
  const [loading, setloading] = useState(false);
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
      console.log("This is for sending it");
      setloading(true);
      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Set the content type to JSON
        },
        body: JSON.stringify(values), // Convert the data to JSON format
      })
        .then((response) => {
          if (!response.ok) {
            setloading(false);
            throw new Error("Network response was not ok");
          }
          return response.json(); // Parse the response as JSON
        })
        .then((responseData) => {
          toast.success("Sent Successfully!");
          setloading(false);
          resetForm();
          console.log("POST request successful:", responseData);
        })
        .catch((error) => {
          setloading(false);
          console.error("POST request error:", error);
        });

      // resetForm();
    } catch (error) {
      console.log(error);
    }
  }

  console.log(formik.touched);
  return (
    <section id="contactme" className="basis-[65%] md:w-full py-20 md:py-0">
      <div className="mb-[45px] p-[20px] md:mb-[35px] text-[#c7c5c7] bg-[#2c3c4f] w-full border-[#374757] border-[3px] shadow-[0px_4px_5px_rgba(37,50,66,.7)] m-[3px]">
        <div>
          <h1 className="text-center font-medium tracking-wide text-[1.75rem] pb-4">
            GET IN TOUCH
          </h1>
          <div className="w-12 h-[0.125rem] mt-3 mx-auto bg-[#fb3e3e]"></div>
          <p className="pt-4 text-[#c7c5c7] text-sm mb-4 text-center">
            I thrive when coming up with innovative ideas but also understand
            that a smart concept should be supported with measurable results.
          </p>
        </div>
        <div className="lg:flex justify-between">
          <div className=" px-3 pt-5">
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
                        value={formik.values[item.name]}
                        onBlur={() => {
                          formik.setTouched({
                            ...formik.touched,
                            [item.name]: true,
                          });
                          // console.log("clicked", item.name);
                        }}
                        onChange={(e) => {
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
                        onBlur={() => {
                          formik.setTouched({
                            ...formik.touched,
                            [item.name]: true,
                          });
                          // console.log("clicked", item.name);
                        }}
                        onChange={(e) => {
                          const { value, name } = e.target;
                          formik.setValues((prev) => ({
                            ...prev,
                            [name]: value,
                          }));
                        }}
                      ></input>
                    )}
                    {formik.touched[item.name] && formik.errors[item.name] && (
                      <p className="text-red-500 text-xs italic">
                        {formik.errors[item.name]}
                      </p>
                    )}
                  </div>
                ))}
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={formik.isValid ? false : true}
                  className={`${
                    formik.isValid
                      ? "bg-[#fb3e3e]"
                      : "bg-[rgba(222,222,222,0.35)] cursor-not-allowed"
                  }  text-white w-[135px] h-[40px] py-2 px-4 rounded relative z-0 focus:outline-none focus:shadow-outline`}
                >
                  {loading ? <SmallLoadingSpinner /> : "Send Message"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Form;
