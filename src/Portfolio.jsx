import { useState, useEffect, useRef } from "react";

const NAV_LINKS = ["About", "Skills", "Projects", "Resume", "Contact"];

const SKILLS = {
  Languages: ["Java", "JavaScript", "SQL", "C++"],
  Frameworks: ["React.js", "Node.js", "Express.js", "FastAPI", "Spring Boot"],
  Databases: ["MongoDB", "PostgreSQL"],
  Tools: ["Git", "GitHub"],
};

const PROJECTS = [
  {
    title: "SplitEase",
    subtitle: "Expense Sharing App",
    description:
      "A full-stack MERN application for seamless group expense tracking and splitting. Features JWT-based auth, real-time balance calculations, and multi-user group management.",
    stack: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT"],
    github: "https://github.com/aarushhii30",
    accent: "#7EE8A2",
  },
  {
    title: "O2C System",
    subtitle: "Order-to-Cash Management",
    description:
      "A robust Node.js backend system managing the complete invoice and payment lifecycle — from order creation through cash collection — with clean REST APIs.",
    stack: ["Node.js", "Express.js", "REST APIs", "PostgreSQL"],
    github: "https://github.com/aarushhii30",
    accent: "#80D0C7",
  },
  {
    title: "Hospital MS",
    subtitle: "Hospital Management System",
    description:
      "FastAPI-powered backend for hospital operations, managing patients, doctors, appointments, and records with a PostgreSQL relational schema.",
    stack: ["FastAPI", "PostgreSQL", "Python", "REST APIs"],
    github: "https://github.com/aarushhii30",
    accent: "#F3A683",
  },
];

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
}

