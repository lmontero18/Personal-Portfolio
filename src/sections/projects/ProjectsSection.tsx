"use client";

import { Project } from "./Project";
import { motion } from "framer-motion";
import { projects } from "@/data/projects/projects";

export const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="px-6 md:px-12 py-20 text-neutral-100 scroll-mt-24"
    >
      <div className="max-w-6xl mx-auto flex flex-col gap-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-5xl font-bold text-white"
        >
          Projects<span className="text-neutral-400">.</span>
        </motion.h2>

        <div className="grid gap-16 grid-cols-1 md:grid-cols-2">
          {projects.map((project) => (
            <Project key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};
