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
      "Designed and implemented a fixed-point two-layer CNN accelerator in Verilog and completed full RTL-to-GDS flow. Planned post-silicon testing (Oct.–Dec. 2026) uses an FPGA-controlled platform to stream quantized image data into the chip and verify predicted labels against Python/RTL golden results.",
    swcaos: {
      situation:
        "Implemented a quantized MNIST CNN accelerator targeting TSMC 180nm as part of a full RTL-to-GDS tape-out flow, using the design to evaluate practical backend challenges including timing closure, congestion, and power grid integrity.",
      what:
        "Designed a fixed-point two-layer CNN accelerator in Verilog and drove the design through synthesis, floorplanning, placement, CTS, routing, and signoff verification.",
      challenge:
        "Faced backend challenges including tight timing margins at 20 MHz, routing congestion at ~70% utilization, clock skew versus insertion delay tradeoffs during CTS, and ensuring clean setup/hold closure across timing views.",
      action:
        "Developed SDC constraints including clock, I/O delay, and uncertainty; performed iterative STA across synthesis, post-CTS, and post-route stages; refined placement, routing, buffering, and cell sizing; tuned CTS for skew and insertion delay; and completed GLS, LVS/DRC/ERC, and PG connectivity checks.",
      outcome:
        "Achieved clean setup/hold timing closure at 20 MHz. Final design metrics include 279,723 μm² area, 68.8% utilization, 5528-cycle latency, and 90.2% functional accuracy verified against Python reference outputs. Post-silicon validation is planned for Oct. 2026 – Dec. 2026.",
      significance:
        "Built practical understanding of how floorplanning, routing congestion, CTS, timing constraints, and signoff verification interact in a complete backend physical design flow from RTL to tape-out readiness.",
      testing:
        "Planned silicon validation flow: an FPGA host controls reset, clock, and configuration, streams quantized MNIST image data into the chip through the narrow-I/O wrapper, captures the predicted label, and compares chip outputs with Python and RTL golden results. The setup can support both stored MNIST test vectors and external camera input after preprocessing, grayscale conversion, resizing, and quantization.",
    },
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
      "Implemented an FSM-based traffic light controller and completed full backend flow. Optimized floorplan, WellTap insertion, and pin placement to reduce congestion and improve routability.",
    swcaos: {
      situation:
        "Designed and implemented an FSM-based traffic light controller in SMIC 180nm and completed full ASIC backend flow including synthesis, placement, routing, and physical verification under realistic timing constraints.",
      what:
        "Developed RTL and testbench for traffic control logic, created SDC constraints for a 100 MHz clock, I/O delay, fanout, load, and transition, and executed synthesis, STA, Innovus physical implementation, QRC extraction, and DRC/LVS verification.",
      challenge:
        "The initial floorplan produced ~88% utilization, creating severe congestion and unrealistic layout density. Pin Guide, Endcap, and WellTap insertion were also difficult due to mismatch between design size, row structure, and default tool settings.",
      action:
        "Manually optimized pin placement, adjusted floorplan dimensions beyond the default auto-generated size, customized WellTap insertion with row spacing of 20 and offset of 15, tuned power stripe and WellTap placement, and iteratively refined placement/routing to improve routability and power grid quality.",
      outcome:
        "Reduced chip utilization from 88% to ~47%, significantly improving routability and layout feasibility. Achieved positive timing slack at 100 MHz, completed route and parasitic extraction, and passed DRC/LVS verification.",
      significance:
        "Demonstrated practical backend debug ability beyond simply running the flow, especially in congestion analysis, floorplan tuning, WellTap/Endcap handling, power grid planning, and understanding how physical constraints affect timing and routing.",
    },
  },
  {
    title: "ASIC ALU RTL-to-Synthesis Implementation (Course Lab)",
    type: "Course Lab · Backend Practice · RTL · Synthesis · STA",
    period: "Sep. 2024 – Dec. 2024",
    weight: "★★☆☆☆",
    weightLabel: "Foundation Lab",
    tags: ["Verilog", "Design Compiler", "STA", "Formal Verification"],
    metrics: "positive timing slack · RTL–gate equivalence verified",
    description:
      "Completed ALU design including RTL implementation, synthesis, STA, and formal verification, building foundational backend understanding.",
    swcaos: {
      situation:
        "Completed an ALU design as part of a digital IC course lab, focusing on understanding RTL-to-synthesis flow and timing analysis fundamentals.",
      what:
        "Designed ALU RTL and testbench in Verilog, performed synthesis using Design Compiler, developed SDC constraints, and conducted STA and formal equivalence verification.",
      challenge:
        "Ensuring timing closure under defined constraints and maintaining equivalence between RTL and synthesized netlist.",
      action:
        "Built SDC constraints, analyzed timing paths, iteratively optimized slack during synthesis, and used formal verification to validate RTL-to-gate equivalence.",
      outcome:
        "Achieved positive timing slack and successful RTL–gate equivalence verification.",
      significance:
        "Built foundational understanding of digital backend flow, timing constraints, and verification, forming the basis for more advanced physical design projects.",
    },
  },
];

function Tag({ children }) {
  return <span className="tag">{children}</span>;
}

