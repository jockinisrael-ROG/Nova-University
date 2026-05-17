import { Cpu, Briefcase, Code2, Palette, Brain, BarChart3, type LucideIcon } from "lucide-react";

export type Course = {
  code: string;
  title: string;
  credits: number;
  duration: string;
  level: "Foundation" | "Intermediate" | "Advanced" | "Capstone";
  desc: string;
  outcomes: string[];
};

export type Program = {
  slug: string;
  title: string;
  icon: LucideIcon;
  tagline: string;
  desc: string;
  duration: string;
  degree: string;
  seats: number;
  fee: string;
  highlights: string[];
  courses: Course[];
};

export const programs: Program[] = [
  {
    slug: "engineering",
    title: "Engineering",
    icon: Cpu,
    tagline: "Build the physical world of tomorrow.",
    desc: "Mechanical, electrical, civil and robotics disciplines taught through hands-on labs, industry projects, and global research partnerships.",
    duration: "4 years",
    degree: "B.Tech / M.Tech",
    seats: 480,
    fee: "$8,400 / year",
    highlights: ["Smart Manufacturing Lab", "IEEE Student Chapter", "Industry Internship Year"],
    courses: [
      { code: "ENG-101", title: "Engineering Mathematics I", credits: 4, duration: "16 weeks", level: "Foundation", desc: "Calculus, linear algebra, and discrete math foundations applied to real engineering systems.", outcomes: ["Model continuous systems", "Solve linear systems", "Apply discrete proofs"] },
      { code: "ENG-110", title: "Engineering Drawing & CAD", credits: 3, duration: "12 weeks", level: "Foundation", desc: "Technical drawing, GD&T, and parametric modeling with SolidWorks and Fusion 360.", outcomes: ["Read engineering drawings", "Build parametric CAD", "Produce manufacturing prints"] },
      { code: "ENG-205", title: "Thermodynamics", credits: 4, duration: "16 weeks", level: "Intermediate", desc: "First and second laws, cycles, and energy systems with industry case studies.", outcomes: ["Analyze power cycles", "Compute energy efficiency", "Design heat exchangers"] },
      { code: "ENG-220", title: "Circuits & Electronics", credits: 4, duration: "16 weeks", level: "Intermediate", desc: "Analog and digital circuits, op-amps, and PCB design with lab prototyping.", outcomes: ["Design analog circuits", "Layout multi-layer PCBs", "Debug signal integrity"] },
      { code: "ENG-310", title: "Robotics & Mechatronics", credits: 4, duration: "16 weeks", level: "Advanced", desc: "Kinematics, controls, and embedded firmware on ROS2 and microcontroller stacks.", outcomes: ["Program ROS2 nodes", "Tune PID controllers", "Build autonomous robots"] },
      { code: "ENG-340", title: "Sustainable Energy Systems", credits: 3, duration: "12 weeks", level: "Advanced", desc: "Solar, wind, storage, and grid integration with techno-economic modeling.", outcomes: ["Model PV systems", "Size battery storage", "Evaluate grid impact"] },
      { code: "ENG-490", title: "Capstone Engineering Project", credits: 6, duration: "24 weeks", level: "Capstone", desc: "Year-long team project sponsored by industry partners, ending in a public demo day.", outcomes: ["Lead engineering teams", "Ship a working prototype", "Present to executives"] },
    ],
  },
  {
    slug: "management",
    title: "Management",
    icon: Briefcase,
    tagline: "Lead organizations into their next chapter.",
    desc: "An MBA-style curriculum blending strategy, finance, operations, and people leadership with live consulting engagements.",
    duration: "2 years",
    degree: "MBA",
    seats: 240,
    fee: "$12,800 / year",
    highlights: ["Live Consulting Studio", "Wall Street Trek", "Founder Track Option"],
    courses: [
      { code: "MBA-501", title: "Financial Accounting", credits: 3, duration: "12 weeks", level: "Foundation", desc: "Reading and constructing financial statements from a strategic decision lens.", outcomes: ["Interpret 10-Ks", "Build P&L models", "Spot earnings quality issues"] },
      { code: "MBA-510", title: "Marketing Strategy", credits: 3, duration: "12 weeks", level: "Foundation", desc: "Positioning, segmentation, and growth strategy across B2B and B2C contexts.", outcomes: ["Define ICPs", "Run GTM plays", "Measure brand lift"] },
      { code: "MBA-520", title: "Operations & Supply Chain", credits: 3, duration: "12 weeks", level: "Intermediate", desc: "Lean, queueing, and digital supply chain design with simulation labs.", outcomes: ["Reduce cycle time", "Design resilient networks", "Run S&OP cadences"] },
      { code: "MBA-540", title: "Corporate Finance", credits: 4, duration: "16 weeks", level: "Intermediate", desc: "Capital structure, valuation, and M&A with live deal teardowns.", outcomes: ["Build DCF models", "Evaluate M&A", "Assess capital allocation"] },
      { code: "MBA-610", title: "Leading People & Teams", credits: 3, duration: "12 weeks", level: "Advanced", desc: "Behavioral science of high-performance teams, with executive coaching cohorts.", outcomes: ["Coach leaders", "Run difficult conversations", "Design org structures"] },
      { code: "MBA-650", title: "Entrepreneurship & Venture Capital", credits: 3, duration: "12 weeks", level: "Advanced", desc: "Founder-mode and investor-mode taught back-to-back with active VCs.", outcomes: ["Pitch a venture", "Build a cap table", "Run diligence"] },
      { code: "MBA-700", title: "Consulting Capstone", credits: 6, duration: "20 weeks", level: "Capstone", desc: "Full-semester engagement with a real client and Board-level presentation.", outcomes: ["Scope ambiguous problems", "Lead client teams", "Deliver C-suite recs"] },
    ],
  },
  {
    slug: "computer-science",
    title: "Computer Science",
    icon: Code2,
    tagline: "Build software that matters at scale.",
    desc: "From systems and theory to full-stack and distributed cloud — taught by engineers who've shipped at the world's top tech companies.",
    duration: "4 years",
    degree: "BSc / MSc Computer Science",
    seats: 360,
    fee: "$9,600 / year",
    highlights: ["FAANG Mentor Network", "Open-source Residency", "GPU Research Cluster"],
    courses: [
      { code: "CS-101", title: "Programming Foundations", credits: 4, duration: "16 weeks", level: "Foundation", desc: "Python, problem-solving patterns, and computational thinking from first principles.", outcomes: ["Write idiomatic Python", "Decompose problems", "Test your own code"] },
      { code: "CS-201", title: "Data Structures & Algorithms", credits: 4, duration: "16 weeks", level: "Foundation", desc: "Big-O, trees, graphs, dynamic programming with weekly LeetCode-style labs.", outcomes: ["Choose the right DS", "Analyze complexity", "Solve graph problems"] },
      { code: "CS-220", title: "Computer Systems", credits: 4, duration: "16 weeks", level: "Intermediate", desc: "C, memory, OS internals, and how programs really run on hardware.", outcomes: ["Reason about memory", "Use syscalls", "Debug at assembly level"] },
      { code: "CS-330", title: "Web & Mobile Engineering", credits: 4, duration: "16 weeks", level: "Intermediate", desc: "React, TypeScript, server components, and React Native for production apps.", outcomes: ["Ship full-stack apps", "Design APIs", "Own deploy pipelines"] },
      { code: "CS-410", title: "Distributed Systems", credits: 4, duration: "16 weeks", level: "Advanced", desc: "Consensus, sharding, streaming, and observability across globally distributed services.", outcomes: ["Reason about CAP", "Design for failure", "Build streaming systems"] },
      { code: "CS-440", title: "Security & Cryptography", credits: 3, duration: "12 weeks", level: "Advanced", desc: "Threat modeling, applied crypto, and red-team exercises in our cyber range.", outcomes: ["Threat model systems", "Apply modern crypto", "Run red-team ops"] },
      { code: "CS-490", title: "Senior Capstone in CS", credits: 6, duration: "24 weeks", level: "Capstone", desc: "Open-source contribution or industry partnership culminating in a public release.", outcomes: ["Ship a real product", "Get code reviewed", "Speak at a tech meetup"] },
    ],
  },
  {
    slug: "design",
    title: "Design",
    icon: Palette,
    tagline: "Design products people love.",
    desc: "A studio-based curriculum across product, UX, visual, and motion design with real client briefs each semester.",
    duration: "3 years",
    degree: "BDes",
    seats: 180,
    fee: "$8,900 / year",
    highlights: ["Live Client Studios", "Awwwards Mentorship", "Type & Print Workshop"],
    courses: [
      { code: "DES-101", title: "Visual Foundations", credits: 3, duration: "12 weeks", level: "Foundation", desc: "Color, composition, typography and form taught through analog and digital exercises.", outcomes: ["Build composition systems", "Pair typefaces", "Use color with intent"] },
      { code: "DES-150", title: "Design Research Methods", credits: 3, duration: "12 weeks", level: "Foundation", desc: "Ethnography, user interviews, and synthesis for human-centered design.", outcomes: ["Run user studies", "Synthesize insights", "Generate opportunities"] },
      { code: "DES-210", title: "Interaction Design", credits: 4, duration: "16 weeks", level: "Intermediate", desc: "Information architecture, prototyping, and high-fidelity flows in Figma and code.", outcomes: ["Design IA", "Prototype in Figma", "Handoff to engineering"] },
      { code: "DES-260", title: "Motion & Microinteractions", credits: 3, duration: "12 weeks", level: "Intermediate", desc: "Principles of motion, easing, and choreography with After Effects and Framer.", outcomes: ["Animate UIs", "Build motion systems", "Design micro-interactions"] },
      { code: "DES-340", title: "Brand Systems", credits: 3, duration: "12 weeks", level: "Advanced", desc: "Identity systems, naming, and brand operating systems for modern companies.", outcomes: ["Build identity systems", "Write brand voice", "Govern brand at scale"] },
      { code: "DES-380", title: "Design Engineering", credits: 4, duration: "16 weeks", level: "Advanced", desc: "Tailwind, design tokens, and shipping production-grade UI in collaboration with engineers.", outcomes: ["Own design tokens", "Ship production UI", "Speak code with engineers"] },
      { code: "DES-490", title: "Studio Capstone", credits: 6, duration: "24 weeks", level: "Capstone", desc: "A signature project with a real client, exhibited at our annual design show.", outcomes: ["Lead a design project", "Defend design decisions", "Exhibit your work"] },
    ],
  },
  {
    slug: "ai-data-science",
    title: "AI & Data Science",
    icon: Brain,
    tagline: "Build the intelligent products of the next decade.",
    desc: "From foundations of statistics to production LLM systems, with a GPU cluster and industry research collaborations.",
    duration: "2 years",
    degree: "MSc AI & Data Science",
    seats: 200,
    fee: "$11,400 / year",
    highlights: ["GPU Research Cluster", "Applied LLM Lab", "Kaggle Grandmaster Mentors"],
    courses: [
      { code: "AI-501", title: "Statistics for Machine Learning", credits: 4, duration: "16 weeks", level: "Foundation", desc: "Probability, inference, and Bayesian thinking grounded in real ML problems.", outcomes: ["Reason probabilistically", "Run A/B tests", "Build Bayesian models"] },
      { code: "AI-510", title: "Applied Machine Learning", credits: 4, duration: "16 weeks", level: "Foundation", desc: "Classical ML end-to-end with scikit-learn and modern MLOps practice.", outcomes: ["Build ML pipelines", "Evaluate models honestly", "Ship to production"] },
      { code: "AI-530", title: "Deep Learning", credits: 4, duration: "16 weeks", level: "Intermediate", desc: "Architectures, optimization, and training tricks across vision and language.", outcomes: ["Train transformers", "Tune optimization", "Read modern papers"] },
      { code: "AI-560", title: "NLP & Large Language Models", credits: 4, duration: "16 weeks", level: "Intermediate", desc: "From tokenizers to RAG and fine-tuning production LLM applications.", outcomes: ["Fine-tune LLMs", "Design RAG systems", "Evaluate LLM apps"] },
      { code: "AI-610", title: "Computer Vision", credits: 4, duration: "16 weeks", level: "Advanced", desc: "Detection, segmentation, multi-modal models and real-world deployment.", outcomes: ["Train CV models", "Deploy on edge", "Build multimodal systems"] },
      { code: "AI-640", title: "Reinforcement Learning", credits: 3, duration: "12 weeks", level: "Advanced", desc: "MDPs, policy gradients, and RLHF for aligning modern AI systems.", outcomes: ["Implement PPO", "Design reward models", "Apply RLHF"] },
      { code: "AI-700", title: "Applied AI Capstone", credits: 6, duration: "24 weeks", level: "Capstone", desc: "Industry-sponsored project shipping an AI product end-to-end.", outcomes: ["Scope AI products", "Train + deploy", "Measure business impact"] },
    ],
  },
  {
    slug: "business-analytics",
    title: "Business Analytics",
    icon: BarChart3,
    tagline: "Turn data into decisions.",
    desc: "An analytics MS bridging SQL, modern BI, causal inference, and data storytelling for business leaders.",
    duration: "1.5 years",
    degree: "MS Business Analytics",
    seats: 160,
    fee: "$10,200 / year",
    highlights: ["Modern Data Stack Lab", "Executive Storytelling Studio", "Corporate Practicum"],
    courses: [
      { code: "BA-501", title: "SQL & Data Modeling", credits: 3, duration: "12 weeks", level: "Foundation", desc: "Production SQL, dimensional modeling, and the modern data warehouse.", outcomes: ["Write window functions", "Model star schemas", "Design data marts"] },
      { code: "BA-510", title: "Business Statistics", credits: 3, duration: "12 weeks", level: "Foundation", desc: "Hypothesis testing, regression, and experiments for business decisions.", outcomes: ["Design experiments", "Run regressions", "Quantify uncertainty"] },
      { code: "BA-520", title: "Data Visualization & Storytelling", credits: 3, duration: "12 weeks", level: "Intermediate", desc: "From Tableau to bespoke D3 — designing dashboards executives actually use.", outcomes: ["Design dashboards", "Tell data stories", "Drive decisions"] },
      { code: "BA-540", title: "Predictive Analytics", credits: 4, duration: "16 weeks", level: "Intermediate", desc: "Forecasting, churn, and uplift modeling with production-grade workflows.", outcomes: ["Forecast demand", "Model churn", "Quantify lift"] },
      { code: "BA-610", title: "Causal Inference for Business", credits: 3, duration: "12 weeks", level: "Advanced", desc: "Diff-in-diff, instrumental variables and matching for real product decisions.", outcomes: ["Run DiD", "Apply IV", "Build causal narratives"] },
      { code: "BA-650", title: "Marketing & Pricing Analytics", credits: 3, duration: "12 weeks", level: "Advanced", desc: "Attribution, lifetime value, and price elasticity with live company data.", outcomes: ["Model LTV", "Price elastically", "Attribute revenue"] },
      { code: "BA-700", title: "Analytics Capstone", credits: 6, duration: "20 weeks", level: "Capstone", desc: "Corporate practicum delivering a data-driven recommendation to a sponsor.", outcomes: ["Own a real dataset", "Recommend to execs", "Quantify business impact"] },
    ],
  },
];

export const getProgram = (slug: string) => programs.find((p) => p.slug === slug);
