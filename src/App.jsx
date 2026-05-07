import React from "react";

const profile = {
  name: "Yimeng Sun",
  subtitle: "M.S. ECE @ UCLA 27‘",
  focus: "Physical Design · Digital IC Design · Device Modeling",
  location: "Los Angeles, CA",
  email: "yimeng0330@ucla.edu",
  phone: "+1 3109488751",
  summary:
    "I am a graduate student in Electrical and Computer Engineering at UCLA with hands-on experience across RTL-to-GDS physical design, RTL implementation, semiconductor device modeling and analog/RF IC design. My work connects digital implementation, circuit-level design, and device-level understanding to enable efficient and robust integrated circuit systems.",
};

const pdProjects = [
  {
    title: "Tape-Out of Quantized MNIST CNN Accelerator",
    type: "Digital IC · RTL-to-GDS · TSMC 180nm",
    period: "Mar. 2026 – Jun. 2026",
    weight: "★★★★☆",
    weightLabel: "Flagship Project",
    tags: ["Verilog", "TSMC 180nm", "SDC", "STA", "Innovus", "CTS", "PnR", "LVS/DRC"],
    metrics:
      "20 MHz · 279,723 μm² · 68.8% utilization · clean setup/hold · 5528-cycle latency",
    description:
      "Designed and implemented a fixed-point two-layer CNN accelerator in Verilog and completed full RTL-to-GDS flow targeting TSMC 180nm, with emphasis on timing closure, congestion resolution, CTS, routing, and signoff verification. Planned post-silicon testing is scheduled for Oct. 2026 – Dec. 2026 using an FPGA-controlled test platform to stream image data into the chip and verify returned classification labels against Python/RTL golden results.",
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
    },
  },
  {
    title: "Traffic Light Controller ASIC Implementation",
    type: "FSM Control Logic · RTL-to-GDS · SMIC 180nm",
    period: "Oct. 2024 – Jan. 2025",
    weight: "★★★☆☆",
    weightLabel: "Backend Debug Project",
    tags: [
      "Verilog",
      "FSM",
      "SMIC 180nm",
      "SDC",
      "Design Compiler",
      "Innovus",
      "Floorplan",
      "CTS",
      "QRC",
      "DRC/LVS",
    ],
    metrics:
      "100 MHz · positive timing slack · utilization reduced 88% → 47% · clean DRC/LVS",
    description:
      "Implemented an FSM-based traffic light controller in SMIC 180nm and completed synthesis, STA, floorplanning, placement, CTS, routing, parasitic extraction, and physical verification, with emphasis on floorplan tuning, density reduction, and backend debug.",
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
    title: "ASIC ALU RTL-to-Synthesis Implementation",
    type: "Course Lab · Backend Practice",
    period: "Sep. 2024 – Oct. 2024",
    weight: "★★☆☆☆",
    weightLabel: "Foundation Lab",
    tags: ["Verilog", "Design Compiler", "STA", "Formal Verification", "QRC", "Tempus"],
    metrics:
      "Flow learning: RTL simulation · DC synthesis · STA · equivalence check · QRC/Tempus exposure",
    description:
      "Completed an ALU design as part of a digital IC course lab, covering RTL implementation, synthesis, timing analysis, and backend flow exposure.",
    swcaos: {
      situation:
        "Completed an ALU design as part of a digital IC course lab to understand the end-to-end ASIC design flow from RTL to post-layout verification.",
      what:
        "Designed ALU RTL and testbench in Verilog and went through simulation, synthesis, timing analysis, equivalence checking, parasitic extraction, and physical implementation stages.",
      challenge:
        "As an early course lab, the main challenge was limited familiarity with the ASIC toolchain and backend flow. I initially did not fully understand the purpose of each stage, including why RTL simulation, synthesis, formal verification, STA, parasitic extraction, physical implementation, and DRC/LVS were performed separately.",
      action:
        "Worked through the ALU flow step by step: completed RTL/testbench simulation using VCS and DVE, ran Design Compiler synthesis with timing constraints, checked timing slack, used equivalence checking scripts for RTL-to-gate validation, performed QRC parasitic extraction, analyzed timing reports in Tempus, and practiced Innovus-based physical implementation and layout verification. Reviewed scripts and reports to understand data flow across stages, including RTL, netlist, SDC, SPEF, and timing reports.",
      outcome:
        "Built a clear end-to-end understanding of the digital ASIC implementation flow from RTL to post-layout verification, and learned how each EDA stage contributes to functional correctness, timing closure, and physical realizability.",
      significance:
        "Established a solid foundation for backend physical design, which directly enabled later independent projects such as the Traffic Light Controller, where I applied the flow to solve real backend issues including floorplan tuning, congestion reduction, and utilization optimization.",
    },
  },
];

