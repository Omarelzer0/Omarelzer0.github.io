"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Kemet Project",
    description: "Kemet is a web and mobile app that translates Arabic text into Hieroglyphics using modern technologies like Flask, React, and Flutter.",
    image: "/images/projects/1.png",
    tag: ["All", "Flask"],
    gitUrl: "https://github.com/Muztafa74/kemet",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "FIFA Players Data Analysis",
    description: "This project evaluates player performance using data analysis and visualizations to highlight strengths and weaknesses.",
    image: "/images/projects/2.png",
    tag: ["All", "Data Visualization"],
    gitUrl: "https://github.com/Muztafa74/FIFA-Data-Analysis-Project",
    previewUrl: "https://github.com/Muztafa74/FIFA-Data-Analysis-Project",
  },
  {
    id: 3,
    title: "SpaceX Falcon 9 Landing Prediction",
    description: "This project predicts rocket landing success using data analysis and machine learning.",
    image: "/images/projects/3.png",
    tag: ["All", "Data Visualization"],
    gitUrl: "https://github.com/Muztafa74/spaceX",
    previewUrl: "https://github.com/Muztafa74/spaceX",
  },
  {
    id: 4,
    title: "Interactive Sales Report Dashboard",
    description: "This project visualizes key performance indicators (KPIs) to provide an overview of sales data. The dashboard enables easy tracking and analysis of sales performance, customer behavior, and product demand.",
    image: "/images/projects/4.png",
    tag: ["All", "Power Bi"],
    gitUrl: "https://github.com/Muztafa74/Interactive-Sales-Report-Dashboard",
    previewUrl: "https://github.com/Muztafa74/Interactive-Sales-Report-Dashboard",
  },

];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-col sm:flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Data Visualization"
          isSelected={tag === "Data Visualization"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Flask"
          isSelected={tag === "Flask"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Power Bi"
          isSelected={tag === "Power Bi"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
