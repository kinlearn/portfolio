"use client"; // this is a client component
import React from "react";
import { Link } from "react-scroll/modules";

const HeroSection = () => {
  return (
    <section id="home">
      <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-14 sm:py-32 md:py-48 md:flex-row md:space-x-4 md:text-left">
        <div className="md:mt-4 md:w-3/5">
          <h1 className="text-4xl font-bold mt-6 md:mt-0 md:text-5xl">
            Hi, I&apos;m Ajinkya!
          </h1>
          <p className="text-lg mt-4 mb-6 md:text-2xl">
            I&apos;m a{" "}
            <span className="font-semibold text-teal-600">
              Front-end Engineer & Product Designer{" "}
            </span>
            based in Pune, India. Working towards crafting software that makes
            life easier and more meaningful.
          </p>
          <div className="flex items-center justify-center">
            <Link
              to="contact"
              className="text-neutral-100 font-semibold px-6 py-3 bg-teal-600 rounded shadow hover:bg-teal-700"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              Let&apos;s talk!
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
