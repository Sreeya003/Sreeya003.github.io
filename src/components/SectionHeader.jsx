import { motion } from 'framer-motion';

export default function SectionHeader({ number, label, title, kicker }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6 }}
      className="mb-12 md:mb-16"
    >
      <p className="font-mono text-[13px] font-medium tracking-[0.25em] text-cobalt-700 uppercase">
        {number} — {label}
      </p>
      <div className="mt-4 flex items-end justify-between gap-6">
        <h2 className="font-serif font-light text-4xl md:text-5xl lg:text-6xl text-ink leading-tight text-balance">
          {title}
        </h2>
        <div className="flex-1 h-px bg-rule mb-3" />
      </div>
      {kicker && <p className="mt-4 max-w-2xl text-ink/60 text-pretty leading-relaxed">{kicker}</p>}
    </motion.div>
  );
}
