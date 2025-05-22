
import React from "react";

const Hero = () => (
  <section className="w-full section-padding relative min-h-[96vh] flex items-center justify-center bg-transparent pt-32 md:pt-44">
    <div className="w-full flex flex-col items-center text-center">
      <div className="mb-6">
        <img
          src="/lovable-uploads/314950da-8f78-499e-bcfb-512aca2fb97c.png"
          alt="Profile"
          className="rounded-full border-4 border-primary w-40 h-40 object-cover mx-auto shadow-lg"
        />
      </div>
      <h1 className="font-heading text-5xl md:text-6xl font-bold mb-4 text-white">
        <span className="highlight">John Kendric</span>
      </h1>
      <div className="text-xl text-gray-200 font-semibold mb-3">
        Web Developer &amp; UI Designer
      </div>
      <p className="text-gray-400 max-w-xl mx-auto mb-8">
        I build exceptional and accessible digital experiences for the web. Specialized in creating modern, responsive websites with a clean core.
      </p>
      <div className="flex gap-4 justify-center">
        <a href="#projects" className="btn-primary">View My Work</a>
        <a href="#contact" className="btn-secondary">Contact Me</a>
      </div>
    </div>
  </section>
);

export default Hero;
