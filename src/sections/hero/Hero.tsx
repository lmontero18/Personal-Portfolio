"use client";
import Image from "next/image";
import { motion } from "motion/react";
import { InstagramIcon, LinkedInIcon, GithubIcon } from "@/components/icons";
export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-start px-6 py-16">
      {/* Imagen flotante */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <Image
            src="/ProfileImage.png"
            alt="Profile Image"
            width={80}
            height={80}
            className="rounded-full shadow-lg"
          />
        </motion.div>
      </motion.div>

      {/* Texto */}
      <div className="flex flex-col items-center text-center gap-4 mt-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-3xl md:text-4xl font-semibold text-neutral-100"
        >
          Hello! I’m Luis Montero.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-base text-neutral-500 font-medium"
        >
          Full Stack Developer based in Costa Rica.
        </motion.p>
      </div>

      <div className="mt-8 flex flex-row items-center justify-center gap-x-4">
        <a
          href="https://www.instagram.com/l_monterom"
          target="_blank"
          rel="noopener noreferrer"
          className="group"
        >
          <InstagramIcon />
        </a>
        <a
          href="https://www.linkedin.com/in/luis-montero"
          target="_blank"
          rel="noopener noreferrer"
          className="group"
        >
          <LinkedInIcon />
        </a>
        <a
          href="https://github.com/lmontero18"
          target="_blank"
          rel="noopener noreferrer"
          className="group"
        >
          <GithubIcon />
        </a>
      </div>
    </section>
  );
}
