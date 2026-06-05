import { useState, useEffect, useRef } from "react";

const NAV_LINKS = ["About", "Skills", "Projects", "Resume", "Contact"];

const SKILLS = {
  Languages: ["Java", "JavaScript", "Python", "SQL", "C++"],
  Frameworks: ["React.js", "Next.js", "Node.js", "Express.js", "FastAPI", "Spring Boot"],
  Databases: ["MongoDB", "PostgreSQL", "MySQL"],
  Tools: ["Git", "GitHub", "Postman", "VS Code"],
};

const PROJECTS = [
  {
    title: "SplitEase",
    subtitle: "Expense Sharing Application",
    description:
      "Full-featured expense splitting platform for groups — trips, flatmates, team outings. Handles real-time balance calculations and smart settlement logic with JWT-secured access.",
    stack: ["MongoDB", "Express.js", "React", "Node.js", "JWT"],
    github: "https://github.com/aarushhii30/SplitEase--App",
    accent: "#7EE8A2",
    tag: "MERN · Full Stack",
  },
  {
    title: "O2C System",
    subtitle: "Order-to-Cash Management",
    description:
      "Enterprise-grade backend automating the complete order-to-cash workflow — from customer orders through invoicing to payment reconciliation with overdue alerts.",
    stack: ["Node.js", "Express.js", "MongoDB", "REST API"],
    github: "https://github.com/aarushhii30/o2c-project",
    accent: "#80D0C7",
    tag: "Backend System",
  },
  {
    title: "Hospital Management",
    subtitle: "Scalable Hospital Backend",
    description:
      "Scalable backend system to digitize hospital operations — patient registration, appointment scheduling, and report generation with optimized SQL queries.",
    stack: ["FastAPI", "PostgreSQL", "Python"],
    github: "https://github.com/aarushhii30/Hospital-Management",
    accent: "#F3A683",
    tag: "FastAPI · SQL",
  },
  {
    title: "Invoice Management",
    subtitle: "Billing & Ledger System",
    description:
      "Complete invoice management platform handling creation, tracking, payment confirmation, and reporting with customer-wise ledgers and overdue alerts.",
    stack: ["Node.js", "Express.js", "MongoDB", "React"],
    github: "https://github.com/aarushhii30/Invoice-Management",
    accent: "#B197FC",
    tag: "Full Stack",
  },
  {
    title: "NAMASTE",
    subtitle: "AI Medical Code Suggestion",
    description:
      "AI-powered medical terminology system bridging AYUSH concepts with international ICD-11 standards, enabling smarter clinical decision-making.",
    stack: ["Spring Boot", "Python", "FastAPI", "PostgreSQL", "React"],
    github: "https://github.com/aarushhii30/NAMASTE-Frontend",
    accent: "#FF8FA3",
    tag: "AI · Healthcare",
  },
  {
    title: "AI Shopping Agent",
    subtitle: "Conversational Commerce",
    description:
      "Premium AI-powered shopping assistant handling product discovery, smart recommendations, cart management, and real-time search via a conversational chat interface.",
    stack: ["Node.js", "Express.js", "React", "Shopify API", "Tailwind"],
    github: "https://github.com/aarushhii30/AI-shopping-agent",
    accent: "#FCD34D",
    tag: "AI · Shopify",
  },
  {
    title: "TaskFlow",
    subtitle: "Student Task Manager",
    description:
      "A sleek, full-stack MERN task management web app with JWT auth, drag & drop reordering, instant search, overdue alerts, and a beautiful dark UI. Live deployed.",
    stack: ["React", "Vite", "Node.js", "Express.js", "MongoDB", "JWT"],
    github: "https://github.com/aarushhii30/Student-task-manager",
    accent: "#7EE8A2",
    tag: "MERN · Live",
  },
  {
    title: "EdLearning Platform",
    subtitle: "Online Learning Experience",
    description:
      "An e-learning platform with structured courses, lessons, and interactive content — built to deliver a smooth, modern learning experience for students.",
    stack: ["React", "Node.js", "Express.js", "MongoDB"],
    github: "https://github.com/aarushhii30/ELEARNING-PLATFORM",
    accent: "#80D0C7",
    tag: "EdTech",
  },
];

function useInView(threshold = 0.12) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
}

