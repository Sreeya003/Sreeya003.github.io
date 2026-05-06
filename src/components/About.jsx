import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';
import { summary, personal } from '../data/content';

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 border-t border-rule">
      <div className="max-w-8xl mx-auto px-6 md:px-12">
        <SectionHeader number="01" label="About" title="A short story." />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-12 gap-10"
        >
          <div className="md:col-span-7 md:col-start-2 space-y-5 text-base md:text-lg leading-relaxed text-ink/80 text-pretty">
            <p className="font-serif italic text-2xl md:text-3xl text-ink/90 leading-snug border-l-2 border-cobalt-700 pl-5">
              {summary}
            </p>
            <p>
              Currently pursuing my <span className="text-cobalt-700">M.S. in Applied Statistics &amp; Data Science</span> at UT Arlington (CGPA 4.0) and supporting <span className="font-medium">DATA 3441 — Stats for Data Science 1</span> as a teaching assistant. I spend my research hours with the Department of Physics, working on plasma-energy correlations using NASA THEMIS and MMS data.
            </p>
            <p>
              When I'm not modeling, I'm probably writing on{' '}
              <a href={personal.medium} target="_blank" rel="noreferrer" className="text-cobalt-700 underline-offset-4 hover:underline">Medium</a>, mentoring students, or rebuilding a workflow that someone is still doing by hand.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
