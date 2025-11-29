import "./globals.css";
import { FaGithub, FaAddressBook, FaProjectDiagram} from "react-icons/fa";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <h1>Helloo! I'm Naman.</h1>
        <img
            src="/images/sunny1.png"
            alt="Mongrel"
            className="hero-image"
        />
        <p>
         I'm a soon-to-be engineer and father to your children.
        </p>
        <div className="buttons" style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>

          <a href="#projects">
            <button style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}><FaProjectDiagram size={20}/>Projects</button>
          </a>

          <a href="https://github.com/Naman-Adhikari" target="_blank" rel="noopener noreferrer">
            <button style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <FaGithub size={20} /> GitHub
            </button>
          </a>

          <a href="#contact">
            <button style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <FaAddressBook size={20}/> Contact Me
            </button>
          </a>

        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" style={{ padding: "4rem", textAlign: "center" }}>
        <h2 style={{ fontSize: "2rem", marginBottom: "2rem", color: "#b7e5eb" }}>
          Projects
        </h2>
        <div
          style={{
            display: "flex",
            gap: "2rem",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <div className="card" style={{ width: "250px" }}>Project 1</div>
          <div className="card" style={{ width: "250px" }}>Project 2</div>
          <div className="card" style={{ width: "250px" }}>Project 3</div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={{ padding: "4rem", textAlign: "center" }}>
        <h2 style={{ fontSize: "2rem", marginBottom: "2rem", color: "#b7e5eb" }}>
          Contact Me
        </h2>
        <p>Gmail: adhikarinaman00@gmail.com</p>
      </section>
    </>
  );
}
