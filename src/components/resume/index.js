import React, { useRef } from "react";
import useOnScreen from "../hooks/hooks";
import { FcCalendar } from "react-icons/fc";
function Resume() {
  // { isIntersecting, setIntersecting }
  const resumeref = useRef(null);
  useOnScreen(resumeref);
  //   console.log("intersectingresume", isvisible);
  const resumeDetails = [
    {
      title: "Software Engineer",
      date: "2024 — Present",
      type: "Lexanalytics",
      details:
        "Designed and implemented metadata extraction algorithms for parsing law reports, enabling accurate indexing, search, and analytics across legal documents. Maintained enterprise-grade authentication systems, supporting secure access for law firms, researchers, and institutional clients. Contributed significantly to legal research tools and services, improving data retrieval speed, relevance, and usability for legal professionals. Worked on contract drafting and automation tools, enabling structured document generation and reducing manual drafting effort. Collaborated with cross-functional teams to translate complex legal workflows into scalable software solutions.",

      tech: "Python, FastAPI/Django, PostgreSQL, React, TypeScript",
      position: "justify-center md:justify-start",
    },
    {
      title: "Full-Stack Engineer (Contract)",
      date: "2025 - 2026",
      type: "Nuvoro",
      details:
        "Reviewed, cleaned up, and refactored an existing AI-generated full-stack codebase, improving structure, stability, and maintainability. Fixed production bugs and UX/UI issues across bookings, subscriptions, and dashboards. Added Stripe features including card payment-method updates, subscription auto-renewal, and manual renewals with robust webhook handling. Improved authentication, subscription logic, and API contracts across backend and frontend. Redeployed and stabilized both backend and frontend services after cleanup and feature additions.",
      tech: "TypeScript, Node.js, Next.js, React, PostgreSQL, Stripe, Docker, RabbitMQ, Tailwind CSS",
      position: "justify-center md:justify-end",
    },
    {
      title: "Full-Stack Engineer (Contract)",
      date: "2025 - Present",
      type: "Dancedeal",
      details:
        "Reviewed and refactored an existing full-stack codebase, identifying and fixing critical bugs across backend APIs and frontend flows to improve stability, correctness, and maintainability. Took ownership of production deployment: provisioned AWS infrastructure, configured environments, deployed backend and frontend services, and set up DNS and domain configuration for live usage. Improved authentication and authorization logic by strengthening token handling, fixing edge-case auth bugs, and adding email validation to the signup and login flows. Enhanced backend reliability by improving error handling, input validation, and API contracts across core domains including users, courses, enrollments, and transactions. Reviewed and optimized integrations with payment providers (Flutterwave/Stripe), including webhook handling and transaction verification logic. Improved frontend logic and UX in the Next.js application by fixing auth flow issues (including a multi-step signup wizard), refining form validation, and stabilizing API consumption via fetch wrappers. Collaborated on end-to-end feature stabilization—from database logic and backend services to frontend behavior—prioritizing production readiness, security, and long-term maintainability.",
      tech: "TypeScript, Node.js, Next.js, React, PostgreSQL, Docker, AWS, Tailwind CSS, React Hook Form, Zod, Flutterwave, Stripe",
      position: "justify-center md:justify-start",
    },
    {
      title: "Full-Stack Engineer (Contract)",
      date: "2023 - 2025",
      type: "StalwartBlue",
      details:
        "Joined an existing codebase and refactored core backend and frontend logic to improve performance, stability, and maintainability. Rewrote the full loan lifecycle (application, approval, repayment) to reduce bugs and improve efficiency across business and admin workflows. Added real-time chat functionality and built a proper notification system (email and in-app) for users and administrators. Improved dashboard UX, table search, and overall frontend performance in the Next.js application. Strengthened backend APIs, auth, cron jobs, and notification services; shipped production fixes and performance optimizations.",
      tech: "TypeScript, Node.js, Next.js, React, Express, MongoDB, Docker, Cron Jobs, Tailwind CSS",
      position: "justify-center md:justify-end",
    },
    {
      title: "Backend Engineer",
      date: "June 2025 — July 2025",
      type: "BrainzCode",
      details:
        "Built Python-based backend services for AI-powered applications. Worked on voice cloning and voice synchronization systems. Implemented secure authentication mechanisms. Deployed and managed services on AWS and Google Cloud. Handled DevOps tasks including server provisioning and production deployments.",
      tech: "Python, FastAPI/Django, PostgreSQL, React, TypeScript, AWS, Linux, AI models, Docker, PostgreSQL",
      position: "justify-center md:justify-start",
    },
    {
      title: "Lead Frontend / Full-Stack Engineer (Contract)",
      date: "2023 - 2025",
      type: "Solid Fiction (Growthclub)",
      details:
        "Led frontend development for Growthclub from project setup (Next.js) through launch, translating Figma designs into a responsive, high-performance production UI. Worked closely with the backend engineer and UI/UX designer to define API contracts, auth flows, and end-to-end product behavior. Built core frontend features including authentication, dashboards, subscription and payment interfaces, and reusable component systems. Returned to the project post-launch to maintain and extend the product as a full-stack engineer, fixing bugs and improving reliability. Implemented and maintained backend features for payments, transactions, cron jobs, and webhooks to support ongoing operations.",
      tech: "JavaScript, TypeScript, Next.js, React, Node.js/Express, MongoDB, Tailwind CSS",
      position: "justify-center md:justify-end",
    },
  ];
  return (
    <section
      ref={resumeref}
      id="resume"
      className="h-auto text-white relative mt-[30px]"
    >
      <div className="">
        <h3 className="mt-[30px] text-[#f0f0f0] underAbout relative inline-block text-[20px] md:text-[24px] lg:text-[31px] font-semibold tracking-[.3px] leading-[normal] mb-[40px]">
          MY RESUME
        </h3>
        <div className="pt-[40px] relative ">
          <div className=" timeline h- [700px]">
            {resumeDetails.map((item, idx) => (
              <div
                key={item.title + idx}
                className={`dot before:top-[-30px] md:before:top-[10px] w-full ${item.position} flex relative`}
              >
                <div className="mb-[45px] md:mb-[35px] text-[#c7c5c7] bg-[#2c3c4f] w-full md:w-[47%] border-[#374757] border-[3px] shadow-[0px_4px_5px_rgba(37,50,66,.7)] m-[3px]">
                  <h2 className="text-center text-[#16c0f0] py-[15px] font-semibold tracking[.5px] text-base">
                    {item.title}
                  </h2>
                  <h3 className="text-center relative text-[13px] mx-[20px] mb-[15px] border-b-[#373757] border-b pb-[15px]">
                    <span>
                      <FcCalendar size={12} className="inline mb-[3px]" />{" "}
                      {item.date}
                    </span>{" "}
                    | <span>{item.type}</span>
                  </h3>
                  <p className="text-[14px] px-[20px] pb-[15px] leading-[1.8rem] font-normal font-open_Sans ">
                    {item.details}
                    <span className="mt-[10px] font-semibold text-[#16c0f0]">
                      Tech: {item.tech}
                    </span>
                  </p>
                </div>
              </div>
            ))}
            {/* <div className="dot relative justify-end flex w-full">
              <div className="mb-[35px]  w-[47%] ">
                <h2 className="text-center">Front End Developer</h2>
                <h3 className="text-center">
                  <FcCalendar size={15} /> <span>2020 - 2021</span> |{" "}
                  <span>Freelance</span>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusm tempor incididunt ut labore et dolore magna aliqua
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit
                  incididunt ut labore et.
                </p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;
