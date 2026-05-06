import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';
import { education } from '../data/content';

export default function Education() {
  return (
    <section id="education" className="py-24 md:py-32 border-t border-rule">
      <div className="max-w-8xl mx-auto px-6 md:px-12">
        <SectionHeader number="04" label="Education" title="Where I'm studying." />
        <div className="space-y-10">
          {education.map((e, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6 }}
              className="grid md:grid-cols-12 gap-6 md:gap-10 border-t border-rule pt-8"
            >
              <div className="md:col-span-3">
                <p className="font-mono text-[11px] tracking-wider text-ink/50 uppercase">{e.period}</p>
                <p className="text-xs text-ink/40 mt-1">{e.location}</p>
              </div>
              <div className="md:col-span-9">
                <h3 className="font-serif text-2xl md:text-3xl text-ink">{e.school}</h3>
                <p className="mt-2 italic text-ink/70">
                  {e.degree} <span className="text-cobalt-700 not-italic">· {e.detail}</span>
                </p>
                <div className="mt-6">
                  <p className="font-mono text-[10px] tracking-[0.2em] text-ink/40 uppercase mb-3">
                    Relevant coursework
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {e.courses.map((c) => (
                      <span
                        key={c}
                        className="text-sm border border-rule px-3 py-1 rounded-full text-ink/70 hover:border-cobalt-700 hover:text-cobalt-700 transition"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
