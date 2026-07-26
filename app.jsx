const e = React.createElement;
const { useEffect, useState, useRef, useCallback } = React;

/* ─────────────────────────── Data ─────────────────────────── */

const roles = [
  "Software Engineer",
  "Full-Stack Developer",
  "SDE Intern @ Renu Electronics",
  "Real-Time Systems Enthusiast",
];

const projects = [
  {
    id: "cryuze",
    title: "Cryuze",
    tag: "Service Marketplace",
    desc: "A full-stack MERN marketplace connecting users with services — secure auth, live chat, and payments, built to handle real booking workflows end to end.",
    highlights: ["JWT Auth & RBAC", "Razorpay Payments", "Socket.IO Live Chat", "Responsive Tailwind UI"],
    stack: ["React", "Node.js", "Express", "MongoDB", "Socket.IO", "Razorpay"],
    href: "https://github.com/ritik190803/CRYUZE",
    span: "lg:col-span-2 lg:row-span-2",
    accent: "#00d4ff",
  },
  {
    id: "qate",
    title: "QATE",
    tag: "Research · Scheduling",
    desc: "Quality-Aware Task Execution — a reward-driven scheduling framework for heterogeneous real-time systems, simulating task assignment across cores for higher throughput.",
    highlights: ["Deadline-Critical Scheduling", "Energy-Efficiency Optimization", "Throughput Analysis"],
    stack: ["Python"],
    href: "https://github.com/ritik190803/QATE",
    span: "lg:col-span-2",
    accent: "#7c5cfc",
  },
  {
    id: "fakecurrency",
    title: "Fake Currency Detection",
    tag: "Computer Vision",
    desc: "An ML pipeline that flags counterfeit ₹500 notes by comparing structural similarity against genuine reference images.",
    highlights: ["Image Comparison", "SSIM Analysis", "OpenCV Pipeline"],
    stack: ["Python", "OpenCV", "ML"],
    href: "https://github.com/ritik190803/Fake-Currency-Detection",
    span: "",
    accent: "#34d399",
  },
  {
    id: "bezier",
    title: "Bézier Curve Simulation",
    tag: "Physics · Visualization",
    desc: "A playful experiment rendering cubic Bézier curves as dynamic, springy ropes — with auto-simulation and a precise manual 'architect' mode.",
    highlights: ["Physics-Based Motion", "Canvas Rendering", "Interactive Controls"],
    stack: ["JavaScript", "HTML5 Canvas"],
    href: "https://github.com/ritik190803/Flam-B-zier-Curve-Simulation-Project",
    span: "",
    accent: "#f59e0b",
  },
  {
    id: "shoesui",
    title: "Shoes UI Template",
    tag: "Frontend Template",
    desc: "An early-stage shoe-shop storefront focused on a clean, user-friendly layout for showcasing footwear products.",
    highlights: ["Component Library", "Product Grid", "Responsive Layout"],
    stack: ["React"],
    href: "https://github.com/ritik190803/Shoes-Ui-Template-react",
    span: "",
    accent: "#f472b6",
  },
  {
    id: "contactui",
    title: "Contact UI React",
    tag: "Form System",
    desc: "A reusable React contact form for collecting and storing name, email, and message data with a clean, minimal layout.",
    highlights: ["Form Validation", "Clean UX", "Reusable Components"],
    stack: ["React"],
    href: "https://github.com/ritik190803/Contact_UI_React",
    span: "",
    accent: "#14b8a6",
  },
];

const techStack = [
  { category: "Languages", items: ["Java", "Python", "JavaScript", "TypeScript", "SQL", "C/C++"], icon: ">" },
  { category: "Web Dev", items: ["React", "Angular", "Node.js", "Express.js", "Tailwind CSS"], icon: "}" },
  { category: "Cloud & Streaming", items: ["AWS", "AWS Kinesis", "WebRTC", "FFmpeg"], icon: "~" },
  { category: "DevOps & Tools", items: ["Docker", "Git", "GitLab", "GitHub", "Linux"], icon: "&" },
  { category: "Core CS", items: ["DSA", "OOP", "Operating Systems", "Computer Networks", "DBMS"], icon: "#" },
];

const dsaTopics = ["Arrays", "Trees", "Graphs", "DP", "Binary Search", "Greedy", "Recursion"];

const experience = {
  company: "Renu Electronics, Pune",
  role: "Software Development Engineer Intern",
  period: "Jan 2026 — Present",
  points: [
    "Developing a CCTV web application using the MERN stack with AWS Kinesis for cloud-based real-time video streaming and monitoring.",
    "Building scalable deployment workflows with Docker, Docker Hub, and Ubuntu-based Linux environments.",
    "Contributing to low-latency media pipelines using WebRTC, AWS Kinesis, and FFmpeg for real-time video transmission.",
    "Managing version control and collaborative development via Git, GitLab, and GitHub in production-level projects.",
  ],
};

const achievements = [
  { label: "DSA Problems Solved", value: "400+", detail: "Across LeetCode and CodeChef" },
  { label: "JEE Mains 2022", value: "AIR 23,853", detail: "97.4 percentile — top 2.5% nationwide" },
  { label: "NTSE", value: "Qualified", detail: "National Talent Search Examination" },
  { label: "Science Olympiad", value: "Qualified", detail: "National-level science olympiad" },
];

