"use client";
import { motion } from "framer-motion";

export default function AboutMe() {
  return (
    <section style={{ padding: "4rem 1rem" }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{ width: "100%", maxWidth: "900px" }}
      >
        <div className="card">
          <motion.h1
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            style={{ fontSize: "3rem", marginBottom: "1.5rem" }}
          >
            About Me
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            style={{ fontSize: "1.2rem", marginBottom: "1.5rem" }}
          >
            Hey! I'm <strong>Naman</strong>, a 21-year-old Electronics and Communication Engineering student at
            <strong> Pulchowk Campus</strong>.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            style={{ fontSize: "1.2rem", marginBottom: "2rem" }}
          >
            I love playing games, watching movies, making art, and playing guitar.
            I also like exploring new creative and technical hobbies — more coming soon!
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
              gap: "1rem",
              marginTop: "1rem",
            }}
          >
            <div className="card" style={{ padding: "1rem", textAlign: "center" }}>Gaming</div>
            <div className="card" style={{ padding: "1rem", textAlign: "center" }}>Movies</div>
            <div className="card" style={{ padding: "1rem", textAlign: "center" }}>Art</div>
            <div className="card" style={{ padding: "1rem", textAlign: "center" }}>Guitar</div>
            <div className="card" style={{ padding: "1rem", textAlign: "center" }}>More Soon...</div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
