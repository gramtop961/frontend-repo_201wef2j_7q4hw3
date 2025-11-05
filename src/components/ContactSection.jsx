import React, { useState } from 'react';
import { Mail, Phone, Calendar, Github, Linkedin, Instagram } from 'lucide-react';

const ContactSection = () => {
  const [status, setStatus] = useState('idle');

  const onSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Fallback approach: open mail client and also show success UI
    const name = encodeURIComponent(data.get('name'));
    const email = encodeURIComponent(data.get('email'));
    const message = encodeURIComponent(data.get('message'));

    const subject = encodeURIComponent('New inquiry via aryan.dev');
    const body = `From: ${name} <${email}>\n\n${message}`;

    setStatus('sending');
    window.location.href = `mailto:aryan@example.com?subject=${subject}&body=${encodeURIComponent(body)}`;

    setTimeout(() => {
      setStatus('sent');
      form.reset();
    }, 600);
  };

  return (
    <section id="contact" className="relative mx-auto max-w-6xl scroll-mt-24 px-6 py-20">
      <div className="mb-10">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">Let’s build something</h2>
        <p className="mt-2 max-w-2xl text-gray-600 dark:text-gray-300">
          Looking for a fast, modern MVP or help on an AI project? I’m available for freelance work and collabs.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <form onSubmit={onSubmit} className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-white/10 dark:bg-white/5">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">Name</label>
              <input
                name="name"
                required
                className="mt-1 w-full rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm outline-none transition placeholder:text-gray-400 focus:border-sky-400 focus:ring-2 focus:ring-sky-200 dark:border-white/10 dark:bg-white/5 dark:text-white"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">Email</label>
              <input
                type="email"
                name="email"
                required
                className="mt-1 w-full rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm outline-none transition placeholder:text-gray-400 focus:border-sky-400 focus:ring-2 focus:ring-sky-200 dark:border-white/10 dark:bg-white/5 dark:text-white"
                placeholder="name@email.com"
              />
            </div>
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">Message</label>
            <textarea
              name="message"
              rows="5"
              required
              className="mt-1 w-full rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm outline-none transition placeholder:text-gray-400 focus:border-sky-400 focus:ring-2 focus:ring-sky-200 dark:border-white/10 dark:bg-white/5 dark:text-white"
              placeholder="Tell me about your project..."
            />
          </div>

          <div className="mt-6 flex items-center gap-3">
            <button
              type="submit"
              disabled={status === 'sending'}
              className="inline-flex items-center gap-2 rounded-xl bg-sky-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/25 transition hover:bg-sky-400 disabled:opacity-60"
            >
              {status === 'sent' ? 'Message Sent' : status === 'sending' ? 'Sending…' : 'Send Message'}
            </button>
            <a
              href="https://calendly.com/aryan/30min"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-gray-900/5 px-5 py-3 text-sm font-semibold text-gray-900 ring-1 ring-gray-900/10 transition hover:bg-gray-900/10 dark:bg-white/5 dark:text-white dark:ring-white/10 dark:hover:bg-white/10"
            >
              <Calendar className="h-4 w-4" /> Book a Call
            </a>
          </div>

          {status === 'sent' && (
            <p className="mt-3 text-sm text-emerald-600 dark:text-emerald-400">Thanks! I’ll reply within 24 hours.</p>
          )}
        </form>

        <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-white/10 dark:bg-white/5">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Prefer email?</h3>
          <a
            href="mailto:aryan@example.com"
            className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-sky-600 hover:underline dark:text-sky-400"
          >
            <Mail className="h-4 w-4" /> aryan@example.com
          </a>
          <p className="mt-6 text-sm font-medium text-gray-900 dark:text-white">Connect</p>
          <div className="mt-2 flex items-center gap-3">
            <a href="https://github.com/aryan" target="_blank" rel="noreferrer" className="rounded-lg p-2 ring-1 ring-gray-900/10 transition hover:bg-gray-900/5 dark:ring-white/10 dark:hover:bg-white/10">
              <Github className="h-5 w-5 text-gray-700 dark:text-gray-200" />
            </a>
            <a href="https://linkedin.com/in/aryan" target="_blank" rel="noreferrer" className="rounded-lg p-2 ring-1 ring-gray-900/10 transition hover:bg-gray-900/5 dark:ring-white/10 dark:hover:bg-white/10">
              <Linkedin className="h-5 w-5 text-gray-700 dark:text-gray-200" />
            </a>
            <a href="https://instagram.com/aryan" target="_blank" rel="noreferrer" className="rounded-lg p-2 ring-1 ring-gray-900/10 transition hover:bg-gray-900/5 dark:ring-white/10 dark:hover:bg-white/10">
              <Instagram className="h-5 w-5 text-gray-700 dark:text-gray-200" />
            </a>
          </div>
          <div className="mt-6 text-sm text-gray-600 dark:text-gray-300">
            <p className="font-medium text-gray-900 dark:text-white">Availability</p>
            <p>Part-time freelance (evenings & weekends). Open to internships.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
