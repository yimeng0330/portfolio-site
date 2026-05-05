import React from "react";

const profile = {
  name: "Yvonne Sun",
  subtitle: "M.S. ECE @ UCLA",
  focus: "Physical Design · Analog/RF IC Design · ML Hardware Acceleration",
  location: "Los Angeles, CA",
  email: "your.email@ucla.edu",
  linkedin: "linkedin.com/in/your-profile",
  github: "github.com/your-github",
  summary:
    "I am a graduate student in Electrical and Computer Engineering at UCLA with hands-on experience across RTL-to-GDS physical design, analog/RF IC design, RTL implementation, and semiconductor device modeling. My work connects digital implementation, circuit-level design, and hardware acceleration for efficient integrated systems.",
};

const projects = [
  {
    title: "Tape-Out of Quantized MNIST CNN Accelerator",
    type: "Digital IC · RTL-to-GDS · TSMC 180nm",
    period: "Mar. 2026 – Jun. 2026",
    tags: ["Verilog", "TSMC 180nm", "SDC", "STA", "Innovus", "CTS", "PnR", "LVS/DRC"],
    metrics:
      "20 MHz · 279,723 μm² · 68.8% utilization · clean setup/hold · 5528-cycle latency",
    description:
      "Designed and implemented a fixed-point two-layer CNN accelerator in Verilog and completed full RTL-to-GDS flow targeting TSMC 180nm, with emphasis on timing closure, congestion resolution, CTS, routing, and signoff verification.",
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
        "Achieved clean setup/hold timing closure at 20 MHz. Final design metrics include 279,723 μm² area, 68.8% utilization, 5528-cycle latency, and 90.2% functional accuracy verified against Python reference outputs.",
      significance:
        "Built practical understanding of how floorplanning, routing congestion, CTS, timing constraints, and signoff verification interact in a complete backend physical design flow from RTL to tape-out readiness.",
    },
  },
  {
    title: "Traffic Light Controller ASIC Implementation",
    type: "FSM Control Logic · RTL-to-GDS · Backend Optimization",
    period: "2024",
    tags: ["Verilog", "FSM", "SDC", "Design Compiler", "Innovus", "Floorplan", "CTS", "QRC", "DRC/LVS"],
    metrics:
      "100 MHz · slack = 7.81 ns · utilization reduced 88% → 47% · clean DRC/LVS",
    description:
      "Implemented an FSM-based traffic light controller and completed synthesis, STA, floorplanning, placement, CTS, routing, parasitic extraction, and physical verification, with emphasis on floorplan tuning, density reduction, and backend debug.",
    swcaos: {
      situation:
        "Designed and implemented an FSM-based traffic light controller and completed full ASIC backend flow including synthesis, placement, routing, and physical verification under realistic timing constraints.",
      what:
        "Developed RTL and testbench for traffic control logic, created SDC constraints for 100 MHz clock, I/O delay, fanout, load, and transition, and executed synthesis, STA, Innovus physical implementation, QRC extraction, and DRC/LVS verification.",
      challenge:
        "The initial floorplan produced ~88% utilization, creating severe congestion and unrealistic layout density. Pin Guide, Endcap, and WellTap insertion were also difficult due to mismatch between design size, row structure, and default tool settings.",
      action:
        "Manually optimized pin placement, adjusted floorplan dimensions beyond the default auto-generated size, customized WellTap insertion with row spacing of 20 and offset of 15, tuned power stripe and WellTap placement, and iteratively refined placement/routing to improve routability and power grid quality.",
      outcome:
        "Reduced chip utilization from 88% to ~47%, significantly improving routability and layout feasibility. Achieved clean timing closure with slack = 7.81 ns, completed route and parasitic extraction, and passed DRC/LVS verification.",
      significance:
        "Demonstrated practical backend debug ability beyond simply running the flow, especially in congestion analysis, floorplan tuning, WellTap/Endcap handling, power grid planning, and understanding how physical constraints affect timing and routing.",
    },
  },
  {
    title: "ASIC ALU Full-Flow Implementation",
    type: "Digital ASIC · RTL-to-GDS · Signoff Flow",
    period: "2024",
    tags: ["Verilog", "Design Compiler", "Formal Verification", "Tempus", "QRC", "Innovus", "SPEF/SDF"],
    metrics:
      "slack > 0 · 100% annotated coverage · SPEF/SDF generated · clean DRC/LVS",
    description:
      "Completed a full ASIC implementation flow for an ALU design, covering RTL verification, synthesis, formal equivalence checking, STA, physical design, parasitic extraction, post-layout simulation, and DRC/LVS verification.",
    swcaos: {
      situation:
        "Completed a full ASIC design project based on an Arithmetic Logic Unit as part of a digital IC design course, covering the complete RTL-to-GDSII implementation flow.",
      what:
        "Designed ALU RTL and verification testbench, performed synthesis using Design Compiler, developed SDC constraints, conducted STA and formal verification, executed physical design in Innovus, and completed QRC extraction and DRC/LVS checks.",
      challenge:
        "Needed to ensure timing closure across synthesis and post-route stages, maintain equivalence between RTL, synthesized netlist, and routed netlist, and account for parasitic-induced timing changes after extraction.",
      action:
        "Built SDC constraints, optimized slack during synthesis, used R2G and G2G formal verification, performed QRC and Tempus timing analysis, generated setup/hold/DRV/noise reports, and debugged physical verification issues.",
      outcome:
        "Achieved positive slack, 100% annotated net coverage in post-layout timing analysis, generated SPEF/SDF files for accurate post-layout simulation, and passed DRC/LVS verification.",
      significance:
        "Demonstrated end-to-end RTL-to-GDSII capability and built practical understanding of timing closure, physical effects, and backend signoff using industry-style EDA tools.",
    },
  },
  {
    title: "Folded-Cascode Fully Differential Op Amp",
    type: "Analog IC Design",
    period: "2025",
    tags: ["Virtuoso", "Spectre", "CMFB", "Settling", "Power"],
    description:
      "Designed a fully differential folded-cascode operational amplifier with NMOS input pair and common-mode feedback. Optimized versions for fast settling and low-power operation through schematic-level simulations.",
  },
  {
    title: "24 GHz LC VCO Design",
    type: "RF IC Design",
    period: "2024",
    tags: ["LC VCO", "RF", "Phase Noise", "Cadence", "Layout"],
    description:
      "Designed and analyzed a high-frequency LC voltage-controlled oscillator, covering oscillation condition, frequency tuning, phase noise, power consumption, and RF layout-sensitive tradeoffs.",
  },
];