function FadeIn({ children, delay = 0, className = "" }) {
  const [ref, inView] = useInView();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(32px)",
        transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
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
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: "#0A0A0F", color: "#E8E6E1", minHeight: "100vh" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,700;1,9..144,300&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #0A0A0F; }
        ::-webkit-scrollbar-thumb { background: #2a2a3a; border-radius: 2px; }
        .nav-link { position: relative; color: #9b98a8; font-size: 0.85rem; letter-spacing: 0.06em; text-transform: uppercase; cursor: pointer; transition: color 0.3s; padding: 4px 0; border: none; background: none; }
        .nav-link::after { content: ''; position: absolute; bottom: -2px; left: 0; width: 0; height: 1px; background: #7EE8A2; transition: width 0.3s; }
        .nav-link:hover, .nav-link.active { color: #E8E6E1; }
        .nav-link:hover::after, .nav-link.active::after { width: 100%; }
        .skill-pill { display: inline-block; padding: 6px 14px; border-radius: 100px; font-size: 0.78rem; font-weight: 500; letter-spacing: 0.03em; border: 1px solid rgba(126,232,162,0.25); background: rgba(126,232,162,0.06); color: #a8e6be; margin: 4px; transition: all 0.2s; cursor: default; }
        .skill-pill:hover { background: rgba(126,232,162,0.15); border-color: rgba(126,232,162,0.5); }
        .project-card { background: #111118; border: 1px solid #1e1e2e; border-radius: 16px; overflow: hidden; transition: transform 0.35s ease, border-color 0.35s ease, box-shadow 0.35s ease; }
        .project-card:hover { transform: translateY(-6px); box-shadow: 0 24px 60px rgba(0,0,0,0.5); }
        .btn-primary { display: inline-flex; align-items: center; gap: 8px; padding: 12px 28px; border-radius: 100px; background: #7EE8A2; color: #0A0A0F; font-weight: 600; font-size: 0.85rem; letter-spacing: 0.04em; cursor: pointer; border: none; transition: all 0.25s; text-decoration: none; }
        .btn-primary:hover { background: #a8f0c0; transform: translateY(-1px); box-shadow: 0 8px 24px rgba(126,232,162,0.35); }
        .btn-outline { display: inline-flex; align-items: center; gap: 8px; padding: 11px 24px; border-radius: 100px; background: transparent; color: #7EE8A2; font-weight: 500; font-size: 0.82rem; letter-spacing: 0.04em; cursor: pointer; border: 1px solid rgba(126,232,162,0.4); transition: all 0.25s; text-decoration: none; }
        .btn-outline:hover { background: rgba(126,232,162,0.1); border-color: #7EE8A2; transform: translateY(-1px); }
        .contact-card { background: #111118; border: 1px solid #1e1e2e; border-radius: 14px; padding: 20px 24px; display: flex; align-items: center; gap: 16px; transition: all 0.25s; cursor: pointer; text-decoration: none; }
        .contact-card:hover { border-color: rgba(126,232,162,0.4); background: rgba(126,232,162,0.04); transform: translateY(-2px); }
        .section-label { font-size: 0.72rem; letter-spacing: 0.15em; text-transform: uppercase; color: #7EE8A2; font-weight: 500; margin-bottom: 12px; }
        .mobile-menu { position: fixed; inset: 0; background: rgba(10,10,15,0.97); z-index: 99; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 32px; }
        @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-12px)} }
        @keyframes spin-slow { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
        .cursor-blink { display: inline-block; animation: blink 1.1s step-end infinite; }
        .orb { position: absolute; border-radius: 50%; filter: blur(80px); opacity: 0.12; pointer-events: none; }
      `}</style>

      {/* NAV */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
        padding: "20px 40px",
        background: scrolled ? "rgba(10,10,15,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid #1e1e2e" : "1px solid transparent",
        transition: "all 0.4s ease",
        display: "flex", alignItems: "center", justifyContent: "space-between"
      }}>
        <span style={{ fontFamily: "'Fraunces', serif", fontSize: "1.3rem", color: "#E8E6E1", letterSpacing: "-0.02em" }}>
          aarushi<span style={{ color: "#7EE8A2" }}>.</span>
        </span>
        <div style={{ display: "flex", gap: 32 }} className="desktop-nav">
          {NAV_LINKS.map(l => (
            <button key={l} className={`nav-link ${active === l ? "active" : ""}`} onClick={() => scrollTo(l)}>{l}</button>
          ))}
        </div>
        <button onClick={() => setMenuOpen(!menuOpen)} style={{ background: "none", border: "none", cursor: "pointer", color: "#E8E6E1", display: "none" }} id="hamburger">
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><rect y="4" width="22" height="1.5" rx="1" fill="currentColor"/><rect y="10" width="22" height="1.5" rx="1" fill="currentColor"/><rect y="16" width="22" height="1.5" rx="1" fill="currentColor"/></svg>
        </button>
      </nav>

      {menuOpen && (
        <div className="mobile-menu">
          <button onClick={() => setMenuOpen(false)} style={{ position: "absolute", top: 24, right: 32, background: "none", border: "none", color: "#9b98a8", cursor: "pointer", fontSize: "1.5rem" }}>✕</button>
          {NAV_LINKS.map(l => (
            <button key={l} onClick={() => scrollTo(l)} style={{ background: "none", border: "none", color: "#E8E6E1", fontSize: "1.6rem", fontFamily: "'Fraunces', serif", cursor: "pointer", letterSpacing: "-0.02em" }}>{l}</button>
          ))}
        </div>
      )}

      {/* HERO */}
      <section style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "120px 40px 80px", position: "relative", overflow: "hidden" }}>
        <div className="orb" style={{ width: 600, height: 600, background: "#7EE8A2", top: -100, right: -200 }} />
        <div className="orb" style={{ width: 400, height: 400, background: "#80D0C7", bottom: -100, left: -100 }} />
        <div style={{ maxWidth: 900, width: "100%", position: "relative", zIndex: 1 }}>
          <div style={{ marginBottom: 20 }}>
            <span style={{ fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#7EE8A2", fontWeight: 500 }}>
              Hello, I'm
            </span>
          </div>
          <h1 style={{ fontFamily: "'Fraunces', serif", fontSize: "clamp(3rem, 8vw, 6.5rem)", fontWeight: 300, lineHeight: 1.05, letterSpacing: "-0.03em", marginBottom: 24, color: "#E8E6E1" }}>
            Aarushi<br />
            <span style={{ color: "#7EE8A2", fontStyle: "italic" }}>Sharma</span>
            <span className="cursor-blink" style={{ color: "#7EE8A2", fontSize: "0.6em", marginLeft: 4 }}>_</span>
          </h1>
          <p style={{ fontSize: "1.05rem", color: "#9b98a8", maxWidth: 520, lineHeight: 1.75, marginBottom: 40 }}>
            Aspiring Full Stack Developer — building scalable web applications using the <span style={{ color: "#E8E6E1" }}>MERN stack</span>. Currently exploring <span style={{ color: "#E8E6E1" }}>Next.js</span> & <span style={{ color: "#E8E6E1" }}>Machine Learning</span>.
          </p>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <button className="btn-primary" onClick={() => scrollTo("Projects")}>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              View Projects
            </button>
            <button className="btn-outline" onClick={() => scrollTo("Contact")}>Get in Touch</button>
          </div>
        </div>
        {/* Decorative ring */}
        <div style={{ position: "absolute", right: "8%", top: "50%", transform: "translateY(-50%)", width: 280, height: 280, border: "1px solid rgba(126,232,162,0.1)", borderRadius: "50%", animation: "spin-slow 20s linear infinite", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ width: 200, height: 200, border: "1px solid rgba(128,208,199,0.12)", borderRadius: "50%", animation: "spin-slow 15s linear infinite reverse" }}>
            <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <div style={{ width: 80, height: 80, background: "rgba(126,232,162,0.08)", borderRadius: "50%", border: "1px solid rgba(126,232,162,0.2)" }} />
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" style={{ padding: "100px 40px", maxWidth: 1100, margin: "0 auto" }}>
        <FadeIn>
          <p className="section-label">About Me</p>
          <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: "clamp(2rem, 4vw, 3.2rem)", fontWeight: 300, letterSpacing: "-0.025em", marginBottom: 40, lineHeight: 1.2 }}>
            A developer who loves building<br />
            <span style={{ fontStyle: "italic", color: "#7EE8A2" }}>things that work beautifully.</span>
          </h2>
        </FadeIn>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48 }}>
          <FadeIn delay={0.1}>
            <p style={{ color: "#9b98a8", lineHeight: 1.9, fontSize: "0.95rem" }}>
              I'm a Full Stack Developer comfortable across the entire web stack — from building responsive React frontends to crafting efficient Node.js and FastAPI backends. I care about clean architecture, readable code, and building APIs that are a pleasure to integrate with.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p style={{ color: "#9b98a8", lineHeight: 1.9, fontSize: "0.95rem" }}>
              Currently deepening my expertise in <span style={{ color: "#E8E6E1" }}>Next.js</span> for full-stack React applications, while also exploring the fundamentals of <span style={{ color: "#E8E6E1" }}>Machine Learning</span>. I'm always looking for the next thing to build and the next skill to acquire.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" style={{ padding: "80px 40px", background: "#0d0d14", borderTop: "1px solid #1a1a28", borderBottom: "1px solid #1a1a28" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <FadeIn>
            <p className="section-label">Skills</p>
            <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 300, letterSpacing: "-0.025em", marginBottom: 60 }}>
              My Tech Stack
            </h2>
          </FadeIn>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 40 }}>
            {Object.entries(SKILLS).map(([cat, items], i) => (
              <FadeIn key={cat} delay={i * 0.1}>
                <p style={{ fontSize: "0.72rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#5a5870", fontWeight: 600, marginBottom: 16 }}>{cat}</p>
                <div>{items.map(s => <span key={s} className="skill-pill">{s}</span>)}</div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" style={{ padding: "100px 40px", maxWidth: 1100, margin: "0 auto" }}>
        <FadeIn>
          <p className="section-label">Projects</p>
          <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 300, letterSpacing: "-0.025em", marginBottom: 60 }}>
            Things I've Built
          </h2>
        </FadeIn>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
          {PROJECTS.map((p, i) => (
            <FadeIn key={p.title} delay={i * 0.12}>
              <div className="project-card" style={{ height: "100%" }}>
                <div style={{ height: 4, background: `linear-gradient(90deg, ${p.accent}40, ${p.accent})` }} />
                <div style={{ padding: "28px 28px 24px" }}>
                  <div style={{ marginBottom: 20 }}>
                    <p style={{ fontSize: "0.7rem", letterSpacing: "0.12em", textTransform: "uppercase", color: p.accent, marginBottom: 6, opacity: 0.8 }}>{p.subtitle}</p>
                    <h3 style={{ fontFamily: "'Fraunces', serif", fontSize: "1.5rem", fontWeight: 300, letterSpacing: "-0.02em", color: "#E8E6E1" }}>{p.title}</h3>
                  </div>
                  <p style={{ color: "#7a7890", fontSize: "0.88rem", lineHeight: 1.8, marginBottom: 24 }}>{p.description}</p>
                  <div style={{ marginBottom: 24 }}>
                    {p.stack.map(t => (
                      <span key={t} style={{ display: "inline-block", padding: "4px 10px", background: "#0A0A0F", border: "1px solid #252535", borderRadius: "6px", fontSize: "0.72rem", color: "#7a7890", margin: "3px 3px 3px 0", letterSpacing: "0.02em" }}>{t}</span>
                    ))}
                  </div>
                  <a href={p.github} target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ fontSize: "0.78rem", padding: "8px 18px" }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                    GitHub
                  </a>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* RESUME */}
      <section id="resume" style={{ padding: "80px 40px", background: "#0d0d14", borderTop: "1px solid #1a1a28", borderBottom: "1px solid #1a1a28" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 32 }}>
          <FadeIn>
            <p className="section-label">Resume</p>
            <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 300, letterSpacing: "-0.025em" }}>
              Want to know more?<br />
              <span style={{ fontStyle: "italic", color: "#7EE8A2" }}>Grab my resume.</span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.15}>
  <a 
    href="https://drive.google.com/uc?export=download&id=1nQAByLUXzIuO-phME6_EVQLmuUkuTUfa"
    target="_blank"
    rel="noopener noreferrer"
    className="btn-primary"
    style={{ fontSize: "0.9rem", padding: "14px 32px" }}
  >
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M8 1v9M4 7l4 4 4-4M2 13h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
    Download Resume
  </a>
</FadeIn>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{ padding: "100px 40px", maxWidth: 1100, margin: "0 auto" }}>
        <FadeIn>
          <p className="section-label">Contact</p>
          <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 300, letterSpacing: "-0.025em", marginBottom: 16 }}>
            Let's connect
          </h2>
          <p style={{ color: "#7a7890", marginBottom: 48, fontSize: "0.95rem" }}>Open to opportunities, collaborations, or just a good conversation.</p>
        </FadeIn>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 16, maxWidth: 700 }}>
          {[
            {
              icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>,
              label: "Email",
              value: "aarushhiisharma@gmail.com",
              action: copyEmail,
              href: null,
              sub: copied ? "Copied!" : "Click to copy"
            },
            {
              icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>,
              label: "LinkedIn",
              value: "aarushhiisharma",
              action: null,
              href: "https://www.linkedin.com/in/aarushhiisharma/",
              sub: "Connect with me"
            },
            {
              icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>,
              label: "GitHub",
              value: "aarushhii30",
              action: null,
              href: "https://github.com/aarushhii30",
              sub: "See my code"
            }
          ].map((c, i) => (
            <FadeIn key={c.label} delay={i * 0.1}>
              <a
                href={c.href || "#"}
                target={c.href ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="contact-card"
                onClick={c.action ? (e) => { e.preventDefault(); c.action(); } : undefined}
                style={{ textDecoration: "none" }}
              >
                <div style={{ width: 42, height: 42, borderRadius: 10, background: "rgba(126,232,162,0.08)", border: "1px solid rgba(126,232,162,0.15)", display: "flex", alignItems: "center", justifyContent: "center", color: "#7EE8A2", flexShrink: 0 }}>
                  {c.icon}
                </div>
                <div style={{ overflow: "hidden" }}>
                  <p style={{ fontSize: "0.72rem", color: "#5a5870", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 3 }}>{c.label}</p>
                  <p style={{ color: "#E8E6E1", fontSize: "0.88rem", fontWeight: 500, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{c.value}</p>
                  <p style={{ fontSize: "0.72rem", color: "#7EE8A2", marginTop: 2 }}>{c.sub}</p>
                </div>
              </a>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ borderTop: "1px solid #1a1a28", padding: "32px 40px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
        <span style={{ fontFamily: "'Fraunces', serif", fontSize: "1rem", color: "#3a3850", letterSpacing: "-0.01em" }}>aarushi<span style={{ color: "#2a4a36" }}>.</span></span>
        <p style={{ color: "#3a3850", fontSize: "0.78rem" }}>Designed & built with care · {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}