const responsibilities = [
  { title: "Health Club Coordinator", org: "IIIT Guwahati", desc: "Coordinated health-related events and workshops for the Student Welfare Board." },
  { title: "Event Management Core Team", org: "Yuvaan — Cultural Fest", desc: "Planned and executed major fest events, including Mock CID and Whimsical Debates." },
];

const contacts = [
  { label: "GitHub", href: "https://github.com/ritik190803" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/ritik-kumar-singh-50b0b9265/" },
  { label: "LeetCode", href: "https://leetcode.com/u/ritiksinghchauhan101/" },
  { label: "CodeChef", href: "https://www.codechef.com/users/wisdom_hill_88" },
];

const terminalCommands = {
  help: { output: [
    "Available commands:",
    "  about        — Who I am",
    "  experience   — Current role",
    "  skills       — Technical stack",
    "  projects     — Featured projects",
    "  achievements — Milestones",
    "  contact      — Get in touch",
    "  clear        — Clear terminal",
    "  whoami       — Guess what",
  ]},
  about: { output: [
    "Ritik Kumar Singh",
    "B.Tech CSE @ IIIT Guwahati (Expected 2026)",
    "Full-stack developer working on real-time video systems.",
    "400+ DSA problems · MERN · AWS Kinesis · WebRTC",
  ]},
  experience: { output: [
    "Renu Electronics, Pune — SDE Intern (Jan 2026 – Present)",
    "Building a CCTV web app: MERN + AWS Kinesis + WebRTC + FFmpeg",
    "Docker-based deployment workflows on Linux",
  ]},
  skills: { output: [
    "Languages:  Java, Python, JavaScript, TypeScript, SQL, C/C++",
    "Web:        React, Angular, Node.js, Express.js, Tailwind CSS",
    "Cloud:      AWS, AWS Kinesis, WebRTC, FFmpeg",
    "DevOps:     Docker, Git, GitLab, GitHub, Linux",
    "Core:       DSA, OOP, OS, Computer Networks, DBMS",
  ]},
  projects: { output: [
    "Cryuze         — Service Marketplace (MERN, Socket.IO, Razorpay)",
    "QATE           — Real-Time Task Scheduling Research (Python)",
    "Fake Currency Detection — Computer Vision (Python, OpenCV)",
    "Bézier Curve Simulation — Physics Visualization (JS, Canvas)",
  ]},
  achievements: { output: [
    "400+ problems solved — LeetCode & CodeChef",
    "JEE Mains 2022 — AIR 23,853 (97.4 percentile)",
    "NTSE & Science Olympiad qualifier",
  ]},
  contact: { output: [
    "GitHub:   https://github.com/ritik190803",
    "LinkedIn: https://linkedin.com/in/ritik-kumar-singh-50b0b9265",
    "LeetCode: https://leetcode.com/u/ritiksinghchauhan101",
    "CodeChef: https://codechef.com/users/wisdom_hill_88",
    "Email:    ritiksingh1915@gmail.com",
    "Phone:    +91-6203172327",
  ]},
  whoami: { output: [
    "> ritik",
    "",
    "A developer who ships real-time systems, not just demos.",
    "Thinks in pipelines. Debugs with patience.",
  ]},
};

/* ─────────────────────────── Hooks ─────────────────────────── */

function useTypewriter(words, typingSpeed, deletingSpeed, pauseTime) {
  typingSpeed = typingSpeed || 70;
  deletingSpeed = deletingSpeed || 38;
  pauseTime = pauseTime || 1300;
  const [text, setText] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIdx];
    let timeout;
    if (!isDeleting && text === current) {
      timeout = setTimeout(() => setIsDeleting(true), pauseTime);
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setWordIdx((idx) => (idx + 1) % words.length);
    } else {
      timeout = setTimeout(() => {
        setText(isDeleting ? current.slice(0, text.length - 1) : current.slice(0, text.length + 1));
      }, isDeleting ? deletingSpeed : typingSpeed);
    }
    return () => clearTimeout(timeout);
  }, [text, wordIdx, isDeleting]);

  return text;
}

function useInView() {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (typeof window === "undefined" || typeof window.IntersectionObserver === "undefined") {
      setIsVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return [ref, isVisible];
}

function useCountUp(target, duration) {
  duration = duration || 1100;
  const [ref, isVisible] = useInView();
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    let frameId, startTime;
    const step = (ts) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      setCount(Math.floor(target * progress));
      if (progress < 1) frameId = window.requestAnimationFrame(step);
    };
    frameId = window.requestAnimationFrame(step);
    return () => window.cancelAnimationFrame(frameId);
  }, [isVisible]);

  return [ref, count];
}

/* ─────────────────────────── Shared bits ─────────────────────────── */

function ScrollReveal(props) {
  const [ref, isVisible] = useInView();
  const className = props.className || "";
  const delay = props.delay || 0;
  const rotate = props.rotate || false;
  return e("div", {
    ref: ref,
    className: `reveal ${isVisible ? "is-visible" : ""} ${rotate ? "reveal-tilt" : ""} ${className}`,
    style: { transitionDelay: `${delay}s` },
  }, props.children);
}

function SectionLabel(props) {
  return e("p", { className: "font-mono text-xs font-semibold uppercase tracking-[0.25em] text-cyan" }, props.children);
}

