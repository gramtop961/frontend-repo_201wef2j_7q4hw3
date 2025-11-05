import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight, Download } from 'lucide-react';

const Hero = () => {
  const handleSeeWork = () => {
    const el = document.getElementById('work');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleHireMe = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden rounded-2xl bg-black/90 ring-1 ring-white/10">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(56,189,248,0.25),transparent_60%),radial-gradient(ellipse_at_bottom,rgba(147,51,234,0.15),transparent_60%)]" />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-6 py-28 text-center text-white">
        <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-xs font-medium backdrop-blur-md ring-1 ring-white/20">
          <span className="h-2 w-2 animate-pulse rounded-full bg-sky-400" />
          Currently building AI-driven education tools
        </span>

        <h1 className="font-['Inter'] text-4xl font-semibold leading-tight text-white/95 sm:text-6xl">
          I build digital products that solve real problems.
        </h1>
        <p className="mt-4 max-w-2xl text-balance text-white/80 sm:text-lg">
          I’m Aryan — a student, coder, and AI builder passionate about creating impactful software.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={handleSeeWork}
            className="group inline-flex items-center gap-2 rounded-xl bg-sky-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/25 transition hover:bg-sky-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-300"
          >
            See My Work
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </button>
          <button
            onClick={handleHireMe}
            className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur-md ring-1 ring-white/20 transition hover:bg-white/15"
          >
            Hire Me
          </button>
          <a
            href="/Aryan-CV.pdf"
            className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur-md ring-1 ring-white/20 transition hover:bg-white/15"
          >
            <Download className="h-4 w-4" /> Download CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
