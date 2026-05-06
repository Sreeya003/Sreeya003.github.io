import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';
import { leadership } from '../data/content';

export default function Leadership() {
  return (
    <section id="leadership" className="py-24 md:py-32 border-t border-rule">
      <div className="max-w-8xl mx-auto px-6 md:px-12">
        <SectionHeader number="05" label="Leadership" title="Beyond the data." />
        <div className="space-y-10">
          {leadership.map((l, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6 }}
              className="grid md:grid-cols-12 gap-6 md:gap-10 border-t border-rule pt-8"
            >
              <div className="md:col-span-3">
                <p className="font-mono text-[11px] tracking-wider text-ink/50 uppercase">{l.period}</p>
                <p className="text-xs text-ink/40 mt-1">{l.location}</p>
              </div>
              <div className="md:col-span-9">
                <h3 className="font-serif text-2xl md:text-3xl">{l.role}</h3>
                <p className="italic text-ink/70 mt-1">{l.org}</p>
                <ul className="mt-5 space-y-2.5 text-ink/70 leading-relaxed">
                  {l.bullets.map((b, j) => (
                    <li key={j} className="flex gap-3 text-pretty">
                      <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-cobalt-700 flex-shrink-0" aria-hidden />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
