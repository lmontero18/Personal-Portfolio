"use client";
import Image from "next/image";
import { motion } from "motion/react";

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

      <div className="max-w-xl px-4 md:px-0 flex flex-col items-center text-center gap-4 mt-6">
        <h1 className="text-3xl md:text-4xl font-semibold text-neutral-100">
          Hello! I’m Luis Montero.
        </h1>
        <p className="text-base text-neutral-500 font-medium">
          Full Stack Developer based in Costa Rica.
        </p>
      </div>
    </section>
  );
}
