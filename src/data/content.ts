export type LinkItem = { label: string; href: string };

export const profile = {
  name: "Phebian Nwokeji",
  headline: "I build products with AI agents and check their work.",
  intro:
    "Agentic software developer and AI product engineer in Lagos, Nigeria. I ship full-stack apps with Next.js, TypeScript and PostgreSQL.",
  now: "working as a freelance product engineer, adding Flutterwave payments and a RAG assistant to Kobo Watt. Open to agentic software and AI product engineering roles.",
  email: "phebiannwokeji@gmail.com",
  github: "https://github.com/phebiannwokeji-cmd",
  linkedin: "https://www.linkedin.com/in/phebian-nwokeji",
  location: "Lagos, Nigeria",
  timeZone: "Africa/Lagos",
} as const;

export const contactLinks: LinkItem[] = [
  { label: "Email", href: `mailto:${profile.email}` },
  { label: "GitHub", href: profile.github },
  { label: "LinkedIn", href: profile.linkedin },
];

export const projects = {
  headcount: {
    name: "HeadCount",
    blurb: "Collect RSVPs from one shared link. Guests need no account.",
    points: [
      "One PostgreSQL function serializes requests per event, so two guests can't take the last seat.",
      "Row Level Security means hosts see only their own events and guests.",
      "Host dashboard with search and check-in, email sign-up (PKCE) and five versioned migrations.",
    ],
    stack: "Next.js, TypeScript, Supabase, PostgreSQL, Vercel",
    links: [
      { label: "Live app", href: "https://head-count-snowy.vercel.app/" },
      { label: "Source", href: "https://github.com/phebiannwokeji-cmd/HeadCount" },
    ] as LinkItem[],
  },
  shopact: {
    name: "Shopact",
    blurb: "Shop records kept through WhatsApp, for Nigerian micro-retail shops.",
    commands: ["/sold", "/bought", "/owa", "/paid"],
    points: [
      "Seven fixed commands record sales, purchases, expenses and customer credit.",
      "The owner dashboard flags debts older than seven days, low stock and large expenses.",
      "Money is stored as integer kobo, and incoming webhooks are verified with HMAC signatures.",
    ],
    stack: "Next.js 14, TypeScript, Prisma, PostgreSQL, WhatsApp Cloud API",
    links: [
      { label: "Source", href: "https://github.com/phebiannwokeji-cmd/Shopact" },
    ] as LinkItem[],
  },
  koboWatt: {
    name: "Kobo Watt",
    flag: "In progress: Flutterwave payments and a RAG assistant on the Gemini API",
    blurb: "A rent-to-own solar service for Lagos, built from design system to server security.",
    points: [
      "A Python pipeline turns a Figma variables export into CSS custom properties.",
      'A mobile-first account prototype with a labelled help route for "Access active, but no power".',
      "An Express and SQLite enquiry service with server-side validation and tested failure handling.",
      "Known defects and limits are documented for each stage instead of overstating results.",
    ],
    stack: "Figma, Python, Node.js, Express, SQLite, Antigravity",
    links: [
      { label: "Source", href: "https://github.com/phebiannwokeji-cmd/kobo-watt" },
    ] as LinkItem[],
    stats: [
      { value: "120", label: "primitive colours" },
      { value: "100", label: "light and dark colour roles" },
      { value: "15", label: "type styles" },
      { value: "56", label: "contrast pairs checked" },
    ],
  },
};

export const method = [
  {
    title: "Write",
    text: "Project rules live in an AGENTS.md file and agent skills, so every agent starts from the same context.",
  },
  {
    title: "Direct",
    text: "Antigravity is my main environment. I work with Codex, Claude agents and DeepSeek on scaffolding, debugging and iteration.",
  },
  {
    title: "Review",
    text: "I read what the agents produce, push product rules down into the database, and document known limits instead of overstating results.",
  },
];

export const background =
  "I started in data. At the Olanrewaju Omo George Foundation in Sagamu, I turned beneficiary data into quarterly dashboards and built an information system for allocating resources. Later I traced an NGO's low funding to its root cause from its donation data. I still turn business questions into dashboards with SQL, Python, Power BI and Tableau.";

export const toolbox = [
  { label: "Agents", items: "Antigravity, Codex, Claude agents, DeepSeek, Gemini API" },
  { label: "Web", items: "Next.js, React, TypeScript, Node.js, Express" },
  { label: "Data", items: "PostgreSQL, Supabase, Prisma, SQLite, Pandas, Power BI" },
  { label: "Design", items: "Figma, design tokens, accessibility checks" },
];
