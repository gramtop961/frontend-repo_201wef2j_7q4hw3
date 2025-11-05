import React from 'react';
import { ExternalLink, Github, Sparkles, Rocket, Cog } from 'lucide-react';

const projects = [
  {
    title: 'AI Resume Analyzer',
    desc: 'Analyzes resumes against job descriptions and recommends courses to close skill gaps.',
    tools: ['Flask', 'Gemini API', 'Tailwind'],
    demo: 'https://example.com/resume-analyzer',
    repo: 'https://github.com/aryan/ai-resume-analyzer',
    image:
      'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1200&auto=format&fit=crop',
    impact: 'Helped 50+ students improve interview shortlists.'
  },
  {
    title: 'Study Planner Pro',
    desc: 'Adaptive study planner that uses spaced repetition and analytics to improve retention.',
    tools: ['React', 'FastAPI', 'MongoDB'],
    demo: 'https://example.com/study-planner',
    repo: 'https://github.com/aryan/study-planner-pro',
    image:
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop',
    impact: 'Increased weekly productivity for users by 30%.'
  },
  {
    title: 'AutoScrape AI',
    desc: 'Headless web automation that extracts product insights and summarizes with LLMs.',
    tools: ['Python', 'Playwright', 'Hugging Face'],
    demo: 'https://example.com/autoscrape-ai',
    repo: 'https://github.com/aryan/autoscrape-ai',
    image:
      'https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1200&auto=format&fit=crop',
    impact: 'Cut research time for a student team by 60%.'
  },
  {
    title: 'Portfolio v3',
    desc: 'Lightning-fast personal site with 3D, dark mode, and analytics.',
    tools: ['Vite', 'React', 'Spline'],
    demo: '#home',
    repo: 'https://github.com/aryan/portfolio-v3',
    image:
      'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200&auto=format&fit=crop',
    impact: 'Scored 98+ on Lighthouse performance.'
  }
];

const skills = {
  Languages: ['Python', 'JavaScript/TypeScript', 'SQL'],
  Frameworks: ['React', 'FastAPI', 'Flask', 'Next.js'],
  Tools: ['Tailwind', 'Git', 'Docker', 'Hugging Face', 'Gemini API', 'Three.js']
};

const achievements = [
  {
    title: 'Future Tech 2025 – AI Resume Analyzer',
    blurb: 'Presented a career planning tool powered by LLMs and vector search.',
    icon: <Rocket className="h-4 w-4 text-sky-500" />
  },
  {
    title: 'Hackathon Finalist – Build for Impact',
    blurb: 'Built an app that automates community service logistics for NGOs.',
    icon: <Sparkles className="h-4 w-4 text-purple-500" />
  },
  {
    title: 'Open Source Contributor',
    blurb: 'Contributed to tooling and docs for student dev communities.',
    icon: <Cog className="h-4 w-4 text-emerald-500" />
  }
];

const ProjectsSection = () => {
  return (
    <section id="work" className="relative mx-auto max-w-6xl scroll-mt-24 px-6 py-20">
      <div className="mb-10 flex items-end justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">Featured Work</h2>
          <p className="mt-2 text-gray-600 dark:text-gray-300">A selection of projects focused on real-world impact.</p>
        </div>
        <a
          href="https://github.com/aryan"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-lg bg-gray-900 px-3 py-2 text-sm font-semibold text-white transition hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100"
        >
          <Github className="h-4 w-4" /> View GitHub
        </a>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {projects.map((p) => (
          <article key={p.title} className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:shadow-lg dark:border-white/10 dark:bg-white/5">
            <div className="relative">
              <img src={p.image} alt={p.title} className="h-52 w-full object-cover transition duration-300 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
            <div className="p-5">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{p.title}</h3>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">{p.desc}</p>
              <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">{p.impact}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tools.map((t) => (
                  <span key={t} className="rounded-md bg-gray-900/5 px-2 py-1 text-xs text-gray-800 ring-1 ring-gray-900/10 dark:bg-white/5 dark:text-gray-200 dark:ring-white/10">{t}</span>
                ))}
              </div>
              <div className="mt-4 flex items-center gap-3">
                <a
                  href={p.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-sm font-semibold text-sky-600 hover:underline dark:text-sky-400"
                >
                  Live demo <ExternalLink className="h-4 w-4" />
                </a>
                <a
                  href={p.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-sm font-semibold text-gray-900 hover:underline dark:text-gray-200"
                >
                  Code <Github className="h-4 w-4" />
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-white/10 dark:bg-white/5">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Skills & Stack</h3>
          <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
            {Object.entries(skills).map(([k, v]) => (
              <div key={k}>
                <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">{k}</p>
                <div className="flex flex-wrap gap-2">
                  {v.map((item) => (
                    <span key={item} className="rounded-md bg-gray-900/5 px-2 py-1 text-xs text-gray-800 ring-1 ring-gray-900/10 dark:bg-white/5 dark:text-gray-200 dark:ring-white/10">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-white/10 dark:bg-white/5">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Achievements / Hackathons</h3>
          <ul className="mt-4 space-y-4">
            {achievements.map((a) => (
              <li key={a.title} className="flex items-start gap-3">
                <div className="mt-0.5">{a.icon}</div>
                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">{a.title}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{a.blurb}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-16 rounded-2xl border border-sky-200 bg-sky-50 p-6 text-sky-900 dark:border-sky-900/40 dark:bg-sky-900/20 dark:text-sky-100">
        <p className="text-sm font-semibold">Now</p>
        <p className="mt-1 text-sm">Currently building AI-driven education tools and learning advanced React + ML.</p>
      </div>
    </section>
  );
};

export default ProjectsSection;
