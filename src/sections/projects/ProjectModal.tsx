"use client";

import { motion, AnimatePresence } from "framer-motion";
import { JSX } from "react";

interface ModalProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  modalContent: JSX.Element;
  imgSrc: string;
  title: string;
  tech: string[];
  code: string;
  projectLink: string;
}

export const ProjectModal = ({
  isOpen,
  setIsOpen,
  modalContent,
  imgSrc,
  title,
  tech,
}: ModalProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/80 overflow-y-auto flex items-start justify-center p-4"
        >
          <div className="bg-neutral-900 w-full max-w-2xl p-6 rounded-lg text-neutral-100 mt-10 mb-20 shadow-lg relative">
            <button
              className="absolute top-4 right-4 text-neutral-400 hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              ✕
            </button>
            <h2 className="text-xl font-bold mb-2">{title}</h2>
            <div className="text-sm text-neutral-400 mb-4">
              {tech.join(" • ")}
            </div>
            <img
              src={imgSrc}
              alt={title}
              className="w-full rounded mb-4 border border-neutral-700"
            />
            <div className="space-y-3">{modalContent}</div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
