import React from "react";

export default function App() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "40px", maxWidth: "900px", margin: "0 auto" }}>
      
      {/* Header */}
      <h1 style={{ fontSize: "36px", marginBottom: "10px" }}>
        Yvonne Sun
      </h1>
      <p style={{ fontSize: "18px", color: "#555" }}>
        M.S. ECE @ UCLA · Analog/RF IC · Physical Design · ML Hardware
      </p>

      {/* About */}
      <section style={{ marginTop: "40px" }}>
        <h2>About Me</h2>
        <p>
          I am a graduate student in Electrical and Computer Engineering at UCLA, 
          with interests in analog/RF IC design, physical design, and hardware acceleration.
        </p>
      </section>

      {/* Projects */}
      <section style={{ marginTop: "40px" }}>
        <h2>Projects</h2>

        <div style={{ marginTop: "20px" }}>
          <h3>Quantized MNIST CNN Accelerator</h3>
          <p>
            Designed a fixed-point CNN accelerator in Verilog, including RTL design, 
            synthesis, and place-and-route.
          </p>
        </div>

        <div style={{ marginTop: "20px" }}>
          <h3>Folded-Cascode Op Amp</h3>
          <p>
            Designed a fully differential folded-cascode operational amplifier with CMFB.
          </p>
        </div>

        <div style={{ marginTop: "20px" }}>
          <h3>24 GHz LC VCO</h3>
          <p>
            Designed and analyzed a high-frequency LC VCO including phase noise and tuning.
          </p>
        </div>
      </section>

      {/* Experience */}
      <section style={{ marginTop: "40px" }}>
        <h2>Experience</h2>

        <div style={{ marginTop: "20px" }}>
          <h3>Research Assistant · UCLA</h3>
          <p>High-speed mixed-signal IC design research.</p>
        </div>

        <div style={{ marginTop: "20px" }}>
          <h3>Intern · NXP</h3>
          <p>Semiconductor engineering internship experience.</p>
        </div>
      </section>

      {/* Contact */}
      <section style={{ marginTop: "40px" }}>
        <h2>Contact</h2>
        <p>Email: your.email@ucla.edu</p>
        <p>LinkedIn: linkedin.com/in/your-profile</p>
        <p>GitHub: github.com/your-github</p>
      </section>

    </div>
  );
}
