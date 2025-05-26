"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FiMenu, FiX } from "react-icons/fi";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
];

export const HeaderMobile = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 z-50 w-full bg-clip-padding backdrop-blur-md bg-neutral-800/60 border-b border-neutral-700 px-4 py-3 text-neutral-200 md:hidden shadow-md">
      <div className="flex items-center justify-end">
        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          className="text-2xl"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden mt-4 space-y-2"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setTimeout(() => setMenuOpen(false), 500)}
                className="block rounded-md px-3 py-2 text-sm text-neutral-100 hover:bg-white/10 transition"
              >
                {link.label}
              </a>
            ))}

            <button className="w-full rounded-lg border border-white/20 bg-white/5 px-4 py-2 text-sm font-medium text-neutral-100 transition-all hover:bg-white/10 hover:border-white/40">
              Download CV
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
