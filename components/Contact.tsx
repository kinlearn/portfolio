"use client"; // this is a client component
import React from "react";
import { Link } from "react-scroll/modules";

const ContactSection = () => {
  return (
    <section id="contact">
      <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-14 sm:py-32 md:py-48 md:flex-row md:space-x-4 md:text-left">
        <div className="md:mt-4 md:w-3/5">
          <p className="text-lg mt-4 mb-6 md:text-2xl text-center">
            Feel free to connect!
          </p>
          <a href="mailto:hello@kinhikar.com">
            <h1 className="text-4xl font-bold mt-6 md:mt-0 text-center md:text-5xl hover:text-teal-700">
              hello@kinhikar.com
            </h1>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