function TiltCard(props) {
  const ref = useRef(null);
  const handleMouseMove = (ev) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = ev.clientX - rect.left;
    const y = ev.clientY - rect.top;
    const cx = rect.width / 2, cy = rect.height / 2;
    const rotateX = ((y - cy) / cy) * -6;
    const rotateY = ((x - cx) / cx) * 6;
    ref.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.01,1.01,1.01)`;
  };
  const handleMouseLeave = () => {
    if (!ref.current) return;
    ref.current.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)";
  };
  return e("div", {
    ref: ref,
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
    className: `tilt-card ${props.className || ""}`,
  }, props.children);
}

/* Particle field — ambient canvas background for the hero */

function ParticleField() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animId, particles = [];

    const initParticles = () => {
      const count = Math.max(20, Math.min(70, Math.floor((canvas.width * canvas.height) / 16000)));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        r: Math.random() * 1.4 + 0.5,
      }));
    };

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p, i) => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(0, 212, 255, 0.22)";
        ctx.fill();
        for (let j = i + 1; j < particles.length; j++) {
          const dx = p.x - particles[j].x, dy = p.y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(0, 212, 255, ${(0.06 * (1 - dist / 120)).toFixed(3)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      });
      animId = requestAnimationFrame(animate);
    };

    resize();
    animate();
    window.addEventListener("resize", resize);
    return () => { cancelAnimationFrame(animId); window.removeEventListener("resize", resize); };
  }, []);

  return e("canvas", { ref: canvasRef, className: "fixed inset-0 pointer-events-none z-0", style: { opacity: 0.5 } });
}

/* Ambient "live" badge — a nod to Ritik's real-time video streaming work */

function FeedBadge() {
  const [uptime, setUptime] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setUptime((u) => u + 1), 1000);
    return () => clearInterval(t);
  }, []);
  const mins = String(Math.floor(uptime / 60)).padStart(2, "0");
  const secs = String(uptime % 60).padStart(2, "0");
  return e("div", { className: "inline-flex items-center gap-2 rounded-full border border-[rgba(255,255,255,0.08)] bg-white/[0.02] px-3 py-1.5 font-mono text-[11px] text-dim" },
    e("span", { className: "h-1.5 w-1.5 rounded-full bg-red-500 rec-dot" }),
    e("span", { className: "text-muted" }, "LIVE"),
    e("span", { className: "text-dim" }, "·"),
    e("span", null, `session ${mins}:${secs}`)
  );
}

/* ─────────────────────────── Nav / progress ─────────────────────────── */

function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return e("div", { className: "fixed top-0 left-0 right-0 z-[60] h-[2px] bg-[rgba(255,255,255,0.04)]" },
    e("div", { className: "h-full scroll-progress", style: { width: `${progress}%` } })
  );
}

function BackToTop() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return e("button", {
    onClick: () => window.scrollTo({ top: 0, behavior: "smooth" }),
    className: `fixed bottom-8 right-8 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-cyan/10 text-cyan ring-1 ring-cyan/30 transition-all duration-500 hover:bg-cyan/20 hover:shadow-[0_0_20px_rgba(0,212,255,0.15)] ${visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0 pointer-events-none"}`,
    "aria-label": "Back to top",
  }, e("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" },
    e("polyline", { points: "18 15 12 9 6 15" })
  ));
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = ["About", "Experience", "Projects", "Skills", "Achievements", "Terminal", "Contact"];
  const scrollTo = (id) => {
    setMenuOpen(false);
    const el = document.getElementById(id.toLowerCase());
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return e("nav", { className: `fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-space/85 border-b border-[rgba(255,255,255,0.05)] backdrop-blur-xl" : "bg-transparent"}` },
    e("div", { className: "mx-auto flex h-14 max-w-6xl items-center justify-between px-5" },
      e("button", {
        onClick: () => window.scrollTo({ top: 0, behavior: "smooth" }),
        className: "font-mono text-sm font-bold tracking-wider text-cyan",
      }, "ritik", e("span", { className: "text-muted" }, ".dev")),
      e("div", { className: "hidden items-center gap-1 lg:flex" },
        links.map((l) => e("button", {
          key: l,
          onClick: () => scrollTo(l),
          className: "rounded-lg px-3 py-1.5 font-mono text-[13px] text-muted transition hover:bg-white/[0.04] hover:text-ink",
        }, l))
      ),
      e("button", {
        onClick: () => setMenuOpen(!menuOpen),
        className: "relative z-50 grid h-8 w-8 place-items-center text-muted lg:hidden",
      },
        e("span", { className: `block h-0.5 w-5 rounded bg-current transition-all ${menuOpen ? "translate-y-[3.5px] rotate-45" : ""}` }),
        e("span", { className: `mt-[3px] block h-0.5 w-5 rounded bg-current transition-all ${menuOpen ? "opacity-0" : ""}` }),
        e("span", { className: `mt-[3px] block h-0.5 w-5 rounded bg-current transition-all ${menuOpen ? "-translate-y-[3.5px] -rotate-45" : ""}` })
      )
    ),
    menuOpen && e("div", { className: "absolute inset-x-0 top-14 border-b border-[rgba(255,255,255,0.05)] bg-space/95 backdrop-blur-xl lg:hidden" },
      e("div", { className: "flex flex-col gap-1 px-5 py-4" },
        links.map((l) => e("button", {
          key: l,
          onClick: () => scrollTo(l),
          className: "rounded-lg px-3 py-2.5 text-left font-mono text-sm text-muted transition hover:bg-white/[0.04] hover:text-ink",
        }, l))
      )
    )
  );
}

