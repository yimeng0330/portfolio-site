import React from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Github, Linkedin, FileText, Cpu, Radio, Workflow, GraduationCap, BriefcaseBusiness, ExternalLink } from "lucide-react";

const profile = {
  name: "Yvonne Sun",
  title: "M.S. ECE Student at UCLA",
  focus: "Analog/RF IC Design · Physical Design · ML Hardware Acceleration",
  location: "Los Angeles, CA",
  email: "your.email@ucla.edu",
  linkedin: "https://linkedin.com/in/your-profile",
  github: "https://github.com/your-github",
  resume: "#",
  summary:
    "I am a first-year M.S. student in Electrical and Computer Engineering at UCLA, focusing on analog/RF IC design, physical design, and hardware acceleration. My experience spans device modeling, circuit design, RTL implementation, and RTL-to-GDS digital implementation flows.",
};

const highlights = [
  "Research Assistant in high-speed mixed-signal IC design lab",
  "Hands-on experience with Cadence Virtuoso, Spectre, Innovus, Genus, and Synopsys Design Compiler",
  "Course projects covering analog IC, digital IC, CNN accelerator tape-out, and physical design optimization",
  "Prior experience in TCAD-based GAAFET / nanosheet device modeling and semiconductor device analysis",
];

const research = [
  {
    title: "High-Speed Mixed-Signal IC Research",
    organization: "UCLA · Frank Chang Lab",
    period: "2025 – Present",
    tags: ["Mixed-Signal IC", "RF", "High-Speed Circuits"],
    description:
      "Working on high-speed mixed-signal integrated circuit research with emphasis on circuit-level analysis, simulation, and design methodology.",
  },
  {
    title: "GAAFET / Nanosheet Device Modeling",
    organization: "Undergraduate Research",
    period: "2023 – 2024",
    tags: ["TCAD", "FinFET", "GAAFET", "Device Physics"],
    description:
      "Conducted TCAD-based device modeling and analysis for advanced transistor structures, building a strong foundation in semiconductor physics and process-device interaction.",
  },
  {
    title: "MEMS Tactile Fingertip Circuit Testing",
    organization: "Research Project",
    period: "2023",
    tags: ["MEMS", "Circuit Testing", "Measurement"],
    description:
      "Performed circuit-level testing and measurement support for MEMS tactile sensing systems, focusing on signal integrity and experimental validation.",
  },
];

const projects = [
  {
    title: "Quantized MNIST CNN Accelerator Tape-Out",
    period: "Mar. 2026 – Jun. 2026",
    category: "Digital IC / RTL-to-GDS",
    icon: Cpu,
    tags: ["Verilog", "TSMC 180nm", "Synthesis", "PnR", "Gate-Level Simulation"],
    bullets: [
      "Designed a fixed-point two-layer MNIST CNN accelerator in Verilog HDL with a narrow-I/O chip-top wrapper and single-clock 20 MHz architecture.",
      "Explored multiple RTL microarchitectures and selected an area-optimized design using streaming line buffers, ring-buffered feature transfer, MAC reuse, serial FC accumulation, and argmax reuse.",
      "Completed RTL simulation, synthesis, place-and-route, post-route gate simulation, LVS/DRC checks, and tape-out preparation using an academic RTL-to-GDS flow.",
    ],
  },
  {
    title: "Folded-Cascode Fully Differential Operational Amplifier",
    period: "2025",
    category: "Analog IC Design",
    icon: Radio,
    tags: ["Cadence Virtuoso", "Spectre", "CMFB", "Settling", "Power Optimization"],
    bullets: [
      "Designed a folded-cascode fully differential operational amplifier with NMOS input pair and common-mode feedback circuit.",
      "Developed two optimized versions targeting fast settling and low power, achieving nanosecond-level settling behavior while maintaining stable CMFB operation.",
      "Performed schematic-level simulation, device sizing exploration, AC/transient analysis, and design tradeoff evaluation.",
    ],
  },
  {
    title: "24 GHz LC VCO Design",
    period: "2024",
    category: "RF IC Design",
    icon: Radio,
    tags: ["LC VCO", "RF", "Phase Noise", "Cadence", "Layout"],
    bullets: [
      "Designed a 24 GHz LC voltage-controlled oscillator with circuit-level simulation and physical implementation considerations.",
      "Analyzed oscillation condition, frequency tuning, phase noise, power consumption, and layout-sensitive RF design tradeoffs.",
      "Completed front-end and back-end design exploration for high-frequency RF circuit implementation.",
    ],
  },
  {
    title: "Physical Design Flow and Timing Closure",
    period: "2025",
    category: "Backend / Physical Design",
    icon: Workflow,
    tags: ["Innovus", "MMMC", "STA", "Power Grid", "Routing"],
    bullets: [
      "Implemented and analyzed an Innovus physical design flow including floorplanning, placement, clock/timing setup, routing, RC extraction, and timing/power reporting.",
      "Compared timing-driven placement, utilization settings, power stripe strategies, and optimization stages through WNS/TNS, hold/setup, and power metrics.",
      "Investigated practical timing closure techniques including path analysis, placement optimization, buffering, sizing, routing effects, and constraint refinement.",
    ],
  },
  {
    title: "RISC-V / CPU RTL Design Practice",
    period: "2026",
    category: "Computer Architecture / RTL",
    icon: Cpu,
    tags: ["Verilog", "RISC-V", "Pipeline", "Control Logic", "Simulation"],
    bullets: [
      "Built RTL design practice around RISC-V datapath, instruction decoding, immediate generation, register file access, memory operations, and control signal design.",
      "Studied pipeline behavior, hazards, forwarding concepts, branch/jump handling, and processor-level timing considerations.",
      "Used the project as a foundation for strengthening digital design fundamentals before backend physical design implementation.",
    ],
  },
];

