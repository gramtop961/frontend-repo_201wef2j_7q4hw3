import React from 'react';
import { BadgeCheck, Github, Linkedin, Instagram, Download } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="relative mx-auto max-w-6xl scroll-mt-24 px-6 py-20">
      <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
        <div className="order-2 md:order-1">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">About Me</h2>
          <p className="mt-4 text-gray-600 dark:text-gray-300">
            I’m a 17-year-old developer who builds apps, AI tools, and automation projects. I love coding, solving
            problems, and creating things that make people’s lives easier.
          </p>

          <div className="mt-6 flex flex-wrap gap-3 text-sm">
            <span className="rounded-full bg-gray-900/5 px-3 py-1 text-gray-800 ring-1 ring-gray-900/10 dark:bg-white/5 dark:text-gray-200 dark:ring-white/10">
              10+ Projects
            </span>
            <span className="rounded-full bg-gray-900/5 px-3 py-1 text-gray-800 ring-1 ring-gray-900/10 dark:bg-white/5 dark:text-gray-200 dark:ring-white/10">
              Python & React Developer
            </span>
            <span className="rounded-full bg-gray-900/5 px-3 py-1 text-gray-800 ring-1 ring-gray-900/10 dark:bg-white/5 dark:text-gray-200 dark:ring-white/10">
              Future Innovator
            </span>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="/Aryan-CV.pdf"
              className="inline-flex items-center gap-2 rounded-xl bg-gray-900 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200"
            >
              <Download className="h-4 w-4" /> Download CV
            </a>
            <a
              href="https://github.com/aryan"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-gray-900/5 px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-gray-900/10 transition hover:bg-gray-900/10 dark:bg-white/5 dark:text-white dark:ring-white/10 dark:hover:bg-white/10"
            >
              <Github className="h-4 w-4" /> GitHub
            </a>
            <a
              href="https://linkedin.com/in/aryan"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-gray-900/5 px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-gray-900/10 transition hover:bg-gray-900/10 dark:bg-white/5 dark:text-white dark:ring-white/10 dark:hover:bg-white/10"
            >
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
            <a
              href="https://instagram.com/aryan"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-gray-900/5 px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-gray-900/10 transition hover:bg-gray-900/10 dark:bg-white/5 dark:text-white dark:ring-white/10 dark:hover:bg-white/10"
            >
              <Instagram className="h-4 w-4" /> Instagram
            </a>
          </div>
        </div>

        <div className="order-1 md:order-2 flex justify-center">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1546422904-90eab23c3d7e?q=80&w=900&auto=format&fit=crop"
              alt="Aryan portrait"
              className="h-64 w-64 rounded-2xl object-cover shadow-xl ring-1 ring-black/10 md:h-80 md:w-80"
            />
            <div className="absolute -bottom-4 -right-4 flex items-center gap-2 rounded-xl bg-white/80 px-3 py-2 text-xs font-semibold text-gray-900 backdrop-blur-md ring-1 ring-gray-900/10 dark:bg-white/10 dark:text-white dark:ring-white/10">
              <BadgeCheck className="h-4 w-4 text-sky-500" /> Verified Builder
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
