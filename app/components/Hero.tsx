"use client";

import { SiOnlyfans } from "react-icons/si";
import { FaGithub, FaSnowman, FaAddressBook, FaProjectDiagram } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="hero">
      <h1>Welcome! I'm Naman.</h1>

<div className="orbit-container">
  <div className="center-image">
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
  </div>

  {/* Buttons around the circle */}
<a
  className="orbit-btn"
  style={{ "--i": 0 } as React.CSSProperties}
  href="#projects"
>
  <FaProjectDiagram size={18} /> Projects
</a>

<a
  className="orbit-btn"
  style={{ "--i": 1 } as React.CSSProperties}
  href="https://github.com/Naman-Adhikari"
  target="_blank"
>
  <FaGithub size={18} /> GitHub
</a>

<a
  className="orbit-btn"
  style={{ "--i": 2 } as React.CSSProperties}
  href="#contact"
>
  <FaAddressBook size={18} /> Contact
</a>

<a
  className="orbit-btn"
  style={{ "--i": 3 } as React.CSSProperties}
  href="https://youtu.be/dQw4w9WgXcQ?si=7R9ayccva-HgctDP"
  target="_blank"
>
  <SiOnlyfans size={18} /> Only Friends
</a>

<a
  className="orbit-btn"
  style={{ "--i": 4 } as React.CSSProperties}
  href="#projects"
>
  <FaSnowman size={18} /> About me
</a>

<a
  className="orbit-btn"
  style={{ "--i": 5 } as React.CSSProperties}
  href="#projects"
>
  <FaProjectDiagram size={18} /> tobedone
</a>
</div>
    </section>
  );
}