const experience = [
  {
    role: "Research Assistant",
    company: "UCLA High-Speed Mixed-Signal Lab",
    period: "2025 – Present",
    description:
      "Conduct research in high-speed mixed-signal and RF IC design, including circuit analysis, simulation, and technical documentation.",
  },
  {
    role: "Intern",
    company: "NXP Semiconductors",
    period: "2024",
    description:
      "Worked in a semiconductor engineering environment and gained experience with IC-related design, testing, and engineering workflows.",
  },
  {
    role: "Reader",
    company: "UCLA ECE 149",
    period: "2025 – 2026",
    description:
      "Supported course instruction through grading, exam logistics, and student-facing academic responsibilities.",
  },
];

const skills = [
  {
    group: "EDA Tools",
    items: ["Cadence Virtuoso", "Spectre", "Innovus", "Genus", "Synopsys Design Compiler", "VIVA", "MAESTRO"],
  },
  {
    group: "IC Design",
    items: ["Analog IC", "RF IC", "Physical Design", "Static Timing Analysis", "RTL-to-GDS", "CMFB", "VCO", "Op Amp"],
  },
  {
    group: "Programming / HDL",
    items: ["Verilog", "Python", "C++", "Tcl", "MATLAB", "Linux"],
  },
  {
    group: "Device / Modeling",
    items: ["TCAD", "FinFET", "GAAFET", "Nanosheet FET", "Semiconductor Physics"],
  },
];

const education = [
  {
    school: "University of California, Los Angeles",
    degree: "M.S. in Electrical and Computer Engineering",
    period: "2025 – Present",
    details: "Relevant coursework: Analog IC Design, Digital IC Design, VLSI / Physical Design, Computer Architecture.",
  },
];

function SectionTitle({ eyebrow, title, description }) {
  return (
    <div className="mb-8">
      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">{eyebrow}</p>
      <h2 className="mt-2 text-3xl font-bold text-slate-950 md:text-4xl">{title}</h2>
      {description && <p className="mt-3 max-w-3xl text-base leading-7 text-slate-600">{description}</p>}
    </div>
  );
}

function Tag({ children }) {
  return <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600">{children}</span>;
}

function NavLink({ href, children }) {
  return (
    <a href={href} className="text-sm font-medium text-slate-600 transition hover:text-slate-950">
      {children}
    </a>
  );
}

