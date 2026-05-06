import { motion } from 'framer-motion';
import { certifications } from '../data/content';

export default function Certifications() {
  return (
    <section className="py-24 md:py-32 border-t border-rule">
      <div className="max-w-8xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-12 gap-10"
        >
          <div className="md:col-span-4">
            <p className="font-mono text-[11px] tracking-[0.3em] text-cobalt-700 uppercase">Certifications</p>
            <h3 className="mt-3 font-serif font-light text-3xl md:text-5xl leading-[1.05] text-balance">
              Always <span className="italic text-cobalt-700">learning</span>.
            </h3>
          </div>
          <div className="md:col-span-8 grid sm:grid-cols-2 gap-x-8 gap-y-3">
            {certifications.map((c, i) => (
              <motion.div
                key={c}
                initial={{ opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                className="flex items-start gap-3 text-ink/75 text-sm border-b border-rule pb-3 hover:text-cobalt-700 transition-colors"
              >
                <span className="text-cobalt-700 font-mono text-[10px] mt-1.5">◆</span>
                <span className="text-pretty">{c}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
