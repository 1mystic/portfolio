import { useState, useEffect } from 'react';
import { useScrollSpy } from '@/hooks/useScrollSpy';

const sections = [
  { id: 'hero',        label: '00', name: 'Home',           sub: 'Atharv Khare' },
  { id: 'process',     label: '01', name: 'How I Work',     sub: 'Workflow & process' },
  { id: 'skills',      label: '02', name: 'Skills & Stack', sub: 'Tech & tools' },
  { id: 'projects',    label: '03', name: 'Projects',       sub: '19 projects' },
  { id: 'writing',     label: '04', name: 'Writing',        sub: 'Articles & deep dives' },
  { id: 'experiments', label: '05', name: 'Research',       sub: 'Papers & achievements' },
];

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const activeId = useScrollSpy(sections.map((s) => s.id));

  const activeSection = sections.find((s) => s.id === activeId) ?? sections[0];

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  const navigate = (id: string) => {
    setOpen(false);
    // Small delay so drawer closes before scrolling
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }, 280);
  };

  return (
    <>
      {/* ── Floating trigger button ─────────────────────────────── */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Toggle navigation"
        className={`
          fixed bottom-6 right-5 z-[60]
          lg:hidden
          flex items-center gap-2.5
          px-4 py-3 rounded-full
          border-2 transition-all duration-300
          ${open
            ? 'border-gold/70 bg-[hsl(0_0%_8%)] text-gold scale-95'
            : 'border-gold/40 bg-[hsl(0_0%_9%)] text-gold mobile-nav-glow'
          }
        `}
      >
        {/* Animated hamburger / close */}
        <div className="relative w-4 h-3.5 flex flex-col justify-between">
          <span className={`block h-px w-full bg-current rounded transition-all duration-300 origin-center ${open ? 'rotate-45 translate-y-[6px]' : ''}`} />
          <span className={`block h-px bg-current rounded transition-all duration-300 ${open ? 'w-0 opacity-0' : 'w-3/4'}`} />
          <span className={`block h-px w-full bg-current rounded transition-all duration-300 origin-center ${open ? '-rotate-45 -translate-y-[8px]' : ''}`} />
        </div>

        {/* Current section indicator */}
        <span className="font-mono text-[11px] text-gold">
          {activeSection.label}
        </span>
      </button>

      {/* ── Backdrop ────────────────────────────────────────────── */}
      <div
        onClick={() => setOpen(false)}
        className={`
          fixed inset-0 z-[55] lg:hidden
          bg-black/70 backdrop-blur-sm
          transition-opacity duration-300
          ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
        `}
      />

      {/* ── Drawer ──────────────────────────────────────────────── */}
      <aside
        className={`
          fixed top-0 left-0 h-screen z-[58] lg:hidden
          w-72
          bg-[hsl(0_0%_7%)] border-r border-border
          flex flex-col
          transition-transform duration-300 ease-out
          ${open ? 'translate-x-0' : '-translate-x-full'}
          shadow-[4px_0_40px_rgba(0,0,0,0.6)]
        `}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 pt-8 pb-6 border-b border-border">
          <div>
            <p className="font-mono text-xs text-gold/60 tracking-[0.2em] uppercase">Portfolio</p>
            <p className="text-xl font-bold text-gold mt-0.5" style={{ fontFamily: 'Playfair Display, serif' }}>
              Atharv Khare
            </p>
            <p className="text-xs text-muted-foreground mt-0.5">BS Data Science · IIT Madras</p>
          </div>
        </div>

        {/* Section links */}
        <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
          {sections.map((s) => {
            const active = activeId === s.id;
            return (
              <button
                key={s.id}
                onClick={() => navigate(s.id)}
                className={`
                  w-full flex items-center gap-4 px-3 py-3.5 rounded-lg
                  text-left transition-all duration-200
                  ${active
                    ? 'bg-gold/10 border border-gold/30'
                    : 'border border-transparent hover:bg-[hsl(0_0%_12%)] hover:border-border'
                  }
                `}
              >
                {/* Number */}
                <span
                  className={`font-mono text-xs shrink-0 w-7 transition-colors ${
                    active ? 'text-gold' : 'text-muted-foreground/60'
                  }`}
                >
                  {s.label}
                </span>

                {/* Active bar */}
                <div
                  className={`w-0.5 h-8 rounded-full shrink-0 transition-all duration-300 ${
                    active ? 'bg-gold' : 'bg-transparent'
                  }`}
                />

                {/* Name + sub */}
                <div className="min-w-0">
                  <p
                    className={`text-sm font-medium transition-colors ${
                      active ? 'text-gold' : 'text-foreground'
                    }`}
                  >
                    {s.name}
                  </p>
                  <p className="text-xs text-muted-foreground/60 truncate mt-0.5">{s.sub}</p>
                </div>

                {/* Active glow dot */}
                {active && (
                  <div className="ml-auto w-1.5 h-1.5 rounded-full bg-gold shadow-[0_0_6px_hsl(40_45%_55%/0.8)] shrink-0" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Footer strip */}
        <div className="px-6 py-5 border-t border-border">
          <p className="text-xs text-muted-foreground/40 font-mono">CGPA 9.01 · atharvk.me</p>
          <div className="flex gap-4 mt-3">
            {[
              { label: 'GitHub',   href: 'https://github.com/atharvkhare' },
              { label: 'LinkedIn', href: 'https://linkedin.com/in/atharvkhare' },
              { label: 'Substack', href: 'https://atharvkhare.substack.com' },
            ].map((l) => (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-muted-foreground/50 hover:text-gold transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </aside>
    </>
  );
}
