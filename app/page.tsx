"use client";
import MusicPlayer from "./components/Music";
import Hero from "./components/Hero";
import AboutMe from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <div className="page-container">
      <MusicPlayer />
      <Hero />
      <AboutMe />
      <Projects />
      <Contact />
    </div>
  );
}