/* ─────────────────────────── Hero ─────────────────────────── */

function Hero() {
  const typedRole = useTypewriter(roles);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => setShowCursor((v) => !v), 520);
    return () => clearInterval(interval);
  }, []);

  return e("section", { className: "relative z-10 flex min-h-screen items-center px-5" },
    e(ParticleField, null),
    e("div", { className: "float-glow pointer-events-none absolute -top-40 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-cyan/5 blur-[120px] opacity-30" }),
    e("div", { className: "hero-orb hero-orb-a pointer-events-none absolute left-[12%] top-[24%] h-24 w-24 rounded-full bg-cyan/10 blur-3xl" }),
    e("div", { className: "hero-orb hero-orb-b pointer-events-none absolute right-[10%] top-[18%] h-28 w-28 rounded-full bg-purple/10 blur-3xl" }),
    e("div", { className: "mx-auto w-full max-w-6xl pt-20" },
      e("div", { className: "reveal is-visible flex items-center gap-3" },
        e("p", { className: "font-mono text-sm text-cyan/80" }, e("span", { className: "text-muted" }, "$"), " whoami"),
        e(FeedBadge, null)
      ),
      e("h1", { className: "hero-headline mt-4 font-display text-[clamp(2.1rem,6.6vw,4.6rem)] font-bold leading-[0.95] tracking-tight" },
        "Ritik Kumar Singh —", e("br", null),
        e("span", { className: "hero-gradient text-transparent bg-clip-text bg-gradient-to-r from-cyan via-purple to-cyan" }, "Engineering Real-Time Systems.")
      ),
      e("div", { className: "reveal is-visible mt-5 flex items-center gap-2 font-mono text-lg sm:text-xl", style: { transitionDelay: "0.08s" } },
        e("span", { className: "text-muted" }, ">"),
        e("span", { className: "min-h-[1.75rem] text-ink" }, typedRole),
        e("span", { className: `inline-block h-5 w-[2px] bg-cyan transition-opacity duration-150 ${showCursor ? "opacity-100" : "opacity-0"}` })
      ),
      e("p", { className: "reveal is-visible mt-6 max-w-xl leading-relaxed text-muted", style: { transitionDelay: "0.16s" } },
        "Final-year CSE student at IIIT Guwahati, currently building a real-time CCTV streaming platform at Renu Electronics with the MERN stack, AWS Kinesis, and WebRTC."
      ),
      e("div", { className: "reveal is-visible mt-8 flex flex-wrap gap-3", style: { transitionDelay: "0.24s" } },
        e("a", { href: "#projects", className: "inline-flex items-center gap-2 rounded-lg bg-cyan/10 px-5 py-2.5 font-mono text-sm font-medium text-cyan ring-1 ring-cyan/30 transition-all hover:bg-cyan/20 hover:ring-cyan/50 hover:shadow-[0_0_20px_rgba(0,212,255,0.15)]" },
          e("span", { className: "text-muted" }, "$"), " view_projects"),
        e("a", { href: "mailto:ritiksingh1915@gmail.com", className: "inline-flex items-center gap-2 rounded-lg border border-[rgba(255,255,255,0.08)] bg-white/[0.03] px-5 py-2.5 font-mono text-sm font-medium text-muted transition-all hover:border-[rgba(255,255,255,0.15)] hover:bg-white/[0.06] hover:text-ink" },
          e("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" },
            e("rect", { x: "2", y: "4", width: "20", height: "16", rx: "2" }),
            e("polyline", { points: "22 6 12 13 2 6" })
          ), "get in touch")
      ),
      e("div", { className: "reveal is-visible mt-16 flex items-center gap-3 text-xs text-dim", style: { transitionDelay: "0.32s" } },
        e("span", { className: "h-px w-8 bg-[rgba(255,255,255,0.06)]" }),
        e("span", { className: "font-mono tracking-wider uppercase soft-pulse" }, "Explore below"),
        e("span", { className: "h-px w-8 bg-[rgba(255,255,255,0.06)]" })
      )
    )
  );
}

/* ─────────────────────────── About ─────────────────────────── */

function StatsCard(props) {
  return e("div", { className: "group rounded-xl border border-[rgba(255,255,255,0.05)] bg-card/50 p-6 transition-all hover:border-cyan/20 hover:bg-card/80 hover:shadow-[0_0_30px_rgba(0,212,255,0.05)]" },
    e("p", { className: "text-2xl" }, props.icon),
    e("p", { className: "mt-3 font-display text-2xl font-bold" }, props.value),
    e("p", { className: "mt-1 text-sm text-muted" }, props.label)
  );
}

