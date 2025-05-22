
import React from "react";
import { useForm } from "react-hook-form";

const Contact = () => {
  const { register, handleSubmit, reset } = useForm();

  function onSubmit(data: any) {
    // Feel free to replace with actual email integration
    alert("Thank you for your message!");
    reset();
  }

  return (
    <section id="contact" className="section-padding bg-[#191724]">
      <h3 className="section-title">
        Get In <span className="highlight">Touch</span>
      </h3>
      <div className="max-w-6xl mx-auto mt-12 grid md:grid-cols-2 gap-10">
        {/* Contact Info */}
        <div>
          <div className="mb-5 text-gray-300">
            I'm open to new opportunities or collaborations. If you have a project that needs my skills, please get in touch.
          </div>
          <div className="flex flex-col gap-4 text-gray-200">
            <div className="flex items-center gap-3">
              <svg width={20} height={20} className="text-primary" viewBox="0 0 24 24" fill="none"><path d="M4 4h16v16H4z" fill="none"/><path d="M22 6v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6" stroke="#9b87f5" strokeWidth="2" /><path d="m22 6-10 7L2 6" stroke="#9b87f5" strokeWidth="2" /></svg>
              <span>john@fakemail.com</span>
            </div>
            <div className="flex items-center gap-3">
              <svg width={20} height={20} className="text-primary" fill="none" viewBox="0 0 24 24"><path d="M4 4h16v16H4z" fill="none"/><path d="M22 6v2a16 16 0 01-16 16H6a16 16 0 01-16-16V6" stroke="#9b87f5" strokeWidth="2"/><path d="M2 6l10 7 10-7" stroke="#9b87f5" strokeWidth="2" /></svg>
              <span>+1 234-567-8900</span>
            </div>
            <div className="flex items-center gap-3">
              <svg width={20} height={20} className="text-primary" fill="none" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 6 7 13 7 13s7-7 7-13c0-3.87-3.13-7-7-7Z" stroke="#9b87f5" strokeWidth="2"/><circle cx="12" cy="9" r="2" fill="#9b87f5" /></svg>
              <span>San Francisco, CA</span>
            </div>
          </div>
          {/* Social links */}
          <div className="flex gap-5 mt-8">
            <a href="#" className="hover:text-primary transition" aria-label="LinkedIn">
              <svg width={22} height={22} fill="none" viewBox="0 0 24 24"><rect width="24" height="24" rx="4" fill="#9b87f5"/><path d="M16 8a6 6 0 0 1 6 6v6h-4v-6a2 2 0 0 0-4 0v6h-4v-6a6 6 0 0 1 6-6Z" fill="#fff" /><rect width="4" height="10" x="2" y="9" fill="#fff"/><circle cx="4" cy="4" r="2" fill="#fff"/></svg>
            </a>
            <a href="#" className="hover:text-primary transition" aria-label="Github">
              <svg width={22} height={22} fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#9b87f5"/><path d="M15.5 8a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-4A.5.5 0 0 1 8.5 8h7Zm-3.5 8a1.5 1.5 0 0 1-1.415-1H12a1.5 1.5 0 0 1 1.5 1.5v.5h-3v-.5A1.5 1.5 0 0 1 12 16Z" fill="#fff"/></svg>
            </a>
          </div>
        </div>
        {/* Contact Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="card-glass p-8 flex flex-col gap-6">
          <div className="grid md:grid-cols-2 gap-4">
            <input
              {...register("name", { required: true })}
              type="text"
              placeholder="Your Name"
              className="bg-[#15131f] text-white rounded-lg p-3 focus:ring-2 focus:ring-primary border-none outline-none"
              required
            />
            <input
              {...register("email", { required: true })}
              type="email"
              placeholder="Your Email"
              className="bg-[#15131f] text-white rounded-lg p-3 focus:ring-2 focus:ring-primary border-none outline-none"
              required
            />
          </div>
          <input
            {...register("subject")}
            type="text"
            placeholder="Subject"
            className="bg-[#15131f] text-white rounded-lg p-3 focus:ring-2 focus:ring-primary border-none outline-none"
          />
          <textarea
            {...register("message", { required: true })}
            placeholder="Your Message"
            className="bg-[#15131f] text-white rounded-lg p-3 focus:ring-2 focus:ring-primary border-none outline-none min-h-[110px]"
            required
          ></textarea>
          <button type="submit" className="btn-primary w-full">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
