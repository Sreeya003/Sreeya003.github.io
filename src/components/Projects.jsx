import { motion } from 'framer-motion';
import {
  FaGithub, FaAtom, FaPaw, FaBuilding, FaBicycle,
  FaChartLine, FaHeartbeat, FaFlask, FaSmog,
} from 'react-icons/fa';
import SectionHeader from './SectionHeader';
import { projects } from '../data/content';

const iconMap = {
  plasma: FaAtom,
  paw: FaPaw,
  building: FaBuilding,
  bike: FaBicycle,
  liver: FaHeartbeat,
  finance: FaChartLine,
  heart: FaHeartbeat,
  fog: FaSmog,
  pulse: FaChartLine,
  flask: FaFlask,
};

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24 md:py-32 border-t border-rule">
      <div className="max-w-8xl mx-auto px-6 md:px-12">
        <SectionHeader
          number="03"
          label="Projects"
          title="Selected work."
          kicker="Research + applied data work — from clinical classification and bankruptcy prediction to space-plasma analysis. Click any card for the GitHub repo."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {featured.map((p, i) => (
            <ProjectCard key={p.title} p={p} i={i} />
          ))}
        </div>

        <div className="mt-20 md:mt-24">
          <div className="flex items-end justify-between gap-6 mb-8">
            <h3 className="font-serif text-2xl md:text-3xl">Other notable projects</h3>
            <div className="flex-1 h-px bg-rule mb-3" />
          </div>
          <ul className="divide-y divide-rule">
            {others.map((p, i) => (
              <OtherProjectRow key={p.title} p={p} i={i} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ p, i }) {
  const Icon = iconMap[p.icon] || FaAtom;
  const Card = ({ children }) =>
    p.repo ? (
      <a href={p.repo} target="_blank" rel="noreferrer" className="block h-full">
        {children}
      </a>
    ) : (
      <div className="h-full">{children}</div>
    );

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: (i % 3) * 0.07 }}
      className="group h-full"
    >
      <Card>
        <div className="h-full bg-white border border-rule p-6 md:p-7 hover:border-cobalt-700/40 hover:shadow-[0_24px_60px_-30px_rgba(29,78,216,0.35)] hover:-translate-y-1 transition-all duration-300 flex flex-col">
          <div className="flex items-start justify-between mb-6">
            <div className="w-14 h-14 bg-cobalt-50 text-cobalt-700 grid place-items-center rounded-sm group-hover:bg-cobalt-700 group-hover:text-white transition-colors">
              <Icon size={22} />
            </div>
            {p.repo && (
              <span className="text-ink/30 group-hover:text-cobalt-700 transition" aria-label="GitHub">
                <FaGithub size={18} />
              </span>
            )}
            {!p.repo && (
              <span className="font-mono text-[9px] tracking-[0.2em] text-cobalt-700/70 uppercase border border-cobalt-700/30 px-2 py-1 rounded-sm">
                Research
              </span>
            )}
          </div>
          <p className="font-mono text-[10px] tracking-[0.2em] text-ink/40 uppercase">{p.period}</p>
          <h4 className="mt-2 font-serif text-xl md:text-2xl text-ink leading-tight text-balance group-hover:text-cobalt-700 transition-colors">
            {p.title}
          </h4>
          <p className="mt-3 text-ink/70 text-sm leading-relaxed text-pretty flex-grow">{p.summary}</p>
          <div className="mt-5 flex flex-wrap gap-1.5">
            {p.tags.map((t) => (
              <span
                key={t}
                className="font-mono text-[10px] tracking-wider px-2 py-0.5 bg-cobalt-50 text-cobalt-700 rounded-sm"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </Card>
    </motion.article>
  );
}

function OtherProjectRow({ p, i }) {
  const Row = ({ children }) =>
    p.repo ? (
      <a href={p.repo} target="_blank" rel="noreferrer" className="block">
        {children}
      </a>
    ) : (
      <div>{children}</div>
    );

  return (
    <motion.li
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: i * 0.04 }}
    >
      <Row>
        <div className="grid grid-cols-12 gap-4 py-5 px-2 hover:bg-cobalt-50/40 transition-colors group items-baseline">
          <p className="col-span-12 md:col-span-2 font-mono text-[10px] tracking-wider text-ink/40 uppercase">
            {p.period}
          </p>
          <div className="col-span-12 md:col-span-7">
            <h5 className="font-serif text-lg md:text-xl text-ink group-hover:text-cobalt-700 transition-colors text-balance">
              {p.title}
            </h5>
            <p className="text-sm text-ink/60 mt-1 text-pretty">{p.summary}</p>
          </div>
          <div className="col-span-10 md:col-span-2 flex flex-wrap gap-1.5">
            {p.tags.slice(0, 2).map((t) => (
              <span
                key={t}
                className="font-mono text-[9px] tracking-wider px-1.5 py-0.5 text-cobalt-700/70"
              >
                {t}
              </span>
            ))}
          </div>
          <span className="col-span-2 md:col-span-1 text-right text-cobalt-700/40 group-hover:text-cobalt-700 group-hover:translate-x-1 transition-all">
            ↗
          </span>
        </div>
      </Row>
    </motion.li>
  );
}