function AboutSection() {
  const stats = [
    { icon: "🎓", label: "Education", value: "IIIT Guwahati" },
    { icon: "💻", label: "DSA Problems", value: "400+" },
    { icon: "📡", label: "Current Focus", value: "Real-Time Streaming" },
    { icon: "🏆", label: "JEE Mains '22", value: "Top 2.5%" },
  ];
  return e("section", { id: "about", className: "py-24 md:py-32" },
    e("div", { className: "mx-auto max-w-6xl px-5" },
      e(ScrollReveal, null,
        e(SectionLabel, null, "About"),
        e("h2", { className: "mt-2 font-display text-3xl font-bold md:text-4xl" }, "Who I Am"),
        e("p", { className: "mt-4 max-w-2xl leading-relaxed text-muted" },
          "I'm a final-year Computer Science and Engineering student at IIIT Guwahati, drawn to systems where correctness and latency both matter — real-time video pipelines, scheduling frameworks, and full-stack products people actually use. I like taking something from a rough idea to a working, deployed system."
        )
      ),
      e("div", { className: "mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4" },
        stats.map((s, i) => e(ScrollReveal, { key: s.label, delay: 0.06 * i }, e(StatsCard, s)))
      )
    )
  );
}

/* ─────────────────────────── Experience ─────────────────────────── */

function ExperienceSection() {
  return e("section", { id: "experience", className: "py-24 md:py-32" },
    e("div", { className: "mx-auto max-w-6xl px-5" },
      e(ScrollReveal, null,
        e(SectionLabel, null, "Experience"),
        e("h2", { className: "mt-2 font-display text-3xl font-bold md:text-4xl" }, "Where I'm Working")
      ),
      e(ScrollReveal, { delay: 0.1 },
        e("div", { className: "hover-card glow-border mt-8 rounded-2xl border border-[rgba(255,255,255,0.05)] bg-card/40 p-7 md:p-9" },
          e("div", { className: "flex flex-wrap items-start justify-between gap-3" },
            e("div", null,
              e("h3", { className: "font-display text-2xl font-bold" }, experience.role),
              e("p", { className: "mt-1 font-mono text-sm text-cyan" }, experience.company)
            ),
            e("span", { className: "rounded-md bg-white/[0.04] px-3 py-1.5 font-mono text-[12px] text-dim ring-1 ring-[rgba(255,255,255,0.05)]" }, experience.period)
          ),
          e("ul", { className: "mt-6 space-y-3" },
            experience.points.map((p, i) => e("li", { key: i, className: "flex gap-3 text-sm leading-relaxed text-muted" },
              e("span", { className: "mt-1 text-cyan" }, "▸"),
              e("span", null, p)
            ))
          )
        )
      )
    )
  );
}

/* ─────────────────────────── Projects ─────────────────────────── */

