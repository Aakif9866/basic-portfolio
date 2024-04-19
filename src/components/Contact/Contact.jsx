import React, { useRef } from "react";

import emailjs from "@emailjs/browser";
import Reveal from "../Reveal/Reveal";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    let flag = 0;

    const list = document.querySelectorAll(".inputField");
    list.forEach((item) => {
      if (item.value === "") flag = 0;
      else flag = 1;
    });
    if (flag === 1) {
      emailjs
        .sendForm(
          "service_3ze6mii",
          "template_7nzpuuj",
          form.current,
          "e6nJ1Y2T1E0i10m9O"
        )
        .then(
          (result) => {
            console.log(result.text);
            e.target.reset();
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };

  return (
    <Reveal>
      <div id="contact" className="contact">
        <div className="textContContact flex flex-col items-center justify-center text-center pt-40 pb-16">
          <h1 className="text-[3.8rem]">Contact Me</h1>
          <p className="md:w-[50%] text-[1.1rem] mx-auto px-10">
            Please fill out the form below to discuss any work opportunities
          </p>
        </div>
        <form
          ref={form}
          className="contactForm md:w-[50vw] mx-auto flex flex-col items-center pb-16 px-8"
          onSubmit={sendEmail}
        >
          <input
            type="text"
            name="from_name"
            id=""
            className="inputField"
            placeholder="Your Name"
          />
          <input
            type="email"
            name="from_email"
            id=""
            className="inputField"
            placeholder="Your Email"
          />
          <textarea
            cols="30"
            rows="10"
            className="inputField"
            placeholder="Your message"
            name="message"
          ></textarea>
          <button
            className="submitBtn bg-white text-black py-4 px-16 rounded-xl cursor-pointer font-semibold hover:bg-contactHover "
            value="Send"
          >
            Submit
          </button>
        </form>
      </div>
    </Reveal>
  );
};

export default Contact;
