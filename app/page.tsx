"use client";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <div className="page-container">
      <Hero />
      <Projects />
      <Contact />
    </div>
  );
}