function ProjectCard(props) {
  const p = props.project;
  return e("article", { className: "group hover-card glow-border relative flex h-full flex-col overflow-hidden rounded-2xl border border-[rgba(255,255,255,0.05)] bg-card/40 transition-all duration-300 hover:-translate-y-1 hover:border-cyan/20 hover:shadow-[0_20px_60px_rgba(0,212,255,0.06)]" },
    e("div", { className: "absolute inset-x-0 top-0 h-px opacity-70", style: { background: `linear-gradient(90deg, transparent, ${p.accent}, transparent)` } }),
    e("div", { className: "flex flex-1 flex-col p-6 md:p-7" },
      e("div", { className: "flex flex-wrap items-start justify-between gap-3" },
        e("span", { className: "inline-block rounded-md px-2.5 py-1 font-mono text-[11px] font-semibold uppercase tracking-wider", style: { color: p.accent, backgroundColor: `${p.accent}18` } }, p.tag),
        p.href && e("a", { href: p.href, target: "_blank", rel: "noreferrer", className: "flex items-center gap-1.5 rounded-md bg-white/[0.04] px-3 py-1.5 font-mono text-[12px] text-muted transition-all hover:bg-white/[0.08] hover:text-ink" },
          e("svg", { width: "12", height: "12", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" },
            e("path", { d: "M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" })
          ), "Code")
      ),
      e("h3", { className: "mt-4 font-display text-2xl font-bold md:text-3xl" }, p.title),
      e("p", { className: "mt-2 text-sm leading-relaxed text-muted" }, p.desc),
      e("div", { className: "mt-5" }, e("p", { className: "font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-dim" }, "Highlights")),
      e("div", { className: "mt-3 flex flex-wrap gap-1.5" },
        p.highlights.map((h) => e("span", { key: h, className: "rounded-md bg-white/[0.03] px-2.5 py-1 font-mono text-[11px] text-dim ring-1 ring-[rgba(255,255,255,0.04)]" }, h))
      ),
      e("div", { className: "mt-auto pt-6" },
        e("p", { className: "font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-dim" }, "Stack"),
        e("div", { className: "mt-3 flex flex-wrap gap-2" },
          p.stack.map((t) => e("span", { key: t, className: "rounded-md px-2.5 py-1 font-mono text-[11px] font-medium", style: { color: p.accent, backgroundColor: `${p.accent}14` } }, t))
        )
      )
    )
  );
}

function ProjectsSection() {
  return e("section", { id: "projects", className: "py-24 md:py-32" },
    e("div", { className: "mx-auto max-w-6xl px-5" },
      e(ScrollReveal, null,
        e(SectionLabel, null, "Projects"),
        e("h2", { className: "mt-2 font-display text-3xl font-bold md:text-4xl" }, "Projects"),
        e("p", { className: "mt-4 max-w-2xl leading-relaxed text-muted" },
          "From a service marketplace to a scheduling research framework — built from scratch, with a focus on architecture and shipping working software."
        )
      ),
      e("div", { className: "mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 auto-rows-[minmax(0,1fr)]" },
        projects.map((p, i) => e(ScrollReveal, { key: p.id, delay: 0.06 * i, rotate: true, className: p.span },
          e(TiltCard, { className: "h-full" }, e(ProjectCard, { project: p }))
        ))
      )
    )
  );
}

/* ─────────────────────────── Tech Stack ─────────────────────────── */

function SkillBadge(props) {
  return e("div", {
    className: `flex items-center rounded-xl bg-[rgba(255,255,255,0.02)] px-3.5 py-2.5 ring-1 ring-[rgba(255,255,255,0.04)] transition-all duration-300 hover:bg-[rgba(255,255,255,0.04)] hover:ring-[rgba(255,255,255,0.08)] ${props.visible ? "translate-x-0 opacity-100" : "-translate-x-3 opacity-0"}`,
    style: { transitionDelay: `${props.delay + 0.2}s` },
  }, e("span", { className: "font-mono text-sm text-muted" }, props.name));
}

function TechCard(props) {
  const [ref, isVisible] = useInView();
  const colors = ["#00d4ff", "#7c5cfc", "#34d399", "#f59e0b", "#f472b6"];
  const c = colors[props.index % colors.length];
  const group = props.group;
  return e("div", {
    ref: ref,
    className: `group relative overflow-hidden rounded-2xl border border-[rgba(255,255,255,0.05)] bg-gradient-to-br from-card/50 to-card/20 p-6 backdrop-blur-sm transition-all duration-500 hover:shadow-[0_8px_40px_rgba(0,212,255,0.06)] ${isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`,
    style: { transitionDelay: `${0.08 * props.index}s` },
  },
    e("div", { className: "absolute inset-x-0 top-0 h-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100", style: { background: `linear-gradient(90deg, transparent, ${c}, transparent)` } }),
    e("div", { className: "relative flex items-center gap-3" },
      e("span", { className: "flex h-10 w-10 items-center justify-center rounded-xl font-mono text-base font-bold", style: { backgroundColor: `${c}18`, color: c } }, group.icon),
      e("div", null,
        e("p", { className: "font-mono text-xs font-semibold uppercase tracking-[0.2em]", style: { color: c } }, group.category),
        e("p", { className: "mt-0.5 font-mono text-[11px] text-dim" }, `${group.items.length} technologies`)
      )
    ),
    e("div", { className: "relative mt-6 space-y-2.5" },
      group.items.map((item, idx) => e(SkillBadge, { key: item, name: item, delay: idx * 0.06, visible: isVisible }))
    )
  );
}

function TechSection() {
  return e("section", { id: "skills", className: "relative overflow-hidden py-24 md:py-32" },
    e("div", { className: "pointer-events-none absolute inset-0" },
      e("div", { className: "absolute -top-40 left-1/4 h-80 w-80 rounded-full bg-cyan/5 blur-[120px]" }),
      e("div", { className: "absolute -bottom-40 right-1/4 h-80 w-80 rounded-full bg-purple/5 blur-[120px]" })
    ),
    e("div", { className: "relative mx-auto max-w-6xl px-5" },
      e(ScrollReveal, null,
        e(SectionLabel, null, "Tech Stack"),
        e("h2", { className: "mt-2 font-display text-3xl font-bold md:text-4xl" }, "Technical Arsenal"),
        e("p", { className: "mt-4 max-w-xl leading-relaxed text-muted" }, "Languages, frameworks, and tools I reach for when building and shipping software.")
      ),
      e("div", { className: "mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3" },
        techStack.map((group, i) => e(TechCard, { key: group.category, group: group, index: i }))
      )
    )
  );
}

/* ─────────────────────────── Achievements ─────────────────────────── */

function AchievementsSection() {
  const [countRef, count] = useCountUp(400, 1200);
  const codeLines = [
    "$ stream --pipeline camera-01",
    "",
    "Negotiating WebRTC session...",
    "ICE candidates gathered: 4",
    "Publishing to AWS Kinesis Video Streams",
    "",
    "Status:",
    "  Latency: ~180ms",
    "  Codec: H.264 (FFmpeg transcode)",
    "",
    "✓ Stream live",
  ];
  return e("section", { id: "achievements", className: "relative overflow-hidden py-24 md:py-32" },
    e("div", { className: "mx-auto max-w-6xl px-5" },
      e(ScrollReveal, null,
        e(SectionLabel, null, "Achievements"),
        e("h2", { className: "mt-2 font-display text-3xl font-bold md:text-4xl" }, "400+ Problems Solved")
      ),
      e("div", { className: "mt-8 grid gap-6 lg:grid-cols-2" },
        e(ScrollReveal, { rotate: true },
          e("div", { ref: countRef, className: "hover-card glow-border flex flex-col items-center justify-center rounded-xl border border-[rgba(255,255,255,0.05)] bg-card/30 p-10" },
            e("p", { className: "font-display count-up text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan to-purple md:text-8xl" }, `${count}+`),
            e("p", { className: "mt-2 font-mono text-sm text-muted" }, "Problems Solved"),
            e("p", { className: "mt-1 text-xs text-dim" }, "Across LeetCode and CodeChef"),
            e("div", { className: "mt-8 flex flex-wrap justify-center gap-2" },
              dsaTopics.map((t) => e("span", { key: t, className: "rounded-md bg-white/[0.04] px-3 py-1.5 font-mono text-[12px] text-dim ring-1 ring-[rgba(255,255,255,0.04)]" }, t))
            )
          )
        ),
        e(ScrollReveal, { delay: 0.12, rotate: true },
          e("div", { className: "hover-card glow-border rounded-xl border border-[rgba(255,255,255,0.06)] bg-[#0d0d14] p-5 font-mono text-sm leading-relaxed shadow-inner" },
            e("div", { className: "flex items-center gap-2 border-b border-[rgba(255,255,255,0.06)] pb-3" },
              e("span", { className: "h-3 w-3 rounded-full bg-red-500/60" }),
              e("span", { className: "h-3 w-3 rounded-full bg-yellow-500/60" }),
              e("span", { className: "h-3 w-3 rounded-full bg-green-500/60" }),
              e("span", { className: "ml-2 text-[11px] text-dim" }, "terminal — kinesis@renu")
            ),
            e("pre", { className: "mt-3 overflow-x-auto text-[13px] text-muted" }, e("code", null, codeLines.join("\n")))
          )
        )
      ),
      e(ScrollReveal, { delay: 0.15 },
        e("div", { className: "mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4" },
          achievements.map((a) => e("div", { key: a.label, className: "rounded-xl border border-[rgba(255,255,255,0.05)] bg-card/30 p-5" },
            e("p", { className: "font-mono text-[11px] uppercase tracking-wider text-dim" }, a.label),
            e("p", { className: "mt-2 font-display text-xl font-bold text-cyan" }, a.value),
            e("p", { className: "mt-1 text-xs leading-relaxed text-muted" }, a.detail)
          ))
        )
      ),
      e(ScrollReveal, { delay: 0.2 },
        e("div", { className: "mt-4 grid gap-4 sm:grid-cols-2" },
          responsibilities.map((r) => e("div", { key: r.title, className: "rounded-xl border border-[rgba(255,255,255,0.05)] bg-card/30 p-5" },
            e("p", { className: "font-display font-semibold" }, r.title),
            e("p", { className: "mt-0.5 font-mono text-[12px] text-cyan" }, r.org),
            e("p", { className: "mt-2 text-sm leading-relaxed text-muted" }, r.desc)
          ))
        )
      )
    )
  );
}

/* ─────────────────────────── Terminal ─────────────────────────── */

function TerminalSection() {
  const [history, setHistory] = useState([
    { type: "system", text: "Welcome to ritik@portfolio:~$" },
    { type: "system", text: 'Type "help" for available commands.' },
  ]);
  const [input, setInput] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const inputRef = useRef();
  const scrollContainerRef = useRef();

  useEffect(() => {
    const interval = setInterval(() => setShowCursor((v) => !v), 530);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!scrollContainerRef.current) return;
    scrollContainerRef.current.scrollTop = scrollContainerRef.current.scrollHeight;
  }, [history]);

  const handleCommand = useCallback((cmd) => {
    const trimmed = cmd.trim().toLowerCase();
    if (!trimmed) return;
    setHistory((h) => [...h, { type: "input", text: `$ ${cmd}` }]);
    if (trimmed === "clear") { setHistory([]); return; }
    const cmdData = terminalCommands[trimmed];
    if (cmdData) {
      setHistory((h) => [...h, ...cmdData.output.map((l) => ({ type: "output", text: l }))]);
    } else {
      setHistory((h) => [...h, { type: "error", text: `Command not found: ${trimmed}. Type "help" for available commands.` }]);
    }
  }, []);

  const onSubmit = () => {
    if (!input.trim()) return;
    handleCommand(input);
    setInput("");
    requestAnimationFrame(() => { if (inputRef.current) inputRef.current.focus(); });
  };

  return e("section", { id: "terminal", className: "py-24 md:py-32" },
    e("div", { className: "mx-auto max-w-4xl px-5" },
      e(ScrollReveal, null,
        e(SectionLabel, null, "Terminal"),
        e("h2", { className: "mt-2 font-display text-3xl font-bold md:text-4xl" }, "Interactive Shell"),
        e("p", { className: "mt-4 max-w-xl leading-relaxed text-muted" }, "Type ", e("span", { className: "font-mono text-cyan" }, "help"), " to explore my profile from the command line.")
      ),
      e(ScrollReveal, { delay: 0.2 },
        e("div", {
          className: "mt-8 overflow-hidden rounded-xl border border-[rgba(255,255,255,0.06)] bg-[#0a0a10] shadow-[0_0_40px_rgba(0,0,0,0.3)]",
          onClick: () => { if (inputRef.current) inputRef.current.focus(); },
        },
          e("div", { className: "flex items-center gap-2 border-b border-[rgba(255,255,255,0.06)] px-4 py-2.5" },
            e("span", { className: "h-3 w-3 rounded-full bg-red-500/60" }),
            e("span", { className: "h-3 w-3 rounded-full bg-yellow-500/60" }),
            e("span", { className: "h-3 w-3 rounded-full bg-green-500/60" }),
            e("span", { className: "ml-2 font-mono text-[11px] text-dim" }, "ritik@portfolio — bash")
          ),
          e("div", { ref: scrollContainerRef, className: "max-h-80 overflow-y-auto p-4 font-mono text-[14px] leading-relaxed" },
            history.map((line, i) => e("div", {
              key: i,
              className: line.type === "input" ? "text-ink" : line.type === "error" ? "text-red-400" : line.type === "system" ? "text-dim" : "text-muted",
            }, line.text)),
            e("div", { className: "mt-1 flex items-center" },
              e("span", { className: "text-cyan" }, "$"),
              e("span", { className: "mx-1 text-dim" }, ">"),
              e("input", {
                ref: inputRef,
                type: "text",
                value: input,
                onChange: (ev) => setInput(ev.target.value),
                onKeyDown: (ev) => { if (ev.key === "Enter") { ev.preventDefault(); onSubmit(); } },
                className: "flex-1 bg-transparent outline-none text-ink caret-cyan",
                autoComplete: "off",
                spellCheck: "false",
              }),
              e("span", { className: `text-cyan ${showCursor ? "opacity-100" : "opacity-0"}` }, "_")
            )
          )
        )
      )
    )
  );
}

