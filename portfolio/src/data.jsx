import { nanoid } from "nanoid";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaLinkedin,
  FaDatabase,
  FaServer,
  FaTools,
  FaNetworkWired,
} from "react-icons/fa";
import {
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiNextdotjs,
  SiTypescript,
  SiRedis,
  SiWordpress,
  SiJira,
  SiPostman,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

// Import your existing project images (make sure these files exist in src/assets/)
import mix from "./assets/mix.png";
import movieview from "./assets/movieView.png";
import gift from "./assets/gift.png";
import property from "./assets/property.png";
import thinkboard from "./assets/think.png";

// ─── NAV LINKS ───
export const links = [
  { id: nanoid(), href: "#home", text: "home" },
  { id: nanoid(), href: "#about", text: "about" },
  { id: nanoid(), href: "#skills", text: "skills" },
  { id: nanoid(), href: "#experience", text: "experience" },
  { id: nanoid(), href: "#projects", text: "projects" },
  { id: nanoid(), href: "#certifications", text: "certifications" },
  { id: nanoid(), href: "#contact", text: "contact" },
];

// ─── SKILLS (Categorized) ───
export const skillCategories = [
  {
    id: nanoid(),
    category: "Frontend & UI",
    skills: [
      {
        id: nanoid(),
        title: "React & Next.js",
        icon: <FaReact className="h-10 w-10 text-emerald-500" />,
        text: "Building dynamic UIs with React Hooks, Next.js App Router, Server Actions, and React Query.",
      },
      {
        id: nanoid(),
        title: "TypeScript & JS",
        icon: <SiTypescript className="h-10 w-10 text-emerald-500" />,
        text: "Writing type-safe code, ES6+ features, async/await, and modern JavaScript patterns.",
      },
      {
        id: nanoid(),
        title: "Tailwind CSS",
        icon: <SiTailwindcss className="h-10 w-10 text-emerald-500" />,
        text: "Crafting responsive, mobile-first layouts using utility classes and DaisyUI.",
      },
    ],
  },
  {
    id: nanoid(),
    category: "Backend & Database",
    skills: [
      {
        id: nanoid(),
        title: "Node & Express",
        icon: <FaNodeJs className="h-10 w-10 text-emerald-500" />,
        text: "Designing RESTful APIs, middleware, JWT auth, BullMQ, and secure backend proxying.",
      },
      {
        id: nanoid(),
        title: "MongoDB & Redis",
        icon: <SiMongodb className="h-10 w-10 text-emerald-500" />,
        text: "Data modeling with Mongoose, query optimization, and API rate-limiting with Upstash Redis.",
      },
      {
        id: nanoid(),
        title: "WordPress & CMS",
        icon: <SiWordpress className="h-10 w-10 text-emerald-500" />,
        text: "Customizing WooCommerce, Elementor, cPanel management, and site security optimization.",
      },
    ],
  },
  {
    id: nanoid(),
    category: "AI, QA & IT Ops",
    skills: [
      {
        id: nanoid(),
        title: "AI Integration",
        icon: <FaServer className="h-10 w-10 text-emerald-500" />,
        text: "Prompt engineering, OpenAI API routing, and building AI-powered recommendation engines.",
      },
      {
        id: nanoid(),
        title: "QA & Testing",
        icon: <SiJira className="h-10 w-10 text-emerald-500" />,
        text: "Manual testing, writing test cases, defect tracking in JIRA, and API validation via Postman.",
      },
      {
        id: nanoid(),
        title: "IT Infrastructure",
        icon: <FaNetworkWired className="h-10 w-10 text-emerald-500" />,
        text: "LAN/WAN setup, biometric access control, HRMS deployment, and hardware troubleshooting.",
      },
    ],
  },
];

// ─── EXPERIENCE ───
export const experiences = [
  {
    id: nanoid(),
    role: "Backend Engineer Intern",
    company: "SkyeStudio",
    period: "2026",
    bullets: [
      "Patched a JWT timing-attack vulnerability using crypto.timingSafeEqual(), strengthening multi-tenant authentication.",
      "Implemented an in-process BullMQ worker fallback, reducing infrastructure costs on Render.",
      "Resolved a critical MongoDB query collision causing cross-account password validation errors.",
      "Stabilized CI/CD pipelines by resolving ESLint and Prettier configuration conflicts.",
    ],
  },
  {
    id: nanoid(),
    role: "IT Support Officer & Software Tester",
    company: "EBIZ and Services",
    period: "April 2024 – Present",
    bullets: [
      "Diagnosed and repaired a faulty turnstile access control system, saving 60% in replacement costs.",
      "Led full-cycle HRMS deployment, training 150+ employees and achieving 95% system adoption.",
      "Designed and executed 100+ manual test cases, reducing post-release bugs by 40% via JIRA.",
    ],
  },
  {
    id: nanoid(),
    role: "Facility & IT Infrastructure Manager",
    company: "Justrite Superstore",
    period: "2020 – March 2023",
    bullets: [
      "Managed power and cooling infrastructure supporting IT server rooms and POS systems, achieving 99.5% uptime.",
      "Supervised 5 technicians and 7 external contractors, reducing unplanned downtime by 25%.",
      "Instituted a diesel inventory system guaranteeing 72-hour backup power during grid outages.",
    ],
  },
];

// ─── PROJECTS ───
export const projects = [
  {
    id: nanoid(),
    img: property,
    url: "https://your-property-pulse-link.vercel.app", // Update with your actual link
    github: "https://github.com/yourusername/property-pulse", // Update with your actual link
    title: "PropertyPulse (Real Estate)",
    text: "Built a full-stack real estate platform with 12+ dynamic routes using Next.js App Router and TypeScript. Implemented Google OAuth, strict ownership-based authorization in Server Actions, Cloudinary image uploads, and Mapbox geocoding.",
  },
  {
    id: nanoid(),
    img: thinkboard,
    url: "https://your-thinkboard-link.onrender.com", // Update with your actual link
    github: "https://github.com/yourusername/thinkboard", // Update with your actual link
    title: "Thinkboard (Note-Taking App)",
    text: "Developed a full-stack note-taking app with a modular backend architecture (Express 5, React 19). Integrated Upstash Redis for API rate limiting to protect endpoints and built a responsive UI with Tailwind CSS.",
  },
  {
    id: nanoid(),
    img: gift, // Uses your existing image
    url: "https://giftgenie-oceg.onrender.com/",
    github: "https://github.com/tobajetex/giftGenie",
    title: "Gift Genie AI",
    stack: "React, Node.js, Express, OpenAI API",
    text: "Engineered a full-stack app generating personalized gift suggestions via OpenAI API, with a secure Express backend proxy preventing client-side API key exposure.",
  },
  {
    id: nanoid(),
    img: mix, // Uses your existing image
    url: "https://cocktailbing.netlify.app/",
    github: "https://github.com/tobajetex/Mixmaster",
    title: "MixMaster",
    stack: "React, React Query, REST API",
    text: "A stylish cocktail discovery platform consuming a dynamic API. Features searchable grids, detailed ingredient pages, and efficient data fetching with React Query.",
  },
  {
    id: nanoid(),
    img: movieview, // Uses your existing image
    url: "https://movieviews.netlify.app/",
    github: "https://github.com/tobajetex",
    title: "MovieView",
    stack: "Vanilla JavaScript, Fetch API, LocalStorage",
    text: "A movie discovery site fetching data via async/await. Features dynamic rendering, search functionality, and a Watch Later list saved to localStorage.",
  },
  {
    id: nanoid(),
    img: null, // Add an image later if you want
    url: "https://assistant-pastor.vercel.app",
    github: "https://github.com/tobajetex/Assistant_Pastor",
    title: "Assistant Pastor App",
    stack: "React, Node.js, OpenAI API",
    text: "An AI faith companion with custom system prompts tailored to Christian theology, implementing strict theological constraints and pastoral tone control.",
  },
  {
    id: nanoid(),
    img: null, // Add an image later if you want
    url: "https://nobleman.rf.gd",
    github: "#",
    title: "Nobleman E-Commerce",
    stack: "WordPress, WooCommerce, Elementor",
    text: "Designed and customized a full e-commerce website for a client, configuring WooCommerce, Wordfence security, and UpdraftPlus backups.",
  },
];

// ─── CERTIFICATIONS ───
export const certifications = [
  {
    id: nanoid(),
    title: "Full-Stack Developer Career Path",
    issuer: "Scrimba",
    link: "https://scrimba.com/@tobajetex:certs;cert29m6qWaiJUHBPp71CbPQpXFX9LbecarNPEVn6ioaheNjS",
  },
  {
    id: nanoid(),
    title: "Frontend Developer Career Path",
    issuer: "Scrimba",
    link: "https://scrimba.com/@tobajetex:certs;cert2CsEjr6BQq3d6PpZPz8aPtA4SYXhzmA7pt",
  },
  {
    id: nanoid(),
    title: "Advanced Certificate",
    issuer: "Scrimba",
    link: "https://scrimba.com/@tobajetex:certs;cert2uNje7frxB4aJoiwcZmuEVvPDf28LQrrKed",
  },
  {
    id: nanoid(),
    title: "UI Design Certificate",
    issuer: "Scrimba",
    link: "https://v1.scrimba.com/certificate/uGLby7AY/gdesignbootcamp",
  },
  {
    id: nanoid(),
    title: "CompTIA A+ (IT Hardware)",
    issuer:
      "https://www.udemy.com/certificate/UC-e4b7e24a-14cd-4528-b390-69055489a4b6/",
    link: "#",
  },
  {
    id: nanoid(),
    title: "CompTIA Network+ (Networking)",
    issuer: "Udemy",
    link: "https://www.udemy.com/certificate/UC-7291a14f-036a-4f75-8731-b0a3e12d50a0/",
  },
];
