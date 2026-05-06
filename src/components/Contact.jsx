import { motion } from 'framer-motion';
import { FaLinkedinIn, FaGithub, FaMedium } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { personal } from '../data/content';

export default function Contact() {
  return (
    <section id="contact" className="py-32 md:py-40 border-t border-rule">
      <div className="max-w-8xl mx-auto px-6 md:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
        >
          <p className="font-mono text-[11px] tracking-[0.3em] text-cobalt-700 uppercase">06 — Contact</p>
          <h2 className="mt-6 font-serif font-light text-5xl md:text-7xl lg:text-8xl leading-[0.95] text-balance">
            Let's <span className="italic text-cobalt-700">connect</span>.
          </h2>
          <p className="mt-8 max-w-xl mx-auto text-ink/60 text-pretty leading-relaxed">
            Recruiting for a data role, leading research that needs analytical hands, or just want to swap notes on data science — my inbox is open.
          </p>
          <a
            href={`mailto:${personal.email}`}
            className="mt-12 inline-block font-serif italic text-2xl md:text-4xl text-cobalt-700 border-b-2 border-cobalt-700/30 hover:border-cobalt-700 transition pb-1 break-all"
          >
            {personal.email}
          </a>
          <div className="mt-12 flex items-center justify-center gap-4 md:gap-6">
            <SocialBtn href={personal.linkedin} label="LinkedIn"><FaLinkedinIn /></SocialBtn>
            <SocialBtn href={personal.github} label="GitHub"><FaGithub /></SocialBtn>
            <SocialBtn href={personal.medium} label="Medium"><FaMedium /></SocialBtn>
            <SocialBtn href={`mailto:${personal.email}`} label="Email"><HiOutlineMail /></SocialBtn>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function SocialBtn({ href, label, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="w-12 h-12 grid place-items-center border border-rule rounded-full text-ink/60 hover:border-cobalt-700 hover:text-cobalt-700 hover:-translate-y-0.5 transition-all"
    >
      {children}
    </a>
  );
}
