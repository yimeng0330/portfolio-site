import React from "react";

const profile = {
  name: "Yvonne Sun",
  subtitle: "M.S. ECE @ UCLA 27‘",
  focus: "Physical Design · Digital IC Design · Device Modeling",
  location: "Los Angeles, CA",
  email: "yimeng0330@ucla.edu",
  phone: "+1 3109488751",
  github: "github.com/your-github",
  summary:
    "I am a graduate student in Electrical and Computer Engineering at UCLA with hands-on experience across RTL-to-GDS physical design, RTL implementation, semiconductor device modeling and analog/RF IC design. My work connects digital implementation, circuit-level design, and device-level understanding to enable efficient and robust integrated circuit systems.",
};

const projects = [
  {
    title: "Tape-Out of Quantized MNIST CNN Accelerator",
    type: "Digital IC · RTL-to-GDS · TSMC 180nm",
    period: "Mar. 2026 – Jun. 2026",
    weight: "★★★★☆",
    weightLabel: "Flagship Project",
    tags: ["Verilog", "TSMC 180nm", "SDC", "STA", "Innovus", "CTS", "PnR"],
    metrics:
      "20 MHz · 279,723 μm² · 68.8% utilization · clean timing · 5528-cycle latency",
    description:
      "Designed and implemented a fixed-point two-layer CNN accelerator in Verilog and completed full RTL-to-GDS flow. Planned post-silicon testing (Oct.–Dec. 2026) uses an FPGA-based platform to stream quantized image data into the chip and verify predicted labels against Python/RTL golden results.",
  },
  {
    title: "Traffic Light Controller ASIC Implementation",
    type: "FSM Control Logic · RTL-to-GDS · SMIC 180nm",
    period: "Sep. 2024 – Dec. 2024",
    weight: "★★★☆☆",
    weightLabel: "Backend Debug Project",
    tags: ["Verilog", "FSM", "SMIC 180nm", "SDC", "Innovus", "Floorplan", "CTS"],
    metrics:
      "100 MHz · positive slack · utilization 88% → 47% · clean DRC/LVS",
    description:
      "Implemented an FSM-based traffic controller and completed full backend flow. Optimized floorplan, WellTap insertion, and pin placement to reduce congestion and improve routability.",
  },
  {
    title: "ASIC ALU RTL-to-Synthesis Implementation (Course Lab)",
    type: "Course Lab · Backend Practice · RTL · Synthesis · STA",
    period: "Sep. 2024 – Dec. 2024",
    weight: "★★☆☆☆",
    weightLabel: "Foundation Lab",
    tags: ["Verilog", "Design Compiler", "STA", "Formal Verification"],
    metrics:
      "positive timing slack · RTL–gate equivalence verified",
    description:
      "Completed ALU design including RTL implementation, synthesis, STA, and formal verification, building foundational backend understanding.",
  },
];

function Tag({ children }) {
  return <span className="tag">{children}</span>;
}

export default function App() {
  return (
    <>
      <style>{`
        body {
          margin: 0;
          font-family: Inter, sans-serif;
          background: #f7f9fc;
          color: #1a1a1a;
        }

        .container {
          max-width: 1000px;
          margin: auto;
          padding: 40px 20px;
        }

        h1 {
          font-size: 48px;
          margin-bottom: 10px;
        }

        .subtitle {
          font-size: 20px;
          color: #555;
        }

        .focus {
          margin-top: 5px;
          color: #888;
        }

        .summary {
          margin-top: 20px;
          line-height: 1.6;
        }

        .project {
          background: white;
          padding: 20px;
          border-radius: 12px;
          margin-top: 20px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.05);
        }

        .project-top {
          display: flex;
          justify-content: space-between;
        }

        .type {
          color: #3b6ef5;
          font-weight: bold;
        }

        .metrics {
          margin-top: 10px;
          font-weight: bold;
          color: #2b4dbd;
        }

        .tags {
          margin-top: 10px;
        }

        .tag {
          display: inline-block;
          margin-right: 6px;
          padding: 4px 8px;
          background: #eef2ff;
          border-radius: 6px;
          font-size: 12px;
        }

        .weight {
          margin-top: 6px;
          font-size: 13px;
          color: #b07a00;
        }
      `}</style>

      <div className="container">
        <h1>{profile.name}</h1>
        <div className="subtitle">{profile.subtitle}</div>
        <div className="focus">{profile.focus}</div>
        <div className="summary">{profile.summary}</div>

        <h2 style={{ marginTop: "40px" }}>Physical Design Projects</h2>

        {projects.map((p) => (
          <div className="project" key={p.title}>
            <div className="project-top">
              <div>
                <h3>{p.title}</h3>
                <div className="type">{p.type}</div>
              </div>
              <div>{p.period}</div>
            </div>

            <div className="weight">
              {p.weight} · {p.weightLabel}
            </div>

            <p>{p.description}</p>

            <div className="metrics">{p.metrics}</div>

            <div className="tags">
              {p.tags.map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
