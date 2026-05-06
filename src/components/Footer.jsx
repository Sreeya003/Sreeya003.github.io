import { personal } from '../data/content';

export default function Footer() {
  return (
    <footer className="border-t border-rule py-10">
      <div className="max-w-8xl mx-auto px-6 md:px-12 flex flex-col md:flex-row gap-3 items-center justify-between text-xs text-ink/40">
        <p>
          © {new Date().getFullYear()} {personal.shortName}. Built with React, Vite, and Tailwind CSS.
        </p>
        <p className="font-mono tracking-wider">{personal.location.toUpperCase()}</p>
      </div>
    </footer>
  );
}