function FadeIn({ children, delay = 0, className = "", style = {} }) {
  const [ref, inView] = useInView();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.8s ease ${delay}s, transform 0.8s ease ${delay}s`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

export default function Portfolio() {
  const [active, setActive] = useState("About");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [copied, setCopied] = useState(false);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    const onMouse = (e) => setMouse({ x: e.clientX, y: e.clientY });
    window.addEventListener("scroll", onScroll);
    window.addEventListener("mousemove", onMouse);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("mousemove", onMouse);
    };
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setActive(id);
    setMenuOpen(false);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText("aarushhiisharma@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div style={{
      background: "#0A0A0F",
      color: "#E8E6E1",
      minHeight: "100vh",
      fontFamily: "'DM Sans', system-ui, sans-serif",
      overflowX: "hidden",
      position: "relative",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,500;0,9..144,700;1,9..144,300&family=JetBrains+Mono:wght@400;500&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { background: #0A0A0F; }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #0A0A0F; }
        ::-webkit-scrollbar-thumb { background: #2a2a3a; border-radius: 3px; }
        ::-webkit-scrollbar-thumb:hover { background: #7EE8A2; }
        ::selection { background: #7EE8A2; color: #0A0A0F; }

        .nav-link { position: relative; color: #9b98a8; font-size: 0.82rem; letter-spacing: 0.08em; text-transform: uppercase; cursor: pointer; transition: color 0.3s; padding: 4px 0; border: none; background: none; font-family: inherit; }
        .nav-link::after { content: ''; position: absolute; bottom: -3px; left: 0; width: 0; height: 1px; background: #7EE8A2; transition: width 0.35s ease; }
        .nav-link:hover, .nav-link.active { color: #E8E6E1; }
        .nav-link:hover::after, .nav-link.active::after { width: 100%; }

        .skill-pill { display: inline-block; padding: 7px 16px; border-radius: 100px; font-size: 0.78rem; font-weight: 500; letter-spacing: 0.03em; border: 1px solid rgba(126,232,162,0.22); background: rgba(126,232,162,0.05); color: #a8e6be; margin: 4px; transition: all 0.25s; cursor: default; font-family: 'JetBrains Mono', monospace; }
        .skill-pill:hover { background: rgba(126,232,162,0.15); border-color: rgba(126,232,162,0.6); transform: translateY(-2px); }

        .project-card { position: relative; background: linear-gradient(180deg, #111118 0%, #0d0d14 100%); border: 1px solid #1e1e2e; border-radius: 18px; overflow: hidden; transition: all 0.4s ease; padding: 32px; height: 100%; display: flex; flex-direction: column; }
        .project-card::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 1px; background: linear-gradient(90deg, transparent, var(--accent), transparent); opacity: 0; transition: opacity 0.4s; }
        .project-card:hover { transform: translateY(-8px); border-color: rgba(126,232,162,0.35); box-shadow: 0 30px 60px rgba(0,0,0,0.6), 0 0 0 1px rgba(126,232,162,0.1); }
        .project-card:hover::before { opacity: 1; }

        .btn-primary { display: inline-flex; align-items: center; gap: 8px; padding: 13px 28px; border-radius: 100px; background: #7EE8A2; color: #0A0A0F; font-weight: 600; font-size: 0.85rem; letter-spacing: 0.04em; cursor: pointer; border: none; transition: all 0.3s; text-decoration: none; font-family: inherit; }
        .btn-primary:hover { background: #a8f0c0; transform: translateY(-2px); box-shadow: 0 12px 32px rgba(126,232,162,0.4); }

        .btn-outline { display: inline-flex; align-items: center; gap: 8px; padding: 12px 24px; border-radius: 100px; background: transparent; color: #7EE8A2; font-weight: 500; font-size: 0.82rem; letter-spacing: 0.04em; cursor: pointer; border: 1px solid rgba(126,232,162,0.4); transition: all 0.3s; text-decoration: none; font-family: inherit; }
        .btn-outline:hover { background: rgba(126,232,162,0.1); border-color: #7EE8A2; transform: translateY(-2px); }

        .contact-card { background: #111118; border: 1px solid #1e1e2e; border-radius: 16px; padding: 28px; display: flex; flex-direction: column; gap: 16px; transition: all 0.3s; cursor: pointer; text-decoration: none; color: inherit; }
        .contact-card:hover { border-color: rgba(126,232,162,0.45); background: rgba(126,232,162,0.04); transform: translateY(-4px); }

        .section-label { font-size: 0.72rem; letter-spacing: 0.18em; text-transform: uppercase; color: #7EE8A2; font-weight: 600; margin-bottom: 14px; font-family: 'JetBrains Mono', monospace; }

        .mobile-menu { position: fixed; inset: 0; background: rgba(10,10,15,0.98); z-index: 99; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 32px; backdrop-filter: blur(12px); }

        .orb { position: absolute; border-radius: 50%; filter: blur(100px); opacity: 0.18; pointer-events: none; }

        .grid-bg { position: absolute; inset: 0; background-image: linear-gradient(rgba(126,232,162,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(126,232,162,0.04) 1px, transparent 1px); background-size: 60px 60px; mask-image: radial-gradient(ellipse 80% 60% at 50% 30%, black 30%, transparent 80%); }

        @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-12px)} }
        @keyframes spin-slow { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
        @keyframes pulse-ring { 0%{transform:scale(1);opacity:0.6} 100%{transform:scale(2);opacity:0} }
        .cursor-blink { display: inline-block; animation: blink 1.1s step-end infinite; color: #7EE8A2; }
        .status-dot { width: 8px; height: 8px; border-radius: 50%; background: #7EE8A2; position: relative; }
        .status-dot::after { content: ''; position: absolute; inset: 0; border-radius: 50%; background: #7EE8A2; animation: pulse-ring 2s ease-out infinite; }

        @media (max-width: 768px) {
          .nav-links { display: none !important; }
          .hamburger { display: block !important; }
          .hero-title { font-size: 4rem !important; }
          .section-title { font-size: 2.2rem !important; }
          .projects-grid { grid-template-columns: 1fr !important; }
          .contact-grid { grid-template-columns: 1fr !important; }
          .skills-grid { grid-template-columns: 1fr !important; }
          .about-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      {/* Cursor glow */}
      <div style={{
        position: "fixed",
        left: mouse.x - 200, top: mouse.y - 200,
        width: 400, height: 400,
        background: "radial-gradient(circle, rgba(126,232,162,0.08) 0%, transparent 60%)",
        pointerEvents: "none", zIndex: 1, transition: "transform 0.15s ease-out",
      }} />

      {/* NAV */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        display: "flex", justifyContent: "space-between", alignItems: "center",
        padding: scrolled ? "16px 6%" : "24px 6%",
        background: scrolled ? "rgba(10,10,15,0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.05)" : "1px solid transparent",
        transition: "all 0.35s ease",
      }}>
        <div style={{ fontFamily: "'Fraunces', serif", fontSize: "1.4rem", fontWeight: 500, letterSpacing: "-0.02em" }}>
          aarushi<span style={{ color: "#7EE8A2" }}>.</span>
        </div>
        <div className="nav-links" style={{ display: "flex", gap: 36 }}>
          {NAV_LINKS.map(l => (
            <button key={l} className={`nav-link ${active === l ? "active" : ""}`} onClick={() => scrollTo(l)}>{l}</button>
          ))}
        </div>
        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} style={{ background: "none", border: "none", cursor: "pointer", color: "#E8E6E1", display: "none", padding: 8 }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
        </button>
      </nav>

      {menuOpen && (
        <div className="mobile-menu">
          <button onClick={() => setMenuOpen(false)} style={{ position: "absolute", top: 24, right: 32, background: "none", border: "none", color: "#9b98a8", cursor: "pointer", fontSize: "1.5rem" }}>✕</button>
          {NAV_LINKS.map(l => (
            <button key={l} onClick={() => scrollTo(l)} style={{ background: "none", border: "none", color: "#E8E6E1", fontSize: "1.8rem", fontFamily: "'Fraunces', serif", cursor: "pointer", letterSpacing: "-0.02em" }}>{l}</button>
          ))}
        </div>
      )}

      {/* HERO */}
      <section id="about" style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", padding: "120px 6% 80px", overflow: "hidden" }}>
        <div className="grid-bg" />
        <div className="orb" style={{ width: 500, height: 500, background: "#7EE8A2", top: "-10%", right: "-10%", animation: "float 8s ease-in-out infinite" }} />
        <div className="orb" style={{ width: 400, height: 400, background: "#B197FC", bottom: "-15%", left: "-5%", animation: "float 10s ease-in-out infinite reverse" }} />

        <div style={{ position: "relative", zIndex: 2, maxWidth: 1280, margin: "0 auto", width: "100%" }}>
          <FadeIn>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "8px 16px", borderRadius: 100, background: "rgba(126,232,162,0.08)", border: "1px solid rgba(126,232,162,0.2)", marginBottom: 28 }}>
              <span className="status-dot" />
              <span style={{ fontSize: "0.78rem", letterSpacing: "0.08em", color: "#a8e6be", fontFamily: "'JetBrains Mono', monospace" }}>AVAILABLE FOR OPPORTUNITIES</span>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div style={{ fontSize: "0.85rem", color: "#9b98a8", letterSpacing: "0.1em", marginBottom: 12, fontFamily: "'JetBrains Mono', monospace" }}>
              {"// Hello, I'm"}
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <h1 className="hero-title" style={{ fontFamily: "'Fraunces', serif", fontSize: "clamp(3.5rem, 10vw, 8.5rem)", fontWeight: 300, lineHeight: 0.95, letterSpacing: "-0.04em", marginBottom: 8 }}>
              Aarushi
            </h1>
            <h1 className="hero-title" style={{ fontFamily: "'Fraunces', serif", fontSize: "clamp(3.5rem, 10vw, 8.5rem)", fontWeight: 300, lineHeight: 0.95, letterSpacing: "-0.04em", fontStyle: "italic", color: "#7EE8A2" }}>
              Sharma<span className="cursor-blink">_</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.35}>
            <p style={{ fontSize: "clamp(1rem, 1.4vw, 1.2rem)", color: "#9b98a8", maxWidth: 620, marginTop: 36, lineHeight: 1.65, fontWeight: 300 }}>
              Aspiring <span style={{ color: "#E8E6E1" }}>Full Stack Developer</span> building scalable web applications with the MERN stack. Currently exploring <span style={{ color: "#E8E6E1" }}>Next.js</span> and <span style={{ color: "#E8E6E1" }}>Machine Learning</span>.
            </p>
          </FadeIn>

          <FadeIn delay={0.5}>
            <div style={{ display: "flex", gap: 14, marginTop: 44, flexWrap: "wrap" }}>
              <button className="btn-primary" onClick={() => scrollTo("Projects")}>
                View Projects
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
              </button>
              <button className="btn-outline" onClick={() => scrollTo("Contact")}>Get in Touch</button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ABOUT */}
      <section style={{ padding: "100px 6%", position: "relative" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <FadeIn>
            <div className="section-label">// About Me</div>
            <h2 className="section-title" style={{ fontFamily: "'Fraunces', serif", fontSize: "clamp(2rem, 4.5vw, 3.5rem)", fontWeight: 300, lineHeight: 1.1, letterSpacing: "-0.03em", marginBottom: 60, maxWidth: 900 }}>
              A developer who loves building things that <span style={{ fontStyle: "italic", color: "#7EE8A2" }}>work beautifully.</span>
            </h2>
          </FadeIn>

          <div className="about-grid" style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 60, alignItems: "start" }}>
            <FadeIn delay={0.1}>
              <p style={{ fontSize: "1.05rem", color: "#c5c3cf", lineHeight: 1.8, marginBottom: 24, fontWeight: 300 }}>
                I'm a Full Stack Developer comfortable across the entire web stack — from building responsive React frontends to crafting efficient Node.js and FastAPI backends. I care about clean architecture, readable code, and APIs that are a pleasure to integrate with.
              </p>
              <p style={{ fontSize: "1.05rem", color: "#c5c3cf", lineHeight: 1.8, fontWeight: 300 }}>
                Currently deepening my expertise in <span style={{ color: "#7EE8A2" }}>Next.js</span> for full-stack React applications, while exploring fundamentals of <span style={{ color: "#7EE8A2" }}>Machine Learning</span> and contributing to AI-driven projects.
              </p>
            </FadeIn>

            <FadeIn delay={0.25}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                {[
                  { num: "8+", label: "Projects Built" },
                  { num: "MERN", label: "Core Stack" },
                  { num: "AI/ML", label: "Exploring" },
                  { num: "24/7", label: "Curious" },
                ].map(s => (
                  <div key={s.label} style={{ padding: 24, background: "#111118", border: "1px solid #1e1e2e", borderRadius: 14 }}>
                    <div style={{ fontFamily: "'Fraunces', serif", fontSize: "2rem", fontWeight: 500, color: "#7EE8A2", marginBottom: 4 }}>{s.num}</div>
                    <div style={{ fontSize: "0.78rem", color: "#9b98a8", letterSpacing: "0.06em", textTransform: "uppercase" }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" style={{ padding: "100px 6%", position: "relative" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <FadeIn>
            <div className="section-label">// Skills</div>
            <h2 className="section-title" style={{ fontFamily: "'Fraunces', serif", fontSize: "clamp(2rem, 4.5vw, 3.5rem)", fontWeight: 300, lineHeight: 1.1, letterSpacing: "-0.03em", marginBottom: 60 }}>
              My <span style={{ fontStyle: "italic", color: "#7EE8A2" }}>tech stack.</span>
            </h2>
          </FadeIn>

          <div className="skills-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 28 }}>
            {Object.entries(SKILLS).map(([cat, items], i) => (
              <FadeIn key={cat} delay={i * 0.08}>
                <div style={{ padding: 32, background: "#111118", border: "1px solid #1e1e2e", borderRadius: 18, height: "100%" }}>
                  <h3 style={{ fontFamily: "'Fraunces', serif", fontSize: "1.4rem", fontWeight: 500, marginBottom: 20, color: "#E8E6E1" }}>{cat}</h3>
                  <div style={{ display: "flex", flexWrap: "wrap" }}>
                    {items.map(s => <span key={s} className="skill-pill">{s}</span>)}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" style={{ padding: "100px 6%", position: "relative" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <FadeIn>
            <div className="section-label">// Projects</div>
            <h2 className="section-title" style={{ fontFamily: "'Fraunces', serif", fontSize: "clamp(2rem, 4.5vw, 3.5rem)", fontWeight: 300, lineHeight: 1.1, letterSpacing: "-0.03em", marginBottom: 60 }}>
              Things I've <span style={{ fontStyle: "italic", color: "#7EE8A2" }}>built.</span>
            </h2>
          </FadeIn>

          <div className="projects-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 24 }}>
            {PROJECTS.map((p, i) => (
              <FadeIn key={p.title} delay={(i % 2) * 0.1}>
                <div className="project-card" style={{ "--accent": p.accent }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 20 }}>
                    <div style={{ width: 44, height: 44, borderRadius: 12, background: `${p.accent}15`, border: `1px solid ${p.accent}40`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <div style={{ width: 8, height: 8, borderRadius: "50%", background: p.accent }} />
                    </div>
                    <span style={{ fontSize: "0.7rem", color: p.accent, fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.08em", padding: "4px 10px", borderRadius: 100, border: `1px solid ${p.accent}30`, background: `${p.accent}08` }}>
                      {p.tag}
                    </span>
                  </div>

                  <div style={{ fontSize: "0.78rem", color: "#9b98a8", letterSpacing: "0.06em", marginBottom: 6, textTransform: "uppercase" }}>{p.subtitle}</div>
                  <h3 style={{ fontFamily: "'Fraunces', serif", fontSize: "1.8rem", fontWeight: 500, marginBottom: 14, letterSpacing: "-0.02em" }}>{p.title}</h3>

                  <p style={{ color: "#9b98a8", lineHeight: 1.7, marginBottom: 20, fontSize: "0.95rem", fontWeight: 300, flex: 1 }}>{p.description}</p>

                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 22 }}>
                    {p.stack.map(t => (
                      <span key={t} style={{ fontSize: "0.72rem", color: "#c5c3cf", padding: "4px 10px", borderRadius: 6, background: "#1a1a26", border: "1px solid #252535", fontFamily: "'JetBrains Mono', monospace" }}>{t}</span>
                    ))}
                  </div>

                  <a href={p.github} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 8, color: "#7EE8A2", textDecoration: "none", fontSize: "0.85rem", fontWeight: 500, letterSpacing: "0.03em", marginTop: "auto" }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                    View on GitHub
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M7 17L17 7M7 7h10v10"/></svg>
                  </a>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* RESUME */}
      <section id="resume" style={{ padding: "100px 6%", position: "relative" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <FadeIn>
            <div style={{ background: "linear-gradient(135deg, #111118 0%, #0d0d14 100%)", border: "1px solid #1e1e2e", borderRadius: 24, padding: "60px 48px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 32, position: "relative", overflow: "hidden" }}>
              <div className="orb" style={{ width: 300, height: 300, background: "#7EE8A2", top: "-50%", right: "-10%" }} />
              <div style={{ position: "relative", zIndex: 2 }}>
                <div className="section-label">// Resume</div>
                <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 300, lineHeight: 1.15, letterSpacing: "-0.02em", maxWidth: 520 }}>
                  Want to know more? <span style={{ fontStyle: "italic", color: "#7EE8A2" }}>Grab my resume.</span>
                </h2>
              </div>
              <a href="/Aarushi_Sharma_Resume.pdf" download className="btn-primary" style={{ position: "relative", zIndex: 2 }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
                Download Resume
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{ padding: "100px 6% 60px", position: "relative" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <FadeIn>
            <div className="section-label">// Contact</div>
            <h2 className="section-title" style={{ fontFamily: "'Fraunces', serif", fontSize: "clamp(2rem, 4.5vw, 3.5rem)", fontWeight: 300, lineHeight: 1.1, letterSpacing: "-0.03em", marginBottom: 16 }}>
              Let's <span style={{ fontStyle: "italic", color: "#7EE8A2" }}>connect.</span>
            </h2>
            <p style={{ color: "#9b98a8", fontSize: "1.05rem", maxWidth: 540, marginBottom: 50, lineHeight: 1.7, fontWeight: 300 }}>
              Open to opportunities, collaborations, or just a good conversation about tech.
            </p>
          </FadeIn>

          <div className="contact-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
            {[
              { icon: "✉", label: "Email", value: "aarushhiisharma@gmail.com", action: copyEmail, href: null, sub: copied ? "Copied to clipboard!" : "Click to copy" },
              { icon: "in", label: "LinkedIn", value: "aarushhiisharma", href: "https://www.linkedin.com/in/aarushhiisharma/", sub: "Connect with me →" },
              { icon: "⌥", label: "GitHub", value: "aarushhii30", href: "https://github.com/aarushhii30", sub: "See my code →" },
            ].map((c, i) => (
              <FadeIn key={c.label} delay={i * 0.08}>
                <a
                  href={c.href || "#"}
                  target={c.href ? "_blank" : undefined}
                  rel={c.href ? "noopener noreferrer" : undefined}
                  className="contact-card"
                  onClick={c.action ? (e) => { e.preventDefault(); c.action(); } : undefined}
                >
                  <div style={{ width: 48, height: 48, borderRadius: 12, background: "rgba(126,232,162,0.1)", border: "1px solid rgba(126,232,162,0.25)", display: "flex", alignItems: "center", justifyContent: "center", color: "#7EE8A2", fontWeight: 600, fontFamily: "'Fraunces', serif", fontSize: "1.2rem" }}>
                    {c.icon}
                  </div>
                  <div>
                    <div style={{ fontSize: "0.72rem", color: "#9b98a8", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 6, fontFamily: "'JetBrains Mono', monospace" }}>{c.label}</div>
                    <div style={{ fontSize: "1.05rem", color: "#E8E6E1", fontWeight: 500, marginBottom: 4, wordBreak: "break-all" }}>{c.value}</div>
                    <div style={{ fontSize: "0.8rem", color: "#7EE8A2" }}>{c.sub}</div>
                  </div>
                </a>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ padding: "40px 6%", borderTop: "1px solid #1e1e2e", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
        <div style={{ fontFamily: "'Fraunces', serif", fontSize: "1.2rem", letterSpacing: "-0.02em" }}>
          aarushi<span style={{ color: "#7EE8A2" }}>.</span>
        </div>
        <p style={{ fontSize: "0.82rem", color: "#9b98a8", fontFamily: "'JetBrains Mono', monospace" }}>
          Designed & built with care · © {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
}
