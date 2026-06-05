import { useState, useEffect, useRef } from "react";

// ============ Inject fonts + tokens ============
const StyleInjector = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Anton&family=JetBrains+Mono:wght@400;500;700&display=swap');
    :root {
      --bg: #0D0D0D;
      --fg: #F2F2F2;
      --accent: #D4FF00;
      --muted: #666666;
      --border: #262626;
      --ease: cubic-bezier(0.16, 1, 0.3, 1);
    }
    * { box-sizing: border-box; margin: 0; padding: 0; }
    html { scroll-behavior: smooth; }
    body {
      background: var(--bg);
      color: var(--fg);
      font-family: 'JetBrains Mono', monospace;
      font-size: 14px;
      line-height: 1.5;
      -webkit-font-smoothing: antialiased;
      overflow-x: hidden;
    }
    ::selection { background: var(--accent); color: var(--bg); }
    a { color: inherit; text-decoration: none; }
    button { font-family: inherit; cursor: pointer; border: none; background: none; color: inherit; }

    @keyframes reveal-up {
      from { transform: translateY(40px); opacity: 0; }
      to   { transform: translateY(0); opacity: 1; }
    }
    @keyframes pulse-ring {
      0%, 100% { transform: scale(1); opacity: 0.3; }
      50%      { transform: scale(1.15); opacity: 0.6; }
    }
    @keyframes blink {
      0%, 100% { opacity: 1; }
      50%      { opacity: 0.3; }
    }
    @keyframes marquee {
      from { transform: translateX(0); }
      to   { transform: translateX(-50%); }
    }
    .reveal { opacity: 0; transform: translateY(40px); transition: all 0.9s var(--ease); }
    .reveal.in { opacity: 1; transform: translateY(0); }
  `}</style>
);

// ============ Scroll reveal hook ============
const useInView = () => {
  const ref = useRef(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => e.isIntersecting && (setSeen(true), obs.disconnect()),
      { threshold: 0.15 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, seen];
};
const Reveal = ({ children, delay = 0 }) => {
  const [ref, seen] = useInView();
  return (
    <div ref={ref} className={`reveal ${seen ? "in" : ""}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
};

// ============ Data ============
const PROJECTS = [
  { n: "01", name: "EdLearning", desc: "Adaptive learning platform with real-time assessment tracking and progress analytics.", tags: ["React", "Node.js", "MongoDB"], url: "https://github.com/aarushi-sharma" },
  { n: "02", name: "SplitEase", desc: "Smart expense-splitting app for groups with real-time settlement logic.", tags: ["React Native", "Firebase"], url: "https://github.com/aarushi-sharma" },
  { n: "03", name: "O2C System", desc: "Order-to-Cash automation pipeline handling enterprise invoice workflows.", tags: ["Java", "Spring", "Oracle"], url: "https://github.com/aarushi-sharma" },
  { n: "04", name: "Hospital MS", desc: "Hospital management system with patient records, billing, and pharmacy modules.", tags: ["PHP", "MySQL", "Bootstrap"], url: "https://github.com/aarushi-sharma" },
  { n: "05", name: "Invoice Manager", desc: "End-to-end invoice generation, tracking, and tax-ready reporting platform.", tags: ["Next.js", "PostgreSQL"], url: "https://github.com/aarushi-sharma" },
  { n: "06", name: "NAMASTE", desc: "Cultural wellness platform blending yoga, ayurveda, and community sessions.", tags: ["React", "Express", "MongoDB"], url: "https://github.com/aarushi-sharma" },
  { n: "07", name: "AI Shopping Agent", desc: "LLM-powered conversational assistant for personalized product discovery.", tags: ["Python", "OpenAI", "LangChain"], url: "https://github.com/aarushi-sharma" },
  { n: "08", name: "TaskFlow", desc: "Kanban-style productivity suite with team workflows and CI hooks.", tags: ["React", "TypeScript"], url: "https://github.com/aarushi-sharma" },
];

const STATS = [
  { label: "Core Stack", value: "React / Next.js / Node" },
  { label: "Database", value: "PostgreSQL / MongoDB" },
  { label: "Cloud", value: "AWS / Docker / Vercel" },
  { label: "Experience", value: "03+ Years Active" },
];

const SKILLS = {
  Languages: ["JavaScript", "TypeScript", "Python", "Java", "SQL"],
  Frontend: ["React", "Next.js", "Tailwind", "Redux", "Framer Motion"],
  Backend: ["Node.js", "Express", "Spring", "REST", "GraphQL"],
  Tools: ["Git", "Docker", "AWS", "Figma", "Postman"],
};