const research = [
  {
    title: "High-Speed Mixed-Signal IC Research",
    org: "UCLA · Frank Chang Lab",
    description:
      "Research assistant work in high-speed mixed-signal and RF integrated circuits, including simulation, circuit analysis, and technical documentation.",
  },
  {
    title: "GAAFET / Nanosheet Device Modeling",
    org: "Undergraduate Research",
    description:
      "TCAD-based modeling and analysis of advanced transistor structures, strengthening foundation in semiconductor physics and process-device interaction.",
  },
];

const experience = [
  ["Research Assistant", "UCLA High-Speed Mixed-Signal Lab", "High-speed mixed-signal IC design research."],
  ["Intern", "NXP Semiconductors", "Semiconductor engineering internship experience."],
  ["Reader", "UCLA ECE 149", "Supported grading, exam logistics, and course instruction."],
];

const skills = [
  "Cadence Virtuoso",
  "Spectre",
  "Innovus",
  "Genus",
  "Synopsys Design Compiler",
  "Tempus",
  "QRC",
  "Verilog",
  "Python",
  "Tcl",
  "Static Timing Analysis",
  "SDC",
  "RTL-to-GDS",
  "Floorplanning",
  "CTS",
  "Routing",
  "DRC/LVS",
  "Analog IC",
  "RF IC",
  "TCAD",
  "FinFET / GAAFET",
];

function Tag({ children }) {
  return <span className="tag">{children}</span>;
}

function Section({ id, eyebrow, title, children }) {
  return (
    <section id={id} className="section">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {children}
    </section>
  );
}