const supportingProjects = [
  {
    title: "Fully-Differential Folded-Cascode Op Amp",
    type: "Analog IC Design · TSMC 180nm · Advisor: Prof. Behzad Razavi",
    period: "Dec. 2025",
    tags: [
      "Virtuoso",
      "Spectre",
      "Analog Layout",
      "CMFB",
      "Post-Layout Simulation",
    ],
    metrics:
      "Gain ≈ 8 · 1.6 Vpp swing · <1% gain error · 2 pF load · 14.2 ns @ 9.56 mW / 49.5 ns @ 2.57 mW",
    description:
      "Designed a 1.8 V fully-differential folded-cascode op-amp with NMOS input pair and CMFB in TSMC 180nm. Completed analog layout and post-layout simulation including parasitic extraction, demonstrating clear speed–power trade-offs.",
    highlights: [
      "Completed full analog flow: schematic → layout → post-layout verification",
      "Explored speed–power trade-offs via bias current and feedback capacitor scaling",
    ],
  },
  {
    title: "MASH-111 ΔΣ Modulator",
    type: "Digital IC Design · TSMC 16nm · Advisor: Prof. Hooman Darabi",
    period: "Oct. 2025 – Dec. 2025",
    tags: [
      "Verilog",
      "Delta-Sigma",
      "Fractional-N PLL",
      "Synthesis",
      "STA",
      "TSMC 16nm",
    ],
    metrics:
      "500 MHz · setup slack 0.83/0.94 ns · hold slack 0.00 ns · 186 μm² · 0.21/0.22 mW",
    description:
      "Designed a 3rd-order MASH-111 digital ΔΣ modulator for fractional-N PLL applications in Verilog, with cascaded 1-bit stages, signed arithmetic handling, and pipeline alignment for 500 MHz timing closure.",
    highlights: [
      "Validated functionality across DC inputs and clock/reset conditions using verification testbench",
      "Achieved no timing violations in DC/PrimeTime with optimized area and power at 16nm",
    ],
  },
  {
    title: "Nanosheet FET / TFET TCAD Modeling and Parameter Extraction",
    type: "Device Modeling · Sentaurus TCAD · Research Assistant",
    period: "Nov. 2023 – Jun. 2024",
    tags: [
      "Sentaurus TCAD",
      "GAAFET",
      "TFET",
      "28nm MOSFET",
      "BSIM4",
      "Parameter Extraction",
      "Quantum Effects",
    ],
    description:
      "Conducted TCAD-based modeling and optimization research on nanosheet FETs, TFETs, and 28nm MOSFETs, studying device electrical characteristics, process-dependent behavior, and scaling-related quantum effects.",
    highlights: [
      "Extracted 18 electrical parameters based on the BSIM4 model and validated simulation behavior against experimental data",
      "Analyzed the impact of gate length, bias conditions, and temperature on switching speed, leakage, and power consumption",
      "Gained understanding of quantum confinement and tunneling effects in advanced GAA and TFET device structures",
    ],
  },
  {
    title: "Digital Datapath Arithmetic Unit Design",
    type: "Digital Frontend · RTL Design",
    period: "Jan. 2023 – Mar. 2023",
    tags: [
      "Verilog",
      "RTL",
      "Datapath",
      "Testbench",
      "Synthesis",
      "Timing",
    ],
    description:
      "Designed and implemented an 8-bit absolute-value datapath in Verilog, focusing on signed arithmetic handling using two’s complement representation.",
    highlights: [
      "Developed modular RTL including sign detection, conditional inversion, and increment logic",
      "Verified corner cases (-8, -1, 0, +7) through waveform-based simulation",
      "Performed RTL-to-gate synthesis and achieved ~12.7 ns critical path delay",
      "Gained early exposure to timing constraints and datapath optimization",
    ],
  },
  {
    title: "Electronic Password Lock on Altera DE2-35 FPGA",
    type: "FPGA · Verilog · Undergraduate Course Project",
    period: "May. 2023",
    tags: ["Verilog", "FPGA", "Quartus II", "FSM", "DE2-35"],
    description:
      "Designed and implemented an electronic password lock on an Altera DE2-35 FPGA board using Verilog HDL in Quartus II, supporting user-configurable password logic and visual feedback control.",
    highlights: [
      "Implemented password verification and control logic using FSM-based architecture",
      "Gained early hands-on experience with FPGA-based digital design and hardware debugging",
    ],
  },
];