// ============ Component ============
export default function Portfolio() {
  const [navOpen, setNavOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [time, setTime] = useState("");

  useEffect(() => {
    const tick = () => {
      const d = new Date();
      setTime(d.toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit", hour12: false, timeZone: "Asia/Kolkata" }));
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const copyEmail = () => {
    navigator.clipboard.writeText("aarushi.sharma@dev.io");
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  const wrap = { maxWidth: "1280px", margin: "0 auto", padding: "0 24px" };
  const border = `1px solid var(--border)`;
  const display = { fontFamily: "'Anton', sans-serif", textTransform: "uppercase", letterSpacing: "-0.02em" };
  const mono = { fontFamily: "'JetBrains Mono', monospace" };
  const eyebrow = { fontSize: 10, textTransform: "uppercase", letterSpacing: "0.2em", color: "var(--muted)" };

  return (
    <>
      <StyleInjector />

      {/* NAV */}
      <nav style={{
        position: "sticky", top: 0, zIndex: 50,
        background: "rgba(13,13,13,0.85)", backdropFilter: "blur(12px)",
        borderBottom: border, padding: "14px 24px",
        display: "flex", justifyContent: "space-between", alignItems: "center",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{ width: 8, height: 8, background: "var(--accent)", borderRadius: "50%", animation: "blink 1.5s infinite" }} />
          <span style={{ color: "var(--accent)", fontWeight: 700, letterSpacing: "-0.05em" }}>AS_2026</span>
        </div>
        <div style={{ display: "flex", gap: 32, fontSize: 10, textTransform: "uppercase", letterSpacing: "0.2em" }}>
          {["Works", "Intel", "Stack", "Contact"].map((l, i) => (
            <a key={l} href={`#${["projects", "about", "skills", "contact"][i]}`} style={{ transition: "color 0.2s" }}
               onMouseOver={e => e.currentTarget.style.color = "var(--accent)"}
               onMouseOut={e => e.currentTarget.style.color = "inherit"}>{l}</a>
          ))}
        </div>
        <div style={{ fontSize: 10, color: "var(--muted)", letterSpacing: "0.1em" }}>
          IST {time}
        </div>
      </nav>

      <main style={wrap}>
        {/* HERO */}
        <section style={{
          borderLeft: border, borderRight: border,
          padding: "60px 32px", minHeight: "85vh",
          display: "flex", flexDirection: "column", justifyContent: "flex-end",
          position: "relative", overflow: "hidden",
        }}>
          <div style={{
            position: "absolute", top: 60, right: 60, width: 180, height: 180,
            border: "1px solid rgba(212,255,0,0.25)", borderRadius: "50%",
            animation: "pulse-ring 3s var(--ease) infinite",
          }} />
          <div style={{
            position: "absolute", top: 80, right: 80, width: 140, height: 140,
            border: "1px solid rgba(212,255,0,0.15)", borderRadius: "50%",
            animation: "pulse-ring 3s var(--ease) infinite 0.5s",
          }} />

          <Reveal>
            <p style={{ color: "var(--accent)", fontSize: 12, letterSpacing: "0.2em", marginBottom: 32 }}>
              [ AVAILABLE FOR HIRE — 2026 ]
            </p>
          </Reveal>
          <Reveal delay={100}>
            <h1 style={{
              ...display,
              fontSize: "clamp(64px, 15vw, 192px)",
              lineHeight: 0.85,
              fontWeight: 400,
            }}>
              Aarushi<br />Sharma
            </h1>
          </Reveal>
          <Reveal delay={300}>
            <div style={{
              borderTop: border, paddingTop: 24, marginTop: 48,
              display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 24,
            }}>
              <p style={{ maxWidth: 420, fontSize: 13, color: "var(--muted)", lineHeight: 1.6 }}>
                Full-stack engineer building architectural systems, high-density interfaces, and AI-driven products that don't compromise on craft.
              </p>
              <div style={{ textAlign: "right" }}>
                <p style={{ ...eyebrow, marginBottom: 4 }}>LOC_01</p>
                <p style={{ fontSize: 13 }}>NEW DELHI, IN</p>
              </div>
            </div>
          </Reveal>
        </section>

        {/* STATS BAR */}
        <section style={{
          display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          borderLeft: border, borderRight: border, borderBottom: border,
        }}>
          {STATS.map((s, i) => (
            <div key={s.label} style={{
              padding: 32, borderRight: i < STATS.length - 1 ? border : "none",
            }}>
              <span style={{ ...eyebrow, display: "block", marginBottom: 8 }}>{s.label}</span>
              <p style={{ fontSize: 13 }}>{s.value}</p>
            </div>
          ))}
        </section>

        {/* MARQUEE */}
        <section style={{
          borderLeft: border, borderRight: border, borderBottom: border,
          overflow: "hidden", padding: "20px 0",
        }}>
          <div style={{ display: "flex", whiteSpace: "nowrap", animation: "marquee 30s linear infinite", gap: 48 }}>
            {[...Array(2)].map((_, i) => (
              <div key={i} style={{ display: "flex", gap: 48, paddingRight: 48 }}>
                {["BUILDING SYSTEMS", "★", "DESIGNING INTERFACES", "★", "SHIPPING PRODUCTS", "★", "WRITING CODE", "★"].map((t, j) => (
                  <span key={j} style={{
                    ...display, fontSize: 32, color: t === "★" ? "var(--accent)" : "var(--fg)",
                  }}>{t}</span>
                ))}
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" style={{ borderLeft: border, borderRight: border, padding: "96px 0" }}>
          <Reveal>
            <div style={{
              display: "flex", justifyContent: "space-between", alignItems: "flex-end",
              padding: "0 32px", marginBottom: 64, flexWrap: "wrap", gap: 16,
            }}>
              <h2 style={{ ...display, fontSize: "clamp(40px, 6vw, 80px)", fontWeight: 400, lineHeight: 0.9 }}>
                Selected<br />Operations
              </h2>
              <span style={{ ...eyebrow }}>[ 08 TOTAL UNITS ]</span>
            </div>
          </Reveal>

          <div style={{
            display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))",
            gap: 1, background: "var(--border)",
            borderTop: border, borderBottom: border,
          }}>
            {PROJECTS.map((p, i) => (
              <a key={p.n} href={p.url} target="_blank" rel="noreferrer"
                 style={{ background: "var(--bg)", padding: 32, display: "block", transition: "background 0.3s" }}
                 onMouseOver={e => e.currentTarget.style.background = "rgba(255,255,255,0.03)"}
                 onMouseOut={e => e.currentTarget.style.background = "var(--bg)"}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 48 }}>
                  <span style={{ fontSize: 11, color: "var(--accent)", letterSpacing: "0.15em" }}>{p.n}.08</span>
                  <div style={{ display: "flex", gap: 6, flexWrap: "wrap", justifyContent: "flex-end" }}>
                    {p.tags.map(t => (
                      <span key={t} style={{
                        fontSize: 10, border: border, padding: "3px 8px", letterSpacing: "0.05em",
                      }}>{t}</span>
                    ))}
                  </div>
                </div>
                <h3 style={{
                  ...display, fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 400, lineHeight: 0.95,
                  transition: "color 0.2s",
                }}
                onMouseOver={e => e.currentTarget.style.color = "var(--accent)"}
                onMouseOut={e => e.currentTarget.style.color = "var(--fg)"}>
                  {p.name}
                </h3>
                <p style={{ marginTop: 16, fontSize: 13, color: "var(--muted)", maxWidth: 360, marginBottom: 48, lineHeight: 1.6 }}>
                  {p.desc}
                </p>
                <span style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase",
                  borderBottom: "1px solid var(--accent)", paddingBottom: 4,
                }}>
                  View Source →
                </span>
              </a>
            ))}
          </div>
        </section>

        {/* ABOUT + SKILLS */}
        <section id="about" style={{
          borderLeft: border, borderRight: border, borderTop: border,
          padding: "96px 32px",
          display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 64,
        }}>
          <Reveal>
            <div>
              <span style={{ ...eyebrow, marginBottom: 24, display: "block" }}>[ FILE_02 / INTEL ]</span>
              <h2 style={{ ...display, fontSize: "clamp(40px, 5vw, 64px)", fontWeight: 400, lineHeight: 0.95, marginBottom: 32 }}>
                The<br />Operator
              </h2>
              <p style={{ fontSize: 14, color: "var(--muted)", lineHeight: 1.7, marginBottom: 16 }}>
                I'm Aarushi — a developer obsessed with the seam between architecture and aesthetics. I build software that's structurally honest and visually deliberate.
              </p>
              <p style={{ fontSize: 14, color: "var(--muted)", lineHeight: 1.7 }}>
                Currently shipping full-stack products across fintech, edtech, and AI. Past lives in enterprise systems and design systems.
              </p>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div id="skills">
              <span style={{ ...eyebrow, marginBottom: 24, display: "block" }}>[ FILE_03 / STACK ]</span>
              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                {Object.entries(SKILLS).map(([cat, list]) => (
                  <div key={cat} style={{ borderTop: border, paddingTop: 16 }}>
                    <h4 style={{ fontSize: 11, letterSpacing: "0.15em", color: "var(--accent)", marginBottom: 12, textTransform: "uppercase" }}>
                      {cat}
                    </h4>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                      {list.map(s => (
                        <span key={s} style={{
                          fontSize: 12, padding: "6px 12px", border: border, letterSpacing: "0.03em",
                        }}>{s}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </section>

        {/* CONTACT */}
        <section id="contact" style={{
          borderLeft: border, borderRight: border, borderTop: border,
          padding: "96px 32px",
          display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 48,
        }}>
          <Reveal>
            <div>
              <span style={{ ...eyebrow, marginBottom: 24, display: "block" }}>[ FILE_04 / TRANSMISSION ]</span>
              <h2 style={{ ...display, fontSize: "clamp(48px, 7vw, 96px)", fontWeight: 400, lineHeight: 0.85, marginBottom: 32 }}>
                Begin<br />Transmission
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <button onClick={copyEmail}
                  style={{
                    ...display, fontSize: "clamp(20px, 2.5vw, 32px)", color: "var(--fg)",
                    textAlign: "left", padding: 0, transition: "color 0.2s",
                    fontWeight: 400, letterSpacing: "-0.02em",
                  }}
                  onMouseOver={e => e.currentTarget.style.color = "var(--accent)"}
                  onMouseOut={e => e.currentTarget.style.color = "var(--fg)"}>
                  aarushi.sharma@dev.io
                  <span style={{ fontSize: 10, marginLeft: 12, color: "var(--accent)", verticalAlign: "middle" }}>
                    [{copied ? "COPIED" : "CLICK TO COPY"}]
                  </span>
                </button>
                <a href="/Aarushi_Sharma_Resume.pdf" download
                  style={{
                    display: "inline-block", background: "var(--accent)", color: "var(--bg)",
                    padding: "14px 24px", fontSize: 11, fontWeight: 700,
                    letterSpacing: "0.2em", textTransform: "uppercase",
                    alignSelf: "flex-start", transition: "filter 0.2s",
                  }}
                  onMouseOver={e => e.currentTarget.style.filter = "invert(1)"}
                  onMouseOut={e => e.currentTarget.style.filter = "none"}>
                  Download Manifest (.PDF) ↓
                </a>
                <div style={{ display: "flex", gap: 24, marginTop: 16 }}>
                  {["GitHub", "LinkedIn", "Twitter"].map(s => (
                    <a key={s} href="#" style={{
                      fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase",
                      borderBottom: "1px solid var(--border)", paddingBottom: 4, transition: "border-color 0.2s",
                    }}
                    onMouseOver={e => e.currentTarget.style.borderColor = "var(--accent)"}
                    onMouseOut={e => e.currentTarget.style.borderColor = "var(--border)"}>{s} →</a>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div style={{
              background: "rgba(255,255,255,0.03)", border: border, padding: 32,
              display: "flex", flexDirection: "column", justifyContent: "space-between", minHeight: 320,
            }}>
              <div>
                <span style={{ ...eyebrow, color: "var(--accent)", marginBottom: 16, display: "block" }}>
                  /// SYSTEM_LOG
                </span>
                <div style={{ ...mono, fontSize: 12, color: "var(--muted)", lineHeight: 2 }}>
                  <p>SYSTEM_VERSION: <span style={{ color: "var(--fg)" }}>2026.1</span></p>
                  <p>STATUS: <span style={{ color: "var(--accent)" }}>READY_FOR_DEPLOYMENT</span></p>
                  <p>UPTIME: <span style={{ color: "var(--fg)" }}>100%</span></p>
                  <p>EST_RESPONSE: <span style={{ color: "var(--fg)" }}>&lt; 24H</span></p>
                  <p>TIMEZONE: <span style={{ color: "var(--fg)" }}>IST (UTC+5:30)</span></p>
                </div>
              </div>
              <div style={{ display: "flex", gap: 8, marginTop: 32 }}>
                <div style={{ width: 48, height: 3, background: "var(--accent)" }} />
                <div style={{ width: 48, height: 3, background: "var(--muted)" }} />
                <div style={{ width: 48, height: 3, background: "var(--muted)" }} />
              </div>
            </div>
          </Reveal>
        </section>

        {/* FOOTER */}
        <footer style={{
          borderLeft: border, borderRight: border, borderTop: border,
          padding: "32px", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 16,
          fontSize: 10, color: "var(--muted)", textTransform: "uppercase", letterSpacing: "0.15em",
        }}>
          <span>© {new Date().getFullYear()} Aarushi Sharma</span>
          <span>Designed & built with intent</span>
          <span>Build_v3.2</span>
        </footer>
      </main>
    </>
  );
}
