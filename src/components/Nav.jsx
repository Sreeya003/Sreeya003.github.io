import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { navLinks, personal } from '../data/content';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    handler();
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-paper/85 backdrop-blur border-b border-rule' : 'bg-transparent'
      }`}
    >
      <div className="max-w-8xl mx-auto px-6 md:px-12 py-5 flex items-center justify-between">
        <a href="#top" className="font-serif text-lg tracking-tight">
          <span className="text-cobalt-700 italic">S</span>reeya<span className="text-cobalt-700">.</span>
        </a>
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className="group text-sm tracking-wide text-ink/70 hover:text-cobalt-700 transition"
            >
              <span className="text-cobalt-700/60 mr-1.5 font-mono text-xs">{l.number}</span>
              {l.label}
            </a>
          ))}
          <a
            href={personal.resume}
            target="_blank"
            rel="noreferrer"
            className="text-sm tracking-wide border border-cobalt-700 text-cobalt-700 px-4 py-1.5 rounded-full hover:bg-cobalt-700 hover:text-white transition"
          >
            Resume
          </a>
        </nav>
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-ink p-2"
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
            <path d={open ? 'M6 6L18 18M6 18L18 6' : 'M4 7H20M4 12H20M4 17H20'} />
          </svg>
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-paper border-t border-rule overflow-hidden"
          >
            <div className="px-6 py-4 space-y-3">
              {navLinks.map((l) => (
                <a
                  key={l.id}
                  href={`#${l.id}`}
                  onClick={() => setOpen(false)}
                  className="block text-sm py-1"
                >
                  <span className="text-cobalt-700/60 mr-2 font-mono text-xs">{l.number}</span>
                  {l.label}
                </a>
              ))}
              <a
                href={personal.resume}
                target="_blank"
                rel="noreferrer"
                className="block text-sm text-cobalt-700 pt-3 border-t border-rule"
              >
                Resume ↗
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
