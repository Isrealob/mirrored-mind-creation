
import React from "react";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => (
  <nav className="nav-glass w-full fixed z-50 top-0 left-0 backdrop-blur-lg">
    <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
      <span className="text-lg font-heading text-white font-bold">
        <span className="text-primary">Dev.</span>Portfolio
      </span>
      <div className="space-x-8 hidden md:flex">
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="text-gray-100 hover:text-primary font-medium transition"
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>
  </nav>
);

export default Navbar;
