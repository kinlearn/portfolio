import React from "react";
import { Link } from "react-scroll/modules";

const ContactSection = () => {
  return (
    <section id="contact" className="py-14 sm:py-32 md:py-48">
      <div className="flex flex-col items-center justify-center animate-fadeIn animation-delay-2 text-center md:flex-row md:space-x-4 md:text-left">
        <div className="md:w-3/5">
          <p className="text-lg mt-4 mb-6 md:text-2xl">
            Feel free to connect!
          </p>
          <a href="mailto:hello@kinhikar.com" className="block hover:text-teal-700">
            <h1 className="text-4xl font-bold mt-6 md:mt-0 md:text-5xl">hello@kinhikar.com</h1>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
