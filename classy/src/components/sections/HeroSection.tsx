import { useCountUp } from '@/hooks/useCountUp';
import { ArrowDown, GraduationCap, Trophy } from 'lucide-react';

const stats = [
  { label: 'CGPA', value: 9, suffix: '.01', prefix: '' },
  { label: 'Projects', value: 15, suffix: '+', prefix: '' },
  { label: 'Certifications', value: 5, suffix: '+', prefix: '' },
  { label: 'Hackathon Wins', value: 1, suffix: '🏆', prefix: '' },
];

function StatItem({ label, value, suffix, prefix }: { label: string; value: number; suffix: string; prefix: string }) {
  const { count, ref } = useCountUp(value, 2000);
  return (
    <div ref={ref} className="text-center">
      <div className="text-3xl md:text-4xl font-bold text-gold font-mono">
        {prefix}{count}{suffix}
      </div>
      <div className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">{label}</div>
    </div>
  );
}

export default function HeroSection() {
  return (
    <section id="hero" className="min-h-screen flex flex-col items-center justify-center px-6 relative">
      {/* Badges */}
      <div className="flex gap-3 mb-8 flex-wrap justify-center">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/30 bg-gold/5 text-gold text-sm hover:bg-gold/10 transition-colors cursor-pointer">
          <GraduationCap size={14} />
          IIT Madras · BS Data Science
        </span>
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-surface text-muted-foreground text-sm hover:border-gold/30 transition-colors cursor-pointer">
          <Trophy size={14} />
          Open to Collaborate
        </span>
      </div>

      {/* Name */}
      <p className="text-sm font-mono text-gold/60 uppercase tracking-[0.3em] mb-4">Atharv Khare</p>

      {/* Title */}
      <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-center leading-tight mb-6">
        Building the Future
        <br />
        with <span className="text-gold">AI & Data</span>
      </h1>

      {/* Subtitle */}
      <p className="text-lg md:text-xl text-muted-foreground text-center max-w-2xl mb-12 leading-relaxed">
        Data Scientist exploring{' '}
        <span className="text-gold font-medium">machine learning</span>,{' '}
        <span className="text-gold font-medium">full-stack development</span>, and{' '}
        <span className="text-gold font-medium">AI research</span>, one project at a time.
      </p>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 mb-16">
        {stats.map((s) => (
          <StatItem key={s.label} {...s} />
        ))}
      </div>

      {/* CTA */}
      <div className="flex flex-wrap items-center justify-center gap-4">
        <button
          onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          className="group flex items-center gap-2 px-6 py-3 rounded-full bg-gold text-black font-medium hover:bg-gold/90 transition-all duration-300"
        >
          View My Work
        </button>
        <a
          href="https://atharvk.me"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2 px-6 py-3 rounded-full border border-gold/40 text-gold hover:bg-gold/10 transition-all duration-300"
        >
          Download CV
          <ArrowDown size={16} className="group-hover:translate-y-1 transition-transform" />
        </a>
      </div>

      {/* Background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gold/[0.03] blur-[120px] pointer-events-none" />
    </section>
  );
}
