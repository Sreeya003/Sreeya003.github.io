import { motion } from 'framer-motion';
import { skills } from '../data/content';

export default function Skills() {
  return (
    <section className="pb-24 md:pb-32">
      <div className="max-w-8xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-12 gap-10"
        >
          <div className="md:col-span-2 md:col-start-2">
            <p className="font-mono text-[13px] font-medium tracking-[0.25em] text-cobalt-700 uppercase">Toolkit</p>
          </div>
          <div className="md:col-span-9 grid sm:grid-cols-2 gap-x-10 gap-y-8">
            {skills.map((s) => (
              <div key={s.group} className="border-t border-rule pt-4">
                <h3 className="font-serif text-lg text-ink mb-2">{s.group}</h3>
                <p className="text-ink/60 text-sm leading-relaxed">{s.items.join(' · ')}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
