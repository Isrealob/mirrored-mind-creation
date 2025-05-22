
import React, { useState } from "react";
interface Project {
  title: string;
  subtitle: string;
  img: string;
  tags: string[];
  category: string;
}
const projects: Project[] = [
  {
    title: "E-Commerce Dashboard",
    subtitle: "A fully featured dashboard for e-commerce stores with analytics, dashboards, inventory, and orders.",
    img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80",
    tags: ["React", "Dashboard", "Tailwind CSS"],
    category: "Web App",
  },
  {
    title: "Portfolio Website",
    subtitle: "A modern portfolio website built with React and styled with the latest front-end tools.",
    img: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=400&q=80",
    tags: ["React", "Portfolio", "Theme colors"],
    category: "Web App",
  },
  {
    title: "Task Management App",
    subtitle: "A task manager app with design and back-end functionality, charts, and live collaboration.",
    img: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=400&q=80",
    tags: ["React", "Product", "Date & Components"],
    category: "Web App",
  },
  {
    title: "Fitness App Design",
    subtitle: "A vibrant fitness tracker design for mobile and web, featuring easy progress tracking and comparisons.",
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80",
    tags: ["UI/UX", "Products", "Mobile View"],
    category: "UI/UX",
  },
  {
    title: "Weather App",
    subtitle: "A mobile weather info display app with live weather and weather forecast module.",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=400&q=80",
    tags: ["Web App", "Weather", "Tailwind CSS"],
    category: "Web App",
  },
  {
    title: "Restaurant Website",
    subtitle: "A responsive restaurant website with online menu, reservation, and contact information.",
    img: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?auto=format&fit=crop&w=400&q=80",
    tags: ["UI/UX", "CMS", "Web App"],
    category: "UI/UX",
  },
];

const categories = ["All", "Web App", "UI/UX"];

const Projects = () => {
  const [active, setActive] = useState("All");
  const showProjects =
    active === "All"
      ? projects
      : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="section-padding section-dark">
      <h3 className="section-title">
        My <span className="highlight">Projects</span>
      </h3>
      <div className="flex justify-center mt-6 mb-10 gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`px-5 py-2 rounded-lg font-semibold ${
              active === cat
                ? "bg-primary text-white shadow"
                : "bg-transparent border border-primary/30 text-primary hover:bg-primary/10"
            } transition`}
            onClick={() => setActive(cat)}
          >
            {cat}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {showProjects.map((proj) => (
          <div key={proj.title} className="card-glass overflow-hidden">
            <img
              src={proj.img}
              alt={proj.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <div className="uppercase text-xs text-primary font-semibold mb-1">
                {proj.category}
              </div>
              <h4 className="font-heading text-lg text-white font-bold mb-1">
                {proj.title}
              </h4>
              <p className="text-gray-300 text-sm mb-3">{proj.subtitle}</p>
              <div className="flex gap-2 flex-wrap">
                {proj.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-primary/20 text-primary font-semibold px-2 py-1 rounded text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
