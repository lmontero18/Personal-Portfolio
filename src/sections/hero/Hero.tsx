"use client";
import Image from "next/image";
import { motion } from "motion/react";
import {
  InstagramIcon,
  LinkedInIcon,
  GithubIcon,
  ArrowDown,
} from "@/components/icons";

const iconContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.6,
    },
  },
};

const iconItem = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-start px-6 py-16">
      {/* Avatar flotante alineado a la izquierda en mobile */}
      <motion.div
        className="self-start md:self-center"
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

      {/* Texto alineado a la izquierda en mobile */}
      <div className="flex flex-col items-start md:items-center text-left md:text-center gap-4 mt-6 w-full">
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

      {/* Íconos animados alineados a la izquierda en mobile */}
      <motion.div
        className="mt-8 flex flex-row items-start md:items-center justify-start md:justify-center gap-x-4 w-full"
        variants={iconContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.a
          href="https://www.instagram.com/l_monterom"
          target="_blank"
          rel="noopener noreferrer"
          className="group"
          variants={iconItem}
        >
          <InstagramIcon />
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/in/luismontero18"
          target="_blank"
          rel="noopener noreferrer"
          className="group"
          variants={iconItem}
        >
          <LinkedInIcon />
        </motion.a>
        <motion.a
          href="https://github.com/lmontero18"
          target="_blank"
          rel="noopener noreferrer"
          className="group"
          variants={iconItem}
        >
          <GithubIcon />
        </motion.a>
      </motion.div>

      {/* Flecha animada centrada */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6, ease: "easeOut" }}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
      >
        <ArrowDown />
      </motion.div>
    </section>
  );
}