function ProjectCard({ p }) {
  return (
    <div className="project">
      <div className="project-top">
        <div>
          <h3>{p.title}</h3>
          <div className="type">{p.type}</div>
          <div className="weight">{p.weight} · {p.weightLabel}</div>
        </div>
        <div className="period">{p.period}</div>
      </div>

      <p>{p.description}</p>
      <div className="metrics">{p.metrics}</div>

      <div className="tags">
        {p.tags.map((t) => (
          <Tag key={t}>{t}</Tag>
        ))}
      </div>

      {p.swcaos && (
        <details className="swcaos">
          <summary>View SWCAOS Breakdown</summary>
          {Object.entries(p.swcaos).map(([key, value]) => (
            <div className="swcaos-item" key={key}>
              <h4>{key.charAt(0).toUpperCase() + key.slice(1)}</h4>
              <p>{value}</p>
            </div>
          ))}
        </details>
      )}
    </div>
  );
}

export default function App() {
  return (
    <>
      <style>{`
        :root {
          --bg: #f6f7fb;
          --line: #e5e8ef;
          --accent: #2457ff;
          --ink: #101522;
          --muted: #647084;
        }

        body {
          margin: 0;
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          background: radial-gradient(circle at top left, #e8edff 0, transparent 34%), var(--bg);
          color: var(--ink);
        }

        .container {
          max-width: 1100px;
          margin: auto;
          padding: 48px 24px 80px;
        }

        .hero {
          padding: 42px;
          border-radius: 28px;
          background: rgba(255,255,255,0.88);
          border: 1px solid var(--line);
          box-shadow: 0 20px 60px rgba(15,23,42,0.07);
        }

        h1 {
          font-size: clamp(46px, 8vw, 78px);
          line-height: 0.95;
          letter-spacing: -0.075em;
          margin: 0;
        }

        .subtitle {
          margin-top: 18px;
          font-size: 22px;
          color: #0f172a;
          font-weight: 700;
        }

        .focus {
          margin-top: 8px;
          color: var(--muted);
          font-size: 18px;
        }

        .summary {
          margin-top: 24px;
          max-width: 780px;
          color: #455064;
          line-height: 1.75;
        }

        .contact-row {
          margin-top: 22px;
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          color: #455064;
          font-weight: 650;
          font-size: 14px;
        }

        h2 {
          margin: 42px 0 22px;
          font-size: 34px;
          letter-spacing: -0.05em;
        }

        .project {
          margin-top: 20px;
          padding: 28px;
          border-radius: 24px;
          background: rgba(255,255,255,0.9);
          border: 1px solid var(--line);
          box-shadow: 0 14px 45px rgba(15,23,42,0.06);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .project:hover {
          transform: translateY(-3px);
          box-shadow: 0 26px 70px rgba(15,23,42,0.11);
        }

        .project-top {
          display: flex;
          justify-content: space-between;
          gap: 18px;
          align-items: flex-start;
        }

        h3 {
          margin: 0;
          font-size: 24px;
          letter-spacing: -0.035em;
        }

        .type {
          margin-top: 6px;
          color: var(--accent);
          font-weight: 750;
          font-size: 14px;
        }

        .period {
          color: var(--muted);
          font-size: 14px;
          white-space: nowrap;
        }

        .weight {
          margin-top: 10px;
          padding: 8px 11px;
          border-radius: 999px;
          background: #fff7db;
          border: 1px solid #f1d889;
          color: #8a6200;
          font-size: 13px;
          font-weight: 800;
          display: inline-flex;
        }

        .project p {
          color: #465267;
          line-height: 1.7;
          margin: 18px 0 0;
        }

        .metrics {
          margin-top: 18px;
          padding: 13px 16px;
          border-radius: 16px;
          background: #f0f4ff;
          border: 1px solid #dce6ff;
          color: #2446a5;
          font-size: 14px;
          font-weight: 750;
        }

        .tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 18px;
        }

        .tag {
          background: #eef2ff;
          color: #2a49a5;
          border: 1px solid #dfe5ff;
          padding: 7px 10px;
          border-radius: 999px;
          font-size: 12px;
          font-weight: 700;
        }

        .swcaos {
          margin-top: 20px;
          border-top: 1px solid var(--line);
          padding-top: 18px;
        }

        .swcaos summary {
          cursor: pointer;
          font-weight: 800;
          color: var(--accent);
          font-size: 15px;
        }

        .swcaos-item {
          margin-top: 16px;
          padding: 16px;
          border-radius: 18px;
          background: #f8faff;
          border: 1px solid #e3e9f7;
        }

        .swcaos-item h4 {
          margin: 0 0 8px;
          font-size: 15px;
          color: var(--ink);
        }

        .swcaos-item p {
          margin: 0;
          font-size: 14px;
          line-height: 1.65;
          color: #4b5668;
        }

        @media (max-width: 820px) {
          .container { padding: 28px 16px 60px; }
          .hero { padding: 28px; }
          .project-top { flex-direction: column; }
          .period { white-space: normal; }
        }
      `}</style>

      <main className="container">
        <section className="hero">
          <h1>{profile.name}</h1>
          <div className="subtitle">{profile.subtitle}</div>
          <div className="focus">{profile.focus}</div>
          <div className="summary">{profile.summary}</div>
          <div className="contact-row">
            <span>{profile.location}</span>
            <span>{profile.email}</span>
            <span>{profile.phone}</span>
            <span>{profile.github}</span>
          </div>
        </section>

        <h2>Physical Design Projects</h2>

        {projects.map((p) => (
          <ProjectCard key={p.title} p={p} />
        ))}
      </main>
    </>
  );
}