export default function PortfolioSite() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-slate-50/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#home" className="text-sm font-bold tracking-wide text-slate-950">
            {profile.name}
          </a>
          <nav className="hidden items-center gap-6 md:flex">
            <NavLink href="#research">Research</NavLink>
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#experience">Experience</NavLink>
            <NavLink href="#skills">Skills</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </nav>
        </div>
      </header>

      <main>
        <section id="home" className="relative overflow-hidden">
          <div className="absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-slate-200 to-transparent" />
          <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-[1.2fr_0.8fr] md:py-28">
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <p className="mb-4 inline-flex rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700">
                Seeking opportunities in IC Design / Physical Design / Hardware Engineering
              </p>
              <h1 className="text-5xl font-bold tracking-tight text-slate-950 md:text-7xl">
                {profile.name}
              </h1>
              <p className="mt-4 text-xl font-semibold text-slate-700 md:text-2xl">{profile.title}</p>
              <p className="mt-2 text-lg text-slate-600">{profile.focus}</p>
              <p className="mt-6 max-w-3xl text-base leading-8 text-slate-600">{profile.summary}</p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 rounded-2xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800">
                  <Mail size={18} /> Contact Me
                </a>
                <a href={profile.resume} className="inline-flex items-center gap-2 rounded-2xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-100">
                  <FileText size={18} /> Resume
                </a>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-5 text-sm text-slate-600">
                <span className="inline-flex items-center gap-2"><MapPin size={16} /> {profile.location}</span>
                <a className="inline-flex items-center gap-2 hover:text-slate-950" href={profile.linkedin}><Linkedin size={16} /> LinkedIn</a>
                <a className="inline-flex items-center gap-2 hover:text-slate-950" href={profile.github}><Github size={16} /> GitHub</a>
              </div>
            </motion.div>

            <motion.aside initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/60">
              <h3 className="text-lg font-bold text-slate-950">Profile Highlights</h3>
              <div className="mt-5 space-y-4">
                {highlights.map((item) => (
                  <div key={item} className="rounded-2xl bg-slate-50 p-4 text-sm leading-6 text-slate-700">
                    {item}
                  </div>
                ))}
              </div>
            </motion.aside>
          </div>
        </section>

        <section id="research" className="mx-auto max-w-7xl px-6 py-16">
          <SectionTitle eyebrow="Research" title="Research Background" description="Research experience spanning mixed-signal IC design, advanced semiconductor devices, and circuit-level testing." />
          <div className="grid gap-5 md:grid-cols-3">
            {research.map((item) => (
              <article key={item.title} className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-lg font-bold text-slate-950">{item.title}</h3>
                  <GraduationCap className="shrink-0 text-slate-500" size={22} />
                </div>
                <p className="mt-2 text-sm font-medium text-slate-500">{item.organization}</p>
                <p className="mt-1 text-sm text-slate-500">{item.period}</p>
                <p className="mt-4 text-sm leading-6 text-slate-600">{item.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {item.tags.map((tag) => <Tag key={tag}>{tag}</Tag>)}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="bg-white py-16">
          <div className="mx-auto max-w-7xl px-6">
            <SectionTitle eyebrow="Projects" title="Selected Engineering Projects" description="Projects are written in a recruiter-friendly format: problem domain, technical scope, tools, and measurable implementation work." />
            <div className="grid gap-6">
              {projects.map((project) => {
                const Icon = project.icon;
                return (
                  <article key={project.title} className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-sm transition hover:shadow-md md:p-8">
                    <div className="grid gap-6 md:grid-cols-[0.18fr_0.82fr]">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-950 text-white">
                        <Icon size={26} />
                      </div>
                      <div>
                        <div className="flex flex-col justify-between gap-3 md:flex-row md:items-start">
                          <div>
                            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">{project.category}</p>
                            <h3 className="mt-2 text-2xl font-bold text-slate-950">{project.title}</h3>
                          </div>
                          <p className="shrink-0 rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-600">{project.period}</p>
                        </div>
                        <div className="mt-5 flex flex-wrap gap-2">
                          {project.tags.map((tag) => <Tag key={tag}>{tag}</Tag>)}
                        </div>
                        <ul className="mt-6 space-y-3 text-sm leading-6 text-slate-700">
                          {project.bullets.map((bullet) => (
                            <li key={bullet} className="flex gap-3">
                              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-500" />
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="experience" className="mx-auto max-w-7xl px-6 py-16">
          <SectionTitle eyebrow="Experience" title="Professional Experience" description="Industry, research, and teaching experience relevant to IC design and semiconductor engineering roles." />
          <div className="grid gap-5 md:grid-cols-3">
            {experience.map((item) => (
              <article key={item.role + item.company} className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm">
                <BriefcaseBusiness size={24} className="text-slate-600" />
                <h3 className="mt-4 text-xl font-bold text-slate-950">{item.role}</h3>
                <p className="mt-1 text-sm font-semibold text-slate-600">{item.company}</p>
                <p className="mt-1 text-sm text-slate-500">{item.period}</p>
                <p className="mt-4 text-sm leading-6 text-slate-600">{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="bg-slate-950 py-16 text-white">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-8">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">Skills</p>
              <h2 className="mt-2 text-3xl font-bold md:text-4xl">Technical Skills</h2>
            </div>
            <div className="grid gap-5 md:grid-cols-4">
              {skills.map((skill) => (
                <div key={skill.group} className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6">
                  <h3 className="font-bold">{skill.group}</h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {skill.items.map((item) => (
                      <span key={item} className="rounded-full bg-white/10 px-3 py-1 text-xs text-slate-200">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="education" className="mx-auto max-w-7xl px-6 py-16">
          <SectionTitle eyebrow="Education" title="Education" />
          <div className="grid gap-5">
            {education.map((item) => (
              <article key={item.school} className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-xl font-bold text-slate-950">{item.school}</h3>
                <p className="mt-1 text-sm font-semibold text-slate-600">{item.degree}</p>
                <p className="mt-1 text-sm text-slate-500">{item.period}</p>
                <p className="mt-4 text-sm leading-6 text-slate-600">{item.details}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-6 pb-20">
          <div className="rounded-[2rem] bg-slate-950 p-8 text-white md:p-12">
            <div className="grid gap-8 md:grid-cols-[0.75fr_0.25fr] md:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">Contact</p>
                <h2 className="mt-3 text-3xl font-bold md:text-4xl">Let’s connect.</h2>
                <p className="mt-4 max-w-2xl text-slate-300">
                  I am open to internship, research, and engineering opportunities in IC design, physical design, RF/analog design, and hardware acceleration.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <a href={`mailto:${profile.email}`} className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-slate-950">
                  <Mail size={18} /> Email
                </a>
                <a href={profile.linkedin} className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/20 px-5 py-3 text-sm font-semibold text-white">
                  <ExternalLink size={18} /> LinkedIn
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
