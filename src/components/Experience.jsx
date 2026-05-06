import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';
import { experience } from '../data/content';

export default function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32 border-t border-rule">
      <div className="max-w-8xl mx-auto px-6 md:px-12">
        <SectionHeader number="02" label="Experience" title="Where I've worked." />
        <div className="space-y-12 md:space-y-16">
          {experience.map((job, i) => (
            <motion.article
              key={`${job.company}-${i}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="grid md:grid-cols-12 gap-6 md:gap-10 group border-t border-rule pt-8"
            >
              <div className="md:col-span-3">
                <p className="font-mono text-[11px] tracking-wider text-ink/50 uppercase">{job.period}</p>
                <p className="text-xs text-ink/40 mt-1">{job.location}</p>
              </div>
              <div className="md:col-span-9">
                <h3 className="font-serif text-2xl md:text-3xl text-ink leading-tight">
                  {job.role}{' '}
                  <span className="text-cobalt-700">·</span>{' '}
                  <span className="italic font-light">{job.company}</span>
                </h3>
                <ul className="mt-5 space-y-2.5 text-ink/70 leading-relaxed">
                  {job.bullets.map((b, j) => (
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