export default function App() {
  return (
    <>
      <style>{`
        :root {
          --bg: #f6f7fb;
          --card: #ffffff;
          --ink: #101522;
          --muted: #647084;
          --line: #e5e8ef;
          --accent: #2457ff;
          --accent2: #0f172a;
        }

        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }

        body {
          margin: 0;
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          background: radial-gradient(circle at top left, #e8edff 0, transparent 34%), var(--bg);
          color: var(--ink);
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .nav {
          position: sticky;
          top: 0;
          z-index: 10;
          backdrop-filter: blur(18px);
          background: rgba(246, 247, 251, 0.78);
          border-bottom: 1px solid var(--line);
        }

        .nav-inner {
          max-width: 1120px;
          margin: 0 auto;
          padding: 16px 24px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .brand {
          font-weight: 800;
          letter-spacing: -0.03em;
        }

        .links {
          display: flex;
          gap: 22px;
          color: var(--muted);
          font-size: 14px;
        }

        .links a:hover {
          color: var(--ink);
        }

        .container {
          max-width: 1120px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .hero {
          padding: 86px 0 54px;
          display: grid;
          grid-template-columns: 1.25fr 0.75fr;
          gap: 32px;
          align-items: stretch;
        }

        .hero-card,
        .side-card,
        .project,
        .mini-card {
          background: rgba(255, 255, 255, 0.86);
          border: 1px solid var(--line);
          border-radius: 28px;
          box-shadow: 0 20px 60px rgba(15, 23, 42, 0.07);
        }

        .hero-card {
          padding: 44px;
        }

        .pill {
          display: inline-flex;
          padding: 8px 13px;
          border: 1px solid #d9def0;
          border-radius: 999px;
          color: #38507a;
          background: #fff;
          font-size: 13px;
          font-weight: 650;
          margin-bottom: 22px;
        }

        h1 {
          margin: 0;
          font-size: clamp(46px, 8vw, 82px);
          line-height: 0.95;
          letter-spacing: -0.075em;
        }

        .subtitle {
          margin: 18px 0 0;
          font-size: 22px;
          color: var(--accent2);
          font-weight: 700;
        }

        .focus {
          margin: 6px 0 0;
          color: var(--muted);
          font-size: 18px;
        }

        .summary {
          margin: 26px 0 0;
          color: #455064;
          line-height: 1.75;
          max-width: 760px;
        }

        .cta-row {
          margin-top: 30px;
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
        }

        .btn {
          padding: 12px 18px;
          border-radius: 15px;
          font-weight: 750;
          font-size: 14px;
          border: 1px solid var(--line);
        }

        .btn.primary {
          background: var(--ink);
          color: white;
          border-color: var(--ink);
        }

        .btn.secondary {
          background: white;
          color: var(--ink);
        }

        .side-card {
          padding: 28px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .metric {
          padding: 18px 0;
          border-bottom: 1px solid var(--line);
        }

        .metric:last-child {
          border-bottom: 0;
        }

        .metric strong {
          display: block;
          font-size: 28px;
          letter-spacing: -0.04em;
        }

        .metric span {
          color: var(--muted);
          font-size: 14px;
        }

        .section {
          padding: 46px 0;
        }

        .eyebrow {
          margin: 0 0 8px;
          color: var(--accent);
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.18em;
          text-transform: uppercase;
        }

        h2 {
          margin: 0 0 22px;
          font-size: 34px;
          letter-spacing: -0.05em;
        }

        .project-grid {
          display: grid;
          gap: 18px;
        }

        .project {
          padding: 28px;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .project:hover {
          transform: translateY(-3px);
          box-shadow: 0 26px 70px rgba(15, 23, 42, 0.11);
        }

        .project-top {
          display: flex;
          justify-content: space-between;
          gap: 18px;
          align-items: flex-start;
        }

        .project h3 {
          margin: 0;
          font-size: 24px;
          letter-spacing: -0.035em;
        }

        .project .type {
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
          margin-top: 18px;
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

        .two-col {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 18px;
        }

        .mini-card {
          padding: 24px;
        }

        .mini-card h3 {
          margin: 0 0 8px;
          font-size: 19px;
          letter-spacing: -0.025em;
        }

        .mini-card .org {
          color: var(--accent);
          font-weight: 700;
          margin-bottom: 10px;
        }

        .mini-card p {
          color: #4b5668;
          line-height: 1.65;
          margin: 0;
        }

        .experience-list {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
        }

        .skill-cloud {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .skill {
          padding: 10px 13px;
          border: 1px solid var(--line);
          background: white;
          border-radius: 999px;
          color: #273142;
          font-weight: 700;
          font-size: 13px;
        }

        .contact {
          margin: 48px 0 70px;
          padding: 34px;
          border-radius: 30px;
          background: linear-gradient(135deg, #101522, #243b75);
          color: white;
          display: flex;
          justify-content: space-between;
          gap: 24px;
          align-items: center;
        }

        .contact h2 {
          margin-bottom: 8px;
        }

        .contact p {
          color: #d7dded;
          margin: 0;
        }

        .contact-links {
          display: flex;
          flex-direction: column;
          gap: 10px;
          min-width: 230px;
        }

        .contact-links a {
          background: rgba(255, 255, 255, 0.12);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 15px;
          padding: 12px 14px;
          font-weight: 750;
        }

        @media (max-width: 820px) {
          .links {
            display: none;
          }

          .hero,
          .two-col,
          .experience-list {
            grid-template-columns: 1fr;
          }

          .hero {
            padding-top: 46px;
          }

          .hero-card {
            padding: 28px;
          }

          .project-top,
          .contact {
            flex-direction: column;
          }

          .period {
            white-space: normal;
          }
        }
      `}</style>

      <nav className="nav">
        <div className="nav-inner">
          <a className="brand" href="#top">
            Yvonne Sun
          </a>
          <div className="links">
            <a href="#research">Research</a>
            <a href="#projects">Projects</a>
            <a href="#experience">Experience</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      <main id="top" className="container">
        <section className="hero">
          <div className="hero-card">
            <span className="pill">IC Physical Design Portfolio · Open to Internship Opportunities</span>
            <h1>{profile.name}</h1>
            <p className="subtitle">{profile.subtitle}</p>
            <p className="focus">{profile.focus}</p>
            <p className="summary">{profile.summary}</p>
            <div className="cta-row">
              <a className="btn primary" href={`mailto:${profile.email}`}>
                Contact Me
              </a>
              <a className="btn secondary" href="#projects">
                View Projects
              </a>
            </div>
          </div>

          <aside className="side-card">
            <div className="metric">
              <strong>RTL → GDS</strong>
              <span>Physical design flow, timing closure, routing, and signoff</span>
            </div>
            <div className="metric">
              <strong>STA</strong>
              <span>SDC constraints, setup/hold closure, and timing-path analysis</span>
            </div>
            <div className="metric">
              <strong>IC</strong>
              <span>Backend physical design with analog/RF and device background</span>
            </div>
          </aside>
        </section>

        <Section id="research" eyebrow="Research" title="Research Background">
          <div className="two-col">
            {research.map((item) => (
              <div className="mini-card" key={item.title}>
                <h3>{item.title}</h3>
                <div className="org">{item.org}</div>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section id="projects" eyebrow="Selected Work" title="Physical Design Projects">
          <div className="project-grid">
            {projects.map((project) => (
              <article className="project" key={project.title}>
                <div className="project-top">
                  <div>
                    <h3>{project.title}</h3>
                    <div className="type">{project.type}</div>
                  </div>
                  <div className="period">{project.period}</div>
                </div>

                <p>{project.description}</p>

                {project.metrics && <div className="metrics">{project.metrics}</div>}

                <div className="tags">
                  {project.tags.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </div>

                {project.swcaos && (
                  <details className="swcaos">
                    <summary>View SWCAOS Breakdown</summary>
                    {Object.entries(project.swcaos).map(([key, value]) => (
                      <div className="swcaos-item" key={key}>
                        <h4>{key.charAt(0).toUpperCase() + key.slice(1)}</h4>
                        <p>{value}</p>
                      </div>
                    ))}
                  </details>
                )}
              </article>
            ))}
          </div>
        </Section>

        <Section id="experience" eyebrow="Experience" title="Professional Experience">
          <div className="experience-list">
            {experience.map(([role, company, desc]) => (
              <div className="mini-card" key={role + company}>
                <h3>{role}</h3>
                <div className="org">{company}</div>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section id="skills" eyebrow="Skills" title="Technical Skills">
          <div className="skill-cloud">
            {skills.map((skill) => (
              <span className="skill" key={skill}>
                {skill}
              </span>
            ))}
          </div>
        </Section>

        <section id="contact" className="contact">
          <div>
            <p className="eyebrow" style={{ color: "#aebcff" }}>
              Contact
            </p>
            <h2>Let’s connect.</h2>
            <p>{profile.location} · Open to physical design, IC design, and hardware engineering opportunities.</p>
          </div>
          <div className="contact-links">
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
            <a href={`https://${profile.linkedin}`}>{profile.linkedin}</a>
            <a href={`https://${profile.github}`}>{profile.github}</a>
          </div>
        </section>
      </main>
    </>
  );
}
