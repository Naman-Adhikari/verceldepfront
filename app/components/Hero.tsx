"use client";

import { SiOnlyfans } from "react-icons/si";
import { FaGithub, FaAddressBook, FaProjectDiagram } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="hero">
      <h1>Helloo! I'm Naman.</h1>

    <a
    href="https://www.webnovel.com/book/shadow-slave_22196546206090805"
    target="_blank"
    rel="noopener noreferrer"
    >
    <img
        src="/images/sunny1.jpg"
        alt="Mongrel"
        className="hero-image"
    />
    </a>

      <p><b>
        I'm a soon-to-be engineer and father to your children.
      </b></p>


    <div className="buttons">
    <a href="#projects">
        <button className="btn">
        <FaProjectDiagram size={20} /> <span>Projects</span>
        </button>
    </a>
    <a href="https://github.com/Naman-Adhikari" target="_blank" rel="noopener noreferrer">
        <button className="btn">
        <FaGithub size={20} /> <span>GitHub</span>
        </button>
    </a>
    <a href="#contact">
        <button className="btn">
        <FaAddressBook size={20} /> <span>Contact Me</span>
        </button>
    </a>
    <a href="https://youtu.be/dQw4w9WgXcQ?si=7R9ayccva-HgctDP" target="_blank" rel="noopener noreferrer">
        <button className="btn">
        <SiOnlyfans size={20} /> <span>Only Friends</span>
        </button>
    </a>
    </div>
    </section>
  );
}
