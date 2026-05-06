import { motion } from 'framer-motion';
import { FaLinkedinIn, FaGithub, FaMedium } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { personal } from '../data/content';

export default function Hero() {
  return (
    <section id="top" className="relative pt-36 md:pt-44 pb-24 md:pb-32 overflow-hidden">
      <div className="max-w-8xl mx-auto px-6 md:px-12 grid md:grid-cols-12 gap-12 md:gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="md:col-span-7 order-2 md:order-1"
        >
          <p className="font-mono text-[13px] font-medium tracking-[0.25em] text-cobalt-700 uppercase mb-6">
            00 — Introduction
          </p>
          <h1 className="font-serif font-light text-5xl md:text-7xl lg:text-[5.5rem] leading-[0.95] text-balance">
            Hi, I'm <span className="italic text-cobalt-700">Sreeya</span>.
            <br />
            I turn data into <span className="italic text-cobalt-700">decisions</span>.
          </h1>
          <p className="mt-8 max-w-xl text-base md:text-lg text-ink/70 text-pretty leading-relaxed">
            Data analyst and applied statistics graduate student at UT Arlington. I build classification models, dashboards, and lightweight automations that turn messy inputs into measurable outcomes.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="bg-cobalt-700 text-white px-6 py-3 rounded-full text-sm tracking-wide hover:bg-cobalt-900 transition shadow-[0_8px_24px_-12px_rgba(29,78,216,0.6)]"
            >
              Get in touch
            </a>
            <a
              href={personal.resume}
              target="_blank"
              rel="noreferrer"
              className="border border-ink/20 px-6 py-3 rounded-full text-sm tracking-wide hover:border-cobalt-700 hover:text-cobalt-700 transition"
            >
              Download CV ↓
            </a>
          </div>
          <div className="mt-10 flex items-center gap-5 text-ink/50">
            <SocialIcon href={personal.linkedin} label="LinkedIn"><FaLinkedinIn size={17} /></SocialIcon>
            <SocialIcon href={personal.github} label="GitHub"><FaGithub size={17} /></SocialIcon>
            <SocialIcon href={personal.medium} label="Medium"><FaMedium size={17} /></SocialIcon>
            <SocialIcon href={`mailto:${personal.email}`} label="Email"><HiOutlineMail size={19} /></SocialIcon>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
          className="md:col-span-5 order-1 md:order-2"
        >
          <div className="relative w-64 h-72 sm:w-80 sm:h-96 md:w-full md:h-[500px] mx-auto">
            <div className="absolute inset-0 bg-cobalt-700/10 translate-x-4 translate-y-4 rounded-sm" aria-hidden />
            <div className="absolute inset-0 border-2 border-cobalt-700 -translate-x-3 -translate-y-3 rounded-sm" aria-hidden />
            <img
              src={personal.photo}
              alt="Sreeya Chandrapati"
              className="relative w-full h-full object-cover rounded-sm hover:scale-[1.02] transition-transform duration-700"
            />
            <div className="absolute -bottom-4 -right-4 bg-paper border border-rule px-4 py-2 font-mono text-[10px] tracking-[0.2em] uppercase text-ink/60 hidden md:block">
              Arlington · TX
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-ink/40"
      >
        <span className="font-mono text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-8 bg-ink/30"
        />
      </motion.div>
    </section>
  );
}

function SocialIcon({ href, label, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="hover:text-cobalt-700 hover:-translate-y-0.5 transition-all"
    >
      {children}
    </a>
  );
}
