
import React from "react";

const Hero = () => (
  <section className="relative w-full min-h-[96vh] flex flex-col items-center justify-center bg-transparent z-10 overflow-hidden" style={{paddingTop: "7rem"}}>
    {/* Purple blurred glow behind avatar */}
    <div
      className="absolute z-0 left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2"
      style={{
        width: 460,
        height: 460,
        background: "radial-gradient(circle, rgba(155,135,245,0.55) 0%, rgba(45,38,65,0.09) 77%, rgba(24,22,34,0) 100%)",
        filter: "blur(16px)",
        pointerEvents: "none",
      }}
      aria-hidden="true"
    ></div>
    {/* Optional: Bottom right glow for extra flair */}
    <div
      className="absolute z-0 right-0 bottom-0"
      style={{
        width: 390,
        height: 390,
        background: "radial-gradient(circle, rgba(155,135,245,0.35) 0%, rgba(24,22,34,0) 100%)",
        filter: "blur(24px)",
        pointerEvents: "none",
      }}
      aria-hidden="true"
    />
    {/* Content */}
    <div className="z-10 flex flex-col items-center text-center">
      <div className="mb-6">
        <div className="rounded-full border-4 border-[#9b87f5] p-2" style={{boxShadow:"0 0 0 8px rgba(155,135,245,0.11)"}}>
          <img
            src="/lovable-uploads/621a6f07-3525-4d72-b289-8ec0485805e8.png"
            alt="Profile"
            className="rounded-full w-48 h-48 object-cover"
          />
        </div>
      </div>
      <h1 className="font-heading text-5xl md:text-6xl font-bold mb-2 text-white">
        <span className="text-[#9b87f5]">John Kendric</span>
      </h1>
      <div className="text-2xl md:text-2xl text-white font-semibold mb-4">
        Web Developer &amp; UI Designer
      </div>
      <p className="text-gray-300 max-w-2xl mx-auto mb-8 text-base md:text-lg font-normal">
        I build exceptional and accessible digital experiences for the web.<br />
        Specialized in creating modern, responsive websites with clean code.
      </p>
      <div className="flex gap-4 justify-center">
        <a href="#projects" className="px-7 py-2 rounded-lg bg-[#9b87f5] text-white font-semibold text-base shadow-md hover:bg-[#977af1] transition">
          View My Work
        </a>
        <a href="#contact" className="px-7 py-2 rounded-lg border border-gray-200/30 text-white font-semibold text-base shadow-md hover:bg-[#181622] hover:border-[#9b87f5] transition">
          Contact Me
        </a>
      </div>
    </div>
  </section>
);

export default Hero;
