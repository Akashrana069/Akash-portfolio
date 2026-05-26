import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    year: "2025 — Present",
    title: "MERN Stack Developer",
    company: "Personal Projects",
    description:
      "Developed responsive full-stack web applications using React, Node.js, MongoDB and Tailwind CSS.",
    technologies: ["React", "Node.js", "MongoDB", "Tailwind"],
  },

  {
    year: "2025",
    title: "Industrial Trainee",
    company: "Novem Control",
    description:
      "Completed industrial training on Embedded Systems and worked on real-time hardware projects.",
    technologies: ["Embedded C", "Arduino", "IoT", "Sensors"],
  },

  {
    year: "2024",
    title: "Frontend Developer",
    company: "Freelance",
    description:
      "Created portfolio and business websites using React and Tailwind CSS.",
    technologies: ["React", "JavaScript", "Tailwind", "Vite"],
  },
];

export const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 px-4 relative bg-secondary/30"
    >
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Experience</span>
        </h2>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-primary/30 h-full"></div>

          {experiences.map((experience, index) => (
            <div
              key={index}
              className={`relative mb-12 flex ${
                index % 2 === 0
                  ? "justify-start"
                  : "justify-end"
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 bg-primary rounded-full border-4 border-background z-10"></div>

              {/* Card */}
              <div className="w-full md:w-[45%] glass p-6 rounded-2xl border border-primary/20 shadow-lg">
                <div className="flex items-center gap-2 text-primary mb-2">
                  <Calendar className="w-4 h-4" />
                  <span className="font-medium">
                    {experience.year}
                  </span>
                </div>

                <h3 className="text-2xl font-bold mb-2">
                  {experience.title}
                </h3>

                <div className="flex items-center gap-2 mb-4 text-primary">
                  <Briefcase className="w-4 h-4" />
                  <span>{experience.company}</span>
                </div>

                <p className="text-muted-foreground mb-4">
                  {experience.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map(
                    (tech, key) => (
                      <span
                        key={key}
                        className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary"
                      >
                        {tech}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};