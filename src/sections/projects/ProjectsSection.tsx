"use client";

import { Project } from "./Project";
import { motion } from "framer-motion";

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

const projects = [
  {
    title: "Katalogue",
    imgSrc: "/project-imgs/katalogue-preview.png",
    code: "https://github.com/lmontero18/katalogue",
    projectLink: "https://katalogue.app",
    tech: ["Next.js", "TypeScript", "Tailwind", "NestJS", "Prisma"],
    description:
      "A modern platform to build & share curated product collections. Co-founded and led engineering.",
    modalContent: (
      <>
        <p>
          Katalogue is a platform I co-founded to empower creators and
          entrepreneurs in Costa Rica and LATAM to build beautifully structured,
          public-facing product collections. It's designed to be lightweight,
          fast, and visually engaging—perfect for showcasing favorite tools,
          curated items, or inspiration boards.
        </p>
        <p>
          I led the technical side: frontend architecture, backend API design,
          and database modeling. The stack includes Next.js, TailwindCSS,
          Prisma, and Framer Motion to deliver a polished and performant
          experience.
        </p>
        <p>
          Katalogue is currently available in Spanish only, as we're focused on
          supporting Spanish-speaking creators across Latin America.
        </p>
      </>
    ),
  },
];
