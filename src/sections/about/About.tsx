"use client";

import { ScanHeart } from "@/components/icons/ScanHeart";
import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

export default function AboutSection() {
  return (
    <section id="about" className="text-neutral-100 px-6 py-20 md:px-12">
      <div className="max-w-6xl mx-auto flex flex-col gap-5">
        <motion.h2
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-5xl font-bold text-white"
        >
          About<span className="text-neutral-400">.</span>
        </motion.h2>

        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          transition={{ delay: 0.2, duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
        >
          <div className="flex flex-col gap-6 text-base text-neutral-400">
            <p>
              Hey! I’m a 21-year old developer who’s been building software for
              the past 3 years. I’ve worked on everything from sleek frontends
              to backend APIs and even some Web3 experiments along the way.
            </p>

            <p>
              I’m also a startup founder. My proudest project so far is{" "}
              <span className="text-white font-medium">Katalogue</span> a
              startup I co-founded and led as the tech lead. I was responsible
              for driving the engineering side, from architecture to
              implementation, always aiming for clean UI, thoughtful UX, and
              solid technical foundations.
            </p>

            <p>
              Whether I’m building a new product, leading frontend work, or just
              tinkering with a new tech stack, I’m always driven by curiosity
              and a genuine passion for creating things that matter.
            </p>
          </div>

          <div>
            <div className="flex items-center mb-3">
              <ScanHeart className="w-6 h-6 text-pink-500" />
              <h3 className="text-white text-sm font-semibold uppercase tracking-wide">
                Tech I Love
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {[
                "TypeScript",
                "Next.js",
                "Tailwind",
                "Node.js",
                "GraphQL",
                "React",
                "PostgreSQL",
                "Solidity",
                "MongoDB",
                "Framer Motion",
                "NestJS",
                "Prisma",
                "Java",
                "Spring",
                "ChatGPT",
              ].map((tech) => (
                <span
                  key={tech}
                  className="bg-neutral-800 text-neutral-300 px-3 py-1 rounded text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
