import AboutSection from "@/sections/about/About";
import { HeaderWrapper } from "@/sections/header/HeaderWrapper";
import Hero from "@/sections/hero/Hero";

export default function Home() {
  return (
    <main className="relative flex flex-col min-h-screen w-full bg-neutral-950 text-neutral-100">
      <HeaderWrapper />
      <Hero />
      <AboutSection />
    </main>
  );
}