const research = [
  {
    title: "High-Speed Mixed-Signal IC Research",
    org: "UCLA · Prof. Frank Chang",
    description:
      "Supported digital implementation for mixed-signal IC research projects, including Verilog testbench development and backend place-and-route flow.",
  },
  {
    title: "Advanced Gate-All-Around Device Modeling",
    org: "Undergraduate Research · Prof. Weijing Liu",
    description:
      "TCAD-based modeling and analysis of advanced transistor structures, strengthening foundation in semiconductor physics and process-device interaction.",
  },
];

const experience = [
  {
    role: "RF IC Design Intern",
    company: "Lingchip Microelectronics (Hangzhou) Co., Ltd.",
    location: "Shanghai, China",
    period: "Mar. 2025 – Jun. 2025",
    subtitle: "24 GHz LC VCO Design · GTA 40nm CMOS",
    bullets: [
      "Designed and implemented a 24 GHz LC voltage-controlled oscillator (VCO) in GTA 40nm CMOS process (JITA Semiconductor), covering schematic design, RF analysis, and full-custom layout.",
      "Performed system-level analysis to determine inductance, capacitance, and required negative transconductance (-gm) for startup and stable oscillation.",
      "Designed cross-coupled NMOS core and multiple LC tank configurations to optimize tuning range and KVCO characteristics.",
      "Conducted DC, transient, harmonic balance, and phase noise simulations to evaluate oscillation performance.",
      "Completed full-custom layout and post-layout verification including EMX electromagnetic modeling, S-parameter analysis, and DRC/LVS signoff.",
    ],
    skills: [
      "RF IC Design",
      "LC VCO",
      "GTA 40nm",
      "Cadence Virtuoso",
      "EMX",
      "S-Parameter",
      "Phase Noise",
      "Full-Custom Layout",
      "DRC/LVS",
    ],
  },
  {
    role: "MPU Application Engineering Intern",
    company: "NXP Semiconductors",
    location: "Shanghai, China",
    period: "May. 2024 – Sep. 2024",
    subtitle: "Signal Testing · System Validation · Test Automation",
    bullets: [
      "Performed USB 2.0 and LPDDR4 signal testing using Keysight oscilloscopes, ensuring signal integrity, timing accuracy, and compliance with JEDEC specifications.",
      "Analyzed waveforms to evaluate signal fidelity, timing margins, and data stability, and troubleshot signal quality issues.",
      "Developed test automation scripts and performed data analysis using MATLAB and Origin, improving testing efficiency and reliability.",
      "Collaborated with senior engineers to debug and optimize MPU system performance based on test results and validation feedback.",
    ],
    skills: [
      "USB 2.0",
      "LPDDR4",
      "Keysight Oscilloscope",
      "Signal Integrity",
      "Timing Margin Analysis",
      "JEDEC Specs",
      "MATLAB",
      "Origin",
      "Test Automation",
      "Debugging",
    ],
  },
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
  "Floorplanning",
  "CTS",
  "Routing",
  "DRC/LVS",
  "Analog IC",
  "Sentaurus TCAD",
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

function ProjectCard({ project }) {
  return (
    <article className="project" key={project.title}>
      <div className="project-top">
        <div>
          <h3>{project.title}</h3>
          <div className="type">{project.type}</div>
          {project.weight && (
            <div className="weight">
              <span>{project.weight}</span>
              <small>{project.weightLabel}</small>
            </div>
          )}
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

      {project.highlights && (
        <ul className="highlights">
          {project.highlights.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}

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
  );
}

function InternshipCard({ item }) {
  return (
    <article className="internship-card">
      <div className="internship-top">
        <div>
          <h3>{item.role}</h3>
          <div className="org">{item.company}</div>
          <p className="internship-subtitle">{item.subtitle}</p>
        </div>
        <div className="internship-meta">
          <span>{item.period}</span>
          <span>{item.location}</span>
        </div>
      </div>

      <ul className="internship-bullets">
        {item.bullets.map((bullet, index) => (
          <li key={index}>{bullet}</li>
        ))}
      </ul>

      {item.skills && (
        <div className="tags">
          {item.skills.map((skill) => (
            <Tag key={skill}>{skill}</Tag>
          ))}
        </div>
      )}
    </article>
  );
}

function MailIcon() {
  return (
    <svg
      width="23"
      height="23"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-10 6L2 7" />
    </svg>
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

        a { color: inherit; text-decoration: none; }

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

        .brand { font-weight: 800; letter-spacing: -0.03em; }

        .links {
          display: flex;
          gap: 22px;
          color: var(--muted);
          font-size: 14px;
        }

        .links a:hover { color: var(--ink); }

        .dropdown { position: relative; }

        .dropdown-menu {
          display: none;
          position: absolute;
          top: 24px;
          left: 0;
          min-width: 190px;
          padding: 10px;
          border-radius: 16px;
          background: rgba(255, 255, 255, 0.96);
          border: 1px solid var(--line);
          box-shadow: 0 18px 45px rgba(15, 23, 42, 0.12);
        }

        .dropdown:hover .dropdown-menu {
          display: grid;
          gap: 8px;
        }

        .dropdown-menu a {
          padding: 8px 10px;
          border-radius: 10px;
          white-space: nowrap;
        }

        .dropdown-menu a:hover {
          background: #eef2ff;
          color: var(--accent);
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
        .mini-card,
        .internship-card {
          background: rgba(255, 255, 255, 0.86);
          border: 1px solid var(--line);
          border-radius: 28px;
          box-shadow: 0 20px 60px rgba(15, 23, 42, 0.07);
        }

        .hero-card { padding: 44px; }

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
          align-items: center;
        }

        .mail-btn {
          width: 54px;
          height: 54px;
          border-radius: 50%;
          background: var(--ink);
          color: white;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .mail-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 14px 35px rgba(16, 21, 34, 0.22);
        }

        .btn {
          padding: 12px 18px;
          border-radius: 15px;
          font-weight: 750;
          font-size: 14px;
          border: 1px solid var(--line);
        }

        .btn.secondary {
          background: white;
          color: var(--ink);
        }

        .side-card {
          padding: 28px;
          display: flex;
          flex-direction: column;
          gap: 22px;
          min-height: 100%;
          align-items: stretch;
        }

        .profile-photo {
          width: 210px;
          height: 210px;
          border-radius: 32px;
          object-fit: cover;
          object-position: center 28%;
          display: block;
          margin: 0 auto;
        }

        .education-block {
          margin-top: auto;
          padding-top: 12px;
        }

        .education-block h3 {
          margin: 0;
          font-size: 22px;
          letter-spacing: -0.04em;
        }

        .education-item {
          padding: 18px 0;
          border-bottom: 1px solid var(--line);
        }

        .education-item:last-child {
          border-bottom: 0;
          padding-bottom: 0;
        }

        .education-item strong {
          display: block;
          font-size: 15px;
          color: var(--ink);
          margin-bottom: 6px;
        }

        .education-item p {
          margin: 0;
          color: var(--muted);
          line-height: 1.55;
          font-size: 14px;
        }

        .section { padding: 46px 0; }

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

        .project-grid,
        .internship-list {
          display: grid;
          gap: 18px;
        }

        .project,
        .internship-card {
          padding: 28px;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .project:hover,
        .internship-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 26px 70px rgba(15, 23, 42, 0.11);
        }

        .project-top,
        .internship-top {
          display: flex;
          justify-content: space-between;
          gap: 18px;
          align-items: flex-start;
        }

        .project h3,
        .internship-card h3 {
          margin: 0;
          font-size: 24px;
          letter-spacing: -0.035em;
        }

        .project .type,
        .internship-card .org {
          margin-top: 6px;
          color: var(--accent);
          font-weight: 750;
          font-size: 14px;
        }

        .period,
        .internship-meta {
          color: var(--muted);
          font-size: 14px;
          white-space: nowrap;
        }

        .internship-meta {
          display: flex;
          flex-direction: column;
          gap: 6px;
          align-items: flex-end;
        }

        .internship-subtitle {
          margin: 10px 0 0;
          color: #465267;
          font-weight: 650;
        }

        .internship-bullets {
          margin: 20px 0 0;
          padding-left: 20px;
          color: #465267;
          line-height: 1.7;
        }

        .internship-bullets li { margin-bottom: 8px; }

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
          gap: 8px;
          align-items: center;
        }

        .weight small {
          font-size: 12px;
          color: #7a5a12;
          font-weight: 750;
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

        .highlights {
          margin-top: 16px;
          padding-left: 20px;
          color: #4b5668;
          line-height: 1.65;
        }

        .highlights li { margin-bottom: 6px; }

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

        .mini-card { padding: 24px; }

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

        .contact h2 { margin-bottom: 8px; }

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
          .links { display: none; }

          .hero,
          .two-col {
            grid-template-columns: 1fr;
          }

          .hero { padding-top: 46px; }

          .hero-card { padding: 28px; }

          .project-top,
          .internship-top,
          .contact {
            flex-direction: column;
          }

          .period,
          .internship-meta {
            white-space: normal;
            align-items: flex-start;
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
            <div className="dropdown">
              <a href="#pd-projects">Projects</a>
              <div className="dropdown-menu">
                <a href="#pd-projects">PD Projects</a>
                <a href="#supporting-projects">Supporting Projects</a>
              </div>
            </div>
            <a href="#experience">Industry</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      <main id="top" className="container">
        <section className="hero">
          <div className="hero-card">
            <span className="pill">Welcome to My Portfolio · Open to 26 Internship/27 New Grad Full-time Opportunities</span>
            <h1>{profile.name}</h1>
            <p className="subtitle">{profile.subtitle}</p>
            <p className="focus">{profile.focus}</p>
            <p className="summary">{profile.summary}</p>
            <div className="cta-row">
              <a
                className="mail-btn"
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${profile.email}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Email Yimeng Sun"
              >
                <MailIcon />
              </a>
              <a className="btn secondary" href="#pd-projects">
                View Projects
              </a>
            </div>
          </div>

          <aside className="side-card">
          <img
            className="profile-photo"
            src="/images/profile.jpg"
            alt="Yvonne Sun portrait"
          />

            <div className="education-block">
              <h3>Education</h3>

              <div className="education-item">
                <strong>University of California, Los Angeles</strong>
                <p>M.S. Electrical & Computer Engineering</p>
                <p>Sep. 2025 – Mar. 2027</p>
                <p>GPA: 4.0 / 4.0</p>
              </div>

              <div className="education-item">
                <strong>Shanghai University of Electric Power</strong>
                <p>B.S. Electronic Science and Technology</p>
                <p>Sep. 2021 – Jun. 2025</p>
                <p>GPA: 3.83 / 4.0 · Rank: 1 / 62</p>
              </div>
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

        <Section id="pd-projects" eyebrow="Selected Work" title="Physical Design Projects">
          <div className="project-grid">
            {pdProjects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </Section>

        <Section id="supporting-projects" eyebrow="Supporting Work" title="Supporting Projects">
          <div className="project-grid">
            {supportingProjects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </Section>

        <Section id="experience" eyebrow="Industry" title="Internship">
          <div className="internship-list">
            {experience.map((item) => (
              <InternshipCard key={item.role + item.company} item={item} />
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
            <a href={`tel:${profile.phone}`}>{profile.phone}</a>
          </div>
        </section>
      </main>
    </>
  );
}
