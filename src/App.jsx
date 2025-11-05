import React, { useEffect, useState } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import { Moon, Sun } from 'lucide-react';

const App = () => {
  const [dark, setDark] = useState(() => {
    if (typeof window === 'undefined') return true;
    const saved = localStorage.getItem('theme');
    if (saved) return saved === 'dark';
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [dark]);

  useEffect(() => {
    // Lightweight analytics: Plausible (replace domain if deploying)
    const s = document.createElement('script');
    s.defer = true;
    s.setAttribute('data-domain', 'aryan.dev');
    s.src = 'https://plausible.io/js/script.js';
    document.body.appendChild(s);
    return () => {
      document.body.removeChild(s);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900 antialiased transition-colors dark:bg-[#0b0e14] dark:text-gray-100">
      <header className="sticky top-0 z-20 mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-[#0b0e14]/60">
        <a href="#home" className="font-semibold tracking-tight">Aryan</a>
        <nav className="hidden gap-6 text-sm sm:flex">
          <a href="#about" className="text-gray-600 transition hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">About</a>
          <a href="#work" className="text-gray-600 transition hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">Work</a>
          <a href="#contact" className="text-gray-600 transition hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">Contact</a>
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden rounded-xl bg-gray-900 px-4 py-2 text-xs font-semibold text-white transition hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200 sm:inline"
          >
            Hire Me
          </a>
          <button
            aria-label="Toggle dark mode"
            onClick={() => setDark((d) => !d)}
            className="rounded-xl ring-1 ring-gray-900/10 p-2 transition hover:bg-gray-900/5 dark:ring-white/10 dark:hover:bg-white/10"
          >
            {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 pb-24">
        <Hero />
        <About />
        <ProjectsSection />
        <ContactSection />
      </main>

      <footer className="border-t border-gray-200 py-8 text-center text-sm text-gray-600 dark:border-white/10 dark:text-gray-400">
        <p>
          © {new Date().getFullYear()} Aryan. Built with React, Tailwind, and a dash of ambition.
        </p>
      </footer>
    </div>
  );
};

export default App;