/* ─────────────────────────── Contact ─────────────────────────── */

function CopyableLine(props) {
  const [copied, setCopied] = useState(false);
  const doCopy = async () => {
    try {
      await navigator.clipboard.writeText(props.value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) { /* clipboard unavailable — no-op */ }
  };
  return e("button", { onClick: doCopy, className: "group flex w-full items-center justify-between rounded-lg border border-[rgba(255,255,255,0.05)] bg-white/[0.02] px-4 py-2.5 text-left transition hover:border-cyan/20" },
    e("div", null,
      e("p", { className: "font-mono text-[10px] uppercase tracking-wider text-dim" }, props.label),
      e("p", { className: "mt-0.5 font-mono text-sm text-ink" }, props.value)
    ),
    e("span", { className: "font-mono text-[11px] text-cyan opacity-0 transition group-hover:opacity-100" }, copied ? "copied" : "copy")
  );
}

function ContactSection() {
  return e("section", { id: "contact", className: "py-24 md:py-32" },
    e("div", { className: "mx-auto max-w-6xl px-5" },
      e(ScrollReveal, null,
        e(SectionLabel, null, "Contact"),
        e("h2", { className: "mt-2 font-display text-3xl font-bold md:text-4xl" }, "Get In Touch"),
        e("p", { className: "mt-4 max-w-xl leading-relaxed text-muted" }, "I'm open to SDE internship and full-time roles. Reach out directly — no forms, just the fastest path to a reply.")
      ),
      e("div", { className: "mt-8 grid gap-6 lg:grid-cols-2" },
        e(ScrollReveal, { delay: 0.1 },
          e("div", { className: "flex flex-col gap-3" },
            e(CopyableLine, { label: "Email", value: "ritiksingh1915@gmail.com" }),
            e(CopyableLine, { label: "Phone", value: "+91-6203172327" })
          )
        ),
        e(ScrollReveal, { delay: 0.2 },
          e("div", { className: "flex flex-col gap-3" },
            contacts.map((c) => e("a", {
              key: c.label, href: c.href, target: "_blank", rel: "noreferrer",
              className: "group hover-card glow-border flex items-center gap-3 rounded-xl border border-[rgba(255,255,255,0.05)] bg-card/30 px-5 py-3.5 transition-all hover:border-cyan/15 hover:bg-card/60",
            },
              e("span", { className: "font-mono text-sm text-cyan/60" }, ">"),
              e("span", { className: "font-mono text-sm text-muted transition-all group-hover:text-ink" }, c.label),
              e("span", { className: "ml-auto text-xs text-dim truncate max-w-[220px]" }, c.href.replace("https://", "").replace("mailto:", ""))
            ))
          )
        )
      )
    )
  );
}

/* ─────────────────────────── Footer ─────────────────────────── */

function Footer() {
  return e("footer", { className: "border-t border-[rgba(255,255,255,0.04)] py-8" },
    e("div", { className: "mx-auto max-w-6xl px-5" },
      e("div", { className: "flex flex-col items-center justify-between gap-4 md:flex-row" },
        e("p", { className: "font-mono text-sm text-dim" }, e("span", { className: "text-cyan" }, "$"), " ritik", e("span", { className: "text-muted" }, ".dev")),
        e("p", { className: "font-mono text-[13px] text-dim" }, "© 2026 Ritik Kumar Singh — built with purpose")
      )
    )
  );
}

/* ─────────────────────────── App ─────────────────────────── */

function App() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      if ("scrollRestoration" in window.history) window.history.scrollRestoration = "manual";
      window.scrollTo(0, 0);
      requestAnimationFrame(() => window.scrollTo(0, 0));
    }
  }, []);

  return e("div", { className: "relative min-h-screen bg-space selection:bg-cyan/20 selection:text-ink" },
    e(ScrollProgress, null),
    e(Navbar, null),
    e(Hero, null),
    e(AboutSection, null),
    e(ExperienceSection, null),
    e(ProjectsSection, null),
    e(TechSection, null),
    e(AchievementsSection, null),
    e(TerminalSection, null),
    e(ContactSection, null),
    e(Footer, null),
    e(BackToTop, null)
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(e(App, null));