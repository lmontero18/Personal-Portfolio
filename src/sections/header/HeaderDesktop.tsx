"use client";
import React from "react";
import { motion } from "motion/react";

export const HeaderDesktop = () => {
  return <SimpleFloatingNav />;
};

const SimpleFloatingNav = () => {
  return (
    <nav className="z-50 fixed left-[50%] px-4 top-8 flex w-fit -translate-x-[50%] items-center gap-6 rounded-lg border-[1px] border-neutral-700 bg-neutral-900 p-2 text-sm text-neutral-500">
      <NavLink href="#">Home</NavLink>
      <NavLink href="#about">About</NavLink>
      <NavLink href="#projects">Projects</NavLink>
      <JoinButton />
    </nav>
  );
};

const NavLink = ({ href, children }: { href: string; children: string }) => {
  return (
    <a href={href} rel="nofollow" className="block overflow-hidden">
      <motion.div
        whileHover={{ y: -20 }}
        transition={{ ease: "backInOut", duration: 0.5 }}
        className="h-[20px]"
      >
        <span className="flex h-[20px] items-center">{children}</span>
        <span className="flex h-[20px] items-center text-neutral-50">
          {children}
        </span>
      </motion.div>
    </a>
  );
};

const JoinButton = () => {
  return (
    <button
      className={`relative z-0 flex items-center gap-2 overflow-hidden whitespace-nowrap rounded-lg border-[1px] 
        border-neutral-700 px-4 py-1.5 font-medium text-neutral-300 transition-all duration-300
        before:absolute before:inset-0 before:-z-10 before:translate-y-[200%] before:scale-[2.5]
        before:rounded-[100%] before:bg-neutral-50 before:transition-transform before:duration-1000
        before:content-[""] hover:scale-105 hover:border-neutral-50 hover:text-neutral-900
        hover:before:translate-y-[0%] active:scale-100`}
    >
      Download CV
    </button>
  );
};
