
import React from "react";

const info = [
  { label: "Name", value: "John Kendric" },
  { label: "Location", value: "San Francisco, CA" },
  { label: "Email", value: "john@fakemail.com" },
  { label: "Availability", value: "Freelance/Full-time" },
];

const About = () => (
  <section id="about" className="section-padding section-dark flex flex-col items-center">
    <div className="w-full max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">
      {/* Large Profile Image */}
      <div className="min-w-[230px] flex-shrink-0 mb-8 md:mb-0">
        <img
          src="/lovable-uploads/314950da-8f78-499e-bcfb-512aca2fb97c.png"
          alt="About Profile"
          className="rounded-full border-4 border-primary w-56 h-56 object-cover shadow-xl"
        />
      </div>
      {/* Text/Bio + Info Grid */}
      <div className="w-full">
        <h3 className="text-2xl text-white font-heading font-bold mb-2">
          <span className="highlight">About</span> Me
        </h3>
        <p className="text-lg text-gray-300 font-medium mb-4">
          Web Developer &amp; UI Designer
        </p>
        <p className="text-gray-400 mb-4">
          I'm a passionate web educator with 7+ years of experience creating beautiful, functional, and accessible digital experiences. I am deeply in love with modern web technologies and improving my skills.
          <br/><br/>
          With a strong art mindset in front-end development and a keen eye for design, I create pixel-perfect interfaces and build seamless, exceptional user experiences. I'm dedicated to writing clean, optimized code and using modern, best-in-class practices.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          {info.map((row) => (
            <div
              key={row.label}
              className="bg-card-glass rounded-lg px-4 py-2 flex flex-col border border-primary/10"
            >
              <span className="text-xs text-gray-400">{row.label}</span>
              <span className="text-white font-medium">{row.value}</span>
            </div>
          ))}
        </div>
        <a href="#contact" className="btn-primary w-fit mt-2">Let's talk</a>
      </div>
    </div>
  </section>
);

export default About;
