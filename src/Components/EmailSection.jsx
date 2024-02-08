"use client";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import GithubIcon from "../../public/github-icon.svg";
import LinkedinIcon from "../../public/linkedin-icon.svg";
import Navbar from "./Navbar";


const EmailSection = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_vbw78ud', 'template_9ba6age', form.current, 'J3oiEt2XM9JZ3C03R')
    .then((result) => {
        console.log(result.text);
        console.log("message sent");
    }, (error) => {
        console.log(error.text);
    });
};

return (
  <>
    <section className="contact-me grid md:grid-cols-2 mx-10 lg:mx-20 py-24 gap-4 relative h-screen">
      <div className="z-10">
        <h5 className="text-5xl lg:text-6xl font-anton py-2 lg:py-10 lg:text">Let&apos;s Connect</h5>
        <p className="font-poppins mb-4 max-w-md">
          {" "}
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
        </p>
        <div className="flex ">
          <a href="https://github.com/Packina?tab=repositories"><img src="../../public/github-icon.svg" className="w-20"></img></a>
          <a href="https://www.linkedin.com/in/kanjana-kannarest-4928101b0/"><img src="../../public/linkedin-icon.svg" className="w-20"></img></a>
        </div>
      </div>
      <div>
        <form ref={form} onSubmit={sendEmail} className="flex flex-col font-poppins">
            <div className="mb-6">
              <label htmlFor="email" className="block mb-2 text-sm font-medium">
                Your email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                className="bg-white border border-pink-500 placeholder-[#9CA2A9] text-black text-sm rounded-lg block w-full p-2.5"
                placeholder="packina@google.com"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="subject"
                className=" block text-sm mb-2 font-medium"
              >
                Subject
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                className="bg-white border border-pink-500 placeholder-[#9CA2A9] text-black text-sm rounded-lg block w-full p-2.5"
                placeholder="Just saying hi"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-sm mb-2 font-medium"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                className="font-poppinsbg-white border border-pink-500 placeholder-[#9CA2A9] text-black text-sm rounded-lg block w-full p-2.5"
                placeholder="Let's talk about..."
              />
            </div>
            <button
              type="submit"
              className="font-dela-gothic-one bg-pink-500 text-xs lg:text-lg text-white hover:bg-pink-300 py-3.5 px-5 rounded-lg w-full"
            >
              Send Message
            </button>
          </form>
      </div>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="35"
          height="32"
          viewBox="0 0 35 32"
          fill="none"
        >
          <ellipse cx="17.5" cy="16" rx="17.5" ry="16" fill="#BCDF64" />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="35"
          height="32"
          viewBox="0 0 35 32"
          fill="none"
          className='absolute top-10 right-2'
        >
          <ellipse cx="17.5" cy="16" rx="17.5" ry="16" fill="#BCDF64" />
        </svg>
      </div>
    </section>
    </>
  );
};

export default EmailSection;
