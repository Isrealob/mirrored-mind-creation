
import React from "react";

// Skill card
const skills = [
  {
    category: "Frontend Development",
    items: [
      { name: "HTML/CSS", percent: 92 },
      { name: "JavaScript", percent: 90 },
      { name: "React", percent: 85 },
      { name: "TypeScript", percent: 82 },
      { name: "Next.js", percent: 75 },
    ],
  },
  {
    category: "UI/UX Design",
    items: [
      { name: "Figma", percent: 88 },
      { name: "Responsive Design", percent: 94 },
      { name: "Tailwind CSS", percent: 90 },
      { name: "UI Animation", percent: 73 },
    ],
  },
  {
    category: "Backend & Tools",
    items: [
      { name: "Node.js", percent: 80 },
      { name: "Git/GitHub", percent: 95 },
      { name: "RESTful APIs", percent: 83 },
      { name: "Firebase", percent: 78 },
    ],
  },
];

const Skills = () => (
  <section id="skills" className="section-padding bg-[#191724]">
    <h3 className="section-title">
      My <span className="highlight">Skills</span>
    </h3>
    <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-3 mt-12">
      {skills.map((block) => (
        <div key={block.category} className="card-glass p-6">
          <h4 className="font-heading font-bold text-xl mb-4 text-white">
            {block.category}
          </h4>
          <div className="space-y-5">
            {block.items.map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between">
                  <span className="text-gray-200 font-medium">{skill.name}</span>
                  <span className="text-gray-400 font-semibold">{skill.percent}%</span>
                </div>
                <div className="skill-bar-bg">
                  <div
                    className="skill-bar-fill"
                    style={{ width: `${skill.percent}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;
